import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Space_Grotesk, Inter, IBM_Plex_Mono } from "next/font/google";
import { DictionaryProvider } from "@/app/components/DictionaryProvider";
import { getDictionary } from "@/app/lib/dictionaries";
import {
  defaultLocale,
  isLocale,
  locales,
  openGraphLocale,
  type Locale,
} from "@/app/lib/i18n";

const siteUrl = "https://onpointgeo.nl";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-plex-mono",
  display: "swap",
});

type LocaleLayoutProps = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) return {};

  const dict = getDictionary(rawLocale);
  const canonical = `/${rawLocale}`;

  return {
    metadataBase: new URL(siteUrl),
    applicationName: "OnPoint Bouw",
    title: {
      default: dict.meta.title,
      template: "%s | OnPoint Bouw",
    },
    description: dict.meta.description,
    keywords: dict.meta.keywords,
    authors: [{ name: "OnPoint Bouw" }],
    creator: "OnPoint Bouw",
    publisher: "OnPoint Bouw",
    category: dict.meta.category,
    alternates: {
      canonical,
      languages: Object.fromEntries(
        locales.map((locale) => [locale, `/${locale}`]),
      ),
    },
    openGraph: {
      title: dict.meta.title,
      description: dict.meta.description,
      url: canonical,
      siteName: "OnPoint Bouw",
      locale: openGraphLocale(rawLocale),
      type: "website",
      images: [
        {
          url: "/images/onpoint-residential-renovation-hero.png",
          width: 1672,
          height: 941,
          alt: dict.meta.ogImageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: dict.meta.title,
      description: dict.meta.description,
      images: ["/images/onpoint-residential-renovation-hero.png"],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    icons: {
      icon: [
        {
          url: "/favicon-black.png",
          sizes: "512x512",
          type: "image/png",
        },
        {
          url: "/favicon-white.png",
          media: "(prefers-color-scheme: dark)",
          sizes: "512x512",
          type: "image/png",
        },
      ],
      apple: [
        {
          url: "/apple-icon.png",
          sizes: "180x180",
          type: "image/png",
        },
      ],
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) notFound();

  const locale = rawLocale as Locale;
  const dict = getDictionary(locale);

  return (
    <html
      lang={locale}
      className={`${spaceGrotesk.variable} ${inter.variable} ${plexMono.variable} antialiased`}
    >
      <body className="bg-paper font-sans text-ink">
        <DictionaryProvider dict={dict} locale={locale}>
          {children}
        </DictionaryProvider>
      </body>
    </html>
  );
}