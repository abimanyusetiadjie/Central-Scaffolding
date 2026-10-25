# Antigravity Agent Rules & Engineering Guardrails (`rules.md`)

Anda adalah Principal Frontend & Technical SEO Engineer. Saat membangun, memodifikasi, atau menambahkan fitur pada repositori website scaffolding ini, Anda **WAJIB** mematuhi seluruh aturan arsitektur, SEO, dan kemudahan pengguna (UX usia 45+) di bawah ini.

---

## Rule 1: Strict Astro Zero-JS & Island Discipline
1. **Default ke `.astro`:** Seluruh seksi tata letak, teks informasi, kartu layanan, galeri gudang, FAQ, dan footer **WAJIB** ditulis sebagai komponen `.astro` (0 KB client-side JavaScript).
2. **Pembatasan React (`.tsx`):** Hanya gunakan komponen React untuk fitur interaktif (`CatalogFilter.tsx` dan `QuoteCalculator.tsx`).
3. **Larangan `client:load`:** Jangan pernah menggunakan direktif `client:load` pada komponen React. Selalu gunakan `client:visible`.
4. **Native HTML First:** Untuk fitur seperti Accordion FAQ atau menu mobile, gunakan elemen HTML native (`<details>` dan `<summary>`).

---

## Rule 2: Technical & Local SEO Guardrails
1. **Single H1 Rule:** Setiap halaman (`index.astro` dan `/area/[slug].astro`) wajib memiliki **tepat satu tag `<h1>`** yang memuat kata kunci utama: *"Sewa & Jual Beli Scaffolding Berkualitas di [Nama Wilayah]"*.
2. **Heading Hierarchy:** Jangan pernah melompati urutan heading. Gunakan `<h2>` untuk judul setiap seksi dan `<h3>` untuk nama item produk atau sub-layanan.
3. **JSON-LD Sync:** Setiap kali mengubah data bisnis di `siteConfig.ts` atau pertanyaan di `FaqSection.astro`, pastikan skema JSON-LD di `SchemaLD.astro` tetap sinkron.
4. **Semantic Internal Linking:** Di bagian Footer, pastikan seluruh halaman wilayah dari `src/data/locations.json` di-render sebagai tag `<a href="/area/...">` standar.
5. **Image Optimization:** Seluruh gambar wajib memiliki atribut `alt` bahasa Indonesia yang deskriptif serta dimensi `width` dan `height` eksplisit.

---

## Rule 3: Ramah Usia 45+ & Kemudahan Orang Awam (UX Enforcement)
1. **Latar Terang & Kontras Tinggi:** Gunakan latar belakang terang (`bg-white` dan `bg-slate-50`) dengan teks gelap tegas (`text-slate-900` dan `text-slate-700`). Hindari latar gelap yang menyulitkan mata tua.
2. **Ukuran Teks Besar:** Hindari teks yang terlalu kecil. Gunakan `text-base` (16px) hingga `text-lg` (18px) untuk informasi utama, spesifikasi barang, dan langkah pemesanan.
3. **Bahasa Lugas & Sederhana:** Gunakan bahasa Indonesia sehari-hari yang mudah dipahami mandor, tukang, dan pemilik bangunan. Hindari istilah teknis bahasa Inggris yang membingungkan.
4. **Tombol WhatsApp Jelas:** Gunakan warna hijau (`bg-green-600 hover:bg-green-700 text-white`) dengan ukuran besar dan ikon yang jelas untuk semua tombol konversi WhatsApp.

---

## Rule 4: Code Quality & Dependency Constraints
1. **TypeScript Strictness:** Semua *props* komponen Astro dan React wajib memiliki definisi `interface Props` yang jelas. Hindari penggunaan tipe `any`.
2. **Zero Bloated Dependencies:** Gunakan murni **Tailwind CSS** dan **`lucide-react`**.
3. **Single Source of Truth:** Selalu impor nomor WhatsApp dan alamat gudang dari `src/data/siteConfig.ts`.
4. **WhatsApp Message Formatting:** Seluruh generator link WhatsApp wajib menggunakan format teks tebal/miring standar WhatsApp (`*Teks Tebal*`, `_Teks Miring_`) dan dibungkus dengan `encodeURIComponent()`.
