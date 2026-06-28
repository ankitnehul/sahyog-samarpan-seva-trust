import type { Metadata } from "next";
import ComingSoon from "@/components/ComingSoon";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Sahayog Samarpan Seva Trust — our mission, vision and objectives.",
};

export default function AboutPage() {
  return (
    <ComingSoon
      title="About Us"
      titleMr="आमच्याबद्दल"
      description="Our story, mission and objectives will be shared here soon."
    />
  );
}
