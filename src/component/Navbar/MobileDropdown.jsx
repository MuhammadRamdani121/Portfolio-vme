import { useState } from "react";

export default function MobileDropdown({ nama, children }) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full justify-between py-2"
      >
        {nama}
        <span
          className={`inline-block transition-transform duration-200 ${
            open && "rotate-90"
          }`}
        >
          ➤
        </span>
      </button>
      {open && <div className="ml-4 flex flex-col">{children}</div>}
    </div>
  );
}
