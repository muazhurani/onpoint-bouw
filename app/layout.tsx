import type { Metadata } from "next";
import { Space_Grotesk, Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

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
  title: "OnPoint Geomatics — Precision surveying for construction",
  description:
    "High-accuracy construction surveying in Eindhoven for layout, concrete slabs, steel, civil works, floor-flatness surveys and as-built verification.",
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
