import { ArrowUpRight, Code2, Lightbulb, Target } from "lucide-react";
import { aboutParagraphs, highlights, profile } from "@/data/portfolio";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

const icons = [Code2, Lightbulb, Target];

export function About() {
  return (
    <section id="about" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          label="About Me"
          title={
            <>
              Full Stack Developer
              <br />
              <span className="text-gradient-red">& MCA Student</span>
            </>
          }
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <Reveal className="relative">
            <div className="surface-card overflow-hidden">
              <img
                src={profile.image}
                alt="Arya Kumar Mishra"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute right-4 -bottom-6 rounded-2xl bg-primary px-5 py-4 glow-red">
              <p className="font-display text-lg font-extrabold text-primary-foreground">
                SRM IST
              </p>
              <p className="text-xs text-primary-foreground/80">Ghaziabad, Delhi-NCR</p>
            </div>
          </Reveal>

          <div>
            {aboutParagraphs.map((p, i) => (
              <Reveal key={i} delay={i * 90}>
                <p className="mb-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
                  {p}
                </p>
              </Reveal>
            ))}

            <div className="mt-4 grid gap-4 sm:grid-cols-2">
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

            <Reveal delay={120}>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="#contact"
                  className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
                >
                  Get In Touch
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </a>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold transition-colors hover:bg-secondary"
                >
                  LinkedIn Profile
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
