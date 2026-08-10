export default function Pendidikan() {
  const education = [
    {
      year: "2020 - 2024",
      degree: "S1 Teknik Informatika",
      school: "Universitas Pamulang",
      description:
        "Mempelajari pengembangan perangkat lunak, pemrograman, basis data, dan pengembangan aplikasi berbasis web.",
      details: ["IPK: 3.59", "Fokus: Web Development", "Lulus: 2024"],
    },
    {
      year: "2017 - 2020",
      degree: "Rekayasa Perangkat Lunak",
      school: "SMK Letris Indonesia 2",
      description:
        "Mempelajari dasar pemrograman, pengembangan aplikasi, basis data, dan konsep pengembangan perangkat lunak.",
      details: ["Jurusan: Rekayasa Perangkat Lunak", "Lulus: 2020"],
    },
    {
      year: "2014 - 2017",
      degree: "Sekolah Menengah Pertama",
      school: "SMP AT-Taqwa",
      description:
        "Menempuh pendidikan tingkat menengah pertama sebagai dasar pendidikan sebelum melanjutkan ke jenjang kejuruan.",
      details: ["Lulus: 2017"],
    },
  ];

  return (
    <section className="mt-16">
      {/* Header */}
      <header className="px-6 pt-15 pb-2 text-center">
        <h1 className="inline-block border-b-2 border-[#508D4E] pb-2 text-4xl font-bold text-[#1A5319]">
          Pendidikan
        </h1>

        <p className="mx-auto mt-4 max-w-2xl text-[#508D4E]">
          Riwayat pendidikan dan pengalaman belajar yang membentuk dasar
          pengetahuan saya di bidang teknologi dan pengembangan perangkat lunak.
        </p>
      </header>

      {/* Timeline */}
      <main className="mx-auto max-w-4xl">
        <div className="relative border-l-2 border-[#80AF81] pl-8">
          {education.map((item, index) => (
            <article
              key={index}
              className="relative mb-10 rounded-2xl border border-[#80AF81] bg-[#D6EFD8] p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              {/* Timeline Dot */}
              <span className="absolute top-7 -left-[43px] h-5 w-5 rounded-full border-4 border-[#D6EFD8] bg-[#508D4E]" />

              {/* Tahun */}
              <span className="inline-block rounded-full bg-[#80AF81] px-4 py-1 text-sm font-semibold text-[#1A5319]">
                {item.year}
              </span>

              {/* Pendidikan */}
              <h2 className="mt-4 text-2xl font-bold text-[#1A5319]">
                {item.degree}
              </h2>

              <h3 className="mt-1 text-lg font-semibold text-[#508D4E]">
                {item.school}
              </h3>

              <p className="mt-4 leading-7 text-[#508D4E]">
                {item.description}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {item.details?.map((detail) => (
                  <span
                    key={detail}
                    className="rounded-full bg-[#80AF81] px-3 py-1 text-sm font-medium text-[#1A5319]"
                  >
                    {detail}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </main>
    </section>
  );
}
