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
    <div>
      <header>
        <MenuNavbar navigation={navigations.portfolio} />
      </header>
      <main className="bg-[#F5FAF5]">
        <section className="mt-17 bg-[#D6EFD8] md:mt-2" id="home">
          <HeroSection />
        </section>

        <section className="bg-[#F5FAF5]" id="about">
          <TentangSaya />
        </section>

        <section className="bg-[#D6EFD8]" id="education">
          <Pendidikan />
        </section>

        <section className="bg-[#F5FAF5]" id="skills">
          <Skills />
        </section>

        <section className="bg-[#D6EFD8]" id="projects">
          <Project limit={true} />
        </section>

        <section className="bg-[#F5FAF5]" id="sertifikat">
          <Sertifikat limit={true} />
        </section>

        <section className="bg-[#D6EFD8]" id="contact">
          <Contact />
        </section>
      </main>

      <section>
        <Footer />
      </section>
    </div>
  );
}
