"use client";

import Button from "./Button";

export default function Navbar({ onToggleSidebar }) {
  return (
    <nav className="flex items-center justify-between border-b border-slate-200 bg-white px-6 py-4 shadow-sm">
      <div className="flex items-center gap-4">
        <button
          onClick={onToggleSidebar}
          className="rounded-md bg-slate-100 px-3 py-2 text-sm md:hidden"
        >
          ☰
        </button>

        <h1 className="text-xl font-bold text-slate-900">
          Dashboard
        </h1>
      </div>

      <Button variant="secondary">
        Profile
      </Button>
    </nav>
  );
}