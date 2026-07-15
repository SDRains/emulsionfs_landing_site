const CARDS = [
  {
    badge: { type: "live", label: "LIVE INGESTION" },
    title: "Continuous, by API.",
    body: "Scheduled syncs pull GL activity, sub-ledgers, and dimensions from your active platforms. Reporting is always current — no exports, no re-keying.",
    points: [
      "Field-level mapping to your consolidated chart",
      "Sync health monitored per entity",
      "Read-only — we never write to your systems",
    ],
  },
  {
    badge: { type: "legacy", label: "LEGACY EXPORT" },
    title: "Side by side with your team.",
    body: "Our engineers pair with the people who run the legacy system to extract every table, document, and attachment — then validate record by record against source before anything is retired.",
    points: [
      "Full extraction — transactions, masters, attachments",
      "Record-by-record validation, parallel-run before cutover",
      "Into a secure repository — local or hosted",
    ],
  },
];

function Badge({ type, label }) {
  if (type === "live") {
    return (
      <span className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-3 py-1 font-mono text-[11px] font-semibold tracking-wider text-emerald-400">
        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
        {label}
      </span>
    );
  }
  return (
    <span className="inline-flex items-center gap-2 rounded-full bg-white/[0.06] px-3 py-1 font-mono text-[11px] font-semibold tracking-wider text-slate-300">
      <span className="h-1.5 w-1.5 rounded-[2px] bg-slate-400" />
      {label}
    </span>
  );
}

function CheckIcon({ className }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5 12l5 5L19 7" />
    </svg>
  );
}

export default function IntegrationsIngestion() {
  return (
    <section className="bg-[#0b1a2e] text-white">
      <div className="mx-auto max-w-6xl px-6 py-28 lg:px-10">
        <h2 className="text-center font-serif text-4xl font-semibold leading-tight sm:text-5xl">
          <span className="text-primary-cream">Ingestion is a partnership,</span>
          <br />
          <span className="italic text-[#8ea6d4]">not a file drop.</span>
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-slate-400">
          Live systems stream in by API. For legacy systems, our engineers work
          alongside your team — the people who know where the data lives — to get
          everything out, validated, and preserved.
        </p>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {CARDS.map((c) => (
            <div
              key={c.title}
              className="rounded-2xl border border-white/10 bg-white/[0.02] p-8"
            >
              <Badge {...c.badge} />
              <h3 className="mt-6 font-serif text-2xl font-semibold text-primary-cream">
                {c.title}
              </h3>
              <p className="mt-4 text-base leading-7 text-slate-400">{c.body}</p>
              <ul className="mt-6 space-y-2.5">
                {c.points.map((p) => (
                  <li
                    key={p}
                    className="flex items-start gap-2.5 text-sm text-slate-300"
                  >
                    <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
