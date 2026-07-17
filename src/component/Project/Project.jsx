import projects from "../../data/Project";

export default function Project() {
  return (
    <main className="mx-auto max-w-6xl px-5 py-16">
      <header className="mb-12 flex justify-center">
        <h1 className="border-b-2 border-blue-500 pb-3 text-center text-4xl font-bold">
          Projects
        </h1>
      </header>

      {projects.map((category) => (
        <section
          key={category.id}
          className="mb-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {/* Judul Kategori */}
          <header className="col-span-full">
            <h1 className="text-3xl font-bold text-gray-800">
              {category.category}
            </h1>
          </header>

          {/* Maksimal tampil 3 project */}
          {category.projects.slice(0, 3).map((project) => (
            <article
              key={project.id}
              className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <img
                src={project.image}
                alt={project.title}
                className="h-52 w-full object-cover"
              />

              <nav className="space-y-3 p-5">
                <span className="block text-xl font-bold text-gray-800">
                  {project.title}
                </span>

                <span className="inline-block rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700">
                  {project.tech}
                </span>

                <p className="text-sm leading-6 text-gray-600">
                  {project.description}
                </p>
              </nav>

              <footer className="flex gap-3 p-5 pt-0">
                <button className="flex-1 rounded-lg bg-blue-600 py-2 font-semibold text-white hover:bg-blue-700">
                  Live Demo
                </button>

                <button className="flex-1 rounded-lg border border-gray-300 py-2 font-semibold text-gray-700 hover:bg-gray-100">
                  GitHub
                </button>
              </footer>
            </article>
          ))}

          {/* Lihat Selengkapnya */}
          <footer className="col-span-full text-right">
            <button className="font-semibold text-blue-600 transition hover:text-blue-800">
              Lihat Selengkapnya →
            </button>
          </footer>
        </section>
      ))}
    </main>
  );
}
