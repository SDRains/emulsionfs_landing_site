import {
  CloudUploadIcon,
  DatabaseIcon,
  GlobeIcon,
  PlusIcon,
  ShieldCheckIcon,
  UsersIcon,
} from "lucide-react";

const LIFT =
  "transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_48px_-20px_rgba(19,43,29,0.35)]";

const LOOKS = {
  dark: {
    card: "relative overflow-hidden bg-forest-900 text-white",
    icon: "bg-lime-accent/15 text-lime-accent",
    body: "text-white/70",
  },
  white: {
    card: "border border-sand-line bg-white",
    icon: "bg-[#E3F0E0] text-primary-green-700",
    body: "text-forest-ink/75",
  },
  lime: {
    card: "border border-[#D3E6C6] bg-linear-140 from-[#DDF0DA] to-[#EAF7BF]",
    icon: "bg-forest-900 text-lime-accent",
    body: "text-forest-ink/80",
  },
};

const SERVICES = [
  {
    icon: GlobeIcon,
    title: "Platform access",
    body: "Emulsion itself: unified search, consolidated reporting, live and historical views, entity management.",
    tag: "Licensed by organization, not by seat",
    look: "dark",
  },
  {
    icon: CloudUploadIcon,
    title: "Live system connections",
    body: "API connections to the platforms you're keeping: JD Edwards, Sage Intacct, QuickBooks, NetSuite, and custom connectors built as needed.",
    look: "white",
  },
  {
    icon: DatabaseIcon,
    title: "Legacy extraction & migration",
    body: "Full extraction with record-by-record validation into a secure repository, local or hosted. Then retire the subscription.",
    look: "white",
  },
  {
    icon: UsersIcon,
    title: "Onboarding & consulting",
    body: "Discovery, chart-of-accounts mapping, consolidation logic, training and first-close support. A named consultant, not a ticket queue.",
    look: "white",
  },
  {
    icon: PlusIcon,
    title: "New-acquisition onboarding",
    body: "A scoped engagement each time you buy. Most new entities are connected and reporting within weeks.",
    look: "lime",
  },
  {
    icon: ShieldCheckIcon,
    title: "Ongoing support & security",
    body: "Dedicated encrypted databases, SOC 2 Type II controls, audit-ready exports and support through every close.",
    look: "white",
  },
];

export default function PricingServices() {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="scroll-mt-28 bg-primary-cream px-6 pb-24 text-forest-ink lg:pb-32"
    >
      <div className="mx-auto max-w-[1240px]">
        <div className="grid items-end gap-x-18 gap-y-6 lg:grid-cols-2">
          <h2
            id="services-heading"
            className="font-new-serif text-4xl font-normal leading-[1.06] tracking-tight sm:text-5xl lg:text-[56px]"
          >
            Every engagement is built{" "}
            <span className="italic text-primary-green-700">from these services.</span>
          </h2>
          <p className="text-[17px] leading-relaxed text-forest-ink/75">
            Your proposal combines exactly the pieces your environment needs, and
            nothing it doesn&apos;t.
          </p>
        </div>

        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s) => {
            const Icon = s.icon;
            const look = LOOKS[s.look];
            return (
              <li key={s.title} className={`rounded-[26px] p-8 ${LIFT} ${look.card}`}>
                {s.look === "dark" && (
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -top-30 -right-25 h-80 w-80 rounded-full bg-[radial-gradient(closest-side,rgba(212,245,122,0.28),transparent)]"
                  />
                )}
                <span className={`relative flex size-12 items-center justify-center rounded-[14px] ${look.icon}`}>
                  <Icon className="size-6" strokeWidth={2} aria-hidden="true" />
                </span>
                <h3 className="relative mt-5 text-[19px] font-semibold">{s.title}</h3>
                <p className={`relative mt-2.5 text-[15px] leading-relaxed ${look.body}`}>{s.body}</p>
                {s.tag && (
                  <span className="relative mt-[18px] inline-block rounded-full bg-lime-accent px-3 py-1 text-[13px] font-semibold text-forest-900">
                    {s.tag}
                  </span>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
