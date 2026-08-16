export type ProjectStatus =
  | "active"
  | "completed"
  | "on-hold"
  | "archived";

export type ProjectPriority =
  | "low"
  | "medium"
  | "high";

export interface Project {
  id: string;
  name: string;
  description: string;
  status: ProjectStatus;
  priority: ProjectPriority;
  progress: number;
  tasksTotal: number;
  tasksCompleted: number;
  members: number;
  createdAt: string;
}