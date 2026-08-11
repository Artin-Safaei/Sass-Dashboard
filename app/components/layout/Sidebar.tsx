"use client";

import Link from "next/link";
import {
  BarChart3,
  CheckSquare,
  FolderKanban,
  LayoutDashboard,
  Settings,
  Users,
  X,
} from "lucide-react";

interface SidebarProps {
  open: boolean;
  onClose: () => void;
}

const navigation = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Projects",
    href: "/projects",
    icon: FolderKanban,
  },
  {
    title: "Tasks",
    href: "/tasks",
    icon: CheckSquare,
  },
  {
    title: "Team",
    href: "/team",
    icon: Users,
  },
  {
    title: "Analytics",
    href: "/analytics",
    icon: BarChart3,
  },
];

export default function Sidebar({
  open,
  onClose,
}: SidebarProps) {
  return (
    <>
      {open && (
        <div
          onClick={onClose}
          className="fixed inset-0 z-40 bg-black/60 lg:hidden"
        />
      )}

      <aside
        className={`
          fixed inset-y-0 left-0 z-50
          flex w-64 flex-col
          border-r border-[var(--border)]
          bg-[var(--card)]
          transition-transform duration-300
          lg:translate-x-0
          ${open ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        <div className="flex h-16 items-center justify-between border-b border-[var(--border)] px-5">
          <Link
            href="/dashboard"
            className="flex items-center gap-3"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[var(--primary)]">
              <span className="font-bold text-white">
                D
              </span>
            </div>

            <span className="text-lg font-semibold">
              DevFlow
            </span>
          </Link>

          <button
            onClick={onClose}
            className="rounded-lg p-2 text-zinc-400 hover:bg-zinc-800 hover:text-white lg:hidden"
          >
            <X size={18} />
          </button>
        </div>

        <nav className="flex-1 space-y-1 p-4">
          <p className="mb-3 px-3 text-xs font-medium uppercase tracking-wider text-zinc-500">
            Workspace
          </p>

          {navigation.map((item) => {
            const Icon = item.icon;

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={onClose}
                className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-zinc-400 transition hover:bg-zinc-800 hover:text-white"
              >
                <Icon size={18} />

                <span>{item.title}</span>
              </Link>
            );
          })}

          <div className="my-5 border-t border-[var(--border)]" />

          <Link
            href="/settings"
            onClick={onClose}
            className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-zinc-400 transition hover:bg-zinc-800 hover:text-white"
          >
            <Settings size={18} />

            <span>Settings</span>
          </Link>
        </nav>

        <div className="border-t border-[var(--border)] p-4">
          <div className="flex items-center gap-3 rounded-xl bg-zinc-900 p-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-zinc-700 text-sm font-medium">
              AS
            </div>

            <div className="min-w-0">
              <p className="truncate text-sm font-medium">
                Artin Safaei
              </p>

              <p className="truncate text-xs text-zinc-500">
                Developer
              </p>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}