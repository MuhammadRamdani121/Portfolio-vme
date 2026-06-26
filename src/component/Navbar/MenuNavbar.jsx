import NavbarItems from "./NavbarItems";

export default function MenuNavbar() {
  return (
    <div>
      <nav>
        <NavbarItems to={"/about"} nama="About" />
      </nav>
    </div>
  );
}
