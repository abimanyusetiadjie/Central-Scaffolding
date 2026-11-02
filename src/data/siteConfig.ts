export interface SiteConfig {
  businessName: string;
  tagline: string;
  whatsappNumber: string; // Format: 62812xxxxxxx (tanpa + atau spasi)
  whatsappDisplay: string;
  phone: string; // Format dial telepon: 0812xxxxxxx
  phoneDisplay: string;
  phoneHotline: string;
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
    gmapsUrl: string;
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
    projectsCompleted: string;
  };
  social: {
    instagram: string;
    tokopedia: string;
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
  businessName: 'Central Scaffolding',
  tagline: 'Pusat Sewa Scaffolding, Beli & Jual Scaffolding Pipa Baja Standar SNI — Gudang & Armada Sendiri',
  whatsappNumber: '6281298188995',
  whatsappDisplay: '0812-9818-8995',
  phone: '081298188995',
  phoneDisplay: '0812-9818-8995',
  phoneHotline: '0812-9818-8995',
  email: 'kontak@centralscaffolding.id',
  siteUrl: 'https://centralscaffolding.id',
  images: {
    logo: '/assets/img/logo-cropped.png',
    heroTruck: '/assets/video/bg-hero-index-poster.webp',
    warehouseMap: '/assets/img/warehouse/gudang-toko-central-scaffolding-2026.webp?v=20261027',
  },
  warehouseAddress: {
    street: 'Jl. KH. Hasyim Ashari, RT.007/RW.007',
    district: 'Sukasari, Kec. Tangerang',
    city: 'Tangerang',
    province: 'Banten',
    postalCode: '15118',
    countryCode: 'ID',
    googleMapsEmbedUrl: 'https://maps.google.com/maps?q=-6.1850168,106.6442871&hl=id&z=17&output=embed',
    gmapsUrl: 'https://maps.app.goo.gl/5EDjfXtG3V6G2nqR8',
    coordinates: {
      latitude: -6.1850168,
      longitude: 106.6442871,
    },
  },
  operationalHours: 'Senin - Minggu: 07.00 - 18.00 WIB (Buka Setiap Hari Tanpa Libur)',
  stats: {
    readyStockSets: '10.000+ Set Ready',
    pipeThickness: '1.8 mm - 2.0 mm',
    deliverySla: '1-3 Jam Kirim Cepat',
    projectsCompleted: '1000+',
  },
  social: {
    instagram: 'https://www.instagram.com/central_scaffolding.id?srtk=NGN6MzE3djh1NGd3',
    tokopedia: 'https://tk.tokopedia.com/ZSgXxncg6/',
  },
};

export const getFaqItems = (cityName?: string): FaqItem[] => {
  const city = cityName || siteConfig.warehouseAddress.city;
  return [
    {
      question: 'Apa saja kelengkapan 1 set scaffolding (steger) standar?',
      answer:
        '1 set scaffolding standar komplit terdiri dari: 2 pcs Main Frame (tersedia ukuran tinggi 1,90 meter atau 1,70 meter), 2 pcs Cross Brace (silangan diagonal 2,20m), dan 4 pcs Join Pin (sambungan pipa). Tersedia juga aksesoris lengkap seperti Ladder Frame 0,90m, Catwalk (bordes pijakan), Tangga (Stairs), Roda (Caster Wheel), U-Head Jack, dan Jackbase.',
    },
    {
      question: 'Apa perbedaan ukuran Main Frame 1,90m dan Main Frame 1,70m?',
      answer:
        'Main Frame 1,90 meter (T. 190 × L. 122 cm) adalah ukuran paling laris untuk pekerjaan fasad gedung tinggi dan ruang kerja tukang yang lega. Sedangkan Main Frame 1,70 meter (T. 170 × L. 122 cm) sangat favorit untuk penyangga bekisting cor plat lantai beton dan kombinasi dengan Ladder Frame 0,90 meter.',
    },
    {
      question: 'Apakah bisa sewa scaffolding sekaligus beli scaffolding baru atau second?',
      answer:
        `Ya, Central Scaffolding melayani sewa scaffolding (rental harian/bulanan) untuk partai kecil maupun proyek gedung, serta melayani pelanggan yang ingin beli scaffolding baru (New) standar SNI pipa tebal 1.8–2.0 mm maupun beli scaffolding bekas/rekondisi (Second) berkualitas tinggi di ${city}.`,
    },
    {
      question: 'Bagaimana syarat sewa & sistem pembayaran COD di lokasi proyek?',
      answer:
        `Sangat praktis dan aman. Cukup kirim foto identitas & share lokasi proyek via WhatsApp (${siteConfig.whatsappDisplay}). Armada kami mengantar scaffolding ke proyek Anda di ${city}, barang dicek langsung oleh mandor di lokasi, lalu pembayaran dapat dilakukan di tempat (COD tunai maupun transfer).`,
    },
    {
      question: `Berapa lama estimasi pengiriman scaffolding ke lokasi proyek di ${city}?`,
      answer:
        `Untuk wilayah Tangerang, BSD Serpong, dan DKI Jakarta, pengiriman tiba dalam 1 hingga 3 jam di hari yang sama (Same Day Delivery) menggunakan armada pikap dan truk milik sendiri dari Gudang Pusat Tangerang. Untuk wilayah Surabaya, Gresik, dan Sidoarjo dilayani cepat melalui jaringan cabang Jawa Timur kami.`,
    },
  ];
};
