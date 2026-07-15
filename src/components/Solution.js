// Shared 1400x620 design-unit coordinate space (see Hero.js for the rationale):
// the container keeps this aspect ratio and the connector <svg> uses the same
// viewBox with preserveAspectRatio="none", so line endpoints align with the
// absolutely-positioned cards at any rendered size.
const W = 1400;
const H = 620;
const L_CARD_W = 210;
const L_CARD_H = 54;
const R_CARD_W = 250;
const R_CARD_H = 86;
const NODE_W = 215;
const NODE_H = 175;
const NODE_CX = W / 2;
const NODE_CY = H / 2;
const NODE_LEFT_X = NODE_CX - NODE_W / 2;
const NODE_RIGHT_X = NODE_CX + NODE_W / 2;
const R_CARD_LEFT_X = W - R_CARD_W;

const SOURCES = [
  { label: "JD Edwards", cy: 60 },
  { label: "Sage Intacct", cy: 185 },
  { label: "QuickBooks", cy: 310 },
  { label: "NetSuite", cy: 435 },
  { label: "Legacy GL", cy: 560 },
];

const OUTCOMES = [
  { title: "Search everything", sub: "across all platforms", cy: 150 },
  { title: "Reports in hours", sub: "consolidated, no manual work", cy: 310 },
  { title: "Keep data forever", sub: "retire the old software", cy: 470 },
];

const pct = (value, total) => `${(value / total) * 100}%`;

function NodeCard({ className = "" }) {
  return (
    <div
      className={`flex flex-col items-center justify-center gap-1.5 rounded-2xl border border-blue-500 bg-[#0f2038] shadow-[0_0_50px_-10px_rgba(59,130,246,0.7)] ${className}`}
    >
        <img src='/emulsion_logo_dark.png' className='w-2/3 h-auto object-cover' alt='Emulsion' />
      <span className="font-mono text-[9px] tracking-[0.18em] text-blue-300">
        ONE SOURCE OF TRUTH
      </span>
    </div>
  );
}

function sourceInner(label) {
  return (
    <>
      <span className="h-4 w-4 shrink-0 rounded-[4px] bg-slate-200" />
      <span className="font-mono text-sm text-slate-600">{label}</span>
    </>
  );
}

function outcomeInner(title, sub) {
  return (
    <>
      <span className="text-base font-bold text-[#141414]">{title}</span>
      <span className="mt-1 font-mono text-xs text-slate-400">{sub}</span>
    </>
  );
}

function DiagramFull() {
  return (
    <div
      className="relative mx-auto w-full max-w-[1200px]"
      style={{ aspectRatio: `${W} / ${H}` }}
    >
      {/* Connector lines */}
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox={`0 0 ${W} ${H}`}
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        {SOURCES.map((s) => (
          <line
            key={s.label}
            x1={L_CARD_W}
            y1={s.cy}
            x2={NODE_LEFT_X}
            y2={NODE_CY}
            stroke="#c7d2fe"
            strokeWidth="1"
          />
        ))}
        {OUTCOMES.map((o) => (
          <line
            key={o.title}
            x1={NODE_RIGHT_X}
            y1={NODE_CY}
            x2={R_CARD_LEFT_X}
            y2={o.cy}
            stroke="#c7d2fe"
            strokeWidth="1"
          />
        ))}
      </svg>

      {/* Source cards (left) */}
      {SOURCES.map((s) => (
        <div
          key={s.label}
          className="absolute flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 shadow-[0_1px_2px_rgba(15,23,42,0.05)]"
          style={{
            left: 0,
            width: pct(L_CARD_W, W),
            top: pct(s.cy - L_CARD_H / 2, H),
            height: pct(L_CARD_H, H),
          }}
        >
          {sourceInner(s.label)}
        </div>
      ))}

      {/* Outcome cards (right) */}
      {OUTCOMES.map((o) => (
        <div
          key={o.title}
          className="absolute flex flex-col justify-center rounded-xl border border-indigo-100 bg-[#eef1fb] px-4"
          style={{
            left: pct(R_CARD_LEFT_X, W),
            width: pct(R_CARD_W, W),
            top: pct(o.cy - R_CARD_H / 2, H),
            height: pct(R_CARD_H, H),
          }}
        >
          {outcomeInner(o.title, o.sub)}
        </div>
      ))}

      {/* Central node */}
      <div
        className="pointer-events-none absolute"
        style={{
          left: pct(NODE_LEFT_X, W),
          width: pct(NODE_W, W),
          top: pct(NODE_CY - NODE_H / 2, H),
          height: pct(NODE_H, H),
        }}
      >
        <NodeCard className="h-full w-full" />
      </div>
    </div>
  );
}

function DiagramStacked() {
  return (
    <div className="mx-auto max-w-md">
      <div className="flex flex-wrap justify-center gap-3">
        {SOURCES.map((s) => (
          <div
            key={s.label}
            className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2 shadow-[0_1px_2px_rgba(15,23,42,0.05)]"
          >
            {sourceInner(s.label)}
          </div>
        ))}
      </div>

      <div className="my-8 flex justify-center">
        <NodeCard className="h-40 w-52" />
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        {OUTCOMES.map((o) => (
          <div
            key={o.title}
            className="flex flex-col rounded-xl border border-indigo-100 bg-[#eef1fb] px-4 py-4"
          >
            {outcomeInner(o.title, o.sub)}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Solution() {
  return (
    <section className="bg-primary-cream text-[#141414]">
      <div className="mx-auto max-w-7xl px-6 py-28 lg:px-10">
        {/*<p className="font-mono text-sm font-semibold tracking-[0.2em] text-blue-600">*/}
        {/*  THE SOLUTION*/}
        {/*</p>*/}
        <h2 className="mt-6 max-w-4xl mx-auto text-5xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl text-center">
          Emulsion consolidates every system you run into one.
        </h2>
        <p className="mt-8 max-w-3xl mx-auto text-lg leading-8 text-slate-500 text-center">
          Connect your platforms once and Emulsion becomes the single place to
          search, report, and retain your financial data no matter which
          system it originally lived in. Live data stays live. Historical data
          stays accessible forever. And you finally see it all together.
        </p>

        <div className="mt-20 hidden lg:block">
          <DiagramFull />
        </div>
        <div className="mt-16 lg:hidden">
          <DiagramStacked />
        </div>
      </div>
    </section>
  );
}
