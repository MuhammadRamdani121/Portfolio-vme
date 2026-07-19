import { Routes, Route, Navigate } from "react-router-dom";

import Home from "../pages/Home";

import PortfolioLayout from "../pages/Portfolio/PortfolioLayout";
import ProjectPage from "../pages/Portfolio/ProjectPage";
import SertifikatPage from "../pages/Portfolio/SertifikatPage";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/portfolio" element={<PortfolioLayout />}>
        <Route index element={<Navigate to="project" replace />} />
        <Route path="project" element={<ProjectPage />} />
        <Route path="sertifikat" element={<SertifikatPage />} />
      </Route>
    </Routes>
  );
}
