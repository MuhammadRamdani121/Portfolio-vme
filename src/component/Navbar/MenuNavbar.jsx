import { useState } from "react";
import { navigation } from "../../data/Navigation";
import NavbarItems from "./NavbarItems";
import DropdownNavbar from "./DropdownNavbar";
import MobileDropdown from "./MobileDropdown";

export default function MenuNavbar() {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <header className="relative flex items-center justify-between bg-red-400 p-1">
      {/* Logo */}
      <h1 className="text-xl font-bold">Logo</h1>

      {/* Desktop */}
      <nav className="hidden items-center gap-6 md:flex">
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
        className="text-2xl md:hidden"
      >
        ☰
      </button>

      {/* Mobile */}
      {openMenu && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md md:hidden">
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
          </div>
        </div>
      )}
    </header>
  );
}
