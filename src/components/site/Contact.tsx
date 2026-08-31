import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  EMAIL,
  PHONE_DISPLAY,
  PHONE_E164,
  SERVICE_AREA,
  WHATSAPP_URL,
} from "@/config/site";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { SectionLink } from "./SectionLink";
import { SocialLinks } from "./SocialLinks";

export function Contact() {
  return (
    <section id="contact" className="relative py-20 lg:py-28">
      <div className="hero-glow absolute inset-0 opacity-60" aria-hidden="true" />
      <div className="container-page relative">
        <div className="grid items-start gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Contact"
              title={
                <>
                  Need IT support? <span className="text-gradient">Let's talk.</span>
                </>
              }
              subtitle="Reach us by phone, WhatsApp or email — remote and on-site assistance available across South Africa."
            />

            <Reveal delay={80} className="mt-8 space-y-3">
              <a
                href={`tel:${PHONE_E164}`}
                className="surface-card surface-card-hover flex items-center gap-4 p-5"
              >
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary/15 text-primary-glow">
                  <Phone className="h-5 w-5" aria-hidden="true" />
                </span>
                <span>
                  <span className="block text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                    Call us
                  </span>
                  <span className="font-semibold">{PHONE_DISPLAY}</span>
                </span>
              </a>

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="surface-card surface-card-hover flex items-center gap-4 p-5"
              >
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-whatsapp/15 text-whatsapp">
                  <MessageCircle className="h-5 w-5" aria-hidden="true" />
                </span>
                <span>
                  <span className="block text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                    WhatsApp
                  </span>
                  <span className="font-semibold">Chat with us now</span>
                </span>
              </a>

              <a
                href={`mailto:${EMAIL}`}
                className="surface-card surface-card-hover flex items-center gap-4 p-5"
              >
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary/15 text-primary-glow">
                  <Mail className="h-5 w-5" aria-hidden="true" />
                </span>
                <span className="min-w-0">
                  <span className="block text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                    Email
                  </span>
                  <span className="block truncate font-semibold">{EMAIL}</span>
                </span>
              </a>
            </Reveal>
          </div>

          <Reveal delay={120}>
            <div className="surface-card p-8">
              <h3 className="font-display text-xl font-bold">Service details</h3>
              <ul className="mt-6 space-y-5 text-sm leading-relaxed text-muted-foreground">
                <li className="flex gap-3">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary-glow" aria-hidden="true" />
                  <span>
                    <span className="block font-semibold text-foreground">Service area</span>
                    {SERVICE_AREA}
                  </span>
                </li>
                <li className="flex gap-3">
                  <Clock className="mt-0.5 h-5 w-5 shrink-0 text-primary-glow" aria-hidden="true" />
                  <span>
                    <span className="block font-semibold text-foreground">Support hours</span>
                    Monday – Friday, 08:00 – 17:00 · After-hours support by arrangement
                  </span>
                </li>
              </ul>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button asChild variant="cta" size="lg" className="sm:flex-1">
                  <SectionLink section="booking">Book free assessment</SectionLink>
                </Button>
                <Button asChild variant="whatsapp" size="lg" className="sm:flex-1">
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="h-4 w-4" aria-hidden="true" />
                    WhatsApp us
                  </a>
                </Button>
              </div>

              <div className="mt-8 border-t border-border pt-6">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                  Follow us
                </p>
                <div className="mt-3">
                  <SocialLinks />
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
