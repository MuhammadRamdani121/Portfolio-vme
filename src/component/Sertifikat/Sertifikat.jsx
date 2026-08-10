import { useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import sertifikat from "../../data/Sertifikat";

export default function Sertifikat({ limit = false, portfolio = false }) {
  const [activeCard, setActiveCard] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const visibleSertifikat = limit
    ? sertifikat.slice(currentIndex, currentIndex + 3)
    : sertifikat;

  const canPrev = currentIndex > 0;
  const canNext = currentIndex + 3 < sertifikat.length;

  const handlePrev = () => {
    if (canPrev) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const handleNext = () => {
    if (canNext) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const gridClass = portfolio
    ? "grid gap-8 md:grid-cols-2"
    : "grid gap-8 md:grid-cols-2 lg:grid-cols-3";

  return (
    <>
      {/* ==================== TITLE ==================== */}
      {!portfolio && (
        <header className="mx-auto mt-16 flex max-w-6xl justify-center px-5">
          <h1 className="border-b-2 border-[#508D4E] pb-3 text-center text-4xl font-bold text-[#1A5319]">
            Sertifikat
          </h1>
        </header>
      )}

      <main className="mx-auto max-w-6xl px-5 py-12">
        {/* =====================================================
            CAROUSEL MODE
        ===================================================== */}
        {limit ? (
          <>
            <div className="relative px-5 md:px-6">
              {/* ==================== PREVIOUS ==================== */}
              <button
                type="button"
                onClick={handlePrev}
                disabled={!canPrev}
                aria-label="Sertifikat sebelumnya"
                className={`absolute top-1/2 left-0 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-[#80AF81] bg-[#D6EFD8] text-[#1A5319] shadow-md transition-all duration-300 ${
                  canPrev
                    ? "cursor-pointer hover:border-[#508D4E] hover:bg-[#508D4E] hover:text-[#D6EFD8]"
                    : "pointer-events-none opacity-0"
                }`}
              >
                <FaArrowLeft size={14} />
              </button>

              {/* ==================== CARDS ==================== */}
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                {visibleSertifikat.map((item) => (
                  <section
                    key={item.id}
                    onClick={() =>
                      setActiveCard(activeCard === item.id ? null : item.id)
                    }
                    className="group flex cursor-pointer flex-col overflow-hidden rounded-2xl border border-[#80AF81] bg-[#D6EFD8] shadow-lg transition-all duration-500 hover:-translate-y-2 hover:border-[#508D4E] hover:shadow-xl"
                  >
                    {/* ==================== IMAGE FRAME ==================== */}
                    <div className="relative m-3 overflow-hidden rounded-2xl border border-[#80AF81] bg-[#D6EFD8] p-2 shadow-md transition duration-500 group-hover:border-[#508D4E] group-hover:shadow-lg">
                      {/* Decorative Corner */}
                      <div className="absolute top-0 left-0 z-10 h-8 w-8 rounded-br-2xl border-r-2 border-b-2 border-[#508D4E]" />

                      <div className="absolute right-0 bottom-0 z-10 h-8 w-8 rounded-tl-2xl border-t-2 border-l-2 border-[#508D4E]" />

                      {/* Certificate Image */}
                      <div className="flex h-52 items-center justify-center overflow-hidden rounded-xl border border-[#80AF81]/60 bg-white">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="max-h-full max-w-full object-contain p-2 transition duration-500 group-hover:scale-105"
                        />
                      </div>
                    </div>

                    {/* ==================== CONTENT ==================== */}
                    <div className="flex flex-1 flex-col p-5">
                      {/* Title + Year */}
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <h2 className="text-xl font-bold text-[#1A5319]">
                            {item.title}
                          </h2>

                          <p className="mt-1 text-sm font-medium text-[#508D4E]">
                            {item.issuer}
                          </p>
                        </div>

                        <span className="shrink-0 rounded-full bg-[#80AF81] px-3 py-1 text-sm font-medium text-[#1A5319]">
                          {item.year}
                        </span>
                      </div>

                      {/* Description */}
                      <p
                        className={`mt-4 flex-1 overflow-hidden text-sm leading-6 text-[#508D4E] transition-all duration-500 ${
                          activeCard === item.id
                            ? "max-h-60"
                            : "max-h-18 md:group-hover:max-h-60"
                        }`}
                      >
                        {item.description}
                      </p>

                      {/* Button */}
                      <footer className="mt-6">
                        <button
                          type="button"
                          className="w-full rounded-lg border border-[#508D4E] py-2 font-semibold text-[#1A5319] transition-all duration-300 hover:bg-[#508D4E] hover:text-[#D6EFD8]"
                        >
                          Lihat Sertifikat →
                        </button>
                      </footer>
                    </div>
                  </section>
                ))}
              </div>

              {/* ==================== NEXT ==================== */}
              <button
                type="button"
                onClick={handleNext}
                disabled={!canNext}
                aria-label="Sertifikat berikutnya"
                className={`absolute top-1/2 right-0 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-[#80AF81] bg-[#D6EFD8] text-[#1A5319] shadow-md transition-all duration-300 ${
                  canNext
                    ? "cursor-pointer hover:border-[#508D4E] hover:bg-[#508D4E] hover:text-[#D6EFD8]"
                    : "pointer-events-none opacity-0"
                }`}
              >
                <FaArrowRight size={14} />
              </button>
            </div>

            {/* ==================== SEE MORE ==================== */}
            <footer className="mt-10 flex justify-end">
              <Link
                to="/portfolio/sertifikat"
                className="group inline-flex items-center gap-2 font-semibold text-[#508D4E] transition-colors duration-300 hover:text-[#1A5319]"
              >
                Lihat Selengkapnya
                <FaArrowRight
                  size={13}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </footer>
          </>
        ) : (
          /* =====================================================
             PORTFOLIO MODE
          ===================================================== */
          <div className={gridClass}>
            {visibleSertifikat.map((item) => (
              <section
                key={item.id}
                onClick={() =>
                  setActiveCard(activeCard === item.id ? null : item.id)
                }
                className="group flex cursor-pointer flex-col overflow-hidden rounded-2xl border border-[#80AF81] bg-[#D6EFD8] shadow-lg transition-all duration-500 hover:-translate-y-2 hover:border-[#508D4E] hover:shadow-xl"
              >
                {/* ==================== IMAGE FRAME ==================== */}
                <div className="relative m-3 overflow-hidden rounded-2xl border border-[#80AF81] bg-[#D6EFD8] p-2 shadow-md transition duration-500 group-hover:border-[#508D4E] group-hover:shadow-lg">
                  {/* Decorative Corner */}
                  <div className="absolute top-0 left-0 z-10 h-8 w-8 rounded-br-2xl border-r-2 border-b-2 border-[#508D4E]" />

                  <div className="absolute right-0 bottom-0 z-10 h-8 w-8 rounded-tl-2xl border-t-2 border-l-2 border-[#508D4E]" />

                  {/* Certificate Image */}
                  <div className="flex h-52 items-center justify-center overflow-hidden rounded-xl border border-[#80AF81]/60 bg-white">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="max-h-full max-w-full object-contain p-2 transition duration-500 group-hover:scale-105"
                    />
                  </div>
                </div>

                {/* ==================== CONTENT ==================== */}
                <div className="flex flex-1 flex-col p-5">
                  {/* Title + Year */}
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h2 className="text-xl font-bold text-[#1A5319]">
                        {item.title}
                      </h2>

                      <p className="mt-1 text-sm font-medium text-[#508D4E]">
                        {item.issuer}
                      </p>
                    </div>

                    <span className="shrink-0 rounded-full bg-[#80AF81] px-3 py-1 text-sm font-medium text-[#1A5319]">
                      {item.year}
                    </span>
                  </div>

                  {/* Description */}
                  <p
                    className={`mt-4 flex-1 overflow-hidden text-sm leading-6 text-[#508D4E] transition-all duration-500 ${
                      activeCard === item.id
                        ? "max-h-60"
                        : "max-h-18 md:group-hover:max-h-60"
                    }`}
                  >
                    {item.description}
                  </p>

                  {/* Button */}
                  <footer className="mt-6">
                    <button
                      type="button"
                      className="w-full rounded-lg border border-[#508D4E] py-2 font-semibold text-[#1A5319] transition-all duration-300 hover:bg-[#508D4E] hover:text-[#D6EFD8]"
                    >
                      Lihat Sertifikat →
                    </button>
                  </footer>
                </div>
              </section>
            ))}
          </div>
        )}
      </main>
    </>
  );
}
