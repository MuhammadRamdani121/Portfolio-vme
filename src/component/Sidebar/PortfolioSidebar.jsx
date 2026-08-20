import { NavLink } from "react-router-dom";
import {
  FaArrowLeft,
  FaCertificate,
  FaCode,
  FaFolderOpen,
} from "react-icons/fa";

export default function PortfolioSidebar() {
  return (
    <aside className="sticky top-0 h-screen w-72 shrink-0 border-r border-[#80AF81] bg-[#D6EFD8] p-6">
      {/* Header */}
      <div className="mb-8">
        <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#80AF81]/30 text-2xl text-[#1A5319]">
          <FaFolderOpen />
        </div>

        <h2 className="text-2xl font-bold text-[#1A5319]">Portfolio</h2>

        <p className="mt-2 text-sm leading-6 text-[#508D4E]">
          Kumpulan project dan sertifikat yang saya kerjakan selama belajar dan
          mengembangkan kemampuan sebagai Full Stack Developer.
        </p>
      </div>

      {/* Navigation */}
      <nav className="space-y-2">
        <NavLink
          to="/portfolio/project"
          className={({ isActive }) =>
            `flex items-center gap-3 rounded-xl px-4 py-3 transition ${
              isActive
                ? "bg-[#508D4E] font-semibold text-[#D6EFD8]"
                : "text-[#1A5319] hover:bg-[#80AF81]/30 hover:text-[#1A5319]"
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
                ? "bg-[#508D4E] font-semibold text-[#D6EFD8]"
                : "text-[#1A5319] hover:bg-[#80AF81]/30 hover:text-[#1A5319]"
            }`
          }
        >
          <FaCertificate />
          Sertifikat
        </NavLink>
      </nav>

      {/* Divider */}
      <div className="my-6 border-t border-[#80AF81]"></div>

      {/* Back Home */}
      <NavLink
        to="/"
        className="flex items-center gap-3 rounded-xl px-4 py-3 text-[#508D4E] transition hover:bg-[#80AF81]/30 hover:text-[#1A5319]"
      >
        <FaArrowLeft />
        Kembali ke Home
      </NavLink>
    </aside>
  );
}
