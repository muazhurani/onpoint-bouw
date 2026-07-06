export const PHONE_TEL = "+31615718727";
export const PHONE_DISPLAY = "+31 6 1571 8727";
export const EMAIL = "info@onpointbouw.nl";

export const WHATSAPP_NUMBER = "31615718727";

export function whatsappUrl(message?: string) {
  const base = `https://wa.me/${WHATSAPP_NUMBER}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}
