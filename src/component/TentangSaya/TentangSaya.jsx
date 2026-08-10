export default function TentangSayaa() {
  return (
    <>
      <header className="px-6 pt-15 pb-2 text-center">
        <h1 className="inline-block border-b-2 border-[#508D4E] pb-2 text-4xl font-bold text-[#1A5319]">
          Tentang Saya
        </h1>
      </header>

      <main className="px-6 pb-20">
        <section className="grid grid-cols-1 gap-8 md:grid-cols-[2fr_1fr]">
          {/* Tentang Saya */}
          <article className="rounded-3xl border border-[#80AF81] bg-[#D6EFD8] p-10">
            <div className="mt-6 max-w-3xl space-y-4 text-justify indent-5 text-[#508D4E]">
              <p>
                Halo, saya
                <strong className="text-[#1A5319]"> Muhammad Ramdani</strong>,
                seorang Fresh Graduate S1 Teknik Informatika yang berfokus pada
                pengembangan aplikasi web, khususnya Front-End Development.{" "}
              </p>
              <p>
                Saya memiliki ketertarikan dalam membangun website yang
                responsif, modern, dan mudah digunakan. Dalam proses
                pengembangan, saya menggunakan teknologi seperti HTML, CSS,
                JavaScript, React.js, dan Tailwind CSS. Saya juga memiliki
                pemahaman mengenai Back-End menggunakan PHP, Laravel, Node.js,
                dan Express, serta pengelolaan database menggunakan MySQL dan
                Microsoft SQL Server.{" "}
              </p>{" "}
              <p>
                {" "}
                Saya senang belajar melalui praktik dan project karena setiap
                project memberikan kesempatan untuk memahami proses pengembangan
                aplikasi secara lebih menyeluruh. Saat ini saya terus
                meningkatkan kemampuan dalam problem solving, struktur kode,
                Git, dan GitHub untuk mempersiapkan diri memulai karier sebagai
                Front-End / Full Stack Developer.{" "}
              </p>{" "}
            </div>

            <nav className="mt-10 flex flex-wrap gap-4">
              <span className="rounded-full border border-[#508D4E] bg-[#80AF81] px-6 py-3 font-medium text-[#1A5319] transition hover:bg-[#508D4E] hover:text-[#D6EFD8]">
                🎓 Pendidikan
              </span>

              <span className="rounded-full border border-[#508D4E] bg-[#80AF81] px-6 py-3 font-medium text-[#1A5319] transition hover:bg-[#508D4E] hover:text-[#D6EFD8]">
                💼 Pengalaman
              </span>

              <span className="rounded-full border border-[#508D4E] bg-[#80AF81] px-6 py-3 font-medium text-[#1A5319] transition hover:bg-[#508D4E] hover:text-[#D6EFD8]">
                💻 Skills
              </span>

              <span className="rounded-full border border-[#508D4E] bg-[#80AF81] px-6 py-3 font-medium text-[#1A5319] transition hover:bg-[#508D4E] hover:text-[#D6EFD8]">
                🚀 Tujuan Karier
              </span>
            </nav>
          </article>

          {/* Sidebar */}
          <aside className="flex flex-col gap-8">
            {/* Statistik */}
            <header className="rounded-3xl border border-[#508D4E] bg-[#80AF81] p-10 text-center">
              <h1 className="text-3xl font-bold text-[#1A5319]">Statistik</h1>

              <nav className="flex items-center justify-center gap-5">
                <span className="mt-8 inline-block">
                  <h1 className="text-xl font-bold text-[#1A5319]">5+</h1>
                  <p className="text-[#1A5319]">Project</p>
                </span>

                <span className="mt-8 inline-block">
                  <h1 className="text-xl font-bold text-[#1A5319]">1+</h1>
                  <p className="text-[#1A5319]">Tahun</p>
                </span>

                <span className="mt-8 inline-block">
                  <h1 className="text-xl font-bold text-[#1A5319]">1000+</h1>
                  <p className="text-[#1A5319]">Jam</p>
                </span>
              </nav>
            </header>

            {/* Download */}
            <nav className="rounded-3xl border border-[#80AF81] bg-[#508D4E] p-10">
              <h1 className="mb-8 text-center text-3xl font-bold text-[#D6EFD8]">
                Download
              </h1>

              <button className="mb-4 h-14 w-full rounded-xl border border-[#D6EFD8] bg-transparent font-medium text-[#D6EFD8] transition hover:bg-[#D6EFD8] hover:text-[#1A5319]">
                Download CV
              </button>

              <button className="h-14 w-full rounded-xl border border-[#D6EFD8] bg-transparent font-medium text-[#D6EFD8] transition hover:bg-[#D6EFD8] hover:text-[#1A5319]">
                Download Resume
              </button>
            </nav>
          </aside>
        </section>
      </main>
    </>
  );
}
