import { MessageCircle } from "lucide-react";
import { WHATSAPP_URL } from "@/config/site";

export function FloatingWhatsAppButton() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with MS-TECH Solutions on WhatsApp"
      className="fixed bottom-24 right-4 z-50 grid h-14 w-14 place-items-center rounded-full bg-whatsapp text-whatsapp-foreground shadow-[0_18px_40px_-14px_rgba(16,185,129,0.7)] transition-transform duration-300 hover:scale-105 md:bottom-6 md:right-6"
    >
      <span className="absolute inset-0 animate-soft-pulse rounded-full bg-whatsapp/40" aria-hidden="true" />
      <MessageCircle className="relative h-6 w-6" aria-hidden="true" />
    </a>
  );
}
