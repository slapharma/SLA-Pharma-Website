import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FullBleedHero } from "@/components/shared/FullBleedHero";
import { SectionHeading } from "@/components/shared/SectionHeading";

export const metadata: Metadata = {
  title: "ORTEM",
  description:
    "General information about pilonidal sinus disease and SLA Pharma's research and development work.",
  alternates: { canonical: "/therapeutic-areas/ortem" },
  // Draft text under regulatory review. Remove this line after approval.
  robots: { index: false, follow: false },
};

export default function OrtemPage() {
  return (
    <>
      <FullBleedHero
        title="ORTEM"
        titleClass="text-6xl sm:text-7xl md:text-8xl"
        subtitle="Pilonidal sinus disease: research and development"
        heightClass="h-[34vh] min-h-[280px] max-h-[400px]"
      />

      {/* Draft banner. Remove after regulatory approval. */}
      <div
        role="status"
        className="bg-amber-50 border-b border-amber-300 text-amber-900"
      >
        <p className="container-page py-3 text-sm text-center">
          <strong>Draft text.</strong> This page is under regulatory review. The
          wording may change.
        </p>
      </div>

      <section className="container-page py-16 md:py-24">
        <div className="rounded-xl bg-white border border-gray-200 shadow-sm p-6 md:p-10 max-w-4xl mx-auto">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-2 text-center">
            Research and development
          </p>
          <SectionHeading>Pilonidal Sinus Disease</SectionHeading>
          <div className="grid md:grid-cols-[minmax(0,1fr)_minmax(0,320px)] gap-8 items-center">
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Pilonidal sinus disease affects the skin around the natal cleft
                and can result in persistent wounds, including following
                surgical intervention.
              </p>
              <p>
                SLA Pharma is conducting research and development into
                potential therapeutic approaches for persistent pilonidal sinus
                wounds.
              </p>
              <p>
                Our work aims to contribute to the scientific understanding and
                development of treatment options for this condition.
              </p>
              <p className="text-sm italic">
                This page provides general information about the disease area
                and SLA Pharma&apos;s research activities. It does not
                recommend or promote any medicinal product.
              </p>
            </div>
            {/* Blur is baked into the file. The original image is not published. */}
            <Image
              src="/ortem-pack-blurred.webp"
              alt=""
              width={640}
              height={480}
              sizes="(min-width:768px) 320px, 80vw"
              className="w-full max-w-xs mx-auto h-auto rounded-lg"
            />
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
          ORTEM is an unlicensed medicine. It has no UK marketing authorisation.
          The MHRA has not assessed ORTEM for the grant of a marketing
          authorisation. For other questions, contact SLA Pharma through{" "}
          <Link className="text-primary underline" href="/contact">
            our contact page
          </Link>
          .
        </p>
      </section>
    </>
  );
}
