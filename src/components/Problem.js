import {ProportionsIcon, LockIcon, ReceiptIcon, FileClockIcon} from "lucide-react";

// Cards are split into two columns so the right column can sit lower than the
// left (the staggered layout in the design).
const LEFT_CARDS = [
  {
    icon: ProportionsIcon,
    title: "Too many systems",
    body: "Every entity on a different platform.",
  },
  {
    icon: ReceiptIcon,
    title: "Too many subscriptions",
    body: "Paying to keep old software alive just to read old data.",
  },
];

const RIGHT_CARDS = [
  {
    icon: LockIcon,
    title: "Too many logins",
    body: "No single place to look.",
  },
  {
    icon: FileClockIcon,
    title: "Reports take weeks",
    body: "Manual reconciliation across platforms that don't talk.",
  },
];

function ProblemCard({ icon, title, body }) {
  const IconComponent = icon;

  return (
    <div className="rounded-2xl border border-black/[0.06] bg-white p-7 shadow-[0_1px_2px_rgba(15,23,42,0.04)]">
      <IconComponent className='size-6 text-cyan-600' />
      <h3 className="mt-6 text-lg font-bold text-[#141414]">{title}</h3>
      <p className="mt-3 text-base leading-7 text-slate-500">{body}</p>
    </div>
  );
}

function RingGraphic() {
  return (
    <svg
      className="pointer-events-none absolute -right-40 -top-40 h-[820px] w-[820px] max-w-none text-cyan-600/20"
      viewBox="0 0 820 820"
      fill="none"
      aria-hidden="true"
    >
      {[150, 300, 450].map((r) => (
        <circle
          key={r}
          cx="470"
          cy="350"
          r={r}
          stroke="currentColor"
          strokeWidth="2"
          strokeDasharray="10 5"
        />
      ))}
      {/* Filled accent dot riding the outer ring */}
      {/*<circle cx="475" cy="335" r="14" fill="#2563eb" />*/}
      {/* Hollow accent dot on an inner ring */}
      {/*<circle*/}
      {/*  cx="196"*/}
      {/*  cy="415"*/}
      {/*  r="7"*/}
      {/*  stroke="#2563eb"*/}
      {/*  strokeWidth="2"*/}
      {/*  fill="none"*/}
      {/*/>*/}
    </svg>
  );
}

export default function Problem() {
  return (
    <section className="relative overflow-hidden bg-dark-blue text-primary-cream pt-48">
      <RingGraphic />

      <div className="relative mx-auto max-w-7xl px-6 py-28 lg:px-10">
        {/*<p className="font-mono text-sm font-semibold tracking-[0.2em] text-blue-700">*/}
        {/*  THE PROBLEM*/}
        {/*</p>*/}
        <h2 className="mt-6 max-w-3xl text-5xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl">
          Growth by acquisition means growth by fragmentation.
        </h2>

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <p className="max-w-xl text-lg leading-8 text-slate-300 mt-20">
            When you buy a company, you inherit more than its assets — you
            inherit its systems. Every entity arrives running its own accounting
            platform, its own logins, its own subscription, its own way of
            storing years of financial history. Pulling one consolidated report
            means logging into a half-dozen platforms and reconciling by hand —
            a process that can take weeks and is out of date the moment it&apos;s
            finished.
          </p>

          <div className="grid gap-6 sm:grid-cols-2">
            <div className="flex flex-col gap-6">
              {LEFT_CARDS.map((c) => (
                <ProblemCard key={c.title} {...c} />
              ))}
            </div>
            <div className="flex flex-col gap-6 sm:mt-12">
              {RIGHT_CARDS.map((c) => (
                <ProblemCard key={c.title} {...c} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
