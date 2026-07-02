import { NavLink } from "react-router-dom";

export default function NavbarItems({ nama, path }) {
  return (
    <NavLink
      to={path}
      className={({ isActive }) =>
        `block rounded-lg px-4 py-3 transition ${
          isActive
            ? "font-semibold text-blue-500"
            : "text-gray-700 hover:bg-white/20 hover:text-blue-500"
        }`
      }
    >
      {nama}
    </NavLink>
  );
}
