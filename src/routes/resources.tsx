import { createFileRoute } from "@tanstack/react-router";
import { FileText } from "lucide-react";
import { PageHero, PageLayout } from "@/components/site/PageLayout";
import { Reveal } from "@/components/site/Reveal";
import { CtaBand } from "@/components/site/CtaBand";
import { COMPANY_NAME } from "@/config/site";

const URL = "https://mstechsolutions.co.za/resources";
const TITLE = "IT Resources & Checklists | MS-TECH Solutions";
const DESCRIPTION =
  "Free IT checklists from MS-TECH Solutions for schools, offices and organisations — IT readiness, IT risk assessment and basic cybersecurity. Coming soon.";

const resources = [
  {
    title: "School IT Readiness Checklist",
    description:
      "Helps a school review classroom and admin devices, network coverage, printing, accounts and exam-period readiness before term starts.",
  },
  {
    title: "IT Risk Assessment Checklist",
    description:
      "Helps any organisation identify the most common IT risks — ageing hardware, single points of failure, missing backups and unclear support arrangements.",
  },
  {
    title: "Basic Cybersecurity Checklist",
    description:
      "Simple security checks covering passwords, updates, antivirus, email safety, user access and what to do if something looks suspicious.",
  },
];

export const Route = createFileRoute("/resources")({
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
  component: ResourcesPage,
});

function ResourcesPage() {
  return (
    <PageLayout>
      <PageHero
        eyebrow="Free resources"
        title={
          <>
            Practical <span className="text-gradient">IT checklists</span> for your organisation
          </>
        }
        subtitle="Straightforward guides to help schools, offices and organisations review their technology, security and backups. These downloads are being prepared and will be published here."
      />

      <section className="relative py-16 lg:py-24">
        <div className="container-page">
          <div className="grid gap-5 md:grid-cols-3">
            {resources.map((resource, i) => (
              <Reveal key={resource.title} delay={i * 90}>
                <article className="surface-card surface-card-hover flex h-full flex-col p-7">
                  <div className="flex items-start justify-between gap-3">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary/15 text-primary-glow">
                      <FileText className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <span className="rounded-full border border-border bg-surface/70 px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                      Coming soon
                    </span>
                  </div>
                  <h2 className="mt-5 font-display text-lg font-bold">{resource.title}</h2>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {resource.description}
                  </p>
                  <p className="mt-6 rounded-xl border border-border bg-surface/50 px-4 py-3 text-center text-sm font-semibold text-muted-foreground">
                    Coming Soon
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Need help assessing your IT now?"
        subtitle="You do not have to wait for the checklists — book a free IT risk assessment and we will review your setup with you."
        primaryLabel="Book a Free IT Risk Assessment"
        primaryTo="/risk-assessment"
        secondaryLabel="Contact MS-TECH"
        secondaryTo="/contact"
      />
    </PageLayout>
  );
}
