import { ArrowRight, Download, Sparkles } from "lucide-react";
import { profile } from "@/data/portfolio";
import { Reveal } from "@/components/Reveal";
import { Wave } from "@/components/Wave";

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-primary pt-32 pb-0">
      <div
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{
          backgroundImage:
            "radial-gradient(70% 60% at 20% 0%, color-mix(in oklab, var(--primary-soft) 70%, transparent), transparent 70%), radial-gradient(60% 60% at 90% 20%, color-mix(in oklab, var(--primary-deep) 90%, transparent), transparent 70%)",
        }}
      />
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 pb-16 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:pb-24">
        <div>
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/30 bg-primary-foreground/10 px-4 py-1.5 text-xs font-semibold tracking-[0.2em] text-primary-foreground uppercase">
              <Sparkles className="h-3.5 w-3.5" />
              {profile.greeting}
            </span>
          </Reveal>
          <Reveal delay={90}>
            <h1 className="mt-6 text-5xl leading-[0.9] font-extrabold text-primary-foreground sm:text-7xl lg:text-8xl">
              Arya Kumar
              <br />
              Mishra
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-6 font-display text-lg font-bold text-primary-foreground/90 sm:text-2xl">
              {profile.role}
              <span className="mx-2 opacity-50">/</span>
              <span className="text-primary-foreground/70">MCA Student</span>
            </p>
          </Reveal>
          <Reveal delay={220}>
            <p className="mt-5 max-w-xl text-sm leading-relaxed text-primary-foreground/80 sm:text-base">
              {profile.intro}
            </p>
          </Reveal>
          <Reveal delay={300}>
            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3.5 text-sm font-semibold text-foreground transition-transform duration-200 hover:-translate-y-0.5"
              >
                View Projects
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/40 px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/10"
              >
                Contact Me
              </a>
              <a
                href={profile.resume}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/40 px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/10"
              >
                <Download className="h-4 w-4" />
                Resume
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={200} className="relative mx-auto w-full max-w-sm">
          <div className="absolute -inset-4 rounded-[3rem] border border-primary-foreground/20" />
          <div className="relative overflow-hidden rounded-[2.5rem] border border-primary-foreground/25 bg-ink/30">
            <img
              src={profile.image}
              alt="Arya Kumar Mishra"
              className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.04]"
              width={776}
              height={1026}
            />
          </div>
          <div className="absolute -bottom-5 -left-4 rounded-2xl border border-border bg-ink/90 px-4 py-3 backdrop-blur-xl sm:-left-8">
            <p className="font-display text-sm font-extrabold">MERN Stack</p>
            <p className="text-xs text-muted-foreground">React · Node · MongoDB</p>
          </div>
          <div className="absolute -top-4 -right-2 rounded-2xl border border-border bg-ink/90 px-4 py-3 backdrop-blur-xl sm:-right-6">
            <p className="font-display text-sm font-extrabold">Delhi-NCR</p>
            <p className="text-xs text-muted-foreground">Open to opportunities</p>
          </div>
        </Reveal>
      </div>
      <Wave fill="var(--background)" />
    </section>
  );
}
