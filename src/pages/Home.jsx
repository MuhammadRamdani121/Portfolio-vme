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
      <main>
        <section className="mt-17 md:mt-2" id="home">
          <HeroSection />
        </section>

        <section className="" id="about">
          <TentangSaya />
        </section>

        <section className="" id="education">
          <Pendidikan />
        </section>

        <section id="skills">
          <Skills />
        </section>

        <section id="projects">
          <Project />
        </section>

        <section id="sertifikat">
          <Sertifikat />
        </section>

        <section id="contact">
          <Contact />
        </section>
      </main>

      <section>
        <Footer />
      </section>
    </div>
  );
}
