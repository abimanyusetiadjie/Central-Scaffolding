# System Architecture & Implementation Guide (`architecture.md`)

## 1. Tech Stack Overview
* **Core Framework:** Astro v5 (`output: 'static'` / SSG murni).
* **UI Interactive Islands:** React 18 (`@astrojs/react`) — hanya di-*hydrate* menggunakan direktif `client:visible`.
* **Styling:** Tailwind CSS (`@astrojs/tailwind`).
* **Icons:** `lucide-react`.
* **SEO & Indexing:** `@astrojs/sitemap` + Custom JSON-LD Generator (`SchemaLD.astro`).
* **Deployment Target:** Vercel atau Cloudflare Pages (Global Edge CDN).

---

## 2. Directory & File Structure

```text
scaffolding-web/
├── public/
│   ├── robots.txt
│   └── favicon.svg
├── src/
│   ├── assets/                        # Gambar gudang & produk (WebP/AVIF via astro:assets)
│   ├── components/
│   │   ├── seo/
│   │   │   └── SchemaLD.astro         # JSON-LD Structured Data (LocalBusiness, OfferCatalog, FAQPage)
│   │   ├── layout/
│   │   │   ├── Navbar.astro           # Navigasi sticky + Top Utility Bar (0 KB JS)
│   │   │   ├── Footer.astro           # NAP, Google Maps Embed, Links ke halaman /area/[slug]
│   │   │   └── FloatingWA.astro       # Tombol WA melayang di kanan bawah
│   │   ├── sections/
│   │   │   ├── Hero.astro             # Headline H1, CTA, Statistik, Blueprint Spec Card (0 KB JS)
│   │   │   ├── ServiceSplit.astro     # Komparasi 2 Kolom: Sewa vs Jual Beli Baru/Bekas (0 KB JS)
│   │   │   ├── WarehouseProof.astro   # Bento Grid bukti fisik gudang & armada pengiriman (0 KB JS)
│   │   │   └── FaqSection.astro       # Native HTML <details> FAQ (0 KB JS)
│   │   └── islands/                   # React Components (.tsx) - Hydrated on Scroll
│   │       ├── CatalogFilter.tsx      # Filter kategori komponen + tombol WA per item
│   │       └── QuoteCalculator.tsx    # Kalkulator estimasi set + generator pesan WA otomatis
│   ├── data/
│   │   ├── siteConfig.ts              # Data kontak, alamat gudang, nomor WA utama
│   │   ├── products.json              # Data katalog komponen scaffolding
│   │   └── locations.json             # Data kota/kecamatan untuk Programmatic Local SEO
│   ├── layouts/
│   │   └── MainLayout.astro           # HTML wrapper, Meta Tags, OpenGraph, Google Fonts, SchemaLD
│   └── pages/
│       ├── index.astro                # Landing Page Utama
│       └── area/
│           └── [slug].astro           # Dynamic SSG route untuk halaman SEO per wilayah
├── astro.config.mjs
├── tailwind.config.mjs
└── tsconfig.json
```

---

## 3. Island Architecture & Hydration Matrix

| Component | File Type | Hydration Directive | JS Payload | Reason |
| :--- | :--- | :--- | :--- | :--- |
| `MainLayout` & `SchemaLD` | `.astro` | None (Server/Build) | `0 KB` | Murni tag `<head>` dan struktur SEO. |
| `Navbar` & `Footer` | `.astro` | None (Static HTML) | `0 KB` | Navigasi anchor link (`#katalog`, `#kalkulator-sewa`, `#lokasi`). |
| `Hero` | `.astro` | None (Static HTML) | `0 KB` | Menjamin skor LCP (Largest Contentful Paint) < 0.8 detik. |
| `ServiceSplit` | `.astro` | None (Static HTML) | `0 KB` | Informasi statis perbandingan Sewa vs Jual Beli. |
| `CatalogFilter` | `.tsx` | `client:visible` | Lazy Loaded | Butuh state filter kategori (`useState`) dan trigger WA per item. |
| `QuoteCalculator` | `.tsx` | `client:visible` | Lazy Loaded | Butuh kalkulasi *real-time* jumlah set, komponen tambahan, dan *string builder* WA. |
| `WarehouseProof` | `.astro` | None (Static HTML) | `0 KB` | Galeri foto statis teroptimasi. |
| `FaqSection` | `.astro` | None (Static HTML) | `0 KB` | Menggunakan elemen native `<details>` dan `<summary>`. |

---

## 4. Programmatic Local SEO Routing (`src/pages/area/[slug].astro`)
Setiap entri di dalam `src/data/locations.json` akan menghasilkan halaman HTML statis mandiri saat waktu *build*:

```astro
---
// Pola implementasi src/pages/area/[slug].astro
import MainLayout from '../../layouts/MainLayout.astro';
import Hero from '../../components/sections/Hero.astro';
import ServiceSplit from '../../components/sections/ServiceSplit.astro';
import CatalogFilter from '../../components/islands/CatalogFilter';
import QuoteCalculator from '../../components/islands/QuoteCalculator';
import WarehouseProof from '../../components/sections/WarehouseProof.astro';
import FaqSection from '../../components/sections/FaqSection.astro';
import locations from '../../data/locations.json';
import { siteConfig } from '../../data/siteConfig';

export async function getStaticPaths() {
  return locations.map((loc) => ({
    params: { slug: loc.slug },
    props: { locationData: loc },
  }));
}

const { locationData } = Astro.props;
---

<MainLayout city="{locationData.cityName}" description="{locationData.metaDescription}" title="{locationData.metaTitle}">
  <Hero city="{locationData.cityName}" coveredDistricts="{locationData.coveredDistricts}" deliveryEstimate="{locationData.deliveryEstimate}" whatsappNumber="{siteConfig.whatsappNumber}"/>
  <ServiceSplit city="{locationData.cityName}"/>
  <CatalogFilter client:visible whatsappNumber="{siteConfig.whatsappNumber}"/>
  <QuoteCalculator client:visible defaultLocation="{locationData.cityName}" whatsappNumber="{siteConfig.whatsappNumber}"/>
  <WarehouseProof/>
  <FaqSection city="{locationData.cityName}"/>
</MainLayout>
```

---

## 5. Core Reference Code: `QuoteCalculator.tsx` Logic
Rumus konversi standar industri scaffolding Indonesia yang wajib dipertahankan di dalam kalkulator:
* `1 Set Utama` = **2 pcs Main Frame** + **2 pcs Cross Brace** + **4 pcs Joint Pin**.
* Output tombol WhatsApp menggunakan `encodeURIComponent(lines.join('\n'))` dan diarahkan ke `https://wa.me/${whatsappNumber}?text=${encodedMessage}`.