"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

/**
 * Old links looked like /our-work#<event-id> (shared on WhatsApp before each event had its own page).
 * Send those to the event page.
 */
export default function HashRedirect({ ids }: { ids: string[] }) {
  const router = useRouter();
  useEffect(() => {
    const id = decodeURIComponent(window.location.hash.slice(1));
    if (id && ids.includes(id)) router.replace(`/our-work/${id}`);
  }, [ids, router]);
  return null;
}
