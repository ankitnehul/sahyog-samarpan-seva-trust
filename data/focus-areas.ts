import type { FocusArea } from "@/types";

/**
 * Areas of work. Home and the footer both read this list.
 * `growth` allows the leaf green; other areas stay in ink and navy.
 */
export const focusAreas: FocusArea[] = [
  { id: "education", label: "Education", labelMr: "शिक्षण", growth: true },
  { id: "healthcare", label: "Healthcare", labelMr: "आरोग्य", growth: false },
  {
    id: "women",
    label: "Women Empowerment",
    labelMr: "महिला सक्षमीकरण",
    growth: false,
  },
  {
    id: "children",
    label: "Child Welfare",
    labelMr: "बालकल्याण",
    growth: true,
  },
  {
    id: "environment",
    label: "Environment",
    labelMr: "पर्यावरण",
    growth: true,
  },
  {
    id: "youth",
    label: "Youth Development",
    labelMr: "युवा विकास",
    growth: true,
  },
  {
    id: "farmers",
    label: "Farmer Welfare",
    labelMr: "शेतकरी कल्याण",
    growth: false,
  },
];
