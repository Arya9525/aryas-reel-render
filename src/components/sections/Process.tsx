import { process } from "@/data/portfolio";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

export function Process() {
  return (
    <section className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          label="How I Work"
          title={
            <>
              From an idea to
              <br />
              <span className="text-gradient-red">a real-world application</span>
            </>
          }
          subtitle="The steps I follow when turning a problem into a working product."
        />

        <div className="relative mt-16">
          <div className="absolute inset-x-0 top-1/2 hidden h-px border-t border-dashed border-border lg:block" />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {process.map((p, i) => (
              <Reveal key={p.step} delay={i * 80}>
                <div
                  className="surface-card relative h-full p-7 transition-all duration-300 hover:-translate-y-2 hover:border-primary/40"
                >
                  <span className="font-display text-4xl font-extrabold text-primary/25">
                    {p.step}
                  </span>
                  <h3 className="mt-3 font-display text-xl font-bold">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {p.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
