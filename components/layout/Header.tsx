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
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => { setOpen(false); setOpenDropdown(null); }, [pathname]);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const headerBase =
    "fixed top-0 left-0 right-0 z-40 transition-colors duration-300";
  const headerBg = scrolled
    ? "bg-white/95 backdrop-blur border-b border-gray-200 shadow-sm"
    : "bg-transparent";
  const iconColor = scrolled ? "text-gray-700" : "text-white drop-shadow";
  const navLinkColor = scrolled ? "text-gray-800" : "text-white drop-shadow";

  return (
    <header className={`${headerBase} ${headerBg}`}>
      <div className="container-page flex h-20 items-center justify-between gap-6">
        <Link href="/" aria-label="SLA Pharma home" className="flex items-center">
          <Image
            src="/logo.png"
            alt="SLA Pharma"
            width={120}
            height={60}
            className={`h-12 w-auto ${scrolled ? "" : "drop-shadow-md"}`}
            priority
          />
        </Link>

        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-6 lg:gap-8">
            {siteConfig.nav.map((item) => {
              const active =
                pathname === item.href ||
                item.children?.some((c) => c.href === pathname);
              const hasChildren = !!item.children?.length;
              return (
                <li
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => hasChildren && setOpenDropdown(item.label)}
                  onMouseLeave={() => hasChildren && setOpenDropdown(null)}
                >
                  {hasChildren ? (
                    <button
                      type="button"
                      aria-haspopup="true"
                      aria-expanded={openDropdown === item.label}
                      onClick={() => setOpenDropdown((v) => (v === item.label ? null : item.label))}
                      className={`inline-flex items-center gap-1 text-sm font-medium transition-colors ${
                        active ? "text-primary" : `${navLinkColor} hover:text-primary`
                      }`}
                    >
                      {item.label}
                      <svg className="h-3.5 w-3.5 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
                    </button>
                  ) : (
                    <Link
                      href={item.href}
                      className={`text-sm font-medium transition-colors ${
                        active ? "text-primary" : `${navLinkColor} hover:text-primary`
                      }`}
                    >
                      {item.label}
                    </Link>
                  )}
                  {hasChildren && openDropdown === item.label && (
                    <ul className="absolute left-0 top-full pt-3 min-w-[200px]">
                      <div className="bg-white rounded-lg shadow-lg border border-gray-100 py-2">
                        {item.children!.map((child) => {
                          const childActive = pathname === child.href;
                          return (
                            <li key={child.href}>
                              <Link
                                href={child.href}
                                onClick={() => setOpenDropdown(null)}
                                className={`block px-4 py-2 text-sm transition-colors ${
                                  childActive
                                    ? "text-primary bg-primary-soft"
                                    : "text-gray-800 hover:bg-gray-50 hover:text-primary"
                                }`}
                              >
                                {child.label}
                              </Link>
                            </li>
                          );
                        })}
                      </div>
                    </ul>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-3 sm:gap-4">
          <a href={`tel:${siteConfig.phoneTel}`} aria-label="Phone" className={`${iconColor} hover:text-primary transition-colors hidden sm:inline-flex`}>
            <PhoneIcon className="h-5 w-5" />
          </a>
          <a href={`mailto:${siteConfig.email}`} aria-label="Email" className={`${iconColor} hover:text-primary transition-colors hidden sm:inline-flex`}>
            <MailIcon className="h-5 w-5" />
          </a>
          <a href={siteConfig.social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className={`${iconColor} hover:text-primary transition-colors hidden sm:inline-flex`}>
            <LinkedInIcon className="h-5 w-5" />
          </a>
          <a href={siteConfig.social.x} target="_blank" rel="noopener noreferrer" aria-label="X" className={`${iconColor} hover:text-primary transition-colors hidden sm:inline-flex`}>
            <XIcon className="h-5 w-5" />
          </a>
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            aria-expanded={open}
            className={`md:hidden inline-flex items-center justify-center rounded-full p-2 transition ${
              scrolled
                ? "border border-gray-300 text-gray-800 hover:text-primary"
                : "border border-white/70 bg-white/20 backdrop-blur text-white hover:text-primary"
            }`}
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
          className="fixed inset-0 z-50 bg-white animate-fade-in md:hidden"
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
              {siteConfig.nav.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={`block rounded-lg px-4 py-4 text-2xl sm:text-3xl font-semibold transition-colors ${
                      pathname === item.href ? "text-primary" : "text-gray-900 hover:text-primary"
                    }`}
                  >
                    {item.label}
                  </Link>
                  {item.children && (
                    <ul className="ml-4 space-y-1 pb-2">
                      {item.children.map((c) => (
                        <li key={c.href}>
                          <Link
                            href={c.href}
                            onClick={() => setOpen(false)}
                            className={`block rounded-lg px-4 py-2 text-base transition-colors ${
                              pathname === c.href ? "text-primary" : "text-gray-600 hover:text-primary"
                            }`}
                          >
                            {c.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}
