import type { SiteConfig } from "@/types";

/**
 * SINGLE SOURCE OF TRUTH for site-wide content.
 * Edit values here and they update everywhere (Navbar, Footer, metadata...).
 */
export const siteConfig: SiteConfig = {
  name: "Sahayog Samarpan Seva Foundation",
  nameMr: "सहायोग समर्पण सेवा फाउंडेशन",
  shortName: "Sahayog Samarpan",
  taglineMr: "सेवा हेच कर्म",
  taglineEn: "Service is our Duty",
  establishedYear: 2016,

  description:
    "Sahayog Samarpan Seva Foundation is a non-profit organization dedicated to social welfare and humanitarian service — working in education, healthcare, sanitation, environment, women empowerment, child welfare and youth development for the needy and underprivileged.",

  logo: "/logo/logo.png",

  nav: [
    { label: "Home", labelMr: "मुख्यपृष्ठ", href: "/" },
    { label: "About Us", labelMr: "आमच्याबद्दल", href: "/about" },
    { label: "Our Work", labelMr: "आमचे कार्य", href: "/our-work" },
    { label: "Our Team", labelMr: "आमची टीम", href: "/team" },
    { label: "Gallery", labelMr: "गॅलरी", href: "/gallery" },
    { label: "Contact", labelMr: "संपर्क", href: "/contact" },
  ],

  contact: {
    email: "sahayogsamarpanseva@gmail.com",
    whatsapp: "",
    whatsappCommunity: "https://chat.whatsapp.com/Bpv1zVCfabT9pkV5jLoGNo",
    addressLine: "",
    city: "Ahilyanagar",
    state: "Maharashtra",
    contacts: [
      { name: "Shubham Madake", phone: "+91 8805566365" },
      { name: "Rohit Bhojane", phone: "+91 7350969468" },
    ],
  },

  social: [
    {
      platform: "instagram",
      label: "Instagram",
      href: "https://www.instagram.com/sahayogsamarpan?igsh=MXduNHcyMzZseTA1Mw==",
    },
    { platform: "facebook", label: "Facebook", href: "" },
    { platform: "youtube", label: "YouTube", href: "" },
    {
      platform: "linkedin",
      label: "LinkedIn",
      href: "https://www.linkedin.com/company/sahyog-samarpan-seva-foundation/",
    },
    {
      platform: "whatsapp",
      label: "WhatsApp",
      href: "https://chat.whatsapp.com/Bpv1zVCfabT9pkV5jLoGNo",
    },
  ],

  donationStatus: "coming-soon",
};
