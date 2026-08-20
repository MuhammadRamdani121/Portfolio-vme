import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import sertifikat from "../../data/Sertifikat";

export default function Sertifikat({ limit = false, portfolio = false }) {
  /*
   * =====================================================
   * PAGE SERTIFIKAT
   * =====================================================
   *
   * portfolio = false
   *
   * Semua sertifikat ditampilkan.
   *
   * Mobile  = 1
   * Tablet  = 2
   * Desktop = 2
   */

  if (!portfolio) {
    return (
      <main className="mx-auto max-w-6xl px-5 pt-6 pb-12">
        <section className="mb-16">
          {/* CATEGORY TITLE */}
          <header className="mb-8">
            <h2 className="text-2xl font-bold text-[#1A5319]">
              Sertifikasi & Pengembangan
            </h2>
          </header>

          {/* ALL CERTIFICATES */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {sertifikat.map((item) => (
              <CertificateCard key={item.id} item={item} />
            ))}
          </div>
        </section>
      </main>
    );
  }

  /*
   * =====================================================
   * HOME
   * =====================================================
   *
   * portfolio = true
   *
   * Mobile  = 1
   * Tablet  = 2
   * Desktop = 3
   *
   * Menggunakan slider.
   */

  return <CertificateSlider certificates={sertifikat} limit={limit} />;
}

/*
 * =====================================================
 * HOME SLIDER
 * =====================================================
 */

function CertificateSlider({ certificates, limit }) {
  const [startIndex, setStartIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);

  const totalCertificates = certificates.length;

  /*
   * =====================================================
   * RESPONSIVE JUMLAH SERTIFIKAT
   * =====================================================
   */

  useEffect(() => {
    const updateVisibleCount = () => {
      if (window.innerWidth < 768) {
        // Mobile
        setVisibleCount(1);
      } else if (window.innerWidth < 1024) {
        // Tablet
        setVisibleCount(2);
      } else {
        // Desktop
        setVisibleCount(3);
      }
    };

    updateVisibleCount();

    window.addEventListener("resize", updateVisibleCount);

    return () => {
      window.removeEventListener("resize", updateVisibleCount);
    };
  }, []);

  /*
   * =====================================================
   * MAX INDEX
   * =====================================================
   */

  const maxIndex = Math.max(totalCertificates - visibleCount, 0);

  /*
   * Mencegah startIndex keluar batas
   */

  const safeIndex = Math.min(startIndex, maxIndex);

  /*
   * =====================================================
   * SERTIFIKAT YANG DITAMPILKAN
   * =====================================================
   */

  const visibleCertificates = certificates.slice(
    safeIndex,
    safeIndex + visibleCount,
  );

  /*
   * =====================================================
   * NEXT
   * =====================================================
   */

  const handleNext = () => {
    if (safeIndex < maxIndex) {
      setStartIndex((prev) => Math.min(prev + 1, maxIndex));
    }
  };

  /*
   * =====================================================
   * PREVIOUS
   * =====================================================
   */

  const handlePrevious = () => {
    if (safeIndex > 0) {
      setStartIndex((prev) => Math.max(prev - 1, 0));
    }
  };

  return (
    <main className="mx-auto max-w-6xl px-5 pt-6 pb-12">
      <section className="mb-16">
        {/* CATEGORY TITLE */}
        <header className="mb-8">
          <h2 className="text-2xl font-bold text-[#1A5319]">
            Sertifikasi & Pengembangan
          </h2>
        </header>

        {/* SLIDER */}
        <div className="relative px-6 md:px-8">
          {/* PREVIOUS */}
          <button
            type="button"
            onClick={handlePrevious}
            disabled={safeIndex === 0}
            aria-label="Sertifikat sebelumnya"
            className={`absolute top-1/2 left-0 z-20 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border text-lg font-bold shadow-md transition md:h-11 md:w-11 md:text-xl ${
              safeIndex === 0
                ? "cursor-not-allowed border-[#80AF81] bg-[#D6EFD8] text-[#80AF81] opacity-40"
                : "border-[#80AF81] bg-[#D6EFD8] text-[#1A5319] hover:bg-[#508D4E] hover:text-[#D6EFD8]"
            }`}
          >
            ←
          </button>

          {/* CERTIFICATE CARDS */}
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {visibleCertificates.map((item) => (
              <CertificateCard key={item.id} item={item} />
            ))}
          </div>

          {/* NEXT */}
          <button
            type="button"
            onClick={handleNext}
            disabled={safeIndex >= maxIndex}
            aria-label="Sertifikat berikutnya"
            className={`absolute top-1/2 right-0 z-20 flex h-10 w-10 translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border text-lg font-bold shadow-md transition md:h-11 md:w-11 md:text-xl ${
              safeIndex >= maxIndex
                ? "cursor-not-allowed border-[#80AF81] bg-[#D6EFD8] text-[#80AF81] opacity-40"
                : "border-[#80AF81] bg-[#D6EFD8] text-[#1A5319] hover:bg-[#508D4E] hover:text-[#D6EFD8]"
            }`}
          >
            →
          </button>
        </div>

        {/* LIHAT SELENGKAPNYA */}
        {limit && (
          <footer className="mt-6 flex justify-center md:justify-end">
            <Link
              to="/portfolio/sertifikat"
              className="font-semibold text-[#508D4E] transition hover:text-[#1A5319]"
            >
              Lihat Selengkapnya →
            </Link>
          </footer>
        )}
      </section>
    </main>
  );
}

/*
 * =====================================================
 * CERTIFICATE CARD
 * =====================================================
 */

function CertificateCard({ item }) {
  return (
    <article className="group flex min-w-0 flex-col overflow-hidden rounded-2xl border border-[#80AF81] bg-[#D6EFD8] shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-[#508D4E] hover:shadow-xl">
      {/* IMAGE */}
      <div className="h-48 overflow-hidden bg-[#80AF81] sm:h-52 md:h-48 lg:h-56">
        <img
          src={item.image}
          alt={item.title}
          className="h-full w-full object-contain p-3 transition duration-500 group-hover:scale-105"
        />
      </div>

      {/* CONTENT */}
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        {/* TITLE */}
        <h3 className="text-lg font-bold text-[#1A5319] sm:text-xl">
          {item.title}
        </h3>

        {/* ISSUER */}
        {item.issuer && (
          <p className="mt-3 text-sm font-semibold text-[#508D4E]">
            {item.issuer}
          </p>
        )}

        {/* YEAR */}
        {item.year && (
          <span className="mt-3 w-fit rounded-full border border-[#508D4E] px-3 py-1 text-xs font-medium text-[#1A5319] sm:text-sm">
            {item.year}
          </span>
        )}

        {/* DESCRIPTION */}
        {item.description && (
          <p className="mt-4 flex-1 text-sm leading-6 text-[#508D4E]">
            {item.description}
          </p>
        )}

        {/* DETAIL */}
        <footer className="mt-5">
          <Link
            to={`/portfolio/sertifikat/${item.id}`}
            className="block w-full rounded-lg bg-[#508D4E] py-3 text-center text-sm font-semibold text-[#D6EFD8] transition hover:bg-[#1A5319] sm:text-base"
          >
            Lihat Detail →
          </Link>
        </footer>
      </div>
    </article>
  );
}
