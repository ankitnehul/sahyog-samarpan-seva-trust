import type { Metadata } from "next";
import ComingSoon from "@/components/ComingSoon";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Sahayog Samarpan Seva Trust.",
};

export default function ContactPage() {
  return (
    <ComingSoon
      title="Contact"
      titleMr="संपर्क"
      description="Contact details and a contact form will be available here soon."
    />
  );
}
