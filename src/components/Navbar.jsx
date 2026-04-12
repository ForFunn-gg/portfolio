import { useState, useEffect } from "react";

const NavLink = ({ href, label }) => (
  <a
    href={href}
    className="text-sm text-zinc-500 hover:text-emerald-400 transition-colors duration-200 font-mono tracking-wide"
  >
    {label}
  </a>
);

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = ["about", "skills", "projects", "contact"];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-zinc-950/90 backdrop-blur-md border-b border-zinc-800/50"
          : ""
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-5 flex justify-between items-center">
        <a
          href="#home"
          className="font-mono text-sm text-emerald-400 tracking-widest font-medium"
        >
          MJD<span className="text-zinc-600">.</span>dev
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <NavLink key={l} href={`#${l}`} label={l} />
          ))}
          <a
            href="#contact"
            className="text-xs font-mono px-4 py-2 rounded-full border border-emerald-600 text-emerald-400 hover:bg-emerald-600 hover:text-white transition-all duration-300"
          >
            hire me
          </a>
        </div>

        <button
          className="md:hidden text-zinc-400 hover:text-white transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <div className="space-y-1.5">
            <span
              className={`block w-6 h-0.5 bg-current transition-all ${
                menuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block w-4 h-0.5 bg-current transition-all ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-current transition-all ${
                menuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </div>
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-zinc-900 border-b border-zinc-800 px-6 py-6 flex flex-col gap-5">
          {links.map((l) => (
            <a
              key={l}
              href={`#${l}`}
              onClick={() => setMenuOpen(false)}
              className="text-sm font-mono text-zinc-400 hover:text-emerald-400 transition-colors capitalize"
            >
              {l}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
