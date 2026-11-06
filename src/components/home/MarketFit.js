import { PlugIcon, ReceiptIcon, TrendingUpIcon, ZapIcon } from "lucide-react";

const REASONS = [
  {
    icon: TrendingUpIcon,
    title: "Consolidation is accelerating",
    body: "More acquisitions across fragmented industries mean more financial fragmentation.",
  },
  {
    icon: ReceiptIcon,
    title: "Software spend is under scrutiny",
    body: "Organizations are actively hunting redundant subscriptions and legacy-system spend.",
  },
  {
    icon: ZapIcon,
    title: "Finance moves in real time",
    body: "Weeks-long manual reconciliation no longer clears the bar.",
  },
  {
    icon: PlugIcon,
    title: "The technology is ready",
    body: "Modern platforms expose APIs that make live unification possible in a way it wasn't a decade ago.",
  },
];

const SEGMENTS = [
  {
    title: "Private equity firms & portfolios",
    body: "Every acquisition adds another system. Emulsion consolidates them across the whole portfolio.",
  },
  {
    title: "Infrastructure & utility roll-ups",
    body: "Regulated, audit-heavy environments where a permanent, accurate record is essential.",
  },
  {
    title: "Holding companies & multi-entity operators",
    body: "One view across every entity you own.",
  },
  {
    title: "Any multi-system organization",
    body: "If your financial data is split across platforms, Emulsion brings it together.",
  },
];

export default function MarketFit() {
  return (
    <section aria-labelledby="market-fit-heading" className="bg-primary-cream px-6 py-24 text-forest-ink lg:py-32">
      <div className="mx-auto max-w-[1240px]">
        <div className="grid items-end gap-x-18 gap-y-6 lg:grid-cols-2">
          <h2
            id="market-fit-heading"
            className="font-new-serif text-4xl font-normal leading-[1.06] tracking-tight sm:text-5xl lg:text-[56px]"
          >
            Built for the way{" "}
            <span className="italic text-primary-green-700">companies grow now.</span>
          </h2>
          <p className="text-[17px] leading-relaxed text-forest-ink/75">
            Acquisitions are speeding up, software budgets are under the
            microscope and finance is expected to move in real time. Emulsion
            was built for exactly this moment.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {REASONS.map((r) => {
            const Icon = r.icon;
            return (
              <div
                key={r.title}
                className="rounded-3xl border border-sand-line bg-white p-7 transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_48px_-20px_rgba(19,43,29,0.35)]"
              >
                <div className="flex size-12 items-center justify-center rounded-[14px] bg-[#E3F0E0] text-primary-green-700">
                  <Icon className="size-6" strokeWidth={2} aria-hidden="true" />
                </div>
                <h3 className="mt-5 text-lg font-semibold">{r.title}</h3>
                <p className="mt-2.5 text-[15px] leading-relaxed text-forest-ink/75">{r.body}</p>
              </div>
            );
          })}
        </div>

        {/* Who it's for */}
        <div className="relative mt-5 overflow-hidden rounded-[32px] bg-forest-900 p-8 text-white sm:p-12">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-56 -left-40 h-[560px] w-[560px] rounded-full bg-[radial-gradient(closest-side,rgba(212,245,122,0.2),transparent)]"
          />
          <div className="relative flex flex-wrap items-start gap-10">
            <h3 className="max-w-sm flex-1 basis-72 font-new-serif text-[36px] font-normal leading-[1.1]">
              Made for organizations that{" "}
              <span className="italic text-lime-accent">grew through acquisition.</span>
            </h3>
            <ul className="grid flex-[2] basis-[min(100%,560px)] gap-px overflow-hidden rounded-[20px] bg-white/12 sm:grid-cols-2">
              {SEGMENTS.map((s) => (
                <li key={s.title} className="bg-forest-900 p-6">
                  <h4 className="text-[17px] font-semibold text-lime-accent">{s.title}</h4>
                  <p className="mt-2 text-sm leading-relaxed text-white/70">{s.body}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
