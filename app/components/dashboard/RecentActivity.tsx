import {
  CheckCircle2,
  FolderPlus,
  UserPlus,
} from "lucide-react";

const activities = [
  {
    icon: FolderPlus,
    title: "New project created",
    description: "E-commerce Platform",
    time: "12 min ago",
  },
  {
    icon: CheckCircle2,
    title: "Task completed",
    description: "Build authentication system",
    time: "34 min ago",
  },
  {
    icon: UserPlus,
    title: "New team member",
    description: "Sarah joined the workspace", 
    time: "1 hour ago",
  },
  {
    icon: CheckCircle2,
    title: "Task completed",
    description: "Create responsive navigation",
    time: "2 hours ago",
  },
];

export default function RecentActivity() {
  return (
    <div className="rounded-xl border border-[var(--border)] bg-[var(--card)] p-5">
      <div className="mb-6">
        <h2 className="font-semibold">
          Recent Activity
        </h2>

        <p className="mt-1 text-xs text-zinc-500">
          Latest workspace activity
        </p>
      </div>

      <div className="space-y-5">
        {activities.map((activity, index) => {
          const Icon = activity.icon;

          return (
            <div
              key={index}
              className="flex gap-3"
            >
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-zinc-800 text-zinc-400">
                <Icon size={15} />
              </div>

              <div className="min-w-0 flex-1">
                <p className="text-sm text-zinc-300">
                  {activity.title}
                </p>

                <p className="mt-0.5 truncate text-xs text-zinc-500">
                  {activity.description}
                </p>
              </div>

              <span className="shrink-0 text-[11px] text-zinc-600">
                {activity.time}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}