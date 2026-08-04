export const WHATSAPP_NUMBER = "8801894202074";

export function buildWhatsappLink(message: string) {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`;
}

export function serviceBookingMessage(serviceName: string) {
  return `Hello SOHAY BD! 👋\n\nI would like to book this service:\n➡️ ${serviceName}\n\nPlease share the available time slots and pricing details for my location in Rangpur. Thank you!`;
}

export const GENERAL_WHATSAPP_MESSAGE =
  "Hello SOHAY BD! 👋 I have a question about your home services. Could you please help me?";
