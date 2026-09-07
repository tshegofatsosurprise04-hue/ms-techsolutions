import { createFileRoute } from "@tanstack/react-router";
import { Handshake, Lightbulb, ShieldCheck, Timer, GraduationCap, Wrench } from "lucide-react";
import { PageHero, PageLayout } from "@/components/site/PageLayout";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Reveal } from "@/components/site/Reveal";
import { CtaBand } from "@/components/site/CtaBand";
import { COMPANY_NAME } from "@/config/site";

const URL = "https://mstechsolutions.co.za/about";
const TITLE = "About MS-TECH Solutions | IT Support South Africa";
const DESCRIPTION =
  "MS-TECH Solutions provides proactive IT support, cybersecurity, backups and network support for schools, offices and organisations across South Africa.";

const values = [
  { icon: ShieldCheck, title: "Reliability", text: "Systems that stay up, and support that shows up when you need it." },
  { icon: Timer, title: "Responsiveness", text: "Fast, clear communication the moment something breaks." },
  { icon: Lightbulb, title: "Prevention", text: "We look for problems before they interrupt your day." },
  { icon: Handshake, title: "Partnership", text: "We work as your IT department, not a once-off vendor." },
  { icon: Wrench, title: "Professionalism", text: "Careful, methodical work and honest advice on every job." },
  { icon: GraduationCap, title: "Customer focus", text: "Plain-language guidance for every person we support." },
];

export const Route = createFileRoute("/about")({
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
  component: AboutPage,
});

function AboutPage() {
  return (
    <PageLayout>
      <PageHero
        eyebrow="About us"
        title={
          <>
            Technology Should <span className="text-gradient">Work For You.</span>
          </>
        }
        subtitle="MS-TECH Solutions is an IT support and services provider working with schools, small businesses, offices and organisations across South Africa — remote and on-site."
      />

      <section className="relative py-16 lg:py-24">
        <div className="container-page grid items-start gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Who we are"
              title={
                <>
                  Dependable IT support without an{" "}
                  <span className="text-gradient">in-house team</span>
                </>
              }
              subtitle="We manage the technology so your people can focus on their work."
            />
            <Reveal delay={80} className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
              <p>
                MS-TECH Solutions provides day-to-day technical support, managed IT support,
                cybersecurity, backup and data protection, network and infrastructure support, and
                free IT risk assessments. Whether you need help right now or ongoing cover, we work
                to the same standard.
              </p>
              <p>
                Our approach is proactive. Instead of waiting for something to break, we monitor,
                maintain and review the systems you rely on. Preventative support costs far less
                than an emergency, and it keeps disruption away from the people doing the work.
              </p>
              <p>
                We pay particular attention to schools and educational institutions, where downtime
                affects lessons, admin and exams. We also support small businesses, offices and
                organisations that need the same level of care.
              </p>
              <p>
                Every recommendation is explained in plain language, so decisions about your
                technology are always yours to make with confidence.
              </p>
            </Reveal>
          </div>

          <Reveal delay={120}>
            <div className="surface-card p-8">
              <h2 className="font-display text-xl font-bold">Our commitment</h2>
              <ul className="mt-6 space-y-4 text-sm leading-relaxed text-muted-foreground">
                <li>Reduce downtime and technology-related disruption.</li>
                <li>Respond quickly and communicate clearly when problems happen.</li>
                <li>Keep data backed up, protected and recoverable.</li>
                <li>Review your environment regularly instead of only when it fails.</li>
                <li>Never use jargon where a plain explanation will do.</li>
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="relative pb-16 lg:pb-24">
        <div className="container-page">
          <SectionHeading
            align="center"
            eyebrow="Our values"
            title={
              <>
                What you can <span className="text-gradient">expect from us</span>
              </>
            }
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {values.map(({ icon: Icon, title, text }, i) => (
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

      <CtaBand
        title="Work With MS-TECH"
        subtitle="Tell us what is going wrong, or start with a free review of your current setup."
        primaryLabel="Work With MS-TECH"
        primaryTo="/contact"
        secondaryLabel="Book a Free IT Risk Assessment"
        secondaryTo="/risk-assessment"
      />
    </PageLayout>
  );
}
