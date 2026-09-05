import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  ClipboardCheck,
  DatabaseBackup,
  Headset,
  LifeBuoy,
  Network,
  ShieldCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const items = [
  { icon: Headset, title: "Managed IT Support", text: "Monitored, maintained and proactively supported systems." },
  { icon: LifeBuoy, title: "On-Demand IT Support", text: "Professional help when you need it, no contract required." },
  { icon: ShieldCheck, title: "Cybersecurity", text: "Practical security controls that reduce everyday risk." },
  { icon: DatabaseBackup, title: "Backup & Data Protection", text: "Backup planning, monitoring and recovery guidance." },
  { icon: Network, title: "Network & Infrastructure", text: "Stable networks, Wi-Fi and infrastructure you can rely on." },
  { icon: ClipboardCheck, title: "IT Risk Assessment", text: "A free review that shows where your IT is exposed." },
];

export function HomeServicesOverview() {
  return (
    <section className="relative border-t border-border py-20 sm:py-24">
      <div className="container-page">
        <SectionHeading
          eyebrow="Services"
          title="IT Support Built Around Your Organisation"
          subtitle="From everyday technical issues to proactive IT management, we help keep your technology working."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map(({ icon: Icon, title, text }, i) => (
            <Reveal key={title} delay={(i % 3) * 90}>
              <article className="surface-card surface-card-hover h-full p-6">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-primary/15 text-primary-glow">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="mt-4 font-display text-lg font-bold">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120} className="mt-10 flex flex-wrap gap-3">
          <Button asChild variant="cta" size="lg">
            <Link to="/services">
              Explore Our Services
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
          <Button asChild variant="outlineLight" size="lg">
            <Link to="/contact">Request IT Support</Link>
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
