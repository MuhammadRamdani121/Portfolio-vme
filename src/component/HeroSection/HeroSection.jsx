import { FaWhatsapp } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
export default function HeroSection() {
  return (
    <div>
      <main className="grid h-screen grid-cols-1 items-center justify-center md:grid-cols-2">
        <section className="order-2 grid items-center justify-center md:order-1">
          <h1>Muhammad Ramdani</h1>
          <p>Frontend Developer | React Developer</p>
          <nav className="mt-6 flex gap-4">
            <a
              href="https://wa.me/628xxxxxxxxxx"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl text-green-500"
            >
              <FaWhatsapp />
            </a>

            <a href="mailto:emailkamu@gmail.com">
              <SiGmail className="text-3xl text-red-500" />
            </a>
          </nav>
        </section>
        <aside className="order-1 grid items-center justify-center">
          <img
            src="/GambarDiri.jpg"
            className="h-50 w-50 rounded-full"
            alt=""
          />
        </aside>
      </main>
    </div>
  );
}
