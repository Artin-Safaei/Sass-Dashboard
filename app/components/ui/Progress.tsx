import { cn } from "@/app/lib/utils";

interface ProgressProps {
  value: number;
  className?: string;
  indicatorClassName?: string;
}

export default function Progress({
  value,
  className,
  indicatorClassName,
}: ProgressProps) {
  const safeValue = Math.min(
    100,
    Math.max(0, value)
  );

  return (
    <div
      className={cn(
        "h-2 w-full overflow-hidden rounded-full bg-zinc-800",
        className
      )}
    >
      <div
        className={cn(
          "h-full rounded-full bg-indigo-500 transition-all duration-500",
          indicatorClassName
        )}
        style={{
          width: `${safeValue}%`,
        }}
      />
    </div>
  );
}