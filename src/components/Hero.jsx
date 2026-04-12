import Fade from "./Fade";
import Typewriter from "./Typewriter";

const Hero = () => {
  const words = [
    "Full-Stack Developer",
    "Web Developer",
    "React Enthusiast",
    "Python Learner",
    "Problem Solver",
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center px-6 pt-24 pb-16 grid-bg"
    >
      <div className="absolute top-1/4 right-1/4 w-72 h-72 rounded-full bg-emerald-500/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-48 h-48 rounded-full bg-emerald-500/8 blur-2xl pointer-events-none" />

      <div className="max-w-6xl mx-auto w-full">
        <Fade delay={0.1}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-zinc-800 bg-zinc-900/80 mb-8">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs font-mono text-zinc-400">
              Available for opportunities
            </span>
          </div>
        </Fade>

        <Fade delay={0.2}>
          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.95] mb-4 tracking-tight">
            <span className="block text-zinc-100">Maron Jake</span>
            <span className="block text-zinc-500">Dinopol</span>
          </h1>
        </Fade>

        <Fade delay={0.35}>
          <p className="font-mono text-lg sm:text-xl md:text-2xl mt-6 mb-8">
            <span className="text-zinc-500">{"// "}</span>
            <Typewriter words={words} />
          </p>
        </Fade>

        <Fade delay={0.45}>
          <p className="text-zinc-400 text-base sm:text-lg max-w-xl leading-relaxed mb-10">
            Aspiring web developer with a passion for building clean, responsive,
            and functional web experiences using modern technologies.
          </p>
        </Fade>

        <Fade delay={0.55}>
          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="px-7 py-3.5 rounded-full bg-emerald-500 text-zinc-950 font-mono text-sm font-medium hover:bg-emerald-400 transition-all duration-300 hover:scale-105 active:scale-95"
            >
              View Projects →
            </a>
            <a
              href="#contact"
              className="px-7 py-3.5 rounded-full border border-zinc-700 text-zinc-300 font-mono text-sm hover:border-zinc-500 hover:text-white transition-all duration-300"
            >
              Contact Me
            </a>
          </div>
        </Fade>

        <Fade delay={0.7}>
          <div className="mt-20 flex items-center gap-3">
            <div className="w-px h-12 bg-linear-to-b from-transparent to-zinc-600" />
            <span className="text-xs font-mono text-zinc-600 rotate-90 origin-left ml-2 tracking-widest">
              SCROLL
            </span>
          </div>
        </Fade>
      </div>
    </section>
  );
};

export default Hero;
