const NAV = [
  "Overview",
  "Consolidated P&L",
  "Accounts Payable",
  "Search",
  "Historical archive",
  "Reporting",
  "Accounts Receivable"
];

const STATS = [
  {
    label: "CONSOLIDATED REVENUE",
    value: "$284.2M",
    sub: (
      <>
        <span className="font-medium text-emerald-600">▲ 8.4%</span> vs. last
        year
      </>
    ),
  },
  {
    label: "SYSTEMS CONNECTED",
    value: "9 live · 5 archived",
    sub: "JDE, Intacct, QB, NetSuite…",
  },
  {
    label: "LAST CONSOLIDATED REPORT",
    value: "2.1 hours",
    sub: "down from 3 weeks",
  },
];

const ROWS = [
  {
    entity: "Desert Peak Utilities",
    source: "JD Edwards",
    status: "Archived",
    revenue: "$68.1M",
  },
  {
    entity: "Rio Verde Water Co.",
    source: "Sage Intacct",
    status: "Live",
    revenue: "$41.7M",
  },
  {
    entity: "Sonoran Gas Partners",
    source: "Legacy GL",
    status: "Archived",
    revenue: "$29.3M",
  },
  {
    entity: "Coastal Water Inc.",
    source: "QuickBooks",
    status: "Archived",
    revenue: "$65.1M",
  },
];

const COLS = "grid grid-cols-[2fr_1.5fr_1fr_1fr]";

export default function DashboardMockup() {
  return (
    <div className="overflow-hidden rounded-xl bg-white shadow-2xl ring-1 ring-black/5">
      {/* Browser chrome */}
      <div className="flex items-center border-b border-slate-100 bg-slate-50 px-4 py-3">
        <div className="hidden sm:flex gap-1.5">
          <span className="h-3 w-3 rounded-full bg-red-600" />
          <span className="h-3 w-3 rounded-full bg-yellow-400" />
          <span className="h-3 w-3 rounded-full bg-blue-400" />
        </div>
        <div className="mx-auto rounded-md bg-white px-3 py-1 font-mono text-xs text-slate-400 ring-1 ring-slate-200 min-w-48 text-center">
          app.emulsionfs.com
        </div>
        <div className="hidden sm:flex gap-1.5 text-slate-400 text-[10px]">
          <p>Last Updated 7 min ago</p>
        </div>
      </div>

      {/* Body */}
      <div className="flex text-left">
        {/* Sidebar */}
        <aside className="hidden w-52 shrink-0 border-r border-slate-100 p-4 md:block">
          <nav className="flex flex-col gap-1 text-sm">
            {NAV.map((item, i) => (
              <span
                key={item}
                className={
                  i === 0
                    ? "rounded-md bg-slate-100 px-3 py-2 font-semibold text-[#0f2038]"
                    : "px-3 py-2 text-slate-500"
                }
              >
                {item}
              </span>
            ))}
          </nav>
        </aside>

        {/* Main */}
        <div className="min-w-0 flex-1 p-5 sm:p-6">
          {/* Header */}
          <div className="flex flex-wrap items-center justify-between gap-3">
            <h3 className="text-lg font-bold text-[#0f2038]">
              Portfolio overview
            </h3>
            <span className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 font-mono text-xs text-emerald-700">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              12 ENTITIES · ALL SYNCED
            </span>
          </div>

          {/* Stat cards */}
          <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {STATS.map((s) => (
              <div
                key={s.label}
                className="rounded-lg border border-slate-200 p-4"
              >
                <p className="font-mono text-[10px] tracking-wider text-slate-400">
                  {s.label}
                </p>
                <p className="mt-2 text-xl font-bold text-[#0f2038]">
                  {s.value}
                </p>
                <p className="mt-1 text-xs text-slate-500">{s.sub}</p>
              </div>
            ))}
          </div>

          {/* Entity table */}
          <div className="mt-6 overflow-x-auto">
            <div className="min-w-[440px]">
              <div
                className={`${COLS} border-b border-slate-200 pb-2 font-mono text-[10px] tracking-wider text-slate-400`}
              >
                <span>ENTITY</span>
                <span>SOURCE SYSTEM</span>
                <span>STATUS</span>
                <span className="text-right">REVENUE YTD</span>
              </div>
              <div className="divide-y divide-slate-100">
                {ROWS.map((r) => (
                  <div
                    key={r.entity}
                    className={`${COLS} items-center py-3 text-sm`}
                  >
                    <span className="font-semibold text-[#0f2038]">
                      {r.entity}
                    </span>
                    <span className="text-slate-500">{r.source}</span>
                    <span className="inline-flex items-center gap-1.5">
                      <span
                        className={`h-1.5 w-1.5 rounded-full ${
                          r.status === "Live" ? "bg-emerald-500" : "bg-slate-400"
                        }`}
                      />
                      <span
                        className={
                          r.status === "Live"
                            ? "text-emerald-700"
                            : "text-slate-500"
                        }
                      >
                        {r.status}
                      </span>
                    </span>
                    <span className="text-right font-semibold text-[#0f2038]">
                      {r.revenue}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
