import { createFileRoute, Link } from "@tanstack/react-router";

import { AnnouncementBar } from "@/components/site/AnnouncementBar";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { FloatingWhatsAppButton } from "@/components/site/FloatingWhatsAppButton";
import { COMPANY_NAME, EMAIL, PHONE_DISPLAY, PHONE_E164 } from "@/config/site";

const SITE_URL = "https://ms-techsolutions.lovable.app";
const TITLE = "Terms & Conditions | MS-TECH Solutions";
const DESCRIPTION =
  "Terms and conditions for using the MS-TECH Solutions website and for our IT support, cybersecurity, backup and network services in South Africa.";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE_URL}/terms` },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/terms` }],
  }),
  component: TermsPage,
});

type SectionProps = { title: string; children: React.ReactNode };

function Section({ title, children }: SectionProps) {
  return (
    <section className="mt-10">
      <h2 className="font-display text-xl font-bold text-foreground sm:text-2xl">{title}</h2>
      <div className="mt-3 space-y-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
        {children}
      </div>
    </section>
  );
}

function TermsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <AnnouncementBar />
      <Navbar />
      <main className="py-16 lg:py-24">
        <div className="container-page">
          <div className="mx-auto max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary-glow">
              Legal
            </p>
            <h1 className="mt-3 font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
              Terms &amp; Conditions
            </h1>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
              These terms explain the basis on which {COMPANY_NAME} provides this website and its IT
              support services. By using this website or requesting our services, you agree to these
              terms as they apply to you.
            </p>
            <p className="mt-4 rounded-xl border border-primary/30 bg-primary/10 p-4 text-sm leading-relaxed text-foreground/90">
              This document is provided as a general starting point and should be reviewed and
              approved by the business owner and, where appropriate, a legal adviser before being
              treated as final legal terms.
            </p>

            <Section title="1. Website use">
              <p>
                You may use this website for lawful purposes only, including learning about our
                services and contacting us. You agree not to attempt to disrupt, misuse or gain
                unauthorised access to the website or any related systems.
              </p>
            </Section>

            <Section title="2. IT support services">
              <p>
                We provide IT support, cybersecurity, backup and network services to schools,
                businesses, offices and organisations. The specific work we carry out for you is
                described in the quotation, service description or written agreement we confirm with
                you before work begins.
              </p>
            </Section>

            <Section title="3. On-demand support">
              <p>
                On-demand (ad-hoc) support is provided on a per-request basis, subject to our
                availability. Response times for on-demand work are indicative and are not
                guaranteed unless we agree otherwise in writing.
              </p>
            </Section>

            <Section title="4. Managed IT support">
              <p>
                Managed support is provided on an ongoing basis for an agreed scope of devices,
                users or sites. The included services, review cycles and any agreed response targets
                are set out in your service agreement. Work outside that scope may be quoted
                separately.
              </p>
            </Section>

            <Section title="5. Free IT Risk Assessment">
              <p>
                The free IT Risk Assessment is an introductory, high-level review of your technology
                environment offered at no cost and with no obligation to purchase. It is intended to
                highlight visible risks and practical recommendations, and is not a formal audit,
                certification or exhaustive security test.
              </p>
            </Section>

            <Section title="6. Booking requests">
              <p>
                Submitting a booking, assessment or support request through this website, email or
                WhatsApp is a request only. A booking is confirmed once we have replied and agreed a
                date and time with you.
              </p>
            </Section>

            <Section title="7. Estimates and quotations">
              <p>
                Estimates are provided in good faith based on the information available at the time.
                Where additional faults, hardware requirements or complexity are discovered, we will
                discuss this with you and, where needed, provide a revised quotation before
                continuing.
              </p>
            </Section>

            <Section title="8. Payment">
              <p>
                Payment terms, rates and invoicing arrangements are confirmed in your quotation or
                service agreement. Unless agreed otherwise, invoices are payable by the due date
                stated on the invoice. Hardware, software licences and third-party subscriptions are
                charged as quoted.
              </p>
            </Section>

            <Section title="9. Scope of services">
              <p>
                Our responsibility is limited to the services we have agreed to provide. We rely on
                you to give us reasonable access to premises, systems and information, and to hold
                the necessary rights and licences for the software and equipment we support.
              </p>
            </Section>

            <Section title="10. Third-party services">
              <p>
                Some solutions rely on third-party products and services such as internet
                connectivity, hardware manufacturers, software vendors and cloud or backup
                providers. Those services are governed by their own terms, and we do not control
                their availability, pricing or performance.
              </p>
            </Section>

            <Section title="11. Intellectual property">
              <p>
                The content, branding and materials on this website belong to {COMPANY_NAME} or its
                licensors and may not be copied or reused for commercial purposes without our
                permission. Documents and checklists we make available may be used within your own
                organisation.
              </p>
            </Section>

            <Section title="12. Website information">
              <p>
                Information on this website is provided for general guidance and may change without
                notice. It is not intended as specific technical, security or legal advice for your
                environment. Please contact us so we can advise on your particular situation.
              </p>
            </Section>

            <Section title="13. Limitation of liability">
              <p>
                To the extent permitted by law, {COMPANY_NAME} is not liable for indirect or
                consequential loss, including loss of profits, revenue or data, arising from use of
                this website or from services provided, except where such loss results from our
                gross negligence or wilful misconduct. Nothing in these terms limits rights you have
                under South African consumer protection law.
              </p>
            </Section>

            <Section title="14. Cancellation and rescheduling">
              <p>
                If you need to cancel or reschedule an appointment, please let us know as early as
                possible so we can offer the slot to another client. Where a site visit is cancelled
                at short notice or a technician has already been dispatched, a call-out or
                cancellation fee may apply if this was agreed in advance.
              </p>
            </Section>

            <Section title="15. Privacy">
              <p>
                Personal information submitted through this website is handled as described in our{" "}
                <Link to="/privacy" className="text-primary-glow hover:underline">
                  Privacy Policy
                </Link>
                .
              </p>
            </Section>

            <Section title="16. Changes to these terms">
              <p>
                We may update these terms from time to time so that they continue to reflect our
                services and legal requirements. The version published on this website at the time
                you use it is the version that applies.
              </p>
            </Section>

            <Section title="17. Contact us">
              <p>For any questions about these terms, please contact us:</p>
              <ul className="space-y-1.5">
                <li>Company: {COMPANY_NAME}</li>
                <li>
                  Phone / WhatsApp:{" "}
                  <a href={`tel:${PHONE_E164}`} className="text-primary-glow hover:underline">
                    {PHONE_DISPLAY}
                  </a>
                </li>
                <li>
                  Email:{" "}
                  <a href={`mailto:${EMAIL}`} className="text-primary-glow hover:underline">
                    {EMAIL}
                  </a>
                </li>
              </ul>
            </Section>

            <div className="mt-12">
              <Link
                to="/"
                className="text-sm font-semibold text-primary-glow transition-colors hover:text-foreground"
              >
                ← Back to home
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <FloatingWhatsAppButton />
    </div>
  );
}
