// Each step's marker shifts from brand green toward lime as onboarding
// progresses; the last one glows to signal "live".
const STEPS = [
  {
    when: "Weeks 1–2",
    title: "Discovery",
    body: "We inventory every system, entity and report your team produces today, and what it should look like tomorrow.",
    color: "#468358",
  },
  {
    when: "Weeks 3–4",
    title: "Mapping",
    body: "Charts of accounts aligned across entities. Your consolidation logic encoded once, not rebuilt every quarter.",
    color: "#5E9E6C",
  },
  {
    when: "Weeks 5–8",
    title: "Connection & migration",
    body: "Live systems connected by API. Legacy systems fully extracted and verified against source, record by record.",
    color: "#8FCB86",
  },
  {
    when: "Ongoing",
    title: "Go-live & beyond",
    body: "Your team trained, your first consolidated close supported and a named consultant for every acquisition after.",
    color: "#D4F57A",
    live: true,
  },
];

function StepMarker({ color, live }) {
  return (
    <span
      aria-hidden="true"
      className={`relative block size-11 rounded-full border-2 ${
        live ? "bg-forest-900 shadow-[0_0_24px_rgba(212,245,122,0.6)]" : "bg-primary-cream"
      }`}
      style={{ borderColor: color }}
    >
      <span className="absolute inset-2.5 rounded-full" style={{ background: color }} />
    </span>
  );
}

export default function ProductProcess() {
  return (
    <section aria-labelledby="process-heading" className="bg-primary-cream px-6 py-24 text-forest-ink lg:py-32">
      <div className="mx-auto max-w-[1240px]">
        <div className="grid items-end gap-x-18 gap-y-6 lg:grid-cols-2">
          <h2
            id="process-heading"
            className="font-new-serif text-4xl font-normal leading-[1.06] tracking-tight sm:text-5xl lg:text-[56px]"
          >
            Not a login and a link to the docs.{" "}
            <span className="italic text-primary-green-700">A team that maps your business.</span>
          </h2>
          <p className="text-[17px] leading-relaxed text-forest-ink/75">
            Every acquisitive organization is structured differently. Our
            consultants work with your finance team to understand your entities,
            reporting needs and close process, then configure Emulsion to match.
          </p>
        </div>

        <div className="relative mt-18">
          <div
            aria-hidden="true"
            className="absolute top-[21px] right-[22px] left-[22px] hidden h-0.5 bg-linear-to-r from-primary-green-600 via-[#8FCB86] to-lime-accent lg:block"
          />
          <ol className="relative grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {STEPS.map((s) => (
              <li key={s.title}>
                <StepMarker color={s.color} live={s.live} />
                <p className="mt-6 text-[13px] font-semibold text-primary-green-700">{s.when}</p>
                <h3 className="mt-1.5 font-new-serif text-[26px] font-normal">{s.title}</h3>
                <p className="mt-2.5 text-[15px] leading-relaxed text-forest-ink/75">{s.body}</p>
              </li>
            ))}
          </ol>
        </div>

        <div className="mt-16 flex flex-wrap items-center gap-x-8 gap-y-5 rounded-3xl bg-forest-900 px-8 py-7 text-white">
          <img src="/emulsion_logo_dark_no_footer.png" alt="" aria-hidden="true" className="h-[30px] w-auto" />
          <p className="flex-1 basis-[420px] text-base leading-relaxed text-white/80">
            <span className="font-semibold text-lime-accent">New acquisition?</span> Adding
            an entity is a scoped engagement, not a new project. Most are connected
            and reporting within weeks.
          </p>
        </div>
      </div>
    </section>
  );
}
