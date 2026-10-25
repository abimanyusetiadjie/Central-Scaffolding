import { useState } from 'react';
import { trackWhatsAppClick } from '../../utils/analytics';
import { MessageCircle } from 'lucide-react';

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
  const [qtyPaket3, setQtyPaket3] = useState(100);

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
      `Halo Central Scaffolding, saya mau order / tanya *${packageName}* perkiraan *${count} Set* scaffolding untuk lokasi proyek di *${defaultLocation}*. Apakah ready stock kirim hari ini?`
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
      className="w-full bg-[#eef2ff] py-12 md:py-16 px-4 sm:px-6 lg:px-8 border-b-4 border-slate-200 scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-8">
        {/* Section Intro */}
        <div className="text-center flex flex-col items-center gap-3">
          <span className="bg-[#00236f] text-white px-4 py-1.5 rounded-lg text-xs sm:text-sm uppercase tracking-wide font-bold">
            SIMULASI CEPAT UNTUK MANDOR
          </span>
          <h2
            id="package-selector-title"
            className="text-2xl sm:text-3xl md:text-4xl uppercase text-[#00236f] font-extrabold tracking-tight"
          >
            PAKET HEMAT LENGKAP - TINGGAL PAKAI
          </h2>
          <p className="text-base sm:text-lg text-slate-700 max-w-3xl leading-relaxed font-bold">
            Tidak perlu hitung rumus rumit! Cukup pilih jenis bangunan proyek Anda, komponen langsung dikirim komplit tanpa ada part yang tertinggal.
          </p>
        </div>

        {/* 3 Stepper Package Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
          {/* PAKET 1: KECIL */}
          <div className="bg-white p-6 rounded-2xl border-4 border-slate-300 flex flex-col justify-between shadow-md">
            <div className="flex flex-col gap-4">
              <div className="bg-slate-200 text-slate-800 py-1.5 px-3 rounded-lg text-xs uppercase font-bold self-start">
                PROYEK RUMAH &amp; CAT
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl uppercase text-[#00236f] font-extrabold">
                  Paket Kecil (5 - 15 Set)
                </h3>
                <p className="text-sm sm:text-base text-slate-600 mt-1">
                  Cocok untuk perbaikan plafon, cat rumah tinggal, pasang kanopi baja ringan.
                </p>
              </div>

              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                <span className="text-xs uppercase text-[#00236f] font-bold">
                  KELENGKAPAN SUDAH TERMASUK:
                </span>
                <ul className="text-sm sm:text-base text-slate-700 list-disc list-inside mt-2 space-y-1">
                  <li>Main Frame 170cm SNI</li>
                  <li>Cross Brace Silangan 220cm</li>
                  <li>Joint Pin Pengunci Baja</li>
                </ul>
              </div>

              {/* Stepper Interactive Control */}
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 flex flex-col gap-2">
                <label className="text-xs sm:text-sm uppercase text-slate-800 font-bold">
                  Estimasi Jumlah Set:
                </label>
                <div className="flex items-center justify-between gap-4">
                  <button
                    className="w-12 h-12 bg-[#00236f] text-white text-2xl font-bold rounded-lg flex items-center justify-center active:bg-[#1e3a8a] hover:bg-[#1e3a8a] select-none cursor-pointer transition-colors"
                    onClick={() => handleAdjust(qtyPaket1, setQtyPaket1, -1, 5, 15)}
                    type="button"
                    aria-label="Kurangi jumlah paket kecil"
                  >
                    -
                  </button>
                  <div className="flex items-center gap-1.5">
                    <span className="text-3xl sm:text-4xl text-[#00236f] font-extrabold">
                      {qtyPaket1}
                    </span>
                    <span className="text-base text-slate-600 font-bold">
                      SET
                    </span>
                  </div>
                  <button
                    className="w-12 h-12 bg-[#00236f] text-white text-2xl font-bold rounded-lg flex items-center justify-center active:bg-[#1e3a8a] hover:bg-[#1e3a8a] select-none cursor-pointer transition-colors"
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
                className="w-full min-h-[52px] bg-[#16A34A] hover:bg-[#15803D] text-white flex items-center justify-center gap-2 p-3.5 rounded-xl text-base uppercase border-2 border-green-800 shadow-[0_4px_0_#14532d] active:translate-y-[2px] transition-all cursor-pointer font-bold"
                onClick={() => handleOrderPaket('Paket Kecil', qtyPaket1)}
                type="button"
              >
                <MessageCircle className="w-5 h-5" />
                <span>PILIH PAKET KECIL VIA WA</span>
              </button>
            </div>
          </div>

          {/* PAKET 2: RUKO (BEST SELLER) */}
          <div className="bg-white p-6 rounded-2xl border-4 border-[#00236f] shadow-xl flex flex-col justify-between relative">
            <div className="absolute -top-3.5 right-4 bg-[#FACC15] text-slate-900 px-4 py-1 rounded-full text-xs uppercase border-2 border-yellow-500 shadow-md font-extrabold">
              ★ PALING BANYAK DISEWA
            </div>

            <div className="flex flex-col gap-4 mt-2">
              <div className="bg-[#00236f] text-white py-1 px-3 rounded-lg text-xs uppercase self-start font-bold">
                PROYEK RUKO 2-3 LANTAI
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl uppercase text-[#00236f] font-extrabold">
                  Paket Ruko (20 - 50 Set)
                </h3>
                <p className="text-sm sm:text-base text-slate-600 mt-1">
                  Cocok untuk bangun ruko, renovasi fasad gedung bertingkat, dan cor dak beton.
                </p>
              </div>

              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                <span className="text-xs uppercase text-[#00236f] font-bold">
                  KELENGKAPAN SUDAH TERMASUK:
                </span>
                <ul className="text-sm sm:text-base text-slate-700 list-disc list-inside mt-2 space-y-1">
                  <li>Main Frame 170cm SNI Tebal</li>
                  <li>Catwalk Pijakan Plat Bordes Aman</li>
                  <li>Jack Base Kaki Ulir Penstabil</li>
                  <li>Cross Brace + Joint Pin Komplit</li>
                </ul>
              </div>

              {/* Stepper Interactive Control */}
              <div className="bg-blue-50 p-4 rounded-xl flex flex-col gap-2 border-2 border-blue-200">
                <label className="text-xs sm:text-sm uppercase text-slate-800 font-bold">
                  Estimasi Jumlah Set:
                </label>
                <div className="flex items-center justify-between gap-4">
                  <button
                    className="w-12 h-12 bg-[#00236f] text-white text-2xl font-bold rounded-lg flex items-center justify-center active:bg-[#1e3a8a] hover:bg-[#1e3a8a] select-none cursor-pointer transition-colors"
                    onClick={() => handleAdjust(qtyPaket2, setQtyPaket2, -5, 20, 50)}
                    type="button"
                    aria-label="Kurangi jumlah paket ruko"
                  >
                    -
                  </button>
                  <div className="flex items-center gap-1.5">
                    <span className="text-3xl sm:text-4xl text-[#00236f] font-extrabold">
                      {qtyPaket2}
                    </span>
                    <span className="text-base text-slate-600 font-bold">
                      SET
                    </span>
                  </div>
                  <button
                    className="w-12 h-12 bg-[#00236f] text-white text-2xl font-bold rounded-lg flex items-center justify-center active:bg-[#1e3a8a] hover:bg-[#1e3a8a] select-none cursor-pointer transition-colors"
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
                className="w-full min-h-[52px] bg-[#16A34A] hover:bg-[#15803D] text-white flex items-center justify-center gap-2 p-3.5 rounded-xl text-base uppercase border-2 border-green-800 shadow-[0_4px_0_#14532d] active:translate-y-[2px] transition-all cursor-pointer font-bold"
                onClick={() => handleOrderPaket('Paket Ruko', qtyPaket2)}
                type="button"
              >
                <MessageCircle className="w-5 h-5" />
                <span>PILIH PAKET RUKO VIA WA</span>
              </button>
            </div>
          </div>

          {/* PAKET 3: PROYEK BESAR */}
          <div className="bg-white p-6 rounded-2xl border-4 border-slate-300 flex flex-col justify-between shadow-md">
            <div className="flex flex-col gap-4">
              <div className="bg-slate-200 text-slate-800 py-1.5 px-3 rounded-lg text-xs uppercase font-bold self-start">
                PROYEK GEDUNG &amp; GUDANG
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl uppercase text-[#00236f] font-extrabold">
                  Paket Proyek Besar (50+ Set)
                </h3>
                <p className="text-sm sm:text-base text-slate-600 mt-1">
                  Untuk proyek kontraktor utama, gudang logistik pabrik, mall, atau tender dinas.
                </p>
              </div>

              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                <span className="text-xs uppercase text-[#00236f] font-bold">
                  KELENGKAPAN SUDAH TERMASUK:
                </span>
                <ul className="text-sm sm:text-base text-slate-700 list-disc list-inside mt-2 space-y-1">
                  <li>Roda Caster Heavy Duty (Rem Pengunci)</li>
                  <li>Tangga Scaffolding Naik-Turun Tukang</li>
                  <li>Pipa Support / Span Deck / Tie Rod</li>
                  <li>Surat Dukungan Tender Kontraktor</li>
                </ul>
              </div>

              {/* Stepper Interactive Control */}
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 flex flex-col gap-2">
                <label className="text-xs sm:text-sm uppercase text-slate-800 font-bold">
                  Estimasi Jumlah Set:
                </label>
                <div className="flex items-center justify-between gap-4">
                  <button
                    className="w-12 h-12 bg-[#00236f] text-white text-2xl font-bold rounded-lg flex items-center justify-center active:bg-[#1e3a8a] hover:bg-[#1e3a8a] select-none cursor-pointer transition-colors"
                    onClick={() => handleAdjust(qtyPaket3, setQtyPaket3, -10, 50, 500)}
                    type="button"
                    aria-label="Kurangi jumlah paket proyek"
                  >
                    -
                  </button>
                  <div className="flex items-center gap-1.5">
                    <span className="text-3xl sm:text-4xl text-[#00236f] font-extrabold">
                      {qtyPaket3}
                    </span>
                    <span className="text-base text-slate-600 font-bold">
                      SET
                    </span>
                  </div>
                  <button
                    className="w-12 h-12 bg-[#00236f] text-white text-2xl font-bold rounded-lg flex items-center justify-center active:bg-[#1e3a8a] hover:bg-[#1e3a8a] select-none cursor-pointer transition-colors"
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
                className="w-full min-h-[52px] bg-[#16A34A] hover:bg-[#15803D] text-white flex items-center justify-center gap-2 p-3.5 rounded-xl text-base uppercase border-2 border-green-800 shadow-[0_4px_0_#14532d] active:translate-y-[2px] transition-all cursor-pointer font-bold"
                onClick={() => handleOrderPaket('Paket Proyek Besar', qtyPaket3)}
                type="button"
              >
                <MessageCircle className="w-5 h-5" />
                <span>PILIH PAKET PROYEK VIA WA</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}