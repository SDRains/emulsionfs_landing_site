const LABELS = ["30-MIN WALKTHROUGH", "YOUR SYSTEMS, LIVE", "NO COMMITMENT"];

function EmulsionMark({ className }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
      <circle cx="16" cy="16" r="16" fill="#3b82f6" />
      <path d="M16 2a14 14 0 0 0 0 28z" fill="#0b1a2e" />
    </svg>
  );
}

export default function FinalCta() {
  return (
    <section className="relative overflow-hidden bg-[#0b1a2e] text-white">
      <div className="mx-auto max-w-7xl px-6 py-32 lg:px-10">
        <div className="relative flex flex-col items-center text-center">
          {/* Concentric rings, centered on the logo mark */}
          <div className="pointer-events-none absolute left-1/2 top-8 -translate-x-1/2 -translate-y-1/2">
            <svg
              className="h-[1500px] w-[1500px]"
              viewBox="0 0 1500 1500"
              fill="none"
              aria-hidden="true"
            >
              {[170, 340, 520, 720].map((r) => (
                <circle
                  key={r}
                  cx="750"
                  cy="750"
                  r={r}
                  stroke="#93a4c9"
                  strokeOpacity="0.12"
                  strokeWidth="1.5"
                />
              ))}
            </svg>
          </div>

          <img src='/emulsion_logo_dark.png' className='w-56 h-auto object-cover' alt='Emulsion' />

          <h2 className="mt-6 relative max-w-4xl text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl">
            See all your financial data as one.
          </h2>
          <p className="relative mt-8 max-w-2xl text-lg text-slate-400 sm:text-xl">
            Curious to see how we can consolidate your financial data? Book a complimentary, no-obligation 30 minute demo.
          </p>

          <div className="relative mt-12 flex flex-wrap items-center justify-center gap-4">
            <a
              href="/contact?intent=demo"
              className="rounded-lg bg-cyan-600 px-8 py-4 text-base font-semibold text-white transition-colors hover:bg-cyan-500"
            >
              Book a demo
            </a>
            <a
              href="/contact?intent=sales"
              className="rounded-lg border border-white/20 px-8 py-4 text-base font-semibold text-white transition-colors hover:bg-white/5"
            >
              Talk to sales
            </a>
          </div>

          {/*<div className="relative mt-16 flex flex-wrap items-center justify-center gap-x-5 gap-y-3 font-mono text-sm tracking-[0.15em] text-slate-500">*/}
          {/*  {LABELS.map((label, i) => (*/}
          {/*    <span key={label} className="flex items-center gap-x-5">*/}
          {/*      {i > 0 && (*/}
          {/*        <span className="h-1 w-1 rounded-full bg-cyan-500" />*/}
          {/*      )}*/}
          {/*      {label}*/}
          {/*    </span>*/}
          {/*  ))}*/}
          {/*</div>*/}
        </div>
      </div>
    </section>
  );
}
