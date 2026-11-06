import { BarChartIcon, ClockIcon, FileTextIcon, TrendingUpIcon } from "lucide-react";

const LIFT =
  "transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_48px_-20px_rgba(19,43,29,0.35)]";

// Each card picks one of three looks so the grid reads as a set, not a list.
const STYLES = {
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

const REPORTS = [
  {
    icon: BarChartIcon,
    title: "Board reports",
    body: "Consolidated packages assembled from live data. Same numbers every time, ready for the deck.",
    look: "dark",
  },
  {
    icon: FileTextIcon,
    title: "BOLO reports",
    body: "Generated on schedule, with the underlying data traceable to each source system.",
    look: "white",
  },
  {
    icon: TrendingUpIcon,
    title: "CapEx reports",
    body: "Capital spend rolled up across entities. Budget vs. actual, by project or asset class.",
    look: "white",
  },
  {
    icon: ClockIcon,
    title: "Chronograph reports",
    body: "Portfolio-monitoring data formatted for Chronograph and similar PE reporting platforms.",
    look: "lime",
  },
];

const FORMATS = ["Excel", "CSV", "PDF", "API"];

export default function IntegrationsReports() {
  return (
    <section aria-labelledby="reports-heading" className="bg-primary-cream px-6 py-24 text-forest-ink lg:py-32">
      <div className="mx-auto grid max-w-[1240px] items-start gap-x-18 gap-y-12 lg:grid-cols-2">
        <div>
          <h2
            id="reports-heading"
            className="font-new-serif text-4xl font-normal leading-[1.06] tracking-tight sm:text-5xl lg:text-[56px]"
          >
            The reports your stakeholders{" "}
            <span className="italic text-primary-green-700">already ask for.</span>
          </h2>
          <p className="mt-6 max-w-[460px] text-[17px] leading-relaxed text-forest-ink/75">
            Board packages, lender reporting and investor data requests,
            generated from consolidated data, traceable to source and exported in
            whatever format the recipient expects.
          </p>
          <p className="mt-7 text-[13px] font-semibold text-forest-ink/65">Delivered as</p>
          <ul className="mt-3 flex flex-wrap gap-2 text-sm font-semibold">
            {FORMATS.map((f) => (
              <li key={f} className="rounded-full border border-sand-line bg-white px-4 py-2">
                {f}
              </li>
            ))}
            <li className="rounded-full bg-forest-900 px-4 py-2 text-lime-accent">Scheduled delivery</li>
          </ul>
        </div>

        <ul className="grid gap-4 sm:grid-cols-2">
          {REPORTS.map((r) => {
            const Icon = r.icon;
            const s = STYLES[r.look];
            return (
              <li key={r.title} className={`rounded-3xl p-7 ${LIFT} ${s.card}`}>
                {r.look === "dark" && (
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -top-24 -right-20 h-[260px] w-[260px] rounded-full bg-[radial-gradient(closest-side,rgba(212,245,122,0.3),transparent)]"
                  />
                )}
                <span className={`relative flex size-[46px] items-center justify-center rounded-[14px] ${s.icon}`}>
                  <Icon className="size-[22px]" strokeWidth={2} aria-hidden="true" />
                </span>
                <h3 className="relative mt-5 text-lg font-semibold">{r.title}</h3>
                <p className={`relative mt-2 text-sm leading-relaxed ${s.body}`}>{r.body}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
