import Link from "next/link";
import { ArrowDownIcon } from "lucide-react";

const INPUTS = [
  { name: "JD Edwards", live: true },
  { name: "Sage Intacct", live: true },
  { name: "QuickBooks", live: true },
  { name: "NetSuite", live: true },
  { name: "Great Plains", live: false },
];

const OUTPUTS = [
  { name: "Board reports", to: "Board" },
  { name: "BOLO reports", to: "On schedule" },
  { name: "CapEx reports", to: "By entity" },
  { name: "Chronograph", to: "Investors" },
  { name: "Ask in plain English", to: "AI assistants", accent: true },
];

function Wire() {
  return (
    <div className="hidden px-2.5 lg:block" aria-hidden="true">
      <div className="flow-wire-green h-0.5" />
    </div>
  );
}

function FlowDiagram() {
  return (
    <div className="relative overflow-hidden rounded-[32px] border border-sand-line bg-white p-6 shadow-[0_40px_80px_-32px_rgba(19,43,29,0.25)] sm:p-12">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-1/2 h-[520px] w-[760px] -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(closest-side,rgba(212,245,122,0.35),rgba(212,245,122,0)_70%)]"
      />
      <div className="relative grid items-center gap-7 lg:grid-cols-[minmax(0,1fr)_96px_auto_96px_minmax(0,1fr)] lg:gap-0">
        <div>
          <p className="mb-3 text-[13px] font-semibold text-forest-ink/65">Data in</p>
          <ul className="flex flex-col gap-2.5">
            {INPUTS.map((s) => (
              <li
                key={s.name}
                className="flex items-center justify-between gap-3 rounded-[14px] border border-[#ECE9DD] bg-primary-cream px-4 py-3 text-[15px] font-medium"
              >
                <span>{s.name}</span>
                <span
                  className={`inline-flex items-center gap-1.5 text-xs font-semibold ${
                    s.live ? "text-primary-green-700" : "text-forest-ink/65"
                  }`}
                >
                  <span className={`size-1.5 rounded-full ${s.live ? "bg-primary-green-600" : "bg-[#7C877E]"}`} />
                  {s.live ? "Live API" : "Extracted"}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <Wire />

        <div className="flex flex-col items-center">
          <div className="relative flex size-[200px] items-center justify-center">
            <span aria-hidden="true" className="animate-pulse-ring absolute inset-0 rounded-full border border-primary-green-600/50" />
            <span
              aria-hidden="true"
              className="animate-pulse-ring absolute inset-0 rounded-full border border-primary-green-600/50 [animation-delay:1.4s]"
            />
            <div className="flex size-[164px] items-center justify-center rounded-full bg-[radial-gradient(circle_at_30%_25%,#2F6B45,#132B1D_70%)] shadow-[0_0_0_1px_rgba(212,245,122,0.4),0_20px_60px_rgba(19,43,29,0.35),0_0_60px_rgba(212,245,122,0.35)]">
              <img src="/emulsion_logo_dark_no_footer.png" alt="Emulsion" className="h-auto w-[108px]" />
            </div>
          </div>
          <p className="mt-3.5 text-[13px] text-forest-ink/65">Consolidated, traceable to source</p>
        </div>

        <Wire />

        <div>
          <p className="mb-3 text-[13px] font-semibold text-forest-ink/65">Reports out</p>
          <ul className="flex flex-col gap-2.5">
            {OUTPUTS.map((o) => (
              <li
                key={o.name}
                className={`flex items-center justify-between gap-3 rounded-[14px] px-4 py-3 text-[15px] font-medium ${
                  o.accent ? "bg-[#EAF7BF] text-forest-ink" : "bg-forest-900 text-white"
                }`}
              >
                <span>{o.name}</span>
                <span className="text-xs opacity-75">{o.to}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default function IntegrationsHero() {
  return (
    <section className="bg-primary-cream px-4 text-forest-ink">
      <div className="mx-auto max-w-[1240px] px-2 pt-36 text-center lg:pt-48">
        <h1 className="mx-auto max-w-[1000px] font-new-serif text-5xl font-normal leading-[1.02] tracking-tight sm:text-6xl lg:text-[76px]">
          Data in from every system.{" "}
          <span className="italic text-primary-green-700">Reports out to everyone who asks.</span>
        </h1>
        <p className="mx-auto mt-7 max-w-[640px] text-lg leading-relaxed text-forest-ink/75 sm:text-[19px]">
          Emulsion sits between the platforms you&apos;ve inherited and the
          reports your board, lenders and investors expect, with optional AI
          assistants on top.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-3 font-serif">
          <Link
            href="/contact?intent=demo"
            className="inline-flex h-[54px] items-center rounded-full bg-primary-green-600 px-7 text-lg font-semibold text-white shadow-[0_8px_24px_rgba(53,99,65,0.28)] transition-colors hover:bg-primary-green-700"
          >
            Book a demo
          </Link>
          <a
            href="#platforms"
            className="group inline-flex h-[54px] items-center gap-2.5 rounded-full border border-forest-ink/20 bg-white/55 px-[26px] text-lg font-semibold text-forest-ink transition-colors hover:bg-white"
          >
            See every platform
            <ArrowDownIcon
              aria-hidden="true"
              className="size-[18px] transition-transform group-hover:translate-y-0.5"
            />
          </a>
        </div>
      </div>

      <div className="mx-auto max-w-[1240px] px-2 pt-18 pb-26">
        <FlowDiagram />
      </div>
    </section>
  );
}
