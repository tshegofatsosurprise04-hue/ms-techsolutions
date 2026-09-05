import { Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const points = [
  "Reduce downtime in classrooms, labs and admin offices",
  "Protect school and learner data with reviewed backups",
  "Support teachers and staff with everyday technical help",
  "Prepare systems ahead of exams and new terms",
  "Plan your IT with clear, practical recommendations",
];

export function HomeSchools() {
  return (
    <section className="relative border-t border-border py-20 lg:py-24">
      <div className="container-page grid items-start gap-10 lg:grid-cols-[1fr_1fr]">
        <div>
          <SectionHeading
            eyebrow="For schools"
            title={
              <>
                IT support for <span className="text-gradient">schools</span> and educational
                institutions
              </>
            }
            subtitle="Technology should support teaching, learning and daily operations — not interrupt them."
          />
          <Reveal delay={100} className="mt-8 flex flex-wrap gap-3">
            <Button asChild variant="cta" size="lg">
              <Link to="/solutions">
                Solutions for Schools
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </Reveal>
        </div>

        <Reveal delay={80}>
          <div className="surface-card p-7 sm:p-8">
            <span className="grid h-11 w-11 place-items-center rounded-xl bg-primary/15 text-primary-glow">
              <GraduationCap className="h-5 w-5" aria-hidden="true" />
            </span>
            <ul className="mt-6 space-y-3">
              {points.map((p) => (
                <li key={p} className="flex gap-3 text-sm leading-relaxed text-foreground/90">
                  <CheckCircle2
                    className="mt-0.5 h-4.5 w-4.5 shrink-0 text-primary-glow"
                    aria-hidden="true"
                  />
                  {p}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
