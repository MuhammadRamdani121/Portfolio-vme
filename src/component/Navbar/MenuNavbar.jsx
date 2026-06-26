import NavbarItems from "./NavbarItems";

export default function MenuNavbar() {
  return (
    <div>
      <nav>
        <NavbarItems to={"/about"} nama="About" />

        <div>
          <button>About</button>

          <div>
            <NavbarItems to={"/about"} nama="A" />
            <NavbarItems to={"/about"} nama="A" />
          </div>
        </div>
      </nav>
    </div>
  );
}
