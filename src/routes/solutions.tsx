import { createFileRoute, Link } from "@tanstack/react-router";
import {
  AlertTriangle,
  ArrowRight,
  DatabaseBackup,
  KeyRound,
  MonitorSmartphone,
  ShieldCheck,
  Timer,
  Wifi,
  Wrench,
  CalendarClock,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero, PageLayout } from "@/components/site/PageLayout";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Reveal } from "@/components/site/Reveal";
import { Solutions } from "@/components/site/Solutions";
import { CtaBand } from "@/components/site/CtaBand";
import { COMPANY_NAME } from "@/config/site";

const URL = "https://mstechsolutions.co.za/solutions";
const TITLE = "IT Solutions for Schools & Organisations | MS-TECH Solutions";
const DESCRIPTION =
  "Technology solutions for schools, small businesses, offices and organisations in South Africa — proactive IT support that reduces downtime, protects data and keeps people working.";

const schoolProblems = [
  {
    icon: MonitorSmartphone,
    title: "Computer and device issues",
    text: "Classroom, lab and admin devices that are slow, unreliable or out of action when they are needed most.",
  },
  {
    icon: Wifi,
    title: "Network and internet problems",
    text: "Weak Wi-Fi coverage, dropped connections and unstable networks that interrupt lessons and admin work.",
  },
  {
    icon: Timer,
    title: "Downtime during important activities",
    text: "Technology failing during exams, reporting periods, registration or events, when there is no time to spare.",
  },
  {
    icon: ShieldCheck,
    title: "Cybersecurity risks",
    text: "Weak passwords, unprotected devices and no clear security practices leave school systems exposed.",
  },
  {
    icon: DatabaseBackup,
    title: "Backup and data protection",
    text: "Learner records, staff files and admin data that are not backed up, or backups nobody has ever tested.",
  },
  {
    icon: KeyRound,
    title: "User access problems",
    text: "Shared logins, forgotten passwords and unclear access rights that make support harder and risk data.",
  },
  {
    icon: Wrench,
    title: "Reactive IT maintenance",
    text: "Technology only gets attention once it breaks, which usually costs more time and money than prevention.",
  },
  {
    icon: CalendarClock,
    title: "No preventative IT planning",
    text: "No maintenance schedule, no replacement plan and no clear view of what needs attention next.",
  },
];

export const Route = createFileRoute("/solutions")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: COMPANY_NAME },
      { property: "og:url", content: URL },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: URL }],
  }),
  component: SolutionsPage,
});

function SolutionsPage() {
  return (
    <PageLayout>
      <PageHero
        eyebrow="Solutions"
        title={
          <>
            Technology Solutions for <span className="text-gradient">Organisations</span>
          </>
        }
        subtitle="Schools, small businesses, offices, organisations and educational institutions each rely on technology differently. We shape our support around how you actually work."
      >
        <Button asChild variant="cta" size="lg">
          <Link to="/risk-assessment">
            Book a Free IT Risk Assessment
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </Button>
        <Button asChild variant="outlineLight" size="lg">
          <Link to="/services">Explore Our Services</Link>
        </Button>
      </PageHero>

      <section className="relative py-20 lg:py-24">
        <div className="container-page">
          <SectionHeading
            eyebrow="Primary focus · Schools"
            title={
              <>
                Common IT problems in <span className="text-gradient">schools</span>
              </>
            }
            subtitle="These are the issues we are asked about most often by schools and educational institutions."
          />

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {schoolProblems.map(({ icon: Icon, title, text }, i) => (
              <Reveal key={title} delay={(i % 4) * 80}>
                <article className="surface-card surface-card-hover h-full p-6">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-primary/15 text-primary-glow">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h3 className="mt-4 font-display text-base font-bold">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal delay={120} className="mt-10">
            <div className="surface-card flex flex-col gap-5 p-7 sm:p-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <p className="flex items-center gap-2 font-display text-lg font-bold">
                  <AlertTriangle className="h-5 w-5 shrink-0 text-primary-glow" aria-hidden="true" />
                  A proactive partner, not just a technician
                </p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Waiting for something to break is the most expensive way to run IT. We monitor,
                  maintain and plan ahead so that fewer problems reach your staff and learners in
                  the first place.
                </p>
              </div>
              <Button asChild variant="cta" size="lg" className="shrink-0">
                <Link to="/risk-assessment">Book a Free IT Risk Assessment</Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      <Solutions />

      <CtaBand
        title="Let's build the right IT support for your organisation"
        subtitle="Start with a free assessment and we will show you exactly where your technology stands."
        primaryLabel="Book a Free IT Risk Assessment"
        primaryTo="/risk-assessment"
        secondaryLabel="Contact MS-TECH"
        secondaryTo="/contact"
      />
    </PageLayout>
  );
}
