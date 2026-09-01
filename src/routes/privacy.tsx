import { createFileRoute, Link } from "@tanstack/react-router";

import { AnnouncementBar } from "@/components/site/AnnouncementBar";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { FloatingWhatsAppButton } from "@/components/site/FloatingWhatsAppButton";
import { COMPANY_NAME, EMAIL, PHONE_DISPLAY, PHONE_E164 } from "@/config/site";

const SITE_URL = "https://ms-techsolutions.lovable.app";
const TITLE = "Privacy Policy | MS-TECH Solutions";
const DESCRIPTION =
  "How MS-TECH Solutions collects, uses and protects personal information submitted through our website, booking forms, email and WhatsApp.";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE_URL}/privacy` },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/privacy` }],
  }),
  component: PrivacyPage,
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

function PrivacyPage() {
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
              Privacy Policy
            </h1>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
              This policy explains how {COMPANY_NAME} collects, uses and protects personal
              information provided through this website, our contact and booking forms, email,
              telephone and WhatsApp. It is written to align with the principles of South
              Africa&apos;s Protection of Personal Information Act (POPIA).
            </p>
            <p className="mt-4 rounded-xl border border-primary/30 bg-primary/10 p-4 text-sm leading-relaxed text-foreground/90">
              This document is provided as a general starting point and should be reviewed and
              approved by the business owner and, where appropriate, a legal adviser before being
              relied upon.
            </p>

            <Section title="1. Information we collect">
              <p>
                We only collect information you choose to give us. Through our website forms and
                enquiries this typically includes:
              </p>
              <ul className="list-disc space-y-1.5 pl-5">
                <li>Your name and the name of your school, business or organisation</li>
                <li>Organisation type and the service you are interested in</li>
                <li>Email address and phone or WhatsApp number</li>
                <li>Any details you include in your message about your IT environment</li>
              </ul>
              <p>
                When you visit the website, our hosting provider may also process standard technical
                information such as IP address, browser type and pages visited, for security and
                performance purposes.
              </p>
            </Section>

            <Section title="2. Booking requests and contact information">
              <p>
                When you request a free IT Risk Assessment, IT support or a consultation, the
                details you submit are used to contact you, understand your requirements, schedule
                the assessment or support work, and prepare recommendations or a quotation.
              </p>
              <p>
                Our website booking form does not store your details on this website. Submitting the
                form opens either WhatsApp or your email application with a pre-filled message, so
                the information is sent directly to us through the channel you choose.
              </p>
            </Section>

            <Section title="3. WhatsApp communication">
              <p>
                If you contact us via WhatsApp, your message and phone number are processed by
                WhatsApp in accordance with its own privacy terms. We use WhatsApp conversations
                only to respond to your enquiry and to coordinate support or assessment work. Please
                avoid sending passwords or other highly sensitive information over WhatsApp.
              </p>
            </Section>

            <Section title="4. How we use your information">
              <ul className="list-disc space-y-1.5 pl-5">
                <li>To respond to enquiries, support requests and consultation requests</li>
                <li>To arrange and carry out a free IT Risk Assessment</li>
                <li>To provide quotations and deliver agreed IT services</li>
                <li>To keep records of work performed and communications with clients</li>
                <li>To comply with legal or regulatory obligations</li>
              </ul>
              <p>
                We do not sell your personal information, and we do not use it for unrelated
                marketing without your consent.
              </p>
            </Section>

            <Section title="5. Data security">
              <p>
                We apply reasonable technical and organisational measures to protect the information
                we hold, including restricted access to devices and accounts, protected credentials
                and secure communication channels where practical. No method of transmission or
                storage is completely secure, so we cannot guarantee absolute security, but we take
                the protection of client information seriously and act promptly if an issue arises.
              </p>
              <p>
                Where we access client systems while providing support, we do so only to the extent
                needed to perform the agreed work and treat any information encountered as
                confidential.
              </p>
            </Section>

            <Section title="6. Third-party services">
              <p>
                We rely on a limited number of third-party providers to operate this website and
                communicate with you, which may include our website hosting provider, email service,
                and WhatsApp. These providers process information under their own privacy terms. We
                share information with them only where necessary to provide our services, and we do
                not authorise them to use it for their own unrelated purposes.
              </p>
            </Section>

            <Section title="7. Retention">
              <p>
                We keep enquiry and client information only for as long as it is needed for the
                purpose it was collected, to maintain reasonable business records, or to meet legal
                requirements. When it is no longer needed, it is deleted or securely disposed of.
              </p>
            </Section>

            <Section title="8. Your rights">
              <p>Subject to applicable law, including POPIA, you may:</p>
              <ul className="list-disc space-y-1.5 pl-5">
                <li>Request access to the personal information we hold about you</li>
                <li>Request correction of information that is inaccurate or incomplete</li>
                <li>Request deletion of information we no longer need to keep</li>
                <li>Object to the processing of your information in certain circumstances</li>
                <li>Withdraw consent where processing is based on consent</li>
                <li>Lodge a complaint with the Information Regulator of South Africa</li>
              </ul>
              <p>To exercise any of these rights, contact us using the details below.</p>
            </Section>

            <Section title="9. POPIA considerations">
              <p>
                {COMPANY_NAME} processes personal information lawfully, for a clear purpose, and
                only to the extent required to deliver the services requested. Where we process
                information on behalf of a client — for example, while supporting systems that
                contain staff or learner data — we act as an operator under POPIA and process that
                information only on the client&apos;s instructions and under appropriate
                confidentiality arrangements.
              </p>
            </Section>

            <Section title="10. Changes to this policy">
              <p>
                We may update this policy from time to time to reflect changes in our services or
                legal requirements. The latest version will always be published on this page.
              </p>
            </Section>

            <Section title="11. Contact us">
              <p>
                For any privacy questions or requests relating to your personal information, please
                contact {COMPANY_NAME}:
              </p>
              <ul className="space-y-1.5">
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
