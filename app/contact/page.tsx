import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import { FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa6";
import JoinLink from "@/components/JoinLink";
import PageHeading from "@/components/PageHeading";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Sahayog Samarpan Seva Foundation.",
};

export default function ContactPage() {
  const { contact, social } = siteConfig;
  const instagram = social.find((item) => item.platform === "instagram");
  const linkedin = social.find((item) => item.platform === "linkedin");

  return (
    <div>
      <PageHeading
        titleMr="संपर्क"
        title="Contact"
        description="Reach Sahayog Samarpan Seva Foundation, join the WhatsApp community, or become a member."
      />

      <div className="mx-auto w-full max-w-3xl px-4 pb-16 sm:px-6">
        {contact.whatsappCommunity && (
          <section className="border-t border-rule py-8">
            <h2>
              <span className="font-display-mr block text-3xl text-brand-navy">व्हॉट्सॲप समुदाय</span>
              <span className="font-display-en mt-1 block text-2xl font-medium text-ink">
                WhatsApp community
              </span>
            </h2>
            <p className="mt-4 max-w-prose text-base leading-7">
              Join the community for news of events, seva, and announcements.
            </p>
            <a
              href={contact.whatsappCommunity}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex min-h-11 items-center gap-2 rounded-full bg-[#25D366] px-5 text-sm font-semibold text-ink"
            >
              <FaWhatsapp className="h-5 w-5" aria-hidden="true" />
              Join WhatsApp community
            </a>
          </section>
        )}

        <section className="border-t border-rule py-8">
          <h2>
            <span className="font-display-mr block text-3xl text-brand-navy">सदस्यत्व</span>
            <span className="font-display-en mt-1 block text-2xl font-medium text-ink">
              Membership
            </span>
          </h2>
          <p className="mt-4 max-w-prose text-base leading-7">
            Ordinary membership is {siteConfig.fees.ordinary}. Lifetime membership is{" "}
            {siteConfig.fees.lifetime}.
          </p>
          <div className="mt-5">
            <JoinLink />
          </div>
        </section>

        <section className="border-t border-rule py-8">
          <h2>
            <span className="font-display-mr block text-3xl text-brand-navy">संपर्क माहिती</span>
            <span className="font-display-en mt-1 block text-2xl font-medium text-ink">
              Phone, email, and place
            </span>
          </h2>
          <ul className="mt-6 space-y-5 text-base leading-7">
            <li className="flex items-start gap-3">
              <MapPin className="mt-1 h-5 w-5 shrink-0 text-brand-saffron-text" aria-hidden="true" />
              <p>
                {contact.addressLine ? `${contact.addressLine}, ` : ""}
                {contact.city}, {contact.state}
              </p>
            </li>
            <li className="flex items-start gap-3">
              <Phone className="mt-1 h-5 w-5 shrink-0 text-brand-saffron-text" aria-hidden="true" />
              <ul className="min-w-0 space-y-2">
                {contact.contacts.map((person) => (
                  <li key={person.phone}>
                    <a href={`tel:${person.phone.replace(/\s/g, "")}`} className="inline-flex min-h-11 items-center">
                      {person.name} — {person.phone}
                    </a>
                  </li>
                ))}
              </ul>
            </li>
            <li className="flex items-start gap-3">
              <Mail className="mt-1 h-5 w-5 shrink-0 text-brand-saffron-text" aria-hidden="true" />
              <a href={`mailto:${contact.email}`} className="inline-flex min-h-11 items-center break-all">
                {contact.email}
              </a>
            </li>
            <li>
              <p className="font-medium text-brand-navy">NGO Darpan</p>
              <p className="mt-1">Darpan ID — MH/2026/1159343</p>
            </li>
          </ul>

          <h3 className="mt-8 font-display-en text-xl font-medium text-ink">Follow</h3>
          <ul className="mt-3 flex flex-col gap-2 sm:flex-row sm:flex-wrap">
            {instagram?.href && (
              <li>
                <a
                  href={instagram.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center gap-2 border border-rule px-4 text-sm font-medium text-brand-navy"
                >
                  <FaInstagram className="h-4 w-4" aria-hidden="true" />
                  Instagram
                </a>
              </li>
            )}
            {linkedin?.href && (
              <li>
                <a
                  href={linkedin.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center gap-2 border border-rule px-4 text-sm font-medium text-brand-navy"
                >
                  <FaLinkedinIn className="h-4 w-4" aria-hidden="true" />
                  LinkedIn
                </a>
              </li>
            )}
          </ul>
        </section>
      </div>
    </div>
  );
}
