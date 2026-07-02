import { useState } from "react";
import NavbarItems from "./NavbarItems";
import DropdownNavbar from "./DropdownNavbar";

export default function MenuNavbar({ navigation }) {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full border-b bg-white shadow-sm">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-blue-500">Ramdani</h1>

        {/* Desktop */}
        <nav className="hidden items-center gap-8 md:flex">
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
        </nav>

        {/* Hamburger */}
        <button
          onClick={() => setOpenMenu(!openMenu)}
          className="rounded-lg p-2 text-3xl transition hover:bg-gray-100 md:hidden"
        >
          {openMenu ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {openMenu && (
        <div className="absolute top-full left-0 z-50 w-full md:hidden">
          <nav className="border-t border-gray-200 bg-white/70 shadow-lg backdrop-blur-xl">
            <div className="flex flex-col py-2">
              {navigation.map((menu) => {
                if (menu.children) {
                  return (
                    <DropdownNavbar key={menu.nama} nama={menu.nama} mobile>
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
                  <NavbarItems
                    key={menu.nama}
                    nama={menu.nama}
                    path={menu.path}
                  />
                );
              })}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
