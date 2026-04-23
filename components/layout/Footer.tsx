import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/lib/site-config";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container-page py-14 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-1">
          <Image
            src="/logo.png"
            alt="SLA Pharma"
            width={160}
            height={48}
            className="h-10 w-auto bg-white rounded p-1"
          />
          <p className="mt-4 text-sm leading-6 text-gray-400">
            Family-owned specialty pharmaceutical company pioneering gastrointestinal health solutions since {siteConfig.founded}.
          </p>
        </div>

        <div>
          <h3 className="text-white text-sm font-semibold uppercase tracking-wide">What We Do</h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link href="/about/what-we-do" className="hover:text-primary">Research &amp; Development</Link></li>
            <li><Link href="/therapeutic-areas" className="hover:text-primary">Therapeutic Areas</Link></li>
            <li><Link href="/partnerships" className="hover:text-primary">Partnerships</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-white text-sm font-semibold uppercase tracking-wide">Links</h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link href="/privacy-policy" className="hover:text-primary">Privacy Policy</Link></li>
            <li><Link href="/contact" className="hover:text-primary">Contact</Link></li>
            <li><Link href="/partnerships" className="hover:text-primary">Partnerships</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-white text-sm font-semibold uppercase tracking-wide">Social</h3>
          <ul className="mt-4 flex items-center gap-4">
            <li>
              <a href={siteConfig.social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-primary">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.35V9h3.41v1.56h.05a3.75 3.75 0 0 1 3.37-1.85c3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.44a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zm1.78 13.01H3.56V9h3.56v11.45zM22.22 0H1.77C.8 0 0 .77 0 1.72v20.56C0 23.23.8 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z"/></svg>
              </a>
            </li>
            <li>
              <a href={siteConfig.social.x} target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)" className="hover:text-primary">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2H21.5l-7.4 8.46L23 22h-6.8l-5.33-6.97L4.8 22H1.54l7.93-9.06L1 2h6.97l4.82 6.37L18.244 2zm-2.38 18h1.87L7.2 4H5.19l10.675 16z"/></svg>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-800">
        <div className="container-page py-5 text-xs text-gray-500 flex flex-col sm:flex-row justify-between gap-2">
          <p>&copy;{new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
          <p>Registered offices in Switzerland, United Kingdom &amp; Ireland.</p>
        </div>
      </div>
    </footer>
  );
}
