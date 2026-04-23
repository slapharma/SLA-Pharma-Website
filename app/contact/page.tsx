import type { Metadata } from "next";
import Image from "next/image";
import { FullBleedHero } from "@/components/shared/FullBleedHero";
import { ContactForm } from "@/components/contact/ContactForm";
import { siteConfig } from "@/lib/site-config";
import { PhoneIcon, LinkedInIcon, XIcon, GlobeIcon } from "@/components/shared/icons";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Have questions about our treatments or interested in partnerships? Our team is here to help you.",
};

export default function ContactPage() {
  return (
    <>
      <FullBleedHero
        image="/hero-contact.jpg"
        alt="Get in touch"
        title="LET'S START A CONVERSATION"
        subtitle="Have questions about our treatments or interested in partnerships? Our team is here to help you."
      />

      <section className="container-page py-16 md:py-24">
        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="lg:col-span-2">
            <div className="rounded-xl bg-white border border-gray-200 shadow-md p-6 md:p-8">
              <h2 className="text-xl font-bold text-gray-900 mb-1">Contact Us</h2>
              <p className="text-sm text-gray-600 mb-6">Fill in the form below and we&apos;ll get back to you shortly.</p>
              <ContactForm />
            </div>
          </div>

          <div>
            <div className="rounded-xl bg-primary-soft p-6">
              <div className="flex items-start gap-3 mb-4">
                <div className="flex-none inline-flex h-10 w-10 items-center justify-center rounded-full bg-white text-primary shadow-sm">
                  <PhoneIcon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-gray-900 font-bold">Get in Touch</h3>
                  <a href={`tel:${siteConfig.phoneTel}`} className="block text-primary hover:underline text-sm mt-1">{siteConfig.phone}</a>
                  <a href={`mailto:${siteConfig.email}`} className="block text-primary hover:underline text-sm">{siteConfig.email}</a>
                </div>
              </div>
              <div className="flex gap-3 ml-13">
                <a href={siteConfig.social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="inline-flex h-9 w-9 items-center justify-center rounded bg-white text-gray-700 hover:text-primary shadow-sm">
                  <LinkedInIcon className="h-4 w-4" />
                </a>
                <a href={siteConfig.social.x} target="_blank" rel="noopener noreferrer" aria-label="X" className="inline-flex h-9 w-9 items-center justify-center rounded bg-white text-gray-700 hover:text-primary shadow-sm">
                  <XIcon className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-16 md:py-24">
        <div className="absolute inset-0">
          <Image src="/offices-bg.jpg" alt="" fill sizes="100vw" className="object-cover" />
          <div className="absolute inset-0 bg-white/85 backdrop-blur-sm" />
        </div>
        <div className="relative container-page">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-2">Strategic Locations Across Europe</p>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">Global Offices</h2>
            <p className="text-gray-600 leading-relaxed max-w-2xl mx-auto">
              With offices strategically located across Europe, SLA Pharma maintains a strong presence in key markets. Our international network of offices enables us to effectively serve healthcare providers and patients across the region.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {siteConfig.offices.map((o) => (
              <div key={o.region} className="rounded-xl bg-white border border-gray-200 shadow-md p-6">
                <div className="flex items-center gap-2 mb-4">
                  <GlobeIcon className="h-5 w-5 text-primary" />
                  <h3 className="text-primary font-bold text-sm uppercase tracking-wide">{o.region}</h3>
                </div>
                <div className="space-y-0.5 text-sm text-gray-700">
                  {o.lines.map((line) => (
                    <p key={line}>{line}</p>
                  ))}
                </div>
                {(o.phone || o.email) && (
                  <div className="mt-4 pt-4 border-t border-gray-100 space-y-1 text-sm">
                    {o.phone && <p className="text-primary">T: {o.phone}</p>}
                    {o.email && <p><a href={`mailto:${o.email}`} className="text-primary hover:underline">E: {o.email}</a></p>}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
