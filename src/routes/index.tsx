import { createFileRoute } from "@tanstack/react-router";

import { AnnouncementBar } from "@/components/site/AnnouncementBar";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { ProblemSection } from "@/components/site/ProblemSection";
import { Services } from "@/components/site/Services";
import { Solutions } from "@/components/site/Solutions";
import { Assessment } from "@/components/site/Assessment";
import { Booking } from "@/components/site/Booking";
import { Pricing } from "@/components/site/Pricing";
import { WhyUs } from "@/components/site/WhyUs";
import { HowItWorks } from "@/components/site/HowItWorks";
import { About } from "@/components/site/About";
import { Faq, FAQS } from "@/components/site/Faq";
import { Resources } from "@/components/site/Resources";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { FloatingWhatsAppButton } from "@/components/site/FloatingWhatsAppButton";
import { StickyMobileCta } from "@/components/site/StickyMobileCta";
import { COMPANY_NAME, EMAIL, PHONE_E164 } from "@/config/site";

const SITE_URL = "https://ms-techsolutions.lovable.app";
const TITLE = "MS-TECH Solutions | Professional IT Support & Services";
const DESCRIPTION =
  "MS-TECH Solutions provides professional IT support, cybersecurity, network support, backup management and IT risk assessments for schools and organisations in South Africa.";

const localBusinessLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: COMPANY_NAME,
  description: DESCRIPTION,
  url: SITE_URL,
  telephone: PHONE_E164,
  email: EMAIL,
  areaServed: { "@type": "Country", name: "South Africa" },
};

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: COMPANY_NAME },
      { property: "og:url", content: SITE_URL },
      { property: "og:locale", content: "en_ZA" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: SITE_URL }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(localBusinessLd) },
      { type: "application/ld+json", children: JSON.stringify(faqLd) },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <AnnouncementBar />
      <Navbar />
      <main>
        <Hero />
        <ProblemSection />
        <Services />
        <Solutions />
        <Assessment />
        <Booking />
        <Pricing />
        <WhyUs />
        <HowItWorks />
        <About />
        <Faq />
        <Resources />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsAppButton />
      <StickyMobileCta />
    </div>
  );
}
