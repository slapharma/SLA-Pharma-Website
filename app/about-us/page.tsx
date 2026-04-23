import type { Metadata } from "next";
import Image from "next/image";
import { FullBleedHero } from "@/components/shared/FullBleedHero";
import { CtaBand } from "@/components/shared/CtaBand";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { OrangeArrowBullet } from "@/components/shared/OrangeArrowBullet";
import { ValueCard } from "@/components/shared/ValueCard";
import { ShieldIcon, BoltIcon, HeartIcon, TriangleBullet } from "@/components/shared/icons";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "SLA Pharma is a family-owned specialty pharmaceutical company, pioneering gastrointestinal health solutions since 1997.",
};

const missionPoints = [
  { title: "Quality Commitment", body: "Maintaining the highest standards in research, development, and manufacturing" },
  { title: "Research Excellence", body: "Leading innovation in gastrointestinal health through rigorous research" },
  { title: "Patient Focus", body: "Putting patients first in everything we do" },
];

export default function AboutPage() {
  return (
    <>
      <FullBleedHero
        image="/hero-about.jpg"
        alt="SLA Pharma team in meeting"
        title="ABOUT SLA PHARMA"
        subtitle="Pioneering gastrointestinal health solutions since 1997"
      />

      <section className="container-page py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="relative aspect-square max-w-sm mx-auto w-full">
            <Image
              src="/about-animation.gif"
              alt=""
              fill
              unoptimized
              sizes="(min-width: 768px) 40vw, 80vw"
              className="object-contain"
            />
          </div>
          <div>
            <SectionHeading align="left">Our Mission</SectionHeading>
            <p className="text-gray-600 leading-relaxed mb-6">
              At SLA Pharma, our mission is to improve patient lives by advancing innovative therapies across the spectrum of gastroenterological conditions. We focus on identifying known chemical entities to repurpose for new pharmacological indications bringing targeted, effective solutions to under-treated conditions in digestive health, gastrointestinal oncology, proctology, and rare GI disorders.
            </p>
            <ul className="space-y-4">
              {missionPoints.map((p) => (
                <li key={p.title} className="flex items-start gap-3">
                  <TriangleBullet className="mt-1.5 h-4 w-4 flex-none text-primary" />
                  <div>
                    <h3 className="text-gray-900 font-bold mb-0.5">{p.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{p.body}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="container-page pb-16 md:pb-24">
        <div className="rounded-xl bg-white border border-gray-200 shadow-sm p-8 md:p-12 max-w-4xl mx-auto">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 text-center mb-8 leading-snug">
            A Family Business with Decades of Experience and Expertise in Gastrointestinal Research, Development and Commercialisation
          </h2>
          <ul className="space-y-4 max-w-3xl mx-auto">
            <OrangeArrowBullet>Founded by Justin Slagel, continuing the family&apos;s commitment to innovation</OrangeArrowBullet>
            <OrangeArrowBullet>SLA Pharma has become a leader in clinical trial development for gastrointestinal disorders</OrangeArrowBullet>
            <OrangeArrowBullet>We prioritise patient well-being and strive to improve their lives through access to innovative solutions</OrangeArrowBullet>
          </ul>
        </div>
      </section>

      <section className="container-page pb-16 md:pb-24">
        <SectionHeading subtitle="The principles that guide our work and shape our culture">
          Our Values
        </SectionHeading>
        <div className="grid md:grid-cols-3 gap-6">
          <ValueCard icon={<ShieldIcon className="h-6 w-6" />} title="Integrity">
            Maintaining the highest ethical standards in all our operations and research
          </ValueCard>
          <ValueCard icon={<BoltIcon className="h-6 w-6" />} title="Innovation">
            Continuously pushing boundaries to develop better treatments
          </ValueCard>
          <ValueCard icon={<HeartIcon className="h-6 w-6" />} title="Patient Care">
            Putting patients at the heart of everything we do
          </ValueCard>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
