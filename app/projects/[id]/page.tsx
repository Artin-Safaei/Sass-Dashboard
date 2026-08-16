import { notFound } from "next/navigation";
import Link from "next/link";
import {
  ArrowLeft,
  CheckCircle2,
  Users,
} from "lucide-react";

import AppShell from "@/app/components/layout/AppShell";
import Badge from "@/app/components/ui/Badge";
import Progress from "@/app/components/ui/Progress";
import Button from "@/app/components/ui/Button";
import { projects } from "@/app/lib/projects";
import { getProjectById } from "@/app/services/projects";

interface ProjectDetailsPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function ProjectDetailsPage({
  params,
}: ProjectDetailsPageProps) {
  const { id } = await params;

  const project = projects.find(
    (project) => project.id === id
  );
// const project = await getProjectById(id);

  if (!project) {
    notFound();
  }

  return (
    <AppShell>
      <div className="mx-auto max-w-5xl space-y-6">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-sm text-zinc-500 transition hover:text-white"
        >
          <ArrowLeft size={16} />
          Back to projects
        </Link>

        <div className="rounded-xl border border-[var(--border)] bg-[var(--card)] p-6">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-start">
            <div>
              <div className="mb-3 flex flex-wrap gap-2">
                <Badge variant="success">
                  {project.status}
                </Badge>

                <Badge variant="danger">
                  {project.priority} priority
                </Badge>
              </div>

              <h1 className="text-2xl font-semibold">
                {project.name}
              </h1>

              <p className="mt-2 max-w-2xl text-sm leading-6 text-zinc-500">
                {project.description}
              </p>
            </div>

            <Button>
              Edit Project
            </Button>
          </div>

          <div className="mt-8">
            <div className="mb-3 flex items-center justify-between">
              <span className="text-sm text-zinc-400">
                Project progress
              </span>

              <span className="text-sm font-medium">
                {project.progress}%
              </span>
            </div>

            <Progress value={project.progress} />
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <div className="rounded-lg bg-zinc-900 p-4">
              <div className="flex items-center gap-2 text-zinc-500">
                <CheckCircle2 size={16} />

                <span className="text-xs">
                  Tasks
                </span>
              </div>

              <p className="mt-2 text-xl font-semibold">
                {project.tasksCompleted}/
                {project.tasksTotal}
              </p>
            </div>

            <div className="rounded-lg bg-zinc-900 p-4">
              <div className="flex items-center gap-2 text-zinc-500">
                <Users size={16} />

                <span className="text-xs">
                  Members
                </span>
              </div>

              <p className="mt-2 text-xl font-semibold">
                {project.members}
              </p>
            </div>

            <div className="rounded-lg bg-zinc-900 p-4">
              <p className="text-xs text-zinc-500">
                Created
              </p>

              <p className="mt-2 text-xl font-semibold">
                {project.createdAt}
              </p>
            </div>
          </div>
        </div>
      </div>
    </AppShell>
  );
}