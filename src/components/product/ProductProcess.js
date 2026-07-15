const STEPS = [
  {
    week: "WEEK 1–2",
    title: "Discovery",
    body: "We inventory every system, entity, and report your team produces today — and what it should look like tomorrow.",
  },
  {
    week: "WEEK 3–4",
    title: "Mapping",
    body: "Charts of accounts aligned across entities. Your consolidation logic, encoded once — not rebuilt every quarter.",
  },
  {
    week: "WEEK 5–8",
    title: "Connection & migration",
    body: "Live systems connected by API; legacy systems fully extracted and verified against source, record by record.",
  },
  {
    week: "ONGOING",
    title: "Go-live & beyond",
    body: "Your team trained, your first consolidated close supported, and a named consultant for every acquisition after.",
  },
];

export default function ProductProcess() {
  return (
    <section className="bg-dark-blue text-white">
      <div className="mx-auto max-w-7xl px-6 py-28 lg:px-10">
        <h2 className="font-serif text-4xl font-semibold leading-tight sm:text-5xl">
          <span className="text-primary-cream">
            Not a login and a link to the docs.
          </span>
          <br />
          <span className="italic text-cyan-600">
            A team that maps your business.
          </span>
        </h2>

        <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-300">
          Every acquisitive organization is structured differently. Our
          consultants work with your finance team to understand your entities,
          your reporting needs, and your close process — then configure Emulsion
          to match.
        </p>

        {/* Timeline */}
        <div className="mt-16 border-t border-white/10 pt-10">
          <div className="grid gap-y-10 md:-mx-8 md:grid-cols-4">
            {STEPS.map((s, i) => (
              <div
                key={s.title}
                className={`md:px-8 ${
                  i > 0 ? "md:border-l md:border-white/10" : ""
                }`}
              >
                <p className="font-mono text-xs font-semibold tracking-[0.2em] text-cyan-400">
                  {s.week}
                </p>
                <h3 className="mt-5 font-serif text-2xl font-semibold text-primary-cream">
                  {s.title}
                </h3>
                <p className="mt-4 text-base leading-7 text-slate-400">
                  {s.body}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Callout */}
        <div className="mt-16 flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] px-6 py-5 sm:px-8">
          <img src='/emulsion_logo_dark.png' className='h-8 w-auto object-cover' />

          <p className="text-base leading-7 text-slate-300">
            <span className="font-semibold text-white">New acquisition?</span>{" "}
            Adding an entity is a scoped engagement, not a new project — most are
            connected and reporting within weeks.
          </p>
        </div>
      </div>
    </section>
  );
}
