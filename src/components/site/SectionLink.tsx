import { Link } from "@tanstack/react-router";
import type { ComponentProps, ReactNode } from "react";

export type AppRoute =
  | "/"
  | "/services"
  | "/solutions"
  | "/risk-assessment"
  | "/about"
  | "/resources"
  | "/contact"
  | "/privacy"
  | "/terms";

/**
 * Legacy section names are mapped to the dedicated pages of the multi-page
 * site, so existing CTAs keep working without being rewritten.
 */
const SECTION_ROUTES: Record<string, AppRoute> = {
  home: "/",
  problems: "/",
  services: "/services",
  pricing: "/services",
  solutions: "/solutions",
  schools: "/solutions",
  assessment: "/risk-assessment",
  booking: "/risk-assessment",
  "how-it-works": "/",
  about: "/about",
  faq: "/about",
  resources: "/resources",
  contact: "/contact",
};

type SectionLinkProps = {
  section: string;
  children: ReactNode;
} & Omit<ComponentProps<typeof Link>, "to" | "hash" | "children">;

/** Navigates to the dedicated page that owns the given content area. */
export function SectionLink({ section, children, ...rest }: SectionLinkProps) {
  const to = SECTION_ROUTES[section] ?? "/";
  return (
    <Link to={to} {...rest}>
      {children}
    </Link>
  );
}

export const NAV_LINKS: { label: string; to: AppRoute }[] = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: "Solutions", to: "/solutions" },
  { label: "Free IT Risk Assessment", to: "/risk-assessment" },
  { label: "About", to: "/about" },
  { label: "Resources", to: "/resources" },
  { label: "Contact", to: "/contact" },
];
