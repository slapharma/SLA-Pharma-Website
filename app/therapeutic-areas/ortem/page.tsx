import type { Metadata } from "next";
import Link from "next/link";
import { FullBleedHero } from "@/components/shared/FullBleedHero";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ArrowRightIcon } from "@/components/shared/icons";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "ORTEM",
  description:
    "ORTEM (metronidazole 10% w/w ointment). Unlicensed medicine. Information for healthcare professionals on named patient supply.",
  alternates: { canonical: "/therapeutic-areas/ortem" },
  // Draft text under regulatory review. Remove this line after approval.
  robots: { index: false, follow: false },
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

      {/* Draft banner. Remove after regulatory approval. */}
      <div
        role="status"
        className="bg-amber-50 border-b border-amber-300 text-amber-900"
      >
        <p className="container-page py-3 text-sm text-center">
          <strong>Draft text.</strong> This page is under regulatory review. The
          wording may change. Do not use it to make clinical or supply decisions.
        </p>
      </div>

      <section className="container-page py-16 md:py-24">
        <div className="rounded-xl bg-white border border-gray-200 shadow-sm p-6 md:p-10 max-w-4xl mx-auto">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-2 text-center">
            Information for healthcare professionals
          </p>
          <SectionHeading>About ORTEM</SectionHeading>
          <div className="space-y-4 text-gray-600 leading-relaxed">
            <p>
              ORTEM (metronidazole 10% w/w, 100 mg/g ointment) is supplied as a
              30 g tube.
            </p>
            <p>
              ORTEM is an unlicensed medicine. It has no marketing
              authorisation in the UK.
            </p>
          </div>
        </div>
      </section>

      <section className="container-page pb-16 md:pb-24">
        <div className="rounded-xl bg-primary-soft p-6 md:p-10 max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-primary text-center">
            Named patient supply
          </h2>
          <div className="mt-4 space-y-4 text-gray-700 leading-relaxed max-w-2xl mx-auto">
            <p>
              ORTEM is supplied only in response to an unsolicited request from a
              registered healthcare professional. The request must be for an
              individual patient under that professional&apos;s direct
              responsibility. The healthcare professional decides if ORTEM is
              suitable for the patient.
            </p>
            <p>
              To request ORTEM, go to the ORTEM page at Oxford Pharmacy Store
              (OPS). OPS asks you to log in, or to request a login.
            </p>
          </div>
          <div className="mt-8 text-center">
            <a
              href={siteConfig.ortemOpsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary-pill"
            >
              Request through Oxford Pharmacy Store
              <ArrowRightIcon className="ml-2 h-4 w-4" />
            </a>
            <p className="mt-3 text-sm text-gray-600">
              Opens Oxford Pharmacy Store in a new tab.
            </p>
          </div>
        </div>
      </section>

      <section className="container-page pb-16 md:pb-24">
        <div className="max-w-4xl mx-auto rounded-xl bg-white border border-gray-200 shadow-sm p-6 md:p-10">
          <h2 className="text-xl md:text-2xl font-bold text-primary">
            Reporting suspected side effects
          </h2>
          <div className="mt-3 space-y-3 text-gray-600 leading-relaxed">
            <p>
              Report suspected side effects to the MHRA through the Yellow Card
              scheme at{" "}
              <a
                className="text-primary underline"
                href="https://yellowcard.mhra.gov.uk"
                target="_blank"
                rel="noopener noreferrer"
              >
                yellowcard.mhra.gov.uk
              </a>
              .
            </p>
            <p>
              Also report them to SLA Pharma. Contact details to be confirmed.
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
          ORTEM is an unlicensed medicine. It has not been assessed by the MHRA
          for a marketing authorisation. The information on this page is factual
          and is for healthcare professionals. It is not a recommendation to use
          the product. For other questions, contact SLA Pharma through{" "}
          <Link className="text-primary underline" href="/contact">
            our contact page
          </Link>
          .
        </p>
      </section>
    </>
  );
}
