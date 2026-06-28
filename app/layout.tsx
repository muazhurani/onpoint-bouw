import type { Metadata } from "next";
import { Space_Grotesk, Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const siteUrl = "https://onpointgeo.nl";
const siteTitle = "OnPoint Bouw | Renovation & Construction in the Netherlands";
const siteDescription =
  "Residential builder across the Netherlands for home renovations, extensions, bathrooms, garden paving and patios. Clear quotes, tidy work and honest advice — request a free, no-obligation quote.";

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

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: "OnPoint Bouw",
  title: {
    default: siteTitle,
    template: "%s | OnPoint Bouw",
  },
  description: siteDescription,
  keywords: [
    "construction company Netherlands",
    "home renovation Netherlands",
    "house extension Netherlands",
    "garden renovation Netherlands",
    "patio paving Netherlands",
    "bathroom renovation Netherlands",
    "residential construction Netherlands",
  ],
  authors: [{ name: "OnPoint Bouw" }],
  creator: "OnPoint Bouw",
  publisher: "OnPoint Bouw",
  category: "Residential construction",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: "/",
    siteName: "OnPoint Bouw",
    locale: "en_NL",
    type: "website",
    images: [
      {
        url: "/images/onpoint-residential-renovation-hero.png",
        width: 1672,
        height: 941,
        alt: "Residential home extension and patio renovation in progress.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} ${plexMono.variable} antialiased`}
    >
      <body className="bg-paper font-sans text-ink">{children}</body>
    </html>
  );
}
