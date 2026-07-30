import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Mukta } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { siteConfig } from "@/data/site";

// Latin font for English text — clean, modern, distinct from common Poppins sites.
const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

// Devanagari font for Marathi text — warm, readable Indian typeface.
const mukta = Mukta({
  variable: "--font-mukta",
  subsets: ["devanagari", "latin"],
  weight: ["400", "500", "600", "700"],
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
      className={`${plusJakarta.variable} ${mukta.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-white text-[var(--foreground)]">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
