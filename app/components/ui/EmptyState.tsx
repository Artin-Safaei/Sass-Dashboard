import {
  FolderOpen,
} from "lucide-react";

import { cn } from "@/app/lib/utils";

interface EmptyStateProps {
  title: string;
  description?: string;
  className?: string;
  action?: React.ReactNode;
}

export default function EmptyState({
  title,
  description,
  className,
  action,
}: EmptyStateProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center rounded-xl border border-dashed border-zinc-800 px-6 py-12 text-center",
        className
      )}
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-zinc-900 text-zinc-500">
        <FolderOpen size={22} />
      </div>

      <h3 className="mt-4 text-sm font-medium text-zinc-200">
        {title}
      </h3>

      {description && (
        <p className="mt-2 max-w-sm text-xs leading-5 text-zinc-500">
          {description}
        </p>
      )}

      {action && (
        <div className="mt-5">
          {action}
        </div>
      )}
    </div>
  );
}