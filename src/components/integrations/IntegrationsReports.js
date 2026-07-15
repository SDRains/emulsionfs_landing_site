import {
  BarChartIcon,
  FileTextIcon,
  TrendingUpIcon,
  ClockIcon,
} from "lucide-react";

const REPORTS = [
  {
    icon: BarChartIcon,
    title: "Board reports",
    body: "Consolidated packages assembled from live data — same numbers every time, ready for the deck.",
  },
  {
    icon: FileTextIcon,
    title: "BOLO reports",
    body: "Generated on schedule with the underlying data traceable to each source system.",
  },
  {
    icon: TrendingUpIcon,
    title: "CapEx reports",
    body: "Capital spend rolled up across entities — budget vs. actual, by project or asset class.",
  },
  {
    icon: ClockIcon,
    title: "Chronograph reports",
    body: "Portfolio-monitoring data formatted for Chronograph and similar PE reporting platforms.",
  },
];

const FORMATS = ["XLSX", "CSV", "PDF", "API", "SCHEDULED DELIVERY"];

export default function IntegrationsReports() {
  return (
    <section className="bg-primary-cream text-[#141414]">
      <div className="mx-auto max-w-7xl px-6 py-28 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[2fr_3fr] lg:items-start lg:gap-16">
          {/* Left: copy + formats */}
          <div>
            <h2 className="font-serif text-4xl font-semibold leading-tight text-dark-blue sm:text-5xl">
              The reports your stakeholders already ask for.
            </h2>
            <p className="mt-6 max-w-md text-lg leading-8 text-slate-500">
              Board packages, lender reporting, investor data requests —
              generated from consolidated data, traceable to source, exported in
              whatever format the recipient expects.
            </p>

            <div className="mt-8 flex flex-wrap gap-2.5">
              {FORMATS.map((f) => (
                <span
                  key={f}
                  className="rounded-full border border-slate-300 px-3.5 py-1.5 font-mono text-xs font-semibold tracking-wider text-slate-500"
                >
                  {f}
                </span>
              ))}
            </div>
          </div>

          {/* Right: report cards */}
          <div className="grid gap-5 sm:grid-cols-2">
            {REPORTS.map((r) => {
              const Icon = r.icon;
              return (
                <div
                  key={r.title}
                  className="rounded-2xl border border-black/[0.05] bg-white p-6 shadow-sm"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-primary-cream ring-1 ring-black/5">
                    <Icon className="h-5 w-5 text-dark-blue" />
                  </div>
                  <h3 className="mt-6 text-lg font-bold text-dark-blue">
                    {r.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    {r.body}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
