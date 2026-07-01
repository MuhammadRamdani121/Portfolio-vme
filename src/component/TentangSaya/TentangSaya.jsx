export default function TentangSaya() {
  return (
    <div className="">
      <h1 className="text-center text-2xl font-bold underline underline-offset-8">
        Tentang Saya
      </h1>

      <main className="my-2 flex h-screen flex-col items-center px-4 md:my-10 md:flex-row md:items-start">
        <section className="flex flex-col gap-4 border md:w-1/2">
          <h1 className="px-4 text-justify indent-1.5">
            Saya Muhammad Ramdani, seorang Front-End Web Developer yang memiliki
            minat dalam pengembangan website modern menggunakan React dan
            Tailwind CSS. Saya senang mempelajari teknologi baru dan membangun
            aplikasi yang bermanfaat.
          </h1>
          <nav className="flex justify-center gap-2">
            <a href="" className="">
              Pendidikan
            </a>
            <a href="" className="border-l pl-2">
              Pengalaman
            </a>
            <a href="" className="border-l pl-2">
              Skills
            </a>
            <a href="" className="border-l pl-2">
              Tujuan Karier
            </a>
          </nav>
        </section>
        <section className="my-6 flex flex-col items-center justify-center gap-8 border md:mx-4 md:my-0 md:w-1/2">
          <aside className="">
            <h1 className="text-center text-lg font-bold uppercase">
              Statistik
            </h1>
            <nav className="flex gap-2">
              <a href="" className="">
                5+ Project
              </a>
              <a href="" className="border-l pl-2">
                1+ Tahun Belajar
              </a>
              <a href="" className="border-l pl-2">
                1000+ Jam Coding
              </a>
            </nav>
          </aside>
          <aside className="">
            <h1 className="text-center text-lg font-bold uppercase">
              Download CV/Resume
            </h1>
            <nav className="relative flex gap-2">
              <div>
                <a href="" className="border px-4">
                  Download CV
                </a>
              </div>
              <div className="border-l-3 pl-2">
                <a href="" className="border px-4">
                  Download Resume
                </a>
              </div>
            </nav>
          </aside>
        </section>
      </main>
    </div>
  );
}
