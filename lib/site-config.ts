export const siteConfig = {
  name: "SLA Pharma",
  legalName: "SLA Pharma (UK) Limited",
  url: "https://www.slapharma.com",
  description:
    "Family-owned specialty pharmaceutical company pioneering gastrointestinal health solutions since 1997.",
  founded: "1997",
  phone: "+44 1923 681001",
  phoneTel: "+441923681001",
  email: "info@slapharma.com",
  social: {
    linkedin: "https://www.linkedin.com/company/slapharma/",
    x: "https://x.com/SlaPharma",
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
      region: "SWISS OFFICE",
      lines: ["Gestadeckplatz 2", "CH-4410", "Liestal", "Switzerland"],
      phone: null,
      email: null,
    },
    {
      region: "UK OFFICE",
      lines: [
        "3a Chestnut House",
        "Farm Close, Shenley",
        "Hertfordshire",
        "WD7 9AD",
        "United Kingdom",
      ],
      phone: "+44 1923 681001",
      email: "info@slapharma.com",
    },
    {
      region: "IRELAND OFFICE",
      lines: [
        "Unit 3d North Point House",
        "North Point Business Park",
        "New Mallow Road",
        "Cork",
        "Ireland",
      ],
      phone: "+44 1923 681001",
      email: null,
    },
  ],
  footerColumns: [
    {
      heading: "What We Do",
      links: [
        { label: "Research & Development", href: "/about/what-we-do" },
        { label: "Therapeutic Areas", href: "/therapeutic-areas" },
        { label: "Partnerships", href: "/partnerships" },
      ],
    },
    {
      heading: "Links",
      links: [
        { label: "Privacy Policy", href: "/privacy-policy" },
        { label: "Contact Us", href: "/contact" },
        { label: "Partnerships", href: "/partnerships" },
      ],
    },
    {
      heading: "Social",
      links: [
        { label: "LinkedIn", href: "https://www.linkedin.com/company/slapharma/" },
        { label: "X (Twitter)", href: "https://x.com/SlaPharma" },
      ],
    },
  ],
  footerTagline:
    "Leading innovation in gastrointestinal health through rigorous research & development.",
  contactSubjects: [
    "General Enquiry",
    "Partnership Opportunity",
    "Clinical Trials",
    "Other",
  ] as const,
  cookieBanner: {
    copy: 'We use cookies to enhance your experience on our website. By clicking "Accept All", you consent to the use of cookies for analytics purposes.',
    acceptLabel: "Accept All",
    rejectLabel: "Reject All",
  },
} as const;

export type Office = (typeof siteConfig.offices)[number];
