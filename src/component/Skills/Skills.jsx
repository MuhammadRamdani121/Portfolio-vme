const skillCategories = [
  {
    title: "Front-End",
    icon: "🎨",
    skills: ["HTML", "CSS", "JavaScript", "React.js", "Tailwind CSS"],
  },
  {
    title: "Back-End",
    icon: "⚙️",
    skills: ["PHP", "Laravel", "Node.js", "Express.js"],
  },
  {
    title: "Database",
    icon: "🗄️",
    skills: ["MySQL", "Microsoft SQL Server"],
  },
  {
    title: "Tools & Others",
    icon: "🛠️",
    skills: ["Git", "GitHub", "Vite", "React Router"],
  },
];

export default function Skills() {
  return (
    <section className="px-6 py-20">
      {/* Header */}
      <header className="mb-12 text-center">
        <h1 className="inline-block border-b-2 border-[#508D4E] pb-2 text-4xl font-bold text-[#1A5319]">
          Skills
        </h1>

        <p className="mx-auto mt-4 max-w-2xl text-[#508D4E]">
          Teknologi dan tools yang saya gunakan dalam proses belajar dan
          pengembangan project.
        </p>
      </header>

      {/* Skill Cards */}
      <main className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-2">
        {skillCategories.map((category) => (
          <article
            key={category.title}
            className="rounded-3xl border border-[#80AF81] bg-[#D6EFD8] p-7 transition duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            {/* Category */}
            <header className="mb-6 flex items-center gap-3">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#80AF81] text-2xl">
                {category.icon}
              </span>

              <h2 className="text-2xl font-bold text-[#1A5319]">
                {category.title}
              </h2>
            </header>

            {/* Skills */}
            <nav className="flex flex-wrap gap-3">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-[#508D4E] bg-[#D6EFD8] px-4 py-2 text-sm font-medium text-[#1A5319] transition duration-300 hover:bg-[#508D4E] hover:text-white"
                >
                  {skill}
                </span>
              ))}
            </nav>
          </article>
        ))}
      </main>
    </section>
  );
}
