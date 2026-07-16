export default function Pendidikan() {
  return (
    <>
      <main className="mx-auto max-w-5xl px-5 py-16">
        <header className="flex justify-center">
          <h1 className="mb-12 border-b-2 border-gray-500 pb-3 text-center text-4xl font-bold">
            Pendidikan
          </h1>
        </header>

        {/* S1 */}
        <section className="mb-8 rounded-2xl border border-gray-200 bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-gray-500 hover:shadow-xl">
          <h1 className="text-2xl font-bold text-gray-800">
            🎓 S1 Teknik Informatika - Universitas Pamulang
          </h1>

          <h3 className="mt-2 text-sm font-medium text-gray-600 md:text-base">
            2020 - 2024
          </h3>

          <p className="mt-4 text-justify leading-7 text-gray-600">
            Menyelesaikan pendidikan Sarjana Teknik Informatika dengan fokus
            pada pengembangan perangkat lunak, basis data, dan aplikasi berbasis
            web. Selama perkuliahan aktif mengerjakan berbagai proyek akademik
            yang berkaitan dengan pemrograman, analisis sistem, dan pengelolaan
            database.
          </p>

          <ul className="mt-5 list-inside list-disc space-y-2 text-gray-700">
            <li>
              IPK: <strong>3.59 / 4.00</strong>
            </li>
            <li>Mempelajari HTML, CSS, JavaScript, React, PHP, Laravel.</li>
            <li>Menggunakan MySQL dan Microsoft SQL Server.</li>
            <li>Membuat proyek aplikasi desktop dan aplikasi web.</li>
            <li>Mempelajari analisis sistem, UI/UX, dan basis data.</li>
          </ul>
        </section>

        {/* SMK */}
        <section className="mb-8 rounded-2xl border border-gray-200 bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-gray-500 hover:shadow-xl">
          <h1 className="text-2xl font-bold text-gray-800">
            🎓 SMK Letris Indonesia 2
          </h1>

          <h3 className="mt-2 text-sm font-medium text-gray-600 md:text-base">
            2017 - 2020
          </h3>

          <p className="mt-4 text-justify leading-7 text-gray-600">
            Mengambil jurusan Rekayasa Perangkat Lunak (RPL) dan mempelajari
            dasar-dasar pemrograman, database, serta pengembangan aplikasi.
          </p>

          <ul className="mt-5 list-inside list-disc space-y-2 text-gray-700">
            <li>Jurusan Rekayasa Perangkat Lunak (RPL).</li>
            <li>Belajar Java, PHP, HTML, CSS, dan MySQL.</li>
            <li>Membuat aplikasi sederhana sebagai proyek pembelajaran.</li>
            <li>Memahami dasar algoritma dan logika pemrograman.</li>
          </ul>
        </section>

        {/* SMP */}
        <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-gray-500 hover:shadow-xl">
          <h1 className="text-2xl font-bold text-gray-800">
            🎓 SMP Islam AT-Taqwa
          </h1>

          <h3 className="mt-2 text-sm font-medium text-gray-600 md:text-base">
            2014 - 2017
          </h3>

          <p className="mt-4 text-justify leading-7 text-gray-600">
            Menyelesaikan pendidikan menengah pertama serta mulai mengenal
            teknologi informasi dan penggunaan komputer sebagai dasar untuk
            melanjutkan pendidikan di bidang Rekayasa Perangkat Lunak.
          </p>
        </section>
      </main>
    </>
  );
}
