import { useState } from "react";
import { navigation } from "../data/navigation";
import NavbarItems from "./NavbarItems";
import DropdownNavbar from "./DropdownNavbar";
import MobileDropdown from "./MobileDropdown";

export default function MenuNavbar() {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <header>
      {/* Logo */}
      <h1 className="text-xl font-bold">Logo</h1>

      {/* Dekstop */}
      <nav>
        {navigation.map((menu) => {
          if (menu.children) {
            return (
              <DropdownNavbar key={menu.nama} nama={menu.nama}>
                {menu.children.map((item) => (
                  <NavbarItems
                    key={item.nama}
                    nama={item.nama}
                    to={item.path}
                  />
                ))}
              </DropdownNavbar>
            );
          }

          return (
            <NavbarItems key={menu.nama} nama={menu.nama} to={menu.path} />
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
        <div>
          <div>
            {navigation.map((menu) => {
              if (menu.children) {
                return (
                  <MobileDropdown key={menu.nama} nama={menu.nama}>
                    {menu.children.map((item) => (
                      <NavbarItems
                        key={item.nama}
                        nama={item.nama}
                        to={item.path}
                      />
                    ))}
                  </MobileDropdown>
                );
              }
              return (
                <NavbarItems key={menu.nama} nama={menu.nama} to={menu.path} />
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
}
