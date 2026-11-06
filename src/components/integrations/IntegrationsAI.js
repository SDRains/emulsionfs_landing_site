import { ShieldCheckIcon } from "lucide-react";

const ASSISTANTS = [
  {
    name: "Claude",
    body: "Draft board narratives and variance explanations grounded in your consolidated numbers.",
  },
  {
    name: "ChatGPT",
    body: "Ad-hoc questions across entities, answered from live data.",
  },
  {
    name: "Perplexity",
    body: "Research-style summaries that combine your internals with cited market context.",
  },
];

// Illustrative chat answer: relative bars only, no figures.
const CASH = [
  { entity: "Desert Peak Utilities", width: "86%", color: "bg-primary-green-600" },
  { entity: "Rio Verde Water Co.", width: "58%", color: "bg-[#8FCB86]" },
  { entity: "Sonoran Gas Partners", width: "40%", color: "bg-lime-accent" },
];

function ChatExample() {
  return (
    <div
      aria-hidden="true"
      className="flex flex-col gap-3.5 rounded-[28px] border border-[#D3E6C6] bg-linear-140 from-[#DDF0DA] to-[#EAF7BF] p-6 sm:p-8"
    >
      <div className="max-w-[80%] self-end rounded-[20px_20px_6px_20px] bg-forest-900 px-[18px] py-3.5 text-[15px] leading-normal text-white">
        Cash position by entity, last quarter?
      </div>
      <div className="w-full self-start rounded-[20px_20px_20px_6px] bg-white p-[18px] text-sm leading-normal shadow-[0_16px_32px_-20px_rgba(19,43,29,0.4)] sm:w-[88%]">
        <p className="text-forest-ink/80">
          From Sage Intacct (live) and the JD Edwards archive, consolidated:
        </p>
        <ul className="mt-3.5 flex flex-col gap-2.5">
          {CASH.map((c) => (
            <li key={c.entity} className="grid grid-cols-[150px_1fr] items-center gap-3">
              <span className="font-semibold">{c.entity}</span>
              <span className={`h-2 rounded-full ${c.color}`} style={{ width: c.width }} />
            </li>
          ))}
        </ul>
        <p className="mt-3.5 text-xs text-forest-ink/65">Every figure links back to its source record.</p>
      </div>
    </div>
  );
}

export default function IntegrationsAI() {
  return (
    <section aria-labelledby="ai-heading" className="bg-primary-cream px-6 pb-24 text-forest-ink lg:pb-32">
      <div className="mx-auto max-w-[1240px]">
        <div className="mx-auto max-w-[760px] text-center">
          <h2
            id="ai-heading"
            className="font-new-serif text-4xl font-normal leading-[1.06] tracking-tight sm:text-5xl lg:text-[56px]"
          >
            Ask your data a question.{" "}
            <span className="italic text-primary-green-700">In plain English.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-[640px] text-[17px] leading-relaxed text-forest-ink/75">
            Optional AI integrations connect your consolidated data to the
            assistant your team already uses, for drafting reports, explaining
            variances and answering one-off questions without a data pull.
          </p>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-2">
          <ChatExample />

          <div className="flex flex-col gap-3">
            {ASSISTANTS.map((a) => (
              <div
                key={a.name}
                className="rounded-[22px] border border-sand-line bg-white px-[26px] py-6 transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_48px_-20px_rgba(19,43,29,0.35)]"
              >
                <h3 className="font-new-serif text-2xl font-normal">{a.name}</h3>
                <p className="mt-1.5 text-[15px] leading-relaxed text-forest-ink/75">{a.body}</p>
              </div>
            ))}
            <div className="flex items-start gap-3.5 rounded-[22px] bg-forest-900 px-[26px] py-[22px] text-white">
              <ShieldCheckIcon className="mt-0.5 size-[22px] flex-none text-lime-accent" strokeWidth={2} aria-hidden="true" />
              <p className="text-sm leading-relaxed text-white/80">
                <span className="font-semibold text-white">Your data stays yours.</span> AI
                integrations are opt-in per organization, scoped by role-based
                permissions and never used to train anyone&apos;s models. Turn them
                off any time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
