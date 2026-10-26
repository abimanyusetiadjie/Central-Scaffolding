import productsData from '../../data/products.json';
import { siteConfig, type ProductItem } from '../../data/siteConfig';
import { trackWhatsAppClick } from '../../utils/analytics';
import { MessageCircle } from 'lucide-react';

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
    <section className="py-20 bg-gray-50" id="products">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-orange-600 mb-4">
            Produk <span className="text-gray-800">Scaffolding Kami</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto text-center font-roboto">
            Kami menyediakan berbagai komponen scaffolding berkualitas tinggi standar SNI 07-0065 untuk kebutuhan proyek konstruksi Anda di {city}.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {typedProducts.map((item) => {
            const webpSrc = item.imageUrl || '/assets/img/product/main-frame.webp';
            const fallbackSrc = webpSrc.replace(/\.webp$/, '.jpg');
            return (
              <div
                key={item.id}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 p-6 text-center border border-gray-100 flex flex-col justify-between"
              >
                <div>
                  <div className="relative aspect-[4/3] w-full bg-gray-50 rounded-lg p-3 mb-4 flex items-center justify-center overflow-hidden border border-gray-100">
                    <picture className="w-full h-full flex items-center justify-center">
                      <source srcSet={webpSrc} type="image/webp" />
                      <img
                        src={fallbackSrc}
                        alt={item.imageAlt}
                        width={512}
                        height={279}
                        className="w-full h-full object-contain rounded-lg"
                        loading="lazy"
                        decoding="async"
                      />
                    </picture>
                  </div>
                  <h3 className="text-xl font-montserrat font-bold text-gray-800 mb-2">
                    {item.name}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4 font-roboto line-clamp-3">
                    {item.description}
                  </p>

                  <div className="bg-gray-50 rounded-lg p-3 text-xs text-left mb-4 font-roboto space-y-1">
                    <div className="flex justify-between">
                      <span className="text-gray-500 font-medium">Ukuran:</span>
                      <span className="font-bold text-gray-800">{item.specs.dimensions}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500 font-medium">Pipa:</span>
                      <span className="font-semibold text-gray-800">{item.specs.pipeDiameter}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500 font-medium">Kelebihan:</span>
                      <span className="font-bold text-orange-600">{item.specs.thickness}</span>
                    </div>
                  </div>
                </div>

                <a
                  href={buildProductWaUrl(item)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-orange-600 hover:bg-orange-700 text-white py-3 px-4 rounded-lg font-montserrat font-bold text-sm transition-all duration-300 flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
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
                  <span>Pesan {item.name.split('/')[0].split('(')[0].trim()}</span>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
