import { cn } from "@/app/lib/utils";

interface AvatarProps {
  name: string;
  src?: string;
  size?: "sm" | "md" | "lg";
}

const sizes = {
  sm: "h-7 w-7 text-[10px]",
  md: "h-9 w-9 text-xs",
  lg: "h-12 w-12 text-sm",
};

function getInitials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export default function Avatar({
  name,
  src,
  size = "md",
}: AvatarProps) {
  return (
    <div
      className={cn(
        "flex shrink-0 items-center justify-center overflow-hidden rounded-full bg-indigo-500 font-medium text-white",
        sizes[size]
      )}
    >
      {src ? (
        <img
          src={src}
          alt={name}
          className="h-full w-full object-cover"
        />
      ) : (
        getInitials(name)
      )}
    </div>
  );
}