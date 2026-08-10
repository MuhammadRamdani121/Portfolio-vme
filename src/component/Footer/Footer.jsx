import { navigations } from "../../data/Navigation";
import { socials } from "../../data/Social";

export default function Footer() {
  return (
    <footer className="border-t border-[#80AF81] bg-[#D6EFD8]">
      {/* ==================== BRAND ==================== */}
      <header className="px-5 pt-12">
        <h2 className="text-center text-2xl font-bold text-[#1A5319] md:text-3xl">
          Muhammad Ramdani
        </h2>

        <p className="mt-2 text-center text-[#508D4E]">Full Stack Developer</p>
      </header>

      <main className="mx-auto max-w-6xl px-5 py-10">
        {/* ==================== QUICK LINKS ==================== */}
        <nav className="flex flex-wrap justify-center gap-x-8 gap-y-4">
          {navigations.portfolio.map((item) => (
            <a
              key={item.nama}
              href={item.path}
              className="group relative font-medium text-[#1A5319] transition-colors duration-300 hover:text-[#508D4E]"
            >
              {item.nama}

              <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-[#508D4E] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* ==================== DIVIDER ==================== */}
        <div className="mx-auto my-8 h-px max-w-3xl bg-[#80AF81]" />

        {/* ==================== SOCIAL LINKS ==================== */}
        <nav className="flex flex-wrap justify-center gap-3">
          {socials.map((item) => (
            <a
              key={item.id}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-[#80AF81] bg-white px-5 py-2 text-sm font-medium text-[#1A5319] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#508D4E] hover:bg-[#508D4E] hover:text-[#D6EFD8] hover:shadow-md"
            >
              {item.nama}
            </a>
          ))}
        </nav>

        {/* ==================== COPYRIGHT ==================== */}
        <div className="mt-10 border-t border-[#80AF81] pt-6 text-center text-sm text-[#508D4E]">
          <p>
            © {new Date().getFullYear()} Muhammad Ramdani. All Rights Reserved.
          </p>

          <p className="mt-2">
            Crafted with{" "}
            <span className="font-semibold text-[#1A5319]">React</span> &{" "}
            <span className="font-semibold text-[#1A5319]">Tailwind CSS</span>
          </p>
        </div>
      </main>
    </footer>
  );
}
