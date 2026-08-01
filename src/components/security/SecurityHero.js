const SOURCES = ["JD EDWARDS", "SAGE INTACCT", "LEGACY GL"];
const CONSUMERS = ["CONTROLLERS", "BOARD REPORTS", "AUDITORS"];

// Faint graph-paper grid behind the topology figure.
const GRID_BG = {
  backgroundImage:
    "linear-gradient(rgba(70,131,88,0.10) 1px, transparent 1px), linear-gradient(90deg, rgba(70,131,88,0.10) 1px, transparent 1px)",
  backgroundSize: "26px 26px",
};

function Node({ children }) {
  return (
    <div className="whitespace-nowrap border border-[#cbc8ba] bg-[#f7f5ee] px-5 py-3.5 font-mono text-xs tracking-wider text-slate-600">
      {children}
    </div>
  );
}

function Connector({ top, bottom }) {
  return (
    <div className="flex shrink-0 flex-col items-center justify-center gap-2 text-center">
      <span className="font-mono text-[11px] tracking-wider text-primary-green-700">
        {top}
      </span>
      <span className="h-px w-24 bg-primary-green-600/50" />
      <span className="font-mono text-[11px] tracking-wider text-slate-400">
        {bottom}
      </span>
    </div>
  );
}

export default function SecurityHero() {
  return (
    <section className="bg-primary-cream text-[#141414]">
      <div className="mx-auto max-w-screen-2xl px-6 py-24 lg:px-10 lg:py-28">
        <h1 className="font-serif text-5xl font-semibold leading-[1.05] text-dark-background sm:text-6xl lg:text-7xl">
          Your financial history,
          <br />
          <span className="italic text-primary-green-600">
            inside your perimeter.
          </span>
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-500">
          Emulsion reads from your systems, never writes to them, and stores the
          result where your policies require — your infrastructure or a dedicated
          environment we run for you alone.
        </p>

        {/* Topology figure */}
        <figure className="mt-16 border border-slate-200 bg-white p-4 sm:p-8">
          <div className="overflow-x-auto">
            <div className="min-w-[900px]">
              <div
                className="border border-dashed border-slate-300 px-8 py-12"
                style={GRID_BG}
              >
                <div className="flex items-stretch justify-between gap-6">
                  {/* Source systems */}
                  <div className="flex flex-col justify-center gap-4">
                    {SOURCES.map((s) => (
                      <Node key={s}>{s}</Node>
                    ))}
                  </div>

                  <Connector top="READ-ONLY · TLS" bottom="API / EXTRACTION" />

                  {/* Repository */}
                  <div className="flex flex-col items-center justify-center bg-primary-green-600 px-10 text-center">
                    <span className="font-serif text-3xl lowercase text-white">
                      emulsion
                    </span>
                    <span className="mt-2 font-mono text-[11px] tracking-widest text-white/70">
                      ENCRYPTED REPOSITORY
                    </span>
                  </div>

                  <Connector top="SSO · RBAC" bottom="AUDITED ACCESS" />

                  {/* Consumers */}
                  <div className="flex flex-col justify-center gap-4">
                    {CONSUMERS.map((c) => (
                      <Node key={c}>{c}</Node>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </figure>
      </div>
    </section>
  );
}
