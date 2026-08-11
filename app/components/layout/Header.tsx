"use client";

import {
  Bell,
  Menu,
  Search,
} from "lucide-react";

interface HeaderProps {
  onMenuClick: () => void;
}

export default function Header({
  onMenuClick,
}: HeaderProps) {
  return (
    <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b border-[var(--border)] bg-[var(--background)]/90 px-4 backdrop-blur md:px-6">
      <div className="flex items-center gap-3">
        <button
          onClick={onMenuClick}
          className="rounded-lg p-2 text-zinc-400 hover:bg-zinc-800 hover:text-white lg:hidden"
        >
          <Menu size={20} />
        </button>

        <div className="relative hidden md:block">
          <Search
            size={17}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500"
          />

          <input
            type="text"
            placeholder="Search anything..."
            className="h-9 w-72 rounded-lg border border-[var(--border)] bg-zinc-900 pl-10 pr-4 text-sm text-white outline-none placeholder:text-zinc-600 focus:border-zinc-500"
          />

          <kbd className="absolute right-2 top-1/2 -translate-y-1/2 rounded border border-zinc-700 px-1.5 py-0.5 text-[10px] text-zinc-500">
            ⌘ K
          </kbd>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <button className="relative rounded-lg p-2.5 text-zinc-400 transition hover:bg-zinc-800 hover:text-white">
          <Bell size={19} />

          <span className="absolute right-2 top-2 h-1.5 w-1.5 rounded-full bg-indigo-500" />
        </button>

        <div className="ml-2 hidden h-7 w-px bg-zinc-800 sm:block" />

        <button className="flex items-center gap-2 rounded-lg p-1.5 transition hover:bg-zinc-800">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-500 text-xs font-semibold text-white">
            AS
          </div>

          <span className="hidden text-sm text-zinc-300 sm:block">
            Artin
          </span>
        </button>
      </div>
    </header>
  );
}