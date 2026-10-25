import productsData from '../../data/products.json';
import { siteConfig, type ProductItem } from '../../data/siteConfig';
import { trackWhatsAppClick } from '../../utils/analytics';

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
      className="w-full bg-surface-container-lowest py-12 sm:py-20 px-4 sm:px-6 lg:px-8 border-b-4 border-surface-container-highest scroll-mt-24 md:scroll-mt-32"
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-3 border-b-4 border-primary pb-4">
          <div>
            <span className="inline-block bg-secondary-container text-on-secondary-container px-3.5 py-1 rounded font-label-md text-xs sm:text-sm uppercase font-bold">
              PILIHAN KOMPONEN ECERAN &amp; SPAREPART
            </span>
            <h2
              id="catalog-title"
              className="font-headline-xl-mobile md:font-headline-xl text-headline-xl-mobile md:text-headline-xl uppercase text-primary mt-1.5 font-extrabold"
            >
              DAFTAR PRODUK &amp; SPAREPART SCAFFOLDING
            </h2>
          </div>
          <div className="font-headline-md text-base sm:text-headline-md text-secondary flex items-center gap-1.5 font-bold">
            <span className="material-symbols-outlined text-[28px]">inventory_2</span>
            <span>READY STOCK SEMUA UKURAN</span>
          </div>
        </div>

        {/* Retail Hardware Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {typedProducts.map((item) => (
            <div
              key={item.id}
              className="bg-surface-container-lowest p-5 rounded-2xl border-2 border-outline-variant flex flex-col justify-between shadow-sm hover:border-primary hover:shadow-md transition-all"
            >
              <div className="flex flex-col gap-4">
                <div className="relative w-full h-56 bg-surface-container-low rounded-xl overflow-hidden flex items-center justify-center border border-surface-container-highest">
                  <img
                    className="w-full h-full object-cover"
                    src={item.imageUrl || 'https://lh3.googleusercontent.com/aida-public/AB6AXuA-Qs-9l9pEVNnc0MwIaeBjOzu-rWeL2mdjm-OmTUyktRglAKKuChdI-U18dBkcRQY1lmm2Yd03H7iZPDEl0nOKlOqP21ICLuNg5SAsJR4i_G-Jdk6ECbTuoz0mARzjh7FBEVyviSqRZS9YVz3AupiHNXnD0l_HzsccnlwmfSeAyA-0rNQ60S8KFg5XI6JYsJ6nf-vgPfty23uPm1AQXHOieUuEuadbRpu6brlrCiDDK_am73dHkezv8g'}
                    alt={item.imageAlt}
                    width={400}
                    height={224}
                    loading="lazy"
                    decoding="async"
                  />
                  <span className="absolute top-2.5 right-2.5 bg-tertiary-fixed text-on-tertiary-fixed px-3 py-1 rounded-md font-label-md text-xs uppercase shadow-sm border border-tertiary-container font-extrabold">
                    TERSEDIA (READY)
                  </span>
                </div>

                <div>
                  <h3 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg uppercase text-primary leading-snug font-extrabold">
                    {item.name}
                  </h3>
                  <p className="font-body-lg text-xs sm:text-sm text-on-surface-variant mt-1 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <table className="w-full font-body-lg text-sm sm:text-base text-on-surface border border-surface-container rounded-lg overflow-hidden">
                  <tbody className="divide-y divide-surface-container">
                    <tr className="bg-surface-container-low">
                      <td className="p-2 font-bold w-1/3 text-on-surface-variant">Ukuran:</td>
                      <td className="p-2 font-semibold text-primary">{item.specs.dimensions}</td>
                    </tr>
                    <tr>
                      <td className="p-2 font-bold text-on-surface-variant">Pipa/Tipe:</td>
                      <td className="p-2 font-semibold">{item.specs.pipeDiameter}</td>
                    </tr>
                    <tr className="bg-surface-container-low">
                      <td className="p-2 font-bold text-on-surface-variant">Kelebihan:</td>
                      <td className="p-2 font-semibold text-secondary">{item.specs.thickness}</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="mt-5 pt-3 border-t border-outline-variant/40">
                <a
                  className="w-full min-h-[52px] bg-secondary hover:bg-on-secondary-container text-on-secondary flex items-center justify-center gap-2 rounded-xl font-headline-md text-sm sm:text-base uppercase border-2 border-on-secondary-fixed shadow-[0_3px_0_#002109] active:translate-y-[2px] transition-all font-bold"
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
                  <span className="material-symbols-outlined text-[24px]">chat</span>
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
