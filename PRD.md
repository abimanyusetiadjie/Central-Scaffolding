# Product Requirements Document (PRD): Website Marketing & Katalog Scaffolding

## 1. Project Overview
Membangun website *company profile*, katalog produk, dan *lead generation* berkecepatan tinggi untuk bisnis **Sewa (Rental) dan Jual Beli Scaffolding (Baru & Bekas Rekondisi)**. Website ini dirancang khusus untuk mendominasi pencarian organik lokal (Local SEO) di Google, menaikkan prestise/pamor perusahaan di atas kompetitor lokal, dan mengonversi pengunjung menjadi *leads* WhatsApp yang terstruktur.

## 2. Business Objectives & Success Metrics
1. **Dominasi SEO Lokal (Google Page 1):** Meraih peringkat halaman pertama Google untuk kata kunci transaksional seperti *"sewa scaffolding [nama kota]"*, *"jual scaffolding baru bekas [nama kota]"*, dan *"harga sewa perancah besi terdekat"*.
2. **Performa Ekstrem di Lapangan:** Skor Google PageSpeed Insights / Lighthouse **98–100** pada perangkat *Mobile* (waktu muat `< 1 detik` pada jaringan seluler 4G di lokasi proyek).
3. **Peningkatan Pamor (Brand Authority):** Menampilkan identitas perusahaan sebagai **Supplier Tangan Pertama (Punya Gudang & Armada Sendiri)**, bukan calo/makelar, melalui desain bergaya *Swiss Industrial & Architectural Blueprint*.
4. **Konversi WhatsApp Terukur:** Memudahkan mandor, kontraktor, dan pemilik bangunan menghitung kebutuhan set scaffolding dan mengirim rincian pesanan ke WhatsApp admin dalam 1 klik.

## 3. Target Audience (User Personas)
* **Kontraktor & Project Manager:** Mencari vendor dengan stok ribuan set, spesifikasi pipa standar SNI (1.8mm–2.0mm), legalitas/gudang jelas, dan sanggup suplai partai besar.
* **Mandor Lapangan & Kepala Tukang:** Mengakses website dari layar HP di lokasi proyek. Butuh informasi cepat tentang kelengkapan 1 set, harga sewa mingguan/bulanan, ketersediaan komponen tambahan (Catwalk, Jack Base, U-Head, Roda), dan tombol WhatsApp instan.
* **Pemilik Ruko / Rumah (Renovasi Mandiri):** Mencari sewa jumlah kecil (5–20 set) atau beli scaffolding bekas layak pakai dengan panduan perhitungan kebutuhan yang mudah dipahami.

## 4. Core Features & Functional Scope

### 4.1. Hero Section & Trust Indicators (Static - 0 KB JS)
* Headline `H1` dinamis berbasis lokasi target SEO.
* Status ketersediaan stok gudang (*"5.000+ Set Ready di Gudang"*).
* Dual CTA: **Hitung Kebutuhan Set** (scroll ke kalkulator) & **Chat WhatsApp Langsung**.
* Kartu ringkasan spesifikasi standar 1 Set (2 Main Frame, 2 Cross Brace, 4 Joint Pin) bergaya *technical spec-sheet*.

### 4.2. Dual-Track Service Split: Sewa vs. Jual Beli (Static - 0 KB JS)
* **Jalur 01 - Layanan Rental/Sewa:** Penjelasan durasi harian/mingguan/bulanan, prosedur sewa mudah, dan layanan antar-jemput armada sendiri.
* **Jalur 02 - Jual Beli Baru & Bekas Rekondisi:** Penjualan unit baru (cat celup/galvanis), unit bekas rekondisi lulus sortir ketebalan pipa, serta layanan *buyback* (beli kembali scaffolding eks proyek).

### 4.3. Interactive Quote & Material Calculator (React Island - `client:visible`)
* Pilihan skema transaksi: `SEWA`, `BELI BARU`, atau `BELI BEKAS (REKONDISI)`.
* Input *slider* jumlah Set Utama (1–200+ Set) & pilihan tinggi Main Frame (`170 cm` atau `190 cm`).
* Pilihan durasi sewa (khusus mode `SEWA`).
* Input komponen tambahan (*add-ons*): Catwalk, Jack Base, U-Head, dan Roda.
* Input lokasi/kecamatan proyek untuk estimasi ongkos kirim.
* **Live Output Panel:** Menghitung otomatis jumlah batang Main Frame, Cross Brace, dan Joint Pin, lalu men-generate draf pesan WhatsApp terformat rapi saat tombol kirim diklik.

### 4.4. Interactive Component Catalog (React Island - `client:visible`)
* Filter kategori komponen: `Semua`, `Rangka Utama`, `Penyangga & Alas`, `Aksesori & Pijakan`.
* Setiap kartu produk menampilkan: Nama komponen, badge ketersediaan (`SEWA & JUAL`), spesifikasi teknis (*monospace*), dan tombol **"Tanya Stok Item Ini"** yang mengarah ke WhatsApp dengan nama produk terisi otomatis.

### 4.5. Warehouse & Fleet Proof Gallery (Static - 0 KB JS)
* Galeri foto bukti fisik anti-makelar: foto tumpukan stok di gudang sendiri, proses muat barang ke armada truk/pickup toko, pengecekan ketebalan pipa, dan dokumentasi proyek.

### 4.6. Programmatic Local SEO Pages (`/area/[slug]`)
* Halaman pendaratan otomatis untuk setiap kota/kecamatan target (misal: Tangerang, Cipondoh, Cikupa, BSD Serpong, Jakarta Barat, Jakarta Selatan).
* Menyesuaikan tag `<title>`, `<meta description>`, `<h1>`, teks jangkauan pengiriman, dan JSON-LD Schema sesuai nama wilayah.

### 4.7. Native HTML FAQ & Local Maps Footer (Static - 0 KB JS)
* Accordion tanya-jawab menggunakan tag `<details>` dan `<summary>` murni (tanpa beban JS) yang disinkronkan dengan `FAQPage` Schema.
* Sematan Google Maps gudang fisik dan informasi NAP (*Name, Address, Phone*) yang konsisten dengan Google Business Profile.