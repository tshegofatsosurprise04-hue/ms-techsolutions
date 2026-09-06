import { createFileRoute } from "@tanstack/react-router";
import {
  BadgeCheck,
  DatabaseBackup,
  FileText,
  Gauge,
  KeyRound,
  ListChecks,
  Lightbulb,
  MessageCircle,
  MonitorSmartphone,
  RefreshCw,
  ShieldCheck,
  Timer,
  Wifi,
  Wrench,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero, PageLayout } from "@/components/site/PageLayout";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Reveal } from "@/components/site/Reveal";
import { Booking } from "@/components/site/Booking";
import { COMPANY_NAME, WHATSAPP_URL } from "@/config/site";

const URL = "https://mstechsolutions.co.za/risk-assessment";
const TITLE = "Free IT Risk Assessment | MS-TECH Solutions";
const DESCRIPTION =
  "Book a FREE IT Risk Assessment for your school or organisation. We review devices, networks, cybersecurity, backups, access and downtime risks, and give you a practical report.";

const areas = [
  { icon: MonitorSmartphone, title: "Computers & Devices" },
  { icon: Wifi, title: "Network & Internet" },
  { icon: ShieldCheck, title: "Cybersecurity" },
  { icon: DatabaseBackup, title: "Backup & Data Protection" },
  { icon: KeyRound, title: "User Access" },
  { icon: Wrench, title: "IT Maintenance" },
  { icon: Timer, title: "Downtime Risks" },
  { icon: RefreshCw, title: "Business Continuity" },
];

const deliverables = [
  {
    icon: ListChecks,
    title: "High-Level IT Risk Assessment",
    text: "A structured review of your current technology environment, remotely or on-site.",
  },
  {
    icon: Gauge,
    title: "Risk Score",
    text: "A simple overall rating so you can see where your organisation stands.",
  },
  {
    icon: BadgeCheck,
    title: "Priority Findings",
    text: "The issues that matter most, ranked so you know what to deal with first.",
  },
  {
    icon: Lightbulb,
    title: "Practical Recommendations",
    text: "Clear next steps in plain language — no technical jargon.",
  },
  {
    icon: FileText,
    title: "Professional IT Risk Report",
    text: "A written report you can share with management, a board or a school governing body.",
  },
];

export const Route = createFileRoute("/risk-assessment")({
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
  component: RiskAssessmentPage,
});

function RiskAssessmentPage() {
  return (
    <PageLayout>
      <PageHero
        eyebrow="Free · No obligation"
        title={
          <>
            FREE <span className="text-gradient">IT RISK ASSESSMENT</span>
          </>
        }
        subtitle="MS-TECH Solutions offers selected schools and organisations a complimentary IT Risk Assessment — a clear, practical review of how reliable and secure your technology really is."
      >
        <Button asChild variant="cta" size="lg">
          <a href="#booking">Request Free Assessment</a>
        </Button>
        <Button asChild variant="whatsapp" size="lg">
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
            Ask us on WhatsApp
          </a>
        </Button>
      </PageHero>

      <section className="relative py-20 lg:py-24">
        <div className="container-page">
          <SectionHeading
            eyebrow="What we review"
            title="Is Your IT Ready for the Unexpected?"
            subtitle="Most IT problems are predictable. The assessment looks at the areas where organisations are most often exposed."
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {areas.map(({ icon: Icon, title }, i) => (
              <Reveal key={title} delay={(i % 4) * 70}>
                <div className="surface-card surface-card-hover flex h-full items-center gap-4 p-5">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary/15 text-primary-glow">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span className="font-semibold leading-snug">{title}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative border-t border-border py-20 lg:py-24">
        <div className="container-page">
          <SectionHeading
            eyebrow="What you receive"
            title={
              <>
                A clear picture of your <span className="text-gradient">IT risk</span>
              </>
            }
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {deliverables.map(({ icon: Icon, title, text }, i) => (
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

          <Reveal delay={120} className="mt-10 grid gap-4 sm:grid-cols-2">
            <p className="rounded-xl border border-primary/30 bg-primary/10 p-5 text-sm font-semibold leading-relaxed text-foreground/90">
              No obligation to purchase IT services.
            </p>
            <p className="rounded-xl border border-border bg-surface/60 p-5 text-sm font-semibold leading-relaxed text-foreground/90">
              Limited assessment slots available.
            </p>
          </Reveal>
        </div>
      </section>

      <Booking />
    </PageLayout>
  );
}
