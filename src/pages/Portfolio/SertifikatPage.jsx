import Sertifikat from "../../component/Sertifikat/Sertifikat";

export default function SertifikatPage() {
  return (
    <>
      <header className="mb-10 border-b border-[#80AF81] pb-6">
        <h1 className="text-4xl font-bold text-[#1A5319]">Sertifikat</h1>

        <p className="mt-3 max-w-2xl text-[#508D4E]">
          Sertifikat yang saya peroleh dari bootcamp, pelatihan, dan proses
          pembelajaran sebagai bentuk pengembangan kompetensi.
        </p>
      </header>

      <Sertifikat portfolio />
    </>
  );
}
