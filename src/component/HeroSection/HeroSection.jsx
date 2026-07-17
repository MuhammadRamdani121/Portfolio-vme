export default function HeroSectionn() {
  return (
    <>
      <main className="px-6">
        <section className="flex min-h-screen flex-col-reverse items-center justify-center gap-12 md:flex-row md:justify-between">
          {/* Kiri */}
          <article className="max-w-2xl text-center md:text-left">
            <header className="flex flex-col gap-4">
              <span className="w-fit rounded-full bg-green-500/10 px-4 py-1 text-center text-sm text-gray-400">
                👋 Available for Work
              </span>

              <h1 className="text-5xl leading-tight font-bold md:text-6xl">
                Muhammad Ramdani
              </h1>

              <h3 className="text-xl font-medium text-gray-300 md:text-2xl">
                Frontend Developer | React Developer
              </h3>

              <p className="max-w-xl text-justify leading-8 text-gray-400">
                Saya seorang Front-End Developer yang berfokus pada pembuatan
                website modern, responsif, dan user friendly menggunakan React
                dan Tailwind CSS.
              </p>

              <nav className="mt-2 flex flex-wrap justify-center gap-3 md:justify-start">
                <span className="rounded-full bg-zinc-800 px-4 py-1 text-sm">
                  React
                </span>

                <span className="rounded-full bg-zinc-800 px-4 py-1 text-sm">
                  Tailwind CSS
                </span>

                <span className="rounded-full bg-zinc-800 px-4 py-1 text-sm">
                  JavaScript
                </span>

                <span className="rounded-full bg-zinc-800 px-4 py-1 text-sm">
                  Node.js
                </span>
              </nav>
            </header>

            <footer className="mt-8 flex flex-col items-center gap-4 md:flex-row md:justify-start">
              <button className="h-11 w-40 rounded-lg bg-white font-medium text-black transition hover:scale-105">
                Download CV
              </button>

              <button className="h-11 w-40 rounded-lg border border-gray-600 transition hover:bg-white hover:text-black">
                Lihat Project
              </button>
            </footer>
          </article>

          {/* Kanan */}
          {/* Kanan */}
          <aside>
            <div className="group relative">
              <img
                src="/GambarDiri.jpg"
                alt="Muhammad Ramdani"
                className="h-72 w-72 rounded-full border-4 border-white object-cover shadow-2xl transition duration-500 group-hover:scale-105 md:h-96 md:w-96"
              />

              {/* Overlay */}
              <div className="absolute inset-0 flex flex-col items-center justify-center rounded-full bg-black/70 opacity-0 transition duration-500 group-hover:opacity-100">
                <h2 className="text-2xl font-bold text-white">
                  Muhammad Ramdani
                </h2>

                <p className="text-gray-300">🗓️ 27-November-2001 </p>

                <p className="text-gray-300">📍 Tangerang Selatan</p>

                <span className="mt-4 rounded-full bg-green-500 px-3 py-1 text-sm font-medium text-white">
                  🚀 Open to Work
                </span>
              </div>
            </div>
          </aside>
        </section>
      </main>
    </>
  );
}
