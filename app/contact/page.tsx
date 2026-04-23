import type { Metadata } from "next";
import { PageHero } from "@/components/shared/PageHero";
import { ContactForm } from "@/components/contact/ContactForm";
import { ObfuscatedEmail } from "@/components/shared/ObfuscatedEmail";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with SLA Pharma - general enquiries, partnership opportunities, clinical trials.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Let's Start a Conversation"
        subtitle="General enquiries, partnership opportunities or clinical collaboration &mdash; we&rsquo;d love to hear from you."
      />

      <section className="container-page py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a message</h2>
            <ContactForm />
          </div>

          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Get in touch</h2>
              <div className="space-y-2 text-gray-700">
                <p>Phone: <a href={`tel:${siteConfig.phone.replace(/\s/g, "")}`} className="text-primary hover:underline">{siteConfig.phone}</a></p>
                <p>Email: <ObfuscatedEmail user="info" domain="slapharma.com" className="text-primary hover:underline" /></p>
                <p className="flex gap-4 pt-2">
                  <a href={siteConfig.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary">LinkedIn</a>
                  <a href={siteConfig.social.x} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary">X / Twitter</a>
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Our offices</h3>
              <div className="grid sm:grid-cols-1 gap-4">
                {siteConfig.offices.map((o) => (
                  <div key={o.country} className="rounded-lg border border-gray-200 p-5 bg-white">
                    <p className="text-sm font-semibold uppercase tracking-widest text-primary">{o.country}</p>
                    {o.lines.map((l) => (
                      <p key={l} className="text-gray-700">{l}</p>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
