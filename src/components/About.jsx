import Fade from "./Fade";

const About = () => {
  const details = [
    { label: "Focus", val: "Web Development" },
    { label: "Stack", val: "React + Python" },
    { label: "Status", val: "Actively Learning" },
    { label: "Goal", val: "Full-Stack Engineer" },
  ];

  return (
    <section id="about" className="px-6 py-24 sm:py-32">
      <div className="max-w-6xl mx-auto">
        <Fade>
          <p className="font-mono text-xs text-emerald-400 uppercase tracking-widest mb-4">
            01 — About
          </p>
        </Fade>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <Fade delay={0.1}>
              <h2 className="font-display text-4xl sm:text-5xl text-zinc-100 mb-6 leading-tight">
                Who am I,<br />
                <em className="text-zinc-500">exactly?</em>
              </h2>
            </Fade>
            <Fade delay={0.2}>
              <p className="text-zinc-400 leading-relaxed mb-5">
                Hi! I'm{" "}
                <span className="text-zinc-200 font-medium">
                  Maron Jake Dinopol
                </span>
                , an aspiring full-stack web developer who loves turning ideas
                into real, working products on the web.
              </p>
            </Fade>
            <Fade delay={0.3}>
              <p className="text-zinc-500 leading-relaxed mb-5">
                I enjoy working with both the front-end and back-end sides of
                web development. Whether it's crafting a pixel-perfect UI with
                React or building logic with Python, I embrace every layer of
                the stack.
              </p>
            </Fade>
            <Fade delay={0.4}>
              <p className="text-zinc-500 leading-relaxed">
                I'm continuously learning, building, and growing — always aiming
                to write cleaner code and ship better products.
              </p>
            </Fade>
          </div>

          <Fade delay={0.2} dir="right">
            <div className="glow rounded-2xl border border-zinc-800 bg-zinc-900 p-8 float">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 font-display text-lg">
                  MJ
                </div>
                <div>
                  <p className="text-zinc-200 font-medium text-sm">
                    Maron Jake Dinopol
                  </p>
                  <p className="text-zinc-500 text-xs font-mono">
                    Full-Stack Developer
                  </p>
                </div>
                <div className="ml-auto w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              </div>
              <div className="space-y-3">
                {details.map(({ label, val }) => (
                  <div
                    key={label}
                    className="flex justify-between text-sm border-b border-zinc-800 pb-3 last:border-0"
                  >
                    <span className="text-zinc-600 font-mono">{label}</span>
                    <span className="text-zinc-300">{val}</span>
                  </div>
                ))}
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </section>
  );
};

export default About;
