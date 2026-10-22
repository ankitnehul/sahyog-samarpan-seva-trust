import type { Metadata } from "next";
import Link from "next/link";
import { AboutSections } from "@/components/AboutSections";
import ContentImage from "@/components/ContentImage";
import PageHeading from "@/components/PageHeading";
import { aboutEn, aboutMr } from "@/data/about";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Sahayog Samarpan Seva Foundation — our mission, objectives, journey and commitment to social welfare in Ahilyanagar, Maharashtra.",
};

export default function AboutPage() {
  return (
    <div>
      <PageHeading
        titleMr="आमच्याबद्दल"
        title="About Us"
        description={`${siteConfig.taglineMr} · ${siteConfig.taglineEn}. Est. ${siteConfig.establishedYear}, ${siteConfig.contact.city}, ${siteConfig.contact.state}.`}
      />

      <div className="mx-auto w-full max-w-7xl space-y-16 px-4 pb-16 sm:px-6 lg:px-8">
        <figure className="max-w-3xl border border-rule bg-paper-deep">
          <ContentImage
            src="/images/our-work/diwali-2024-matoshri.png"
            alt="Diwali Celebration 2024 at Matoshri Vriddhashram"
            sizes="(max-width: 768px) 100vw, 48rem"
          />
        </figure>
        <AboutSections content={aboutEn} />
        <AboutSections content={aboutMr} marathi />
        <p>
          <Link
            href="/our-work"
            className="link-rule"
          >
            आमचे कार्य · View our work
          </Link>
        </p>
      </div>
    </div>
  );
}
