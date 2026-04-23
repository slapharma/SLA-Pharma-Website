import type { Metadata } from "next";
import { PageHero } from "@/components/shared/PageHero";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How SLA Pharma collects, uses and protects your personal information.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero title="Privacy Policy" subtitle="How we collect, use and protect your personal information." />
      <section className="container-page py-16 md:py-20 max-w-3xl">
        <div className="prose prose-gray max-w-none space-y-4 text-gray-700 leading-relaxed">
          <p className="text-sm text-gray-500">Last updated: {new Date().toLocaleDateString("en-GB", { month: "long", year: "numeric" })}</p>
          <p>
            SLA Pharma (&ldquo;we&rdquo;, &ldquo;us&rdquo;) respects your privacy and is committed to protecting your personal information in line with the UK GDPR, EU GDPR (Regulation 2016/679) and applicable data protection law.
          </p>
          <h2 className="text-xl font-bold text-gray-900 mt-8">1. Information we collect</h2>
          <p>We collect information you provide when contacting us (name, email, phone, message subject and message body), and standard website analytics data when you consent to it.</p>
          <h2 className="text-xl font-bold text-gray-900 mt-8">2. How we use your information</h2>
          <p>To respond to enquiries, manage partnership and clinical collaboration discussions, meet regulatory obligations, and improve our website.</p>
          <h2 className="text-xl font-bold text-gray-900 mt-8">3. Legal basis</h2>
          <p>Our lawful bases include consent, legitimate interest, contract performance and compliance with legal obligations, depending on context.</p>
          <h2 className="text-xl font-bold text-gray-900 mt-8">4. Sharing</h2>
          <p>We do not sell your data. We share it only with service providers that help us operate (email, hosting, analytics), clinical partners where relevant, and authorities when legally required.</p>
          <h2 className="text-xl font-bold text-gray-900 mt-8">5. Retention</h2>
          <p>Contact enquiries are retained for as long as needed to respond and to comply with legitimate record-keeping. Clinical trial data is retained for 15 years in the UK and 25 years in the EU where applicable.</p>
          <h2 className="text-xl font-bold text-gray-900 mt-8">6. Cookies</h2>
          <p>We use strictly necessary cookies by default. Analytics cookies (Google Analytics) are loaded only after you accept them in the cookie banner.</p>
          <h2 className="text-xl font-bold text-gray-900 mt-8">7. Your rights</h2>
          <p>You have the right to access, rectify, erase, restrict or object to processing of your personal data, and to data portability. Contact us to exercise these rights.</p>
          <h2 className="text-xl font-bold text-gray-900 mt-8">8. International transfers</h2>
          <p>Where we transfer data outside the UK or EEA, we rely on appropriate safeguards such as UK IDTA and EU Standard Contractual Clauses.</p>
          <h2 className="text-xl font-bold text-gray-900 mt-8">9. Contact</h2>
          <p>For privacy questions, email info@slapharma.com or write to any of our registered offices.</p>
          <p className="text-sm text-gray-500 pt-4 italic">This is a summary replica of the live privacy notice; refer to the full live version before publication.</p>
        </div>
      </section>
    </>
  );
}
