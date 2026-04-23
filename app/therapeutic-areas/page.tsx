import type { Metadata } from "next";
import Image from "next/image";
import { FullBleedHero } from "@/components/shared/FullBleedHero";
import { CtaBand } from "@/components/shared/CtaBand";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { MindMap } from "@/components/therapeutic-areas/MindMap";

export const metadata: Metadata = {
  title: "Therapeutic Areas",
  description:
    "Treatments for gastrointestinal conditions, supported by clinical research.",
};

export default function TherapeuticAreasPage() {
  return (
    <>
      <FullBleedHero
        image="/hero-therapeutic.jpg"
        alt="Clinical consultation"
        title="THERAPEUTIC AREAS"
        subtitle="Treatments for gastrointestinal conditions, supported by clinical research"
      />

      <section className="container-page py-16 md:py-24">
        <div className="rounded-xl bg-white border border-gray-200 shadow-sm p-6 md:p-10 max-w-5xl mx-auto">
          <SectionHeading>Over 30 Years of Gastrointestinal Innovation</SectionHeading>
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <p className="text-gray-600 leading-relaxed">
              SLA Pharma specialises in advancing therapies across a broad spectrum of gastrointestinal diseases&mdash;from hereditary colorectal conditions to proctological disorders and GI oncology.
            </p>
            <div className="relative aspect-square max-w-xs mx-auto w-full">
              <div className="absolute inset-0 rounded-full overflow-hidden shadow-lg">
                <Image
                  src="/therapeutic-areas.jpg"
                  alt="Therapeutic areas"
                  fill
                  sizes="(min-width:768px) 40vw, 80vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container-page pb-16 md:pb-24">
        <SectionHeading subtitle="Gastroenterology is at the core of everything we do. Our work spans a wide range of indications, from chronic inflammatory diseases to rare and hereditary gastrointestinal conditions.">
          Our Gastroenterology Focus
        </SectionHeading>
        <MindMap />
      </section>

      <section className="container-page pb-16 md:pb-24">
        <div className="rounded-xl bg-white border border-gray-200 shadow-sm p-8 md:p-12 max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Advancing Gastrointestinal Health Together</h2>
          <p className="text-gray-600 leading-relaxed">
            SLA Pharma collaborates with partners worldwide to shape the future of gastrointestinal care.
          </p>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
