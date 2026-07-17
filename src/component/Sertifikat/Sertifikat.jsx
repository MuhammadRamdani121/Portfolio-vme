import sertifikat from "../../data/Sertifikat";

export default function Sertifikat() {
  return (
    <>
      <header className="mx-auto mt-16 flex max-w-6xl justify-center px-5">
        <h1 className="border-b-2 border-blue-500 pb-3 text-center text-4xl font-bold">
          Sertifikat
        </h1>
      </header>

      <main className="mx-auto max-w-6xl px-5 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {sertifikat.map((item) => (
            <section
              key={item.id}
              className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-md transition-all duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-xl"
            >
              <img
                src={item.image}
                alt={item.title}
                className="h-52 w-full object-cover"
              />

              <nav className="space-y-3 p-5">
                <div className="flex items-center justify-between">
                  <h1 className="text-xl font-bold text-gray-800">
                    {item.title}
                  </h1>

                  <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700">
                    {item.year}
                  </span>
                </div>

                <p className="text-sm leading-6 text-gray-600">
                  {item.description}
                </p>
              </nav>

              <footer className="p-5 pt-0">
                <button className="w-full rounded-lg bg-blue-600 py-2 font-semibold text-white transition hover:bg-blue-700">
                  Lihat Sertifikat
                </button>
              </footer>
            </section>
          ))}
        </div>
      </main>
    </>
  );
}
