# Design System & UI/UX Specification (`design.md`)

## 1. Aesthetic Direction: "Toko Besi & Bangunan Terang (Ramah Usia 45+ & Pekerja Proyek)"
Website ini dirancang khusus untuk **mandor lapangan, kepala tukang, pemborong, dan pemilik bangunan berusia 45+ tahun** yang sering membuka HP di lokasi proyek di bawah sinar matahari:
* **Latar Terang & Bersih (High Readability):** Dominasi latar putih bersih (`bg-white`) dan abu-abu terang (`bg-slate-50`). Hindari latar hitam gelap pekat atau jaring garis teknis (*wireframe/blueprint*) yang membuat mata tua cepat lelah dan bingung.
* **Ukuran Huruf Besar (Ramah Mata Tua):** Gunakan ukuran teks minimal `16px–18px` (`text-base` hingga `text-lg`) untuk isi penjelasan, dan judul besar yang tegas (`text-2xl` hingga `text-4xl`).
* **Bahasa Proyek Sehari-hari:** Gunakan istilah yang langsung dipahami tukang dan orang awam (contoh: *"Tiang Utama (Main Frame)"*, *"Besi Silangan (Cross Brace)"*, *"Sambungan (Joint Pin)"*, *"Pijakan (Catwalk)"*). Hindari jargon kode bahasa Inggris yang tidak perlu.
* **Sudut Ramah & Akrab:** Gunakan sudut membulat yang akrab seperti aplikasi WhatsApp & Tokopedia (`rounded-xl` atau `rounded-2xl`) dengan batas kartu yang jelas (`border-2 border-slate-200`).

---

## 2. Color Palette (Tailwind CSS Tokens)

| Role | Color Name | Hex Code | Tailwind Class | Usage Rule |
| :--- | :--- | :--- | :--- | :--- |
| **Main Canvas** | Clean White | `#FFFFFF` | `bg-white` | Latar belakang utama agar bersih, terang, dan sangat mudah dibaca. |
| **Secondary Canvas** | Light Warm Slate | `#F8FAFC` | `bg-slate-50` | Latar selang-seling antar bagian agar halaman terlihat rapi. |
| **Highlight Box** | Soft Safety Amber | `#FEF3C7` | `bg-amber-50` | Kotak ringkasan pesanan dan informasi penting dengan `border-amber-400`. |
| **Primary Accent** | Safety Amber | `#F59E0B` | `bg-amber-500` / `bg-amber-400` | Tombol aksi kedua, lencana stok gudang, dan penanda penting. |
| **Conversion CTA** | WhatsApp Green | `#16A34A` | `bg-green-600` hover:`bg-green-700` | **Utama** untuk seluruh tombol pesan/tanya via WhatsApp. |
| **Primary Text** | Deep Slate | `#0F172A` | `text-slate-900` | Teks judul dan isi utama (kontras maksimal di atas latar putih). |
| **Secondary Text** | Readable Slate | `#334155` | `text-slate-700` | Teks penjelasan agar tetap tebal dan jelas bagi usia 45+. |

---

## 3. Typography Rules

1. **Heading Font (`font-display`):** `'Plus Jakarta Sans'` (Weights: `700 Bold`, `800 ExtraBold`)
   * Digunakan pada `H1`, `H2`, `H3`, dan teks tombol utama.
2. **Body Font (`font-sans`):** `'Inter'` (Weights: `400 Regular`, `500 Medium`, `600 SemiBold`, `700 Bold`)
   * Digunakan pada seluruh penjelasan layanan, ukuran barang, dan tanya-jawab dengan ukuran `text-base` (`16px`) hingga `text-lg` (`18px`).
3. **Clear Number Font (`font-mono`):** `'JetBrains Mono'`
   * Hanya digunakan seperlunya untuk memperjelas angka telepon atau angka jumlah barang agar mudah dibaca.

---

## 4. Component-Specific UI Patterns

* **Extra-Large Touch Buttons:**
  Semua tombol WhatsApp, pilihan kategori, dan tombol tambah/kurang (`+` / `-`) wajib berukuran besar (tinggi minimal `48px–56px`, `py-3.5` hingga `py-4`) agar sangat mudah ditekan oleh jari pekerja proyek.
* **Form Pesan Cepat (Tanpa Slider Rumit):**
  Gunakan tombol pilihan jumlah cepat (`5 Set`, `10 Set`, `20 Set`, `50 Set`) dan tombol `-` / `+` besar yang langsung menampilkan berapa biji tiang, silangan, dan sambungan yang didapat.
* **Sticky Floating WhatsApp Button:**
  Pada bagian kanan bawah layar (`fixed bottom-5 right-5 z-50`), tampilkan tombol WhatsApp hijau besar bertuliskan *"Chat WA Gudang"*.
