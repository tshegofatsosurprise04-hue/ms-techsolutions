import { Check, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { SectionLink } from "./SectionLink";

const plans = [
  {
    name: "On-Demand Support",
    tagline: "Pay only when you need us",
    features: [
      "Remote and on-site assistance",
      "Troubleshooting and repairs",
      "Software installs and setups",
      "Billed per call-out or per hour",
    ],
    highlighted: false,
  },
  {
    name: "Managed IT Care",
    tagline: "Most popular for schools & offices",
    features: [
      "Proactive monitoring and maintenance",
      "Priority response times",
      "Patch, antivirus and backup management",
      "Monthly health reporting",
      "Predictable monthly fee",
    ],
    highlighted: true,
  },
  {
    name: "Projects & Consulting",
    tagline: "Scoped per project",
    features: [
      "Network and Wi-Fi rollouts",
      "Lab and workstation deployments",
      "Migrations and upgrades",
      "IT strategy and advisory",
    ],
    highlighted: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="relative py-20 lg:py-28">
      <div className="container-page">
        <SectionHeading
          align="center"
          eyebrow="Packages"
          title={
            <>
              Simple, <span className="text-gradient">tailored</span> support packages
            </>
          }
          subtitle="Every environment is different, so pricing is quoted after your free assessment. No lock-in surprises, no jargon."
        />

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {plans.map((plan, i) => (
            <Reveal key={plan.name} delay={i * 90}>
              <article
                className={cn(
                  "surface-card surface-card-hover flex h-full flex-col p-7",
                  plan.highlighted && "border-primary/50 shadow-[0_30px_80px_-40px_rgba(37,99,235,0.75)]",
                )}
              >
                {plan.highlighted && (
                  <span className="eyebrow mb-4">
                    <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
                    Recommended
                  </span>
                )}
                <h3 className="font-display text-xl font-bold">{plan.name}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground">{plan.tagline}</p>
                <p className="mt-5 font-display text-2xl font-extrabold text-foreground">
                  Custom quote
                </p>
                <ul className="mt-6 flex-1 space-y-3 text-sm leading-relaxed text-muted-foreground">
                  {plan.features.map((f) => (
                    <li key={f} className="flex gap-2.5">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary-glow" aria-hidden="true" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Button
                  asChild
                  variant={plan.highlighted ? "cta" : "outlineLight"}
                  size="lg"
                  className="mt-7 w-full"
                >
                  <SectionLink section="booking">Request a quote</SectionLink>
                </Button>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
