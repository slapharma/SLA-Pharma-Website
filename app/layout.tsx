import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CookieBanner } from "@/components/layout/CookieBanner";
import { OrganizationJsonLd } from "@/components/layout/OrganizationJsonLd";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.slapharma.com"),
  title: {
    default: "SLA Pharma - Gastrointestinal Specialists",
    template: "%s | SLA Pharma",
  },
  description:
    "SLA Pharma is a family-owned specialty pharmaceutical company pioneering gastrointestinal health solutions since 1997.",
  openGraph: {
    title: "SLA Pharma - Gastrointestinal Specialists",
    description:
      "Pioneering gastrointestinal health solutions since 1997.",
    url: "https://www.slapharma.com",
    siteName: "SLA Pharma",
    images: [{ url: "/og.jpg", width: 1200, height: 630 }],
    locale: "en_GB",
    type: "website",
  },
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#fe5200",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} h-full`}>
      <body className="min-h-full flex flex-col animate-fade-in">
        <OrganizationJsonLd />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
