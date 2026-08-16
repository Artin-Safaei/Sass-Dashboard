import EmptyState from "@/app/components/ui/EmptyState";
import type { Project } from "@/app/types";
import ProjectCard from "./ProjectCard";

interface ProjectListProps {
  projects: Project[];
}

export default function ProjectList({
  projects,
}: ProjectListProps) {
  if (projects.length === 0) {
    return (
      <EmptyState
        title="No projects found"
        description="Try changing your search or filters."
      />
    );
  }

  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          project={project}
        />
      ))}
    </div>
  );
}