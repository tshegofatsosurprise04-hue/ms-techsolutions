import { Handshake, Lightbulb, ShieldCheck, Timer } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const values = [
  { icon: ShieldCheck, title: "Reliability", text: "Systems that stay up, and support that shows up." },
  { icon: Timer, title: "Responsiveness", text: "Fast, clear communication when something breaks." },
  { icon: Lightbulb, title: "Practical advice", text: "Plain-language guidance, never technical jargon." },
  { icon: Handshake, title: "Partnership", text: "We work as your IT department, not a once-off vendor." },
];

export function About() {
  return (
    <section id="about" className="relative py-20 lg:py-28">
      <div className="container-page">
        <div className="grid items-start gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="About us"
              title={
                <>
                  Technology partners for South African{" "}
                  <span className="text-gradient">schools and organisations</span>
                </>
              }
              subtitle="MS-TECH Solutions provides professional IT support and technology services designed to keep your people productive and your data safe."
            />
            <Reveal delay={80} className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
              <p>
                We work with schools, small businesses, offices and organisations that need
                dependable IT without the cost of a full in-house team. From daily technical
                support to proactive monitoring, cybersecurity and backups, we manage the
                technology so you can focus on your work.
              </p>
              <p>
                Our approach is simple: prevent problems where possible, respond quickly when they
                happen, and always explain things in language everyone understands.
              </p>
            </Reveal>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {values.map(({ icon: Icon, title, text }, i) => (
              <Reveal key={title} delay={i * 80}>
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
      </div>
    </section>
  );
}
