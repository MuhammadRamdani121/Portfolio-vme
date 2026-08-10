export default function Contact() {
  return (
    <>
      {/* ==================== TITLE ==================== */}
      <header className="mx-auto flex max-w-6xl justify-center px-5">
        <h1 className="mt-16 border-b-2 border-[#508D4E] pb-3 text-center text-4xl font-bold text-[#1A5319]">
          Contact
        </h1>
      </header>

      {/* ==================== CONTENT ==================== */}
      <main className="mx-auto max-w-5xl px-5 py-12">
        <section className="overflow-hidden rounded-3xl border border-[#80AF81] bg-[#D6EFD8] p-6 shadow-lg md:p-10">
          {/* Intro */}
          <div className="mx-auto max-w-2xl text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#508D4E] text-2xl shadow-md">
              👋
            </div>

            <h2 className="mt-5 text-3xl font-bold text-[#1A5319] md:text-4xl">
              Mari Terhubung
            </h2>

            <p className="mt-4 leading-7 text-[#508D4E]">
              Terima kasih telah mengunjungi portfolio saya. Apabila Anda
              memiliki pertanyaan, ingin berdiskusi, atau tertarik bekerja sama,
              silakan hubungi saya melalui kontak berikut.
            </p>
          </div>

          {/* ==================== CONTACT LIST ==================== */}
          <nav className="mt-10 space-y-4">
            {/* Email */}
            <a
              href="mailto:muhamadramdani121.mr60@gmail.com"
              className="group flex items-center justify-between gap-4 rounded-2xl border border-[#80AF81] bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#508D4E] hover:bg-[#D6EFD8] hover:shadow-md sm:p-5"
            >
              <div className="flex min-w-0 items-center gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#D6EFD8] text-xl">
                  📧
                </div>

                <div className="min-w-0">
                  <p className="text-sm font-medium text-[#80AF81]">Email</p>

                  <p className="truncate font-semibold text-[#1A5319]">
                    muhamadramdani121.mr60@gmail.com
                  </p>
                </div>
              </div>

              <span className="shrink-0 text-lg font-semibold text-[#508D4E] transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/MuhammadRamdani121/"
              target="_blank"
              rel="noreferrer"
              className="group flex items-center justify-between gap-4 rounded-2xl border border-[#80AF81] bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#508D4E] hover:bg-[#D6EFD8] hover:shadow-md sm:p-5"
            >
              <div className="flex min-w-0 items-center gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#D6EFD8] text-xl">
                  💻
                </div>

                <div className="min-w-0">
                  <p className="text-sm font-medium text-[#80AF81]">GitHub</p>

                  <p className="truncate font-semibold text-[#1A5319]">
                    github.com/MuhammadRamdani121
                  </p>
                </div>
              </div>

              <span className="shrink-0 text-lg font-semibold text-[#508D4E] transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com/in/username"
              target="_blank"
              rel="noreferrer"
              className="group flex items-center justify-between gap-4 rounded-2xl border border-[#80AF81] bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#508D4E] hover:bg-[#D6EFD8] hover:shadow-md sm:p-5"
            >
              <div className="flex min-w-0 items-center gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#D6EFD8] text-xl">
                  💼
                </div>

                <div className="min-w-0">
                  <p className="text-sm font-medium text-[#80AF81]">LinkedIn</p>

                  <p className="truncate font-semibold text-[#1A5319]">
                    linkedin.com/in/username
                  </p>
                </div>
              </div>

              <span className="shrink-0 text-lg font-semibold text-[#508D4E] transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/62895805102578"
              target="_blank"
              rel="noreferrer"
              className="group flex items-center justify-between gap-4 rounded-2xl border border-[#80AF81] bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#508D4E] hover:bg-[#D6EFD8] hover:shadow-md sm:p-5"
            >
              <div className="flex min-w-0 items-center gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#D6EFD8] text-xl">
                  📱
                </div>

                <div className="min-w-0">
                  <p className="text-sm font-medium text-[#80AF81]">WhatsApp</p>

                  <p className="font-semibold text-[#1A5319]">Chat Saya</p>
                </div>
              </div>

              <span className="shrink-0 text-lg font-semibold text-[#508D4E] transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>
          </nav>

          {/* ==================== FOOTER MESSAGE ==================== */}
          <div className="mt-8 rounded-2xl border border-[#80AF81] bg-white/70 p-5 text-center">
            <p className="text-sm leading-6 text-[#508D4E]">
              Terbuka untuk kesempatan kerja, kolaborasi, dan diskusi mengenai
              teknologi.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
