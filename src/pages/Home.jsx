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
      <MenuNavbar navigation={navigations.portfolio} />

      <header id="home" className="pt-17 md:pt-0">
        <HeroSection />
      </header>

      <main>
        <section id="about" className="scroll-mt-20 bg-[#F5FAF5]">
          <TentangSaya />
        </section>

        <section id="education" className="scroll-mt-20 bg-[#D6EFD8]">
          <Pendidikan />
        </section>

        <section id="skills" className="scroll-mt-20 bg-[#F5FAF5]">
          <Skills />
        </section>

        <section id="projects" className="scroll-mt-20 bg-[#D6EFD8]">
          <Project limit={true} portfolio={true} />
        </section>

        <section id="sertifikat" className="scroll-mt-20 bg-[#F5FAF5]">
          <Sertifikat limit={true} portfolio={true} />
        </section>

        <section id="contact" className="scroll-mt-20 bg-[#D6EFD8]">
          <Contact />
        </section>
      </main>

      <Footer />
    </div>
  );
}
