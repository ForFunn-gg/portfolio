const ProjectCard = ({ title, description, tags, liveUrl, githubUrl, emoji }) => (
  <div className="group relative rounded-2xl border border-zinc-800 bg-zinc-900 p-8 hover:border-emerald-600 transition-all duration-500 overflow-hidden">
    <div className="absolute inset-0 bg-linear-to-br from-emerald-950/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

    <div className="relative z-10">
      <div className="flex items-center justify-between mb-6">
        <span className="text-xs font-mono text-zinc-600">Project</span>
        <div className="flex gap-3">
          {githubUrl && (
            <a
              href={githubUrl} 
              target="_blank"
              rel="noreferrer"
              className="w-8 h-8 rounded-full border border-zinc-700 flex items-center justify-center text-zinc-500 hover:border-emerald-500 hover:text-emerald-400 transition-all cursor-pointer text-sm"
              title="GitHub"
            >
              ⌥
            </a>
          )}
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noreferrer"
              className="w-8 h-8 rounded-full border border-zinc-700 flex items-center justify-center text-zinc-500 hover:border-emerald-500 hover:text-emerald-400 transition-all cursor-pointer text-sm"
              title="Live Demo"
            >
              ↗
            </a>
          )}
        </div>
      </div>

      <div className="w-10 h-10 rounded-xl bg-zinc-800 border border-zinc-700 mb-4 flex items-center justify-center text-xl">
        {emoji || "🧩"}
      </div>

      <h3 className="text-lg font-semibold text-zinc-200 mb-2 group-hover:text-white transition-colors">
        {title || "furniture design landing page"}
      </h3>
      <p className="text-sm text-zinc-500 leading-relaxed">
        {description || "A brief description of the project goes here. Explain what it does, the technologies used, and any challenges you overcame while building it."}
      </p>

      <div className="flex flex-wrap gap-2 mt-5">
        {(tags || ["React", "Node.js"]).map((t) => (
          <span
            key={t}
            className="text-xs px-2 py-1 rounded bg-zinc-800 text-zinc-400 font-mono border border-zinc-700"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  </div>
);

export default ProjectCard;
