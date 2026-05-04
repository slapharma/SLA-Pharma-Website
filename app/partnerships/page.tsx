import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FullBleedHero } from "@/components/shared/FullBleedHero";
import { CtaBand } from "@/components/shared/CtaBand";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { IconCard } from "@/components/shared/IconCard";
import { OrangeArrowBullet } from "@/components/shared/OrangeArrowBullet";
import { UsersIcon, GlobeIcon, ArrowRightIcon } from "@/components/shared/icons";

export const metadata: Metadata = {
  title: "Partnerships",
  description:
    "Join forces with us to market innovative solutions for gastrointestinal health.",
};

export default function PartnershipsPage() {
  return (
    <>
      <FullBleedHero
        image="/hero-partnerships.jpg"
        alt="Global partnerships"
        title="PARTNER WITH US"
        subtitle="Join forces with us to market innovative solutions for gastrointestinal health"
      />

      <section className="container-page py-16 md:py-24">
        <SectionHeading subtitle="Our global commercial partnerships collaborate to bring our products to market, ensuring innovative treatments reach patients worldwide.">
          We&apos;ve Built a Network of Partners Including Opinion Leaders and Experts
        </SectionHeading>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <IconCard icon={<UsersIcon className="h-6 w-6" />} title="Professional Partnerships">
            SLA Pharma collaborates with International Research Institutions, Healthcare Providers and Key Opinion Leaders (KOLs) to expedite advanced therapeutic development and expand market reach.
          </IconCard>
          <IconCard icon={<GlobeIcon className="h-6 w-6" />} title="Commercial Partnerships">
            We build commercial collaborative partnerships to bring our innovative products to market, ensuring our innovative cost effective treatments reach patients worldwide.
          </IconCard>
        </div>
      </section>

      <section className="container-page pb-12 md:pb-20">
        <div className="rounded-xl bg-white border border-gray-200 shadow-md p-6 md:p-10 max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-2">Out-Licensing</p>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Our Programs, Your Market</h3>
              <p className="text-gray-600 leading-relaxed mb-5">
                SLA Pharma partners with trusted pharmaceutical companies to bring innovative gastrointestinal therapies to new markets. We provide proven products, regulatory support, and flexible licensing to optimise global market access, ensuring groundbreaking treatments reach patients worldwide.
              </p>
              <ul className="space-y-2.5 mb-6">
                <OrangeArrowBullet>Innovative, clinically validated treatments</OrangeArrowBullet>
                <OrangeArrowBullet>Market-ready formulations</OrangeArrowBullet>
                <OrangeArrowBullet>Regulatory and technical documentation</OrangeArrowBullet>
                <OrangeArrowBullet>Flexible licensing agreements</OrangeArrowBullet>
                <OrangeArrowBullet>Global distribution support</OrangeArrowBullet>
              </ul>
              <Link href="/contact" className="btn-outline-pill">
                Partner with Us
                <ArrowRightIcon className="ml-2 h-4 w-4" />
              </Link>
            </div>
            <div className="relative aspect-square max-w-sm mx-auto w-full">
              <div className="absolute inset-0 rounded-full overflow-hidden shadow-lg">
                <Image src="/partnerships-1.jpg" alt="Business handshake" fill sizes="(min-width:768px) 40vw, 80vw" className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container-page pb-16 md:pb-24">
        <div className="rounded-xl bg-white border border-gray-200 shadow-md p-6 md:p-10 max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="md:order-2">
              <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-2">In-Licensing</p>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Your Program, Our Expertise</h3>
              <p className="text-gray-600 leading-relaxed mb-5">
                SLA Pharma is actively seeking in-licensing opportunities that align with our focus on gastrointestinal and associated conditions. We bring regulatory know-how, commercialisation strength, and global reach to accelerate product development and ensure innovative treatments reach the patients who need them.
              </p>
              <ul className="space-y-2.5 mb-6">
                <OrangeArrowBullet>Accelerated development and market entry</OrangeArrowBullet>
                <OrangeArrowBullet>Regulatory and commercialisation expertise</OrangeArrowBullet>
                <OrangeArrowBullet>Shared resources and technical capabilities</OrangeArrowBullet>
                <OrangeArrowBullet>Global distribution support</OrangeArrowBullet>
                <OrangeArrowBullet>Strategic collaboration model</OrangeArrowBullet>
              </ul>
              <Link href="/contact" className="btn-outline-pill">
                Partner with Us
                <ArrowRightIcon className="ml-2 h-4 w-4" />
              </Link>
            </div>
            <div className="md:order-1 relative aspect-square max-w-sm mx-auto w-full">
              <div className="absolute inset-0 rounded-full overflow-hidden shadow-lg">
                <Image src="/partnerships-2.jpg" alt="Collaboration handshake" fill sizes="(min-width:768px) 40vw, 80vw" className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container-page pb-16 md:pb-24 text-center max-w-3xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Global Reach, Local Impact</h2>
        <p className="text-gray-600 leading-relaxed">
          With strategic partnerships across the globe, SLA Pharma is committed to delivering innovative gastrointestinal treatments to patients worldwide.
        </p>
      </section>

      <CtaBand />
    </>
  );
}
