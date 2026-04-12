import Fade from "./Fade";

const Skill = ({ name, icon }) => (
  <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-zinc-700 bg-zinc-900 hover:border-emerald-500 hover:bg-zinc-800 transition-all duration-300 cursor-default">
    <span className="text-base">{icon}</span>
    <span className="text-sm text-zinc-300 font-mono">{name}</span>
  </div>
);

const Skills = () => {
  const skills = [
    { name: "HTML", icon: "🌐" },
    { name: "CSS", icon: "🎨" },
    { name: "JavaScript", icon: "⚡" },
    { name: "React", icon: "⚛️" },
    { name: "Python", icon: "🐍" },
  ];

  const bars = [
    { name: "HTML & CSS", pct: 85 },
    { name: "JavaScript", pct: 70 },
    { name: "React", pct: 65 },
    { name: "Python", pct: 60 },
  ];

  return (
    <section id="skills" className="px-6 py-24 sm:py-32 bg-zinc-900/40">
      <div className="max-w-6xl mx-auto">
        <Fade>
          <p className="font-mono text-xs text-emerald-400 uppercase tracking-widest mb-4">
            02 — Skills
          </p>
        </Fade>
        <Fade delay={0.1}>
          <h2 className="font-display text-4xl sm:text-5xl text-zinc-100 mb-12 leading-tight">
            My Tech<br />
            <em className="text-zinc-500">Stack</em>
          </h2>
        </Fade>

        <div className="flex flex-wrap gap-3">
          {skills.map((s, i) => (
            <Fade key={s.name} delay={i * 0.08}>
              <Skill {...s} />
            </Fade>
          ))}
        </div>

        <div className="mt-14 grid sm:grid-cols-2 gap-6">
          {bars.map((s, i) => (
            <Fade key={s.name} delay={i * 0.1}>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm text-zinc-400 font-mono">{s.name}</span>
                  <span className="text-sm text-emerald-400 font-mono">{s.pct}%</span>
                </div>
                <div className="h-1.5 rounded-full bg-zinc-800 overflow-hidden">
                  <div
                    className="h-full rounded-full bg-linear-to-r from-emerald-600 to-emerald-400 transition-all duration-1000"
                    style={{ width: `${s.pct}%` }}
                  />
                </div>
              </div>
            </Fade>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
