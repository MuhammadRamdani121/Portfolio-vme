import { NavLink } from "react-router-dom";
import {
  FaArrowLeft,
  FaCertificate,
  FaCode,
  FaFolderOpen,
} from "react-icons/fa";

export default function PortfolioSidebar() {
  return (
    <aside className="sticky top-8 h-fit w-72 rounded-2xl border border-gray-200 bg-white p-6 shadow-md">
      <div className="mb-8">
        <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-2xl text-blue-600">
          <FaFolderOpen />
        </div>

        <h2 className="text-2xl font-bold">Portfolio</h2>

        <p className="mt-2 text-sm leading-6 text-gray-500">
          Kumpulan project dan sertifikat yang saya kerjakan selama belajar dan
          mengembangkan kemampuan sebagai Full Stack Developer.
        </p>
      </div>

      <nav className="space-y-2">
        <NavLink
          to="/portfolio/project"
          className={({ isActive }) =>
            `flex items-center gap-3 rounded-xl px-4 py-3 transition ${
              isActive
                ? "bg-blue-600 text-white"
                : "hover:bg-blue-50 hover:text-blue-600"
            }`
          }
        >
          <FaCode />
          Project
        </NavLink>

        <NavLink
          to="/portfolio/sertifikat"
          className={({ isActive }) =>
            `flex items-center gap-3 rounded-xl px-4 py-3 transition ${
              isActive
                ? "bg-blue-600 text-white"
                : "hover:bg-blue-50 hover:text-blue-600"
            }`
          }
        >
          <FaCertificate />
          Sertifikat
        </NavLink>
      </nav>

      <div className="my-6 border-t"></div>

      <NavLink
        to="/"
        className="flex items-center gap-3 rounded-xl px-4 py-3 hover:bg-gray-100"
      >
        <FaArrowLeft />
        Kembali ke Home
      </NavLink>
    </aside>
  );
}
