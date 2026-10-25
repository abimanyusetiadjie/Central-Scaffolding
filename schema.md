# Data Models & SEO Schema Specification (`schema.md`)

Dokumen ini mendefinisikan struktur data JSON, antarmuka TypeScript, dan skema JSON-LD untuk optimasi mesin pencari (SEO).

---

## 1. Business Configuration Schema (`src/data/siteConfig.ts`)
Konfigurasi terpusat agar nomor WhatsApp, nama toko, dan alamat gudang mudah diubah dari satu file.

```typescript
export interface SiteConfig {
  businessName: string;
  tagline: string;
  whatsappNumber: string; // Format: 62812xxxxxxx (tanpa + atau spasi)
  phoneDisplay: string;
  email: string;
  siteUrl: string;
  warehouseAddress: {
    street: string;
    district: string;
    city: string;
    province: string;
    postalCode: string;
    countryCode: string;
    googleMapsEmbedUrl: string;
    coordinates: {
      latitude: number;
      longitude: number;
    };
  };
  operationalHours: string;
  stats: {
    readyStockSets: string;
    pipeThickness: string;
    deliverySla: string;
  };
}
```

---

## 2. Product Catalog Schema (`src/data/products.json`)
Digunakan untuk merender seksi katalog komponen dan filter interaktif.

### TypeScript Interface:
```typescript
export type ProductCategory = 'Rangka Utama' | 'Penyangga & Alas' | 'Aksesori & Pijakan' | 'Pipa & Klem';

export interface ProductItem {
  id: string;
  name: string;
  slug: string;
  category: ProductCategory;
  availability: ('SEWA' | 'JUAL BARU' | 'JUAL BEKAS')[];
  specs: {
    dimensions: string;
    pipeDiameter: string;
    thickness: string;
    weight?: string;
  };
  description: string;
  imageAlt: string;
  isPopular: boolean;
}
```

