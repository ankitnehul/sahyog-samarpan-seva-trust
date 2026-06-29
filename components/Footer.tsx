import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";
import {
  FaInstagram,
  FaFacebookF,
  FaYoutube,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa6";
import type { IconType } from "react-icons";
import { siteConfig } from "@/data/site";
import type { SocialPlatform } from "@/types";

const socialIcons: Record<SocialPlatform, IconType> = {
  instagram: FaInstagram,
  facebook: FaFacebookF,
  youtube: FaYoutube,
  linkedin: FaLinkedinIn,
  whatsapp: FaWhatsapp,
  twitter: FaInstagram, // placeholder; swap when needed
};

const focusAreas = [
  "Education",
  "Healthcare",
  "Women Empowerment",
  "Child Welfare",
  "Environment",
  "Youth Development",
];

export default function Footer() {
  const { contact } = siteConfig;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-navy text-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 py-12 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        {/* Brand */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <Image
              src={siteConfig.logo}
              alt={`${siteConfig.name} logo`}
              width={48}
              height={48}
              className="h-12 w-12 rounded-full bg-white object-contain p-0.5"
            />
            <div className="leading-tight">
              <p className="font-semibold">{siteConfig.shortName}</p>
              <p className="font-marathi text-sm text-brand-gold">
                {siteConfig.taglineMr}
              </p>
            </div>
          </div>
          <p className="text-sm leading-relaxed text-white/70">
            {siteConfig.description}
          </p>
        </div>

        {/* Quick links */}
        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-brand-gold">
            Quick Links
          </h3>
          <ul className="space-y-2">
            {siteConfig.nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-white/70 transition-colors hover:text-white"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Focus areas */}
        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-brand-gold">
            Our Focus
          </h3>
          <ul className="space-y-2">
            {focusAreas.map((area) => (
              <li key={area} className="text-sm text-white/70">
                {area}
              </li>
            ))}
          </ul>
        </div>

        {/* Contact + social */}
        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-brand-gold">
            Get in Touch
          </h3>
          <ul className="space-y-3 text-sm text-white/70">
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-saffron" />
              <span>
                {contact.addressLine ? `${contact.addressLine}, ` : ""}
                {contact.city}, {contact.state}
              </span>
            </li>
            <li className="flex items-start gap-2">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-brand-saffron" />
              <span>
                {contact.contacts.map((c) => c.phone).join(" / ")}
              </span>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 shrink-0 text-brand-saffron" />
              <a
                href={`mailto:${contact.email}`}
                className="transition-colors hover:text-white"
              >
                {contact.email}
              </a>
            </li>
          </ul>

          <div className="mt-5">
            <p className="mb-2 text-xs uppercase tracking-wider text-white/50">
              Follow us
            </p>
            <div className="flex gap-2">
              {siteConfig.social.map((s) => {
                const Icon = socialIcons[s.platform];
                const classes =
                  "flex h-9 w-9 items-center justify-center rounded-full bg-white/10";
                return s.href ? (
                  <a
                    key={s.platform}
                    href={s.href}
                    aria-label={s.label}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${classes} transition-colors hover:bg-brand-saffron`}
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                ) : (
                  <span
                    key={s.platform}
                    aria-label={`${s.label} coming soon`}
                    title={`${s.label} coming soon`}
                    className={`${classes} cursor-not-allowed text-white/40`}
                  >
                    <Icon className="h-4 w-4" />
                  </span>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-5 text-xs text-white/60 sm:flex-row sm:px-6 lg:px-8">
          <p>
            &copy; {siteConfig.establishedYear}&ndash;{currentYear}{" "}
            {siteConfig.name}. All rights reserved.
          </p>
          <p className="font-marathi text-brand-gold">{siteConfig.taglineMr}</p>
        </div>
      </div>
    </footer>
  );
}
