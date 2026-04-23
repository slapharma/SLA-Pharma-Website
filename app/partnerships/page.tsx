import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/shared/PageHero";
import { CtaBand } from "@/components/shared/CtaBand";

export const metadata: Metadata = {
  title: "Partnerships",
  description:
    "Partner with SLA Pharma for in-licensing, out-licensing, distribution and clinical collaboration in specialty gastrointestinal therapies.",
};

export default function PartnershipsPage() {
  return (
    <>
      <PageHero
        title="Partner With Us"
        subtitle="A trusted partner for clinical, commercial and licensing collaboration in specialty gastrointestinal therapies."
      />

      <section className="container-page py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
            <Image src="/partnerships-1.jpg" alt="Professional partnerships" fill sizes="(min-width:768px) 50vw, 100vw" className="object-cover" />
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Professional Partnerships</h2>
            <p className="text-gray-600 leading-relaxed">
              We work with clinicians, academic institutions and patient organisations to shape the future of gastrointestinal care. Our collaborations span protocol design, investigator-led studies and real-world evidence programmes.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-center mt-16">
          <div className="md:order-2 relative aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
            <Image src="/partnerships-2.jpg" alt="Commercial partnerships" fill sizes="(min-width:768px) 50vw, 100vw" className="object-cover" />
          </div>
          <div className="md:order-1">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Commercial Partnerships</h2>
            <p className="text-gray-600 leading-relaxed">
              We partner with regional distributors and pharmaceutical companies to bring our therapies to patients worldwide, combining local commercial reach with our specialty expertise.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container-page grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Out-Licensing</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Access a portfolio of validated specialty therapies with regulatory packages ready for territory expansion.
            </p>
            <ul className="space-y-2 text-gray-700">
              {["Validated treatments with clinical evidence","Market-ready formulations","Complete regulatory documentation","Flexible licensing structures","Established distribution support"].map((b) => (
                <li key={b} className="flex gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-primary flex-none" />{b}</li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">In-Licensing</h2>
            <p className="text-gray-600 leading-relaxed">
              We actively seek complementary specialty GI assets that match our clinical, regulatory and commercial capabilities. If you have a programme you&apos;d like us to evaluate, we&apos;d love to hear from you.
            </p>
          </div>
        </div>
      </section>

      <section className="container-page py-16 md:py-24 text-center max-w-3xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Global Reach</h2>
        <p className="text-gray-600 leading-relaxed">
          With offices in Switzerland, the United Kingdom and Ireland, and a partner network spanning Europe and beyond, SLA Pharma is positioned to deliver specialty therapies wherever patients need them.
        </p>
      </section>

      <CtaBand title="Partner with Us" ctaLabel="Get in Touch" />
    </>
  );
}