### Sample Data (`src/data/products.json`):
```json
[
  {
    "id": "mf-170",
    "name": "Main Frame 170 cm",
    "slug": "main-frame-170",
    "category": "Rangka Utama",
    "availability": ["SEWA", "JUAL BARU", "JUAL BEKAS"],
    "specs": {
      "dimensions": "1700 mm x 1200 mm",
      "pipeDiameter": "Ø 42.7 mm",
      "thickness": "1.8 mm - 2.0 mm"
    },
    "description": "Rangka utama perancah tinggi 1.7 meter, cocok untuk pekerjaan plafon, ruko, dan konstruksi gedung standar.",
    "imageAlt": "Sewa dan jual Main Frame Scaffolding 170 cm standar SNI",
    "isPopular": true
  },
  {
    "id": "mf-190",
    "name": "Main Frame 190 cm",
    "slug": "main-frame-190",
    "category": "Rangka Utama",
    "availability": ["SEWA", "JUAL BARU", "JUAL BEKAS"],
    "specs": {
      "dimensions": "1900 mm x 1200 mm",
      "pipeDiameter": "Ø 42.7 mm",
      "thickness": "1.8 mm - 2.0 mm"
    },
    "description": "Rangka utama tinggi 1.9 meter untuk jangkauan vertikal ekstra dan akses leluasa pekerja di bawah dek.",
    "imageAlt": "Sewa dan jual Main Frame Scaffolding 190 cm siap kirim",
    "isPopular": true
  },
  {
    "id": "cb-220",
    "name": "Cross Brace 220 cm / 193 cm",
    "slug": "cross-brace",
    "category": "Rangka Utama",
    "availability": ["SEWA", "JUAL BARU", "JUAL BEKAS"],
    "specs": {
      "dimensions": "Panjang 2200 mm / 1930 mm",
      "pipeDiameter": "Ø 21.7 mm",
      "thickness": "1.8 mm"
    },
    "description": "Besi silangan pengaku antar Main Frame agar struktur perancah kokoh dan tidak goyang.",
    "imageAlt": "Cross Brace silangan scaffolding 220 cm dan 193 cm",
    "isPopular": true
  },
  {
    "id": "jp-std",
    "name": "Joint Pin (Shock / Sambungan)",
    "slug": "joint-pin",
    "category": "Aksesori & Pijakan",
    "availability": ["SEWA", "JUAL BARU", "JUAL BEKAS"],
    "specs": {
      "dimensions": "Panjang 210 mm",
      "pipeDiameter": "Ø 36 mm",
      "thickness": "2.0 mm"
    },
    "description": "Pin penyambung vertikal antar tingkat Main Frame.",
    "imageAlt": "Joint Pin sambungan scaffolding besi tebal",
    "isPopular": false
  },
  {
    "id": "cw-180",
    "name": "Catwalk (Pelat Pijakan Anti-Slip)",
    "slug": "catwalk-scaffolding",
    "category": "Aksesori & Pijakan",
    "availability": ["SEWA", "JUAL BARU", "JUAL BEKAS"],
    "specs": {
      "dimensions": "1829 mm x 500 mm",
      "pipeDiameter": "Pelat Baja Berlubang",
      "thickness": "1.5 mm - 1.8 mm"
    },
    "description": "Pijakan kerja baja berlubang anti-licin dengan kait pengunci aman di kedua ujung.",
    "imageAlt": "Sewa dan jual Catwalk pijakan scaffolding anti-slip",
    "isPopular": true
  },
  {
    "id": "jb-60",
    "name": "Jack Base 60 cm (Ulir Alas)",
    "slug": "jack-base-60cm",
    "category": "Penyangga & Alas",
    "availability": ["SEWA", "JUAL BARU", "JUAL BEKAS"],
    "specs": {
      "dimensions": "Tinggi 600 mm | Pelat 150x150 mm",
      "pipeDiameter": "Ø 32 mm / 34 mm (As Ulir)",
      "thickness": "Pelat 4.5 mm"
    },
    "description": "Kaki penyangga berulir untuk meratakan tinggi scaffolding di permukaan tanah atau lantai yang miring.",
    "imageAlt": "Jack Base scaffolding 60 cm ulir tebal",
    "isPopular": true
  },
  {
    "id": "uh-60",
    "name": "U-Head Jack 60 cm",
    "slug": "u-head-60cm",
    "category": "Penyangga & Alas",
    "availability": ["SEWA", "JUAL BARU", "JUAL BEKAS"],
    "specs": {
      "dimensions": "Tinggi 600 mm | U-Plate 150x100 mm",
      "pipeDiameter": "Ø 32 mm / 34 mm (As Ulir)",
      "thickness": "Pelat 4.5 mm"
    },
    "description": "Penyangga atas berbentuk U untuk menahan balok kayu/besi (surian) pada pengecoran bekisting lantai.",
    "imageAlt": "U-Head scaffolding 60 cm untuk bekisting cor",
    "isPopular": true
  },
  {
    "id": "wh-6",
    "name": "Roda Scaffolding 6 Inch + Rem",
    "slug": "roda-scaffolding-6-inch",
    "category": "Aksesori & Pijakan",
    "availability": ["SEWA", "JUAL BARU"],
    "specs": {
      "dimensions": "Diameter Roda 150 mm (6 Inch)",
      "pipeDiameter": "Tiang Masuk Main Frame",
      "thickness": "Dilengkapi Pengunci Rem (Brake)"
    },
    "description": "Roda castor beban berat dengan tuas pengunci rem untuk mobilitas scaffolding di area indoor/pabrik.",
    "imageAlt": "Sewa roda scaffolding 6 inch dengan pengunci rem",
    "isPopular": false
  }
]
```

---

## 3. Programmatic Local SEO Schema (`src/data/locations.json`)
Digunakan oleh `src/pages/area/[slug].astro` untuk meng-generate halaman spesifik wilayah secara statis.

### TypeScript Interface:
```typescript
export interface TargetLocation {
  slug: string;          // contoh: "sewa-scaffolding-tangerang"
  cityName: string;      // contoh: "Tangerang"
  regionName: string;    // contoh: "Banten"
  coveredDistricts: string[]; // daftar kecamatan untuk keyword long-tail
  deliveryEstimate: string;   // contoh: "2 - 4 Jam (Armada Gudang Cipondoh)"
  metaTitle: string;
  metaDescription: string;
}
```

