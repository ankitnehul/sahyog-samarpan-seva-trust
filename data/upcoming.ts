import type { UpcomingEvent } from "@/types";

/**
 * Upcoming / planned events shown on the homepage.
 * Add, edit or remove entries here.
 */
export const upcomingEvents: UpcomingEvent[] = [
  {
    id: "rainwater-harvesting-awareness",
    title: "Rainwater Harvesting Awareness",
    titleMr: "जलसंधारण जनजागृती",
    dateLabel: "Coming soon",
    description:
      "An awareness initiative to educate citizens about the importance of saving water through rainwater harvesting. The program will highlight simple, practical methods to collect and conserve rainwater at homes and in the community, helping recharge groundwater and build a sustainable future.",
  },
  {
    id: "drawing-competition-mukbadhir",
    title: "Drawing Competition at Mukbadhir Vidyalaya",
    titleMr: "चित्रकला स्पर्धा – मूकबधिर विद्यालय",
    location: "Mukbadhir Vidyalaya, Ahilyanagar",
    dateLabel: "Coming soon",
    description:
      "A drawing competition organized for the students of Mukbadhir Vidyalaya, Ahilyanagar, to encourage creativity and self-expression among specially-abled children and celebrate their talent.",
  },
];
