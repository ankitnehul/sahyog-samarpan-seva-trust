import type { Metadata } from "next";
import ContentImage from "@/components/ContentImage";
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

      <div className="mx-auto w-full max-w-7xl space-y-16 px-4 pb-16 sm:px-6 lg:px-8">
        {galleryAlbums.map((album) => (
          <section key={album.id} id={album.id}>
            <h2>
              <span className="font-display-mr block text-3xl leading-tight text-brand-navy">
                {album.titleMr}
              </span>
              <span className="font-display-en mt-1 block text-2xl font-medium text-ink">
                {album.title}
              </span>
            </h2>
            <ul className="mt-6 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {album.images.map((image) => (
                <li key={image.id} className="min-w-0">
                  <figure className="border border-rule bg-paper">
                    <ContentImage
                      src={image.src}
                      alt={image.alt}
                      sizes="(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 33vw"
                      fit="contain"
                    />
                    {(image.caption || image.captionMr) && (
                      <figcaption className="border-t border-rule p-4">
                        {image.captionMr && (
                        <p className="font-marathi text-lg leading-8 text-brand-navy">
                          {image.captionMr}
                        </p>
                      )}
                      {image.caption && (
                        <p className="mt-1 text-base leading-7 text-ink-soft">{image.caption}</p>
                        )}
                      </figcaption>
                    )}
                  </figure>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
}
