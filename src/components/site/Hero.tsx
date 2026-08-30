import { ArrowRight, Headset, MapPin, MonitorSmartphone, ShieldCheck, Wifi } from "lucide-react";
import heroNetwork from "@/assets/hero-network.jpg";
import { Button } from "@/components/ui/button";
import { LogoMark } from "./Logo";
import { SectionLink } from "./SectionLink";

const pillars = [
  { icon: Headset, label: "Proactive support" },
  { icon: ShieldCheck, label: "Cybersecurity" },
  { icon: Wifi, label: "Network & Wi-Fi" },
  { icon: MonitorSmartphone, label: "Device management" },
];

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="hero-glow absolute inset-0" aria-hidden="true" />
      <div className="grid-lines absolute inset-0 opacity-40" aria-hidden="true" />
      <div
        className="absolute inset-y-0 right-0 hidden w-1/2 opacity-45 lg:block"
        aria-hidden="true"
        style={{
          backgroundImage: `linear-gradient(to right, var(--background), transparent 45%), url(${heroNetwork})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div className="container-page relative grid items-center gap-14 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:py-24">
        <div className="animate-rise max-w-2xl">
          <span className="eyebrow">
            <span className="h-1.5 w-1.5 rounded-full bg-primary-glow" />
            IT Support &amp; Services · South Africa
          </span>

          <h1 className="mt-6 text-balance text-4xl font-extrabold leading-[1.05] sm:text-5xl lg:text-6xl">
            Reliable IT. <span className="text-gradient">Less Downtime.</span> Better Business.
          </h1>

          <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-foreground/85">
            Professional IT support and technology solutions that help schools and organisations
            stay secure, productive and operational.
          </p>

          <p className="mt-4 max-w-xl text-pretty leading-relaxed text-muted-foreground">
            MS-TECH Solutions provides proactive IT support, monitoring, cybersecurity, backup
            management and on-demand technical assistance.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Button asChild variant="cta" size="xl">
              <SectionLink section="booking">
                Book a FREE IT Risk Assessment
                <ArrowRight className="h-4 w-4" />
              </SectionLink>
            </Button>
            <Button asChild variant="outlineLight" size="xl">
              <SectionLink section="contact">Get IT Support</SectionLink>
            </Button>
          </div>

          <p className="mt-7 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
            <MapPin className="h-3.5 w-3.5 text-primary-glow" aria-hidden="true" />
            Professional IT Support <span className="text-primary/70">•</span> Remote &amp; On-Site
            Assistance <span className="text-primary/70">•</span> South Africa
          </p>
        </div>

        <div className="animate-rise relative" style={{ animationDelay: "160ms" }}>
          <div className="surface-card relative overflow-hidden p-8 sm:p-10">
            <div
              className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-primary/25 blur-3xl"
              aria-hidden="true"
            />
            <div className="relative flex items-center gap-4">
              <LogoMark size="lg" />
              <div className="min-w-0">
                <p className="font-display text-lg font-extrabold">MS-TECH Solutions</p>
                <p className="text-sm text-muted-foreground">Proactive technology management</p>
              </div>
            </div>

            <div className="relative mt-8 grid gap-3 sm:grid-cols-2">
              {pillars.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-3 rounded-xl border border-border bg-surface/60 px-4 py-3.5"
                >
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-primary/15 text-primary-glow">
                    <Icon className="h-4.5 w-4.5" aria-hidden="true" />
                  </span>
                  <span className="truncate text-sm font-semibold">{label}</span>
                </div>
              ))}
            </div>

            <div className="relative mt-6 rounded-xl border border-primary/30 bg-primary/10 p-4">
              <p className="text-sm leading-relaxed text-foreground/90">
                <span className="font-bold">Start with a free IT Risk Assessment.</span> We review
                your infrastructure, network, backups and basic security, then give you practical
                recommendations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
