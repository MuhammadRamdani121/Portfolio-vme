export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-linear-to-br from-slate-50 via-white to-blue-50">
      {/* Blob */}
      <div className="absolute top-20 -left-20 h-72 w-72 rounded-full bg-blue-200/30 blur-3xl" />
      <div className="absolute -right-20 bottom-20 h-72 w-72 rounded-full bg-sky-200/30 blur-3xl" />

      <main className="relative mx-auto flex min-h-screen max-w-6xl flex-col-reverse items-center justify-center gap-16 px-6 md:flex-row">
        {/* Text */}
        <section className="text-center md:w-3/5 md:text-left">
          <span className="rounded-full border bg-white/70 px-4 py-2 text-sm shadow-sm backdrop-blur">
            👋 Available for Work
          </span>

          <h1 className="mt-6 text-5xl font-bold md:text-6xl">
            Muhammad Ramdani
          </h1>

          <h2 className="mt-3 text-2xl text-gray-600">
            Frontend Developer | React Developer
          </h2>

          <p className="mt-6 max-w-xl leading-8 text-gray-500">
            Saya seorang Front-End Developer yang berfokus pada pembuatan
            website modern, responsif, dan user friendly menggunakan React dan
            Tailwind CSS.
          </p>

          {/* Tech Stack */}
          <div className="mt-6 flex flex-wrap justify-center gap-2 md:justify-start">
            <span className="rounded-full border bg-white px-4 py-2">
              React
            </span>
            <span className="rounded-full border bg-white px-4 py-2">
              Tailwind CSS
            </span>
            <span className="rounded-full border bg-white px-4 py-2">
              JavaScript
            </span>
            <span className="rounded-full border bg-white px-4 py-2">
              Node.js
            </span>
          </div>

          {/* CTA */}
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center md:justify-start">
            <a
              href="/cv.pdf"
              download
              className="rounded-xl bg-black px-6 py-3 text-center text-white transition hover:-translate-y-1"
            >
              Download CV
            </a>

            <a
              href="#projects"
              className="rounded-xl border bg-white px-6 py-3 text-center transition hover:-translate-y-1"
            >
              Lihat Project
            </a>
          </div>
        </section>

        {/* Photo */}
        <aside className="flex justify-center md:w-2/5">
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-blue-200/40 blur-3xl" />

            <img
              src="/GambarDiri.jpg"
              alt="Muhammad Ramdani"
              className="relative h-72 w-72 rounded-full border-4 border-white object-cover shadow-2xl md:h-96 md:w-96"
            />
          </div>
        </aside>
      </main>
    </section>
  );
}
