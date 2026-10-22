import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa6";
import type { IconType } from "react-icons";
import Seal from "@/components/Seal";
import { focusAreas } from "@/data/focus-areas";
import { siteConfig } from "@/data/site";
import { toDevanagariDigits } from "@/lib/numerals";
import type { SocialPlatform } from "@/types";

const socialIcons: Record<SocialPlatform, IconType> = {
  instagram: FaInstagram,
  facebook: FaFacebookF,
  youtube: FaYoutube,
  linkedin: FaLinkedinIn,
  whatsapp: FaWhatsapp,
  twitter: FaInstagram,
};

export default function Footer() {
  const { contact } = siteConfig;
  const currentYear = new Date().getFullYear();
  const established = toDevanagariDigits(siteConfig.establishedYear);

  return (
    <footer className="bg-brand-navy text-white">
      <div className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <p className="font-display-mr text-[clamp(2rem,5vw,3.25rem)] leading-tight text-brand-gold">
          {siteConfig.taglineMr}
        </p>
        <p className="font-display-en mt-2 text-xl font-medium text-white">
          {siteConfig.taglineEn}
        </p>

        <div className="mt-10 grid gap-10 sm:grid-cols-2 xl:grid-cols-4">
          <div className="min-w-0">
            <h2 className="text-sm font-semibold tracking-wide text-brand-gold">
              आमचे कार्यक्षेत्र
            </h2>
            <ul className="mt-4 space-y-2">
              {focusAreas.map((area) => (
                <li key={area.id} className="text-sm leading-6 text-white">
                  <span className="font-marathi">{area.labelMr}</span>
                  <span className="text-white/85"> · {area.label}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="min-w-0">
            <h2 className="text-sm font-semibold tracking-wide text-brand-gold">
              पृष्ठे
            </h2>
            <ul className="mt-4 space-y-1">
              {siteConfig.nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="inline-flex min-h-11 items-center text-sm text-white"
                  >
                    {item.labelMr}
                    <span className="text-white/85"> · {item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="min-w-0">
            <h2 className="text-sm font-semibold tracking-wide text-brand-gold">
              संपर्क
            </h2>
            <ul className="mt-4 space-y-3 text-sm leading-6 text-white">
              <li className="flex items-start gap-2">
                <MapPin className="mt-1 h-4 w-4 shrink-0 text-brand-gold" aria-hidden="true" />
                <span>
                  {contact.addressLine ? `${contact.addressLine}, ` : ""}
                  {contact.city}, {contact.state}
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="mt-1 h-4 w-4 shrink-0 text-brand-gold" aria-hidden="true" />
                <span>{contact.contacts.map((person) => person.phone).join(" / ")}</span>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="mt-1 h-4 w-4 shrink-0 text-brand-gold" aria-hidden="true" />
                <a href={`mailto:${contact.email}`} className="min-w-0 break-all">
                  {contact.email}
                </a>
              </li>
            </ul>
          </div>

          <div className="min-w-0">
            <div className="flex items-center gap-3">
              <Seal className="h-14 w-[3.2rem]" sizes="64px" />
              <p className="font-display-en text-lg font-medium leading-tight">
                {siteConfig.shortName}
              </p>
            </div>
            <ul className="mt-4 flex flex-wrap gap-2">
              {siteConfig.social.map((item) => {
                const Icon = socialIcons[item.platform];
                return item.href ? (
                  <li key={item.platform}>
                    <a
                      href={item.href}
                      aria-label={item.label}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-11 min-w-11 items-center justify-center bg-white/10"
                    >
                      <Icon className="h-4 w-4" aria-hidden="true" />
                    </a>
                  </li>
                ) : (
                  <li
                    key={item.platform}
                    className="inline-flex min-h-11 items-center text-sm text-white/85"
                  >
                    {item.label} · coming soon
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/20">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-2 px-4 py-5 text-sm text-white sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p>
            स्थापना {established} · Est. {siteConfig.establishedYear}
          </p>
          <p>
            © {siteConfig.establishedYear}–{currentYear} {siteConfig.name}
          </p>
        </div>
      </div>
    </footer>
  );
}
