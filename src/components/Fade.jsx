import useFade from "../hook/useFade";

const Fade = ({ children, delay = 0, dir = "up", className = "" }) => {
  const { ref, visible } = useFade();

  const origins = {
    up: "translateY(36px)",
    down: "translateY(-36px)",
    left: "translateX(-36px)",
    right: "translateX(36px)",
  };

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translate(0,0)" : origins[dir],
        transition: `opacity 0.75s ease ${delay}s, transform 0.75s ease ${delay}s`,
      }}
    >
      {children}
    </div>
  );
};

export default Fade;
