import AppShell from "@/app/components/layout/AppShell";
import Button from "@/app/components/ui/Button";
import ProjectList from "@/app/components/projects/ProjectList";
import ProjectFilters from "@/app/components/projects/ProjectFilters";
import { projects } from "@/app/lib/projects";
import type { Project } from "@/app/types";
import { Plus } from "lucide-react";
import Link from "next/link";
import { getProjectById, getProjects } from "../services/projects";

interface ProjectsPageProps {
  searchParams: Promise<{
    search?: string;
    status?: string;
    priority?: string;
  }>;
}

export default async function ProjectsPage({
  searchParams,
}: ProjectsPageProps) {
  const params = await searchParams;

  const search = params.search?.toLowerCase() ?? "";
  const status = params.status;
  const priority = params.priority;
const projects = await getProjects();
  const filteredProjects = projects.filter((project) => {
    const matchesSearch =
      !search ||
      project.name.toLowerCase().includes(search) ||
      project.description.toLowerCase().includes(search);

    const matchesStatus = !status || project.status === status;

    const matchesPriority = !priority || project.priority === priority;

    return matchesSearch && matchesStatus && matchesPriority;
  });

  return (
    <AppShell>
      <div className="mx-auto max-w-7xl space-y-6">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <p className="text-sm text-zinc-500">Workspace</p>

            <h1 className="mt-1 text-2xl font-semibold">Projects</h1>

            <p className="mt-2 text-sm text-zinc-500">
              Manage and track all your projects.
            </p>
            <p className="text-sm text-zinc-500">
              {filteredProjects.length} projects found
            </p>
          </div>

          <Link href="/projects/new">
            <Button>
              <Plus size={17} />
              Create Project
            </Button>
          </Link>
        </div>

        <ProjectFilters />

        <ProjectList projects={filteredProjects} />
      </div>
    </AppShell>
  );
}
