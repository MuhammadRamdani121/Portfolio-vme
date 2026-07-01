export default function TentangSaya() {
  return (
    <section className="bg-linear-to-b from-white to-slate-50 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 text-center">
          <h1 className="inline-block border-b-2 border-black pb-2 text-3xl font-bold">
            Tentang Saya
          </h1>
        </div>

        <div className="flex flex-col gap-6 md:flex-row">
          {/* Kiri */}
          <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm md:w-2/3">
            <h2 className="mb-4 text-2xl font-bold">
              Halo, Saya Muhammad Ramdani 👋
            </h2>

            <p className="leading-8 text-gray-600">
              Saya memiliki minat dalam pengembangan website modern menggunakan
              React dan Tailwind CSS. Saya senang mempelajari teknologi baru dan
              membangun aplikasi yang bermanfaat.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <span className="rounded-full border px-4 py-2">
                🎓 Pendidikan
              </span>

              <span className="rounded-full border px-4 py-2">
                💼 Pengalaman
              </span>

              <span className="rounded-full border px-4 py-2">💻 Skills</span>

              <span className="rounded-full border px-4 py-2">
                🚀 Tujuan Karier
              </span>
            </div>
          </div>

          {/* Kanan */}
          <div className="flex flex-col gap-6 md:w-1/3">
            <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
              <h2 className="mb-6 text-center text-xl font-bold">Statistik</h2>

              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <h3 className="text-2xl font-bold">5+</h3>
                  <p className="text-sm text-gray-500">Project</p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold">1+</h3>
                  <p className="text-sm text-gray-500">Tahun</p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold">1000+</h3>
                  <p className="text-sm text-gray-500">Jam</p>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
              <h2 className="mb-6 text-center text-xl font-bold">Download</h2>

              <div className="flex flex-col gap-3">
                <a
                  href="/cv.pdf"
                  download
                  className="rounded-xl border px-4 py-3 text-center transition hover:bg-black hover:text-white"
                >
                  Download CV
                </a>

                <a
                  href="/resume.pdf"
                  download
                  className="rounded-xl border px-4 py-3 text-center transition hover:bg-black hover:text-white"
                >
                  Download Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
