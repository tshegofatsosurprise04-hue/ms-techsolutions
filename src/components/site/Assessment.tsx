import { CheckCircle2, ClipboardList, Search, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { SectionLink } from "./SectionLink";

const includes = [
  "Review of your current IT setup and hardware",
  "Network and Wi-Fi stability check",
  "Backup and data-protection review",
  "Basic cybersecurity and antivirus check",
  "Practical, written recommendations",
  "No obligation, no technical jargon",
];

const steps = [
  { icon: ClipboardList, title: "1. Book", text: "Send us a few details about your organisation." },
  { icon: Search, title: "2. Assess", text: "We review your environment remotely or on-site." },
  { icon: FileText, title: "3. Report", text: "You receive clear findings and next steps." },
];

export function Assessment() {
  return (
    <section id="assessment" className="relative py-20 lg:py-28">
      <div className="hero-glow absolute inset-0 opacity-60" aria-hidden="true" />
      <div className="container-page relative">
        <div className="grid items-start gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <SectionHeading
              eyebrow="Free · No obligation"
              title={
                <>
                  Free <span className="text-gradient">IT Risk Assessment</span>
                </>
              }
              subtitle="Most IT problems are predictable. A short assessment shows you exactly where your organisation is exposed — before it costs you downtime."
            />

            <Reveal delay={80} className="mt-8 grid gap-3 sm:grid-cols-2">
              {includes.map((item) => (
                <div key={item} className="flex gap-3 rounded-xl border border-border bg-surface/60 p-4">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary-glow" aria-hidden="true" />
                  <span className="text-sm leading-relaxed text-foreground/90">{item}</span>
                </div>
              ))}
            </Reveal>

            <Reveal delay={140} className="mt-8">
              <Button asChild variant="cta" size="xl">
                <SectionLink section="booking">Book Your Free Assessment</SectionLink>
              </Button>
            </Reveal>
          </div>

          <Reveal delay={100}>
            <div className="surface-card p-8">
              <h3 className="font-display text-xl font-bold">How it works</h3>
              <ol className="mt-6 space-y-5">
                {steps.map(({ icon: Icon, title, text }) => (
                  <li key={title} className="flex gap-4">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary/15 text-primary-glow">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <div>
                      <p className="font-semibold">{title}</p>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{text}</p>
                    </div>
                  </li>
                ))}
              </ol>
              <p className="mt-7 rounded-xl border border-primary/30 bg-primary/10 p-4 text-sm leading-relaxed text-foreground/90">
                Ideal for schools preparing for a new term, offices onboarding staff, or any
                organisation that has never had its IT properly reviewed.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
