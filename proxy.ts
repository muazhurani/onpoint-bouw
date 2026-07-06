import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { defaultLocale, isLocale, locales, type Locale } from "@/app/lib/i18n";

/**
 * Picks the visitor's locale from the Accept-Language header.
 * Dutch stays the default; only an explicit English preference
 * (higher q-value than Dutch) lands on /en.
 */
function detectLocale(request: NextRequest): Locale {
  const header = request.headers.get("accept-language");
  if (!header) return defaultLocale;

  const weights = new Map<Locale, number>();
  for (const part of header.split(",")) {
    const [tag, ...params] = part.trim().split(";");
    const lang = tag.trim().toLowerCase().split("-")[0];
    if (!isLocale(lang)) continue;
    const qParam = params.find((p) => p.trim().startsWith("q="));
    const q = qParam ? Number(qParam.trim().slice(2)) : 1;
    if (!Number.isNaN(q)) {
      weights.set(lang, Math.max(weights.get(lang) ?? 0, q));
    }
  }

  const nl = weights.get("nl") ?? 0;
  const en = weights.get("en") ?? 0;
  return en > nl ? "en" : defaultLocale;
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (
    pathname.startsWith("/api") ||
    pathname.startsWith("/_next") ||
    pathname === "/robots.txt" ||
    pathname === "/sitemap.xml" ||
    /\.[^/]+$/.test(pathname)
  ) {
    return NextResponse.next();
  }

  const segment = pathname.split("/")[1];
  if (isLocale(segment)) {
    return NextResponse.next();
  }

  const locale = detectLocale(request);
  const url = request.nextUrl.clone();
  url.pathname = `/${locale}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon|.*\\..*).*)"],
};

export { locales };
