const PLATFORMS = [
  { title: "JD Edwards", sub: "EnterpriseOne & World", status: "live" },
  { title: "Sage Intacct", sub: "Dimensional GL, multi-entity", status: "live" },
  { title: "QuickBooks", sub: "Online & Desktop", status: "live" },
  { title: "NetSuite", sub: "SuiteAnalytics connect", status: "live" },
  { title: "Great Plains", sub: "Dynamics GP, all versions", status: "extract" },
  { title: "AS/400-era systems", sub: "Green-screen & flat-file", status: "extract" },
  { title: "Custom databases", sub: "SQL, Access, homegrown GLs", status: "extract" },
];

function StatusBadge({ type }) {
  if (type === "live") {
    return (
      <span className="inline-flex shrink-0 items-center gap-1.5 rounded bg-emerald-50 px-2 py-0.5 font-mono text-[10px] font-semibold tracking-wider text-emerald-700">
        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
        LIVE
      </span>
    );
  }
  return (
    <span className="inline-flex shrink-0 items-center gap-1.5 rounded bg-slate-100 px-2 py-0.5 font-mono text-[10px] font-semibold tracking-wider text-slate-500">
      <span className="h-1.5 w-1.5 rounded-[2px] bg-slate-500" />
      EXTRACT
    </span>
  );
}

function PlatformCard({ title, sub, status }) {
  return (
    <div className="rounded-xl bg-primary-cream p-5">
      <div className="flex items-start justify-between gap-2">
        <h3 className="text-base font-bold text-dark-blue">{title}</h3>
        <StatusBadge type={status} />
      </div>
      <p className="mt-2 text-sm text-slate-500">{sub}</p>
    </div>
  );
}

export default function IntegrationsPlatforms() {
  return (
    <section className="bg-white text-[#141414]">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="font-serif text-4xl font-semibold leading-tight text-dark-blue sm:text-5xl">
            The platforms we work with.
          </h2>

          <div className="flex items-center gap-x-6 font-mono text-xs font-semibold tracking-wider">
            <span className="inline-flex items-center gap-2 text-emerald-600">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              LIVE API
            </span>
            <span className="inline-flex items-center gap-2 text-slate-500">
              <span className="h-2 w-2 rounded-[2px] bg-slate-500" />
              FULL EXTRACTION
            </span>
          </div>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {PLATFORMS.map((p) => (
            <PlatformCard key={p.title} {...p} />
          ))}

          {/* Custom-connector CTA card */}
          <div className="rounded-xl border-2 border-dashed border-cyan-300 p-5">
            <h3 className="text-base font-bold text-cyan-600">Something else?</h3>
            <p className="mt-2 text-sm text-slate-500">
              Custom connectors built during onboarding — spreadsheets included.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
