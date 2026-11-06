import {
  BlendIcon,
  FileTextIcon,
  LayoutDashboardIcon,
  SearchIcon,
  UserIcon,
} from "lucide-react";

const GLASS =
  "border border-white/10 bg-white/5 transition-colors duration-300 hover:border-lime-accent/45 hover:bg-white/[0.07]";

// Illustrative figures for the mockups only.
const SEARCH_RESULTS = [
  { entity: "Desert Peak Utilities", source: "JD Edwards · archived", live: false },
  { entity: "Rio Verde Water Co.", source: "Sage Intacct · live", live: true },
  { entity: "Sonoran Gas Partners", source: "Legacy GL · archived", live: false },
];

const REVENUE = [
  { entity: "Desert Peak Utilities", value: "$68.1M" },
  { entity: "Rio Verde Water Co.", value: "$41.7M" },
  { entity: "Sonoran Gas Partners", value: "$29.3M" },
];

const SMALL_FEATURES = [
  { icon: BlendIcon, title: "Live and historical views", body: "Current performance against full history, side by side." },
  { icon: LayoutDashboardIcon, title: "Entity management", body: "Every acquisition's status, source system and sync health at a glance." },
  { icon: FileTextIcon, title: "Audit-ready exports", body: "Every number traceable to its source record and system." },
  { icon: UserIcon, title: "Role-based access", body: "Controllers see their books. Leadership sees the whole." },
];

function MockCard({ children }) {
  return (
    <div
      aria-hidden="true"
      className="overflow-hidden rounded-2xl bg-white text-forest-ink shadow-[0_20px_40px_-20px_rgba(0,0,0,0.5)]"
    >
      {children}
    </div>
  );
}

function BigFeature({ title, body, children }) {
  return (
    <div className={`flex flex-col gap-7 rounded-[28px] p-8 ${GLASS}`}>
      <MockCard>{children}</MockCard>
      <div>
        <h3 className="font-new-serif text-[30px] font-normal">{title}</h3>
        <p className="mt-2.5 text-[15px] leading-relaxed text-white/70">{body}</p>
      </div>
    </div>
  );
}

export default function ProductFeatures() {
  return (
    <section
      aria-labelledby="features-heading"
      className="relative overflow-hidden bg-forest-950 px-6 py-24 text-white lg:py-32"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-52 -right-60 h-[820px] w-[820px] rounded-full bg-[radial-gradient(closest-side,rgba(70,131,88,0.45),transparent)]"
      />
      <div className="relative mx-auto max-w-[1240px]">
        <h2
          id="features-heading"
          className="max-w-[760px] font-new-serif text-4xl font-normal leading-[1.06] tracking-tight sm:text-5xl lg:text-[56px]"
        >
          The daily product your{" "}
          <span className="italic text-mint-200">finance team lives in.</span>
        </h2>

        <div className="mt-14 grid gap-5 lg:grid-cols-2">
          <BigFeature title="Unified search" body="One query across every system, live and archived.">
            <div className="flex items-center gap-2.5 border-b border-[#EEF0EA] px-4 py-3 text-sm">
              <SearchIcon className="size-4 flex-none text-primary-green-700" strokeWidth={2.2} />
              Fuel surcharges, all entities, FY2019 to today
            </div>
            <ul className="px-4 pt-1.5 pb-2.5 text-[13px]">
              {SEARCH_RESULTS.map((r, i) => (
                <li
                  key={r.entity}
                  className={`flex justify-between gap-3 py-2 ${i < SEARCH_RESULTS.length - 1 ? "border-b border-[#F2F3EF]" : ""}`}
                >
                  <span>{r.entity}</span>
                  <span className={r.live ? "font-semibold text-primary-green-700" : "text-forest-ink/65"}>
                    {r.source}
                  </span>
                </li>
              ))}
            </ul>
          </BigFeature>

          <BigFeature title="Consolidated reporting" body="Cross-entity P&L, balance sheet and cash flow in hours.">
            <div className="flex justify-between border-b border-[#EEF0EA] px-4 py-3 text-sm font-semibold">
              <span>Consolidated revenue, YTD</span>
              <span className="text-xs font-medium text-forest-ink/65">3 entities · 3 systems</span>
            </div>
            <ul className="px-4 pt-1.5 text-[13px]">
              {REVENUE.map((r, i) => (
                <li
                  key={r.entity}
                  className={`flex justify-between py-2 ${i < REVENUE.length - 1 ? "border-b border-[#F2F3EF]" : ""}`}
                >
                  <span>{r.entity}</span>
                  <span className="font-semibold">{r.value}</span>
                </li>
              ))}
            </ul>
            <div className="flex justify-between bg-forest-900 px-4 py-3 text-sm font-semibold text-white">
              <span>Consolidated</span>
              <span className="text-lime-accent">$139.1M</span>
            </div>
          </BigFeature>
        </div>

        <ul className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {SMALL_FEATURES.map((f) => {
            const Icon = f.icon;
            return (
              <li key={f.title} className={`rounded-[22px] p-[26px] ${GLASS}`}>
                <span className="flex size-11 items-center justify-center rounded-[13px] bg-lime-accent/15 text-lime-accent">
                  <Icon className="size-[22px]" strokeWidth={2} aria-hidden="true" />
                </span>
                <h3 className="mt-5 text-[17px] font-semibold">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/70">{f.body}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
