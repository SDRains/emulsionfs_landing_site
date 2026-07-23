import { ServerIcon, EyeOffIcon, SlidersHorizontalIcon } from "lucide-react";

const FEATURES = [
  {
    icon: ServerIcon,
    title: "Runs where your data lives",
    body: "Inside your environment or an isolated cluster — nothing is sent to the public internet.",
  },
  {
    icon: EyeOffIcon,
    title: "Nothing retained, nothing trained",
    body: "No chat history, no conversation logs, no data handed to an outside model provider.",
  },
  {
    icon: SlidersHorizontalIcon,
    title: "Fit to your needs",
    body: "Models are selected and tuned to match your requirements and your data.",
  },
];

export default function PrivateIntelligence() {
  return (
    <section className="bg-white text-[#141414]">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="text-center">
          <span className="inline-block rounded-full border border-slate-300 px-3 py-1 font-mono text-[11px] font-semibold tracking-[0.2em] text-slate-500">
            OPTIONAL
          </span>

          <h2 className="text-center mt-6 max-w-7xl text-5xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl">
            Put your financial data to work{" "}
            <span className="italic font-serif text-cyan-600">
              without it ever leaving your control.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-500">
            For teams that want search and analysis powered by large language
            models, Emulsion can run them entirely inside your own environment or
            a dedicated, isolated cluster. Your data is never sent to a third
            party, never stored outside your control, and never used to train
            anyone&apos;s models.
          </p>
        </div>

        <div className="mt-14 grid gap-8 sm:grid-cols-3">
          {FEATURES.map((f) => {
            const Icon = f.icon;
            return (
              <div key={f.title} className="border-t border-slate-300 pt-5">
                <Icon className="h-5 w-5 text-dark-blue" />
                <h3 className="mt-4 text-base font-bold text-dark-blue">
                  {f.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-500">{f.body}</p>
              </div>
            );
          })}
        </div>

        <p className="mt-14 text-center text-sm text-slate-500">
          Entirely optional. Emulsion delivers its full value without it.
        </p>
      </div>
    </section>
  );
}
