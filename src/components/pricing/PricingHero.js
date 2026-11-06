import { ArrowDownIcon, CheckIcon } from "lucide-react";

const PROMISES = ["Licensed by organization, not seat", "One fixed fee", "No surprises"];

const CHIP = {
  live: "bg-forest-900 text-lime-accent",
  legacy: "bg-[#ECE9DD] text-[#4F5A50]",
};

// Example proposal for the illustration only. Bracketed values are placeholders.
const PROPOSAL = [
  { label: "Connect live", chips: ["Sage Intacct", "NetSuite"], tone: "live" },
  { label: "Extract & retire", chips: ["JD Edwards", "Great Plains"], tone: "legacy" },
  { label: "Repository", value: "Hosted by Emulsion" },
  { label: "Onboarding", value: "Discovery through first close" },
  { label: "Timeline", value: "[Your timeline]" },
];

function ProposalMockup() {
  return (
    <div className="relative p-6" aria-hidden="true">
      <div className="pointer-events-none absolute -inset-10 bg-[radial-gradient(closest-side,rgba(212,245,122,0.45),rgba(212,245,122,0)_75%)]" />
      <div className="relative overflow-hidden rounded-3xl bg-white shadow-[0_40px_80px_-24px_rgba(19,43,29,0.35)] ring-1 ring-forest-900/5 transition-transform duration-300 sm:rotate-[1.5deg] sm:hover:-translate-y-1 sm:hover:rotate-0">
        <div className="flex items-center justify-between gap-3 border-b border-[#EEECE3] px-[26px] py-[22px]">
          <img src="/emulsion_logo_light_no_footer.png" alt="" className="h-[26px] w-auto" />
          <span className="text-xs font-semibold text-forest-ink/65">Fixed-fee proposal</span>
        </div>
        <div className="px-[26px] pt-[22px] pb-2">
          <p className="font-new-serif text-2xl">
            Prepared for <span className="italic text-primary-green-700">[Your company]</span>
          </p>
          <dl className="mt-[18px] text-sm">
            {PROPOSAL.map((row) => (
              <div key={row.label} className="grid grid-cols-[140px_1fr] gap-3 border-t border-[#F0EEE6] py-3">
                <dt className="text-forest-ink/65">{row.label}</dt>
                <dd className={row.chips ? "flex flex-wrap gap-1.5" : "font-semibold"}>
                  {row.chips
                    ? row.chips.map((c) => (
                        <span key={c} className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${CHIP[row.tone]}`}>
                          {c}
                        </span>
                      ))
                    : row.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="flex items-center justify-between gap-3 bg-forest-900 px-[26px] py-[18px] text-white">
          <span className="text-sm font-semibold">Total, fixed</span>
          <span className="rounded-full bg-lime-accent px-3.5 py-1.5 text-sm font-bold text-forest-900">
            [Your fixed fee]
          </span>
        </div>
      </div>
    </div>
  );
}

export default function PricingHero() {
  return (
    <section className="bg-primary-cream px-4 text-forest-ink">
      <div className="mx-auto grid max-w-[1240px] items-center gap-x-18 gap-y-14 px-2 pt-36 pb-24 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:pt-48 lg:pb-30">
        <div>
          <h1 className="font-new-serif text-5xl font-normal leading-[1.02] tracking-tight sm:text-6xl lg:text-[72px]">
            Priced to your environment,{" "}
            <span className="italic text-primary-green-700">not a pricing table.</span>
          </h1>
          <p className="mt-7 max-w-[540px] text-lg leading-relaxed text-forest-ink/75 sm:text-[19px]">
            No two inherited system landscapes are alike, so we don&apos;t pretend
            one price fits them. Tell us what you&apos;re running and we&apos;ll
            scope a clear path forward with a fixed proposal.
          </p>
          <ul className="mt-7 flex flex-wrap gap-2 text-sm font-semibold">
            {PROMISES.map((p) => (
              <li
                key={p}
                className="inline-flex items-center gap-2 rounded-full border border-sand-line bg-white px-3.5 py-2"
              >
                <CheckIcon className="size-3.5 text-primary-green-700" strokeWidth={3} aria-hidden="true" />
                {p}
              </li>
            ))}
          </ul>
          <div className="mt-9 flex flex-wrap gap-3 font-serif">
            <a
              href="#scope"
              className="inline-flex h-[54px] items-center rounded-full bg-primary-green-600 px-7 text-lg font-semibold text-white shadow-[0_8px_24px_rgba(53,99,65,0.28)] transition-colors hover:bg-primary-green-700"
            >
              Request a scoping call
            </a>
            <a
              href="#services"
              className="group inline-flex h-[54px] items-center gap-2.5 rounded-full border border-forest-ink/20 bg-white/55 px-[26px] text-lg font-semibold text-forest-ink transition-colors hover:bg-white"
            >
              What&apos;s included
              <ArrowDownIcon
                aria-hidden="true"
                className="size-[18px] transition-transform group-hover:translate-y-0.5"
              />
            </a>
          </div>
        </div>

        <ProposalMockup />
      </div>
    </section>
  );
}
