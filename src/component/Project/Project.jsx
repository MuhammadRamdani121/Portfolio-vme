import { Link } from "react-router-dom";
import projects from "../../data/Project";

export default function Project({ limit = false, portfolio = false }) {
  const gridClass = portfolio
    ? "grid gap-8 md:grid-cols-2"
    : "grid gap-8 md:grid-cols-2 lg:grid-cols-3";

  return (
    <>
      {!portfolio && (
        <header className="mx-auto mt-16 flex max-w-6xl justify-center px-5">
          <h1 className="border-b-2 border-blue-500 pb-3 text-center text-4xl font-bold">
            Projects
          </h1>
        </header>
      )}

      <main className="mx-auto max-w-6xl px-5 py-12">
        {projects.map((category) => {
          const data = limit
            ? category.projects.slice(0, 3)
            : category.projects;

          return (
            <section key={category.id} className="mb-16">
              {/* Judul Kategori */}
              <header className="mb-8">
                <h2 className="text-3xl font-bold text-black">
                  {category.category}
                </h2>
              </header>

              {/* Card */}
              <div className={gridClass}>
                {data.map((item) => (
                  <article
                    key={item.id}
                    className="group flex h-full flex-col overflow-hidden rounded-2xl border border-zinc-700 bg-zinc-900 shadow-lg transition-all duration-500 hover:-translate-y-2 hover:border-blue-500 hover:shadow-2xl"
                  >
                    {/* Gambar */}
                    <div className="flex h-56 items-center justify-center overflow-hidden bg-zinc-800">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                      />
                    </div>

                    {/* Isi */}
                    <div className="flex flex-1 flex-col p-5">
                      <h2 className="text-xl font-bold text-white">
                        {item.title}
                      </h2>

                      <span className="mt-3 w-fit rounded-full bg-blue-500/20 px-3 py-1 text-sm font-medium text-blue-300">
                        {item.tech}
                      </span>

                      <p className="mt-4 flex-1 text-sm leading-6 text-zinc-400">
                        {item.description}
                      </p>

                      {/* Button */}
                      <footer className="mt-6 flex gap-3">
                        <a
                          href={item.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 rounded-lg bg-blue-600 py-2 text-center font-semibold text-white transition hover:bg-blue-700"
                        >
                          Live Demo
                        </a>

                        <a
                          href={item.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 rounded-lg border border-blue-500 py-2 text-center font-semibold text-blue-400 transition hover:bg-blue-500 hover:text-white"
                        >
                          GitHub
                        </a>
                      </footer>
                    </div>
                  </article>
                ))}
              </div>

              {/* Lihat Selengkapnya */}
              {limit && (
                <footer className="mt-10 flex justify-end">
                  <Link
                    to="/portfolio/project"
                    className="font-semibold text-blue-400 transition hover:text-blue-300"
                  >
                    Lihat Selengkapnya →
                  </Link>
                </footer>
              )}
            </section>
          );
        })}
      </main>
    </>
  );
}
