import type { Metadata } from "next";
import Image from "next/image";
import { galleryImages } from "@/data/gallery";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Photos and highlights from Sahayog Samarpan Seva Foundation events and activities.",
};

export default function GalleryPage() {
  return (
    <div className="bg-white">
      <section className="bg-brand-navy py-16 text-center text-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <p className="font-marathi text-brand-gold">गॅलरी</p>
          <h1 className="mt-1 text-3xl font-bold tracking-tight sm:text-4xl">
            Gallery
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-white/70">
            Moments from our seva activities, community visits and events.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {galleryImages.map((image) => (
            <figure
              key={image.id}
              className="group overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm transition-shadow hover:shadow-lg"
            >
              <div className="relative aspect-[4/3] w-full bg-brand-cream">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              {(image.caption || image.captionMr) && (
                <figcaption className="p-4">
                  {image.caption && (
                    <p className="text-sm font-medium text-brand-navy">
                      {image.caption}
                    </p>
                  )}
                  {image.captionMr && (
                    <p className="font-marathi mt-1 text-xs text-brand-saffron">
                      {image.captionMr}
                    </p>
                  )}
                </figcaption>
              )}
            </figure>
          ))}
        </div>
      </section>
    </div>
  );
}
