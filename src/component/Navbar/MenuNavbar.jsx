import { useState } from "react";
import NavbarItems from "./NavbarItems";

export default function MenuNavbar() {
  const [openMenu, setOpenMenu] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(false);

  return (
    <div>
      <header className="relative flex items-center justify-between bg-red-500 px-6">
        {/* Logo */}
        <img
          className="my-2 h-15 w-15 rounded-full border md:h-12 md:w-12"
          src="/GambarDiri.jpg"
          alt="asd"
        />

        {/* Desktop Version */}
        <nav className="hidden gap-6 md:flex">
          <div className="group relative">
            <button className="px-3 py-2">About ▼</button>

            <div className="absolute top-full left-0 hidden min-w-40 flex-col rounded bg-white shadow-md group-hover:flex">
              <NavbarItems to={"/about"} nama="Rama" />
              <NavbarItems to={"/about"} nama="Aasd" />
            </div>
          </div>
          <NavbarItems to={"/about"} nama="ikaw" />
        </nav>

        {/* Hamburger */}
        <nav className="p-4 md:hidden">
          <button
            onClick={() => setOpenMenu(!openMenu)}
            className="text-4xl md:hidden"
          >
            ☰
          </button>
          {/* Mobile Menu */}
          {openMenu && (
            <div className="absolute top-full left-0 w-full bg-white shadow-md md:hidden">
              <div className="flex flex-col p-4">
                <NavbarItems to={"/about"} nama="Aasd" />

                {/* Dropdown Mobile */}
                <button
                  onClick={() => setOpenDropdown(!openDropdown)}
                  className="flex justify-between py-2 text-left"
                >
                  About
                  <span>{openDropdown ? "▲" : "▼"}</span>
                </button>

                {openDropdown && (
                  <div className="ml-4 flex flex-col">
                    <NavbarItems to={"/about"} nama="Aasd" />
                    <NavbarItems to={"/about"} nama="Aasd" />
                  </div>
                )}
                <NavbarItems to={"/about"} nama="Aasd" />
              </div>
            </div>
          )}
        </nav>
      </header>
    </div>
  );
}
