import { useEffect } from "react";
import Seo from "@/components/Seo";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LegalLayout, {
  ContactChips,
  LegalH3,
  LegalList,
  LegalP,
  LegalSection,
  Ph,
} from "@/components/legal/LegalLayout";
import { analytics } from "@/lib/analytics";

// DRAFT COPY: bracketed values are placeholders, and the whole policy needs
// legal review before this page is linked publicly.

const GLANCE = [
  "Your financial data is never used to train AI models.",
  "Connections to your systems are read-only.",
  "Each customer gets a dedicated, encrypted database.",
  "You can unsubscribe from our emails at any time.",
];

const SECTIONS = [
  {
    id: "who",
    title: "Who we are",
    body: (
      <LegalP>
        Emulsion Financial Solutions (<Ph>[Legal entity name]</Ph>, “Emulsion”, “we”) provides a
        platform that consolidates financial data from the accounting systems an organization runs
        or has inherited. This policy covers our website, emulsionfs.com, and the Emulsion platform.
      </LegalP>
    ),
  },
  {
    id: "collect",
    title: "Information we collect",
    body: (
      <>
        <LegalH3>Information you give us</LegalH3>
        <LegalP>
          When you book a demo, contact sales or request a scoping call, we collect what you enter
          in the form:
        </LegalP>
        <LegalList
          items={[
            "Name, work email, phone number and company",
            "Number of entities and the accounting systems you use",
            "The reason you're contacting us and any message you include",
          ]}
        />
        <LegalH3>Information collected automatically</LegalH3>
        <LegalP>
          Our website uses Google Analytics to understand how visitors use it. This collects details
          such as the pages you view, your browser and device type, your approximate location and
          the site that referred you.
        </LegalP>
        <LegalH3>Account information</LegalH3>
        <LegalP>
          If you use the Emulsion platform, we collect your name, email address, role and the
          permissions your organization assigns you.
        </LegalP>
        <LegalH3>Customer financial data</LegalH3>
        <LegalP>
          Customers connect or provide financial records from their accounting systems. We process
          this data on the customer&apos;s behalf, as described below.
        </LegalP>
      </>
    ),
  },
  {
    id: "use",
    title: "How we use information",
    body: (
      <LegalList
        items={[
          "To respond to your inquiry and schedule demos or scoping calls",
          "To send product news and updates, which you can unsubscribe from at any time",
          "To provide, maintain and secure the Emulsion platform",
          "To understand and improve how our website is used",
          "To meet legal, tax and accounting obligations",
        ]}
      />
    ),
  },
  {
    id: "customer-data",
    title: "Customer financial data",
    body: (
      <>
        <LegalP>
          Financial data from your systems belongs to your organization. We use it only to provide
          the services in your agreement with us.
        </LegalP>
        <LegalList
          items={[
            "Connections to live systems are read-only. We never write to your systems.",
            "Hosted customers get a dedicated database, never shared or pooled, encrypted with AES-256 at rest and TLS in transit.",
            "Customers who choose local deployment keep their repository on their own infrastructure.",
            "Your data is never used to train AI models. Optional AI integrations are off unless your organization turns them on.",
          ]}
        />
      </>
    ),
  },
  {
    id: "share",
    title: "How we share information",
    body: (
      <>
        <LegalP>
          We share information only with service providers that help us run our business, and only
          as needed for them to do so:
        </LegalP>
        <LegalList
          items={[
            "Mailchimp, which stores form submissions and sends our emails",
            "Google Analytics, which measures website usage",
            <Ph key="hosting">[Hosting and infrastructure providers]</Ph>,
            "AI assistants your organization chooses to connect, if any",
          ]}
        />
        <LegalP>
          We may also disclose information if required by law, or as part of a merger or
          acquisition. <Ph>[Confirm: we do not sell personal information.]</Ph>
        </LegalP>
      </>
    ),
  },
  {
    id: "cookies",
    title: "Cookies and analytics",
    body: (
      <LegalP>
        Google Analytics uses cookies to tell visits apart. You can block or delete cookies in your
        browser settings, or install Google&apos;s opt-out browser add-on. Blocking cookies won&apos;t
        stop the website from working.
      </LegalP>
    ),
  },
  {
    id: "retention",
    title: "Retention",
    body: (
      <LegalP>
        We keep inquiry and contact details for <Ph>[retention period]</Ph>, or until you ask us to
        delete them. Customer data is kept for the length of your agreement and returned or deleted
        afterwards as your agreement sets out.
      </LegalP>
    ),
  },
  {
    id: "security",
    title: "Security",
    body: (
      <LegalP>
        We operate under SOC 2 Type II audited controls, encrypt data at rest and in transit, and
        limit access with role-based permissions. No system is perfectly secure, but we work to
        protect your information and will notify you of a breach as the law requires.
      </LegalP>
    ),
  },
  {
    id: "rights",
    title: "Your choices and rights",
    body: (
      <LegalP>
        You can ask us to access, correct or delete your personal information, and you can
        unsubscribe from emails with the link in any message. Depending on where you live, you may
        have further rights under laws such as <Ph>[applicable laws, e.g. CCPA, GDPR]</Ph>. Email
        us to make a request.
      </LegalP>
    ),
  },
  {
    id: "children",
    title: "Children",
    body: (
      <LegalP>
        Our website and services are built for businesses and aren&apos;t directed to children under{" "}
        <Ph>[age]</Ph>. We don&apos;t knowingly collect their information.
      </LegalP>
    ),
  },
  {
    id: "changes",
    title: "Changes to this policy",
    body: (
      <LegalP>
        We&apos;ll post any changes on this page and update the date at the top. If a change is
        significant, we&apos;ll tell customers directly.
      </LegalP>
    ),
  },
  {
    id: "contact",
    title: "Contact us",
    body: (
      <>
        <LegalP>Questions about this policy or your information:</LegalP>
        <ContactChips items={[<Ph key="email">[privacy@emulsionfs.com]</Ph>, <Ph key="address">[Mailing address]</Ph>]} />
      </>
    ),
  },
];

export default function Privacy() {
  useEffect(() => {
    analytics.page();
  }, []);

  return (
    <div className="min-h-screen bg-primary-cream">
      <Seo
        title="Privacy Policy — Emulsion"
        description="How Emulsion collects, uses and protects information on our website and in the Emulsion platform."
        path="/privacy"
      />
      <Navbar activePage="privacy" />
      <main>
        <LegalLayout
          active="privacy"
          title="Privacy"
          accent="Policy"
          intro="How Emulsion Financial Solutions collects, uses and protects information on our website and in the Emulsion platform."
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
