const SEGMENTS = [
  {
    number: "01",
    title: "Private equity firms & portfolios",
    body: "Every acquisition adds another system; Emulsion consolidates them all, across the whole portfolio.",
  },
  {
    number: "02",
    title: "Infrastructure & utility roll-ups",
    body: "Regulated, audit-heavy environments where a permanent, accurate financial record is essential.",
  },
  {
    number: "03",
    title: "Holding companies & multi-entity operators",
    body: "One view across every entity you own.",
  },
  {
    number: "04",
    title: "Any multi-system organization",
    body: "If your financial data is split across platforms, Emulsion brings it together.",
  },
];

export default function Audience() {
  return (
    <section className="bg-primary-cream text-[#141414]">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        {/*<p className="font-mono text-sm font-semibold tracking-[0.2em] text-blue-600">*/}
        {/*  WHO IT&apos;S FOR*/}
        {/*</p>*/}
        <h2 className="mt-6 max-w-4xl text-5xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl">
          Built for organizations that grew through acquisition.
        </h2>

        <div className="mt-16">
          {SEGMENTS.map((s) => (
            <div
              key={s.number}
              className="grid gap-x-12 gap-y-2 border-b border-slate-200 py-8 md:grid-cols-[3rem_minmax(0,24rem)_minmax(0,1fr)] md:items-start md:py-10"
            >
              <span className="font-mono text-sm text-cyan-600">
                {s.number}
              </span>
              <h3 className="text-xl font-bold text-[#141414]">{s.title}</h3>
              <p className="text-lg leading-8 text-slate-500">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
