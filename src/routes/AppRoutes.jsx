import { Routes, Route, Navigate } from "react-router-dom";

import Home from "../pages/Home";

import PortfolioLayout from "../pages/Portfolio/PortfolioLayout";
import ProjectPage from "../pages/Portfolio/ProjectPage";
import SertifikatPage from "../pages/Portfolio/SertifikatPage";

import ProjectDetail from "../pages/Project/ProjectDetail";
import SertifikatDetail from "../pages/Sertifikat/SertifikatDetail";

export default function AppRoutes() {
  return (
    <Routes>
      {/* HOME */}
      <Route path="/" element={<Home />} />

      {/* PORTFOLIO LAYOUT */}
      <Route path="/portfolio" element={<PortfolioLayout />}>
        {/* /portfolio */}
        <Route index element={<Navigate to="project" replace />} />

        {/* /portfolio/project */}
        <Route path="project" element={<ProjectPage />} />

        {/* /portfolio/project/:id */}
        <Route path="project/:id" element={<ProjectDetail />} />

        {/* /portfolio/sertifikat */}
        <Route path="sertifikat" element={<SertifikatPage />} />

        {/* /portfolio/sertifikat/:id */}
        <Route path="sertifikat/:id" element={<SertifikatDetail />} />
      </Route>
    </Routes>
  );
}
