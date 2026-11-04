"use client";

import { useEffect, useId, useRef, useState } from "react";
import ContentImage from "@/components/ContentImage";
import { siteConfig } from "@/data/site";

interface DonateButtonProps {
  fullWidth?: boolean;
}

/** Opens a dialog with the UPI QR. Falls back to a disabled coming-soon state. */
export default function DonateButton({ fullWidth = false }: DonateButtonProps) {
  const { donationStatus, donation } = siteConfig;
  const dialogRef = useRef<HTMLDialogElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const [open, setOpen] = useState(false);
  const titleId = useId();

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (open && !dialog.open) {
      dialog.showModal();
      closeRef.current?.focus({ focusVisible: true } as FocusOptions);
    } else if (!open && dialog.open) {
      dialog.close();
    }
  }, [open]);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    const onClose = () => setOpen(false);
    dialog.addEventListener("close", onClose);
    return () => dialog.removeEventListener("close", onClose);
  }, []);

  const width = fullWidth ? "w-full" : "";

  if (donationStatus !== "active") {
    return (
      <button
        type="button"
        aria-disabled="true"
        title="Donations coming soon"
        onClick={(event) => event.preventDefault()}
        className={`focus-gold inline-flex min-h-11 cursor-not-allowed items-center justify-center gap-2 rounded-md border border-rule bg-transparent px-4 text-sm font-medium text-ink-soft transition-colors duration-150 hover:border-brand-navy hover:text-brand-navy active:border-brand-saffron-text active:text-brand-saffron-text ${width}`}
      >
        Donate
        <span>Coming soon</span>
      </button>
    );
  }

  return (
    <>
      <button
        type="button"
        aria-haspopup="dialog"
        onClick={() => setOpen(true)}
        className={`focus-gold inline-flex min-h-11 items-center justify-center gap-2 rounded-md border border-brand-navy bg-transparent px-4 text-sm font-medium text-brand-navy transition-colors duration-150 hover:bg-brand-navy hover:text-white active:bg-brand-navy-dark active:text-white ${width}`}
      >
        Donate
      </button>

      <dialog
        ref={dialogRef}
        aria-labelledby={open ? titleId : undefined}
        className="m-auto max-h-[calc(100dvh-2rem)] w-[min(100vw-2rem,26rem)] max-w-none overflow-y-auto border border-rule bg-paper p-0 text-ink backdrop:bg-brand-navy/70"
      >
        {open && (
          <div>
            <div className="flex items-center justify-between gap-4 border-b border-rule pl-4 pr-4">
              <h2 id={titleId} className="py-2 leading-tight">
                <span className="font-display-mr block text-xl text-brand-navy">देणगी</span>
                <span className="block text-sm text-ink-soft">Donate via UPI</span>
              </h2>
              <button
                ref={closeRef}
                type="button"
                onClick={() => setOpen(false)}
                className="control-close inline-flex min-h-11 min-w-11 items-center justify-center text-brand-navy"
              >
                Close
              </button>
            </div>
            <ContentImage
              src={donation.qrImage}
              alt={`UPI QR code for ${siteConfig.name}`}
              sizes="26rem"
              fit="contain"
            />
            <p className="border-t border-rule p-4 text-base leading-7">
              UPI ID: <span className="break-all font-semibold">{donation.upiId}</span>
            </p>
          </div>
        )}
      </dialog>
    </>
  );
}
