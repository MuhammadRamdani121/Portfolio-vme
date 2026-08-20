import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Code2,
  Check,
} from "lucide-react";

import projects from "../../data/Project";

export default function ProjectDetail() {
  const { id } = useParams();

  const allProjects = projects.flatMap(
    (category) =>
      category.projects?.map((project) => ({
        ...project,
        category: category.category,
      })) || [],
  );

  const project = allProjects.find((project) => project.id === Number(id));

  const [currentImage, setCurrentImage] = useState(0);

  if (!project) {
    return (
      <section className="min-h-screen bg-white px-5 py-16">
        <div className="mx-auto max-w-6xl">
          <Link
            to="/portfolio/project"
            className="group inline-flex items-center gap-2 text-sm font-medium text-[#508D4E] transition hover:text-[#1A5319]"
          >
            <ArrowLeft
              size={18}
              className="transition-transform group-hover:-translate-x-1"
            />
            Kembali ke Project
          </Link>

          <div className="mt-12">
            <p className="text-sm font-semibold tracking-widest text-[#508D4E] uppercase">
              404
            </p>

            <h1 className="mt-3 text-3xl font-bold text-[#1A5319]">
              Project tidak ditemukan
            </h1>

            <p className="mt-3 text-gray-500">
              Project yang kamu cari tidak tersedia.
            </p>
          </div>
        </div>
      </section>
    );
  }

  const gallery =
    project.gallery?.length > 0 ? project.gallery : [project.image];

  const nextImage = () => {
    setCurrentImage((prev) => (prev === gallery.length - 1 ? 0 : prev + 1));
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev === 0 ? gallery.length - 1 : prev - 1));
  };

  return (
    <section className="min-h-screen bg-white px-5 py-10 md:px-8 md:py-14">
      <div className="mx-auto max-w-6xl">
        {/* =========================================
            BACK
        ========================================= */}
        <Link
          to="/portfolio/project"
          className="group inline-flex items-center gap-2 text-sm font-medium text-gray-500 transition hover:text-[#508D4E]"
        >
          <ArrowLeft
            size={18}
            className="transition-transform duration-300 group-hover:-translate-x-1"
          />
          Kembali ke Project
        </Link>

        {/* =========================================
            HEADER
        ========================================= */}
        <div className="mt-10 max-w-4xl">
          {/* CATEGORY */}
          <div className="flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-[#508D4E]" />

            <p className="text-sm font-semibold text-[#508D4E]">
              {project.category}
            </p>
          </div>

          {/* TITLE */}
          <h1 className="mt-4 text-4xl leading-[1.1] font-bold tracking-tight text-[#1A5319] sm:text-5xl md:text-6xl">
            {project.title}
          </h1>

          {/* TECH */}
          {project.tech && (
            <p className="mt-5 text-sm font-medium text-gray-500 md:text-base">
              {project.tech}
            </p>
          )}
        </div>

        {/* =========================================
            PROJECT PREVIEW
        ========================================= */}
        <div className="mt-12">
          {/* BROWSER FRAME */}
          <div className="overflow-hidden rounded-2xl border border-gray-200 bg-[#D6EFD8]/40 shadow-[0_20px_60px_rgba(26,83,25,0.08)]">
            {/* TOP BAR */}
            <div className="flex h-11 items-center justify-between border-b border-gray-200 bg-white px-4">
              <div className="flex items-center gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-[#D6EFD8]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#80AF81]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#508D4E]" />
              </div>

              {/* COUNTER */}
              {gallery.length > 1 && (
                <span className="text-xs font-medium text-gray-400">
                  {String(currentImage + 1).padStart(2, "0")} /{" "}
                  {String(gallery.length).padStart(2, "0")}
                </span>
              )}
            </div>

            {/* IMAGE */}
            <div className="relative flex h-[260px] items-center justify-center sm:h-[400px] md:h-[560px]">
              <img
                src={gallery[currentImage]}
                alt={`${project.title} preview ${currentImage + 1}`}
                className="h-full w-full object-contain p-3 sm:p-6 md:p-8"
              />

              {/* PREVIOUS */}
              {gallery.length > 1 && (
                <button
                  type="button"
                  onClick={prevImage}
                  aria-label="Gambar sebelumnya"
                  className="absolute top-1/2 left-3 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-gray-200 bg-white/95 text-[#1A5319] shadow-sm transition duration-300 hover:scale-105 hover:bg-[#D6EFD8] md:left-5"
                >
                  <ChevronLeft size={20} />
                </button>
              )}

              {/* NEXT */}
              {gallery.length > 1 && (
                <button
                  type="button"
                  onClick={nextImage}
                  aria-label="Gambar berikutnya"
                  className="absolute top-1/2 right-3 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-gray-200 bg-white/95 text-[#1A5319] shadow-sm transition duration-300 hover:scale-105 hover:bg-[#D6EFD8] md:right-5"
                >
                  <ChevronRight size={20} />
                </button>
              )}

              {/* DOTS */}
              {gallery.length > 1 && (
                <div className="absolute bottom-5 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full bg-white/90 px-3 py-2 shadow-sm backdrop-blur">
                  {gallery.map((_, index) => (
                    <button
                      key={index}
                      type="button"
                      onClick={() => setCurrentImage(index)}
                      aria-label={`Lihat gambar ${index + 1}`}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        currentImage === index
                          ? "w-6 bg-[#508D4E]"
                          : "w-1.5 bg-[#80AF81]"
                      }`}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* =========================================
            CONTENT
        ========================================= */}
        <div className="mt-16 grid gap-14 lg:grid-cols-[1.6fr_0.8fr]">
          {/* =======================================
              LEFT CONTENT
          ======================================= */}
          <div>
            {/* DESCRIPTION */}
            {project.description && (
              <div>
                <p className="text-xs font-bold tracking-[0.2em] text-[#508D4E] uppercase">
                  Tentang Project
                </p>

                <h2 className="mt-3 text-2xl font-bold text-[#1A5319] md:text-3xl">
                  Deskripsi
                </h2>

                <p className="mt-5 max-w-3xl text-[15px] leading-8 text-gray-600 md:text-base">
                  {project.description}
                </p>
              </div>
            )}

            {/* FEATURES */}
            {project.features?.length > 0 && (
              <div className="mt-14 border-t border-gray-100 pt-12">
                <p className="text-xs font-bold tracking-[0.2em] text-[#508D4E] uppercase">
                  Apa yang tersedia
                </p>

                <h2 className="mt-3 text-2xl font-bold text-[#1A5319] md:text-3xl">
                  Fitur Utama
                </h2>

                <div className="mt-7 grid gap-x-8 gap-y-5 sm:grid-cols-2">
                  {project.features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#D6EFD8] text-[#508D4E]">
                        <Check size={14} strokeWidth={3} />
                      </span>

                      <p className="text-sm leading-6 text-gray-600">
                        {feature}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* =======================================
              RIGHT SIDEBAR
          ======================================= */}
          <aside className="lg:border-l lg:border-gray-100 lg:pl-10">
            {/* TECHNOLOGIES */}
            {project.technologies?.length > 0 && (
              <div>
                <p className="text-xs font-bold tracking-[0.2em] text-[#508D4E] uppercase">
                  Tech Stack
                </p>

                <h2 className="mt-3 text-2xl font-bold text-[#1A5319]">
                  Teknologi
                </h2>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.technologies.map((technology, index) => (
                    <span
                      key={index}
                      className="rounded-lg border border-[#D6EFD8] bg-[#D6EFD8]/50 px-3 py-2 text-xs font-semibold text-[#1A5319] transition hover:border-[#80AF81] hover:bg-[#D6EFD8]"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* PROJECT LINKS */}
            {(project.github || project.demo) && (
              <div className="mt-12">
                <p className="text-xs font-bold tracking-[0.2em] text-[#508D4E] uppercase">
                  Explore
                </p>

                <h2 className="mt-3 text-2xl font-bold text-[#1A5319]">
                  Project Link
                </h2>

                <div className="mt-6 space-y-3">
                  {/* GITHUB */}
                  {project.github && project.github !== "#" && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-between rounded-xl bg-[#1A5319] px-5 py-4 text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#508D4E]"
                    >
                      <div className="flex items-center gap-3">
                        <Code2 size={19} />

                        <span className="text-sm font-semibold">
                          View Source Code
                        </span>
                      </div>

                      <ExternalLink
                        size={17}
                        className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      />
                    </a>
                  )}

                  {/* DEMO */}
                  {project.demo && project.demo !== "#" && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-between rounded-xl border border-[#80AF81] bg-white px-5 py-4 text-[#1A5319] transition duration-300 hover:-translate-y-0.5 hover:bg-[#D6EFD8]"
                    >
                      <div className="flex items-center gap-3">
                        <ExternalLink size={19} />

                        <span className="text-sm font-semibold">Live Demo</span>
                      </div>

                      <ArrowLeft
                        size={17}
                        className="rotate-180 transition-transform group-hover:translate-x-1"
                      />
                    </a>
                  )}
                </div>
              </div>
            )}
          </aside>
        </div>

        {/* =========================================
            BOTTOM CTA
        ========================================= */}
        <div className="mt-20 overflow-hidden rounded-2xl bg-[#1A5319] px-6 py-10 text-center sm:px-10 md:py-12">
          <p className="text-xs font-bold tracking-[0.2em] text-[#80AF81] uppercase">
            More Projects
          </p>

          <h2 className="mt-3 text-2xl font-bold text-white md:text-3xl">
            Lihat project lainnya
          </h2>

          <p className="mx-auto mt-3 max-w-lg text-sm leading-6 text-[#D6EFD8]">
            Jelajahi project lainnya yang pernah saya kerjakan dan lihat
            berbagai teknologi yang digunakan.
          </p>

          <Link
            to="/portfolio/project"
            className="mt-7 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-semibold text-[#1A5319] transition duration-300 hover:scale-105 hover:bg-[#D6EFD8]"
          >
            <ArrowLeft size={17} />
            Semua Project
          </Link>
        </div>
      </div>
    </section>
  );
}
