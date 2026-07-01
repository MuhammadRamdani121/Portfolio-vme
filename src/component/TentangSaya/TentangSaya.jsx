export default function TentangSaya() {
  return (
    <main className="h-screen">
      <h1 className="text-center text-2xl font-bold underline underline-offset-8">
        Tentang Saya
      </h1>
      <section>
        <h1 className="px-4 text-justify indent-1.5">
          Saya Muhammad Ramdani, seorang Front-End Web Developer yang memiliki
          minat dalam pengembangan website modern menggunakan React dan Tailwind
          CSS. Saya senang mempelajari teknologi baru dan membangun aplikasi
          yang bermanfaat.
        </h1>
      </section>
      <section>
        <nav className="flex justify-center gap-2">
          <a href="">Pendidikan</a>
          <a href="">Pengalaman</a>
          <a href="">Skills</a>
          <a href="">Tujuan Karier</a>
        </nav>
        <aside>
          <h1>Statistik</h1>
          <nav>
            <a href="">5+ Project</a>
            <a href="">1+ Tahun Belajar</a>
            <a href="">1000+ Jam Coding</a>
            <a href=""></a>
            <a href=""></a>
          </nav>
        </aside>
      </section>
    </main>
  );
}
