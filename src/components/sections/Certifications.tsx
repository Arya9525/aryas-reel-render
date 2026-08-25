import { Award } from "lucide-react";
import { certifications } from "@/data/portfolio";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

export function Certifications() {
  return (
    <section className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          label="Certifications"
          title={
            <>
              Verified <span className="text-gradient-red">credentials</span>
            </>
          }
          subtitle="Professional certifications that validate my technical skills."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {certifications.map((c, i) => (
            <Reveal key={c.title} delay={i * 100}>
              <article className="surface-card group p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40">
                <div className="flex items-center gap-4">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-primary/15 text-primary">
                    <Award className="h-5 w-5" />
                  </span>
                  <div className="min-w-0">
                    <h3 className="font-display text-lg font-extrabold sm:text-xl">
                      {c.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">{c.issuer}</p>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
