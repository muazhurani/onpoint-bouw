import { inquiryRecipient, sendMail } from "@/app/lib/email";
import { getDictionary } from "@/app/lib/dictionaries";
import { formatMessage } from "@/app/lib/format-message";
import { isLocale, type Locale } from "@/app/lib/i18n";
import {
  badRequest,
  clientIp,
  escapeHtml,
  rateLimit,
  rateLimitedResponse,
  serverError,
} from "@/app/lib/inquiries";

export const runtime = "nodejs";

const MAX_PHOTOS = 5;
const MAX_PHOTO_BYTES = 8 * 1024 * 1024;

function field(formData: FormData, name: string) {
  const value = formData.get(name);
  return typeof value === "string" ? value.trim() : "";
}

export async function POST(request: Request) {
  const limit = rateLimit(`photos:${clientIp(request)}`);
  if (limit.limited) {
    const dict = getDictionary("nl");
    return rateLimitedResponse(limit.retryAfter, dict.api.rateLimited);
  }

  let formData: FormData;
  try {
    formData = await request.formData();
  } catch {
    const dict = getDictionary("nl");
    return badRequest(dict.api.invalidBody);
  }

  const rawLocale = field(formData, "locale");
  const locale: Locale = isLocale(rawLocale) ? rawLocale : "nl";
  const dict = getDictionary(locale);

  // Honeypot: pretend success for bots.
  if (field(formData, "website")) {
    return Response.json({ ok: true, message: dict.api.photoSuccess });
  }

  const name = field(formData, "name");
  const contact = field(formData, "contact");
  const message = field(formData, "message");
  const photos = formData
    .getAll("photos")
    .filter((entry): entry is File => entry instanceof File && entry.size > 0);

  if (
    name.length < 2 ||
    name.length > 120 ||
    contact.length < 6 ||
    contact.length > 160 ||
    message.length < 10 ||
    message.length > 2500 ||
    photos.length < 1
  ) {
    return badRequest(dict.api.photoValidationError);
  }

  if (
    photos.length > MAX_PHOTOS ||
    photos.some(
      (photo) =>
        photo.size > MAX_PHOTO_BYTES || !photo.type.startsWith("image/"),
    )
  ) {
    return badRequest(dict.api.photoTooLarge);
  }

  const attachments = await Promise.all(
    photos.map(async (photo, index) => ({
      filename: photo.name || `photo-${index + 1}`,
      content: Buffer.from(await photo.arrayBuffer()),
      contentType: photo.type,
    })),
  );

  const fields = dict.api.photoFields;
  const text = [
    dict.api.photoLeadHeading,
    "",
    `${fields.name}: ${name}`,
    `${fields.contact}: ${contact}`,
    `${fields.photos}: ${photos.length}`,
    "",
    `${fields.message}:`,
    message,
  ].join("\n");

  const html = `
    <h1>${escapeHtml(dict.api.photoLeadHeading)}</h1>
    <p><strong>${fields.name}:</strong> ${escapeHtml(name)}</p>
    <p><strong>${fields.contact}:</strong> ${escapeHtml(contact)}</p>
    <p><strong>${fields.photos}:</strong> ${photos.length}</p>
    <h2>${fields.message}</h2>
    <p>${escapeHtml(message).replace(/\n/g, "<br />")}</p>
  `;

  try {
    await sendMail({
      to: inquiryRecipient(),
      replyTo: contact.includes("@") ? contact : undefined,
      subject: formatMessage(dict.api.photoLeadSubject, { name }),
      text,
      html,
      attachments,
    });

    return Response.json({ ok: true, message: dict.api.photoSuccess });
  } catch (error) {
    console.error("Photo inquiry email failed", error);
    return serverError(dict.api.serverError);
  }
}
