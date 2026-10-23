import { siteConfig } from "@/data/site";

interface JoinLinkProps {
  fullWidth?: boolean;
}

export default function JoinLink({ fullWidth = false }: JoinLinkProps) {
  return (
    <a
      href={siteConfig.membershipFormUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`focus-gold inline-flex min-h-11 flex-col items-center justify-center rounded-md bg-brand-saffron-action px-4 py-1 text-white transition-colors duration-150 hover:bg-brand-saffron-text active:bg-brand-navy ${
        fullWidth ? "w-full" : ""
      }`}
    >
      <span className="font-display-mr text-sm leading-tight">सदस्य व्हा</span>
      <span className="text-xs font-semibold leading-tight">Join Us</span>
    </a>
  );
}
