import { useState } from "react";

export default function DropdownNavbar({ nama, children, mobile = false }) {
  const [open, setOpen] = useState(false);

  if (mobile) {
    return (
      <div>
        <button
          onClick={() => setOpen(!open)}
          className="flex w-full items-center justify-between px-4 py-2"
        >
          {nama}

          <span
            className={`inline-block transition-transform duration-200 ${
              open ? "rotate-90" : ""
            }`}
          >
            ➤
          </span>
        </button>

        {open && <div className="ml-4 flex flex-col">{children}</div>}
      </div>
    );
  }

  return (
    <div className="group relative">
      <button className="hover:bg-text-white flex items-center gap-1 py-2 text-[#D6EFD8] transition">
        {nama}

        <span className="inline-block transition-transform duration-200 group-hover:rotate-90">
          ➤
        </span>
      </button>

      <div className="absolute top-full left-0 hidden min-w-44 flex-col rounded-lg border bg-white py-2 text-black shadow-lg group-hover:flex">
        {children}
      </div>
    </div>
  );
}
