import { CheckIcon } from "lucide-react";

const PAINS = [
  "Too many systems",
  "Too many subscriptions",
  "Too many logins",
  "Reports that take weeks",
];

const SOURCES = [
  { name: "JD Edwards", live: false },
  { name: "Sage Intacct", live: true },
  { name: "QuickBooks", live: true },
  { name: "NetSuite", live: true },
  { name: "Legacy GL", live: false },
];

const GAINS = [
  "One login, every system",
  "Search everything at once",
  "Consolidated reports in hours",
  "Live and historical, side by side",
];

function Wire() {
  return (
    <div className="hidden px-3 lg:block" aria-hidden="true">
      <div className="flow-wire h-0.5 rounded-full" />
    </div>
  );
}

export default function Convergence() {
  return (
    <section
      aria-labelledby="convergence-heading"
      className="relative overflow-hidden bg-forest-950 px-6 py-24 text-white lg:py-32"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-[52%] left-1/2 h-[700px] w-[1100px] -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(closest-side,rgba(70,131,88,0.45),rgba(70,131,88,0)_70%)]"
      />

      <div className="relative mx-auto max-w-[1240px]">
        <div className="grid items-end gap-x-18 gap-y-10 lg:grid-cols-2">
          <h2
            id="convergence-heading"
            className="font-new-serif text-4xl font-normal leading-[1.06] tracking-tight sm:text-5xl lg:text-[56px]"
          >
            Growth by acquisition means{" "}
            <span className="italic text-mint-200">growth by fragmentation.</span>
          </h2>
          <div>
            <p className="text-[17px] leading-relaxed text-white/70">
              Every company you buy arrives with its own accounting platform,
              logins, subscription and years of history. Emulsion pulls all of it
              into one place, so a consolidated report stops being a weeks-long
              project.
            </p>
            <ul className="mt-6 flex flex-wrap gap-2">
              {PAINS.map((p) => (
                <li
                  key={p}
                  className="rounded-full border border-white/15 px-3.5 py-1.5 text-[13px] text-white/60 line-through"
                >
                  {p}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Diagram: inherited systems → Emulsion → outcomes */}
        <div className="mt-20 grid items-center gap-7 lg:grid-cols-[minmax(0,1fr)_120px_minmax(0,1.1fr)_120px_minmax(0,1fr)] lg:gap-0">
          <div className="flex flex-col gap-2.5">
            <p className="mb-1 text-[13px] font-semibold text-white/55">What you inherit</p>
            <ul className="flex flex-col gap-2.5">
              {SOURCES.map((s) => (
                <li
                  key={s.name}
                  className="flex items-center justify-between rounded-[14px] border border-white/10 bg-white/5 px-4 py-3.5 text-[15px]"
                >
                  <span>{s.name}</span>
                  <span className={`text-xs ${s.live ? "text-lime-accent" : "text-white/55"}`}>
                    {s.live ? "Live" : "Legacy"}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <Wire />

          <div className="flex flex-col items-center text-center">
            <div className="relative flex size-[220px] items-center justify-center">
              <span
                aria-hidden="true"
                className="animate-pulse-ring absolute inset-0 rounded-full border border-lime-accent/55"
              />
              <span
                aria-hidden="true"
                className="animate-pulse-ring absolute inset-0 rounded-full border border-lime-accent/55 [animation-delay:1.4s]"
              />
              <div className="flex size-[180px] items-center justify-center rounded-full bg-[radial-gradient(circle_at_30%_25%,#2F6B45,#132B1D_70%)] shadow-[0_0_0_1px_rgba(212,245,122,0.35),0_0_80px_rgba(212,245,122,0.25)]">
                <img src="/emulsion_logo_dark_no_footer.png" alt="Emulsion" className="h-auto w-[118px]" />
              </div>
            </div>
            <div className="mt-7 flex flex-wrap justify-center gap-2 text-[13px] font-semibold text-forest-ink">
              <span className="rounded-full bg-lime-accent px-3.5 py-1.5">Live connections by API</span>
              <span className="rounded-full bg-mint-200 px-3.5 py-1.5">Full legacy extraction</span>
            </div>
          </div>

          <Wire />

          <div className="flex flex-col gap-2.5">
            <p className="mb-1 text-[13px] font-semibold text-white/55">What you get</p>
            <ul className="flex flex-col gap-2.5">
              {GAINS.map((g) => (
                <li
                  key={g}
                  className="flex items-center gap-3 rounded-[14px] border border-lime-accent/20 bg-lime-accent/[0.08] px-4 py-3.5 text-[15px] font-medium"
                >
                  <span className="flex size-6 flex-none items-center justify-center rounded-full bg-lime-accent text-forest-900">
                    <CheckIcon className="size-3.5" strokeWidth={3} aria-hidden="true" />
                  </span>
                  {g}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
