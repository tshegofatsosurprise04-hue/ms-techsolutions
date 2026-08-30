import { CalendarCheck, MessageCircle } from "lucide-react";
import { WHATSAPP_URL } from "@/config/site";
import { SectionLink } from "./SectionLink";

/** Persistent conversion bar on small screens. */
export function StickyMobileCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-background/95 px-3 py-2.5 backdrop-blur md:hidden">
      <div className="grid grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)] gap-2">
        <SectionLink
          section="booking"
          className="inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-[image:var(--gradient-primary)] px-3 text-xs font-bold uppercase tracking-wide text-primary-foreground"
        >
          <CalendarCheck className="h-4 w-4 shrink-0" aria-hidden="true" />
          Book Free Assessment
        </SectionLink>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-whatsapp px-3 text-xs font-bold uppercase tracking-wide text-whatsapp-foreground"
        >
          <MessageCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
          WhatsApp
        </a>
      </div>
    </div>
  );
}
