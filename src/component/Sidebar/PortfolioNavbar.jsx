import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  FaCertificate,
  FaChevronDown,
  FaChevronUp,
  FaCode,
  FaHome,
} from "react-icons/fa";

export default function PortfolioNavbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 right-0 left-0 z-50 border-b border-gray-200 bg-white/90 shadow-sm backdrop-blur-md">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="flex h-16 items-center justify-between px-5">
          <NavLink
            to="/"
            className="flex items-center gap-2 rounded-lg px-3 py-2 font-medium transition hover:bg-gray-100"
          >
            <FaHome />
            Home
          </NavLink>

          <button
            onClick={() => setOpen(!open)}
            className="flex items-center gap-2 rounded-lg px-3 py-2 font-medium transition hover:bg-gray-100"
          >
            Portfolio
            {open ? (
              <FaChevronUp className="transition" />
            ) : (
              <FaChevronDown className="transition" />
            )}
          </button>
        </div>

        {/* Dropdown */}
        <div
          className={`overflow-hidden transition-all duration-300 ${
            open ? "max-h-60 border-t" : "max-h-0"
          }`}
        >
          <NavLink
            to="/portfolio/project"
            onClick={() => setOpen(false)}
            className={({ isActive }) =>
              `flex items-center gap-3 px-5 py-4 transition ${
                isActive
                  ? "bg-blue-50 font-semibold text-blue-600"
                  : "hover:bg-gray-50"
              }`
            }
          >
            <FaCode />
            Project
          </NavLink>

          <NavLink
            to="/portfolio/sertifikat"
            onClick={() => setOpen(false)}
            className={({ isActive }) =>
              `flex items-center gap-3 border-t px-5 py-4 transition ${
                isActive
                  ? "bg-blue-50 font-semibold text-blue-600"
                  : "hover:bg-gray-50"
              }`
            }
          >
            <FaCertificate />
            Sertifikat
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
