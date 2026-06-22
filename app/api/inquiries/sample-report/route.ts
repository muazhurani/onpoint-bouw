import { existsSync } from "node:fs";
import path from "node:path";
import { inquiryRecipient, sendMail } from "@/app/lib/email";
import {
  badRequest,
  clientIp,
  escapeHtml,
  jsonBody,
  rateLimit,
  rateLimitedResponse,
  sampleReportSchema,
  serverError,
} from "@/app/lib/inquiries";

export const runtime = "nodejs";

function sampleReportPath() {
  const fileName = path.basename(
    process.env.SAMPLE_REPORT_FILE?.trim() || "sample-report.pdf",
  );

  return path.join(process.cwd(), "public", fileName);
}

function leadText(data: {
  name: string;
  company: string;
  email: string;
  phone: string;
  message: string;
}) {
  return [
    "Sample report request",
    "",
    `Name: ${data.name || "-"}`,
    `Company: ${data.company || "-"}`,
    `Email: ${data.email}`,
    `Phone: ${data.phone || "-"}`,
    "",
    "Message:",
    data.message || "-",
  ].join("\n");
}

export async function POST(request: Request) {
  const limit = rateLimit(`sample-report:${clientIp(request)}`);
  if (limit.limited) return rateLimitedResponse(limit.retryAfter);

  const body = await jsonBody(request);
  if (!body) return badRequest("Invalid request body.");

  const parsed = sampleReportSchema.safeParse(body);
  if (!parsed.success) {
    return badRequest("Please enter a valid email address.", parsed.error.flatten());
  }

  const data = parsed.data;
  const reportPath = sampleReportPath();
  const hasReport = existsSync(reportPath);

  try {
    await sendMail({
      to: inquiryRecipient(),
      replyTo: data.email,
      subject: `Sample report request from ${data.email}`,
      text: leadText(data),
      html: `
        <h1>Sample report request</h1>
        <p><strong>Name:</strong> ${escapeHtml(data.name || "-")}</p>
        <p><strong>Company:</strong> ${escapeHtml(data.company || "-")}</p>
        <p><strong>Email:</strong> ${escapeHtml(data.email)}</p>
        <p><strong>Phone:</strong> ${escapeHtml(data.phone || "-")}</p>
        <h2>Message</h2>
        <p>${escapeHtml(data.message || "-").replace(/\n/g, "<br />")}</p>
      `,
    });

    await sendMail({
      to: data.email,
      subject: hasReport
        ? "Your OnPoint sample report"
        : "We received your OnPoint sample report request",
      text: hasReport
        ? [
            "Hi,",
            "",
            "Thanks for your interest. The sample report is attached.",
            "",
            "OnPoint Geomatics",
            "info@onpointgeo.nl",
            "+31 6 1468 6059",
          ].join("\n")
        : [
            "Hi,",
            "",
            "Thanks for your interest. We received your sample report request and will send the report shortly.",
            "",
            "OnPoint Geomatics",
            "info@onpointgeo.nl",
            "+31 6 1468 6059",
          ].join("\n"),
      html: hasReport
        ? `
          <p>Hi,</p>
          <p>Thanks for your interest. The sample report is attached.</p>
          <p>OnPoint Geomatics<br />info@onpointgeo.nl<br />+31 6 1468 6059</p>
        `
        : `
          <p>Hi,</p>
          <p>Thanks for your interest. We received your sample report request and will send the report shortly.</p>
          <p>OnPoint Geomatics<br />info@onpointgeo.nl<br />+31 6 1468 6059</p>
        `,
      attachments: hasReport
        ? [{ filename: "onpoint-sample-report.pdf", path: reportPath }]
        : undefined,
    });

    return Response.json({
      ok: true,
      message: hasReport
        ? "Sample report sent to your email."
        : "Request sent. We will email the sample report shortly.",
    });
  } catch (error) {
    console.error("Sample report email failed", error);
    return serverError();
  }
}
