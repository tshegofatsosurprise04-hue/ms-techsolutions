import { Button } from "@/components/ui/button";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { SectionLink } from "./SectionLink";

const steps = [
  {
    step: "01",
    title: "Get in touch",
    text: "Send us a message via the booking form, WhatsApp or email with a few details about your organisation.",
  },
  {
    step: "02",
    title: "Free IT Risk Assessment",
    text: "We review your setup, network, backups and basic security — remotely or on-site, at no cost.",
  },
  {
    step: "03",
    title: "Clear recommendations",
    text: "You receive a short written report with practical findings, priorities and a suggested support option.",
  },
  {
    step: "04",
    title: "Ongoing support",
    text: "Choose managed support or on-demand help. We keep systems monitored, maintained and running.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-20 lg:py-28">
      <div className="container-page">
        <SectionHeading
          align="center"
          eyebrow="How it works"
          title={
            <>
              Getting started takes <span className="text-gradient">four simple steps</span>
            </>
          }
          subtitle="No long onboarding, no jargon — just a clear path from first contact to reliable IT."
        />

        <ol className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map(({ step, title, text }, i) => (
            <Reveal key={step} delay={i * 80}>
              <li className="surface-card surface-card-hover h-full list-none p-6">
                <span className="font-display text-3xl font-extrabold text-primary-glow/80">
                  {step}
                </span>
                <h3 className="mt-3 font-display text-lg font-bold">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
              </li>
            </Reveal>
          ))}
        </ol>

        <Reveal delay={120} className="mt-10 flex justify-center">
          <Button asChild variant="cta" size="lg">
            <SectionLink section="booking">Book Your FREE IT Risk Assessment</SectionLink>
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
