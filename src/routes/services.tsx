import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero, PageLayout } from "@/components/site/PageLayout";
import { Services } from "@/components/site/Services";
import { Pricing } from "@/components/site/Pricing";
import { CtaBand } from "@/components/site/CtaBand";
import { COMPANY_NAME } from "@/config/site";

const URL = "https://mstechsolutions.co.za/services";
const TITLE = "IT Support Services | MS-TECH Solutions";
const DESCRIPTION =
  "Managed IT support, on-demand technical help, cybersecurity, backup and data protection, network and infrastructure support, and free IT risk assessments in South Africa.";

export const Route = createFileRoute("/services")({
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
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <PageLayout>
      <PageHero
        eyebrow="IT Support & Services"
        title={
          <>
            IT Support Built Around <span className="text-gradient">Your Organisation</span>
          </>
        }
        subtitle="Practical, professional IT services for schools, small businesses, offices and organisations across South Africa — remote and on-site."
      >
        <Button asChild variant="cta" size="lg">
          <Link to="/risk-assessment">
            Start with a Free IT Risk Assessment
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </Button>
        <Button asChild variant="outlineLight" size="lg">
          <Link to="/contact">Request IT Support</Link>
        </Button>
      </PageHero>

      <Services />
      <Pricing />

      <CtaBand
        title="Need help with your IT?"
        subtitle="Tell us what is going wrong and we will recommend the right level of support — no obligation."
        primaryLabel="Contact MS-TECH"
        primaryTo="/contact"
        secondaryLabel="Book a Free IT Risk Assessment"
        secondaryTo="/risk-assessment"
      />
    </PageLayout>
  );
}
