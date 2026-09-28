import { GraduationCap } from "lucide-react";
import { education } from "@/data/portfolio";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { Wave } from "@/components/Wave";

export function Education() {
  return (
    <>
      <Wave fill="var(--primary)" />
      <section id="education" className="relative bg-primary py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            label="Education"
            tone="red"
            labelClassName="!text-[#000000]"
            dotClassName="!bg-[#000000]"
            title={
              <>
                <span className="!text-[#FFFFFF]">Academic</span>
                <br />
                <span className="!text-[#000000]">foundation</span>
              </>
            }
          />

          <div className="mt-12 grid gap-6">
            {education.map((e, i) => (
              <Reveal key={e.place} delay={i * 100}>
                <article className="rounded-[2rem] border border-primary-foreground/20 bg-primary-deep/60 p-7 transition-transform duration-300 hover:-translate-y-1 sm:p-9">
                  <div className="card-header lg:flex lg:flex-wrap lg:items-start lg:gap-4">
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-primary-foreground/15 text-primary-foreground">
                      <GraduationCap className="h-5 w-5" />
                    </span>
                    <div className="card-header-title lg:flex lg:min-w-0 lg:flex-1 lg:items-center lg:gap-4">
                      <div className="min-w-0">
                        <h3 className="font-display text-xl font-extrabold text-primary-foreground sm:text-2xl">
                          {e.role}
                        </h3>
                        <p className="text-sm text-primary-foreground/75">{e.place}</p>
                      </div>
                      <span className="mt-2 shrink-0 rounded-full border border-primary-foreground/30 px-4 py-1.5 text-xs font-semibold lg:mt-0 lg:ml-auto !text-[#000000]">
                        {e.meta}
                      </span>
                    </div>
                  </div>
                  <p className="mt-5 text-sm leading-relaxed text-primary-foreground/80 sm:text-base">
                    {e.detail}
                  </p>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {e.tags.map((t) => (
                      <li key={t}>
                        <span className="inline-block rounded-full bg-primary-foreground/12 px-3.5 py-1.5 text-xs font-medium !text-[#000000]">
                          {t}
                        </span>
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <Wave fill="var(--primary)" flip />
    </>
  );
}
