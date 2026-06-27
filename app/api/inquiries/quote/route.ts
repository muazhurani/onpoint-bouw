import { inquiryRecipient, sendMail } from "@/app/lib/email";
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

function leadHtml(data: {
  name: string;
  company: string;
  email: string;
  phone: string;
  projectType: string;
  siteDate: string;
  message: string;
}) {
  return `
    <h1>New quote request</h1>
    <p><strong>Name:</strong> ${escapeHtml(data.name)}</p>
    <p><strong>Address / town:</strong> ${escapeHtml(data.company || "-")}</p>
    <p><strong>Email:</strong> ${escapeHtml(data.email)}</p>
    <p><strong>Phone:</strong> ${escapeHtml(data.phone)}</p>
    <p><strong>Project type:</strong> ${escapeHtml(data.projectType)}</p>
    <p><strong>Site date:</strong> ${escapeHtml(data.siteDate || "-")}</p>
    <h2>Message</h2>
    <p>${escapeHtml(data.message).replace(/\n/g, "<br />")}</p>
  `;
}

export async function POST(request: Request) {
  const limit = rateLimit(`quote:${clientIp(request)}`);
  if (limit.limited) return rateLimitedResponse(limit.retryAfter);

  const body = await jsonBody(request);
  if (!body) return badRequest("Invalid request body.");

  const parsed = quoteSchema.safeParse(body);
  if (!parsed.success) {
    return badRequest(
      "Please enter your name, a valid email, phone number, project type, and a message of at least 10 characters.",
      parsed.error.flatten(),
    );
  }

  const data = parsed.data;

  const text = [
    "New quote request",
    "",
    `Name: ${data.name}`,
    `Address / town: ${data.company || "-"}`,
    `Email: ${data.email}`,
    `Phone: ${data.phone}`,
    `Project type: ${data.projectType}`,
    `Site date: ${data.siteDate || "-"}`,
    "",
    "Message:",
    data.message,
  ].join("\n");

  try {
    await sendMail({
      to: inquiryRecipient(),
      replyTo: data.email,
      subject: `Quote request from ${data.name}`,
      text,
      html: leadHtml(data),
    });

    await sendMail({
      to: data.email,
      subject: "We received your OnPoint quote request",
      text: [
        `Hi ${data.name},`,
        "",
        "Thanks for your quote request. We received your project details and will come back within one working day.",
        "",
        "OnPoint Bouw",
        "info@onpointgeo.nl",
        "+31 6 1468 6059",
      ].join("\n"),
      html: `
        <p>Hi ${escapeHtml(data.name)},</p>
        <p>Thanks for your quote request. We received your project details and will come back within one working day.</p>
        <p>OnPoint Bouw<br />info@onpointgeo.nl<br />+31 6 1468 6059</p>
      `,
    });

    return Response.json({
      ok: true,
      message: "Quote request sent. We will come back within one working day.",
    });
  } catch (error) {
    console.error("Quote email failed", error);
    return serverError();
  }
}
