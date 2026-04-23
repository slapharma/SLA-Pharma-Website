"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

const STORAGE_KEY = "sla-cookie-consent";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem(STORAGE_KEY)) setVisible(true);
    } catch {}
  }, []);

  const decide = (value: "accepted" | "rejected") => {
    try { localStorage.setItem(STORAGE_KEY, value); } catch {}
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Cookie consent"
      className="fixed bottom-0 inset-x-0 z-50 bg-white/98 backdrop-blur border-t border-gray-200 shadow-lg"
    >
      <div className="container-page py-3 flex flex-col md:flex-row gap-3 md:gap-6 items-start md:items-center justify-between">
        <p className="text-sm leading-6 text-gray-700">
          {siteConfig.cookieBanner.copy}{" "}
          <Link href="/privacy-policy" className="text-primary underline underline-offset-2 hover:text-primary-dark">
            Learn more
          </Link>
        </p>
        <div className="flex gap-2 flex-none">
          <button
            type="button"
            onClick={() => decide("rejected")}
            className="text-sm font-medium px-4 py-2 rounded border border-gray-300 text-gray-800 hover:bg-gray-50"
          >
            {siteConfig.cookieBanner.rejectLabel}
          </button>
          <button
            type="button"
            onClick={() => decide("accepted")}
            className="text-sm font-semibold px-4 py-2 rounded bg-primary text-white hover:bg-primary-dark"
          >
            {siteConfig.cookieBanner.acceptLabel}
          </button>
        </div>
      </div>
    </div>
  );
}
