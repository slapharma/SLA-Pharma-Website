"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/lib/site-config";
import {
  PhoneIcon,
  MailIcon,
  LinkedInIcon,
  XIcon,
  MenuIcon,
  CloseIcon,
} from "@/components/shared/icons";

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => { setOpen(false); }, [pathname]);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <header className="absolute top-0 left-0 right-0 z-40">
      <div className="container-page flex h-20 items-center justify-between">
        <Link href="/" aria-label="SLA Pharma home" className="flex items-center">
          <Image
            src="/logo.png"
            alt="SLA Pharma"
            width={120}
            height={60}
            className="h-12 w-auto drop-shadow-sm"
            priority
          />
        </Link>

        <div className="flex items-center gap-4 sm:gap-5">
          <a href={`tel:${siteConfig.phoneTel}`} aria-label="Phone" className="text-white hover:text-primary mix-blend-difference">
            <PhoneIcon className="h-5 w-5" />
          </a>
          <a href={`mailto:${siteConfig.email}`} aria-label="Email" className="text-white hover:text-primary mix-blend-difference">
            <MailIcon className="h-5 w-5" />
          </a>
          <a href={siteConfig.social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-white hover:text-primary mix-blend-difference">
            <LinkedInIcon className="h-5 w-5" />
          </a>
          <a href={siteConfig.social.x} target="_blank" rel="noopener noreferrer" aria-label="X" className="text-white hover:text-primary mix-blend-difference">
            <XIcon className="h-5 w-5" />
          </a>
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            aria-expanded={open}
            className="ml-1 inline-flex items-center justify-center rounded-full border border-white/70 bg-white/30 backdrop-blur p-2 text-white hover:bg-white hover:text-primary transition"
          >
            <MenuIcon className="h-5 w-5" />
          </button>
        </div>
      </div>

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Main menu"
          className="fixed inset-0 z-50 bg-white animate-fade-in"
        >
          <div className="container-page flex h-20 items-center justify-between">
            <Link href="/" aria-label="SLA Pharma home" onClick={() => setOpen(false)} className="flex items-center">
              <Image src="/logo.png" alt="SLA Pharma" width={120} height={60} className="h-12 w-auto" />
            </Link>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="inline-flex items-center justify-center rounded-full border border-gray-300 p-2 text-gray-800 hover:text-primary transition"
            >
              <CloseIcon className="h-5 w-5" />
            </button>
          </div>
          <nav aria-label="Primary" className="container-page pt-4 pb-16">
            <ul className="flex flex-col gap-1">
              {siteConfig.nav.map((item) => {
                const active = pathname === item.href;
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className={`block rounded-lg px-4 py-4 text-2xl sm:text-3xl font-semibold transition-colors ${
                        active ? "text-primary" : "text-gray-900 hover:text-primary"
                      }`}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}
