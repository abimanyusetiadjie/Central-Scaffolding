import productsData from '../../data/products.json';
import { siteConfig, type ProductItem } from '../../data/siteConfig';
import { trackWhatsAppClick } from '../../utils/analytics';
import { MessageCircle, CheckCircle2 } from 'lucide-react';

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
      `Halo Admin ${siteConfig.businessName}, saya mau pesan/tanya *${item.name}* untuk proyek di ${city}. Mohon info harga & ketersediaan stoknya.`
    );
    return `https://wa.me/${whatsappNumber}?text=${text}`;
  };

  return (
    <section
      id="katalog-produk"
      aria-labelledby="catalog-title"
      className="w-full bg-slate-50 py-16 px-4 sm:px-6 lg:px-8 border-b border-slate-200 scroll-mt-20"
    >
      <div className="max-w-6xl mx-auto flex flex-col gap-10">
        {/* Header Khas WordPress */}
        <div className="text-center max-w-3xl mx-auto flex flex-col gap-2.5">
          <span className="inline-flex items-center gap-1.5 bg-blue-100 text-[#0284c7] px-4 py-1 rounded-full text-xs font-black uppercase tracking-wider w-fit mx-auto">
            SPAREPART &amp; AKSESORIS ECERAN
          </span>
          <h2
            id="catalog-title"
            className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight"
          >
            Katalog Produk &amp; Sparepart Scaffolding
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-normal">
            Semua komponen pipa baja berstandar SNI 07-0065, lempeng presisi dan kuat menahan beban proyek.
          </p>
        </div>

        {/* 6 Grid Kartu Produk Khas WordPress E-Commerce */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {typedProducts.map((item) => (
            <div
              key={item.id}
              className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition flex flex-col justify-between"
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
                  <span className="absolute top-2.5 right-2.5 bg-emerald-600 text-white text-[11px] font-black px-2.5 py-1 rounded-md shadow-xs flex items-center gap-1 uppercase tracking-wide">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Ready Stock</span>
                  </span>
                </div>

                <div>
                  <h3 className="text-lg font-black text-slate-900 leading-snug">
                    {item.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 mt-1 line-clamp-2">
                    {item.description}
                  </p>
                </div>

                {/* Specs Box */}
                <div className="bg-slate-50 rounded-xl border border-slate-200 p-3 text-xs sm:text-sm space-y-1.5">
                  <div className="flex justify-between border-b border-slate-200/60 pb-1">
                    <span className="text-slate-500 font-medium">Ukuran:</span>
                    <span className="text-slate-900 font-bold">{item.specs.dimensions}</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-200/60 pb-1">
                    <span className="text-slate-500 font-medium">Tipe Pipa:</span>
                    <span className="text-slate-900 font-semibold">{item.specs.pipeDiameter}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500 font-medium">Keunggulan:</span>
                    <span className="text-emerald-700 font-bold">{item.specs.thickness}</span>
                  </div>
                </div>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-100">
                <a
                  className="w-full min-h-[44px] bg-[#25D366] hover:bg-[#20bd5a] text-white flex items-center justify-center gap-2 rounded-full text-xs sm:text-sm font-black uppercase tracking-wider shadow-sm hover:shadow-md transition active:scale-95 text-center"
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
                  <MessageCircle className="w-4 h-4 fill-current" />
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