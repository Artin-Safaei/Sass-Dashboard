import { cn } from "@/app/lib/utils";

type BadgeVariant =
  | "default"
  | "success"
  | "warning"
  | "danger"
  | "info";

interface BadgeProps {
  children: React.ReactNode;
  variant?: BadgeVariant;
  className?: string;
}

const variants: Record<BadgeVariant, string> = {
  default:
    "bg-zinc-800 text-zinc-300",

  success:
    "bg-emerald-500/10 text-emerald-400",

  warning:
    "bg-amber-500/10 text-amber-400",

  danger:
    "bg-red-500/10 text-red-400",

  info:
    "bg-indigo-500/10 text-indigo-400",
};

export default function Badge({
  children,
  variant = "default",
  className,
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-md px-2 py-1 text-xs font-medium",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}