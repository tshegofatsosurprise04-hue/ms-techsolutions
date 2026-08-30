import { Instagram, MessageCircle } from "lucide-react";
import { INSTAGRAM_URL, WHATSAPP_URL, X_URL } from "@/config/site";
import { cn } from "@/lib/utils";

function XIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor" className={className}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.657l-5.214-6.817-5.966 6.817H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

type SocialLinksProps = {
  className?: string;
  iconClassName?: string;
};

/**
 * Social icons. Instagram and X only render once their URLs are configured
 * in src/config/site.ts (no invented usernames).
 */
export function SocialLinks({ className, iconClassName }: SocialLinksProps) {
  const links = [
    { label: "WhatsApp", href: WHATSAPP_URL, icon: MessageCircle },
    { label: "Instagram", href: INSTAGRAM_URL, icon: Instagram },
    { label: "X", href: X_URL, icon: XIcon },
  ].filter((link) => link.href);

  return (
    <ul className={cn("flex items-center gap-2.5", className)}>
      {links.map(({ label, href, icon: Icon }) => (
        <li key={label}>
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`MS-TECH Solutions on ${label}`}
            className="grid h-10 w-10 place-items-center rounded-lg border border-border bg-surface/60 text-muted-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/60 hover:text-foreground"
          >
            <Icon className={cn("h-4.5 w-4.5", iconClassName)} />
          </a>
        </li>
      ))}
    </ul>
  );
}
