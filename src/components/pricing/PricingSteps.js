import { Fragment } from "react";

const STEPS = [
  {
    badge: "01 · SCOPING CALL",
    title: "30 minutes, your systems list.",
    body: "We walk through every platform, entity, and how you report today.",
  },
  {
    badge: "02 · ENVIRONMENT REVIEW",
    title: "We map the path forward.",
    body: "Which systems connect live, which get extracted, and where your repository should live.",
  },
  {
    badge: "03 · FIXED PROPOSAL",
    title: "One document, one price.",
    body: "Scope, timeline, and cost — fixed. You decide with everything on the table.",
    dark: true,
  },
];

function StepCard({ badge, title, body, dark }) {
  return (
    <div
      className={`flex-1 rounded-2xl p-8 ${
        dark
          ? "bg-dark-blue text-white shadow-[0_25px_50px_-15px_rgba(15,23,42,0.4)]"
          : "bg-white shadow-sm"
      }`}
    >
      <span
        className={`inline-block rounded-full px-3 py-1 font-mono text-xs font-semibold tracking-wider ${
          dark ? "bg-white/10 text-cyan-400" : "bg-cyan-50 text-cyan-700"
        }`}
      >
        {badge}
      </span>
      <h3
        className={`mt-6 text-xl font-bold ${dark ? "text-white" : "text-dark-blue"}`}
      >
        {title}
      </h3>
      <p
        className={`mt-3 text-base leading-7 ${
          dark ? "text-slate-300" : "text-slate-500"
        }`}
      >
        {body}
      </p>
    </div>
  );
}

export default function PricingSteps() {
  return (
    <section className="bg-primary-cream text-[#141414]">
      <div className="mx-auto max-w-7xl px-6 py-28 lg:px-10">
        <h2 className="text-center font-serif text-4xl font-semibold leading-tight text-dark-blue sm:text-5xl">
          Three steps to a number you can trust.
        </h2>

        <div className="mt-16 flex flex-col gap-6 lg:flex-row lg:items-stretch lg:gap-4">
          {STEPS.map((s, i) => (
            <Fragment key={s.badge}>
              <StepCard {...s} />
              {i < STEPS.length - 1 && (
                <span className="hidden shrink-0 self-center text-2xl text-cyan-500 lg:block">
                  &rarr;
                </span>
              )}
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
