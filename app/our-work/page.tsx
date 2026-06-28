import type { Metadata } from "next";
import ComingSoon from "@/components/ComingSoon";

export const metadata: Metadata = {
  title: "Our Work",
  description:
    "Explore the social welfare programs and initiatives of Sahyog Samarpan Seva Trust.",
};

export default function OurWorkPage() {
  return (
    <ComingSoon
      title="Our Work"
      titleMr="आमचे कार्य"
      description="Details about our education, health, sports and outreach programs will be added soon."
    />
  );
}
