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

/** UPI details shown in the Donate dialog once donations are active. */
export interface DonationInfo {
  upiId: string;
  /** QR image path under /public. */
  qrImage: string;
}

/** A single team member / office bearer. */
export interface TeamMember {
  name: string;
  /** Role/portfolio in English, e.g. "President". Optional when the group heading already covers it. */
  role?: string;
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

/** A single gallery image. */
export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  caption?: string;
  captionMr?: string;
  /** CSS object-fit. Use contain for portrait photos so the full frame stays visible. */
  fit?: "cover" | "contain";
}

/** Where an event is in its life. Only "done" and "ongoing" events have their own page. */
export type EventStatus = "done" | "ongoing" | "upcoming";

/** A background-safe photograph for an event's header band. Cropped with cover, behind a scrim. */
export interface EventHero {
  /** Wide / desktop source under /public. */
  src: string;
  /** CSS object-position for the wide source. */
  position?: string;
  /** Portrait or square source for narrow screens. Falls back to `src`. */
  mobileSrc?: string;
  mobilePosition?: string;
}

/**
 * One event. Home, Our Work, each event page, and the Gallery are all views of this.
 */
export interface SiteEvent {
  /** Stable id used as a React key, an anchor, and the /our-work/[id] URL. */
  id: string;
  status: EventStatus;
  /** English heading, e.g. "Maharashtra Day Initiative". */
  title: string;
  /** Optional Marathi heading. */
  titleMr?: string;
  /** ISO date (YYYY-MM-DD). Used for sorting newest-first. Not needed while upcoming. */
  date?: string;
  /** Human-friendly date label, e.g. "1 May 2026" or "Coming soon". */
  dateLabel?: string;
  /** Optional place where the activity happened. */
  location?: string;
  /** Subject photograph under /public. Always shown whole (contain). */
  photo?: string;
  /** CSS object-position, used when the photo is cropped to a thumbnail. */
  photoPosition?: string;
  /** Optional background photograph for the event's header band. */
  hero?: EventHero;
  /** Gallery photographs of this event. Also feed the Gallery page. */
  photos?: GalleryImage[];
  /** Gallery heading, when it differs from the event heading. */
  album?: { title: string; titleMr: string };
  /** Short English line (upcoming events). */
  summary?: string;
  /** Short Marathi line (upcoming events). */
  summaryMr?: string;
  /** Body paragraphs (Marathi), rendered in order. */
  description: string[];
}

/** Photos from one event, shown as its own gallery section. */
export interface GalleryAlbum {
  id: string;
  title: string;
  titleMr: string;
  images: GalleryImage[];
}

/** One area of the sanstha's work. */
export interface FocusArea {
  id: string;
  label: string;
  labelMr: string;
  /** Green is used only for areas marked as growth work. */
  growth: boolean;
}

/** The one membership fee shown wherever joining is offered. */
export interface MembershipFees {
  en: string;
  mr: string;
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
  donation: DonationInfo;
  /** Single membership form URL used by the letterhead, home, and contact page. */
  membershipFormUrl: string;
  fees: MembershipFees;
}
