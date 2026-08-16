"use client";

import { Search, SlidersHorizontal } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import {
  useCallback,
  useEffect,
  useState,
} from "react";
import Button from "@/app/components/ui/Button";
import Input from "@/app/components/ui/Input";

export default function ProjectFilters() {
 
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();


   const [search, setSearch] = useState(
  searchParams.get("search") ?? ""
);

  const updateParam = useCallback(
    (key: string, value: string) => {
      const params = new URLSearchParams(
        searchParams.toString()
      );

      if (value) {
        params.set(key, value);
      } else {
        params.delete(key);
      }

      router.push(
        `${pathname}?${params.toString()}`
      );
    },
    [pathname, router, searchParams]
  );

  const clearFilters = () => {
    router.push(pathname);
  };
useEffect(() => {
  const timer = setTimeout(() => {
    updateParam("search", search);
  }, 300);

  return () => {
    clearTimeout(timer);
  };
}, [search, updateParam]);
  return (
    <div className="rounded-xl border border-[var(--border)] bg-[var(--card)] p-4">
      <div className="flex flex-col gap-3 lg:flex-row">
        <div className="relative flex-1">
          <Search
            size={17}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500"
          />

          <Input
  placeholder="Search projects..."
  value={search}
  className="pl-10"
  onChange={(event) => {
    setSearch(event.target.value);
  }}
/>
        </div>

        <div className="flex flex-wrap gap-2">
          <select
            value={searchParams.get("status") ?? ""}
            onChange={(event) =>
              updateParam(
                "status",
                event.target.value
              )
            }
            className="h-10 rounded-lg border border-zinc-800 bg-zinc-900 px-3 text-sm text-zinc-300 outline-none focus:border-indigo-500"
          >
            <option value="">All statuses</option>
            <option value="active">Active</option>
            <option value="completed">
              Completed
            </option>
            <option value="on-hold">On Hold</option>
            <option value="archived">Archived</option>
          </select>

          <select
            value={searchParams.get("priority") ?? ""}
            onChange={(event) =>
              updateParam(
                "priority",
                event.target.value
              )
            }
            className="h-10 rounded-lg border border-zinc-800 bg-zinc-900 px-3 text-sm text-zinc-300 outline-none focus:border-indigo-500"
          >
            <option value="">All priorities</option>
            <option value="high">High</option>
            <option value="medium">Medium</option>
            <option value="low">Low</option>
          </select>

          <Button
            variant="ghost"
            onClick={clearFilters}
          >
            <SlidersHorizontal size={16} />
            Clear
          </Button>
        </div>
      </div>
    </div>
  );
}