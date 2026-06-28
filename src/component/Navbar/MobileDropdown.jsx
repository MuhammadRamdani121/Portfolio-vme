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
        <span>{open ? "▲" : "▼"}</span>
      </button>
    </div>
  );
}
