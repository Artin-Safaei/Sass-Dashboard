export default function Loading() {
  return (
    <div className="space-y-6">
      <div className="h-8 w-48 animate-pulse rounded-lg bg-zinc-800" />

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {Array.from({ length: 6 }).map((_, index) => (
          <div
            key={index}
            className="h-64 animate-pulse rounded-xl border border-zinc-800 bg-zinc-900"
          />
        ))}
      </div>
    </div>
  );
}