"use server";

import { revalidatePath } from "next/cache";

import {
  createProjectSchema,
} from "@/app/schemas/project";

export async function createProject(
  data: unknown
) {
  const result =
    createProjectSchema.safeParse(data);

  if (!result.success) {
    return {
      success: false,
      errors: result.error.flatten()
        .fieldErrors,
    };
  }

  const project = {
    id: crypto.randomUUID(),
    name: result.data.name,
    description: result.data.description,
    priority: result.data.priority,
    status: result.data.status,
    progress: 0,
    tasksTotal: 0,
    tasksCompleted: 0,
    members: 1,
    createdAt: new Date()
      .toISOString()
      .split("T")[0],
  };

  console.log("Creating project:", project);

  revalidatePath("/projects");

  return {
    success: true,
    project,
  };
}