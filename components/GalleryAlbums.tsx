"use client";

import { useEffect, useId, useRef, useState } from "react";
import ContentImage from "@/components/ContentImage";
import { spansGalleryColumns } from "@/lib/image-frame";
import type { GalleryAlbum, GalleryImage } from "@/types";

export default function GalleryAlbums({ albums }: { albums: GalleryAlbum[] }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const [active, setActive] = useState<GalleryImage | null>(null);
  const titleId = useId();

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (active && !dialog.open) {
      dialog.showModal();
      closeRef.current?.focus({ focusVisible: true } as FocusOptions);
    } else if (!active && dialog.open) {
      dialog.close();
    }
  }, [active]);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    const onClose = () => {
      setActive(null);
      triggerRef.current?.focus();
    };
    dialog.addEventListener("close", onClose);
    return () => dialog.removeEventListener("close", onClose);
  }, []);

  return (
    <>
      <div className="mx-auto w-full max-w-7xl space-y-16 px-4 pb-16 sm:px-6 lg:px-8">
        {albums.map((album) => (
          <section key={album.id} id={album.id}>
            <h2 data-enter>
              <span className="font-display-mr block text-[clamp(1.75rem,4vw,2.25rem)] leading-tight text-brand-navy">
                {album.titleMr}
              </span>
              <span className="font-display-en mt-1 block text-2xl font-medium text-ink">
                {album.title}
              </span>
            </h2>
            <ul className="mt-6 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {album.images.map((image) => {
                const name = image.captionMr ?? image.alt;
                return (
                  <li
                    key={image.id}
                    className={
                      spansGalleryColumns(image.src) ? "min-w-0 md:col-span-2" : "min-w-0"
                    }
                  >
                    <figure className="border border-rule bg-paper">
                      <button
                        type="button"
                        aria-haspopup="dialog"
                        aria-label={`${name}. Open photograph`}
                        onClick={(event) => {
                          triggerRef.current = event.currentTarget;
                          setActive(image);
                        }}
                        className="block w-full"
                      >
                        <ContentImage
                          src={image.src}
                          alt={image.alt}
                          sizes="(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 40rem"
                          fit="contain"
                        />
                      </button>
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
                );
              })}
            </ul>
          </section>
        ))}
      </div>

      <dialog
        ref={dialogRef}
        aria-labelledby={active ? titleId : undefined}
        className="m-auto max-h-[calc(100dvh-2rem)] w-[min(100vw-2rem,56rem)] max-w-none overflow-y-auto border border-rule bg-paper p-0 text-ink backdrop:bg-brand-navy/70"
      >
        {active && (
          <div>
            <div className="flex justify-end border-b border-rule px-4">
              <button
                ref={closeRef}
                type="button"
                onClick={() => setActive(null)}
                className="control-close inline-flex min-h-11 items-center text-brand-navy"
              >
                Close
              </button>
            </div>
            <ContentImage
              src={active.src}
              alt={active.alt}
              sizes="(max-width: 896px) 100vw, 56rem"
              fit="contain"
            />
            <div id={titleId} className="border-t border-rule p-4">
              {active.captionMr && (
                <p className="font-marathi text-lg leading-8 text-brand-navy">{active.captionMr}</p>
              )}
              {active.caption && (
                <p className="mt-1 text-base leading-7 text-ink-soft">{active.caption}</p>
              )}
            </div>
          </div>
        )}
      </dialog>
    </>
  );
}
