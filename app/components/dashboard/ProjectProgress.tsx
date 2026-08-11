interface Project {
  name: string;
  progress: number;
  color: string;
}

const projects: Project[] = [
  {
    name: "DevFlow Dashboard",
    progress: 78,
    color: "bg-indigo-500",
  },
  {
    name: "E-commerce Platform",
    progress: 64,
    color: "bg-violet-500",
  },
  {
    name: "Mobile Application",
    progress: 42,
    color: "bg-amber-500",
  },
  {
    name: "Marketing Website",
    progress: 91,
    color: "bg-emerald-500",
  },
];

export default function ProjectProgress() {
  return (
    <div className="rounded-xl border border-[var(--border)] bg-[var(--card)] p-5">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="font-semibold">
            Project Progress
          </h2>

          <p className="mt-1 text-xs text-zinc-500">
            Current progress across your projects
          </p>
        </div>

        <button className="text-xs font-medium text-indigo-400 hover:text-indigo-300">
          View all
        </button>
      </div>

      <div className="space-y-5">
        {projects.map((project) => (
          <div key={project.name}>
            <div className="mb-2 flex items-center justify-between">
              <span className="text-sm text-zinc-300">
                {project.name}
              </span>

              <span className="text-xs text-zinc-500">
                {project.progress}%
              </span>
            </div>

            <div className="h-2 overflow-hidden rounded-full bg-zinc-800">
              <div
                className={`h-full rounded-full ${project.color} transition-all`}
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