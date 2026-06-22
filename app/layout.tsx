import type { Metadata } from "next";
import { Space_Grotesk, Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const siteUrl = "https://onpointgeo.nl";
const siteTitle = "OnPoint Geomatics | Construction Surveying Eindhoven";
const siteDescription =
  "High-accuracy construction surveying in Eindhoven for layout, stakeout, concrete slabs, steel, civil works, FF/FL surveys and as-built verification.";

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
  applicationName: "OnPoint Geomatics",
  title: {
    default: siteTitle,
    template: "%s | OnPoint Geomatics",
  },
  description: siteDescription,
  keywords: [
    "construction surveying Eindhoven",
    "layout stakeout survey",
    "as-built verification",
    "concrete slab survey",
    "steel verification",
    "civil works surveying",
    "FF FL floor flatness survey",
    "geomatics Eindhoven",
  ],
  authors: [{ name: "OnPoint Geomatics" }],
  creator: "OnPoint Geomatics",
  publisher: "OnPoint Geomatics",
  category: "Construction surveying",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: "/",
    siteName: "OnPoint Geomatics",
    locale: "en_NL",
    type: "website",
    images: [
      {
        url: "/images/onpoint-total-station-civil-site.png",
        width: 1678,
        height: 937,
        alt: "Trimble total station on a concrete construction site.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: ["/images/onpoint-total-station-civil-site.png"],
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
