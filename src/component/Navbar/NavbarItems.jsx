import { NavLink } from "react-router-dom";

export default function NavbarItems(nama, path) {
  return (
    <div>
      <NavLink to={path}>{nama}</NavLink>
    </div>
  );
}
