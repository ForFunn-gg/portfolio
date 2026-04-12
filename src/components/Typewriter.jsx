import { useState, useEffect } from "react";

const Typewriter = ({ words }) => {
  const [idx, setIdx] = useState(0);
  const [txt, setTxt] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[idx % words.length];
    const speed = deleting ? 60 : 110;

    const timer = setTimeout(() => {
      if (!deleting && txt === current) {
        setTimeout(() => setDeleting(true), 1400);
        return;
      }
      if (deleting && txt === "") {
        setDeleting(false);
        setIdx((i) => i + 1);
        return;
      }
      setTxt(
        deleting
          ? current.slice(0, txt.length - 1)
          : current.slice(0, txt.length + 1)
      );
    }, speed);

    return () => clearTimeout(timer);
  }, [txt, deleting, idx, words]);

  return (
    <span className="text-emerald-400">
      {txt}
      <span className="animate-pulse">|</span>
    </span>
  );
};

export default Typewriter;
