import { useState } from 'react';
import { trackWhatsAppClick } from '../../utils/analytics';
import { MessageCircle, Check } from 'lucide-react';

interface PackageSelectorProps {
  whatsappNumber: string;
  defaultLocation?: string;
}

export default function PackageSelector({
  whatsappNumber,
  defaultLocation = 'Tangerang & Jabodetabek',
}: PackageSelectorProps) {
  const [qtyPaket1] = useState(10);
  const [qtyPaket2] = useState(25);
  const [qtyPaket3] = useState(80);

  const handleOrderPaket = (packageName: string, count: number) => {
    const text = encodeURIComponent(
      `Halo Central Scaffolding, saya mau sewa/tanya *${packageName}* perkiraan *${count} Set* untuk proyek di *${defaultLocation}*. Mohon info harga total & jadwal pengirimannya.`
    );

    trackWhatsAppClick({
      lead_source: 'package_selector',
      transaction_mode: 'SEWA',
      target_city: defaultLocation,
      item_name: packageName,
      sets_count: count,
    });

    window.open(`https://wa.me/${whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <section className="py-20 bg-white" id="paket">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-orange-600 mb-4">
            Paket <span className="text-gray-800">Scaffolding Siap Pakai</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto text-center font-roboto">
            Komponen dikirim lengkap dalam satu set standar (Main Frame, Cross Brace, dan Joint Pin) tanpa ada part yang tertinggal.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Card 1: Paket Rumah */}
          <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 p-7 border border-gray-100 flex flex-col justify-between">
            <div className="flex flex-col gap-4">
              <span className="bg-gray-100 text-gray-800 text-xs font-montserrat font-bold px-3 py-1 rounded-full uppercase w-fit">
                Rumah &amp; Renovasi
              </span>
              <div>
                <h3 className="text-2xl font-montserrat font-bold text-gray-800">
                  Paket Rumah (10 Set)
                </h3>
                <p className="text-sm text-gray-600 mt-1 font-roboto">
                  Ideal untuk pengerjaan cat dinding, plafon gypsum, perbaikan atap &amp; kanopi rumah.
                </p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 text-xs sm:text-sm font-roboto">
                <span className="font-bold text-gray-900 block mb-2 font-montserrat">
                  Kelengkapan Termasuk:
                </span>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-orange-600 shrink-0" />
                    <span>20 Pcs Main Frame (T: 170cm SNI)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-orange-600 shrink-0" />
                    <span>20 Pcs Cross Brace Silangan X</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-orange-600 shrink-0" />
                    <span>40 Pcs Joint Pin Pengunci Baja</span>
                  </li>
                </ul>
              </div>

              <div className="text-center bg-orange-50/50 p-3 rounded-lg border border-orange-100">
                <span className="text-xs text-gray-500 font-bold uppercase block">Estimasi Biaya Sewa:</span>
                <span className="text-2xl font-montserrat font-extrabold text-orange-600 mt-0.5 block">
                  Rp 350.000 <span className="text-xs font-normal text-gray-500 font-roboto">/ Bulan</span>
                </span>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-gray-100">
              <button
                className="w-full bg-orange-600 hover:bg-orange-700 text-white py-3 px-6 rounded-lg font-montserrat font-bold text-sm transition-all duration-300 flex items-center justify-center gap-2 shadow-md hover:shadow-lg cursor-pointer"
                onClick={() => handleOrderPaket('Paket Rumah (10 Set)', qtyPaket1)}
                type="button"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>PILIH PAKET RUMAH VIA WA</span>
              </button>
            </div>
          </div>

          {/* Card 2: Paket Ruko (Featured) */}
          <div className="bg-white rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 p-7 border-2 border-orange-500 flex flex-col justify-between relative">
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-orange-600 text-white px-4 py-1 rounded-full text-xs font-montserrat font-bold uppercase tracking-wider shadow-sm">
              ★ PALING LARIS
            </div>

            <div className="flex flex-col gap-4 mt-2">
              <span className="bg-orange-100 text-orange-800 text-xs font-montserrat font-bold px-3 py-1 rounded-full uppercase w-fit">
                Ruko 2 - 3 Lantai
              </span>
              <div>
                <h3 className="text-2xl font-montserrat font-bold text-gray-800">
                  Paket Ruko (25 Set)
                </h3>
                <p className="text-sm text-gray-600 mt-1 font-roboto">
                  Untuk pembangunan ruko, renovasi fasad kaca/ACP, dan cor dak beton bertingkat.
                </p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 text-xs sm:text-sm font-roboto">
                <span className="font-bold text-gray-900 block mb-2 font-montserrat">
                  Kelengkapan Termasuk:
                </span>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-orange-600 shrink-0" />
                    <span>50 Pcs Main Frame (T: 170cm SNI)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-orange-600 shrink-0" />
                    <span>50 Pcs Cross Brace Silangan</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-orange-600 shrink-0" />
                    <span>100 Pcs Joint Pin Pengunci</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-orange-600 shrink-0" />
                    <span>Catwalk Plat Bordes &amp; Jackbase</span>
                  </li>
                </ul>
              </div>

              <div className="text-center bg-orange-50/50 p-3 rounded-lg border border-orange-100">
                <span className="text-xs text-gray-500 font-bold uppercase block">Estimasi Biaya Sewa:</span>
                <span className="text-2xl font-montserrat font-extrabold text-orange-600 mt-0.5 block">
                  Rp 875.000 <span className="text-xs font-normal text-gray-500 font-roboto">/ Bulan</span>
                </span>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-gray-100">
              <button
                className="w-full bg-orange-600 hover:bg-orange-700 text-white py-3 px-6 rounded-lg font-montserrat font-bold text-sm transition-all duration-300 flex items-center justify-center gap-2 shadow-md hover:shadow-lg cursor-pointer"
                onClick={() => handleOrderPaket('Paket Ruko (25 Set)', qtyPaket2)}
                type="button"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>PILIH PAKET RUKO VIA WA</span>
              </button>
            </div>
          </div>

          {/* Card 3: Paket Proyek Besar */}
          <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 p-7 border border-gray-100 flex flex-col justify-between">
            <div className="flex flex-col gap-4">
              <span className="bg-gray-100 text-gray-800 text-xs font-montserrat font-bold px-3 py-1 rounded-full uppercase w-fit">
                Gedung &amp; Pabrik
              </span>
              <div>
                <h3 className="text-2xl font-montserrat font-bold text-gray-800">
                  Paket Proyek (50+ Set)
                </h3>
                <p className="text-sm text-gray-600 mt-1 font-roboto">
                  Untuk kontraktor utama, proyek pabrik, gudang, dan tender dinas BUMN.
                </p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 text-xs sm:text-sm font-roboto">
                <span className="font-bold text-gray-900 block mb-2 font-montserrat">
                  Kelengkapan Termasuk:
                </span>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-orange-600 shrink-0" />
                    <span>Roda Caster Heavy Duty (Rem Pengunci)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-orange-600 shrink-0" />
                    <span>Tangga Scaffolding Akses Pekerja</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-orange-600 shrink-0" />
                    <span>Pipa Support &amp; Tie Rod Cor</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-orange-600 shrink-0" />
                    <span>Surat Dukungan Tender Kontraktor</span>
                  </li>
                </ul>
              </div>

              <div className="text-center bg-gray-100 p-3 rounded-lg border border-gray-200">
                <span className="text-xs text-gray-500 font-bold uppercase block">Estimasi Biaya Sewa:</span>
                <span className="text-2xl font-montserrat font-extrabold text-gray-900 mt-0.5 block">
                  Harga Khusus Proyek
                </span>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-gray-100">
              <button
                className="w-full bg-gray-900 hover:bg-gray-800 text-white py-3 px-6 rounded-lg font-montserrat font-bold text-sm transition-all duration-300 flex items-center justify-center gap-2 shadow-md hover:shadow-lg cursor-pointer"
                onClick={() => handleOrderPaket('Paket Proyek Besar', qtyPaket3)}
                type="button"
              >
                <MessageCircle className="w-4 h-4 fill-current text-orange-400" />
                <span>KONSULTASI PROYEK VIA WA</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}