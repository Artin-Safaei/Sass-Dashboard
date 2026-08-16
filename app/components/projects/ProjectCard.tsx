import Link from "next/link";
import {
  ArrowUpRight,
  CheckCircle2,
  Users,
} from "lucide-react";

import type { Project } from "@/app/types";
import Badge from "@/app/components/ui/Badge";
import Progress from "@/app/components/ui/Progress";

interface ProjectCardProps {
  project: Project;
}

function getStatusVariant(
  status: Project["status"]
) {
  switch (status) {
    case "active":
      return "success" as const;

    case "completed":
      return "info" as const;

    case "on-hold":
      return "warning" as const;

    case "archived":
      return "default" as const;
  }
}

function getPriorityVariant(
  priority: Project["priority"]
) {
  switch (priority) {
    case "high":
      return "danger" as const;

    case "medium":
      return "warning" as const;

    case "low":
      return "default" as const;
  }
}

export default function ProjectCard({
  project,
}: ProjectCardProps) {
  return (
    <div className="group rounded-xl border border-[var(--border)] bg-[var(--card)] p-5 transition hover:border-zinc-700">
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0">
          <h2 className="truncate font-medium text-zinc-100">
            {project.name}
          </h2>

          <p className="mt-1 line-clamp-2 text-sm leading-6 text-zinc-500">
            {project.description}
          </p>
        </div>

        <Link
          href={`/projects/${project.id}`}
          className="rounded-lg p-2 text-zinc-600 transition hover:bg-zinc-800 hover:text-white"
          aria-label={`Open ${project.name}`}
        >
          <ArrowUpRight size={18} />
        </Link>
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        <Badge variant={getStatusVariant(project.status)}>
          {project.status}
        </Badge>

        <Badge variant={getPriorityVariant(project.priority)}>
          {project.priority} priority
        </Badge>
      </div>

      <div className="mt-6">
        <div className="mb-2 flex items-center justify-between">
          <span className="text-xs text-zinc-500">
            Progress
          </span>

          <span className="text-xs font-medium text-zinc-300">
            {project.progress}%
          </span>
        </div>

        <Progress value={project.progress} />
      </div>

      <div className="mt-5 flex items-center justify-between border-t border-zinc-800 pt-4">
        <div className="flex items-center gap-1.5 text-xs text-zinc-500">
          <CheckCircle2 size={14} />

          <span>
            {project.tasksCompleted}/
            {project.tasksTotal} tasks
          </span>
        </div>

        <div className="flex items-center gap-1.5 text-xs text-zinc-500">
          <Users size={14} />

          <span>
            {project.members} members
          </span>
        </div>
      </div>
    </div>
  );
}