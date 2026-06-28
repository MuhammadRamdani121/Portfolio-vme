export default function DropdownNavbar({ nama, children }) {
  return (
    <div className="group relative">
      <button className="px-3 py-2">{nama}▼</button>

      <div className="minw-40 group-hover:f;ex absolute top-full left-0 hidden flex-col rounded bg-white py-2 shadow-md">
        {children}
      </div>
    </div>
  );
}
