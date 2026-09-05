import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PHONE_DISPLAY, PHONE_E164 } from "@/config/site";
import { cn } from "@/lib/utils";
import { Logo } from "./Logo";
import { NAV_LINKS } from "./SectionLink";
import { SocialLinks } from "./SocialLinks";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 border-b transition-all duration-300",
        scrolled
          ? "border-border bg-background/85 shadow-[0_10px_30px_-24px_rgba(0,0,0,0.9)] backdrop-blur-xl"
          : "border-transparent bg-background/40 backdrop-blur-md",
      )}
    >
      <nav
        aria-label="Main navigation"
        className="container-page grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 py-3"
      >
        <Logo className="min-w-0" />

        <div className="flex items-center gap-2">
          <ul className="hidden items-center gap-1 xl:flex">
            {NAV_LINKS.map((item) => (
              <li key={item.label}>
                <Link
                  to={item.to}
                  activeOptions={{ exact: item.to === "/" }}
                  activeProps={{ className: "text-foreground" }}
                  className="rounded-md px-3 py-2 text-[0.82rem] font-semibold text-muted-foreground transition-colors hover:text-foreground"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <a
            href={`tel:${PHONE_E164}`}
            className="hidden items-center gap-2 rounded-lg px-3 py-2 text-[0.82rem] font-semibold text-muted-foreground transition-colors hover:text-foreground lg:inline-flex"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            {PHONE_DISPLAY}
          </a>

          <Button asChild variant="cta" size="sm" className="hidden md:inline-flex">
            <Link to="/risk-assessment">Book Free Assessment</Link>
          </Button>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="grid h-10 w-10 shrink-0 place-items-center rounded-lg border border-border bg-surface/60 text-foreground xl:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <div
          id="mobile-menu"
          className="max-h-[calc(100vh-6rem)] overflow-y-auto border-t border-border bg-background/98 backdrop-blur-xl xl:hidden"
        >
          <div className="container-page space-y-1 py-4">
            {NAV_LINKS.map((item) => (
              <Link
                key={item.label}
                to={item.to}
                onClick={() => setOpen(false)}
                activeOptions={{ exact: item.to === "/" }}
                activeProps={{ className: "text-foreground" }}
                className="block rounded-lg px-3 py-3 text-sm font-semibold text-muted-foreground transition-colors hover:bg-surface hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}

            <Button asChild variant="cta" size="lg" className="mt-3 w-full">
              <Link to="/risk-assessment" onClick={() => setOpen(false)}>
                Book Free Assessment
              </Link>
            </Button>

            <div className="flex items-center justify-between gap-3 pt-4">
              <a
                href={`tel:${PHONE_E164}`}
                className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground"
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                {PHONE_DISPLAY}
              </a>
              <SocialLinks />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
