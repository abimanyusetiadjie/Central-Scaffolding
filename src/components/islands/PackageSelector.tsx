import { useState } from 'react';
import { trackWhatsAppClick } from '../../utils/analytics';

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
      `Halo Mandor Perkasa, saya mau order / tanya *${packageName}* perkiraan *${count} Set* scaffolding untuk lokasi proyek di *${defaultLocation}*. Apakah ready stock kirim hari ini?`
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
      className="w-full bg-surface-container py-12 sm:py-20 px-4 sm:px-6 lg:px-8 border-b-4 border-surface-container-highest scroll-mt-24 md:scroll-mt-32"
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-8">
        {/* Section Intro */}
        <div className="text-center flex flex-col items-center gap-3">
          <span className="bg-primary text-on-primary px-4 py-1.5 rounded-lg font-label-md text-xs sm:text-label-md uppercase tracking-wide font-bold">
            SIMULASI CEPAT UNTUK MANDOR
          </span>
          <h2
            id="package-selector-title"
            className="font-headline-xl-mobile md:font-headline-xl text-headline-xl-mobile md:text-headline-xl uppercase text-primary font-extrabold"
          >
            PAKET HEMAT LENGKAP - TINGGAL PAKAI
          </h2>
          <p className="font-body-xl text-base sm:text-body-xl text-on-surface max-w-3xl leading-relaxed font-bold">
            Tidak perlu hitung rumus rumit! Cukup pilih jenis bangunan proyek Anda, komponen langsung dikirim komplit tanpa ada part yang tertinggal.
          </p>
        </div>

        {/* 3 Stepper Package Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
          {/* PAKET 1: KECIL */}
          <div className="bg-surface-container-lowest p-6 rounded-2xl border-4 border-outline-variant flex flex-col justify-between shadow-md">
            <div className="flex flex-col gap-4">
              <div className="bg-surface-container-high py-1.5 px-3 rounded-lg font-label-md text-xs uppercase text-on-surface-variant font-bold self-start">
                PROYEK RUMAH &amp; CAT
              </div>
              <div>
                <h3 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg uppercase text-primary font-extrabold">
                  Paket Kecil (5 - 15 Set)
                </h3>
                <p className="font-body-lg text-sm sm:text-body-lg text-on-surface-variant mt-1">
                  Cocok untuk perbaikan plafon, cat rumah tinggal, pasang kanopi baja ringan.
                </p>
              </div>

              <div className="bg-surface-container-low p-4 rounded-xl border border-outline-variant">
                <span className="font-label-md text-xs uppercase text-primary font-bold">
                  KELENGKAPAN SUDAH TERMASUK:
                </span>
                <ul className="font-body-lg text-sm sm:text-base text-on-surface list-disc list-inside mt-2 space-y-1">
                  <li>Main Frame 170cm SNI</li>
                  <li>Cross Brace Silangan 220cm</li>
                  <li>Joint Pin Pengunci Baja</li>
                </ul>
              </div>

              {/* Stepper Interactive Control */}
              <div className="bg-surface-container p-4 rounded-xl flex flex-col gap-2">
                <label className="font-label-md text-xs sm:text-sm uppercase text-on-surface font-bold">
                  Estimasi Jumlah Set:
                </label>
                <div className="flex items-center justify-between gap-4">
                  <button
                    className="w-14 h-14 bg-primary text-on-primary font-headline-xl text-2xl rounded-xl border-2 border-primary-container flex items-center justify-center active:bg-primary-container select-none cursor-pointer font-extrabold"
                    onClick={() => handleAdjust(qtyPaket1, setQtyPaket1, -1, 5, 15)}
                    type="button"
                    aria-label="Kurangi jumlah paket kecil"
                  >
                    -
                  </button>
                  <div className="flex items-center gap-1.5">
                    <span className="font-display-hero-mobile md:font-display-hero text-3xl sm:text-4xl text-primary font-extrabold">
                      {qtyPaket1}
                    </span>
                    <span className="font-headline-md text-base text-on-surface-variant font-bold">
                      SET
                    </span>
                  </div>
                  <button
                    className="w-14 h-14 bg-primary text-on-primary font-headline-xl text-2xl rounded-xl border-2 border-primary-container flex items-center justify-center active:bg-primary-container select-none cursor-pointer font-extrabold"
                    onClick={() => handleAdjust(qtyPaket1, setQtyPaket1, 1, 5, 15)}
                    type="button"
                    aria-label="Tambah jumlah paket kecil"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-outline-variant/40">
              <button
                className="w-full min-h-[56px] bg-secondary hover:bg-on-secondary-container text-on-secondary flex items-center justify-center gap-2 p-3.5 rounded-xl font-headline-md text-base uppercase border-2 border-on-secondary-fixed shadow-[0_4px_0_#002109] active:translate-y-[2px] transition-all cursor-pointer font-bold"
                onClick={() => handleOrderPaket('Paket Kecil', qtyPaket1)}
                type="button"
              >
                <span className="material-symbols-outlined text-[24px]">chat</span>
                <span>PILIH PAKET KECIL VIA WA</span>
              </button>
            </div>
          </div>

          {/* PAKET 2: RUKO (BEST SELLER) */}
          <div className="bg-surface-container-lowest p-6 rounded-2xl border-4 border-primary shadow-2xl flex flex-col justify-between relative">
            <div className="absolute -top-3.5 right-4 bg-tertiary-fixed text-on-tertiary-fixed px-4 py-1 rounded-full font-label-md text-xs uppercase border-2 border-tertiary-container shadow-md font-extrabold">
              ★ PALING BANYAK DISEWA
            </div>

            <div className="flex flex-col gap-4 mt-2">
              <div className="bg-primary text-on-primary py-1 px-3 rounded-lg font-label-md text-xs uppercase self-start font-bold">
                PROYEK RUKO 2-3 LANTAI
              </div>
              <div>
                <h3 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg uppercase text-primary font-extrabold">
                  Paket Ruko (20 - 50 Set)
                </h3>
                <p className="font-body-lg text-sm sm:text-body-lg text-on-surface-variant mt-1">
                  Cocok untuk bangun ruko, renovasi fasad gedung bertingkat, dan cor dak beton.
                </p>
              </div>

              <div className="bg-surface-container-low p-4 rounded-xl border border-outline-variant">
                <span className="font-label-md text-xs uppercase text-primary font-bold">
                  KELENGKAPAN SUDAH TERMASUK:
                </span>
                <ul className="font-body-lg text-sm sm:text-base text-on-surface list-disc list-inside mt-2 space-y-1">
                  <li>Main Frame 170cm SNI Tebal</li>
                  <li>Catwalk Pijakan Plat Bordes Aman</li>
                  <li>Jack Base Kaki Ulir Penstabil</li>
                  <li>Cross Brace + Joint Pin Komplit</li>
                </ul>
              </div>

              {/* Stepper Interactive Control */}
              <div className="bg-surface-container-high p-4 rounded-xl flex flex-col gap-2 border-2 border-primary-fixed-dim">
                <label className="font-label-md text-xs sm:text-sm uppercase text-on-surface font-bold">
                  Estimasi Jumlah Set:
                </label>
                <div className="flex items-center justify-between gap-4">
                  <button
                    className="w-14 h-14 bg-primary text-on-primary font-headline-xl text-2xl rounded-xl border-2 border-primary-container flex items-center justify-center active:bg-primary-container select-none cursor-pointer font-extrabold"
                    onClick={() => handleAdjust(qtyPaket2, setQtyPaket2, -5, 20, 50)}
                    type="button"
                    aria-label="Kurangi jumlah paket ruko"
                  >
                    -
                  </button>
                  <div className="flex items-center gap-1.5">
                    <span className="font-display-hero-mobile md:font-display-hero text-3xl sm:text-4xl text-primary font-extrabold">
                      {qtyPaket2}
                    </span>
                    <span className="font-headline-md text-base text-on-surface-variant font-bold">
                      SET
                    </span>
                  </div>
                  <button
                    className="w-14 h-14 bg-primary text-on-primary font-headline-xl text-2xl rounded-xl border-2 border-primary-container flex items-center justify-center active:bg-primary-container select-none cursor-pointer font-extrabold"
                    onClick={() => handleAdjust(qtyPaket2, setQtyPaket2, 5, 20, 50)}
                    type="button"
                    aria-label="Tambah jumlah paket ruko"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-outline-variant/40">
              <button
                className="w-full min-h-[56px] bg-secondary hover:bg-on-secondary-container text-on-secondary flex items-center justify-center gap-2 p-3.5 rounded-xl font-headline-md text-base uppercase border-2 border-on-secondary-fixed shadow-[0_4px_0_#002109] active:translate-y-[2px] transition-all cursor-pointer font-bold"
                onClick={() => handleOrderPaket('Paket Ruko', qtyPaket2)}
                type="button"
              >
                <span className="material-symbols-outlined text-[24px]">chat</span>
                <span>PILIH PAKET RUKO VIA WA</span>
              </button>
            </div>
          </div>

          {/* PAKET 3: PROYEK BESAR */}
          <div className="bg-surface-container-lowest p-6 rounded-2xl border-4 border-outline-variant flex flex-col justify-between shadow-md">
            <div className="flex flex-col gap-4">
              <div className="bg-surface-container-high py-1.5 px-3 rounded-lg font-label-md text-xs uppercase text-on-surface-variant font-bold self-start">
                PROYEK GEDUNG &amp; GUDANG
              </div>
              <div>
                <h3 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg uppercase text-primary font-extrabold">
                  Paket Proyek Besar (50+ Set)
                </h3>
                <p className="font-body-lg text-sm sm:text-body-lg text-on-surface-variant mt-1">
                  Untuk proyek kontraktor utama, gudang logistik pabrik, mall, atau tender dinas.
                </p>
              </div>

              <div className="bg-surface-container-low p-4 rounded-xl border border-outline-variant">
                <span className="font-label-md text-xs uppercase text-primary font-bold">
                  KELENGKAPAN SUDAH TERMASUK:
                </span>
                <ul className="font-body-lg text-sm sm:text-base text-on-surface list-disc list-inside mt-2 space-y-1">
                  <li>Roda Caster Heavy Duty (Rem Pengunci)</li>
                  <li>Tangga Scaffolding Naik-Turun Tukang</li>
                  <li>Pipa Support / Span Deck / Tie Rod</li>
                  <li>Surat Dukungan Tender Kontraktor</li>
                </ul>
              </div>

              {/* Stepper Interactive Control */}
              <div className="bg-surface-container p-4 rounded-xl flex flex-col gap-2">
                <label className="font-label-md text-xs sm:text-sm uppercase text-on-surface font-bold">
                  Estimasi Jumlah Set:
                </label>
                <div className="flex items-center justify-between gap-4">
                  <button
                    className="w-14 h-14 bg-primary text-on-primary font-headline-xl text-2xl rounded-xl border-2 border-primary-container flex items-center justify-center active:bg-primary-container select-none cursor-pointer font-extrabold"
                    onClick={() => handleAdjust(qtyPaket3, setQtyPaket3, -10, 50, 500)}
                    type="button"
                    aria-label="Kurangi jumlah paket proyek"
                  >
                    -
                  </button>
                  <div className="flex items-center gap-1.5">
                    <span className="font-display-hero-mobile md:font-display-hero text-3xl sm:text-4xl text-primary font-extrabold">
                      {qtyPaket3}
                    </span>
                    <span className="font-headline-md text-base text-on-surface-variant font-bold">
                      SET
                    </span>
                  </div>
                  <button
                    className="w-14 h-14 bg-primary text-on-primary font-headline-xl text-2xl rounded-xl border-2 border-primary-container flex items-center justify-center active:bg-primary-container select-none cursor-pointer font-extrabold"
                    onClick={() => handleAdjust(qtyPaket3, setQtyPaket3, 10, 50, 500)}
                    type="button"
                    aria-label="Tambah jumlah paket proyek"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-outline-variant/40">
              <button
                className="w-full min-h-[56px] bg-secondary hover:bg-on-secondary-container text-on-secondary flex items-center justify-center gap-2 p-3.5 rounded-xl font-headline-md text-base uppercase border-2 border-on-secondary-fixed shadow-[0_4px_0_#002109] active:translate-y-[2px] transition-all cursor-pointer font-bold"
                onClick={() => handleOrderPaket('Paket Proyek Besar', qtyPaket3)}
                type="button"
              >
                <span className="material-symbols-outlined text-[24px]">chat</span>
                <span>PILIH PAKET PROYEK VIA WA</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
