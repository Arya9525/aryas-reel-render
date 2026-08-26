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
    <div className="fixed inset-x-0 bottom-4 z-40 flex justify-center">
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
  );
}
