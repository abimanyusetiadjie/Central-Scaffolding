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
  tagline: 'Pusat Sewa & Jual Scaffolding Pipa Baja Standar SNI & K3 — Gudang & Armada Sendiri',
  whatsappNumber: '6281298188995',
  whatsappDisplay: '0812-9818-8995',
  phone: '081298188995',
  phoneDisplay: '0812-9818-8995',
  phoneHotline: '0812-9818-8995',
  email: 'kontak@centralscaffolding.id',
  siteUrl: 'https://centralscaffolding.vercel.app',
  images: {
    logo: '/assets/img/logo-cropped.png',
    heroTruck: '/assets/video/bg-hero-index-poster.webp',
    warehouseMap: '/assets/img/warehouse/armada-pengiriman.webp',
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
};

export const getFaqItems = (cityName?: string): FaqItem[] => {
  const city = cityName || siteConfig.warehouseAddress.city;
  return [
    {
      question: 'Apa saja kelengkapan 1 set scaffolding standar?',
      answer:
        '1 set komplit terdiri dari: 2 Main Frame (170cm atau 190cm), 2 Cross Brace (silangan X), dan 4 Joint Pin (sambungan pipa). Komponen tambahan seperti Catwalk bordes, Jack Base, dan Roda dapat dipesan terpisah.',
    },
    {
      question: 'Bagaimana syarat sewa & sistem pembayaran COD?',
      answer:
        `Cukup kirim foto KTP & share-loc proyek via WhatsApp. Barang kami antar ke ${city}, dicek mandor di lokasi, setelah sesuai baru pelunasan (COD tunai/transfer).`,
    },
    {
      question: 'Apakah melayani jual scaffolding baru dan bekas?',
      answer:
        'Ya, kami melayani penjualan unit baru pipa tebal SNI 1.8mm – 2.0mm serta rekondisi Grade A siap pakai. Tersedia juga layanan beli kembali (buyback) eks proyek.',
    },
    {
      question: `Berapa lama estimasi pengiriman ke proyek di ${city}?`,
      answer:
        `Estimasi 1 hingga 3 jam langsung dari gudang pusat menggunakan armada pikap & truk sendiri di hari yang sama.`,
    },
    {
      question: 'Apakah boleh datang langsung ke gudang?',
      answer:
        'Boleh sekali. Gudang pusat buka tiap hari (Senin - Minggu 07.00 - 18.00 WIB). Anda bebas mengukur ketebalan pipa dengan jangka sorong dan cek stok fisik.',
    },
    {
      question: 'Bagaimana jika ada pipa yang cacat saat tiba?',
      answer:
        'Kami memberikan garansi tukar unit langsung di hari yang sama tanpa biaya tambahan agar jadwal proyek Anda tidak tertunda.',
    },
  ];
};
