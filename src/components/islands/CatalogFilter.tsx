import productsData from '../../data/products.json';
import { siteConfig, type ProductItem } from '../../data/siteConfig';
import { trackWhatsAppClick } from '../../utils/analytics';
import { Package, MessageCircle } from 'lucide-react';

export interface CatalogFilterProps {
  whatsappNumber?: string;
  city?: string;
}

const typedProducts = productsData as ProductItem[];

export default function CatalogFilter({
  whatsappNumber = siteConfig.whatsappNumber,
  city = siteConfig.warehouseAddress.city,
}: CatalogFilterProps) {
  const buildProductWaUrl = (item: ProductItem): string => {
    const text = encodeURIComponent(
      `Halo Admin ${siteConfig.businessName}, saya mau pesan *${item.name}* untuk proyek di ${city}. Mohon info harga & ketersediaan stok.`
    );
    return `https://wa.me/${whatsappNumber}?text=${text}`;
  };

  return (
    <section
      id="katalog-produk"
      aria-labelledby="catalog-title"
      className="w-full bg-white py-12 md:py-16 px-4 sm:px-6 lg:px-8 border-b-4 border-slate-200 scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-3 border-b-4 border-[#00236f] pb-4">
          <div>
            <span className="inline-block bg-green-100 text-green-800 px-3.5 py-1 rounded text-xs sm:text-sm uppercase font-bold">
              PILIHAN KOMPONEN ECERAN &amp; SPAREPART
            </span>
            <h2
              id="catalog-title"
              className="text-2xl sm:text-3xl md:text-4xl uppercase text-[#00236f] mt-1.5 font-extrabold tracking-tight"
            >
              DAFTAR PRODUK &amp; SPAREPART SCAFFOLDING
            </h2>
          </div>
          <div className="text-base sm:text-lg text-green-700 flex items-center gap-2 font-bold">
            <Package className="w-6 h-6" />
            <span>READY STOCK SEMUA UKURAN</span>
          </div>
        </div>

        {/* Retail Hardware Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {typedProducts.map((item) => (
            <div
              key={item.id}
              className="bg-white p-5 rounded-2xl border-2 border-slate-300 hover:border-[#00236f] flex flex-col justify-between shadow-md transition-all"
            >
              <div className="flex flex-col gap-4">
                <div className="relative w-full aspect-[4/3] bg-slate-100 rounded-xl overflow-hidden flex items-center justify-center border border-slate-200">
                  <img
                    className="w-full h-full object-cover"
                    src={item.imageUrl || 'https://lh3.googleusercontent.com/aida-public/AB6AXuA-Qs-9l9pEVNnc0MwIaeBjOzu-rWeL2mdjm-OmTUyktRglAKKuChdI-U18dBkcRQY1lmm2Yd03H7iZPDEl0nOKlOqP21ICLuNg5SAsJR4i_G-Jdk6ECbTuoz0mARzjh7FBEVyviSqRZS9YVz3AupiHNXnD0l_HzsccnlwmfSeAyA-0rNQ60S8KFg5XI6JYsJ6nf-vgPfty23uPm1AQXHOieUuEuadbRpu6brlrCiDDK_am73dHkezv8g'}
                    alt={item.imageAlt}
                    width={400}
                    height={300}
                    loading="lazy"
                    decoding="async"
                  />
                  <span className="absolute top-2.5 right-2.5 bg-[#FACC15] text-slate-900 px-3 py-1 rounded-md text-xs uppercase shadow-sm border border-yellow-500 font-extrabold">
                    TERSEDIA (READY)
                  </span>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl uppercase text-[#00236f] leading-snug font-extrabold">
                    {item.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <table className="w-full text-sm sm:text-base text-slate-800 border border-slate-200 rounded-lg overflow-hidden">
                  <tbody className="divide-y divide-slate-200">
                    <tr className="bg-slate-50">
                      <td className="p-2 font-bold w-1/3 text-slate-600">Ukuran:</td>
                      <td className="p-2 font-semibold text-[#00236f]">{item.specs.dimensions}</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="p-2 font-bold text-slate-600">Pipa/Tipe:</td>
                      <td className="p-2 font-semibold">{item.specs.pipeDiameter}</td>
                    </tr>
                    <tr className="bg-slate-50">
                      <td className="p-2 font-bold text-slate-600">Kelebihan:</td>
                      <td className="p-2 font-semibold text-green-700">{item.specs.thickness}</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-200">
                <a
                  className="w-full min-h-[50px] bg-[#16A34A] hover:bg-[#15803D] text-white flex items-center justify-center gap-2 rounded-xl text-sm sm:text-base uppercase border-2 border-green-800 shadow-[0_3px_0_#14532d] active:translate-y-[2px] transition-all font-bold cursor-pointer"
                  href={buildProductWaUrl(item)}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-wa-tracked="direct"
                  onClick={() =>
                    trackWhatsAppClick({
                      lead_source: 'catalog_item',
                      transaction_mode: 'SEWA & BELI',
                      target_city: city,
                      item_name: item.name,
                    })
                  }
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>PESAN {item.name.split('/')[0].split('(')[0].trim().toUpperCase()}</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}