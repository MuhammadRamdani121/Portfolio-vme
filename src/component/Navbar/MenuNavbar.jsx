import { useEffect, useState } from "react";
import NavbarItems from "./NavbarItems";
import DropdownNavbar from "./DropdownNavbar";

export default function MenuNavbar({ navigation }) {
  const [openMenu, setOpenMenu] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.5,
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed top-0 z-50 w-full border-b bg-white shadow-sm">
      <section className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
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
              <NavbarItems
                key={menu.nama}
                nama={menu.nama}
                path={menu.path}
                active={activeSection === menu.path.replace("#", "")}
                onClick={() => setOpenMenu(false)}
              />
            );
          })}
        </nav>

        {/* Hamburger */}
        <button
          onClick={() => setOpenMenu(!openMenu)}
          className="rounded-lg p-2 text-3xl hover:bg-gray-100 md:hidden"
        >
          {openMenu ? "✕" : "☰"}
        </button>
      </section>

      {/* Mobile */}
      {openMenu && (
        <section className="absolute top-full left-0 w-full md:hidden">
          <nav className="border-t bg-white shadow-lg">
            {navigation.map((menu) => {
              if (menu.children) {
                return (
                  <DropdownNavbar key={menu.nama} nama={menu.nama} mobile>
                    {menu.children.map((item) => (
                      <NavbarItems
                        key={item.nama}
                        nama={item.nama}
                        path={item.path}
                        onClick={() => setOpenMenu(false)}
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
                  active={activeSection === menu.path.replace("#", "")}
                  onClick={() => setOpenMenu(false)}
                />
              );
            })}
          </nav>
        </section>
      )}
    </header>
  );
}
