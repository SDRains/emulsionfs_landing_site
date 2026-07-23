const METHODS = [
  {
    badge: "01 · LIVE CONNECTIONS · API",
    title: "Real-time data from active systems.",
    body: "Direct connections to the platforms you're keeping — reporting is always current.",
  },
  {
    badge: "02 · FULL EXTRACTION",
    title: "Complete contents of legacy systems.",
    body: (
      <>
        Every transaction and record, preserved and searchable —{" "}
        <span className="font-semibold text-[#141414]">
          then retire the subscription.
        </span>
      </>
    ),
  },
];

const OUTCOMES = [
  "One login, every system",
  "Search all at once",
  "Reports in hours, consolidated",
  "Live vs. historical, in real time",
];

function CheckIcon({ className }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5 12l5 5L19 7" />
    </svg>
  );
}

function MethodCard({ badge, title, body }) {
  return (
    <div className="rounded-2xl border border-black/[0.06] bg-white p-7 shadow-[0_1px_2px_rgba(15,23,42,0.04)]">
      <span className="inline-block rounded-md bg-cyan-50 px-2.5 py-1 font-mono text-xs font-semibold tracking-wider text-cyan-600">
        {badge}
      </span>
      <h3 className="mt-5 text-xl font-bold text-[#141414]">{title}</h3>
      <p className="mt-3 text-base leading-7 text-slate-500">{body}</p>
    </div>
  );
}

function Connector() {
  return (
    <div className="hidden flex-col items-center justify-center gap-3 lg:flex">
      <span className="h-20 border-l-2 border-dotted border-slate-300" />
      <span className="text-xl text-slate-400">&rarr;</span>
      <span className="h-20 border-l-2 border-dotted border-slate-300" />
    </div>
  );
}

function NodeCard() {
  return (
    <div className="rounded-2xl bg-[#0f2038] p-8 text-white shadow-[0_25px_50px_-15px_rgba(15,23,42,0.4)]">
      <img src='/emulsion_logo_dark.png' className='w-32 h-auto object-cover' />
      <h3 className="text-2xl font-bold">One place to work.</h3>
      <p className="mt-3 text-base leading-7 text-slate-400">
        Live and historical data, side by side in Emulsion.
      </p>
      <ul className="mt-6 space-y-3">
        {OUTCOMES.map((o) => (
          <li key={o} className="flex items-center gap-3 text-slate-200">
            <CheckIcon className="h-4 w-4 shrink-0 text-cyan-400" />
            <span>{o}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function HowItWorks() {
  return (
    <section className="bg-primary-cream text-[#141414]">
      <div className="mx-auto max-w-7xl px-6 pb-28 pt-8 lg:px-10">
        {/*<p className="text-center font-mono text-sm font-semibold tracking-[0.2em] text-cyan-600">*/}
        {/*  HOW IT WORKS*/}
        {/*</p>*/}
      <h2 className="mt-6 max-w-4xl mx-auto text-5xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl text-center">
          Two ways to connect,
          <br />
          <span className="font-serif italic text-cyan-600">one place to work.</span>
        </h2>

        <div className="mt-12 grid items-center gap-8 lg:mt-16 lg:grid-cols-[1fr_auto_1fr] lg:gap-6">
          {/* Left: the two connection methods */}
          <div className="flex flex-col gap-6">
            <MethodCard {...METHODS[0]} />
            <MethodCard {...METHODS[1]} />
          </div>

          {/* Center: dotted connector */}
          <Connector />

          {/* Right: the unified node with its outcomes */}
          <NodeCard />
        </div>
      </div>
    </section>
  );
}
