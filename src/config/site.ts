/**
 * MS-TECH Solutions — central site configuration.
 *
 * Everything the business owner may want to change lives here:
 * contact details, social links and resource download URLs.
 *
 * NOTE: Instagram and X profiles have NOT been created/provided yet.
 * Replace the placeholder values below with the real profile URLs and the
 * icons will start working automatically. Leave them as "" to hide the icon.
 */

export const PHONE_DISPLAY = "067 867 7830";
export const PHONE_E164 = "+27678677830";
export const WHATSAPP_NUMBER = "27678677830";
export const EMAIL = "info@mstechsolutions.co.za";
export const SERVICE_AREA = "South Africa — remote & on-site support";
export const COMPANY_NAME = "MS-TECH Solutions";

const DEFAULT_WHATSAPP_MESSAGE =
  "Hello MS-TECH Solutions, I would like to enquire about your IT support services.";

export function whatsappUrl(message: string = DEFAULT_WHATSAPP_MESSAGE) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const WHATSAPP_URL = whatsappUrl();

export const INSTAGRAM_URL = "https://www.instagram.com/mstech305";
export const X_URL = "https://x.com/mstech305";

/**
 * Resource downloads.
 * TODO (owner): upload the PDF files and set `file` to their URL
 * (e.g. "/resources/it-risk-assessment-checklist.pdf").
 * While `file` is empty the card asks the visitor to request the resource.
 */
export const RESOURCES = [
  {
    id: "it-risk-checklist",
    title: "IT Risk Assessment Checklist",
    description: "A practical checklist to help organisations identify common IT risks.",
    cta: "Download Free Checklist",
    file: "",
  },
  {
    id: "school-it-readiness",
    title: "School IT Readiness Checklist",
    description: "Questions schools should ask about their technology environment.",
    cta: "Download Free Checklist",
    file: "",
  },
  {
    id: "cybersecurity-basics",
    title: "Basic Cybersecurity Checklist",
    description: "Simple security checks every organisation should review.",
    cta: "Download Free Checklist",
    file: "",
  },
] as const;
