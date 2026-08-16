import { cn } from "@/app/lib/utils";
import type { ButtonHTMLAttributes } from "react";

type ButtonVariant =
  | "primary"
  | "secondary"
  | "outline"
  | "ghost"
  | "danger";

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
}

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-indigo-500 text-white hover:bg-indigo-400",

  secondary:
    "bg-zinc-800 text-zinc-100 hover:bg-zinc-700",

  outline:
    "border border-zinc-700 bg-transparent text-zinc-200 hover:bg-zinc-800",

  ghost:
    "bg-transparent text-zinc-400 hover:bg-zinc-800 hover:text-white",

  danger:
    "bg-red-500/10 text-red-400 hover:bg-red-500/20",
};

export default function Button({
  variant = "primary",
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition-colors",
        "disabled:pointer-events-none disabled:opacity-50",
        variants[variant],
        className
      )}
      {...props}
    />
  );
}