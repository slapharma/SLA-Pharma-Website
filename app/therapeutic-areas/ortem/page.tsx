import type { Metadata } from "next";
import Link from "next/link";
import { FullBleedHero } from "@/components/shared/FullBleedHero";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ArrowRightIcon } from "@/components/shared/icons";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "ORTEM",
  description:
    "ORTEM (metronidazole 10% w/w ointment) is an unlicensed medicine. Healthcare professionals can make a named patient enquiry through Oxford Pharmacy Store.",
  alternates: { canonical: "/therapeutic-areas/ortem" },
};

export default function OrtemPage() {
  return (
    <>
      <FullBleedHero
        image="/hero-therapeutic.jpg"
        alt="Clinical consultation"
        title="ORTEM"
        subtitle="Metronidazole 10% w/w ointment"
      />

      <section className="container-page py-16 md:py-24">
        <div className="rounded-xl bg-white border border-gray-200 shadow-sm p-6 md:p-10 max-w-4xl mx-auto">
          <SectionHeading>About ORTEM</SectionHeading>
          <div className="space-y-4 text-gray-600 leading-relaxed">
            <p>
              ORTEM is a topical metronidazole ointment developed by SLA Pharma
              for non-healing pilonidal sinus. It is supplied as a 30 g tube.
            </p>
          </div>
        </div>
      </section>

      <section className="container-page pb-16 md:pb-24">
        <div className="rounded-xl bg-primary-soft p-6 md:p-10 max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-primary">
            Named patient enquiries
          </h2>
          <p className="mt-4 text-gray-700 leading-relaxed max-w-2xl mx-auto">
            Healthcare professionals can request ORTEM for an individual
            patient under their care. Supply is through Oxford Pharmacy Store
            (OPS). OPS asks you to log in, or to request a login, before you
            can see the product page.
          </p>
          <div className="mt-8">
            <a
              href={siteConfig.ortemOpsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary-pill"
            >
              Make a named patient enquiry
              <ArrowRightIcon className="ml-2 h-4 w-4" />
            </a>
            <p className="mt-3 text-sm text-gray-600">
              Opens Oxford Pharmacy Store in a new tab.
            </p>
          </div>
        </div>
      </section>

      <section className="container-page pb-16 md:pb-24">
        <p
          role="note"
          className="max-w-4xl mx-auto text-sm text-gray-600 leading-relaxed border-t border-gray-200 pt-6"
        >
          <strong className="text-gray-800">Important information.</strong>{" "}
          ORTEM is an unlicensed medicine. This page is for healthcare
          professionals. It is not a recommendation to use the product. For
          other questions, contact SLA Pharma at{" "}
          <Link className="text-primary underline" href="/contact">
            our contact page
          </Link>
          .
        </p>
      </section>
    </>
  );
}
