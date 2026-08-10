import Contact from "../component/Contact/Contact";
import Footer from "../component/Footer/Footer";
import HeroSection from "../component/HeroSection/HeroSection";

import MenuNavbar from "../component/Navbar/MenuNavbar";
import Pendidikan from "../component/Pendidikan/Pendidikan";
import Project from "../component/Project/Project";
import Sertifikat from "../component/Sertifikat/Sertifikat";
import Skills from "../component/Skills/Skills";
import TentangSaya from "../component/TentangSaya/TentangSaya";

import { navigations } from "../data/Navigation";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F5FAF5] text-[#1A5319]">
      {/* ==================== NAVBAR ==================== */}
      <MenuNavbar navigation={navigations.portfolio} />

      {/* ==================== HERO ==================== */}
      <header id="home" className="pt-16 md:pt-0">
        <HeroSection />
      </header>

      {/* ==================== MAIN CONTENT ==================== */}
      <main>
        {/* ==================== ABOUT ==================== */}
        <section id="about" className="scroll-mt-20 bg-[#F5FAF5]">
          <TentangSaya />
        </section>

        {/* ==================== EDUCATION ==================== */}
        <section id="education" className="scroll-mt-20 bg-[#D6EFD8]">
          <Pendidikan />
        </section>

        {/* ==================== SKILLS ==================== */}
        <section id="skills" className="scroll-mt-20 bg-[#F5FAF5]">
          <Skills />
        </section>

        {/* ==================== PROJECTS ==================== */}
        <section id="projects" className="scroll-mt-20 bg-[#D6EFD8]">
          <Project limit={true} />
        </section>

        {/* ==================== SERTIFIKAT ==================== */}
        <section id="sertifikat" className="scroll-mt-20 bg-[#F5FAF5]">
          <Sertifikat limit={true} />
        </section>

        {/* ==================== CONTACT ==================== */}
        <section id="contact" className="scroll-mt-20 bg-[#D6EFD8]">
          <Contact />
        </section>
      </main>

      {/* ==================== FOOTER ==================== */}
      <Footer />
    </div>
  );
}
