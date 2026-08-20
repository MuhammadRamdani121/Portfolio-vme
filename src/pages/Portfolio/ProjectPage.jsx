import Project from "../../component/Project/Project";

export default function ProjectPage() {
  return (
    <>
      <header className="mb-10 border-b border-[#80AF81] pb-6">
        <h1 className="text-4xl font-bold text-[#1A5319]">Project</h1>

        <p className="mt-3 max-w-2xl text-[#508D4E]">
          Beberapa project yang saya kerjakan untuk mengasah kemampuan Front
          End, Back End, dan pengembangan aplikasi secara keseluruhan.
        </p>
      </header>

      <Project portfolio portfolio={false} />
    </>
  );
}
