import Image from "next/image";
import { HeroCarousel } from "@/components/home/HeroCarousel";
import { CtaBand } from "@/components/shared/CtaBand";

export default function HomePage() {
  return (
    <>
      <HeroCarousel />

      <section className="container-page py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">Our Focus</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-5">Gastrointestinal Medicine</h2>
            <p className="text-gray-600 leading-relaxed mb-5">
              SLA Pharma has built a reputation for clinical excellence and patient-centred innovation in gastrointestinal health. From early-stage research through to global market access, our teams deliver specialist therapies that make a measurable difference to patients&apos; lives.
            </p>
            <ul className="space-y-3">
              {[
                "Over 30 years of gastrointestinal expertise",
                "Clinical research, regulatory and commercial capability under one roof",
                "Patient-centred therapeutic development",
              ].map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-5 w-5 flex-none items-center justify-center rounded-full bg-primary/10 text-primary">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M5 12l5 5L20 7" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </span>
                  <span className="text-gray-700">{b}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
            <Image src="/gi-medicine.jpg" alt="Gastrointestinal medicine research" fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" />
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
