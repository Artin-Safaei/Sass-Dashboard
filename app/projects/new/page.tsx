import AppShell from "@/app/components/layout/AppShell";
import CreateProjectForm from "@/app/components/projects/CreateProjectForm";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NewProjectPage() {
  return (
    <AppShell>
      <div className="mx-auto max-w-3xl">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-sm text-zinc-500 transition hover:text-white"
        >
          <ArrowLeft size={16} />
          Back to projects
        </Link>

        <div className="mt-6 rounded-xl border border-[var(--border)] bg-[var(--card)]">
          <div className="border-b border-zinc-800 p-6">
            <h1 className="text-xl font-semibold">
              Create Project
            </h1>

            <p className="mt-1 text-sm text-zinc-500">
              Create a new project for your workspace.
            </p>
          </div>

          <div className="p-6">
            <CreateProjectForm />
          </div>
        </div>
      </div>
    </AppShell>
  );
}