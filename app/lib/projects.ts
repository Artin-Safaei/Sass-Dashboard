import type { Project } from "@/app/types/index";

export const projects: Project[] = [
  {
    id: "devflow",
    name: "DevFlow",
    description:
      "A modern project management platform for development teams.",
    status: "active",
    priority: "high",
    progress: 78,
    tasksTotal: 31,
    tasksCompleted: 24,
    members: 5,
    createdAt: "2026-08-01",
  },
  {
    id: "ecommerce",
    name: "E-commerce Platform",
    description:
      "A scalable online shopping platform.",
    status: "active",
    priority: "high",
    progress: 64,
    tasksTotal: 28,
    tasksCompleted: 18,
    members: 4,
    createdAt: "2026-07-24",
  },
  {
    id: "mobile-app",
    name: "Mobile Application",
    description:
      "Fitness tracking mobile application.",
    status: "on-hold",
    priority: "medium",
    progress: 42,
    tasksTotal: 26,
    tasksCompleted: 11,
    members: 3,
    createdAt: "2026-07-18",
  },
  {
    id: "marketing",
    name: "Marketing Website",
    description:
      "Company marketing and landing page.",
    status: "completed",
    priority: "low",
    progress: 100,
    tasksTotal: 18,
    tasksCompleted: 18,
    members: 2,
    createdAt: "2026-07-10",
  },
];