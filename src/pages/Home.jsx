import HeroSection from "../component/HeroSection/HeroSection";
import MenuNavbar from "../component/Navbar/MenuNavbar";

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
      </main>
    </div>
  );
}
