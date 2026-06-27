import { z } from "zod";

const WINDOW_MS = 15 * 60 * 1000;
const MAX_REQUESTS = 5;

type Bucket = {
  count: number;
  resetAt: number;
};

const buckets = new Map<string, Bucket>();

const email = z.email().max(160);
const shortText = z.string().trim().max(180);
const message = z.string().trim().max(2500);

export const quoteSchema = z.object({
  name: z.string().trim().min(2).max(120),
  company: shortText.optional().default(""),
  email,
  phone: z.string().trim().min(6).max(60),
  projectType: z.string().trim().min(2).max(120),
  siteDate: z.string().trim().max(40).optional().default(""),
  message: message.min(10),
  website: z.string().trim().max(0).optional().default(""),
});

export type QuoteInquiry = z.infer<typeof quoteSchema>;

export function badRequest(messageText: string, issues?: unknown) {
  return Response.json(
    { ok: false, message: messageText, issues },
    { status: 400 },
  );
}

export function serverError(messageText = "Email service is not configured yet.") {
  return Response.json({ ok: false, message: messageText }, { status: 503 });
}

export function clientIp(request: Request) {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0]?.trim() || "unknown";

  return (
    request.headers.get("x-real-ip") ||
    request.headers.get("cf-connecting-ip") ||
    "unknown"
  );
}

export function rateLimit(key: string) {
  const now = Date.now();
  const existing = buckets.get(key);

  if (!existing || existing.resetAt <= now) {
    buckets.set(key, { count: 1, resetAt: now + WINDOW_MS });
    return { limited: false };
  }

  existing.count += 1;
  if (existing.count > MAX_REQUESTS) {
    const retryAfter = Math.ceil((existing.resetAt - now) / 1000);
    return { limited: true, retryAfter };
  }

  return { limited: false };
}

export function rateLimitedResponse(retryAfter?: number) {
  return Response.json(
    {
      ok: false,
      message: "Too many requests. Please try again in a few minutes.",
    },
    {
      status: 429,
      headers: retryAfter ? { "Retry-After": String(retryAfter) } : undefined,
    },
  );
}

export function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function jsonBody(request: Request) {
  try {
    return await request.json();
  } catch {
    return null;
  }
}
