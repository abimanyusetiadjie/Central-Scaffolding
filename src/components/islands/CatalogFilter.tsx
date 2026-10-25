import productsData from '../../data/products.json';
import { siteConfig, type ProductItem } from '../../data/siteConfig';
import { trackWhatsAppClick } from '../../utils/analytics';
import { MessageCircle, CheckCircle } from 'lucide-react';

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
      `Halo Admin ${siteConfig.businessName}, saya mau pesan/tanya *${item.name}* untuk proyek di ${city}. Mohon info harga & stoknya.`
    );
    return `https://wa.me/${whatsappNumber}?text=${text}`;
  };

  return (
    <section
      id="katalog-produk"
      aria-labelledby="catalog-title"
      className="w-full bg-slate-50 py-16 px-4 sm:px-6 lg:px-8 border-b border-slate-200 scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto flex flex-col gap-2.5">
          <span className="inline-flex items-center gap-1.5 bg-blue-100 text-blue-900 px-3 py-1 rounded-full text-xs font-bold uppercase w-fit mx-auto">
            Komponen &amp; Aksesoris Eceran
          </span>
          <h2
            id="catalog-title"
            className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight"
          >
            Katalog Produk &amp; Sparepart Scaffolding
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-normal">
            Semua produk berstandar pabrikasi pipa baja tebal dengan toleransi presisi dan pengelasan kuat.
          </p>
        </div>

        {/* 6 Clean Hardware Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {typedProducts.map((item) => (
            <div
              key={item.id}
              className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div className="flex flex-col gap-3.5">
                <div className="relative w-full aspect-[4/3] bg-slate-100 rounded-xl overflow-hidden border border-slate-100">
                  <img
                    className="w-full h-full object-cover"
                    src={item.imageUrl || 'https://lh3.googleusercontent.com/aida-public/AB6AXuA-Qs-9l9pEVNnc0MwIaeBjOzu-rWeL2mdjm-OmTUyktRglAKKuChdI-U18dBkcRQY1lmm2Yd03H7iZPDEl0nOKlOqP21ICLuNg5SAsJR4i_G-Jdk6ECbTuoz0mARzjh7FBEVyviSqRZS9YVz3AupiHNXnD0l_HzsccnlwmfSeAyA-0rNQ60S8KFg5XI6JYsJ6nf-vgPfty23uPm1AQXHOieUuEuadbRpu6brlrCiDDK_am73dHkezv8g'}
                    alt={item.imageAlt}
                    width={400}
                    height={300}
                    loading="lazy"
                    decoding="async"
                  />
                  <span className="absolute top-2.5 right-2.5 bg-emerald-600 text-white text-[11px] font-bold px-2.5 py-1 rounded-md shadow-xs flex items-center gap-1 uppercase tracking-wide">
                    <CheckCircle className="w-3 h-3" />
                    <span>Ready Stock</span>
                  </span>
                </div>

                <div>
                  <h3 className="text-lg font-extrabold text-slate-900 leading-snug">
                    {item.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 mt-1 line-clamp-2">
                    {item.description}
                  </p>
                </div>

                {/* Specs Table */}
                <div className="bg-slate-50 rounded-xl border border-slate-200 p-2.5 text-xs sm:text-sm">
                  <div className="grid grid-cols-3 py-1 border-b border-slate-200/60">
                    <span className="text-slate-500 font-medium">Ukuran:</span>
                    <span className="col-span-2 text-slate-800 font-bold">{item.specs.dimensions}</span>
                  </div>
                  <div className="grid grid-cols-3 py-1 border-b border-slate-200/60">
                    <span className="text-slate-500 font-medium">Tipe Pipa:</span>
                    <span className="col-span-2 text-slate-800 font-semibold">{item.specs.pipeDiameter}</span>
                  </div>
                  <div className="grid grid-cols-3 py-1">
                    <span className="text-slate-500 font-medium">Kelebihan:</span>
                    <span className="col-span-2 text-emerald-700 font-bold">{item.specs.thickness}</span>
                  </div>
                </div>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-100">
                <a
                  className="w-full min-h-[44px] bg-emerald-600 hover:bg-emerald-700 text-white flex items-center justify-center gap-2 rounded-xl text-sm font-bold transition shadow-xs"
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
                  <MessageCircle className="w-4 h-4" />
                  <span>Pesan {item.name.split('/')[0].split('(')[0].trim()} via WA</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}