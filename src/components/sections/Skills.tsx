import { skillGroups } from "@/data/portfolio";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

export function Skills() {
  return (
    <section id="skills" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          label="My Skillset"
          title={
            <>
              Technologies I <span className="text-gradient-red">build with</span>
            </>
          }
          subtitle="A technical toolkit spanning programming languages, frontend interfaces, backend services and everyday developer tools."
          align="center"
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group, i) => (
            <Reveal key={group.label} delay={i * 90}>
              <div className="surface-card group h-full p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40">
                <div className="flex items-center justify-between">
                  <h3 className="font-display text-lg font-bold">{group.label}</h3>
                  <span className="font-display text-sm text-primary">
                    0{i + 1}
                  </span>
                </div>
                <div className="mt-3 h-px w-full bg-border" />
                <ul className="mt-5 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li key={item}>
                      <span className="inline-block rounded-full border border-border bg-secondary px-3.5 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:border-primary/50 hover:bg-primary/15 hover:text-foreground">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
