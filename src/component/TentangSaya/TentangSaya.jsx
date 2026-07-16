export default function TentangSayaa() {
  return (
    <>
      <header className="py-16 text-center">
        <h1 className="inline-block border-b-2 border-gray-500 pb-2 text-4xl font-bold">
          Tentang Saya
        </h1>
      </header>

      <main className="px-6 pb-20">
        <section className="grid grid-cols-1 gap-8 md:grid-cols-[2fr_1fr]">
          <article className="rounded-3xl border border-zinc-800 bg-zinc-950 p-10">
            <h1 className="text-4xl font-bold">
              Hallo, Saya Muhammad Ramdani 👋
            </h1>

            <p className="mt-6 max-w-3xl leading-10 text-gray-400">
              Saya memiliki minat dalam pengembangan website modern menggunakan
              React dan Tailwind CSS. Saya senang mempelajari teknologi baru dan
              membangun aplikasi yang bermanfaat.
            </p>

            <nav className="mt-10 flex flex-wrap gap-4">
              <span className="rounded-full border border-zinc-700 px-6 py-3">
                🎓 Pendidikan
              </span>

              <span className="rounded-full border border-zinc-700 px-6 py-3">
                💼 Pengalaman
              </span>

              <span className="rounded-full border border-zinc-700 px-6 py-3">
                💻 Skills
              </span>

              <span className="rounded-full border border-zinc-700 px-6 py-3">
                🚀 Tujuan Karier
              </span>
            </nav>
          </article>

          <aside className="flex flex-col gap-8">
            <header className="rounded-3xl border border-zinc-800 bg-zinc-950 p-10 text-center">
              <h1 className="text-3xl font-bold">Statistik</h1>
              <nav className="flex items-center justify-center gap-5">
                <span className="mt-8 inline-block">
                  <h1 className="text-xl font-bold">5+</h1>
                  <p className="text-gray-400">Project</p>
                </span>

                <span className="mt-8 inline-block">
                  <h1 className="text-xl font-bold">1+</h1>
                  <p className="text-gray-400">Tahun</p>
                </span>

                <span className="mt-8 inline-block">
                  <h1 className="text-xl font-bold">1000+</h1>
                  <p className="text-gray-400">Jam</p>
                </span>
              </nav>
            </header>

            <nav className="rounded-3xl border border-zinc-800 bg-zinc-950 p-10">
              <h1 className="mb-8 text-center text-3xl font-bold">Download</h1>

              <button className="mb-4 h-14 w-full rounded-xl border border-zinc-700 transition hover:bg-white hover:text-black">
                Download CV
              </button>

              <button className="h-14 w-full rounded-xl border border-zinc-700 transition hover:bg-white hover:text-black">
                Download Resume
              </button>
            </nav>
          </aside>
        </section>
      </main>
    </>
  );
}
