import type { SiteConfig } from "@/types";

/**
 * SINGLE SOURCE OF TRUTH for site-wide content.
 * Edit values here and they update everywhere (Navbar, Footer, metadata...).
 */
export const siteConfig: SiteConfig = {
  name: "Sahayog Samarpan Seva Trust",
  nameMr: "सहायोग समर्पण सेवा ट्रस्ट",
  shortName: "Sahayog Samarpan",
  taglineMr: "सेवा हेच कर्म",
  taglineEn: "Service is our Duty",
  establishedYear: 2016,

  description:
    "Sahayog Samarpan Seva Trust is a non-profit organization dedicated to social welfare and humanitarian service — working in education, healthcare, sanitation, environment, women empowerment, child welfare and youth development for the needy and underprivileged.",

  logo: "/logo/logo.png",

  // Primary navigation. Folders under app/ will match these hrefs in Phase 4.
  nav: [
    { label: "Home", labelMr: "मुख्यपृष्ठ", href: "/" },
    { label: "About Us", labelMr: "आमच्याबद्दल", href: "/about" },
    { label: "Our Work", labelMr: "आमचे कार्य", href: "/our-work" },
    { label: "Our Team", labelMr: "आमची टीम", href: "/team" },
    { label: "Gallery", labelMr: "गॅलरी", href: "/gallery" },
    { label: "Contact", labelMr: "संपर्क", href: "/contact" },
  ],

  // Left blank intentionally — will be filled when the client shares details.
  contact: {
    phone: "",
    email: "",
    whatsapp: "",
    whatsappCommunity: "https://chat.whatsapp.com/Bpv1zVCfabT9pkV5jLoGNo",
    addressLine: "",
    city: "Ahilyanagar",
    state: "Maharashtra",
  },

  // Placeholders: hrefs empty until links are provided. Rendered as "coming soon".
  social: [
    { platform: "instagram", label: "Instagram", href: "" },
    { platform: "facebook", label: "Facebook", href: "" },
    { platform: "youtube", label: "YouTube", href: "" },
    { platform: "linkedin", label: "LinkedIn", href: "" },
    { platform: "whatsapp", label: "WhatsApp", href: "https://chat.whatsapp.com/Bpv1zVCfabT9pkV5jLoGNo" },
  ],

  donationStatus: "coming-soon",
};
