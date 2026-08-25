import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

export function SectionHeading({
  label,
  title,
  subtitle,
  align = "left",
  tone = "dark",
  labelClassName,
  dotClassName,
}: {
  label: string;
  title: ReactNode;
  subtitle?: string;
  align?: "left" | "center";
  tone?: "dark" | "red";
  labelClassName?: string;
  dotClassName?: string;
}) {
  const centered = align === "center";
  return (
    <div className={centered ? "mx-auto max-w-2xl text-center" : "max-w-3xl"}>
      <Reveal>
        <span
          className={`inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-[0.7rem] font-semibold tracking-[0.22em] uppercase ${
            tone === "red"
              ? "border-primary-foreground/30 bg-primary-foreground/10 text-primary-foreground"
              : "border-primary/40 bg-primary/10 text-primary-soft"
          } ${labelClassName ?? ""}`}
        >
          <span
            className={`h-1.5 w-1.5 rounded-full ${tone === "red" ? "bg-primary-foreground" : "bg-primary"} ${dotClassName ?? ""}`}
          />
          {label}
        </span>
      </Reveal>
      <Reveal delay={80}>
        <h2 className="mt-5 text-4xl leading-[0.95] font-extrabold sm:text-5xl lg:text-6xl">
          {title}
        </h2>
      </Reveal>
      {subtitle ? (
        <Reveal delay={140}>
          <p
            className={`mt-5 text-base leading-relaxed sm:text-lg ${
              tone === "red" ? "text-primary-foreground/80" : "text-muted-foreground"
            }`}
          >
            {subtitle}
          </p>
        </Reveal>
      ) : null}
    </div>
  );
}
