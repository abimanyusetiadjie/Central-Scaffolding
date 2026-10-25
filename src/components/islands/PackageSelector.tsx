import { useState } from 'react';
import { trackWhatsAppClick } from '../../utils/analytics';
import { MessageCircle, Check, Star } from 'lucide-react';

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
    <section
      id="paket-hemat"
      aria-labelledby="package-selector-title"
      className="w-full bg-white py-16 px-4 sm:px-6 lg:px-8 border-b border-slate-200 scroll-mt-20"
    >
      <div className="max-w-6xl mx-auto flex flex-col gap-10">
        {/* Header Khas WordPress */}
        <div className="text-center max-w-3xl mx-auto flex flex-col gap-2.5">
          <span className="inline-flex items-center gap-1.5 bg-blue-100 text-[#0284c7] px-4 py-1 rounded-full text-xs font-black uppercase tracking-wider w-fit mx-auto">
            SIMULASI PAKET HEMAT
          </span>
          <h2
            id="package-selector-title"
            className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight"
          >
            Pilihan Paket Scaffolding Siap Pasang
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-normal">
            Komponen dikirim lengkap dalam satu set standar (Main Frame, Cross Brace, dan Joint Pin) tanpa ada part yang tertinggal.
          </p>
        </div>

        {/* 3 Paket Kartu Khas Elementor */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
          {/* PAKET 1: KECIL */}
          <div className="bg-slate-50 p-6 sm:p-7 rounded-2xl border border-slate-200 flex flex-col justify-between shadow-xs hover:shadow-md transition">
            <div className="flex flex-col gap-4">
              <span className="text-xs font-black uppercase text-slate-600 bg-white border border-slate-200 px-3 py-1 rounded-md w-fit">
                Renovasi Rumah &amp; Cat
              </span>
              <div>
                <h3 className="text-xl font-black text-slate-900">
                  Paket Rumah (10 Set)
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  Untuk perbaikan plafon, cat rumah tinggal, pasang kanopi &amp; atap baja ringan.
                </p>
              </div>

              <div className="bg-white p-4 rounded-xl border border-slate-200 text-xs sm:text-sm">
                <span className="font-bold text-slate-900 block mb-2">
                  Kelengkapan Termasuk:
                </span>
                <ul className="space-y-2 text-slate-600">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>20 Pcs Main Frame (T: 170cm)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>20 Pcs Cross Brace Silangan X</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>40 Pcs Joint Pin Pengunci Baja</span>
                  </li>
                </ul>
              </div>

              <div className="text-center bg-white p-3 rounded-xl border border-slate-200">
                <span className="text-xs text-slate-500 font-bold uppercase block">Estimasi Biaya Sewa:</span>
                <span className="text-2xl font-black text-slate-900 mt-0.5 block">
                  Rp 350.000 <span className="text-xs font-normal text-slate-500">/ Bulan</span>
                </span>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-200">
              <button
                className="w-full min-h-[46px] bg-[#25D366] hover:bg-[#20bd5a] text-white flex items-center justify-center gap-2 p-3 rounded-full font-black text-xs sm:text-sm uppercase tracking-wider shadow-md hover:shadow-lg transition-all cursor-pointer"
                onClick={() => handleOrderPaket('Paket Rumah (10 Set)', qtyPaket1)}
                type="button"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>PILIH PAKET RUMAH VIA WA</span>
              </button>
            </div>
          </div>

          {/* PAKET 2: RUKO (HIGHLIGHTED BEST SELLER) */}
          <div className="bg-white p-6 sm:p-7 rounded-2xl border-2 border-[#0284c7] flex flex-col justify-between shadow-lg relative">
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#0284c7] text-white px-4 py-1 rounded-full text-xs font-black uppercase tracking-wider flex items-center gap-1 shadow-sm">
              <Star className="w-3.5 h-3.5 fill-current text-amber-300" />
              <span>PALING LARIS</span>
            </div>

            <div className="flex flex-col gap-4 mt-2">
              <span className="text-xs font-black uppercase text-[#0284c7] bg-blue-50 border border-blue-200 px-3 py-1 rounded-md w-fit">
                Proyek Ruko 2 - 3 Lantai
              </span>
              <div>
                <h3 className="text-xl font-black text-slate-900">
                  Paket Ruko (25 Set)
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  Untuk bangun ruko, fasad kaca/ACP, dan cor dak beton bertingkat.
                </p>
              </div>

              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-xs sm:text-sm">
                <span className="font-bold text-slate-900 block mb-2">
                  Kelengkapan Termasuk:
                </span>
                <ul className="space-y-2 text-slate-600">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>50 Pcs Main Frame (T: 170cm SNI)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>50 Pcs Cross Brace Silangan</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>100 Pcs Joint Pin Pengunci</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Catwalk &amp; Jackbase Siap Sedia</span>
                  </li>
                </ul>
              </div>

              <div className="text-center bg-blue-50/60 p-3 rounded-xl border border-blue-100">
                <span className="text-xs text-slate-500 font-bold uppercase block">Estimasi Biaya Sewa:</span>
                <span className="text-2xl font-black text-[#0284c7] mt-0.5 block">
                  Rp 875.000 <span className="text-xs font-normal text-slate-500">/ Bulan</span>
                </span>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-200">
              <button
                className="w-full min-h-[46px] bg-[#25D366] hover:bg-[#20bd5a] text-white flex items-center justify-center gap-2 p-3 rounded-full font-black text-xs sm:text-sm uppercase tracking-wider shadow-md hover:shadow-lg transition-all cursor-pointer"
                onClick={() => handleOrderPaket('Paket Ruko (25 Set)', qtyPaket2)}
                type="button"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>PILIH PAKET RUKO VIA WA</span>
              </button>
            </div>
          </div>

          {/* PAKET 3: PROYEK BESAR */}
          <div className="bg-slate-50 p-6 sm:p-7 rounded-2xl border border-slate-200 flex flex-col justify-between shadow-xs hover:shadow-md transition">
            <div className="flex flex-col gap-4">
              <span className="text-xs font-black uppercase text-slate-600 bg-white border border-slate-200 px-3 py-1 rounded-md w-fit">
                Gedung &amp; Pabrik Industri
              </span>
              <div>
                <h3 className="text-xl font-black text-slate-900">
                  Paket Proyek (50+ Set)
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  Untuk kontraktor utama, proyek pabrik, gudang, dan tender BUMN.
                </p>
              </div>

              <div className="bg-white p-4 rounded-xl border border-slate-200 text-xs sm:text-sm">
                <span className="font-bold text-slate-900 block mb-2">
                  Kelengkapan Termasuk:
                </span>
                <ul className="space-y-2 text-slate-600">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Roda Caster Heavy Duty (Rem Pengunci)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Tangga Scaffolding Naik-Turun Pekerja</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Pipa Support &amp; Tie Rod Cor</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Surat Dukungan Tender Kontraktor</span>
                  </li>
                </ul>
              </div>

              <div className="text-center bg-white p-3 rounded-xl border border-slate-200">
                <span className="text-xs text-slate-500 font-bold uppercase block">Estimasi Biaya Sewa:</span>
                <span className="text-2xl font-black text-slate-900 mt-0.5 block">
                  Harga Khusus Proyek
                </span>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-200">
              <button
                className="w-full min-h-[46px] bg-slate-900 hover:bg-slate-800 text-white flex items-center justify-center gap-2 p-3 rounded-full font-black text-xs sm:text-sm uppercase tracking-wider shadow-md hover:shadow-lg transition-all cursor-pointer"
                onClick={() => handleOrderPaket('Paket Proyek Besar', qtyPaket3)}
                type="button"
              >
                <MessageCircle className="w-4 h-4 fill-current text-emerald-400" />
                <span>KONSULTASI PROYEK VIA WA</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}