import { Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/data/portfolio";

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-border bg-background pt-16 pb-24 sm:pb-16">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-6 sm:flex sm:justify-between">
          <p className="min-w-0 text-sm text-muted-foreground">
            {profile.role} · {profile.location}
          </p>
          <ul className="flex shrink-0 items-center gap-2">
            {[
              { href: profile.github, label: "GitHub", Icon: Github },
              { href: profile.linkedin, label: "LinkedIn", Icon: Linkedin },
              { href: profile.gmailCompose, label: "Email", Icon: Mail },
            ].map(({ href, label, Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  aria-label={label}
                  className="grid h-10 w-10 place-items-center rounded-full border border-border text-muted-foreground transition-all hover:-translate-y-0.5 hover:bg-primary hover:text-primary-foreground"
                >
                  <Icon className="h-4 w-4" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <h2 className="mt-10 bg-gradient-to-b from-foreground/90 to-foreground/10 bg-clip-text text-center text-[19vw] leading-[0.8] font-extrabold text-transparent select-none">
          ARYA
        </h2>

        <p className="mt-8 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Arya Kumar Mishra. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
