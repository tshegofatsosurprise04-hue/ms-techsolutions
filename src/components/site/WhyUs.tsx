import { Clock, GraduationCap, MapPin, MessagesSquare, ShieldCheck, Wallet } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const reasons = [
  {
    icon: GraduationCap,
    title: "School-focused experience",
    text: "We understand computer labs, staff devices, learner data and timetable-friendly scheduling.",
  },
  {
    icon: Clock,
    title: "Fast, human response",
    text: "We usually respond within one business day, with priority response for managed clients.",
  },
  {
    icon: ShieldCheck,
    title: "Prevention first",
    text: "Monitoring, backups and security checks that stop problems before they cause downtime.",
  },
  {
    icon: MessagesSquare,
    title: "Plain-language support",
    text: "Clear explanations and honest recommendations — never unnecessary technical jargon.",
  },
  {
    icon: Wallet,
    title: "Right-sized for your budget",
    text: "Support scoped to your actual environment, whether that's five devices or five hundred.",
  },
  {
    icon: MapPin,
    title: "Remote & on-site",
    text: "Quick remote fixes where possible, on-site attention where hardware or networks need us.",
  },
];

export function WhyUs() {
  return (
    <section id="why-us" className="relative border-t border-border py-20 lg:py-28">
      <div className="container-page">
        <SectionHeading
          align="center"
          eyebrow="Why MS-TECH"
          title={
            <>
              Why organisations choose <span className="text-gradient">MS-TECH Solutions</span>
            </>
          }
          subtitle="Dependable IT support built around how schools, offices and small businesses actually work."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map(({ icon: Icon, title, text }, i) => (
            <Reveal key={title} delay={i * 70}>
              <div className="surface-card surface-card-hover h-full p-6">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-primary/15 text-primary-glow">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="mt-4 font-display text-lg font-bold">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
