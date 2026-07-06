import { inquiryRecipient, sendMail } from "@/app/lib/email";
import { EMAIL, PHONE_DISPLAY } from "@/app/lib/contact";
import { getDictionary } from "@/app/lib/dictionaries";
import { formatMessage } from "@/app/lib/format-message";
import type { Locale } from "@/app/lib/i18n";
import {
  badRequest,
  clientIp,
  escapeHtml,
  jsonBody,
  quoteSchema,
  rateLimit,
  rateLimitedResponse,
  serverError,
} from "@/app/lib/inquiries";

export const runtime = "nodejs";

function leadHtml(
  data: {
    name: string;
    company: string;
    email: string;
    phone: string;
    projectType: string;
    siteDate: string;
    message: string;
  },
  fields: ReturnType<typeof getDictionary>["api"]["leadFields"],
  heading: string,
) {
  return `
    <h1>${heading}</h1>
    <p><strong>${fields.name}:</strong> ${escapeHtml(data.name)}</p>
    <p><strong>${fields.address}:</strong> ${escapeHtml(data.company || "-")}</p>
    <p><strong>${fields.email}:</strong> ${escapeHtml(data.email)}</p>
    <p><strong>${fields.phone}:</strong> ${escapeHtml(data.phone)}</p>
    <p><strong>${fields.projectType}:</strong> ${escapeHtml(data.projectType)}</p>
    <p><strong>${fields.preferredStart}:</strong> ${escapeHtml(data.siteDate || "-")}</p>
    <h2>${fields.message}</h2>
    <p>${escapeHtml(data.message).replace(/\n/g, "<br />")}</p>
  `;
}

export async function POST(request: Request) {
  const limit = rateLimit(`quote:${clientIp(request)}`);
  if (limit.limited) {
    const dict = getDictionary("nl");
    return rateLimitedResponse(limit.retryAfter, dict.api.rateLimited);
  }

  const body = await jsonBody(request);
  if (!body) {
    const dict = getDictionary("nl");
    return badRequest(dict.api.invalidBody);
  }

  const parsed = quoteSchema.safeParse(body);
  if (!parsed.success) {
    const locale = (body as { locale?: Locale }).locale ?? "nl";
    const dict = getDictionary(locale);
    return badRequest(dict.api.validationError, parsed.error.flatten());
  }

  const data = parsed.data;
  const dict = getDictionary(data.locale);

  const text = [
    dict.api.leadHeading,
    "",
    `${dict.api.leadFields.name}: ${data.name}`,
    `${dict.api.leadFields.address}: ${data.company || "-"}`,
    `${dict.api.leadFields.email}: ${data.email}`,
    `${dict.api.leadFields.phone}: ${data.phone}`,
    `${dict.api.leadFields.projectType}: ${data.projectType}`,
    `${dict.api.leadFields.preferredStart}: ${data.siteDate || "-"}`,
    "",
    `${dict.api.leadFields.message}:`,
    data.message,
  ].join("\n");

  try {
    await sendMail({
      to: inquiryRecipient(),
      replyTo: data.email,
      subject: formatMessage(dict.api.leadSubject, { name: data.name }),
      text,
      html: leadHtml(data, dict.api.leadFields, dict.api.leadHeading),
    });

    await sendMail({
      to: data.email,
      subject: dict.api.confirmationSubject,
      text: [
        formatMessage(dict.api.confirmationGreeting, { name: data.name }),
        "",
        dict.api.confirmationBody,
        "",
        "OnPoint Bouw",
        EMAIL,
        PHONE_DISPLAY,
      ].join("\n"),
      html: `
        <p>${escapeHtml(formatMessage(dict.api.confirmationGreeting, { name: data.name }))}</p>
        <p>${escapeHtml(dict.api.confirmationBody)}</p>
        <p>OnPoint Bouw<br />${EMAIL}<br />${PHONE_DISPLAY}</p>
      `,
    });

    return Response.json({
      ok: true,
      message: dict.api.success,
    });
  } catch (error) {
    console.error("Quote email failed", error);
    return serverError(dict.api.serverError);
  }
}
