import { Github, Linkedin, Mail, MapPin, Phone, ArrowUpRight } from "lucide-react";
import { profile } from "@/data/portfolio";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

export function Contact() {
  const details = [
    { Icon: Mail, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
    {
      Icon: Phone,
      label: "Phone",
      value: profile.phone,
      href: `tel:${profile.phone.replace(/\s/g, "")}`,
    },
    { Icon: MapPin, label: "Location", value: profile.location, href: undefined },
  ];

  return (
    <section id="contact" className="relative bg-ink py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          label="Contact"
          title={
            <>
              Have a project in mind?
              <br />
              <span className="text-gradient-red">Let's talk.</span>
            </>
          }
          subtitle="Open to internships, full-time roles and collaboration on impactful projects."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
            {details.map(({ Icon, label, value, href }, i) => {
              const inner = (
                <div className="surface-card flex h-full min-w-0 items-center gap-4 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-primary/15 text-primary">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-xs tracking-[0.16em] text-muted-foreground uppercase">
                      {label}
                    </p>
                    <p className="truncate font-display text-base font-bold">{value}</p>
                  </div>
                </div>
              );
              return (
                <Reveal key={label} delay={i * 90}>
                  {href ? (
                    <a href={href} className="block h-full">
                      {inner}
                    </a>
                  ) : (
                    inner
                  )}
                </Reveal>
              );
            })}
          </div>

          <Reveal delay={120}>
            <div className="surface-card h-full p-8 sm:p-10">
              <h3 className="font-display text-2xl font-extrabold">Find me online</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                The fastest way to reach me is email or LinkedIn. My code lives on GitHub.
              </p>
              <div className="mt-7 flex flex-col gap-3">
                <a
                  href={`mailto:${profile.email}`}
                  className="group inline-flex items-center justify-between gap-3 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5 hover:glow-red"
                >
                  <span className="inline-flex items-center gap-2">
                    <Mail className="h-4 w-4" /> Send an email
                  </span>
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </a>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-between gap-3 rounded-full border border-border px-6 py-3.5 text-sm font-semibold transition-colors hover:bg-secondary"
                >
                  <span className="inline-flex items-center gap-2">
                    <Linkedin className="h-4 w-4" /> Connect on LinkedIn
                  </span>
                  <ArrowUpRight className="h-4 w-4" />
                </a>
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-between gap-3 rounded-full border border-border px-6 py-3.5 text-sm font-semibold transition-colors hover:bg-secondary"
                >
                  <span className="inline-flex items-center gap-2">
                    <Github className="h-4 w-4" /> View GitHub
                  </span>
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
