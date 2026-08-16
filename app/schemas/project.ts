import { z } from "zod";

export const createProjectSchema = z.object({
  name: z
    .string()
    .trim()
    .min(3, "Project name must be at least 3 characters.")
    .max(50, "Project name must be less than 50 characters."),

  description: z
    .string()
    .trim()
    .min(10, "Description must be at least 10 characters.")
    .max(300, "Description must be less than 300 characters."),

  priority: z.enum(["low", "medium", "high"]),

  status: z.enum([
    "active",
    "on-hold",
    "completed",
    "archived",
  ]),
});

export type CreateProjectInput = z.infer<
  typeof createProjectSchema
>;