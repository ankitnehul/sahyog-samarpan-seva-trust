import type { Metadata } from "next";
import { Mukta, Newsreader, Source_Sans_3, Tiro_Devanagari_Marathi } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { siteConfig } from "@/data/site";

const sourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  weight: ["500", "600"],
  display: "swap",
});

const tiro = Tiro_Devanagari_Marathi({
  variable: "--font-tiro",
  subsets: ["devanagari", "latin"],
  weight: "400",
  display: "swap",
});

const mukta = Mukta({
  variable: "--font-mukta",
  subsets: ["devanagari", "latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} | ${siteConfig.taglineEn}`,
    template: `%s | ${siteConfig.shortName}`,
  },
  description: siteConfig.description,
  keywords: [
    "NGO",
    "Sahayog Samarpan Seva Foundation",
    "Ahilyanagar",
    "Maharashtra",
    "social work",
    "education",
    "healthcare",
    "donation",
  ],
  icons: {
    icon: [{ url: "/logo/logo.png", type: "image/png" }],
    apple: [{ url: "/logo/logo.png", type: "image/png" }],
    shortcut: "/logo/logo.png",
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
      className={`${sourceSans.variable} ${newsreader.variable} ${tiro.variable} ${mukta.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-paper text-ink">
        <a
          href="#content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:bg-paper focus:px-4 focus:py-3 focus:text-brand-navy"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="content" className="flex-1">
          {children}
        </main>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
