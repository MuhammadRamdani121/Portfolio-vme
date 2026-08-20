import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ExternalLink, Award } from "lucide-react";

import sertifikat from "../../data/Sertifikat";

export default function SertifikatDetail() {
  const { id } = useParams();

  const certificate = sertifikat.find((item) => item.id === Number(id));

  if (!certificate) {
    return (
      <section className="min-h-screen px-5 py-16">
        <div className="mx-auto max-w-6xl">
          <Link
            to="/portfolio/sertifikat"
            className="inline-flex items-center gap-2 font-medium text-[#508D4E] transition hover:text-[#1A5319]"
          >
            <ArrowLeft size={18} />
            Kembali ke Sertifikat
          </Link>

          <div className="mt-10 rounded-2xl border border-[#80AF81] bg-[#D6EFD8] p-8">
            <h1 className="text-2xl font-bold text-[#1A5319]">
              Sertifikat tidak ditemukan
            </h1>

            <p className="mt-2 text-[#508D4E]">
              Sertifikat yang kamu cari tidak tersedia.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen px-5 py-12 md:px-8 md:py-16">
      <div className="mx-auto max-w-6xl">
        {/* BACK */}
        <Link
          to="/portfolio/sertifikat"
          className="group inline-flex items-center gap-2 text-sm font-medium text-gray-600 transition hover:text-[#508D4E]"
        >
          <ArrowLeft
            size={18}
            className="transition-transform group-hover:-translate-x-1"
          />
          Kembali ke Sertifikat
        </Link>

        {/* HEADER */}
        <div className="mt-8">
          <div className="flex items-center gap-2">
            <Award size={18} className="text-[#508D4E]" />

            <p className="text-sm font-semibold text-[#508D4E]">Certificate</p>
          </div>

          <h1 className="mt-3 text-3xl font-bold text-[#1A5319] md:text-4xl">
            {certificate.title}
          </h1>

          <div className="mt-3 flex flex-wrap items-center gap-2">
            <p className="text-sm font-medium text-[#508D4E]">
              {certificate.issuer}
            </p>

            <span className="text-gray-400">•</span>

            <span className="text-sm text-gray-500">{certificate.year}</span>
          </div>
        </div>

        {/* CERTIFICATE IMAGE */}
        <div className="mt-10 overflow-hidden rounded-2xl border border-[#80AF81] bg-[#D6EFD8] p-3 shadow-lg md:p-5">
          <div className="flex min-h-[300px] items-center justify-center overflow-hidden rounded-xl bg-[#80AF81] p-4 sm:min-h-[450px] md:min-h-[600px] md:p-8">
            <img
              src={certificate.image}
              alt={certificate.title}
              className="max-h-[650px] w-full object-contain transition duration-500 hover:scale-[1.01]"
            />
          </div>
        </div>

        {/* INFORMATION */}
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {/* DESCRIPTION */}
          <div className="rounded-2xl border border-[#80AF81] bg-[#D6EFD8] p-6 shadow-lg">
            <h2 className="text-xl font-bold text-[#1A5319]">
              Tentang Sertifikat
            </h2>

            <p className="mt-4 text-sm leading-7 text-[#508D4E]">
              {certificate.description}
            </p>
          </div>

          {/* INFO */}
          <div className="rounded-2xl border border-[#80AF81] bg-[#D6EFD8] p-6 shadow-lg">
            <h2 className="text-xl font-bold text-[#1A5319]">Informasi</h2>

            <div className="mt-5 space-y-4">
              <div>
                <p className="text-xs font-medium text-[#508D4E]">
                  Nama Sertifikat
                </p>

                <p className="mt-1 font-semibold text-[#1A5319]">
                  {certificate.title}
                </p>
              </div>

              <div>
                <p className="text-xs font-medium text-[#508D4E]">Penerbit</p>

                <p className="mt-1 font-semibold text-[#1A5319]">
                  {certificate.issuer}
                </p>
              </div>

              <div>
                <p className="text-xs font-medium text-[#508D4E]">Tahun</p>

                <p className="mt-1 font-semibold text-[#1A5319]">
                  {certificate.year}
                </p>
              </div>
            </div>

            {/* CREDENTIAL */}
            {certificate.credential && certificate.credential !== "#" && (
              <a
                href={certificate.credential}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 flex w-full items-center justify-center gap-2 rounded-lg bg-[#508D4E] py-3 text-sm font-semibold text-[#D6EFD8] transition hover:bg-[#1A5319]"
              >
                <ExternalLink size={17} />
                Lihat Credential
              </a>
            )}
          </div>
        </div>

        {/* BOTTOM */}
        <div className="mt-8 flex justify-center md:justify-end">
          <Link
            to="/portfolio/sertifikat"
            className="font-semibold text-[#508D4E] transition hover:text-[#1A5319]"
          >
            ← Semua Sertifikat
          </Link>
        </div>
      </div>
    </section>
  );
}
