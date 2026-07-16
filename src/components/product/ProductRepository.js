import { MonitorIcon, CloudIcon, CheckIcon } from "lucide-react";

const OPTIONS = [
  {
    icon: MonitorIcon,
    title: "Local deployment",
    body: "Your historical repository runs on your own infrastructure, behind your firewall. Full control, full auditability — Emulsion connects to it the same way it connects to everything else.",
    points: [
      "Runs in your data center or private cloud",
      "Meets strict data-residency requirements",
      "Your team holds the keys",
    ],
  },
  {
    icon: CloudIcon,
    title: "Hosted by Emulsion",
    body: "A dedicated, encrypted database — never shared, never pooled. We manage uptime, backups, and security so your team can just work with the data.",
    points: [
      "Dedicated database per customer",
      "AES-256 at rest, TLS in transit",
      "SOC 2 Type II audited",
    ],
  },
];

const TAGS = [
  "RECORD-BY-RECORD VALIDATION",
  "PARALLEL-RUN BEFORE CUTOVER",
  "AUDIT-READY EXPORTS",
  "ZERO DOWNTIME FOR YOUR TEAM",
];

export default function ProductRepository() {
  return (
    <section className="bg-primary-cream text-[#141414]">
      <div className="mx-auto max-w-7xl px-6 py-28 lg:px-10">
        <h2 className="mx-auto max-w-3xl text-center font-serif text-4xl font-semibold leading-tight text-dark-blue sm:text-5xl">
          Off legacy systems.
          <br />
          <span className="italic text-cyan-600">
            Into a repository you control.
          </span>
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-slate-500">
          We handle the extraction, validation, and cutover — then your
          historical data lives in a secure database repository, deployed the way
          your policies require.
        </p>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {OPTIONS.map((o) => {
            const Icon = o.icon;
            return (
              <div
                key={o.title}
                className="rounded-2xl border border-black/[0.05] bg-white p-8 shadow-sm sm:p-10"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-50 ring-1 ring-blue-100">
                  <Icon className="h-6 w-6 text-cyan-600" />
                </div>
                <h3 className="mt-8 font-serif text-2xl font-semibold text-dark-blue">
                  {o.title}
                </h3>
                <p className="mt-4 text-base leading-7 text-slate-500">
                  {o.body}
                </p>
                <ul className="mt-6 space-y-3">
                  {o.points.map((p) => (
                    <li key={p} className="flex items-start gap-3">
                      <CheckIcon
                        className="mt-0.5 h-4 w-4 shrink-0 text-cyan-600"
                        strokeWidth={3}
                      />
                      <span className="text-slate-600">{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {TAGS.map((t) => (
            <span
              key={t}
              className="rounded-full border border-slate-300 px-4 py-2 font-mono text-xs font-semibold tracking-wider text-slate-500"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
