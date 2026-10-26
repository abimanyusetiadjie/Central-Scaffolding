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
  whatsappNumber: '6281234567890',
  whatsappDisplay: '0812-3456-7890',
  phone: '081234567890',
  phoneDisplay: '0812-3456-7890',
  phoneHotline: '021-5570-1234',
  email: 'kontak@centralscaffolding.id',
  siteUrl: 'https://centralscaffolding.vercel.app',
  images: {
    logo: '/images/stitch/logo.png',
    heroTruck: '/assets/video/bg-hero-index-poster.webp',
    warehouseMap: '/images/stitch/warehouse-map.jpg',
  },
  warehouseAddress: {
    street: 'Jl. Raya Industri Utama No. 88, Kawasan Pergudangan Logistik',
    district: 'Cipondoh',
    city: 'Tangerang',
    province: 'Banten',
    postalCode: '15148',
    countryCode: 'ID',
    googleMapsEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.521260322283!2d106.6710!3d-6.1947!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMTEnNDEuMCJTIDEwNsKwNDAnMTUuNiJF!5e0!3m2!1sen!2sid!4v1700000000000',
    gmapsUrl: 'https://maps.google.com/?q=-6.1947,106.6710',
    coordinates: {
      latitude: -6.1947,
      longitude: 106.671,
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
