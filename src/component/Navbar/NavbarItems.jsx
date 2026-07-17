export default function NavbarItems({ nama, path, active, onClick }) {
  return (
    <a
      href={path}
      onClick={onClick}
      className={`block rounded-lg px-4 py-3 transition ${
        active
          ? "font-semibold text-blue-500"
          : "text-gray-700 hover:text-blue-500"
      }`}
    >
      {nama}
    </a>
  );
}
