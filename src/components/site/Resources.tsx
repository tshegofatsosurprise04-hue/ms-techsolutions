import { Download, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { RESOURCES, whatsappUrl } from "@/config/site";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Resources() {
  return (
    <section id="resources" className="relative py-20 lg:py-28">
      <div className="container-page">
        <SectionHeading
          align="center"
          eyebrow="Free resources"
          title={
            <>
              Practical <span className="text-gradient">IT checklists</span> you can use today
            </>
          }
          subtitle="Free guides to help schools and organisations review their technology, security and backups."
        />

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {RESOURCES.map((resource, i) => (
            <Reveal key={resource.id} delay={i * 90}>
              <article className="surface-card surface-card-hover flex h-full flex-col p-7">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-primary/15 text-primary-glow">
                  <FileText className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="mt-5 font-display text-lg font-bold">{resource.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {resource.description}
                </p>
                {resource.file ? (
                  <Button asChild variant="cta" size="lg" className="mt-6 w-full">
                    <a href={resource.file} download>
                      <Download className="h-4 w-4" aria-hidden="true" />
                      {resource.cta}
                    </a>
                  </Button>
                ) : (
                  <Button asChild variant="outlineLight" size="lg" className="mt-6 w-full">
                    <a
                      href={whatsappUrl(
                        `Hello MS-TECH Solutions, please send me the "${resource.title}".`,
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Request this checklist
                    </a>
                  </Button>
                )}
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
