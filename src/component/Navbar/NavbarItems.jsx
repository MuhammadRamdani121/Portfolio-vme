import { NavLink } from "react-router-dom";

export default function NavbarItems({ nama, to }) {
  return (
    <NavLink
      className={({ isActive }) =>
        `block px-4 py-1 ${
          isActive
            ? "font-semibold text-blue-500"
            : "text-gray-400 hover:text-blue-500"
        }`
      }
      to={to}
    >
      {nama}
    </NavLink>
  );
}
