import { useEffect } from "react";
import Seo from "@/components/Seo";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LegalLayout, {
  LegalH3,
  LegalLead,
  LegalLink,
  LegalList,
  LegalP,
  LegalSection,
  LegalTable,
  Ph,
} from "@/components/legal/LegalLayout";
import { analytics } from "@/lib/analytics";

// DRAFT COPY: highlighted [bracketed] values are placeholders, and the policy
// needs legal review before it's final.

const GLANCE = [
  "Your financial data is never used to train AI models.",
  "Connections to your systems are read-only.",
  "Each hosted customer gets a dedicated, encrypted database.",
  "You can unsubscribe from our emails at any time.",
];

const SECTIONS = [
  {
    id: "who",
    title: "1. Who we are",
    body: (
      <>
        <LegalP>
          Emulsion Financial Solutions (Fijn Software, LLC D.B.a Emulsion Financial Services, “Emulsion”, “we”, “us” or
          “our”) provides a platform that consolidates financial data from the accounting systems an
          organization runs or has inherited. This policy covers our website, emulsionfs.com (the
          “Website”), and the Emulsion platform and related services (the “Platform”).
        </LegalP>
        <LegalP>
          <LegalLead>Our role.</LegalLead> For information we collect through the Website, from
          sales inquiries and to run our business, Emulsion decides how the information is used and
          acts as a “controller” (or “business”). For financial data and user account information
          that customers provide to the Platform, we act on our customer’s behalf as a “processor”
          (or “service provider”). In that case, your organization controls the data, and you should
          direct privacy requests to them first.
        </LegalP>
        {/*<LegalP>*/}
        {/*  Our registered address is <Ph>[Registered address]</Ph>.*/}
        {/*</LegalP>*/}
      </>
    ),
  },
  {
    id: "collect",
    title: "2. Information we collect",
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
            "The reason you’re contacting us and any message you include",
          ]}
        />
        <LegalP>
          We also collect information you share with us in emails, calls and meetings, such as your
          job title and details about your organization’s needs.
        </LegalP>

        <LegalH3>Information collected automatically</LegalH3>
        <LegalP>
          Our Website uses Google Analytics to understand how visitors use it. This collects details
          such as the pages you view, how long you stay, your browser and device type, your IP
          address and approximate location derived from it, and the site that referred you. If you
          open our marketing emails, Mailchimp may record whether an email was opened and which
          links were clicked.
        </LegalP>

        <LegalH3>Account information</LegalH3>
        <LegalP>
          If you use the Platform, we collect your name, email address, role and the permissions
          your organization assigns you. We also keep technical and usage records needed to run and
          secure the Platform, such as login times, IP addresses and audit logs of actions taken and
          data accessed.
        </LegalP>

        <LegalH3>Customer financial data</LegalH3>
        <LegalP>
          Customers connect or provide financial records from their accounting systems, such as
          ledgers, journal entries, account balances, vendor and customer records, and related
          reports. These records may include personal information, such as names of employees,
          vendors or customers. We process this data on the customer’s behalf, as described in
          Section 4.
        </LegalP>
        <LegalP>
          We do not ask for, and ask you not to submit through the Website, sensitive personal
          information such as government ID numbers, health information or payment card numbers.
        </LegalP>
      </>
    ),
  },
  {
    id: "use",
    title: "3. How we use information",
    body: (
      <>
        <LegalTable
          caption="How we use information, what we use and our legal basis"
          head={["Purpose", "Information used", "Legal basis (EU/UK visitors)"]}
          rows={[
            [
              "Respond to your inquiry and schedule demos or scoping calls",
              "Form details, communications",
              "Steps you ask us to take before a contract; legitimate interests",
            ],
            [
              "Send product news and updates (you can unsubscribe at any time)",
              "Name, work email, email engagement",
              "Legitimate interests, or consent where the law requires it",
            ],
            [
              "Provide, maintain and support the Platform",
              "Account information, customer financial data",
              "Performance of our contract; on the customer’s instructions",
            ],
            [
              "Secure the Website and Platform and prevent fraud or misuse",
              "Account, usage and technical data",
              "Legitimate interests; legal obligation",
            ],
            [
              "Understand and improve how our Website is used",
              "Analytics data",
              "Consent (where required) or legitimate interests",
            ],
            [
              "Meet legal, tax and accounting obligations and enforce our agreements",
              "Any relevant information",
              "Legal obligation; legitimate interests",
            ],
          ]}
        />
        <LegalP>
          We do not use personal information for automated decision-making that has legal or
          similarly significant effects on you. If we want to use your information for a new purpose
          that isn’t compatible with these, we will tell you first.
        </LegalP>
      </>
    ),
  },
  {
    id: "customer-data",
    title: "4. Customer financial data",
    body: (
      <>
        <LegalP>
          Financial data from your systems belongs to your organization. We use it only to provide
          the services in your agreement with us, and we follow your organization’s instructions
          about how it is handled.
        </LegalP>
        <LegalList
          items={[
            <>
              <LegalLead>Read-only connections.</LegalLead> Connections to live systems are
              read-only. We never write to your systems.
            </>,
            <>
              <LegalLead>Dedicated hosting.</LegalLead> Hosted customers get a dedicated database,
              never shared or pooled with other customers, encrypted with AES-256 at rest and TLS in
              transit.
            </>,
            <>
              <LegalLead>Local deployment.</LegalLead> Customers who choose local deployment keep
              their repository on their own infrastructure, and Emulsion does not hold a copy of
              that data.
            </>,
            <>
              <LegalLead>No AI training.</LegalLead> Your data is never used to train AI models,
              ours or anyone else’s.
            </>,
            <>
              <LegalLead>AI integrations are opt-in.</LegalLead> Optional AI integrations are off
              unless your organization turns them on. If it does, the relevant data is sent to the
              AI provider your organization selects, under that provider’s terms and your
              organization’s settings.
            </>,
            <>
              <LegalLead>Access by our staff.</LegalLead> Emulsion personnel access customer data
              only when needed to provide support, maintain the service or meet legal obligations,
              and that access is logged.
            </>,
          ]}
        />
        <LegalP>
          If we receive a privacy request from someone whose information is in customer data, we
          will refer them to the customer, or help the customer respond, as our agreement provides.
        </LegalP>
      </>
    ),
  },
  {
    id: "share",
    title: "5. How we share information",
    body: (
      <>
        <LegalP>
          We do not sell personal information, and we do not share it for cross-context behavioral
          advertising.
        </LegalP>
        <LegalP>
          We share information only with service providers that help us run our business, and only
          as needed for them to do so. They may use it only to provide services to us.
        </LegalP>
        <LegalTable
          caption="Service providers we share information with"
          head={["Provider", "What it does"]}
          rows={[
            ["Mailchimp (Intuit)", "Stores form submissions and sends our emails"],
            ["Google Analytics (Google)", "Measures Website usage"],
            ["Amazon Web Services, Vercel", "Host the Website and the Platform"],
            // [
            //   <Ph key="other">[Other providers, e.g. CRM, scheduling, support tools]</Ph>,
            //   <Ph key="purpose">[Purpose]</Ph>,
            // ],
            // ["AI assistants your organization chooses to connect, if any", "Process data your organization sends to them"],
          ]}
        />
        <LegalP>We may also disclose information:</LegalP>
        <LegalList
          items={[
            "When the law requires it, such as to respond to a valid subpoena, court order or request from a public authority, or to protect the rights, property or safety of Emulsion, our customers or others.",
            "In a business transaction, such as a merger, acquisition, financing or sale of assets. The recipient will be bound to honor this policy for information we hold.",
            "With your consent or at your direction.",
          ]}
        />
      </>
    ),
  },
  {
    id: "cookies",
    title: "6. Cookies and analytics",
    body: (
      <>
        <LegalP>
          Cookies are small files a website stores in your browser. Our Website uses Google
          Analytics cookies to tell visits apart and measure how the site is used. The Platform uses
          only the cookies needed to keep you signed in and secure.
        </LegalP>
        <LegalP>You can control cookies in several ways:</LegalP>
        <LegalList
          items={[
            "Block or delete cookies in your browser settings.",
            <>
              Install Google’s{" "}
              <LegalLink href="https://tools.google.com/dlpage/gaoptout">opt-out browser add-on</LegalLink>.
            </>,
            // <Ph key="banner">
            //   [If you use a cookie banner: change your choices at any time through the “Cookie
            //   settings” link in our footer.]
            // </Ph>,
          ]}
        />
        <LegalP>
          Blocking cookies won’t stop the Website from working. Our Website does not currently
          respond to “Do Not Track” signals, but we honor Global Privacy Control (GPC) signals as a
          request to opt out where the law requires it. You can learn how Google uses data at{" "}
          <LegalLink href="https://policies.google.com/technologies/partner-sites">
            Google’s privacy and terms page
          </LegalLink>
          .
        </LegalP>
      </>
    ),
  },
  {
    id: "transfers",
    title: "7. International data transfers",
    body: (
      <LegalP>
        Emulsion is based in The United States of America, and our service providers may process information
        in the United States and other countries. Those countries may have data protection laws
        different from yours. When we transfer personal information out of the European Economic
        Area, the United Kingdom or Switzerland, we use safeguards recognized by law, such as the
        European Commission’s Standard Contractual Clauses and the UK Addendum. Hosted customers can{" "}
        choose the region where their dedicated database is stored.
      </LegalP>
    ),
  },
  {
    id: "retention",
    title: "8. Retention",
    body: (
      <>
        <LegalP>We keep personal information only as long as we need it for the purposes in this policy:</LegalP>
        <LegalList
          items={[
            <>
              <LegalLead>Inquiry and contact details:</LegalLead>{" "}
              We retain your information for 24 months after expiration of a contract, initial contact, or until you
              ask us to delete them.
            </>,
            <>
              <LegalLead>Marketing email preferences:</LegalLead> We keep a record of your
              unsubscribe so we can honor it.
            </>,
            <>
              <LegalLead>Account information:</LegalLead> For as long as your organization’s
              account is active, then deleted per the customer agreement.
            </>,
            <>
              <LegalLead>Customer financial data:</LegalLead> For the length of your agreement, then
              returned or deleted as your agreement sets out.
            </>,
            <>
              <LegalLead>Analytics data:</LegalLead> Google Analytics retains event data for 12 months under our settings.
            </>,
            <>
              <LegalLead>Legal and financial records:</LegalLead> As long as the law requires, such
              as for tax and accounting purposes.
            </>,
          ]}
        />
        {/*<LegalP>*/}
        {/*  Backups are overwritten on a rolling schedule of <Ph>[backup retention period]</Ph>.*/}
        {/*</LegalP>*/}
      </>
    ),
  },
  {
    id: "security",
    title: "9. Security",
    body: (
      <>
        <LegalP>
          We use administrative, technical and physical safeguards designed to protect personal
          information, including:
        </LegalP>
        <LegalList
          items={[
            "Encryption of data at rest (AES-256) and in transit (TLS)",
            "Role-based access controls and the principle of least privilege",
            "Logging of access to customer data",
            "Microsoft Multi-factor Authentication",
            "Google Multi-factor Authentication",
          ]}
        />
        <LegalP>
          No system is perfectly secure, and we can’t guarantee the security of information sent
          over the internet. If we become aware of a breach affecting your personal information, we
          will notify you, affected customers and regulators as the law and our agreements require.
          You are responsible for keeping your Platform login credentials confidential.
        </LegalP>
      </>
    ),
  },
  {
    id: "rights",
    title: "10. Your choices and rights",
    body: (
      <>
        <LegalP>
          <LegalLead>Everyone.</LegalLead> You can ask us to access, correct or delete your personal
          information. You can unsubscribe from marketing emails at any time with the link in any
          message; we may still send you messages about your account or our services.
        </LegalP>
        <LegalP>
          <LegalLead>California residents.</LegalLead> Under the California Consumer Privacy Act, as
          amended (CCPA), you have the right to:
        </LegalP>
        <LegalList
          items={[
            "Know what personal information we collect, use and disclose, and get a copy of it",
            "Request that we correct inaccurate information",
            "Request that we delete your information, subject to legal exceptions",
            "Opt out of the sale or sharing of your information (we do not sell or share it)",
            "Limit the use of sensitive personal information (we do not collect it for that purpose)",
            "Not be discriminated against for exercising these rights",
          ]}
        />
        <LegalP>
          In the past 12 months, we collected identifiers (such as name, email and IP address),
          professional information (such as company and role), internet activity (such as Website
          usage) and approximate location, from the sources and for the purposes described above.
          We disclosed these categories only to the service providers listed in Section 5. You may
          use an authorized agent to submit a request on your behalf.
        </LegalP>
        <LegalP>
          <LegalLead>Other U.S. states.</LegalLead> Residents of states with similar privacy laws
          (such as Colorado, Connecticut, Virginia and others) have comparable rights. If we deny
          your request, you may appeal by replying to our decision; if we deny the appeal, you can
          contact your state attorney general.
        </LegalP>
        <LegalP>
          <LegalLead>EEA, UK and Swiss residents.</LegalLead> Under the GDPR and UK GDPR, you also
          have the right to restrict or object to our processing, to data portability, and to
          withdraw consent at any time where we rely on it. You can lodge a complaint with your
          local data protection authority.
        </LegalP>
        <LegalP>
          <LegalLead>How to make a request.</LegalLead> Email us at{" "}
          <Ph>privacy@emulsionfs.com</Ph>. We will verify your identity, usually by confirming
          details we already hold, and respond within the time the law requires (generally 30 to 45
          days). If your information is held in an organization’s account on the Platform, we will
          refer your request to that organization.
        </LegalP>
      </>
    ),
  },
  {
    id: "children",
    title: "11. Children",
    body: (
      <LegalP>
        Our Website and services are built for businesses and aren’t directed to children under 16.
        We don’t knowingly collect their information. If you believe a child has given us personal
        information, contact us and we will delete it.
      </LegalP>
    ),
  },
  {
    id: "third-party",
    title: "12. Third-party links",
    body: (
      <LegalP>
        Our Website may link to other sites, and the Platform may connect to third-party systems
        your organization chooses, such as accounting software or AI assistants. We aren’t
        responsible for their privacy practices, so please review their policies.
      </LegalP>
    ),
  },
  {
    id: "changes",
    title: "13. Changes to this policy",
    body: (
      <LegalP>
        We may update this policy from time to time. We’ll post any changes on this page and update
        the date at the top. If a change is significant, we’ll tell customers directly, by email or
        through the Platform, before it takes effect.
      </LegalP>
    ),
  },
  {
    id: "contact",
    title: "14. Contact us",
    body: (
      <>
        <LegalP>Questions about this policy or your information:</LegalP>
        <address className="mt-4 rounded-[18px] bg-primary-cream px-5 py-4 text-[15px] leading-[1.8] not-italic text-forest-ink/80">
            Emulsion Financial Solutions
          <br />
          {/*Attn: Privacy*/}
          {/*<br />*/}
          {/*<Ph>[Street address]</Ph>*/}
          {/*<br />*/}
          {/*<Ph>[City, State ZIP, Country]</Ph>*/}
          {/*<br />*/}
          Email: privacy@emulsionfs.com
          {/*<br />*/}
          {/*Phone: <Ph>[phone number]</Ph>*/}
        </address>
        {/*<LegalP>*/}
        {/*  <Ph>[If required: EU/UK representative — name and contact details.]</Ph>*/}
        {/*</LegalP>*/}
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
        description="What personal information Emulsion collects, how we use and share it, and the choices and rights you have."
        path="/privacy"
      />
      <Navbar activePage="privacy" />
      <main>
        <LegalLayout
          active="privacy"
          title="Privacy"
          accent="Policy"
          intro="This Privacy Policy explains what personal information Emulsion collects, how we use and share it, and the choices and rights you have. Please read it alongside any agreement your organization has with us."
          effective={<Ph>November 4, 2026</Ph>}
          updated={<Ph>November 4, 2026</Ph>}
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
