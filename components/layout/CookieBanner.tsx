"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

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
      className="fixed inset-x-4 bottom-4 z-50 rounded-lg bg-gray-900 text-white shadow-xl md:inset-x-auto md:right-6 md:bottom-6 md:max-w-md"
    >
      <div className="p-5">
        <p className="text-sm leading-6">
          We use cookies to improve your experience and analyse site traffic. See our{" "}
          <Link href="/privacy-policy" className="underline hover:text-primary">privacy policy</Link>.
        </p>
        <div className="mt-4 flex gap-3">
          <button type="button" onClick={() => decide("accepted")} className="btn-primary py-2 px-4 text-sm">Accept</button>
          <button type="button" onClick={() => decide("rejected")} className="text-sm font-medium px-4 py-2 rounded-lg border border-gray-600 hover:bg-gray-800">Reject</button>
        </div>
      </div>
    </div>
  );
}
