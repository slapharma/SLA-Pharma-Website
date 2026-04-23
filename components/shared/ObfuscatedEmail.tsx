"use client";

import { useEffect, useState } from "react";

export function ObfuscatedEmail({
  user,
  domain,
  className,
}: {
  user: string;
  domain: string;
  className?: string;
}) {
  const [revealed, setRevealed] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setRevealed(true), 0);
    return () => clearTimeout(t);
  }, []);

  if (!revealed) {
    return <span className={className} aria-label="Email">{user}&#64;&#8230;</span>;
  }
  const address = `${user}@${domain}`;
  return (
    <a href={`mailto:${address}`} className={className}>
      {address}
    </a>
  );
}
