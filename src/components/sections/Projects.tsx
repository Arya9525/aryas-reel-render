import { Github, ArrowUpRight } from "lucide-react";
import { projects, profile } from "@/data/portfolio";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

function TechPills({ tech }: { tech: string[] }) {
  return (
    <ul className="mt-5 flex flex-wrap gap-2">
      {tech.map((t) => (
        <li key={t}>
          <span className="inline-block rounded-full border border-primary/30 bg-primary/10 px-3 py-1.5 text-xs font-medium text-primary-soft transition-colors hover:bg-primary/20">
            {t}
          </span>
        </li>
      ))}
    </ul>
  );
}

export function Projects() {
  const [featured, ...rest] = projects;

  return (
    <section id="projects" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          label="Projects"
          title={
            <>
              Selected <span className="text-gradient-red">work</span>
            </>
          }
          subtitle="Applications I have designed and built end to end."
        />

        <Reveal className="mt-14">
          <article className="surface-card group grid overflow-hidden lg:grid-cols-[1.15fr_0.85fr]">
            <div className="relative overflow-hidden">
              <img
                src={featured.image}
                alt={featured.name}
                loading="lazy"
                className="h-full min-h-[240px] w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/80 to-transparent" />
            </div>
            <div className="p-7 sm:p-10">
              <div className="flex items-center gap-3">
                <span className="font-display text-sm font-bold text-primary">01</span>
                <span className="rounded-full border border-border px-3 py-1 text-[0.65rem] font-semibold tracking-[0.18em] text-muted-foreground uppercase">
                  Featured
                </span>
              </div>
              <h3 className="mt-4 font-display text-3xl leading-tight font-extrabold sm:text-4xl">
                {featured.name}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
                {featured.description}
              </p>
              <TechPills tech={featured.tech} />
              <a
                href={featured.github}
                target="_blank"
                rel="noreferrer"
                className="mt-7 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5 hover:glow-red"
              >
                <Github className="h-4 w-4" />
                View on GitHub
              </a>
            </div>
          </article>
        </Reveal>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {rest.map((p, i) => (
            <Reveal key={p.name} delay={i * 100}>
              <article className="surface-card group h-full overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:border-primary/40 hover:glow-red">
                <div className="overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.name}
                    loading="lazy"
                    className="h-56 w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-7">
                  <span className="font-display text-sm font-bold text-primary">
                    0{i + 2}
                  </span>
                  <h3 className="mt-2 font-display text-2xl font-extrabold">{p.name}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {p.description}
                  </p>
                  <TechPills tech={p.tech} />
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-6 inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-semibold transition-colors hover:bg-secondary"
                  >
                    <Github className="h-4 w-4" />
                    GitHub
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={80}>
          <div className="mt-10 flex justify-center">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold transition-colors hover:bg-secondary"
            >
              Check my GitHub
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
