// Shared TypeScript types for the whole site.
// Think of these as DTOs/interfaces: one source of truth for data shapes.

/** A single navigation link, with English + Marathi labels. */
export interface NavItem {
  label: string;
  labelMr: string;
  href: string;
}

/** Supported social platforms. Add more as needed. */
export type SocialPlatform =
  | "instagram"
  | "facebook"
  | "youtube"
  | "linkedin"
  | "whatsapp"
  | "twitter";

/** A social media link. `href` is empty until the client shares it. */
export interface SocialLink {
  platform: SocialPlatform;
  label: string;
  href: string;
}

/** Official contact details. Left blank for now, filled later. */
export interface ContactInfo {
  phone: string;
  email: string;
  whatsapp: string;
  addressLine: string;
  city: string;
  state: string;
}

/** Donation availability state. */
export type DonationStatus = "coming-soon" | "active";

/** A single team member / office bearer. */
export interface TeamMember {
  name: string;
  /** Role/portfolio in English, e.g. "President". */
  role: string;
  /** Role/portfolio in Marathi, e.g. "अध्यक्ष". */
  roleMr?: string;
  /**
   * Optional photo path under /public, e.g. "/images/team/shubham-madke.jpg".
   * If omitted or the file is missing, the Avatar shows the member's initials.
   */
  photo?: string;
  /** When true, this member is shown without a passport photo frame. */
  hidePhoto?: boolean;
}

/** A named group of members shown under one heading (e.g. a project team). */
export interface TeamGroup {
  title: string;
  titleMr?: string;
  description?: string;
  members: TeamMember[];
}

/** Top-level configuration for the entire site. */
export interface SiteConfig {
  name: string;
  nameMr: string;
  shortName: string;
  taglineMr: string;
  taglineEn: string;
  establishedYear: number;
  description: string;
  logo: string;
  nav: NavItem[];
  contact: ContactInfo;
  social: SocialLink[];
  donationStatus: DonationStatus;
}
