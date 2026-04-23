import type { Metadata } from "next";
import { PageHero } from "@/components/shared/PageHero";
import { ValueCard } from "@/components/shared/ValueCard";
import { CtaBand } from "@/components/shared/CtaBand";

export const metadata: Metadata = {
  title: "What We Do",
  description:
    "SLA Pharma repurposes known chemical entities and develops novel therapies for gastrointestinal health, from research through global market access.",
};

export default function WhatWeDoPage() {
  return (
    <>
      <PageHero
        title="What We Do"
        subtitle="Repurposing known chemical entities and developing novel therapies for gastrointestinal health."
      />

      <section className="container-page py-16 md:py-24">
        <div className="grid md:grid-cols-3 gap-6">
          <ValueCard title="R&amp;D Excellence">
            Our research programmes focus on clinically-validated molecules with reformulation, delivery and indication-expansion opportunities.
          </ValueCard>
          <ValueCard title="Clinical Trial Expertise">
            We design and deliver clinical studies across Phase I through IV, with deep operational capability in gastrointestinal indications.
          </ValueCard>
          <ValueCard title="Global Market Access">
            A trusted network of regulatory, distribution and commercial partners across Europe, the UK and beyond.
          </ValueCard>
        </div>
      </section>

      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container-page max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-5 text-center">Research Focus</h2>
          <p className="text-gray-600 leading-relaxed text-center mb-4">
            From therapeutic development through clinical research, SLA Pharma invests in programmes where scientific rigour and patient need intersect.
          </p>
          <p className="text-gray-600 leading-relaxed text-center">
            Our teams work hand-in-hand with leading clinicians to translate insight into therapies, with transparent trial conduct and real-world evidence at the heart of our approach.
          </p>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
