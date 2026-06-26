import NavbarItems from "./NavbarItems";

export default function MenuNavbar() {
  return (
    <div>
      <header className="flex items-center justify-between bg-red-500">
        <img src="" alt="asd" />

        <nav className="flex items-center justify-between gap-6">
          <NavbarItems to={"/about"} nama="About" />

          <div className="realtive group">
            <button className="px-3 py-2">About</button>

            <div className="absolute mt-2 hidden rounded bg-white shadow-md group-hover:block">
              <NavbarItems to={"/about"} nama="A" />
              <NavbarItems to={"/about"} nama="A" />
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}
