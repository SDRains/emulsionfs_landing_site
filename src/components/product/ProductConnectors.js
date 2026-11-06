import { PlusIcon } from "lucide-react";

const BADGES = {
  live: { label: "Live API", className: "bg-forest-900 text-lime-accent", dot: "rounded-full bg-lime-accent" },
  historical: { label: "Historical", className: "bg-[#DDEEDB] text-primary-green-700", dot: "rounded-full bg-primary-green-600" },
  extracted: { label: "Extracted", className: "bg-[#ECE9DD] text-[#4F5A50]", dot: "rounded-[2px] bg-[#7C877E]" },
};

const CONNECTORS = [
  { title: "JD Edwards", badge: "historical", body: "EnterpriseOne & World. GL, AP/AR, fixed assets." },
  { title: "Sage Intacct", badge: "live", body: "Full dimensional GL, multi-entity structures." },
  { title: "NetSuite", badge: "live", body: "SuiteAnalytics Connect, saved searches included." },
  { title: "QuickBooks", badge: "historical", body: "Online & Desktop. Chart of accounts preserved as is." },
  { title: "Legacy & on-premise GL", badge: "extracted", body: "Great Plains, AS/400-era systems, custom databases." },
];

const LIFT =
  "transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_48px_-20px_rgba(19,43,29,0.35)]";

export default function ProductConnectors() {
  return (
    <section aria-labelledby="connectors-heading" className="bg-primary-cream px-6 pt-24 pb-24 text-forest-ink lg:pt-26 lg:pb-32">
      <div className="mx-auto grid max-w-[1240px] items-start gap-x-18 gap-y-12 lg:grid-cols-2">
        <div>
          <h2
            id="connectors-heading"
            className="font-new-serif text-4xl font-normal leading-[1.06] tracking-tight sm:text-5xl lg:text-[56px]"
          >
            If it holds financial data,{" "}
            <span className="italic text-primary-green-700">we can bring it in.</span>
          </h2>
          <p className="mt-6 max-w-[460px] text-[17px] leading-relaxed text-forest-ink/75">
            Modern cloud platforms connect live by API. Legacy and on-premise
            systems are fully extracted, every transaction and every record.
            Don&apos;t see your system? We build custom connectors during onboarding.
          </p>
          <ul className="mt-7 flex flex-wrap gap-2.5 text-[13px] font-semibold">
            {Object.values(BADGES).map((b) => (
              <li key={b.label} className={`inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 ${b.className}`}>
                <span className={`size-[7px] ${b.dot}`} />
                {b.label}
              </li>
            ))}
          </ul>
        </div>

        <ul className="grid gap-4 sm:grid-cols-2">
          {CONNECTORS.map((c) => {
            const b = BADGES[c.badge];
            return (
              <li key={c.title} className={`rounded-[22px] border border-sand-line bg-white p-6 ${LIFT}`}>
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-lg font-semibold">{c.title}</h3>
                  <span className={`shrink-0 rounded-full px-2.5 py-1 text-xs font-semibold ${b.className}`}>
                    {b.label}
                  </span>
                </div>
                <p className="mt-2.5 text-sm leading-relaxed text-forest-ink/75">{c.body}</p>
              </li>
            );
          })}
          <li
            className={`rounded-[22px] border-[1.5px] border-dashed border-[#9CC48E] bg-linear-140 from-[#DDF0DA] to-[#EAF7BF] p-6 ${LIFT}`}
          >
            <div className="flex items-center justify-between gap-3">
              <h3 className="text-lg font-semibold text-primary-green-700">Something else?</h3>
              <PlusIcon className="size-5 text-primary-green-700" strokeWidth={2.2} aria-hidden="true" />
            </div>
            <p className="mt-2.5 text-sm leading-relaxed text-forest-ink/80">
              Custom connectors are built during onboarding, spreadsheets and
              flat-file exports included.
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
}
