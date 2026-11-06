import { useEffect } from "react";
import Link from "next/link";
import Seo from "@/components/Seo";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LegalLayout, { ContactChips, LegalList, LegalP, LegalSection, Ph } from "@/components/legal/LegalLayout";
import { analytics } from "@/lib/analytics";

// DRAFT COPY: bracketed values are placeholders, and the whole document needs
// legal review before this page is linked publicly.

const GLANCE = [
  "Your financial data stays yours.",
  "Fees are fixed in your proposal.",
  "Licensed by organization, not by seat.",
  "A signed agreement with us takes priority over these terms.",
];

const SECTIONS = [
  {
    id: "agreement",
    title: "About these terms",
    body: (
      <>
        <LegalP>
          These terms are an agreement between you and Emulsion Financial Solutions (
          <Ph>[Legal entity name]</Ph>, “Emulsion”, “we”). They apply to our website and the
          Emulsion platform. If your organization has signed a master agreement or order form with
          us, that agreement takes priority where it differs from these terms.
        </LegalP>
        <LegalP>
          By using our website or services, you agree to these terms. If you&apos;re using Emulsion
          on behalf of an organization, you confirm you&apos;re authorized to accept them for it.
        </LegalP>
      </>
    ),
  },
  {
    id: "services",
    title: "The services",
    body: (
      <LegalP>
        Emulsion provides a platform that consolidates financial data, along with the connections,
        legacy extraction, migration and onboarding work set out in your proposal. What we deliver
        for your organization, and when, is defined in that proposal.
      </LegalP>
    ),
  },
  {
    id: "accounts",
    title: "Accounts and access",
    body: (
      <LegalList
        items={[
          "Your organization decides who gets access and what each person can see.",
          "Keep your login details secure and don't share accounts.",
          "Tell us promptly if you suspect unauthorized access.",
          "Your organization is responsible for activity under its accounts.",
        ]}
      />
    ),
  },
  {
    id: "data",
    title: "Your data",
    body: (
      <>
        <LegalP>
          Your organization owns the financial data it connects or provides. You give us permission
          to access and process it only as needed to provide the services. Our connections to your
          live systems are read-only, and we never use your data to train AI models.
        </LegalP>
        <LegalP>
          When your agreement ends, you can export your data, and we&apos;ll return or delete it as
          your agreement sets out. Our{" "}
          <Link href="/privacy" className="font-medium text-primary-green-700 underline underline-offset-2 hover:text-forest-800">
            Privacy Policy
          </Link>{" "}
          explains how we handle personal information.
        </LegalP>
      </>
    ),
  },
  {
    id: "use",
    title: "Acceptable use",
    body: (
      <>
        <LegalP>You agree not to:</LegalP>
        <LegalList
          items={[
            "Use the services for anything unlawful",
            "Try to access accounts, data or systems you aren't authorized to use",
            "Copy, reverse engineer or resell the platform",
            "Interfere with or overload the services",
          ]}
        />
      </>
    ),
  },
  {
    id: "fees",
    title: "Fees and payment",
    body: (
      <LegalP>
        Fees are fixed in your proposal and licensed by organization, not by seat. We invoice{" "}
        <Ph>[billing schedule]</Ph>, and payment is due within <Ph>[payment terms]</Ph>. Fees
        don&apos;t include taxes, which you&apos;re responsible for unless the law says otherwise.
      </LegalP>
    ),
  },
  {
    id: "confidentiality",
    title: "Confidentiality",
    body: (
      <LegalP>
        Each of us will protect the other&apos;s confidential information with at least reasonable
        care, use it only for this relationship, and share it only with people who need it and are
        bound to keep it confidential.
      </LegalP>
    ),
  },
  {
    id: "ip",
    title: "Intellectual property",
    body: (
      <LegalP>
        Emulsion owns the platform, software and documentation, including improvements. These terms
        don&apos;t transfer any of those rights to you beyond the right to use the services. If you
        send us feedback, we may use it without obligation to you.
      </LegalP>
    ),
  },
  {
    id: "third-party",
    title: "Third-party services and AI",
    body: (
      <LegalP>
        The services connect to systems made by other companies, such as your accounting platforms.
        Optional AI integrations, such as Claude, ChatGPT or Perplexity, are off unless your
        organization turns them on. Your use of any third-party service is also subject to that
        provider&apos;s terms.
      </LegalP>
    ),
  },
  {
    id: "warranties",
    title: "Warranties and disclaimers",
    body: (
      <LegalP>
        <Ph>[Warranty commitments for the platform, e.g. performance as described in your proposal.]</Ph>{" "}
        Except as stated in your agreement, the services and website are provided “as is”, without
        other warranties of any kind.
      </LegalP>
    ),
  },
  {
    id: "liability",
    title: "Limitation of liability",
    body: (
      <LegalP>
        To the extent the law allows, neither party is liable for indirect, incidental or
        consequential damages, or lost profits. Each party&apos;s total liability is limited to{" "}
        <Ph>[liability cap, e.g. fees paid in the prior 12 months]</Ph>.
      </LegalP>
    ),
  },
  {
    id: "termination",
    title: "Term and termination",
    body: (
      <LegalP>
        Your agreement runs for the term in your proposal. Either party may end it if the other
        materially breaches these terms and doesn&apos;t fix the breach within{" "}
        <Ph>[cure period]</Ph> of notice. Sections that by their nature should survive, such as
        confidentiality and limitation of liability, continue after termination.
      </LegalP>
    ),
  },
  {
    id: "law",
    title: "Governing law",
    body: (
      <LegalP>
        These terms are governed by the laws of <Ph>[state or jurisdiction]</Ph>, and disputes will
        be resolved in <Ph>[venue]</Ph>.
      </LegalP>
    ),
  },
  {
    id: "changes",
    title: "Changes to these terms",
    body: (
      <LegalP>
        We may update these terms. We&apos;ll post the new version here and update the date at the
        top. For customers, significant changes take effect at your next renewal unless you agree
        sooner.
      </LegalP>
    ),
  },
  {
    id: "contact",
    title: "Contact us",
    body: (
      <>
        <LegalP>Questions about these terms:</LegalP>
        <ContactChips items={[<Ph key="email">[legal@emulsionfs.com]</Ph>, <Ph key="address">[Mailing address]</Ph>]} />
      </>
    ),
  },
];

export default function Terms() {
  useEffect(() => {
    analytics.page();
  }, []);

  return (
    <div className="min-h-screen bg-primary-cream">
      <Seo
        title="Terms of Service — Emulsion"
        description="The terms that apply when you use the Emulsion website and platform."
        path="/terms"
      />
      <Navbar activePage="terms" />
      <main>
        <LegalLayout
          active="terms"
          title="Terms of"
          accent="Service"
          intro="The terms that apply when you use our website and the Emulsion platform."
          effective={<Ph>[Effective date]</Ph>}
          updated={<Ph>[Date]</Ph>}
          glance={GLANCE}
          sections={SECTIONS}
        >
          {SECTIONS.map((s) => (
            <LegalSection key={s.id} id={s.id} title={s.title}>
              {s.body}
            </LegalSection>
          ))}
        </LegalLayout>
      </main>
      <Footer />
    </div>
  );
}
