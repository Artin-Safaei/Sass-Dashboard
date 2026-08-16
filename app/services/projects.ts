import { projects } from "@/app/lib/projects";

export async function getProjects() {
  return projects;
}

export async function getProjectById(
  id: string
) {
  return projects.find(
    (project) => project.id === id
  );
}