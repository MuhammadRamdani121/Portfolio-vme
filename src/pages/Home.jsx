import HeroSection from "../component/HeroSection/HeroSection";

import MenuNavbar from "../component/Navbar/MenuNavbar";
import TentangSaya from "../component/TentangSaya/TentangSaya";

import { navigations } from "../data/Navigation";

export default function Home() {
  return (
    <div>
      <header className="">
        <MenuNavbar navigation={navigations.portfolio} />
      </header>
      <main className="">
        <section className="mt-16">
          <HeroSection />
        </section>

        <section className="">
          <TentangSaya />
        </section>
      </main>
    </div>
  );
}
