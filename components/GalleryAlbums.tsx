"use client";

import { useEffect, useId, useRef, useState } from "react";
import ContentImage from "@/components/ContentImage";
import Heading from "@/components/Heading";
import { spansGalleryColumns } from "@/lib/image-frame";
import type { GalleryAlbum, GalleryImage } from "@/types";

interface GalleryAlbumsProps {
  albums: GalleryAlbum[];
  /** Show each album's heading. An event page already has its own. */
  headings?: boolean;
}

export default function GalleryAlbums({ albums, headings = true }: GalleryAlbumsProps) {
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
    document.body.style.overflow = active ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
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
      <div className="mx-auto w-full max-w-7xl space-y-16 px-4 py-12 sm:px-6 md:py-20 lg:px-8">
        {albums.map((album) => (
          <section key={album.id} id={album.id}>
            {headings && <Heading titleMr={album.titleMr} title={album.title} />}
            <ul className={`${headings ? "mt-6 " : ""}grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3`}>
              {album.images.map((image) => {
                const name = image.captionMr ?? image.alt;
                return (
                  <li
                    key={image.id}
                    className={
                      spansGalleryColumns(image.src) ? "min-w-0 sm:col-span-2" : "min-w-0"
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
        className="m-0 h-dvh max-h-none w-dvw max-w-none overflow-y-auto border-0 bg-paper p-0 text-ink backdrop:bg-brand-navy/70 sm:m-auto sm:h-auto sm:max-h-[calc(100dvh-2rem)] sm:w-[min(100vw-2rem,56rem)] sm:border sm:border-rule"
      >
        {active && (
          <div>
            <div className="flex justify-end border-b border-rule px-4 pt-[env(safe-area-inset-top)]">
              <button
                ref={closeRef}
                type="button"
                onClick={() => setActive(null)}
                className="control-close inline-flex min-h-11 min-w-11 items-center justify-center text-brand-navy"
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
