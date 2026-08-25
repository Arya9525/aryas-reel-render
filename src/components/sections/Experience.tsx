import { Briefcase } from "lucide-react";
import { experience } from "@/data/portfolio";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

export function Experience() {
  return (
    <section className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          label="Work Experience"
          title={
            <>
              Professional <span className="text-gradient-red">experience</span>
            </>
          }
          subtitle="Hands-on industry experience building real-world applications."
        />

        <div className="mt-12 grid gap-6">
          {experience.map((e, i) => (
            <Reveal key={e.company} delay={i * 100}>
              <article className="surface-card p-7 transition-transform duration-300 hover:-translate-y-1 sm:p-9">
                <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-4 sm:flex sm:items-center sm:justify-between">
                  <div className="flex min-w-0 items-center gap-4">
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-primary/15 text-primary">
                      <Briefcase className="h-5 w-5" />
                    </span>
                    <div className="min-w-0">
                      <h3 className="font-display text-xl font-extrabold sm:text-2xl">
                        {e.role}
                      </h3>
                      <p className="text-sm text-muted-foreground">{e.company}</p>
                    </div>
                  </div>
                  <span className="shrink-0 rounded-full border border-border px-4 py-1.5 text-xs font-semibold text-muted-foreground">
                    {e.meta}
                  </span>
                </div>
                <ul className="mt-6 grid gap-3 pl-1">
                  {e.responsibilities.map((r, j) => (
                    <li key={j} className="flex items-start gap-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                      <span className="mt-2 block h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      {r}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
