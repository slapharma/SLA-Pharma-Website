import { siteConfig } from "@/lib/site-config";

export function OrganizationJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}/logo.png`,
    foundingDate: siteConfig.founded,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    sameAs: [siteConfig.social.linkedin, siteConfig.social.x],
    address: siteConfig.offices.map((o) => ({
      "@type": "PostalAddress",
      addressCountry: o.country,
      addressLocality: o.city,
    })),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
