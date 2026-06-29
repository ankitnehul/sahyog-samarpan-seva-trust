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

/** A named contact person with phone number. */
export interface ContactPerson {
  name: string;
  phone: string;
}

/** Official contact details. */
export interface ContactInfo {
  email: string;
  whatsapp: string;
  /** WhatsApp community invite link. */
  whatsappCommunity?: string;
  addressLine: string;
  city: string;
  state: string;
  contacts: ContactPerson[];
}

/** A titled block on the About page. */
export interface AboutSection {
  title: string;
  paragraphs?: string[];
  bullets?: string[];
}

/** About page content (single language). */
export interface AboutContent {
  intro: string;
  sections: AboutSection[];
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

/** A single event / activity shown on the "Our Work" page. */
export interface WorkEvent {
  /** Stable id used as a React key and anchor. */
  id: string;
  /** English heading, e.g. "Maharashtra Day Initiative". */
  title: string;
  /** Optional Marathi heading. */
  titleMr?: string;
  /** ISO date (YYYY-MM-DD) used for sorting newest-first. */
  date: string;
  /** Human-friendly date label, e.g. "1 May 2026". */
  dateLabel: string;
  /** Optional place where the activity happened. */
  location?: string;
  /** Photo path under /public, e.g. "/images/our-work/...". */
  photo: string;
  /** Body paragraphs (Marathi), rendered in order. */
  description: string[];
}

/** An upcoming (planned) event shown on the homepage. */
export interface UpcomingEvent {
  id: string;
  title: string;
  titleMr?: string;
  /** Optional place where it will be held. */
  location?: string;
  /** Optional date label, e.g. "Coming soon" or "15 July 2026". */
  dateLabel?: string;
  description: string;
  descriptionMr?: string;
}

/** A single gallery image. */
export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  caption?: string;
  captionMr?: string;
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
