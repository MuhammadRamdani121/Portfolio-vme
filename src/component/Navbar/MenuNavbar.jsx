import { useState } from "react";
import { navigation } from "../../data/Navigation";
import NavbarItems from "./NavbarItems";
import DropdownNavbar from "./DropdownNavbar";
import MobileDropdown from "./MobileDropdown";

export default function MenuNavbar() {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-slate-200/70 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-3">
          <img
            className="h-11 w-11 rounded-full border-2 border-white object-cover shadow"
            src="/GambarDiri.jpg"
            alt="Muhammad Ramdani"
          />

          <div className="hidden sm:block">
            <h1 className="font-semibold">Muhammad Ramdani</h1>
            <p className="text-xs text-slate-500">Frontend Developer</p>
          </div>
        </a>

        {/* Desktop */}
        <nav className="hidden items-center gap-2 md:flex">
          {navigation.map((menu) => {
            if (menu.children) {
              return (
                <DropdownNavbar key={menu.nama} nama={menu.nama}>
                  {menu.children.map((item) => (
                    <NavbarItems
                      key={item.nama}
                      nama={item.nama}
                      path={item.path}
                    />
                  ))}
                </DropdownNavbar>
              );
            }

            return (
              <NavbarItems key={menu.nama} nama={menu.nama} path={menu.path} />
            );
          })}

          {/* CTA */}
          <a
            href="/cv.pdf"
            download
            className="ml-4 rounded-lg bg-black px-4 py-2 text-sm text-white transition hover:opacity-90"
          >
            Download CV
          </a>
        </nav>

        {/* Hamburger */}
        <button
          onClick={() => setOpenMenu(!openMenu)}
          className="text-3xl text-slate-700 md:hidden"
        >
          {openMenu ? "✕" : "☰"}
        </button>

        {/* Mobile Menu */}
        <div
          className={`absolute top-full left-0 w-full border-t bg-white shadow-lg transition-all duration-300 md:hidden ${
            openMenu ? "visible opacity-100" : "invisible opacity-0"
          }`}
        >
          <div className="flex flex-col p-4">
            {navigation.map((menu) => {
              if (menu.children) {
                return (
                  <MobileDropdown key={menu.nama} nama={menu.nama}>
                    {menu.children.map((item) => (
                      <NavbarItems
                        key={item.nama}
                        nama={item.nama}
                        path={item.path}
                      />
                    ))}
                  </MobileDropdown>
                );
              }

              return (
                <NavbarItems
                  key={menu.nama}
                  nama={menu.nama}
                  path={menu.path}
                />
              );
            })}

            <a
              href="/cv.pdf"
              download
              className="mt-4 rounded-lg bg-black px-4 py-3 text-center text-white"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
