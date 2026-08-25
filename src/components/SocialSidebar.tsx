import { Github, Linkedin, Mail, Phone } from "lucide-react";
import { profile } from "@/data/portfolio";

const items = [
  { href: profile.github, label: "GitHub", Icon: Github },
  { href: profile.linkedin, label: "LinkedIn", Icon: Linkedin },
  { href: profile.gmailCompose, label: "Email", Icon: Mail },
  { href: `tel:${profile.phone.replace(/\s/g, "")}`, label: "Phone", Icon: Phone },
];

export function SocialSidebar() {
  return (
    <>
      <aside className="fixed top-1/2 left-4 z-40 hidden -translate-y-1/2 xl:block">
        <ul className="flex flex-col items-center gap-3 rounded-full border border-border bg-ink/70 p-2 backdrop-blur-xl">
          {items.map(({ href, label, Icon }) => (
            <li key={label}>
              <a
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                aria-label={label}
                className="grid h-10 w-10 place-items-center rounded-full text-muted-foreground transition-all duration-200 hover:-translate-y-0.5 hover:bg-primary hover:text-primary-foreground"
              >
                <Icon className="h-4.5 w-4.5" />
              </a>
            </li>
          ))}
        </ul>
        <div className="mx-auto mt-3 h-16 w-px bg-gradient-to-b from-primary to-transparent" />
      </aside>

      <div className="fixed inset-x-0 bottom-4 z-40 flex justify-center xl:hidden">
        <ul className="flex items-center gap-1 rounded-full border border-border bg-ink/85 px-2 py-1.5 backdrop-blur-xl">
          {items.map(({ href, label, Icon }) => (
            <li key={label}>
              <a
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                aria-label={label}
                className="grid h-9 w-9 place-items-center rounded-full text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                <Icon className="h-4 w-4" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
