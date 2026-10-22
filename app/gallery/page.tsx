import type { Metadata } from "next";
import GalleryAlbums from "@/components/GalleryAlbums";
import PageHeading from "@/components/PageHeading";
import { galleryAlbums } from "@/data/gallery";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Photos and highlights from Sahayog Samarpan Seva Foundation events and activities.",
};

export default function GalleryPage() {
  return (
    <div>
      <PageHeading
        titleMr="गॅलरी"
        title="Gallery"
        description="Moments from our seva, community visits, and events. Each photograph is shown in full."
      />
      <GalleryAlbums albums={galleryAlbums} />
    </div>
  );
}
