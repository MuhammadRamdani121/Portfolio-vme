import { Link } from "react-router-dom";
import { useRef } from "react";

import projects from "../../data/Project";

export default function Project({ limit = false, portfolio = false }) {
  const sliderRef = useRef(null);

  // Ambil semua project dari kategori yang memiliki data
  const allProjects = projects.flatMap((category) =>
    category.projects.map((project) => ({
      ...project,
      category: category.category,
    })),
  );

  const scrollProjects = (direction) => {
    if (!sliderRef.current) return;

    const container = sliderRef.current;

    const card = container.querySelector("article");

    if (!card) return;

    const gap = 24;
    const scrollAmount = card.offsetWidth + gap;

    container.scrollBy({
      left: direction === "next" ? scrollAmount : -scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <>
      {/* Judul */}
      {!portfolio && (
        <header className="mx-auto mt-16 flex max-w-6xl justify-center px-5">
          <h1 className="border-b-2 border-[#508D4E] pb-3 text-center text-4xl font-bold text-[#1A5319]">
            Projects
          </h1>
        </header>
      )}

      <main className="mx-auto max-w-6xl px-5 py-12">
        {/* Subtitle */}
        {!portfolio && (
          <p className="mx-auto mb-10 max-w-2xl text-center text-[#508D4E]">
            Beberapa project yang pernah saya kerjakan dalam proses belajar dan
            pengembangan kemampuan di bidang teknologi.
          </p>
        )}

        {/* ========================= */}
        {/* PROJECT SLIDER */}
        {/* ========================= */}
        <section>
          {/* Header Slider */}
          <header className="mb-6 flex items-center justify-between">
            <h2 className="text-2xl font-bold text-[#1A5319]">
              Project Pilihan
            </h2>

            {/* Arrow */}
            <nav className="flex gap-3">
              <button
                type="button"
                onClick={() => scrollProjects("prev")}
                aria-label="Project sebelumnya"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[#80AF81] bg-[#D6EFD8] text-xl font-bold text-[#1A5319] transition hover:bg-[#508D4E] hover:text-[#D6EFD8]"
              >
                ←
              </button>

              <button
                type="button"
                onClick={() => scrollProjects("next")}
                aria-label="Project berikutnya"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[#80AF81] bg-[#D6EFD8] text-xl font-bold text-[#1A5319] transition hover:bg-[#508D4E] hover:text-[#D6EFD8]"
              >
                →
              </button>
            </nav>
          </header>

          {/* Slider */}
          <div
            ref={sliderRef}
            className="flex [scrollbar-width:none] gap-6 overflow-x-auto scroll-smooth pb-4 [&::-webkit-scrollbar]:hidden"
          >
            {allProjects.map((item) => (
              <article
                key={item.id}
                className="group flex min-w-full flex-col overflow-hidden rounded-2xl border border-[#80AF81] bg-[#D6EFD8] shadow-lg transition-all duration-500 hover:-translate-y-1 hover:border-[#508D4E] hover:shadow-xl md:min-w-[calc(50%-12px)] lg:min-w-[calc(33.333%-16px)]"
              >
                {/* ========================= */}
                {/* FOTO */}
                {/* ========================= */}
                <div className="h-56 overflow-hidden bg-[#80AF81]">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>

                {/* ========================= */}
                {/* CONTENT */}
                {/* ========================= */}
                <div className="flex flex-1 flex-col p-6">
                  {/* Category */}
                  <span className="mb-3 w-fit rounded-full bg-[#80AF81] px-3 py-1 text-xs font-semibold text-[#1A5319]">
                    {item.category}
                  </span>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-[#1A5319]">
                    {item.title}
                  </h3>

                  {/* Tech */}
                  <span className="mt-3 w-fit rounded-full border border-[#508D4E] bg-[#D6EFD8] px-3 py-1 text-sm font-medium text-[#1A5319]">
                    {item.tech}
                  </span>

                  {/* Description */}
                  <p className="mt-4 flex-1 text-sm leading-6 text-[#508D4E]">
                    {item.description}
                  </p>

                  {/* Detail */}
                  <footer className="mt-6">
                    <Link
                      to={`/portfolio/project/${item.id}`}
                      className="block w-full rounded-lg bg-[#508D4E] py-3 text-center font-semibold text-[#D6EFD8] transition hover:bg-[#1A5319]"
                    >
                      Lihat Detail →
                    </Link>
                  </footer>
                </div>
              </article>
            ))}
          </div>

          {/* Indicator */}
          <p className="mt-4 text-center text-sm text-[#80AF81]">
            Geser atau gunakan tombol panah untuk melihat project lainnya
          </p>
        </section>

        {/* ========================= */}
        {/* LIHAT SELENGKAPNYA */}
        {/* ========================= */}
        {limit && (
          <footer className="mt-10 flex justify-center">
            <Link
              to="/portfolio/project"
              className="rounded-lg border border-[#508D4E] px-6 py-3 font-semibold text-[#508D4E] transition hover:bg-[#508D4E] hover:text-[#D6EFD8]"
            >
              Lihat Selengkapnya →
            </Link>
          </footer>
        )}
      </main>
    </>
  );
}
