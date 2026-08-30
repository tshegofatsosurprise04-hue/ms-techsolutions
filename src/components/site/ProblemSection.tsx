import { AlertTriangle, ArrowRight, DatabaseBackup, ShieldAlert, Timer } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { SectionLink } from "./SectionLink";

const problems = [
  {
    icon: Timer,
    title: "Downtime",
    text: "Systems go down when you need them most.",
  },
  {
    icon: ShieldAlert,
    title: "Cybersecurity Risks",
    text: "Unprotected systems can expose valuable information.",
  },
  {
    icon: DatabaseBackup,
    title: "Data Loss",
    text: "Without reliable backups, one incident can become a major loss.",
  },
  {
    icon: AlertTriangle,
    title: "Reactive IT",
    text: "Waiting for something to break can cost more than preventing the problem.",
  },
];

export function ProblemSection() {
  return (
    <section id="problems" className="relative border-t border-border py-20 sm:py-24">
      <div className="container-page">
        <SectionHeading
          eyebrow="The reality"
          title="IT Problems Don't Wait for the Perfect Time."
          subtitle="Network outages, computer failures, cybersecurity threats and data loss can interrupt learning, productivity and business operations."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {problems.map(({ icon: Icon, title, text }, i) => (
            <Reveal key={title} delay={i * 80}>
              <article className="surface-card surface-card-hover h-full p-6">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-destructive/12 text-destructive">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="mt-5 text-lg font-bold">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <div className="mt-12 grid gap-6 rounded-2xl border border-primary/25 bg-primary/8 p-7 sm:p-9 lg:grid-cols-[1.4fr_auto] lg:items-center">
            <div>
              <h3 className="text-xl font-bold sm:text-2xl">
                MS-TECH Solutions helps you move from reactive IT support to proactive technology
                management.
              </h3>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <div className="rounded-xl border border-border bg-background/50 p-4">
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-destructive">
                    Reactive IT
                  </p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Problem → Downtime → Emergency → Cost
                  </p>
                </div>
                <div className="rounded-xl border border-primary/40 bg-primary/12 p-4">
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-primary-glow">
                    Proactive IT
                  </p>
                  <p className="mt-2 text-sm text-foreground/85">
                    Assessment → Identify Risk → Prevent → Maintain → Support
                  </p>
                </div>
              </div>
            </div>
            <Button asChild variant="cta" size="lg" className="w-full lg:w-auto">
              <SectionLink section="assessment">
                Assess My IT Risk
                <ArrowRight className="h-4 w-4" />
              </SectionLink>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
