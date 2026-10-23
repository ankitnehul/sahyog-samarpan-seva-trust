"use client";

interface DonateButtonProps {
  fullWidth?: boolean;
}

/** Stays in the tab order so the coming-soon state can be read. It does not submit. */
export default function DonateButton({ fullWidth = false }: DonateButtonProps) {
  return (
    <button
      type="button"
      aria-disabled="true"
      title="Donations coming soon"
      onClick={(event) => event.preventDefault()}
      className={`focus-gold inline-flex min-h-11 cursor-not-allowed items-center justify-center gap-2 rounded-md border border-rule bg-transparent px-4 text-sm font-medium text-ink-soft transition-colors duration-150 hover:border-brand-navy hover:text-brand-navy active:border-brand-saffron-text active:text-brand-saffron-text ${
        fullWidth ? "w-full" : ""
      }`}
    >
      Donate
      <span>Coming soon</span>
    </button>
  );
}
