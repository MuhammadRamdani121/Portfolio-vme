import Contact from "../component/Contact/Contact";
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
      <header className="">
        <MenuNavbar navigation={navigations.portfolio} />
      </header>
      <main className="">
        <section className="mt-17 md:mt-2">
          <HeroSection />
        </section>

        <section className="">
          <TentangSaya />
        </section>

        <section className="">
          <Pendidikan />
        </section>

        <section>
          <Skills />
        </section>

        <section>
          <Project />
        </section>

        <section>
          <Sertifikat />
        </section>

        <section>
          <Contact />
        </section>
      </main>
    </div>
  );
}
