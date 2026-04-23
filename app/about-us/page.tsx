import type { Metadata } from "next";
import { PageHero } from "@/components/shared/PageHero";
import { ValueCard } from "@/components/shared/ValueCard";
import { CtaBand } from "@/components/shared/CtaBand";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "SLA Pharma is a family-owned specialty pharmaceutical company, pioneering gastrointestinal health solutions since 1997.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About SLA Pharma"
        subtitle="Pioneering gastrointestinal health solutions since 1997."
      />

      <section className="container-page py-16 md:py-24">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
          <p className="text-gray-600 leading-relaxed">
            To improve the lives of patients with gastrointestinal conditions by developing, licensing and delivering specialty therapies grounded in rigorous clinical science and real-world patient need.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <ValueCard title="Quality Commitment">
            GMP-aligned development and manufacturing partners, with regulatory standards upheld at every stage of the product lifecycle.
          </ValueCard>
          <ValueCard title="Research Excellence">
            Partnering with leading clinicians and academic institutions to advance evidence-based gastrointestinal therapeutics.
          </ValueCard>
          <ValueCard title="Patient Focus">
            Designing therapies around patient outcomes, tolerability and long-term quality of life.
          </ValueCard>
        </div>
      </section>

      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container-page max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-5 text-center">Our History</h2>
          <p className="text-gray-600 leading-relaxed text-center">
            Founded by Justin Slagel in 1997, SLA Pharma remains a family-owned specialty pharmaceutical business. Over more than three decades we&apos;ve built an international footprint across the United Kingdom, Switzerland and Ireland, with a consistent focus on gastrointestinal health.
          </p>
        </div>
      </section>

      <section className="container-page py-16 md:py-24">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-10 text-center">Our Values</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <ValueCard title="Integrity">We hold ourselves to the highest ethical and scientific standards in everything we do.</ValueCard>
          <ValueCard title="Innovation">We repurpose and develop known chemical entities in novel ways to solve unmet needs.</ValueCard>
          <ValueCard title="Patient Care">Every decision traces back to a single question: does it help patients live better?</ValueCard>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
