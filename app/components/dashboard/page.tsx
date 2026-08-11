import {
  CheckCircle2,
  FolderKanban,
  ListTodo,
  Users,
} from "lucide-react";

import AppShell from "@/app/components/layout/AppShell";
import StatsCard from "@/app/components/dashboard/StatsCard";
import ProjectProgress from "@/app/components/dashboard/ProjectProgress";
import RecentActivity from "@/app/components/dashboard/RecentActivity";
import RecentProjects from "@/app/components/dashboard/RecentProjects";
import TasksOverview from "@/app/components/dashboard/TasksOverview";

export default function DashboardPage() {
  return (
    <AppShell>
      <div className="mx-auto max-w-7xl space-y-6">
        {/* Header */}
        <section>
          <p className="text-sm text-zinc-500">
            Tuesday, August 11
          </p>

          <h1 className="mt-1 text-2xl font-semibold tracking-tight">
            Good afternoon, Artin 👋
          </h1>

          <p className="mt-2 text-sm text-zinc-500">
            Here&apos;s what&apos;s happening with your
            projects today.
          </p>
        </section>

        {/* Stats */}
        <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          <StatsCard
            title="Total Projects"
            value="12"
            change="+12.5%"
            trend="up"
            icon={FolderKanban}
          />

          <StatsCard
            title="Active Tasks"
            value="38"
            change="+8.2%"
            trend="up"
            icon={ListTodo}
          />

          <StatsCard
            title="Completed Tasks"
            value="124"
            change="+18.4%"
            trend="up"
            icon={CheckCircle2}
          />

          <StatsCard
            title="Team Members"
            value="8"
            change="+2"
            trend="up"
            icon={Users}
          />
        </section>

        {/* Analytics */}
        <section className="grid gap-6 lg:grid-cols-[1.5fr_1fr]">
          <ProjectProgress />

          <RecentActivity />
        </section>

        {/* Projects */}
        <section>
          <RecentProjects />
        </section>

        {/* Tasks */}
        <section>
          <TasksOverview />
        </section>
      </div>
    </AppShell>
  );
}