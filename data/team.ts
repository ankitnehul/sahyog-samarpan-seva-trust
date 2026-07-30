import type { TeamMember, TeamGroup } from "@/types";

/**
 * SINGLE SOURCE OF TRUTH for people.
 *
 * To add a photo: drop a passport-size image into
 *   public/images/team/<filename>
 * matching the `photo` path below. Until then, initials are shown.
 */

/** Managing Committee — shown with passport-size photos. */
export const managingCommittee: TeamMember[] = [
  {
    name: "Shubham Madke",
    role: "President",
    roleMr: "अध्यक्ष",
    photo: "/images/team/shubham-madke.png",
  },
  {
    name: "Rohit Bhojane",
    role: "Vice President",
    roleMr: "उपाध्यक्ष",
    photo: "/images/team/rohit-bhojane.png",
  },
  {
    name: "Devdatta Zikre",
    role: "Secretary",
    roleMr: "सचिव",
    photo: "/images/team/devdatta-zikre.png",
  },
  {
    name: "Laukik Shelke",
    role: "Vice Secretary",
    roleMr: "उपसचिव",
    photo: "/images/team/laukik-shelke.png",
  },
  {
    name: "Rushikesh Ghule",
    role: "Treasurer",
    roleMr: "कोषाध्यक्ष",
    photo: "/images/team/rushikesh-ghule.png",
  },
];

/** Project Heads + other teams — shown portfolio-wise as name lists. */
export const projectTeams: TeamGroup[] = [
  {
    title: "Administrative Officer",
    titleMr: "प्रशासकीय अधिकारी",
    members: [{ name: "Prajakta Bhandari" }],
  },
  {
    title: "Education Project Heads",
    titleMr: "शिक्षण प्रकल्प प्रमुख",
    members: [
      { name: "Chinmay Patil" },
      { name: "Ankit Nehul" },
      { name: "Laukik Shelke" },
      { name: "Devdatta Zikre" },
      { name: "Pratiksha Joshi" },
    ],
  },
  {
    title: "Health Project Heads",
    titleMr: "आरोग्य प्रकल्प प्रमुख",
    members: [
      { name: "Aman Shaikh" },
      { name: "Rahul Honde" },
      { name: "Prajakta Bhandari" },
    ],
  },
  {
    title: "Sports Project Head",
    titleMr: "क्रीडा प्रकल्प प्रमुख",
    members: [{ name: "Sahealam Khan" }],
  },
  {
    title: "Social Media Heads",
    titleMr: "सोशल मीडिया प्रमुख",
    members: [{ name: "Viraj Rasal" }, { name: "Rishabh Bane" }],
  },
];

/** General members — shown as a name list under Members. */
export const members: TeamMember[] = [
  { name: "Ajinkya Likhe" },
  { name: "Anand Goyal" },
  { name: "Janhavi Dake" },
  { name: "Sarthak Miskin" },
  { name: "Sumit Ghodake" },
  { name: "Vedant Kadam" },
];
