import { useState } from 'react';
import { trackWhatsAppClick } from '../../utils/analytics';
import { MessageCircle, Check, Sparkles } from 'lucide-react';

interface PackageSelectorProps {
  whatsappNumber: string;
  defaultLocation?: string;
}

export default function PackageSelector({
  whatsappNumber,
  defaultLocation = 'Tangerang & Jabodetabek',
}: PackageSelectorProps) {
  const [qtyPaket1, setQtyPaket1] = useState(10);
  const [qtyPaket2, setQtyPaket2] = useState(25);
  const [qtyPaket3, setQtyPaket3] = useState(80);

  const handleAdjust = (
    current: number,
    setter: (val: number) => void,
    delta: number,
    min: number,
    max: number
  ) => {
    const next = current + delta;
    if (next >= min && next <= max) {
      setter(next);
    }
  };

  const handleOrderPaket = (packageName: string, count: number) => {
    const text = encodeURIComponent(
      `Halo Central Scaffolding, saya mau sewa/tanya *${packageName}* perkiraan *${count} Set* untuk proyek di *${defaultLocation}*. Mohon rincian harga & estimasi pengirimannya.`
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
      <div className="max-w-7xl mx-auto flex flex-col gap-10">
        {/* Section Intro */}
        <div className="text-center max-w-3xl mx-auto flex flex-col gap-2.5">
          <span className="inline-flex items-center gap-1.5 bg-blue-100 text-blue-900 px-3 py-1 rounded-full text-xs font-bold uppercase w-fit mx-auto">
            Simulasi Paket Siap Pasang
          </span>
          <h2
            id="package-selector-title"
            className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight"
          >
            Paket Scaffolding Siap Pakai di Lapangan
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-normal">
            Komponen dikirim lengkap dalam satu set (Main Frame, Cross Brace, dan Joint Pin) tanpa ada bagian yang tertinggal.
          </p>
        </div>

        {/* 3 Package Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
          {/* PAKET 1: KECIL */}
          <div className="bg-slate-50 p-6 sm:p-7 rounded-2xl border border-slate-200 flex flex-col justify-between shadow-xs hover:shadow-md transition">
            <div className="flex flex-col gap-4">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500 bg-white border border-slate-200 px-2.5 py-1 rounded-md w-fit">
                Proyek Rumah &amp; Renovasi
              </span>
              <div>
                <h3 className="text-xl font-extrabold text-slate-900">
                  Paket Kecil (5 - 15 Set)
                </h3>
                <p className="text-sm text-slate-600 mt-1 leading-relaxed">
                  Ideal untuk pengerjaan cat dinding, plafon gypsum, perbaikan atap, dan kanopi.
                </p>
              </div>

              <div className="bg-white p-4 rounded-xl border border-slate-200 text-xs sm:text-sm">
                <span className="font-bold text-slate-900 block mb-2">
                  Kelengkapan Termasuk:
                </span>
                <ul className="space-y-1.5 text-slate-600">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Main Frame 170cm SNI Tebal</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Cross Brace Silangan 220cm</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Joint Pin Pengunci Baja Kuat</span>
                  </li>
                </ul>
              </div>

              {/* Clean Stepper Quantity Control */}
              <div className="bg-white p-3.5 rounded-xl border border-slate-200 flex items-center justify-between">
                <span className="text-xs sm:text-sm font-semibold text-slate-700">
                  Jumlah Kebutuhan:
                </span>
                <div className="flex items-center gap-3">
                  <button
                    className="w-8 h-8 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold flex items-center justify-center transition select-none cursor-pointer"
                    onClick={() => handleAdjust(qtyPaket1, setQtyPaket1, -1, 5, 15)}
                    type="button"
                    aria-label="Kurangi jumlah paket kecil"
                  >
                    -
                  </button>
                  <span className="font-extrabold text-slate-900 text-base min-w-[50px] text-center">
                    {qtyPaket1} Set
                  </span>
                  <button
                    className="w-8 h-8 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold flex items-center justify-center transition select-none cursor-pointer"
                    onClick={() => handleAdjust(qtyPaket1, setQtyPaket1, 1, 5, 15)}
                    type="button"
                    aria-label="Tambah jumlah paket kecil"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-200">
              <button
                className="w-full min-h-[46px] bg-emerald-600 hover:bg-emerald-700 text-white flex items-center justify-center gap-2 p-3 rounded-xl font-bold text-sm transition-colors cursor-pointer shadow-xs"
                onClick={() => handleOrderPaket('Paket Kecil Rumah', qtyPaket1)}
                type="button"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Pesan Paket Kecil via WA</span>
              </button>
            </div>
          </div>

          {/* PAKET 2: RUKO (BEST SELLER) */}
          <div className="bg-white p-6 sm:p-7 rounded-2xl border-2 border-blue-900 flex flex-col justify-between shadow-md relative">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-900 text-white px-3.5 py-0.5 rounded-full text-xs font-bold flex items-center gap-1 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span>Paling Banyak Disewa</span>
            </div>

            <div className="flex flex-col gap-4 mt-2">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-900 bg-blue-50 border border-blue-200 px-2.5 py-1 rounded-md w-fit">
                Proyek Ruko 2 - 3 Lantai
              </span>
              <div>
                <h3 className="text-xl font-extrabold text-slate-900">
                  Paket Ruko (20 - 50 Set)
                </h3>
                <p className="text-sm text-slate-600 mt-1 leading-relaxed">
                  Cocok untuk renovasi ruko, pemasangan fasad kaca/ACP, dan cor dak lantai bertingkat.
                </p>
              </div>

              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-xs sm:text-sm">
                <span className="font-bold text-slate-900 block mb-2">
                  Kelengkapan Termasuk:
                </span>
                <ul className="space-y-1.5 text-slate-600">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Main Frame 170cm SNI Tebal</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Catwalk Plat Bordes (Pijakan Aman)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Jack Base Kaki Ulir Penstabil Tanah</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Cross Brace + Joint Pin Komplit</span>
                  </li>
                </ul>
              </div>

              {/* Clean Stepper Quantity Control */}
              <div className="bg-blue-50/50 p-3.5 rounded-xl border border-blue-100 flex items-center justify-between">
                <span className="text-xs sm:text-sm font-semibold text-slate-700">
                  Jumlah Kebutuhan:
                </span>
                <div className="flex items-center gap-3">
                  <button
                    className="w-8 h-8 rounded-lg bg-white border border-slate-200 hover:bg-slate-100 text-slate-800 font-bold flex items-center justify-center transition select-none cursor-pointer"
                    onClick={() => handleAdjust(qtyPaket2, setQtyPaket2, -5, 20, 50)}
                    type="button"
                    aria-label="Kurangi jumlah paket ruko"
                  >
                    -
                  </button>
                  <span className="font-extrabold text-blue-900 text-base min-w-[50px] text-center">
                    {qtyPaket2} Set
                  </span>
                  <button
                    className="w-8 h-8 rounded-lg bg-white border border-slate-200 hover:bg-slate-100 text-slate-800 font-bold flex items-center justify-center transition select-none cursor-pointer"
                    onClick={() => handleAdjust(qtyPaket2, setQtyPaket2, 5, 20, 50)}
                    type="button"
                    aria-label="Tambah jumlah paket ruko"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-200">
              <button
                className="w-full min-h-[46px] bg-emerald-600 hover:bg-emerald-700 text-white flex items-center justify-center gap-2 p-3 rounded-xl font-bold text-sm transition-colors cursor-pointer shadow-xs"
                onClick={() => handleOrderPaket('Paket Ruko 2-3 Lantai', qtyPaket2)}
                type="button"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Pesan Paket Ruko via WA</span>
              </button>
            </div>
          </div>

          {/* PAKET 3: PROYEK BESAR */}
          <div className="bg-slate-50 p-6 sm:p-7 rounded-2xl border border-slate-200 flex flex-col justify-between shadow-xs hover:shadow-md transition">
            <div className="flex flex-col gap-4">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500 bg-white border border-slate-200 px-2.5 py-1 rounded-md w-fit">
                Gedung &amp; Gudang Logistik
              </span>
              <div>
                <h3 className="text-xl font-extrabold text-slate-900">
                  Paket Proyek Besar (50+ Set)
                </h3>
                <p className="text-sm text-slate-600 mt-1 leading-relaxed">
                  Untuk kontraktor utama, proyek pabrik, pembangunan mall, atau tender dinas BUMN.
                </p>
              </div>

              <div className="bg-white p-4 rounded-xl border border-slate-200 text-xs sm:text-sm">
                <span className="font-bold text-slate-900 block mb-2">
                  Kelengkapan Termasuk:
                </span>
                <ul className="space-y-1.5 text-slate-600">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Roda Caster Heavy Duty (Rem Pengunci)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Tangga Scaffolding Akses Pekerja</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Pipa Support / Span Deck / Tie Rod</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Surat Dukungan Tender Kontraktor</span>
                  </li>
                </ul>
              </div>

              {/* Clean Stepper Quantity Control */}
              <div className="bg-white p-3.5 rounded-xl border border-slate-200 flex items-center justify-between">
                <span className="text-xs sm:text-sm font-semibold text-slate-700">
                  Jumlah Kebutuhan:
                </span>
                <div className="flex items-center gap-3">
                  <button
                    className="w-8 h-8 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold flex items-center justify-center transition select-none cursor-pointer"
                    onClick={() => handleAdjust(qtyPaket3, setQtyPaket3, -10, 50, 500)}
                    type="button"
                    aria-label="Kurangi jumlah paket proyek"
                  >
                    -
                  </button>
                  <span className="font-extrabold text-slate-900 text-base min-w-[50px] text-center">
                    {qtyPaket3} Set
                  </span>
                  <button
                    className="w-8 h-8 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold flex items-center justify-center transition select-none cursor-pointer"
                    onClick={() => handleAdjust(qtyPaket3, setQtyPaket3, 10, 50, 500)}
                    type="button"
                    aria-label="Tambah jumlah paket proyek"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-200">
              <button
                className="w-full min-h-[46px] bg-slate-900 hover:bg-slate-800 text-white flex items-center justify-center gap-2 p-3 rounded-xl font-bold text-sm transition-colors cursor-pointer shadow-xs"
                onClick={() => handleOrderPaket('Paket Proyek Besar', qtyPaket3)}
                type="button"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>Pesan Paket Proyek via WA</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}