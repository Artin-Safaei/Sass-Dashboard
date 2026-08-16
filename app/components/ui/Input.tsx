import {
  InputHTMLAttributes,
} from "react";

import { cn } from "@/app/lib/utils";

interface InputProps 
    extends InputHTMLAttributes<HTMLInputElement> {}

export default function Input({
  className,
  ...props
}: InputProps) {
  return (
    <input
      className={cn(
        "h-10 w-full rounded-lg border border-zinc-800 bg-zinc-900 px-3 text-sm text-white outline-none transition",
        "placeholder:text-zinc-600",
        "focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/10",
        "disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    />
  );
}