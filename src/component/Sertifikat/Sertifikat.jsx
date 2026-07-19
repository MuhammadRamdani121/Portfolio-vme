import { useState } from "react";
import { Link } from "react-router-dom";
import sertifikat from "../../data/Sertifikat";

export default function Sertifikat({ limit = false, portfolio = false }) {
  const [activeCard, setActiveCard] = useState(null);

  const data = limit ? sertifikat.slice(0, 3) : sertifikat;

  const gridClass = portfolio
    ? "grid gap-8 md:grid-cols-2"
    : "grid gap-8 md:grid-cols-2 lg:grid-cols-3";

  return (
    <>
      {!portfolio && (
        <header className="mx-auto mt-16 flex max-w-6xl justify-center px-5">
          <h1 className="border-b-2 border-blue-500 pb-3 text-center text-4xl font-bold">
            Sertifikat
          </h1>
        </header>
      )}

      <main className="mx-auto max-w-6xl px-5 py-12">
        <div className={gridClass}>
          {data.map((item) => (
            <section
              key={item.id}
              onClick={() =>
                setActiveCard(activeCard === item.id ? null : item.id)
              }
              className="group flex cursor-pointer flex-col overflow-hidden rounded-2xl border border-zinc-700 bg-zinc-900 shadow-lg transition-all duration-500 hover:-translate-y-2 hover:border-blue-500 hover:shadow-2xl"
            >
              {/* Gambar */}
              <div className="flex h-56 items-center justify-center overflow-hidden bg-zinc-800">
                <img
                  src={item.image}
                  alt={item.title}
                  className="max-h-full max-w-full object-contain transition duration-500 group-hover:scale-105"
                />
              </div>

              {/* Isi */}
              <div className="flex flex-1 flex-col p-5">
                <div className="flex items-start justify-between">
                  <div>
                    <h2 className="text-xl font-bold text-white">
                      {item.title}
                    </h2>

                    <p className="mt-1 text-sm font-medium text-blue-400">
                      {item.issuer}
                    </p>
                  </div>

                  <span className="rounded-full bg-blue-500/20 px-3 py-1 text-sm font-medium text-blue-300">
                    {item.year}
                  </span>
                </div>

                <p
                  className={`mt-4 flex-1 overflow-hidden text-sm leading-6 text-zinc-400 transition-all duration-500 ${
                    activeCard === item.id
                      ? "max-h-60"
                      : "max-h-18 md:group-hover:max-h-60"
                  }`}
                >
                  {item.description}
                </p>

                <footer className="mt-6">
                  <button className="w-full rounded-lg border border-blue-500 py-2 font-semibold text-blue-400 transition hover:bg-blue-500 hover:text-white">
                    Lihat Sertifikat →
                  </button>
                </footer>
              </div>
            </section>
          ))}
        </div>

        {limit && (
          <footer className="mt-10 flex justify-end">
            <Link
              to="/portfolio/sertifikat"
              className="font-semibold text-blue-400 transition hover:text-blue-300"
            >
              Lihat Selengkapnya →
            </Link>
          </footer>
        )}
      </main>
    </>
  );
}
