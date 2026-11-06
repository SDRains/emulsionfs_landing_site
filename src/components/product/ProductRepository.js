import { CheckIcon, CloudIcon, MonitorIcon } from "lucide-react";

const OPTIONS = [
  {
    icon: MonitorIcon,
    title: "Local deployment",
    body: "Your historical repository runs on your own infrastructure, behind your firewall. Emulsion connects to it the same way it connects to everything else.",
    points: [
      "Runs in your data center or private cloud",
      "Meets strict data-residency requirements",
      "Your team holds the keys",
    ],
    dark: false,
  },
  {
    icon: CloudIcon,
    title: "Hosted by Emulsion",
    body: "A dedicated, encrypted database, never shared or pooled. We manage uptime, backups and security so your team can just work with the data.",
    points: [
      "Dedicated database per customer",
      "AES-256 at rest, TLS in transit",
      "SOC 2 Type II audited",
    ],
    dark: true,
  },
];

const GUARANTEES = [
  "Record-by-record validation",
  "Parallel run before cutover",
  "Audit-ready exports",
  "Zero downtime for your team",
];

function OptionCard({ icon: Icon, title, body, points, dark }) {
  return (
    <div
      className={`relative overflow-hidden rounded-[28px] p-9 transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_48px_-20px_rgba(19,43,29,0.35)] ${
        dark ? "bg-forest-900 text-white" : "border border-sand-line bg-white"
      }`}
    >
      {dark && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-36 -right-32 h-[420px] w-[420px] rounded-full bg-[radial-gradient(closest-side,rgba(212,245,122,0.22),transparent)]"
        />
      )}
      <div className="relative">
        <div className="flex items-center gap-3.5">
          <span
            className={`flex size-12 items-center justify-center rounded-[14px] ${
              dark ? "bg-lime-accent/15 text-lime-accent" : "bg-[#E3F0E0] text-primary-green-700"
            }`}
          >
            <Icon className="size-6" strokeWidth={2} aria-hidden="true" />
          </span>
          <h3 className="font-new-serif text-[28px] font-normal">{title}</h3>
        </div>
        <p className={`mt-4 text-[15px] leading-relaxed ${dark ? "text-white/75" : "text-forest-ink/75"}`}>{body}</p>
        <ul className="mt-6 flex flex-col gap-3 text-[15px]">
          {points.map((p) => (
            <li key={p} className="flex items-center gap-2.5">
              <span
                className={`flex size-[22px] flex-none items-center justify-center rounded-full ${
                  dark ? "bg-lime-accent text-forest-900" : "bg-[#DDEEDB] text-primary-green-700"
                }`}
              >
                <CheckIcon className="size-3" strokeWidth={3.2} aria-hidden="true" />
              </span>
              {p}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function ProductRepository() {
  return (
    <section aria-labelledby="repository-heading" className="bg-primary-cream px-6 pb-24 text-forest-ink lg:pb-32">
      <div className="mx-auto max-w-[1240px]">
        <div className="mx-auto max-w-[780px] text-center">
          <h2
            id="repository-heading"
            className="font-new-serif text-4xl font-normal leading-[1.06] tracking-tight sm:text-5xl lg:text-[56px]"
          >
            Off legacy systems.{" "}
            <span className="italic text-primary-green-700">Into a repository you control.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-[620px] text-[17px] leading-relaxed text-forest-ink/75">
            We handle the extraction, validation and cutover. Your historical data
            then lives in a secure database, deployed the way your policies require.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {OPTIONS.map((o) => (
            <OptionCard key={o.title} {...o} />
          ))}
        </div>

        <ul className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {GUARANTEES.map((g) => (
            <li
              key={g}
              className="flex items-center gap-3 rounded-[18px] bg-linear-140 from-[#DDF0DA] to-[#EAF7BF] px-5 py-[18px] text-[15px] font-semibold"
            >
              <CheckIcon className="size-[18px] flex-none text-primary-green-700" strokeWidth={2.6} aria-hidden="true" />
              {g}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
