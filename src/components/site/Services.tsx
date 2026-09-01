import {
  Check,
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
import { SectionLink } from "./SectionLink";

const services = [
  {
    icon: Headset,
    title: "Managed IT Support",
    description:
      "Proactive IT support designed to keep your systems reliable, monitored and maintained.",
    features: [
      "Helpdesk support",
      "Remote technical support",
      "User and device support",
      "System monitoring",
      "Preventative maintenance",
      "IT guidance",
    ],
    cta: "Learn More",
    section: "pricing",
  },
  {
    icon: LifeBuoy,
    title: "On-Demand IT Support",
    description:
      "Need help without committing to a monthly contract? Get professional technical assistance when you need it.",
    features: [
      "Computer troubleshooting",
      "Network troubleshooting",
      "Software issues",
      "System configuration",
      "Technical support",
      "General IT assistance",
    ],
    cta: "Request Support",
    section: "contact",
  },
  {
    icon: ShieldCheck,
    title: "Cybersecurity",
    description:
      "Reduce your exposure to common cybersecurity threats with practical security controls.",
    features: [
      "Security assessment",
      "Endpoint protection guidance",
      "Account security",
      "Basic security configuration",
      "Cybersecurity awareness",
      "Risk identification",
    ],
    cta: "Improve Security",
    section: "contact",
  },
  {
    icon: DatabaseBackup,
    title: "Backup & Data Protection",
    description:
      "Help protect important business and school data against accidental loss and technical incidents.",
    features: [
      "Backup monitoring",
      "Backup planning",
      "Data protection guidance",
      "Recovery planning",
      "Backup health checks",
    ],
    cta: "Protect My Data",
    section: "contact",
  },
  {
    icon: Network,
    title: "Network & Infrastructure",
    description: "Reliable network and technology infrastructure for productive environments.",
    features: [
      "Network troubleshooting",
      "Wi-Fi troubleshooting",
      "Infrastructure assessment",
      "Device connectivity",
      "Network performance checks",
      "IT infrastructure recommendations",
    ],
    cta: "Assess My Network",
    section: "booking",
  },
  {
    icon: ClipboardCheck,
    title: "IT Risk Assessment",
    description:
      "Identify weaknesses in your technology environment before they become expensive problems.",
    features: [
      "IT infrastructure review",
      "Cybersecurity checks",
      "Backup review",
      "Device review",
      "Network assessment",
      "Risk scoring",
      "Recommendations",
    ],
    cta: "Book FREE Assessment",
    section: "booking",
    featured: true,
  },
];

export function Services() {
  return (
    <section id="services" className="relative border-t border-border py-20 sm:py-24">
      <div className="container-page">
        <SectionHeading
          eyebrow="Services"
          title="IT Support Built Around Your Organisation"
          subtitle="From everyday technical issues to proactive IT management, we help keep your technology working."
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <Reveal key={service.title} delay={(i % 3) * 90}>
                <article
                  className={`surface-card surface-card-hover flex h-full flex-col p-7 ${
                    service.featured ? "border-primary/45 shadow-[var(--shadow-glow)]" : ""
                  }`}
                >
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-primary/15 text-primary-glow">
                    <Icon className="h-5.5 w-5.5" aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 text-xl font-bold">{service.title}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>
                  <ul className="mt-5 flex-1 space-y-2.5">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2.5 text-sm">
                        <Check
                          className="mt-0.5 h-4 w-4 shrink-0 text-primary-glow"
                          aria-hidden="true"
                        />
                        <span className="text-foreground/85">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    asChild
                    variant={service.featured ? "cta" : "outlineLight"}
                    className="mt-7 w-full"
                  >
                    <SectionLink section={service.section}>{service.cta}</SectionLink>
                  </Button>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
