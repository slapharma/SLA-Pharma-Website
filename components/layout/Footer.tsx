import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/lib/site-config";
import { TriangleBullet } from "@/components/shared/icons";

export function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="container-page py-14 grid gap-10 md:grid-cols-4">
        <div>
          <Image
            src="/logo.png"
            alt="SLA Pharma"
            width={140}
            height={70}
            className="h-14 w-auto"
          />
          <p className="mt-4 text-sm leading-6 text-gray-600 max-w-xs">
            {siteConfig.footerTagline}
          </p>
        </div>

        {siteConfig.footerColumns.map((col) => (
          <div key={col.heading}>
            <h3 className="text-gray-900 text-sm font-bold uppercase tracking-wide">
              {col.heading}
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {col.links.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="inline-flex items-center gap-2 text-gray-700 hover:text-primary transition-colors"
                  >
                    <TriangleBullet className="h-3 w-3 text-primary flex-none" />
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-gray-100">
        <div className="container-page py-5 text-xs text-gray-500 text-center">
          <p>&copy;2025 {siteConfig.legalName}</p>
        </div>
      </div>
    </footer>
  );
}
