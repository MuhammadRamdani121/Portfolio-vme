export default function DropdownNavbar({ nama, children }) {
  return (
    <div className="group relative">
      <button className="flex items-center gap-1 px-3 py-2">
        {nama}
        <span className="inline-block text-black transition-transform duration-200 group-hover:rotate-90">
          ➤
        </span>
      </button>

      <div className="absolute top-full left-0 hidden min-w-40 flex-col rounded bg-white py-2 shadow-md group-hover:flex">
        {children}
      </div>
    </div>
  );
}
