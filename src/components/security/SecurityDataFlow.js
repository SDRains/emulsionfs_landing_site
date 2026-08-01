const TAN = "#d8d3c2";

function IngestVisual() {
  return (
    <div className="space-y-2.5">
      <span className="block h-2 w-full rounded-sm" style={{ background: TAN }} />
      <span className="block h-2 w-4/5 rounded-sm" style={{ background: TAN }} />
      <span className="block h-2 w-1/2 rounded-sm" style={{ background: TAN }} />
    </div>
  );
}

function StoreVisual() {
  return (
    <div className="space-y-2.5">
      <span className="block h-2 w-full rounded-sm bg-primary-green-600" />
      <span className="block h-2 w-full rounded-sm bg-primary-green-700" />
      <span className="block h-2 w-full rounded-sm bg-slate-600" />
    </div>
  );
}

function AccessVisual() {
  const pattern = ["g", "t", "g", "t", "t", "g"];
  return (
    <div className="flex gap-1.5">
      {pattern.map((c, i) => (
        <span
          key={i}
          className={`h-6 w-6 ${c === "g" ? "bg-primary-green-700" : ""}`}
          style={c === "t" ? { background: TAN } : undefined}
        />
      ))}
    </div>
  );
}

const STAGES = [
  {
    stage: "STAGE 01",
    title: "Ingest",
    visual: <IngestVisual />,
    body: "Scheduled API pulls and supervised legacy extraction. Read-only credentials, scoped per system.",
  },
  {
    stage: "STAGE 02",
    title: "Store",
    dark: true,
    visual: <StoreVisual />,
    body: "Dedicated encrypted database — yours alone, in your environment or ours. Validated against source.",
  },
  {
    stage: "STAGE 03",
    title: "Access",
    visual: <AccessVisual />,
    body: "Search, reporting, and exports — permissioned per entity, every action logged.",
  },
];

function StageCard({ stage, title, dark, visual, body }) {
  return (
    <div
      className={`flex-1 px-8 ${
        dark ? "bg-dark-background py-12 text-white" : "bg-primary-cream py-8"
      }`}
    >
      <p
        className={`font-mono text-xs tracking-wider ${
          dark ? "text-primary-green-500" : "text-primary-green-700"
        }`}
      >
        {stage}
      </p>
      <h3
        className={`mt-4 text-xl font-bold ${
          dark ? "text-white" : "text-dark-background"
        }`}
      >
        {title}
      </h3>
      <div className="mt-6">{visual}</div>
      <p
        className={`mt-6 text-sm leading-6 ${
          dark ? "text-slate-400" : "text-slate-500"
        }`}
      >
        {body}
      </p>
    </div>
  );
}

function FlowConnector({ label }) {
  return (
    <div className="flex shrink-0 flex-col items-center gap-2 px-1">
      <span className="h-px w-14 bg-slate-300" />
      <span className="font-mono text-[10px] tracking-[0.15em] text-slate-400">
        {label}
      </span>
    </div>
  );
}

export default function SecurityDataFlow() {
  return (
    <section className="bg-white text-[#141414]">
      <div className="mx-auto max-w-screen-2xl px-6 py-24 lg:px-10 lg:py-20">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-start lg:gap-16">
          <h2 className="font-serif text-4xl font-semibold leading-tight text-dark-background sm:text-5xl">
            How data moves,
            <br />
            <span className="italic text-primary-green-600">
              and where it stops.
            </span>
          </h2>
          <p className="max-w-xl text-lg leading-8 text-slate-500 lg:pt-2">
            Three stages, one direction. Nothing is written back to a source
            system, and nothing leaves your environment unless you export it
            yourself.
          </p>
        </div>

        {/* Figure */}
        <figure className="mt-16 border border-slate-200 p-6 sm:p-10">
          <div className="overflow-x-auto">
            <div className="min-w-[900px]">
              <div className="flex items-center">
                <StageCard {...STAGES[0]} />
                <FlowConnector label="TLS" />
                <StageCard {...STAGES[1]} />
                <FlowConnector label="RBAC" />
                <StageCard {...STAGES[2]} />
              </div>
            </div>
          </div>
        </figure>
      </div>
    </section>
  );
}
