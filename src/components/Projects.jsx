import Fade from "./Fade";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Furniture Design Landing Page",
    description: "This project is a landing page for furniture design, built with React and Tailwind CSS. It features a clean and modern design, showcasing various furniture pieces with smooth animations and responsive layout.",
    tags: ["React", "TypeScript"],
    emoji: "🧩",
    liveUrl: "https://my-furniture-project-design.netlify.app/",
    githubUrl: "https://github.com/ForFunn-gg/Furniture-Design",
  },
  {
    title: "DashLife",
    description: "Dashlife is an e-commerce website built with React js and Tailwind css. It offers a seamless shopping experience with a user-friendly interface, allowing customers to browse and purchase products easily.",
    tags: ["React", "Tailwind CSS"],
    emoji: "🚀",
    liveUrl: "https://dashlife.netlify.app/login",
    githubUrl: "https://github.com/ForFunn-gg/DASHLIFE",
  },
  {
     title: "FinanceTracker",
  description: "A full-stack personal finance tracker to manage income and expenses, visualize spending by category with charts, and support multiple currencies.",
  tags: ["React", "Node.js", "MongoDB", "Express", "Chart.js"],
  emoji: "💰",
  liveUrl: "https://finance-tracker-ruddy-alpha.vercel.app",
  githubUrl: "https://github.com/ForFunn-gg/FinanceTracker",
  },
];

const Projects = () => (
  <section id="projects" className="px-6 py-24 sm:py-32">
    <div className="max-w-6xl mx-auto">
      <Fade>
        <p className="font-mono text-xs text-emerald-400 uppercase tracking-widest mb-4">
          03 — Projects
        </p>
      </Fade>
      <Fade delay={0.1}>
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <h2 className="font-display text-4xl sm:text-5xl text-zinc-100 leading-tight">
            Things I've<br />
            <em className="text-zinc-500">Built</em>
          </h2>
          <p className="text-zinc-600 text-sm font-mono max-w-xs">
          
          </p>
        </div>
      </Fade>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {projects.map((project, i) => (
          <Fade key={project.title} delay={i * 0.12}>
            <ProjectCard {...project} />
          </Fade>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
