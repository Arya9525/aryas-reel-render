import { Brain, Code2, Lightbulb, Target } from "lucide-react";
import { aboutParagraphs, highlights, profile } from "@/data/portfolio";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

const icons = [Code2, Lightbulb, Target, Brain];

export function About() {
  return (
    <section id="about" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          label="About Me"
          title={
            <>
              Full Stack <span className="text-gradient-red">&amp; Mobile App</span> Developer
            </>
          }
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-stretch">
          <Reveal className="relative h-full">
            <div className="surface-card h-full overflow-hidden border-4 border-primary/60">
              <img
                src={profile.image}
                alt="Arya Kumar Mishra"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </Reveal>

          <div className="flex h-full flex-col justify-between">
            <div>
              {aboutParagraphs.map((p, i) => (
                <Reveal key={i} delay={i * 90}>
                  <p className="mb-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
                    {p}
                  </p>
                </Reveal>
              ))}
            </div>

            <div className="mt-6 grid flex-1 grid-rows-2 gap-4 sm:grid-cols-2">
              {highlights.map((h, i) => {
                const Icon = icons[i] ?? Code2;
                return (
                  <Reveal key={h.title} delay={i * 100}>
                    <div className="surface-card h-full p-6 transition-transform duration-300 hover:-translate-y-1">
                      <Icon className="h-6 w-6 text-primary" />
                      <h3 className="mt-4 font-display text-lg font-bold">{h.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {h.text}
                      </p>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
