import { CheckIcon } from "lucide-react";

const CARDS = [
  {
    label: "Live ingestion",
    accent: "bg-lime-accent",
    dot: "rounded-full",
    title: "Continuous, by API.",
    body: "Scheduled syncs pull GL activity, sub-ledgers and dimensions from your active platforms. Reporting is always current, with no exports and no re-keying.",
    points: [
      "Field-level mapping to your consolidated chart",
      "Sync health monitored per entity",
      "Read-only: we never write to your systems",
    ],
  },
  {
    label: "Legacy export",
    accent: "bg-mint-200",
    dot: "rounded-[2px]",
    title: "Side by side with your team.",
    body: "Our engineers pair with the people who run the legacy system to extract every table, document and attachment, then validate record by record against source before anything is retired.",
    points: [
      "Full extraction: transactions, masters, attachments",
      "Record-by-record validation, parallel run before cutover",
      "Into a secure repository, local or hosted",
    ],
  },
];

export default function IntegrationsIngestion() {
  return (
    <section
      aria-labelledby="ingestion-heading"
      className="relative overflow-hidden bg-forest-950 px-6 py-24 text-white lg:py-32"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 left-1/2 h-[700px] w-[1200px] -translate-x-1/2 -translate-y-[45%] bg-[radial-gradient(closest-side,rgba(70,131,88,0.5),transparent)]"
      />
      <div className="relative mx-auto max-w-[1240px]">
        <div className="mx-auto max-w-[780px] text-center">
          <h2
            id="ingestion-heading"
            className="font-new-serif text-4xl font-normal leading-[1.06] tracking-tight sm:text-5xl lg:text-[56px]"
          >
            Ingestion is a partnership,{" "}
            <span className="italic text-mint-200">not a file drop.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-[640px] text-[17px] leading-relaxed text-white/70">
            Live systems stream in by API. For legacy systems, our engineers work
            alongside the people who know where the data lives to get everything
            out, validated and preserved.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {CARDS.map((c) => (
            <div
              key={c.label}
              className="rounded-[28px] border border-white/10 bg-white/5 p-9 transition-colors duration-300 hover:border-lime-accent/45 hover:bg-white/[0.07]"
            >
              <span
                className={`inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-[13px] font-semibold text-forest-900 ${c.accent}`}
              >
                <span className={`size-1.5 bg-forest-900 ${c.dot}`} />
                {c.label}
              </span>
              <h3 className="mt-6 font-new-serif text-[32px] font-normal">{c.title}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-white/70">{c.body}</p>
              <ul className="mt-6 flex flex-col gap-3 text-[15px]">
                {c.points.map((p) => (
                  <li key={p} className="flex items-center gap-2.5">
                    <span
                      className={`flex size-[22px] flex-none items-center justify-center rounded-full text-forest-900 ${c.accent}`}
                    >
                      <CheckIcon className="size-3" strokeWidth={3.2} aria-hidden="true" />
                    </span>
                    {p}
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
