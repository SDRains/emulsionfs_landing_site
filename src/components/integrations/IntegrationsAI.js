import { ShieldCheckIcon } from "lucide-react";

const ASSISTANTS = [
  {
    name: "Claude",
    body: "Draft board narratives and variance explanations grounded in your consolidated numbers.",
  },
  {
    name: "ChatGPT",
    body: 'Ad-hoc questions across entities — "cash position by entity, last quarter" — answered from live data.',
  },
  {
    name: "Perplexity",
    body: "Research-style summaries that combine your internals with cited market context.",
  },
];

export default function IntegrationsAI() {
  return (
    <section className="bg-white text-[#141414]">
      <div className="mx-auto max-w-6xl px-6 py-28 lg:px-10">
        <h2 className="text-center font-serif text-4xl font-semibold leading-tight text-dark-blue sm:text-5xl lg:text-6xl">
          Ask your data a question.
          <br />
          <span className="italic text-cyan-600">In plain English.</span>
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-slate-500">
          Optional AI integrations connect your consolidated data to the
          assistant your team already uses — for drafting reports, explaining
          variances, and answering one-off questions without a data pull.
        </p>

        <div className="mt-16 grid gap-5 sm:grid-cols-3">
          {ASSISTANTS.map((a) => (
            <div
              key={a.name}
              className="rounded-2xl border border-black/[0.06] bg-primary-cream p-7"
            >
              <h3 className="font-serif text-2xl font-semibold text-dark-blue">
                {a.name}
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-500">{a.body}</p>
            </div>
          ))}
        </div>

        {/* Privacy callout */}
        <div className="mt-8 flex items-start gap-4 rounded-2xl bg-dark-blue px-6 py-5 sm:px-8">
          <ShieldCheckIcon className="mt-0.5 h-6 w-6 shrink-0 text-slate-300" />
          <p className="text-sm leading-6 text-slate-300">
            <span className="font-bold text-white">Your data stays yours.</span>{" "}
            AI integrations are opt-in per organization, scoped by role-based
            permissions, and never used to train anyone&apos;s models. Turn them
            off any time.
          </p>
        </div>
      </div>
    </section>
  );
}
