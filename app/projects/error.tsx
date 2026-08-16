"use client";

import { useEffect } from "react";
import Button from "@/app/components/ui/Button";

interface ErrorPageProps {
  error: Error & {
    digest?: string;
  };
  reset: () => void;
}

export default function ErrorPage({
  error,
  reset,
}: ErrorPageProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center text-center">
      <h2 className="text-xl font-semibold">
        Something went wrong
      </h2>

      <p className="mt-2 max-w-md text-sm text-zinc-500">
        We couldn&apos;t load the projects.
        Please try again.
      </p>

      <div className="mt-5">
        <Button onClick={() => reset()}>
          Try again
        </Button>
      </div>
    </div>
  );
}