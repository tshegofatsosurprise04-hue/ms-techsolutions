import type { ReactNode } from "react";
import { AnnouncementBar } from "./AnnouncementBar";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { FloatingWhatsAppButton } from "./FloatingWhatsAppButton";
import { StickyMobileCta } from "./StickyMobileCta";

/** Shared chrome so every page feels like part of the same website. */
export function PageLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col overflow-x-hidden bg-background text-foreground">
      <AnnouncementBar />
      <Navbar />
      <main className="flex-1 pb-20 md:pb-0">{children}</main>
      <Footer />
      <FloatingWhatsAppButton />
      <StickyMobileCta />
    </div>
  );
}

/** Consistent page header used by the inner pages. */
export function PageHero({
  eyebrow,
  title,
  subtitle,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  subtitle?: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div className="hero-glow absolute inset-0" aria-hidden="true" />
      <div className="grid-lines absolute inset-0 opacity-30" aria-hidden="true" />
      <div className="container-page relative py-14 lg:py-20">
        <span className="eyebrow">
          <span className="h-1.5 w-1.5 rounded-full bg-primary-glow" />
          {eyebrow}
        </span>
        <h1 className="animate-rise mt-5 max-w-3xl text-balance text-3xl font-extrabold leading-[1.1] sm:text-4xl lg:text-5xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-5 max-w-2xl text-pretty text-base leading-relaxed text-foreground/85 sm:text-lg">
            {subtitle}
          </p>
        )}
        {children && <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">{children}</div>}
      </div>
    </section>
  );
}
