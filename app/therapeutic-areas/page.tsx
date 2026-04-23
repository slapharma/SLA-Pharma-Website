import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/shared/PageHero";
import { CtaBand } from "@/components/shared/CtaBand";

export const metadata: Metadata = {
  title: "Therapeutic Areas",
  description:
    "Over 30 years of gastrointestinal innovation across multiple therapeutic areas.",
};

export default function TherapeuticAreasPage() {
  return (
    <>
      <PageHero
        title="Therapeutic Areas"
        subtitle="Over 30 years of gastrointestinal innovation."
      />

      <section className="container-page py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Over 30 Years of Gastrointestinal Innovation</h2>
            <p className="text-gray-600 leading-relaxed">
              SLA Pharma&apos;s programmes span a range of gastrointestinal conditions where there remains significant unmet patient need. We focus on therapeutic areas where our clinical expertise, regulatory experience and partner network can make a tangible difference.
            </p>
          </div>
          <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
            <Image src="/therapeutic-areas.jpg" alt="Therapeutic areas" fill sizes="(min-width:768px) 50vw, 100vw" className="object-cover" />
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container-page">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-10">Our Focus Areas</h2>
          <picture>
            <source srcSet="/mind-map-desktop.png" media="(min-width: 768px)" />
            <Image
              src="/mind-map-mobile.png"
              alt="SLA Pharma therapeutic areas mind map"
              width={1600}
              height={1000}
              className="mx-auto w-full max-w-5xl h-auto"
              sizes="(min-width: 768px) 80vw, 100vw"
            />
          </picture>
        </div>
      </section>

      <section className="container-page py-16 md:py-24 text-center max-w-3xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Advancing Gastrointestinal Health Together</h2>
        <p className="text-gray-600 leading-relaxed">
          Our research and partnerships continue to push the frontier of gastrointestinal care &mdash; and we&apos;re always keen to hear from clinicians, researchers and partners who share that ambition.
        </p>
      </section>

      <CtaBand />
    </>
  );
}
