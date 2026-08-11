const projects = [
  {
    name: "DevFlow",
    description: "Project management platform",
    status: "Active",
    progress: 78,
    tasks: "24/31",
  },
  {
    name: "E-commerce",
    description: "Online shopping platform",
    status: "Active",
    progress: 64,
    tasks: "18/28",
  },
  {
    name: "Mobile App",
    description: "Fitness tracking application",
    status: "On Hold",
    progress: 42,
    tasks: "11/26",
  },
];

export default function RecentProjects() {
  return (
    <div className="rounded-xl border border-[var(--border)] bg-[var(--card)]">
      <div className="flex items-center justify-between border-b border-[var(--border)] p-5">
        <div>
          <h2 className="font-semibold">
            Recent Projects
          </h2>

          <p className="mt-1 text-xs text-zinc-500">
            Your latest projects
          </p>
        </div>

        <button className="text-xs font-medium text-indigo-400 hover:text-indigo-300">
          View all
        </button>
      </div>

      <div className="hidden overflow-x-auto md:block">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b border-zinc-800 text-xs text-zinc-500">
              <th className="px-5 py-3 font-medium">
                Project
              </th>

              <th className="px-5 py-3 font-medium">
                Status
              </th>

              <th className="px-5 py-3 font-medium">
                Progress
              </th>

              <th className="px-5 py-3 font-medium">
                Tasks
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-zinc-800">
            {projects.map((project) => (
              <tr
                key={project.name}
                className="transition hover:bg-zinc-900/50"
              >
                <td className="px-5 py-4">
                  <p className="text-sm font-medium text-zinc-200">
                    {project.name}
                  </p>

                  <p className="mt-1 text-xs text-zinc-500">
                    {project.description}
                  </p>
                </td>

                <td className="px-5 py-4">
                  <span
                    className={`rounded-md px-2 py-1 text-[11px] font-medium ${
                      project.status === "Active"
                        ? "bg-emerald-500/10 text-emerald-400"
                        : "bg-amber-500/10 text-amber-400"
                    }`}
                  >
                    {project.status}
                  </span>
                </td>

                <td className="px-5 py-4">
                  <div className="flex items-center gap-3">
                    <div className="h-1.5 w-24 overflow-hidden rounded-full bg-zinc-800">
                      <div
                        className="h-full rounded-full bg-indigo-500"
                        style={{
                          width: `${project.progress}%`,
                        }}
                      />
                    </div>

                    <span className="text-xs text-zinc-500">
                      {project.progress}%
                    </span>
                  </div>
                </td>

                <td className="px-5 py-4 text-sm text-zinc-400">
                  {project.tasks}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="divide-y divide-zinc-800 md:hidden">
        {projects.map((project) => (
          <div
            key={project.name}
            className="p-5"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium">
                  {project.name}
                </p>

                <p className="mt-1 text-xs text-zinc-500">
                  {project.description}
                </p>
              </div>

              <span className="text-xs text-zinc-500">
                {project.progress}%
              </span>
            </div>

            <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-zinc-800">
              <div
                className="h-full rounded-full bg-indigo-500"
                style={{
                  width: `${project.progress}%`,
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}