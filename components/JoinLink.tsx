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
      className={`inline-flex min-h-11 items-center justify-center rounded-md bg-brand-saffron-action px-4 text-sm font-semibold text-white ${
        fullWidth ? "w-full" : ""
      }`}
    >
      Join Us
    </a>
  );
}
