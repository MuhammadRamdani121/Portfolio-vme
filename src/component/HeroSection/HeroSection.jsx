export default function HeroSectionn() {
  return (
    <>
      <main className="px-6">
        <section className="flex min-h-screen flex-col-reverse items-center justify-center gap-12 md:flex-row md:justify-between">
          {/* Kiri */}
          <article className="max-w-2xl text-center md:text-left">
            <header className="flex flex-col gap-4">
              <span className="w-fit rounded-full bg-green-500/10 px-4 py-1 text-center text-sm text-black">
                👋 Available for Work
              </span>

              <h1 className="text-5xl leading-tight font-bold text-[#1A5319] md:text-6xl">
                Muhammad Ramdani
              </h1>

              <h3 className="text-xl font-medium text-[#508D4E] md:text-2xl">
                Frontend Developer | React Developer
              </h3>

              <p className="max-w-xl text-justify leading-8 text-[#508D4E]">
                Saya seorang Front-End Developer yang berfokus pada pembuatan
                website modern, responsif, dan user friendly menggunakan React
                dan Tailwind CSS.
              </p>

              <nav className="mt-2 flex flex-wrap justify-center gap-3 md:justify-start">
                <span className="rounded-full bg-[#508D4E] px-4 py-1 text-sm text-[#D6EFD8]">
                  React
                </span>

                <span className="rounded-full bg-[#508D4E] px-4 py-1 text-sm text-[#D6EFD8]">
                  Tailwind CSS
                </span>

                <span className="rounded-full bg-[#508D4E] px-4 py-1 text-sm text-[#D6EFD8]">
                  JavaScript
                </span>

                <span className="rounded-full bg-[#508D4E] px-4 py-1 text-sm text-[#D6EFD8]">
                  Node.js
                </span>
              </nav>
            </header>

            <footer className="mt-8 flex flex-col items-center gap-4 md:flex-row md:justify-start">
              <button className="h-11 w-40 rounded-lg bg-[#508D4E] font-medium text-[#D6EFD8] transition hover:scale-105 hover:border hover:border-black hover:bg-[#D6EFD8] hover:text-black">
                Download CV
              </button>

              <button className="h-11 w-40 rounded-lg border border-gray-600 text-black transition hover:bg-[#508D4E] hover:text-[#D6EFD8]">
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
                className="h-72 w-72 rounded-full border-4 border-[#80AF81] object-cover shadow-2xl transition duration-500 group-hover:scale-105 md:h-96 md:w-96"
              />

              {/* Overlay */}
              <div className="absolute inset-0 flex flex-col items-center justify-center rounded-full bg-[#1A5319] opacity-0 transition duration-500 group-hover:opacity-100">
                <h2 className="text-2xl font-bold text-[#80AF81]">
                  Muhammad Ramdani
                </h2>

                <p className="text-[#80AF81]">🗓️ 27-November-2001 </p>

                <p className="text-[#80AF81]">📍 Tangerang Selatan</p>

                <span className="mt-4 rounded-full bg-[#80AF81] px-3 py-1 text-sm font-medium text-[#1A5319]">
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
