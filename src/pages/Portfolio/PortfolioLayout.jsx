import { Outlet } from "react-router-dom";
import PortfolioNavbar from "../../component/Sidebar/PortfolioNavbar";
import PortfolioSidebar from "../../component/Sidebar/PortfolioSidebar";

export default function PortfolioLayout() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-7xl px-5 py-8">
        {/* Mobile */}
        <div className="md:hidden">
          <PortfolioNavbar />

          <main className="mt-20 rounded-2xl border border-gray-200 bg-white p-6 shadow-md">
            <Outlet />
          </main>
        </div>

        {/* Desktop */}
        <div className="hidden gap-8 md:flex">
          <PortfolioSidebar />

          <main className="min-w-0 flex-1 rounded-2xl border border-gray-200 bg-white p-8 shadow-md">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
}
