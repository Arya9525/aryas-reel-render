import { useEffect, useState } from "react";

export function IntroTitleScreen() {
  const [phase, setPhase] = useState<"show" | "exit" | "done">("show");

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    document.body.style.overflow = "hidden";

    const hold = setTimeout(
      () => setPhase("exit"),
      reduced ? 300 : 1000,
    );

    return () => {
      clearTimeout(hold);
      document.body.style.overflow = "";
    };
  }, []);

  useEffect(() => {
    if (phase !== "exit") return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const duration = reduced ? 100 : 800;

    const timer = setTimeout(() => {
      setPhase("done");
      document.body.style.overflow = "";
    }, duration);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "";
    };
  }, [phase]);

  if (phase === "done") return null;

  return (
    <div
      className={`intro-splash ${phase === "exit" ? "intro-splash--exit" : ""}`}
      aria-hidden="true"
    >
      <h1
        className="intro-splash-title select-none font-display font-extrabold"
      >
        ARYA
      </h1>
    </div>
  );
}
