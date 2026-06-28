import type { Metadata } from "next";
import ComingSoon from "@/components/ComingSoon";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Photos and highlights from Sahayog Samarpan Seva Trust events and activities.",
};

export default function GalleryPage() {
  return (
    <ComingSoon
      title="Gallery"
      titleMr="गॅलरी"
      description="Event photos and activity highlights will be uploaded here soon."
    />
  );
}
