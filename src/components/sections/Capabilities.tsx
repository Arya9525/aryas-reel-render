import { ArrowUpRight, Layers, Plug, MonitorSmartphone } from "lucide-react";
import { capabilities } from "@/data/portfolio";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

const icons = [Layers, Plug, MonitorSmartphone];

export function Capabilities() {
  return (
    <section className="relative bg-ink py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          label="What I Build"
          title={
            <>
              From code to
              <br />
              <span className="text-gradient-red">real products</span>
            </>
          }
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {capabilities.map((c, i) => {
            const Icon = icons[i] ?? Layers;
            return (
              <Reveal key={c.title} delay={i * 100}>
                <div className="surface-card group flex h-full flex-col justify-between p-8 transition-all duration-300 hover:-translate-y-2 hover:border-primary/40">
                  <div>
                    <span className="grid h-12 w-12 place-items-center rounded-2xl bg-primary/15 text-primary">
                      <Icon className="h-5 w-5" />
                    </span>
                    <h3 className="mt-6 font-display text-2xl font-extrabold">
                      {c.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {c.text}
                    </p>
                  </div>
                  <a
                    href="#projects"
                    className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary"
                  >
                    See it in projects
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </a>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
