export default function Project() {
  return (
    <>
      <main className="mx-auto max-w-6xl px-5 py-16">
        <header className="mb-12">
          <h1 className="border-b-2 border-blue-500 pb-3 text-center text-4xl font-bold">
            Projects
          </h1>
        </header>

        <section className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <header>
            <h1>Front END</h1>
          </header>
          <article className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
            <img
              src="/images/portfolio.png"
              alt="Website Portfolio"
              className="h-52 w-full object-cover"
            />

            <nav className="space-y-3 p-5">
              <span className="block text-xl font-bold text-gray-800">
                Website Portfolio
              </span>

              <span className="inline-block rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700">
                React • Tailwind CSS
              </span>

              <p className="text-sm leading-6 text-gray-600">
                Portfolio pribadi yang dibuat menggunakan React dan Tailwind CSS
                dengan desain responsif untuk menampilkan profil, skill,
                pendidikan, serta proyek yang pernah dikerjakan.
              </p>
            </nav>

            <footer className="flex gap-3 p-5 pt-0">
              <button className="flex-1 rounded-lg bg-blue-600 py-2 font-semibold text-white transition hover:bg-blue-700">
                Live Demo
              </button>

              <button className="flex-1 rounded-lg border border-gray-300 py-2 font-semibold text-gray-700 transition hover:bg-gray-100">
                GitHub
              </button>
            </footer>
          </article>
          <details>Lihat Selengkapnya</details>
        </section>
      </main>
    </>
  );
}