### Sample Data (`src/data/locations.json`):
```json
[
  {
    "slug": "sewa-scaffolding-tangerang",
    "cityName": "Tangerang",
    "regionName": "Banten",
    "coveredDistricts": ["Cipondoh", "Ciledug", "Karang Tengah", "Karawaci", "Jatiuwung", "Cibodas", "Batuceper"],
    "deliveryEstimate": "1 - 3 Jam (Pengiriman Langsung dari Gudang)",
    "metaTitle": "Sewa & Jual Scaffolding Tangerang | Stok Gudang Siap Kirim",
    "metaDescription": "Pusat sewa rental dan jual beli scaffolding baru & bekas di Tangerang (Cipondoh, Karawaci, Ciledug). Stok ribuan set, pipa tebal SNI, kirim cepat hari ini."
  },
  {
    "slug": "sewa-scaffolding-jakarta-barat",
    "cityName": "Jakarta Barat",
    "regionName": "DKI Jakarta",
    "coveredDistricts": ["Cengkareng", "Kalideres", "Kebon Jeruk", "Kembangan", "Puri Indah", "Grogol", "Daan Mogot"],
    "deliveryEstimate": "2 - 4 Jam via Akses Tol/Daan Mogot",
    "metaTitle": "Sewa & Jual Scaffolding Jakarta Barat | Kirim Cepat Armada Sendiri",
    "metaDescription": "Layanan rental sewa dan jual beli scaffolding baru/bekas untuk proyek di Jakarta Barat (Cengkareng, Kalideres, Kebon Jeruk, Kembangan). Harga tangan pertama."
  },
  {
    "slug": "sewa-scaffolding-bsd-serpong",
    "cityName": "BSD & Serpong",
    "regionName": "Tangerang Selatan",
    "coveredDistricts": ["BSD City", "Serpong", "Alam Sutera", "Gading Serpong", "Bintaro", "Ciputat", "Pamulang"],
    "deliveryEstimate": "2 - 4 Jam ke Lokasi Proyek",
    "metaTitle": "Sewa & Jual Scaffolding BSD Serpong & Tangsel | Stok Lengkap",
    "metaDescription": "Supplier sewa dan jual beli scaffolding perancah besi area BSD, Serpong, Alam Sutera, dan Tangerang Selatan. Main frame, catwalk, jack base lengkap."
  },
  {
    "slug": "sewa-scaffolding-cikupa-balaraja",
    "cityName": "Cikupa & Balaraja",
    "regionName": "Kabupaten Tangerang",
    "coveredDistricts": ["Cikupa", "Balaraja", "Pasar Kemis", "Curug", "Bitung", "Tigaraksa", "Legok"],
    "deliveryEstimate": "2 - 5 Jam (Armada Truk & Pickup)",
    "metaTitle": "Sewa & Jual Scaffolding Cikupa, Curug & Balaraja | Proyek Industri",
    "metaDescription": "Melayani kebutuhan sewa partai besar dan jual beli scaffolding untuk kawasan industri Cikupa, Bitung, Curug, dan Balaraja. Pipa tebal standar K3."
  }
]
```

---

## 4. JSON-LD Structured Data Schema (`SchemaLD.astro`)
Wajib dirender di dalam `<head>` menggunakan `<script type="application/ld+json">`:
1. **`@type: "HomeAndConstructionBusiness"`:** Memuat `name`, `url`, `telephone`, `priceRange`, `address` (`PostalAddress`), `geo` (`GeoCoordinates`), `areaServed` (array kota), dan `openingHoursSpecification`.
2. **`@type: "OfferCatalog"`:** Memuat daftar penawaran utama (Layanan Sewa Scaffolding Set Lengkap & Jual Beli Scaffolding Baru/Bekas).
3. **`@type: "FAQPage"`:** Memuat daftar `Question` dan `AcceptedAnswer` yang identik dengan teks pada komponen FAQ di halaman.