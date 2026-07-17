import { navigations } from "../../data/Navigation";
import { socials } from "../../data/Social";

export default function Footer() {
  return (
    <>
      <header className="border-t border-gray-200 pt-16">
        <h1 className="text-center text-3xl font-bold">Muhammad Ramdani</h1>

        <p className="mt-2 text-center text-gray-500">Full Stack Developer</p>
      </header>

      <main className="mx-auto max-w-6xl px-5 py-10">
        {/* Quick Links */}
        <nav className="flex flex-wrap justify-center gap-6">
          {navigations.portfolio.map((item) => (
            <a
              key={item.nama}
              href={item.path}
              className="transition hover:text-blue-600"
            >
              {item.nama}
            </a>
          ))}
        </nav>

        {/* Social Links */}
        <nav className="mt-8 flex flex-wrap justify-center gap-6">
          {socials.map((item) => (
            <a
              key={item.id}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-blue-600"
            >
              {item.nama}
            </a>
          ))}
        </nav>

        {/* Copyright */}
        <footer className="mt-10 border-t border-gray-200 pt-6 text-center text-sm text-gray-500">
          <p>
            © {new Date().getFullYear()} Muhammad Ramdani. All Rights Reserved.
          </p>

          <p className="mt-2">
            Crafted with <span className="font-semibold">React & </span>
            <span className="font-semibold">Tailwind CSS</span>
          </p>
        </footer>
      </main>
    </>
  );
}
