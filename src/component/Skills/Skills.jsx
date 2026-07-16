export default function Skills() {
  return (
    <>
      <main className="mx-auto max-w-6xl px-5 py-16">
        <header className="mb-12 flex justify-center">
          <h1 className="border-b-2 border-gray-500 pb-3 text-center text-4xl font-bold">
            Skills
          </h1>
        </header>

        {/* Front End */}
        <section className="mb-8 rounded-2xl border border-gray-200 bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-gray-500 hover:shadow-xl">
          <h1 className="mb-5 text-2xl font-bold text-gray-800">
            💻 Front End
          </h1>

          <div className="flex flex-wrap gap-3">
            <p className="rounded-full bg-orange-100 px-4 py-2 font-medium text-orange-700">
              HTML5
            </p>
            <p className="rounded-full bg-gray-100 px-4 py-2 font-medium text-gray-700">
              CSS3
            </p>
            <p className="rounded-full bg-sky-100 px-4 py-2 font-medium text-sky-700">
              Tailwind CSS
            </p>
            <p className="rounded-full bg-cyan-100 px-4 py-2 font-medium text-cyan-700">
              React.js
            </p>
            <p className="rounded-full bg-yellow-100 px-4 py-2 font-medium text-yellow-700">
              JavaScript
            </p>
          </div>
        </section>

        {/* Back End */}
        <section className="mb-8 rounded-2xl border border-gray-200 bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-gray-500 hover:shadow-xl">
          <h1 className="mb-5 text-2xl font-bold text-gray-800">⚙️ Back End</h1>

          <div className="flex flex-wrap gap-3">
            <p className="rounded-full bg-indigo-100 px-4 py-2 font-medium text-indigo-700">
              PHP
            </p>
            <p className="rounded-full bg-red-100 px-4 py-2 font-medium text-red-700">
              Laravel
            </p>
            <p className="rounded-full bg-green-100 px-4 py-2 font-medium text-green-700">
              Node.js
            </p>
            <p className="rounded-full bg-gray-100 px-4 py-2 font-medium text-gray-700">
              Express.js
            </p>
          </div>
        </section>

        {/* Database */}
        <section className="mb-8 rounded-2xl border border-gray-200 bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-gray-500 hover:shadow-xl">
          <h1 className="mb-5 text-2xl font-bold text-gray-800">🗄️ Database</h1>

          <div className="flex flex-wrap gap-3">
            <p className="rounded-full bg-gray-100 px-4 py-2 font-medium text-gray-700">
              MySQL
            </p>
            <p className="rounded-full bg-purple-100 px-4 py-2 font-medium text-purple-700">
              Microsoft SQL Server
            </p>
          </div>
        </section>

        {/* Tools */}
        <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-gray-500 hover:shadow-xl">
          <h1 className="mb-5 text-2xl font-bold text-gray-800">🛠️ Tools</h1>

          <div className="flex flex-wrap gap-3">
            <p className="rounded-full bg-gray-100 px-4 py-2 font-medium text-gray-700">
              Git
            </p>
            <p className="rounded-full bg-black px-4 py-2 font-medium text-white">
              GitHub
            </p>
            <p className="rounded-full bg-gray-100 px-4 py-2 font-medium text-gray-700">
              VS Code
            </p>
            <p className="rounded-full bg-green-100 px-4 py-2 font-medium text-green-700">
              Microsoft Excel
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
