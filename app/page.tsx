import Image from "next/image";
import { HeroCarousel } from "@/components/home/HeroCarousel";
import { CtaBand } from "@/components/shared/CtaBand";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { OrangeArrowBullet } from "@/components/shared/OrangeArrowBullet";

export default function HomePage() {
  return (
    <>
      <HeroCarousel />

      <section className="container-page py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div>
            <SectionHeading align="left">Gastrointestinal Medicine</SectionHeading>
            <p className="text-gray-600 leading-relaxed mb-6">
              SLA Pharma is one of the few global pharmaceutical companies focused solely on developing medicines for the prevention and treatment of a range of gastrointestinal and related disorders. We develop targeted therapies across digestive health, gastrointestinal oncology, and proctology.
            </p>
            <ul className="space-y-3">
              <OrangeArrowBullet>Over 30 years&apos; experience in clinical trials worldwide</OrangeArrowBullet>
              <OrangeArrowBullet>Proven expertise in gastrointestinal health</OrangeArrowBullet>
              <OrangeArrowBullet>Patient-centered approach to innovation</OrangeArrowBullet>
            </ul>
          </div>
          <div className="relative aspect-square max-w-md w-full mx-auto">
            <div className="absolute inset-0 rounded-full overflow-hidden bg-gray-900 shadow-xl ring-1 ring-gray-200">
              <Image
                src="/gi-medicine.jpg"
                alt="Gastrointestinal medicine illustration"
                fill
                sizes="(min-width: 768px) 40vw, 90vw"
                className="object-cover opacity-90"
              />
            </div>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
