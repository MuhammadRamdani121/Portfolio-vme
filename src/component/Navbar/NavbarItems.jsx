import { NavLink } from "react-router-dom";

export default function NavbarItems({ nama, path }) {
  return (
    <NavLink
      to={path}
      className={({ isActive }) =>
        `block py-1 ${
          isActive
            ? "font-semibold text-black"
            : "text-black hover:text-blue-500"
        }`
      }
    >
      {nama}
    </NavLink>
  );
}
