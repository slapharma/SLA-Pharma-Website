import type { Metadata } from "next";
import { FullBleedHero } from "@/components/shared/FullBleedHero";
import { CtaBand } from "@/components/shared/CtaBand";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { NumberedStepCard } from "@/components/shared/NumberedStepCard";
import { IconCard } from "@/components/shared/IconCard";
import { FlaskIcon, ShieldIcon } from "@/components/shared/icons";

export const metadata: Metadata = {
  title: "What We Do",
  description:
    "Identifying known chemical entities for new pharmacological indications.",
};

export default function WhatWeDoPage() {
  return (
    <>
      <FullBleedHero
        image="/hero-what-we-do.jpg"
        alt="Laboratory research"
        title="WHAT WE DO"
        subtitle="Identifying known chemical entities for new pharmacological indications"
        overlayFrom="from-blue-900/60"
        overlayTo="to-blue-950/70"
      />

      <section className="container-page py-16 md:py-24">
        <SectionHeading subtitle="At SLA Pharma, we specialise in identifying and developing innovative treatments for gastrointestinal disorders. Our unique approach combines scientific expertise with patient-focused solutions.">
          Our Approach
        </SectionHeading>

        <div className="space-y-5 max-w-4xl mx-auto">
          <NumberedStepCard
            number="1"
            title="Research & Development Excellence"
            description="SLA Pharma has over 20 years of experience in developing innovative solutions for GI disorders."
            bullets={[
              "Extensive research in gastrointestinal health",
              "State-of-the-art development facilities",
            ]}
          />
          <NumberedStepCard
            number="2"
            title="Clinical Trial Expertise"
            description="Our in-house expertise in clinical trials enables us to accelerate development of innovative therapies."
            bullets={[
              "Streamlined trial processes",
              "Global research network",
            ]}
          />
          <NumberedStepCard
            number="3"
            title="Global Market Access"
            description="We identify novel registration routes that enables fast track approvals in global markets."
            bullets={[
              "Strategic regulatory pathways",
              "Accelerated approval processes",
            ]}
          />
        </div>
      </section>

      <section className="container-page pb-16 md:pb-24">
        <SectionHeading>Our Research Focus</SectionHeading>
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <IconCard icon={<FlaskIcon className="h-6 w-6" />} title="Therapeutic Development" centered={false}>
            Our research focuses on developing innovative treatments for gastrointestinal disorders, with a particular focus on conditions with limited therapeutic options.
          </IconCard>
          <IconCard icon={<ShieldIcon className="h-6 w-6" />} title="Clinical Research" centered={false}>
            We conduct comprehensive clinical trials to ensure the safety and efficacy of our treatments, working closely with leading healthcare institutions worldwide.
          </IconCard>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
