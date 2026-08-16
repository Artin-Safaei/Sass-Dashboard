import { cn } from "@/app/lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export default function Card({
  children,
  className,
}: CardProps) {
  return (
    <div
      className={cn(
        "rounded-xl border border-[var(--border)] bg-[var(--card)]",
        className
      )}
    >
      {children}
    </div>
  );
}