import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import { COMPANY_NAME, EMAIL, PHONE_DISPLAY, PHONE_E164, SERVICE_AREA } from "@/config/site";
import { Logo } from "./Logo";
import { NAV_SECTIONS, SectionLink } from "./SectionLink";
import { SocialLinks } from "./SocialLinks";

const SERVICE_LINKS = [
  { label: "Managed IT Support", section: "services" },
  { label: "On-Demand IT Support", section: "services" },
  { label: "Cybersecurity", section: "services" },
  { label: "Backup & Data Protection", section: "services" },
  { label: "Network & Infrastructure", section: "services" },
  { label: "Free IT Risk Assessment", section: "assessment" },
];

export function Footer() {
  return (
    <footer className="relative border-t border-border bg-surface/30">
      <div className="container-page py-14 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr_1fr_1.2fr]">
          <div>
            <Logo />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Professional IT support, cybersecurity, network support and backup management for
              schools, small businesses, offices and organisations across South Africa.
            </p>
            <SocialLinks className="mt-6" />
          </div>

          <nav aria-label="Footer navigation">
            <h2 className="font-display text-sm font-bold uppercase tracking-[0.16em] text-foreground">
              Navigation
            </h2>
            <ul className="mt-4 space-y-2.5">
              {NAV_SECTIONS.map((item) => (
                <li key={item.label}>
                  <SectionLink
                    section={item.section}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {item.label}
                  </SectionLink>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Services">
            <h2 className="font-display text-sm font-bold uppercase tracking-[0.16em] text-foreground">
              Services
            </h2>
            <ul className="mt-4 space-y-2.5">
              {SERVICE_LINKS.map((item) => (
                <li key={item.label}>
                  <SectionLink
                    section={item.section}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {item.label}
                  </SectionLink>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="font-display text-sm font-bold uppercase tracking-[0.16em] text-foreground">
              Contact
            </h2>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li>
                <a
                  href={`tel:${PHONE_E164}`}
                  className="inline-flex items-start gap-2.5 transition-colors hover:text-foreground"
                >
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary-glow" aria-hidden="true" />
                  {PHONE_DISPLAY}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${EMAIL}`}
                  className="inline-flex items-start gap-2.5 break-all transition-colors hover:text-foreground"
                >
                  <Mail className="mt-0.5 h-4 w-4 shrink-0 text-primary-glow" aria-hidden="true" />
                  {EMAIL}
                </a>
              </li>
              <li className="inline-flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary-glow" aria-hidden="true" />
                {SERVICE_AREA}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-muted-foreground">
            © 2026 {COMPANY_NAME}. All rights reserved.
          </p>
          <ul className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-muted-foreground">
            <li>
              <Link to="/privacy" className="transition-colors hover:text-foreground">
                Privacy Policy
              </Link>
            </li>
            <li>
              <SectionLink section="contact" className="transition-colors hover:text-foreground">
                Contact
              </SectionLink>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
