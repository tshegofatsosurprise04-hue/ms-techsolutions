import { ArrowRight, ShieldCheck } from "lucide-react";
import { SectionLink } from "./SectionLink";

export function AnnouncementBar() {
  return (
    <div className="relative z-50 border-b border-border bg-[image:var(--gradient-primary)] text-primary-foreground">
      <div className="container-page flex flex-wrap items-center justify-center gap-x-3 gap-y-1 py-2 text-center text-[0.78rem] font-medium sm:text-[0.83rem]">
        <span className="flex min-w-0 items-center gap-2">
          <ShieldCheck className="h-4 w-4 shrink-0" aria-hidden="true" />
          <span className="font-bold uppercase tracking-wide">Free IT Risk Assessment</span>
        </span>
        <span className="hidden opacity-90 sm:inline">
          — Identify IT risks before they become expensive problems.
        </span>
        <SectionLink
          section="booking"
          className="group inline-flex items-center gap-1 font-bold underline underline-offset-4 transition-opacity hover:opacity-85"
        >
          Book Now
          <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
        </SectionLink>
      </div>
    </div>
  );
}
