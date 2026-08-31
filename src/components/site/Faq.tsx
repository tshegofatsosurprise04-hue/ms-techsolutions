import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export const FAQS = [
  {
    q: "Do you support schools specifically?",
    a: "Yes. Schools are a core focus. We support computer labs, staff and admin devices, networks and Wi-Fi, learner data backups and basic cybersecurity, and we schedule work around your timetable.",
  },
  {
    q: "Do you offer remote support or only on-site?",
    a: "Both. Most issues are resolved remotely for speed, and we travel on-site when hardware, network or infrastructure work is required.",
  },
  {
    q: "What does the free IT Risk Assessment include?",
    a: "We review your current setup, network and Wi-Fi, backups and basic security, then give you a short written report with practical recommendations. There is no cost and no obligation.",
  },
  {
    q: "How much does IT support cost?",
    a: "Pricing depends on the size of your environment and the level of support you need. We quote after the free assessment so the recommendation matches your actual requirements.",
  },
  {
    q: "Do you work with small businesses too?",
    a: "Absolutely. Small businesses, offices and non-profits make up a large part of our client base.",
  },
  {
    q: "How quickly do you respond?",
    a: "We usually respond within one business day, and managed-support clients receive priority response times.",
  },
];

export function Faq() {
  return (
    <section id="faq" className="relative py-20 lg:py-28">
      <div className="container-page">
        <SectionHeading
          align="center"
          eyebrow="FAQ"
          title={
            <>
              Frequently asked <span className="text-gradient">questions</span>
            </>
          }
        />
        <Reveal delay={80} className="mx-auto mt-10 max-w-3xl">
          <Accordion type="single" collapsible className="space-y-3">
            {FAQS.map((item, i) => (
              <AccordionItem
                key={item.q}
                value={`item-${i}`}
                className="surface-card border-b px-6"
              >
                <AccordionTrigger className="text-left font-display text-base font-bold hover:no-underline">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}
