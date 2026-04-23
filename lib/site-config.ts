export const siteConfig = {
  name: "SLA Pharma",
  url: "https://www.slapharma.com",
  description:
    "Family-owned specialty pharmaceutical company pioneering gastrointestinal health solutions since 1997.",
  founded: "1997",
  phone: "+44 1923 681001",
  email: "info@slapharma.com",
  social: {
    linkedin: "https://www.linkedin.com/company/sla-pharma",
    x: "https://x.com/slapharma",
  },
  nav: [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about-us" },
    { label: "What We Do", href: "/about/what-we-do" },
    { label: "Partnerships", href: "/partnerships" },
    { label: "Therapeutic Areas", href: "/therapeutic-areas" },
    { label: "Contact Us", href: "/contact" },
  ],
  offices: [
    {
      country: "Switzerland",
      city: "Liestal",
      lines: ["SLA Pharma AG", "Liestal, Switzerland"],
    },
    {
      country: "United Kingdom",
      city: "Shenley, Hertfordshire",
      lines: ["SLA Pharma UK Ltd", "Shenley, Hertfordshire, United Kingdom"],
    },
    {
      country: "Ireland",
      city: "Cork",
      lines: ["SLA Pharma Ireland Ltd", "Cork, Ireland"],
    },
  ],
  contactSubjects: [
    "General Enquiry",
    "Partnership Opportunity",
    "Clinical Trials",
    "Other",
  ] as const,
} as const;

export type NavItem = (typeof siteConfig.nav)[number];
