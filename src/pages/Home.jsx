import HeroSection from "../component/HeroSection/HeroSection";
import MenuNavbar from "../component/Navbar/MenuNavbar";
import TentangSaya from "../component/TentangSaya/TentangSaya";

export default function Home() {
  return (
    <div>
      <header className="">
        <MenuNavbar />
      </header>
      <main>
        <section>
          <HeroSection />
        </section>

        <section className="border">
          <TentangSaya />
        </section>
      </main>
    </div>
  );
}
