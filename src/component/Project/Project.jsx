import { Link } from "react-router-dom";
import { useState } from "react";

import projects from "../../data/Project";

export default function Project({ limit = false, portfolio = false }) {
  return (
    <>
      {/* ========================= */}
      {/* TITLE */}
      {/* ========================= */}

      {!portfolio && (
        <header className="mx-auto flex max-w-6xl justify-center px-5">
          <h1 className="mt-16 border-b-2 border-[#508D4E] text-center text-4xl font-bold text-[#1A5319]">
            Projects
          </h1>
        </header>
      )}

      <main className="mx-auto max-w-6xl px-5 pb-12">
        {/* ========================= */}
        {/* SUBTITLE */}
        {/* ========================= */}

        {!portfolio && (
          <p className="mx-auto mb-12 max-w-2xl text-center text-[#508D4E]">
            Beberapa project yang pernah saya kerjakan dalam proses belajar dan
            pengembangan kemampuan di bidang teknologi.
          </p>
        )}

        {/* ========================= */}
        {/* CATEGORY */}
        {/* ========================= */}

        {projects.map((category) => {
          if (!category.projects?.length) {
            return null;
          }

          return (
            <ProjectCategory
              key={category.id}
              category={category}
              limit={limit}
            />
          );
        })}
      </main>
    </>
  );
}

/* ================================= */
/* PROJECT CATEGORY */
/* ================================= */

function ProjectCategory({ category, limit }) {
  const [startIndex, setStartIndex] = useState(0);

  const projectList = category.projects;
  const totalProjects = projectList.length;

  /*
   * Jumlah card berdasarkan ukuran layar:
   *
   * Mobile  = 1
   * Tablet  = 2
   * Desktop = 3
   *
   * Karena jumlah card berbeda berdasarkan breakpoint,
   * batas carousel akan dihitung berdasarkan jumlah
   * project yang sedang terlihat.
   */

  /*
   * Untuk desktop kita jadikan 3 sebagai batas utama.
   * Mobile/tablet akan dibatasi melalui CSS.
   */
  const maxIndex = Math.max(totalProjects - 3, 0);

  /*
   * Ambil maksimal 3 project.
   *
   * CSS akan menentukan berapa yang terlihat:
   *
   * Mobile  → 1
   * Tablet  → 2
   * Desktop → 3
   */

  const visibleProjects = projectList.slice(startIndex, startIndex + 3);

  /* ========================= */
  /* NEXT */
  /* ========================= */

  const handleNext = () => {
    if (startIndex < maxIndex) {
      setStartIndex((prev) => prev + 1);
    }
  };

  /* ========================= */
  /* PREVIOUS */
  /* ========================= */

  const handlePrevious = () => {
    if (startIndex > 0) {
      setStartIndex((prev) => prev - 1);
    }
  };

  return (
    <section className="mb-16">
      {/* ========================= */}
      {/* CATEGORY TITLE */}
      {/* ========================= */}

      <header className="mb-8">
        <h2 className="text-2xl font-bold text-[#1A5319]">
          {category.category}
        </h2>
      </header>

      {/* ========================= */}
      {/* CAROUSEL */}
      {/* ========================= */}

      <div className="relative px-6 md:px-8">
        {/* ========================= */}
        {/* LEFT ARROW */}
        {/* ========================= */}

        <button
          type="button"
          onClick={handlePrevious}
          disabled={startIndex === 0}
          aria-label="Project sebelumnya"
          className={`absolute top-1/2 left-0 z-20 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border text-lg font-bold shadow-md transition md:h-11 md:w-11 md:text-xl ${
            startIndex === 0
              ? "cursor-not-allowed border-[#80AF81] bg-[#D6EFD8] text-[#80AF81] opacity-40"
              : "border-[#80AF81] bg-[#D6EFD8] text-[#1A5319] hover:bg-[#508D4E] hover:text-[#D6EFD8]"
          }`}
        >
          ←
        </button>

        {/* ========================= */}
        {/* PROJECT CARDS */}
        {/* ========================= */}

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {visibleProjects.map((item) => (
            <article
              key={`${category.id}-${item.id}`}
              className="group flex min-w-0 flex-col overflow-hidden rounded-2xl border border-[#80AF81] bg-[#D6EFD8] shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-[#508D4E] hover:shadow-xl"
            >
              {/* ========================= */}
              {/* IMAGE */}
              {/* ========================= */}

              <div className="h-48 overflow-hidden bg-[#80AF81] sm:h-52 md:h-48 lg:h-56">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              {/* ========================= */}
              {/* CONTENT */}
              {/* ========================= */}

              <div className="flex flex-1 flex-col p-5 sm:p-6">
                {/* TITLE */}

                <h3 className="text-lg font-bold text-[#1A5319] sm:text-xl">
                  {item.title}
                </h3>

                {/* TECH */}

                {item.tech && (
                  <span className="mt-3 w-fit rounded-full border border-[#508D4E] px-3 py-1 text-xs font-medium text-[#1A5319] sm:text-sm">
                    {item.tech}
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
                    to={`/portfolio/project/${item.id}`}
                    className="block w-full rounded-lg bg-[#508D4E] py-3 text-center text-sm font-semibold text-[#D6EFD8] transition hover:bg-[#1A5319] sm:text-base"
                  >
                    Lihat Detail →
                  </Link>
                </footer>
              </div>
            </article>
          ))}
        </div>

        {/* ========================= */}
        {/* RIGHT ARROW */}
        {/* ========================= */}

        <button
          type="button"
          onClick={handleNext}
          disabled={startIndex >= maxIndex}
          aria-label="Project berikutnya"
          className={`absolute top-1/2 right-0 z-20 flex h-10 w-10 translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border text-lg font-bold shadow-md transition md:h-11 md:w-11 md:text-xl ${
            startIndex >= maxIndex
              ? "cursor-not-allowed border-[#80AF81] bg-[#D6EFD8] text-[#80AF81] opacity-40"
              : "border-[#80AF81] bg-[#D6EFD8] text-[#1A5319] hover:bg-[#508D4E] hover:text-[#D6EFD8]"
          }`}
        >
          →
        </button>
      </div>

      {/* ========================= */}
      {/* LIHAT SELENGKAPNYA */}
      {/* ========================= */}

      {limit && (
        <footer className="mt-6 flex justify-center md:justify-end">
          <Link
            to="/portfolio/project"
            className="font-semibold text-[#508D4E] transition hover:text-[#1A5319]"
          >
            Lihat Selengkapnya →
          </Link>
        </footer>
      )}
    </section>
  );
}
