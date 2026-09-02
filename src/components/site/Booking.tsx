import { useState, type FormEvent } from "react";
import { AlertTriangle, CalendarCheck, CheckCircle2, MessageCircle, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { EMAIL, WHATSAPP_URL, whatsappUrl } from "@/config/site";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const ORG_TYPES = [
  "School / educational institution",
  "Small business",
  "Office / corporate",
  "Non-profit organisation",
  "Other",
] as const;

const SERVICES = [
  "Free IT Risk Assessment",
  "Managed IT support",
  "On-demand technical support",
  "Cybersecurity & backups",
  "Network & Wi-Fi",
  "Consultation",
] as const;

type Status = { kind: "success" | "error"; title: string; message: string } | null;

const ERROR_MESSAGE =
  "We couldn't submit your request. Please try again or contact MS-TECH Solutions directly on WhatsApp.";

export function Booking() {
  const [orgType, setOrgType] = useState<string>(ORG_TYPES[0]);
  const [service, setService] = useState<string>(SERVICES[0]);
  const [status, setStatus] = useState<Status>(null);


  const buildMessage = (form: HTMLFormElement) => {
    const data = new FormData(form);
    return [
      "New enquiry — MS-TECH Solutions",
      `Name: ${data.get("name") ?? ""}`,
      `Organisation: ${data.get("organisation") ?? ""}`,
      `Type: ${orgType}`,
      `Email: ${data.get("email") ?? ""}`,
      `Phone: ${data.get("phone") ?? ""}`,
      `Interested in: ${service}`,
      `Message: ${data.get("message") ?? ""}`,
    ].join("\n");
  };

  const onWhatsApp = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // NOTE: "noopener" makes window.open() return null, so we clear the opener manually
    // and use the returned reference to detect pop-up blocking.
    const win = window.open(whatsappUrl(buildMessage(e.currentTarget)), "_blank");
    if (win) {
      try {
        win.opener = null;
      } catch {
        /* cross-origin — safe to ignore */
      }
      setStatus({
        kind: "success",
        title: "Request received successfully.",
        message:
          "Thank you for contacting MS-TECH Solutions. We will contact you to confirm your FREE IT Risk Assessment. WhatsApp is opening with your enquiry — please press send.",
      });
    } else {
      setStatus({
        kind: "error",
        title: "We couldn't open WhatsApp.",
        message: ERROR_MESSAGE,
      });
    }
  };


  const onEmail = (e: FormEvent<HTMLButtonElement>) => {
    const form = e.currentTarget.form;
    if (!form) return;
    if (!form.reportValidity()) {
      setStatus({
        kind: "error",
        title: "Some details are missing.",
        message: "Please complete the required fields marked with *.",
      });
      return;
    }
    e.preventDefault();
    const subject = encodeURIComponent(`IT enquiry — ${service}`);
    const body = encodeURIComponent(buildMessage(form));
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
    setStatus({
      kind: "success",
      title: "Request received successfully.",
      message: `Thank you for contacting MS-TECH Solutions. We will contact you to confirm your FREE IT Risk Assessment. Your email app is opening with your enquiry — please press send, or write to us at ${EMAIL}.`,
    });
  };


  return (
    <section id="booking" className="relative py-20 lg:py-28">
      <div className="container-page">
        <div className="grid items-start gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionHeading
              eyebrow="Book now"
              title={
                <>
                  Book your <span className="text-gradient">FREE IT Risk Assessment</span>
                </>
              }
              subtitle="Tell us a little about your organisation and we'll come back to you with available times. Prefer to chat? Send the form straight to WhatsApp."
            />
            <Reveal delay={80} className="mt-8 space-y-4 text-sm leading-relaxed text-muted-foreground">
              <p>
                We support organisations across South Africa with both remote and on-site
                assistance. Assessments typically take under an hour.
              </p>
              <p className="rounded-xl border border-primary/30 bg-primary/10 p-4 text-foreground/90">
                Schools: we can schedule around your timetable, including after hours and during
                school holidays.
              </p>
            </Reveal>
          </div>

          <Reveal delay={120}>
            <form onSubmit={onWhatsApp} className="surface-card space-y-5 p-7 sm:p-8">
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">Full name *</Label>
                  <Input id="name" name="name" required placeholder="Your name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="organisation">School / organisation *</Label>
                  <Input id="organisation" name="organisation" required placeholder="Organisation name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input id="email" name="email" type="email" required placeholder="you@example.co.za" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone / WhatsApp *</Label>
                  <Input id="phone" name="phone" required placeholder="067 000 0000" />
                </div>
                <div className="space-y-2">
                  <Label>Organisation type</Label>
                  <Select value={orgType} onValueChange={setOrgType}>
                    <SelectTrigger><SelectValue /></SelectTrigger>
                    <SelectContent>
                      {ORG_TYPES.map((o) => (
                        <SelectItem key={o} value={o}>{o}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>I'm interested in</Label>
                  <Select value={service} onValueChange={setService}>
                    <SelectTrigger><SelectValue /></SelectTrigger>
                    <SelectContent>
                      {SERVICES.map((o) => (
                        <SelectItem key={o} value={o}>{o}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">How can we help?</Label>
                <Textarea id="message" name="message" rows={4} placeholder="Briefly describe your IT setup or the issue you're facing." />
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <Button type="submit" variant="whatsapp" size="lg" className="sm:flex-1">
                  <MessageCircle className="h-4 w-4" aria-hidden="true" />
                  Send via WhatsApp
                </Button>
                <Button type="button" onClick={onEmail} variant="outlineLight" size="lg" className="sm:flex-1">
                  <Send className="h-4 w-4" aria-hidden="true" />
                  Send via Email
                </Button>
              </div>

              <div aria-live="polite" role="status">
                {status && (
                  <div
                    className={
                      status.kind === "success"
                        ? "rounded-xl border border-whatsapp/40 bg-whatsapp/10 p-4"
                        : "rounded-xl border border-destructive/40 bg-destructive/10 p-4"
                    }
                  >
                    <p className="flex items-start gap-2 font-display text-sm font-bold text-foreground">
                      {status.kind === "success" ? (
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-whatsapp" aria-hidden="true" />
                      ) : (
                        <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-destructive" aria-hidden="true" />
                      )}
                      {status.title}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {status.message}
                    </p>
                    <Button asChild variant="whatsapp" size="sm" className="mt-4 w-full sm:w-auto">
                      <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                        <MessageCircle className="h-4 w-4" aria-hidden="true" />
                        <span className="truncate">Chat with MS-TECH on WhatsApp</span>
                      </a>
                    </Button>
                  </div>
                )}
              </div>

              <p className="flex items-start gap-2 text-xs leading-relaxed text-muted-foreground">
                <CalendarCheck className="mt-0.5 h-4 w-4 shrink-0 text-primary-glow" aria-hidden="true" />
                We usually respond within one business day. Your details are only used to contact
                you about your enquiry.
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
