export interface SiteConfig {
  businessName: string;
  tagline: string;
  whatsappNumber: string; // Format: 62812xxxxxxx (tanpa + atau spasi)
  phone: string; // Format dial telepon: 0812xxxxxxx
  phoneDisplay: string;
  email: string;
  siteUrl: string;
  images: {
    logo: string;
    heroTruck: string;
    warehouseMap: string;
  };
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

export type ProductCategory =
  | 'Rangka Utama'
  | 'Penyangga & Alas'
  | 'Aksesori & Pijakan'
  | 'Pipa & Klem';

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
  imageUrl?: string;
  imageAlt: string;
  isPopular: boolean;
}

export interface TargetLocation {
  slug: string;
  cityName: string;
  regionName: string;
  coveredDistricts: string[];
  deliveryEstimate: string;
  metaTitle: string;
  metaDescription: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export const siteConfig: SiteConfig = {
  businessName: 'Mandor Perkasa Scaffolding',
  tagline: 'Penyedia Sewa & Jual Scaffolding Pipa Baja Standar SNI & K3 — Gudang & Armada Sendiri',
  whatsappNumber: '6281234567890',
  phone: '081234567890',
  phoneDisplay: '0812-3456-7890',
  email: 'logistik@mandorperkasa.co.id',
  siteUrl: 'https://centralscaffolding.co.id',
  images: {
    logo: 'https://lh3.googleusercontent.com/aida/AEtjO1VYskxrFDJGD97z5trWg_PP1e0ZBnkeEGGw9hWJmkNa8w_Q1RvGdE_fbpCgoTOpELrgMttEUKGjk5ssEA5ww42WhGX-FP1Gvloel6xsShHiCjraoHDozrLHlycrfNYQqJaHxYJ8obQjZBRFHR6Qc_ei0FS5G3oeaCuFf2fH4OVrM0FtBlIkCywUX7pLpd0NVJ5Kd7DRZwUh6m2ravT1KYkh9Dp2PYgxcCPkLM-TQFNYPrNJYlupp9EriUc',
    heroTruck: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAG94Vx59-GoAKu9IfHrYSVHzWuoFJCpTJrOwIDv5NvXUSmZzkxsCJgu1Yb1rdj2U7xQtj9X3ISNUbkFzAQPQt9kvDt_yXbkQGjw49cWqIK6W7l7jQ_gLxjZ_55gmROPaV3jn41TKlpCr4xvK2N4MpfRbaA2RZXjhF_I5EboHjvLizi0rgZTsKsdWQxQeNj5yPab5iBsFsktI8VvDbH9Ehaa2ATQ5HtsvaSRmwE9doGu0BGcD41SH5fgQ',
    warehouseMap: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBs5gkwddB3jHlYU4WZ87gex8gJSSpqsyfullTVTUYIwYvgQpbQbcdk8m-3tFpXJUErlXOgawJJARMcDFO2MuKSUMzLBHxKJMw25PmOWT64_aAcKpOtGbWpr_NFeZtB_34SMw_CzJcAw25_dt0m74w_pe904VsPjbiDJS_eUQOpgjE3ezA1NadKWwANQM52lKl2ToOsBqxstcv1L575S_zix_998blynnxKFt9sToc4XHIPYFPnWtNuYw',
  },
  warehouseAddress: {
    street: 'Jl. Raya Industri Utama No. 88, Kawasan Pergudangan Logistik',
    district: 'Cipondoh',
    city: 'Tangerang',
    province: 'Banten',
    postalCode: '15148',
    countryCode: 'ID',
    googleMapsEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.521260322283!2d106.6710!3d-6.1947!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMTEnNDEuMCJTIDEwNsKwNDAnMTUuNiJF!5e0!3m2!1sen!2sid!4v1700000000000',
    coordinates: {
      latitude: -6.1947,
      longitude: 106.671,
    },
  },
  operationalHours: 'Senin - Minggu: 07.00 - 18.00 WIB (Buka Setiap Hari Tanpa Libur)',
  stats: {
    readyStockSets: '5.000+ Set Ready',
    pipeThickness: '1.8 mm - 2.0 mm',
    deliverySla: '2 Jam Sampai di Lokasi Proyek',
  },
};

export const getFaqItems = (cityName?: string): FaqItem[] => {
  const city = cityName || siteConfig.warehouseAddress.city;
  return [
    {
      question: 'Apa saja isi kelengkapan 1 set scaffolding standar?',
      answer:
        'Standar 1 set scaffolding siap pakai terdiri dari: 2 unit tiang Main Frame (tinggi 170 cm atau 190 cm), 2 unit Cross Brace (silangan pengaku huruf X bentang 220 cm), dan 4 unit Joint Pin (pasak penyambung pipa vertikal). Untuk kebutuhan kerja khusus, Anda dapat memesan komponen tambahan seperti Catwalk (pijakan bordes anti-slip), Jack Base (kaki ulir perata tanah), U-Head (penyangga balok cor), tangga, serta Roda Caster hidup berengsel rem.',
    },
    {
      question: 'Bagaimana syarat sewa dan sistem pembayaran COD di lokasi proyek?',
      answer:
        `Syarat sewa sangat mudah tanpa proses birokrasi berbelit! Cukup kirimkan foto KTP penanggung jawab proyek dan share-lokasi pengerjaan via WhatsApp. Kami mendukung sistem pembayaran COD (Bayar di Tempat): armada kami mengantar scaffolding langsung ke lokasi proyek Anda di wilayah ${city}, Anda dan tim mandor memeriksa kelengkapan fisik, setelah cocok dan sesuai baru pelunasan dilakukan via transfer bank atau tunai ke kurir armada.`,
    },
    {
      question: 'Apakah melayani jual beli scaffolding baru dan bekas rekondisi?',
      answer:
        'Ya, kami melayani penjualan unit baru produksi pabrikan langsung dengan las MIG CO2 penuh standar SNI 07-0065 (ketebalan pipa 1.8 mm - 2.0 mm), serta unit bekas rekondisi Grade A (pipa lempeng lurus, bebas keropos, sudah dibersihkan dari kerak semen dan dicat celup anti-karat). Kami juga menyediakan program Buyback (beli balik) scaffolding eks-proyek Anda setelah pembangunan selesai dengan harga yang transparan.',
    },
    {
      question: `Berapa lama estimasi pengiriman scaffolding ke lokasi proyek di ${city}?`,
      answer:
        `Pengiriman super cepat menggunakan armada mobil pikap dan truk cold diesel milik gudang kami sendiri (bukan makelar/ekspedisi pihak ketiga). Untuk pesanan yang dikonfirmasi sebelum pukul 15.00 WIB, barang langsung dikirim hari ini juga dan tiba di lokasi proyek Anda di area ${city} & sekitarnya dalam estimasi 1 hingga 3 jam perjalanan.`,
    },
    {
      question: 'Apakah boleh datang langsung ke gudang untuk mengecek fisik barang?',
      answer:
        'Sangat boleh dan kami prioritaskan! Gudang pusat kami buka setiap hari Senin s/d Minggu pukul 07.00 - 18.00 WIB tanpa libur. Anda dipersilakan mampir langsung untuk mengecek stok ribuan set, mengukur ketebalan besi menggunakan jangka sorong (sigmat), dan berkonsultasi mengenai perhitungan set dengan kepala logistik kami.',
    },
    {
      question: 'Bagaimana jika ada pipa atau komponen yang bengkok atau cacat di proyek?',
      answer:
        'Kami memberikan Jaminan Garansi Tukar Unit Langsung tanpa biaya tambahan. Jika saat dibongkar di lokasi ada pipa yang cacat atau tidak presisi, tim armada kami siap langsung menukar atau mengirim unit penggantinya di hari yang sama agar pengerjaan proyek Anda tidak tertunda.',
    },
  ];
};
