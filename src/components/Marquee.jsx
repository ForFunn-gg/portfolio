const Marquee = () => {
  const items = ["HTML", "CSS", "JavaScript", "React", "Python", "Full-Stack", "Web Dev"];

  return (
    <div className="border-y border-zinc-800 bg-zinc-900/60 py-4 overflow-hidden">
      <div className="flex whitespace-nowrap marquee-track gap-10">
        {Array(6)
          .fill(items)
          .flat()
          .map((s, i) => (
            <span key={i} className="text-xs font-mono text-white uppercase tracking-widest">
              {s} <span className="text-emerald-700">✦</span>
            </span>
          ))}
      </div>
    </div>
  );
};

export default Marquee;
