const TAN = "#cdc8b6";
const LIGHT = "#ece9dd";

const GRID_BG = {
  backgroundImage:
    "linear-gradient(rgba(70,131,88,0.10) 1px, transparent 1px), linear-gradient(90deg, rgba(70,131,88,0.10) 1px, transparent 1px)",
  backgroundSize: "22px 22px",
};

function Figure({ caption, children }) {
  return (
    <div>
      <div
        className="relative aspect-[4/3] border border-dashed border-slate-300"
        style={GRID_BG}
      >
        <div className="absolute inset-6">{children}</div>
      </div>
      <figcaption className="mt-4 font-mono text-[11px] tracking-wider text-slate-400">
        {caption}
      </figcaption>
    </div>
  );
}

/* ---- Illustrations ---- */

function BoundaryFig() {
  return (
    <div className="relative h-full w-full border-2 border-dark-background">
      <span className="absolute left-3 top-2 font-mono text-[10px] tracking-wider text-slate-600">
        YOUR PERIMETER
      </span>
      <div className="absolute bottom-3 left-3 flex items-end gap-2">
        <span className="h-11 w-11 bg-primary-green-700" />
        <span className="h-6 w-6 border border-slate-400 bg-white" />
        <span className="h-6 w-6 border border-slate-400 bg-white" />
      </div>
    </div>
  );
}

function IngestionFig() {
  return (
    <div className="flex h-full w-full items-center justify-center gap-3">
      <div className="space-y-2">
        <div className="h-4 w-16 rounded-sm border border-slate-400 bg-white" />
        <div className="h-4 w-16 rounded-sm border border-slate-400 bg-white" />
      </div>
      <div className="flex flex-col items-center gap-1">
        <span className="h-px w-14 bg-primary-green-600" />
        <span className="font-mono text-[9px] tracking-wider text-primary-green-700">
          READ ONLY
        </span>
      </div>
      <span className="h-14 w-14 bg-primary-green-700" />
    </div>
  );
}

function MatrixFig() {
  const cells = [
    "g", "t", "g", "l", "l",
    "g", "l", "t", "g", "l",
    "t", "g", "t", "g", "l",
  ];
  const bg = (c) =>
    c === "g" ? "#356341" : c === "t" ? TAN : LIGHT;
  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="grid grid-cols-5 gap-1.5">
        {cells.map((c, i) => (
          <span key={i} className="h-5 w-5" style={{ background: bg(c) }} />
        ))}
      </div>
    </div>
  );
}

function ReconcileFig() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-3">
      <div className="flex items-center gap-3">
        <span className="h-12 w-24 rounded-sm border border-slate-400 bg-white" />
        <span className="font-mono text-sm text-slate-400">=</span>
        <span className="h-12 w-24 bg-primary-green-700" />
      </div>
      <span className="font-mono text-[9px] tracking-wider text-slate-400">
        PARALLEL RUN UNTIL RECONCILED
      </span>
    </div>
  );
}

function DocumentsFig() {
  return (
    <div className="flex h-full w-full items-center justify-center gap-4">
      <div className="relative h-24 w-16 border border-dark-background bg-white">
        <span className="absolute inset-x-2 bottom-2 h-1 bg-primary-green-700" />
      </div>
      <div className="h-24 w-16 border border-slate-400 bg-white" />
      <div className="h-24 w-16 border border-slate-400 bg-white" />
    </div>
  );
}

/* ---- Rows ---- */

const ROWS = [
  {
    number: "01",
    title: "Where your data lives",
    body: "You choose the boundary. Local deployment puts the repository inside your own infrastructure, behind your firewall, under your key management. Hosted puts it in a dedicated, encrypted database that belongs to your organization alone — never a shared schema, never pooled with another customer's records.",
    extra: (
      <div className="mt-6 flex flex-wrap gap-2">
        {["DATA RESIDENCY", "DEDICATED DB", "AES-256"].map((t) => (
          <span
            key={t}
            className="rounded-full border border-slate-300 px-3 py-1 font-mono text-[11px] tracking-wider text-slate-500"
          >
            {t}
          </span>
        ))}
      </div>
    ),
    caption: "",
    illustration: <BoundaryFig />,
  },
  {
    number: "02",
    title: "How we connect",
    body: "Live systems are connected with read-only, least-privilege credentials over TLS. Emulsion has no write path into your ERPs — it cannot post a journal, adjust a balance, or delete a record. Legacy systems are extracted in supervised sessions alongside your team, then verified before anything is retired.",
    caption: "",
    illustration: <IngestionFig />,
  },
  {
    number: "03",
    title: "Who can see what",
    body: "Permissions are scoped by entity and enforced at the query layer, not the interface. SAML single sign-on ties access to your directory, so removing someone there removes them here. Emulsion staff hold no standing access — support sessions are requested, approved, time-boxed, and logged.",
    caption: "",
    illustration: <MatrixFig />,
  },
  {
    number: "04",
    title: "Migration integrity",
    body: "Retiring a system is the riskiest moment in this work, so it's the most controlled. Every record is reconciled against source, the old system runs in parallel until both agree, and the extraction report is yours to keep as audit evidence.",
    caption: "",
    illustration: <ReconcileFig />,
  },
  {
    number: "05",
    title: "Compliance & response",
    body: "SOC 2 Type II audited annually, penetration tested by an independent firm, with encrypted backups and tested restores. Incidents are triaged on a documented runbook and customers are notified directly — no status-page-only disclosures.",
    extra: (
      <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm font-medium text-primary-green-700">
        <a href="#" className="hover:underline">
          Security package &rarr;
        </a>
        <a href="#" className="hover:underline">
          Subprocessors &rarr;
        </a>
        <a href="mailto:security@emulsionfs.com" className="hover:underline">
          security@emulsionfs.com
        </a>
      </div>
    ),
    caption: "",
    illustration: <DocumentsFig />,
  },
];

export default function SecurityOverview() {
  return (
    <section className="bg-white text-[#141414]">
      <div className="mx-auto max-w-screen-2xl px-6 lg:px-10">
        {ROWS.map((row, i) => (
          <div
            key={row.number}
            className={`grid gap-10 py-16 lg:grid-cols-[1.4fr_1fr] lg:gap-16 ${
              i > 0 ? "border-t border-slate-200" : ""
            }`}
          >
            {/* Left: number + copy */}
            <div className="flex gap-6">
              <span className="w-6 shrink-0 pt-2 font-mono text-xs text-slate-400">
                {row.number}
              </span>
              <div>
                <h3 className="font-serif text-2xl font-semibold text-dark-background sm:text-3xl">
                  {row.title}
                </h3>
                <p className="mt-4 max-w-lg text-base leading-7 text-slate-500">
                  {row.body}
                </p>
                {row.extra}
              </div>
            </div>

            {/* Right: figure */}
            <Figure caption={row.caption}>{row.illustration}</Figure>
          </div>
        ))}
      </div>
    </section>
  );
}
