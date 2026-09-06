import { useState, type FormEvent } from "react";
import { AlertTriangle, CheckCircle2, MessageCircle, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { EMAIL, WHATSAPP_URL, whatsappUrl } from "@/config/site";
import { Reveal } from "./Reveal";

type Status = { kind: "success" | "error"; title: string; message: string } | null;

const ERROR_MESSAGE =
  "We couldn't submit your message. Please try again or contact MS-TECH Solutions directly on WhatsApp.";

/**
 * Contact form. Like the booking form, it hands the enquiry to WhatsApp or the
 * visitor's email app — we never claim a message was delivered by us.
 */
export function ContactForm() {
  const [status, setStatus] = useState<Status>(null);

  const buildMessage = (form: HTMLFormElement) => {
    const data = new FormData(form);
    return [
      "New enquiry — MS-TECH Solutions",
      `Name: ${data.get("name") ?? ""}`,
      `Organisation: ${data.get("organisation") ?? ""}`,
      `Email: ${data.get("email") ?? ""}`,
      `Phone: ${data.get("phone") ?? ""}`,
      `Subject: ${data.get("subject") ?? ""}`,
      `Message: ${data.get("message") ?? ""}`,
    ].join("\n");
  };

  const onWhatsApp = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const win = window.open(whatsappUrl(buildMessage(e.currentTarget)), "_blank");
    if (win) {
      try {
        win.opener = null;
      } catch {
        /* cross-origin — safe to ignore */
      }
      setStatus({
        kind: "success",
        title: "Message ready to send.",
        message:
          "Thank you for contacting MS-TECH Solutions. WhatsApp is opening with your message — please press send and we will respond as soon as possible.",
      });
    } else {
      setStatus({ kind: "error", title: "We couldn't open WhatsApp.", message: ERROR_MESSAGE });
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
    const data = new FormData(form);
    const subject = encodeURIComponent(
      `Website enquiry — ${String(data.get("subject") ?? "IT support")}`,
    );
    const body = encodeURIComponent(buildMessage(form));
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
    setStatus({
      kind: "success",
      title: "Message ready to send.",
      message: `Your email app is opening with your message — please press send, or write to us directly at ${EMAIL}.`,
    });
  };

  return (
    <Reveal>
      <form onSubmit={onWhatsApp} className="surface-card space-y-5 p-7 sm:p-8">
        <h2 className="font-display text-xl font-bold">Send us a message</h2>

        <div className="grid gap-5 sm:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="c-name">Full name *</Label>
            <Input id="c-name" name="name" required maxLength={100} placeholder="Your name" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="c-org">Organisation</Label>
            <Input
              id="c-org"
              name="organisation"
              maxLength={120}
              placeholder="School or company name"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="c-email">Email *</Label>
            <Input
              id="c-email"
              name="email"
              type="email"
              required
              maxLength={255}
              placeholder="you@example.co.za"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="c-phone">Phone / WhatsApp *</Label>
            <Input id="c-phone" name="phone" required maxLength={30} placeholder="067 000 0000" />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="c-subject">Subject *</Label>
          <Input
            id="c-subject"
            name="subject"
            required
            maxLength={120}
            placeholder="What is your enquiry about?"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="c-message">Message *</Label>
          <Textarea
            id="c-message"
            name="message"
            rows={5}
            required
            maxLength={1000}
            placeholder="Tell us how we can help."
          />
        </div>

        <div className="flex flex-col gap-3 sm:flex-row">
          <Button type="submit" variant="whatsapp" size="lg" className="sm:flex-1">
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
            Contact MS-TECH on WhatsApp
          </Button>
          <Button
            type="button"
            onClick={onEmail}
            variant="outlineLight"
            size="lg"
            className="sm:flex-1"
          >
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
                  <CheckCircle2
                    className="mt-0.5 h-4 w-4 shrink-0 text-whatsapp"
                    aria-hidden="true"
                  />
                ) : (
                  <AlertTriangle
                    className="mt-0.5 h-4 w-4 shrink-0 text-destructive"
                    aria-hidden="true"
                  />
                )}
                {status.title}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{status.message}</p>
              <Button asChild variant="whatsapp" size="sm" className="mt-4 w-full sm:w-auto">
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="h-4 w-4" aria-hidden="true" />
                  <span className="truncate">Chat with MS-TECH on WhatsApp</span>
                </a>
              </Button>
            </div>
          )}
        </div>

        <p className="text-xs leading-relaxed text-muted-foreground">
          We usually respond within one business day. Your details are only used to respond to your
          enquiry.
        </p>
      </form>
    </Reveal>
  );
}
