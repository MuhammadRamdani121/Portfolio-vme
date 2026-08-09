export default function NavbarItems({ nama, path, active, onClick }) {
  return (
    <a
      href={path}
      onClick={onClick}
      className={`rounded-lg px-4 py-2 transition-all duration-300 ${
        active
          ? "bg-[#508D4E] font-semibold text-white"
          : "text-[#D6EFD8] hover:bg-[#508D4E]/30 hover:text-white"
      } `}
    >
      {nama}
    </a>
  );
}
