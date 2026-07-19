import Project from "../../component/Project/Project";

export default function ProjectPage() {
  return (
    <>
      <header className="mb-10 border-b border-gray-200 pb-6">
        <h1 className="text-4xl font-bold text-gray-900">Project</h1>

        <p className="mt-3 max-w-2xl text-gray-500">
          Beberapa project yang saya kerjakan untuk mengasah kemampuan Front
          End, Back End, dan pengembangan aplikasi secara keseluruhan.
        </p>
      </header>

      <Project portfolio />
    </>
  );
}
