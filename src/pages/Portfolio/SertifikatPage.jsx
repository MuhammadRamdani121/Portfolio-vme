import Sertifikat from "../../component/Sertifikat/Sertifikat";

export default function SertifikatPage() {
  return (
    <>
      <header className="mb-10 border-b border-gray-200 pb-6">
        <h1 className="text-4xl font-bold text-gray-900">Sertifikat</h1>

        <p className="mt-3 max-w-2xl text-gray-500">
          Sertifikat yang saya peroleh dari bootcamp, pelatihan, dan proses
          pembelajaran sebagai bentuk pengembangan kompetensi.
        </p>
      </header>

      <Sertifikat portfolio />
    </>
  );
}
