const CONNECTORS = [
  {
    title: "JD Edwards",
    badge: "historical",
    body: "EnterpriseOne & World. GL, AP/AR, fixed assets.",
  },
  {
    title: "Sage Intacct",
    badge: "live",
    body: "Full dimensional GL, multi-entity structures.",
  },
  {
    title: "NetSuite",
    badge: "live",
    body: "SuiteAnalytics connect, saved searches included.",
  },
  {
    title: "QuickBooks",
    badge: "historical",
    body: "Online & Desktop. Chart of accounts preserved as-is.",
  },
  {
    title: "Legacy & on-premise GL",
    badge: "extracted",
    body: "Great Plains, AS/400-era systems, custom databases.",
  },
];

function StatusBadge({ type }) {
  if (type === "live") {
    return (
      <span className="inline-flex shrink-0 items-center gap-1.5 rounded bg-emerald-50 px-2 py-1 font-mono text-[10px] font-semibold tracking-wider text-emerald-700">
        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
        LIVE API
      </span>
    );
  }
  if (type === "historical") {
    return (
        <span className="inline-flex shrink-0 items-center gap-1.5 rounded bg-purple-50 px-2 py-1 font-mono text-[10px] font-semibold tracking-wider text-purple-700">
        <span className="h-1.5 w-1.5 rounded-full bg-purple-500" />
        HISTORICAL
      </span>
    );
  }
  return (
    <span className="inline-flex shrink-0 items-center gap-1.5 rounded bg-slate-100 px-2 py-1 font-mono text-[10px] font-semibold tracking-wider text-slate-500">
      <span className="h-1.5 w-1.5 rounded-[2px] bg-slate-500" />
      EXTRACTED
    </span>
  );
}

function ConnectorCard({ title, badge, body }) {
  return (
    <div className="rounded-xl bg-primary-cream p-6 shadow-md cursor-pointer">
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-lg font-bold text-dark-blue">{title}</h3>
        <StatusBadge type={badge} />
      </div>
      <p className="mt-3 text-sm leading-6 text-slate-500">{body}</p>
    </div>
  );
}

export default function ProductConnectors() {
  return (
    <section className="bg-white text-[#141414]">
      <div className="mx-auto max-w-7xl px-6 py-28 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-[2fr_3fr] lg:gap-12">
          {/* Left: copy + legend */}
          <div>
            <h2 className="font-serif text-4xl font-semibold leading-tight text-dark-blue sm:text-5xl">
              If it holds financial data,
              <br />
              we can bring it in.
            </h2>
            <p className="mt-6 max-w-md text-lg leading-8 text-slate-500">
              Modern cloud platforms connect live by API. Legacy and on-premise
              systems are fully extracted — every transaction, every record.
              Don&apos;t see your system? We build custom connectors as part of
              onboarding.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-xs font-semibold tracking-wider">
              <span className="inline-flex items-center gap-2 text-emerald-600">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                LIVE API
              </span>
              <span className="inline-flex items-center gap-2 text-slate-500">
                <span className="h-2 w-2 rounded-[2px] bg-slate-600" />
                EXTRACTED HISTORICAL DATA
              </span>
            </div>
          </div>

          {/* Right: connector card grid */}
          <div className="grid gap-5 sm:grid-cols-2">
            {CONNECTORS.map((c) => (
              <ConnectorCard key={c.title} {...c} />
            ))}

            {/* Custom-connector CTA card */}
            <div className="rounded-xl border-2 border-dashed border-cyan-500 bg-neutral-50 p-6">
              <h3 className="text-lg font-bold text-cyan-600">
                Something else?
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-500">
                Custom connectors are built as part of onboarding — spreadsheets
                and flat-file exports included.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
