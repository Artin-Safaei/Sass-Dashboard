const tasks = [
  {
    title: "Authentication system",
    project: "DevFlow",
    priority: "High",
    status: "In Progress",
  },
  {
    title: "Dashboard responsive layout",
    project: "DevFlow",
    priority: "Medium",
    status: "In Progress",
  },
  {
    title: "API integration",
    project: "E-commerce",
    priority: "High",
    status: "Todo",
  },
  {
    title: "Update landing page",
    project: "Marketing",
    priority: "Low",
    status: "Completed",
  },
];

function priorityClass(priority: string) {
  switch (priority) {
    case "High":
      return "bg-red-500/10 text-red-400";

    case "Medium":
      return "bg-amber-500/10 text-amber-400";

    default:
      return "bg-zinc-800 text-zinc-400";
  }
}

function statusClass(status: string) {
  switch (status) {
    case "Completed":
      return "bg-emerald-500/10 text-emerald-400";

    case "In Progress":
      return "bg-indigo-500/10 text-indigo-400";

    default:
      return "bg-zinc-800 text-zinc-400";
  }
}

export default function TasksOverview() {
  return (
    <div className="rounded-xl border border-[var(--border)] bg-[var(--card)]">
      <div className="flex items-center justify-between border-b border-[var(--border)] p-5">
        <div>
          <h2 className="font-semibold">
            Tasks Overview
          </h2>

          <p className="mt-1 text-xs text-zinc-500">
            Recently updated tasks
          </p>
        </div>

        <button className="text-xs font-medium text-indigo-400 hover:text-indigo-300">
          View all
        </button>
      </div>

      <div className="divide-y divide-zinc-800">
        {tasks.map((task) => (
          <div
            key={task.title}
            className="flex flex-col gap-3 p-5 transition hover:bg-zinc-900/50 md:flex-row md:items-center"
          >
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-medium text-zinc-200">
                {task.title}
              </p>

              <p className="mt-1 text-xs text-zinc-500">
                {task.project}
              </p>
            </div>

            <span
              className={`w-fit rounded-md px-2 py-1 text-[11px] font-medium ${priorityClass(
                task.priority
              )}`}
            >
              {task.priority}
            </span>

            <span
              className={`w-fit rounded-md px-2 py-1 text-[11px] font-medium ${statusClass(
                task.status
              )}`}
            >
              {task.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}