import { Link } from "@tanstack/react-router";
import { ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WHATSAPP_URL } from "@/config/site";
import { Reveal } from "./Reveal";
import type { AppRoute } from "./SectionLink";

type CtaBandProps = {
  title: string;
  subtitle?: string;
  primaryLabel: string;
  primaryTo: AppRoute;
  secondaryLabel?: string;
  secondaryTo?: AppRoute;
  showWhatsApp?: boolean;
};

/** Shared closing call-to-action used across the inner pages. */
export function CtaBand({
  title,
  subtitle,
  primaryLabel,
  primaryTo,
  secondaryLabel,
  secondaryTo,
  showWhatsApp = true,
}: CtaBandProps) {
  return (
    <section className="relative border-t border-border py-16 lg:py-20">
      <div className="hero-glow absolute inset-0 opacity-60" aria-hidden="true" />
      <div className="container-page relative">
        <Reveal className="surface-card p-8 sm:p-10">
          <h2 className="text-balance font-display text-2xl font-extrabold sm:text-3xl">{title}</h2>
          {subtitle && (
            <p className="mt-3 max-w-2xl text-pretty text-sm leading-relaxed text-muted-foreground sm:text-base">
              {subtitle}
            </p>
          )}
          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Button asChild variant="cta" size="lg">
              <Link to={primaryTo}>
                {primaryLabel}
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>
            {secondaryLabel && secondaryTo && (
              <Button asChild variant="outlineLight" size="lg">
                <Link to={secondaryTo}>{secondaryLabel}</Link>
              </Button>
            )}
            {showWhatsApp && (
              <Button asChild variant="whatsapp" size="lg">
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="h-4 w-4" aria-hidden="true" />
                  WhatsApp us
                </a>
              </Button>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
