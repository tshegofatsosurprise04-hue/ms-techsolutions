import { Link } from "@tanstack/react-router";
import type { ComponentProps, ReactNode } from "react";

type SectionLinkProps = {
  section: string;
  children: ReactNode;
} & Omit<ComponentProps<typeof Link>, "to" | "hash" | "children">;

/**
 * Links to a section of the home page. Works from any route (e.g. the
 * Privacy Policy page) because it always targets "/" plus the hash.
 */
export function SectionLink({ section, children, ...rest }: SectionLinkProps) {
  return (
    <Link to="/" hash={section} {...rest}>
      {children}
    </Link>
  );
}

export const NAV_SECTIONS = [
  { label: "Home", section: "home" },
  { label: "Services", section: "services" },
  { label: "Solutions", section: "solutions" },
  { label: "Free IT Risk Assessment", section: "assessment" },
  { label: "About", section: "about" },
  { label: "Resources", section: "resources" },
  { label: "Contact", section: "contact" },
] as const;
