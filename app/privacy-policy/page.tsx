import type { Metadata } from "next";
import { FullBleedHero } from "@/components/shared/FullBleedHero";
import { ObfuscatedEmail } from "@/components/shared/ObfuscatedEmail";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How SLA Pharma collects, uses and protects your personal information.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <FullBleedHero
        image="/hero-about.jpg"
        title="PRIVACY POLICY"
        subtitle="Learn how we handle and protect your personal information"
        heightClass="h-[36vh] min-h-[280px] max-h-[400px]"
      />
      <section className="container-page py-16 md:py-20 max-w-3xl">
        <div className="prose prose-gray max-w-none space-y-4 text-gray-700 leading-relaxed">
          <h2 className="text-2xl font-bold text-gray-900 mt-8">SLA Pharma Privacy Notice</h2>
          <p>
            SLA Pharma (&ldquo;we&rdquo; and &ldquo;us&rdquo;) are a niche biopharmaceutical company,
            specializing in gastrointestinal and allied disorders, with products in clinical
            development and already approved for human use. In order to undertake the work we
            do, we process personal data. The personal data we process depends on whether we
            are acting in our capacity as a Sponsor of a clinical trial or managing our
            business relationship with you.
          </p>
          <p>
            If you wish to contact us regarding your personal data and data protection,
            please send an email to <ObfuscatedEmail user="info" domain="slapharma.com" />
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-8">About us</h2>
          <p>
            Information About Us S.L.A Pharma UK Ltd. Limited registered in England under
            company number 3370027. Registered address: 3a Chestnut house, Farm close,
            Shenley. Hertfordshire WD7 9AD. Email address:{" "}
            <ObfuscatedEmail user="info" domain="slapharma.com" />
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-8">What Does This Notice Cover?</h2>
          <p>
            This Privacy Information explains how we use your personal data: how it is
            collected, how it is held, and how it is processed. It also explains your
            rights under the law relating to your personal data.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-8">What is Personal Data?</h2>
          <p>
            Personal data is defined by the General Data Protection Regulation (EU
            Regulation 2016/679) (the &ldquo;GDPR&rdquo;) as &lsquo;any information relating to an
            identifiable person who can be directly or indirectly identified in particular
            by reference to an identifier&rsquo;.
          </p>
          <p>
            Personal data is, in simpler terms, any information about you that enables you
            to be identified. Personal data covers obvious information such as your name
            and contact details, but it also covers less obvious information such as
            identification numbers, electronic location data, and other online identifiers.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-8">SLA Pharma as a Sponsor</h2>
          <p>
            Where we act as a Sponsor of a Clinical Trial, we will only ever process
            personal data about you in line with the information you received when you
            consented to be part of the trial. This information will be contained within
            your Informed Consent Form and Patient Information Sheet.
          </p>
          <p>
            For Clinical Trials, we will only receive pseudonymised data about you. This
            means any information which can be directly attributed to you will be replaced
            with a unique code. We do not receive your name, contact details or date of
            birth.
          </p>
          <p>
            Please refer to your Patient Information Sheet for specific details on your
            trial, or feel free to contact your Hospital where you undertook the Clinical
            Trial or us directly (details below) for a copy of that information.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-8">
            SLA Pharma in managing business relationships
          </h2>
          <p>
            Where we process personal data in relation to our business relationship with
            you, the personal data we collect will be that that you provide to us,
            including name, contact details and the company you work for.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-8">What Are My Rights?</h2>
          <p>
            GDPR provides certain rights to individuals in regards to your data. These
            rights do have some exemptions however, and whether you can exercise them will
            depend on whether you are a clinical trial participant or business contact.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>The right to be informed about our collection and use of your personal data.</li>
            <li>The right to access the personal data we hold about you.</li>
            <li>
              The right to have your personal data rectified if any of your personal data
              held by us is inaccurate or incomplete.
            </li>
            <li>
              The right to be forgotten, i.e. the right to ask us to delete or otherwise
              dispose of any of your personal data that we have.
            </li>
            <li>The right to restrict (i.e. prevent) the processing of your personal data.</li>
            <li>
              The right to object to us using your personal data for a particular purpose
              or purposes.
            </li>
            <li>
              The right to data portability. This means that, if you have provided personal
              data to us directly, we are using it with your consent or for the performance
              of a contract, and that data is processed using automated means, you can ask
              us for a copy of that personal data to re-use with another service or
              business in many cases.
            </li>
          </ul>
          <p>
            Further information about your rights can also be obtained from the Information
            Commissioner&rsquo;s Office.
          </p>
          <p>
            If you wish to exercise any of your rights, please contact us at{" "}
            <ObfuscatedEmail user="info" domain="slapharma.com" /> and we will respond to
            your request within one month.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-8">How Do You Use My Personal Data?</h2>
          <p>Under the GDPR, we must always have a lawful basis for using personal data.</p>
          <p>
            Where we are Sponsor of a Clinical Trial, it is considered in our legitimate
            interest to undertake research into clinical advancements where you have
            consented to be part of the research. As we process your health data for
            research purposes, GDPR allows a specific exemption for us to process for this
            purpose. We will only use this personal data for the purposes of the Clinical
            Trial.
          </p>
          <p>
            Where we use personal data in managing business relationship, we process your
            personal data because the data is necessary for our performance of a contract
            with you, because you have consented to our use of your personal data, or
            because it is in our legitimate business interests to use it. Your personal
            data will be used for the following purposes:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Providing and managing your account</li>
            <li>
              Supplying our products OR services to you (Your personal details are required
              in order for us to enter into a contract with you.)
            </li>
            <li>Personalising and tailoring our products AND/OR services for you</li>
            <li>
              Communicating with you. This may include responding to emails or calls from
              you
            </li>
            <li>
              Supplying you with marketing information by email AND/OR post that you have
              opted-in to (you may unsubscribe or opt-out at any time by emailing:{" "}
              <ObfuscatedEmail user="info" domain="slapharma.com" />)
            </li>
          </ul>

          <h2 className="text-xl font-bold text-gray-900 mt-8">
            How Long Will You Keep My Personal Data?
          </h2>
          <p>
            We will not keep your personal data for any longer than is necessary in light
            of the reason(s) for which it was first collected. For Clinical Trials, there
            are defined retention periods in clinical trial laws for holding your personal
            data. This is 15 years in the UK and 25 years in the EU. For business
            relationships, we will hold the data for no longer than is necessary or until
            you request us to no longer contact you.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-8">
            How and Where Do You Store or Transfer My Personal Data?
          </h2>
          <p>
            If you are involved in a Clinical Trial, your personal data may be transferred
            outside the EEA, dependent on the trial. Please see below for how to access
            information on your specific trial. Where this is done, it will only be to a
            country that is considered to have adequate levels of data protection, or with
            added safeguards to ensure your personal data is protected.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-8">Do You Share My Personal Data?</h2>
          <p>
            When processing personal data for a Clinical Trial, your hospital will share
            your personal data with organisations who are contracted to provide different
            services to assist the clinical trials, such as drug safety organisations,
            electronic record companies and labs. These organisations work under a strict
            contract and can only process any personal data under the terms set within
            that contract.
          </p>
          <p>
            For our business relationships, we will not share your data unless in some
            limited circumstances, where we may be legally required to share certain
            personal data, which might include yours, if we are involved in legal
            proceedings or complying with legal obligations, a court order, or the
            instructions of a government authority.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-8">Company Structure</h2>
          <p>
            SLA Pharma also have a Swiss company (SLA Pharma AG) and an Irish company (SLA
            Pharma IE). You may contact any company in regards to your data protection
            rights on the contact details below.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-8">How Do I Contact You?</h2>
          <p>
            To contact us about anything to do with your personal data and data
            protection, including to make a subject access request, please use the
            following details for the attention of the SLA Pharma UK Data Protection
            Officer:
          </p>
          <p>
            For queries to the Swiss and Irish company, please contact:{" "}
            <ObfuscatedEmail user="info" domain="slapharma.com" />
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-8">Complaints</h2>
          <p>
            You have the right to make a complaint to the UK regulator for data
            protection, the Information Commissioners Office if you are not happy with any
            aspect of processing personal data. They can be contacted at{" "}
            <a
              href="https://ico.org.uk/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              https://ico.org.uk/
            </a>
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-8">Use of Cookies and Analytics</h2>
          <p>
            Our website uses cookies and similar technologies to enhance your browsing
            experience and to help us improve our website.
          </p>
          <h3 className="text-lg font-semibold text-gray-900 mt-6">What are cookies?</h3>
          <p>
            Cookies are small text files that are placed on your device when you visit a
            website. They are widely used to make websites work more efficiently and
            provide information to the website owners.
          </p>
          <h3 className="text-lg font-semibold text-gray-900 mt-6">How we use cookies</h3>
          <p>We use the following types of cookies on our website:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Essential cookies:</strong> These cookies are necessary for the
              website to function properly. They enable core functionality such as
              security, network management, and account access.
            </li>
            <li>
              <strong>Analytics cookies:</strong> We use Google Analytics to collect
              anonymous information about how visitors use our website. These cookies help
              us understand how visitors interact with our website, allowing us to improve
              our site and provide a better user experience.
            </li>
          </ul>
          <h3 className="text-lg font-semibold text-gray-900 mt-6">Google Analytics</h3>
          <p>
            Our website uses Google Analytics, a web analytics service provided by Google,
            Inc. Google Analytics uses cookies to help us analyze how users use our site.
            The information generated by the cookie about your use of our website
            (including your IP address) will be transmitted to and stored by Google on
            servers in the United States.
          </p>
          <p>
            Google will use this information for the purpose of evaluating your use of our
            website, compiling reports on website activity for website operators, and
            providing other services relating to website activity and internet usage.
            Google may also transfer this information to third parties where required to
            do so by law, or where such third parties process the information on
            Google&rsquo;s behalf.
          </p>
          <p>
            You can prevent Google&rsquo;s collection and use of data by downloading and
            installing the browser plugin available at:{" "}
            <a
              href="https://tools.google.com/dlpage/gaoptout"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              https://tools.google.com/dlpage/gaoptout
            </a>
          </p>
          <h3 className="text-lg font-semibold text-gray-900 mt-6">Managing cookies</h3>
          <p>
            You can control and/or delete cookies as you wish. You can delete all cookies
            that are already on your computer and you can set most browsers to prevent
            them from being placed. However, if you do this, you may have to manually
            adjust some preferences every time you visit our website and some services and
            functionalities may not work.
          </p>
          <p>
            When you first visit our website, you will be presented with a cookie consent
            banner that allows you to accept or reject cookies. You can change your cookie
            preferences at any time by clearing your browser cookies and revisiting our
            website.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mt-6">Changes to this Privacy Notice</h3>
          <p>
            We may change this Privacy Notice from time to time. This may be necessary,
            for example, if the law changes, or if we change our business in a way that
            affects personal data protection. Any changes will be made available at
            www.slapharma.com
          </p>
        </div>
      </section>
    </>
  );
}
