import { Brain, Users, BookOpen, Shuffle } from "lucide-react";
import { softSkills } from "@/data/portfolio";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

const icons = [Brain, Users, BookOpen, Shuffle];

export function SoftSkills() {
  return (
    <section className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          label="Professional Soft Skills"
          title={
            <>
              Beyond the<span className="text-gradient-red"> code</span>
            </>
          }
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {softSkills.map((s, i) => {
            const Icon = icons[i] ?? Brain;
            return (
              <Reveal key={s.title} delay={i * 90}>
                <div className="surface-card h-full p-7 text-center transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40">
                  <span className="mx-auto grid h-12 w-12 place-items-center rounded-2xl bg-primary/15 text-primary">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-5 font-display text-lg font-bold">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {s.text}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
