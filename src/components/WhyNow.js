const REASONS = [
  {
    title: "Consolidation is accelerating",
    body: "More acquisitions across fragmented industries mean more financial fragmentation.",
  },
  {
    title: "Software-cost scrutiny is up",
    body: "Organizations are actively hunting redundant subscriptions and legacy-system spend.",
  },
  {
    title: "Finance moves in real time",
    body: "Weeks-long manual reconciliation no longer clears the bar.",
  },
  {
    title: "The technology is ready",
    body: "Modern platforms expose APIs that make live unification feasible in a way it wasn't a decade ago.",
  },
];

export default function WhyNow() {
  return (
    <section className="bg-white text-[#141414]">
      <div className="mx-auto max-w-7xl px-6 py-28 lg:px-10">
        {/*<p className="font-mono text-sm font-semibold tracking-[0.2em] text-blue-600">*/}
        {/*  WHY NOW*/}
        {/*</p>*/}
        <h2 className="mt-6 max-w-4xl text-5xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl">
          The pain is rising and the enabling technology has arrived.
        </h2>

        <div className="mt-20 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {REASONS.map((r) => (
            <div key={r.title} className="border-t-2 border-cyan-600 pt-6">
              <h3 className="text-lg font-bold text-[#141414]">{r.title}</h3>
              <p className="mt-4 text-base leading-7 text-slate-500">{r.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
