import { Fragment } from "react";
import { ArrowRightIcon } from "lucide-react";

const STEPS = [
  {
    label: "Scoping call",
    title: "30 minutes, your systems list.",
    body: "We walk through every platform, every entity and how you report today.",
  },
  {
    label: "Environment review",
    title: "We map the path forward.",
    body: "Which systems connect live, which get extracted and where your repository should live.",
  },
  {
    label: "Fixed proposal",
    title: "One document, one price.",
    body: "Scope, timeline and cost, fixed. You decide with everything on the table.",
    final: true,
  },
];

// Arrow colors step from mint toward lime, ending on the highlighted card.
const ARROW_COLORS = ["text-[#8FCB86]", "text-[#8FB33A]"];

function StepCard({ label, title, body, final }) {
  return (
    <li
      className={`relative overflow-hidden rounded-[26px] p-8 transition duration-300 hover:-translate-y-1 ${
        final
          ? "bg-forest-900 text-white shadow-[0_0_0_1px_rgba(212,245,122,0.3),0_24px_60px_-20px_rgba(19,43,29,0.5)]"
          : "border border-sand-line bg-white hover:shadow-[0_24px_48px_-20px_rgba(19,43,29,0.35)]"
      }`}
    >
      {final && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-22 -bottom-30 h-[300px] w-[300px] rounded-full bg-[radial-gradient(closest-side,rgba(212,245,122,0.3),transparent)]"
        />
      )}
      <p className={`relative text-[13px] font-semibold ${final ? "text-lime-accent" : "text-primary-green-700"}`}>
        {label}
      </p>
      <h3 className="relative mt-3.5 font-new-serif text-[28px] font-normal leading-[1.15]">{title}</h3>
      <p className={`relative mt-3 text-[15px] leading-relaxed ${final ? "text-white/75" : "text-forest-ink/75"}`}>
        {body}
      </p>
    </li>
  );
}

export default function PricingSteps() {
  return (
    <section aria-labelledby="steps-heading" className="bg-primary-cream px-6 pb-24 text-forest-ink lg:pb-32">
      <div className="mx-auto max-w-[1240px]">
        <h2
          id="steps-heading"
          className="mx-auto max-w-[760px] text-center font-new-serif text-4xl font-normal leading-[1.06] tracking-tight sm:text-5xl lg:text-[56px]"
        >
          Three steps to a number{" "}
          <span className="italic text-primary-green-700">you can trust.</span>
        </h2>
        <ol className="mt-14 grid gap-4 lg:grid-cols-[minmax(0,1fr)_40px_minmax(0,1fr)_40px_minmax(0,1fr)] lg:gap-0">
          {STEPS.map((s, i) => (
            <Fragment key={s.label}>
              <StepCard {...s} />
              {i < STEPS.length - 1 && (
                <li aria-hidden="true" className={`hidden items-center justify-center lg:flex ${ARROW_COLORS[i]}`}>
                  <ArrowRightIcon className="size-6" strokeWidth={2.2} />
                </li>
              )}
            </Fragment>
          ))}
        </ol>
      </div>
    </section>
  );
}
