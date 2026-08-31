import { GraduationCap, Building2, Server, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { SectionLink } from "./SectionLink";

const audiences = [
  {
    icon: GraduationCap,
    title: "Schools & educational institutions",
    points: [
      "Computer lab setup, maintenance and support",
      "Staff and admin device management",
      "Network, Wi-Fi and internet stability",
      "Data backup and safe learner information handling",
      "Filtering and basic cybersecurity awareness",
    ],
  },
  {
    icon: Building2,
    title: "Small businesses & offices",
    points: [
      "Day-to-day IT support for staff",
      "Email, file sharing and cloud tools",
      "Printer, network and hardware troubleshooting",
      "Security, antivirus and patching",
      "Predictable monthly IT management",
    ],
  },
  {
    icon: Users,
    title: "Organisations & NPOs",
    points: [
      "Affordable, right-sized IT support",
      "Remote-first assistance to keep costs low",
      "Backup and disaster-recovery planning",
      "Vendor and hardware procurement advice",
      "Documentation and IT policy guidance",
    ],
  },
  {
    icon: Server,
    title: "Infrastructure projects",
    points: [
      "Network and Wi-Fi design and rollout",
      "Server, NAS and storage configuration",
      "Structured cabling coordination",
      "Workstation and lab deployments",
      "Migrations and upgrades with minimal downtime",
    ],
  },
];

export function Solutions() {
  return (
    <section id="solutions" className="relative py-20 lg:py-28">
      <div className="container-page">
        <SectionHeading
          eyebrow="Who we help"
          title={
            <>
              Solutions built for <span className="text-gradient">schools</span> and growing
              organisations
            </>
          }
          subtitle="Technology should support teaching, learning and daily operations — not interrupt them. We tailor support to the way your team actually works."
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {audiences.map(({ icon: Icon, title, points }, i) => (
            <Reveal key={title} delay={i * 80}>
              <article className="surface-card surface-card-hover h-full p-7">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-primary/15 text-primary-glow">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="mt-5 font-display text-xl font-bold">{title}</h3>
                <ul className="mt-4 space-y-2.5 text-sm leading-relaxed text-muted-foreground">
                  {points.map((p) => (
                    <li key={p} className="flex gap-2.5">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary-glow" />
                      {p}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120} className="mt-10 flex flex-wrap gap-3">
          <Button asChild variant="cta" size="lg">
            <SectionLink section="booking">Book a FREE IT Risk Assessment</SectionLink>
          </Button>
          <Button asChild variant="outlineLight" size="lg">
            <SectionLink section="contact">Talk to us about your school</SectionLink>
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
