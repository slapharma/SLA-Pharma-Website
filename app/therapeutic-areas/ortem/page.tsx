import type { Metadata } from "next";
import { OrtemContent } from "@/components/ortem/OrtemContent";

export const metadata: Metadata = {
  title: "ORTEM",
  description:
    "General information about pilonidal sinus disease and SLA Pharma's research and development work.",
  alternates: { canonical: "/therapeutic-areas/ortem" },
  // Draft text under regulatory review. Remove this line after approval.
  robots: { index: false, follow: false },
};

// The page content sits behind a healthcare professional confirmation.
// See components/ortem/OrtemContent.tsx.
export default function OrtemPage() {
  return <OrtemContent />;
}
