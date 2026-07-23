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

export default function WhoItsFor() {
    return (
        <section className="bg-primary-cream text-[#141414]">
            <div className="mx-auto max-w-screen-2xl px-6 py-20 lg:px-10 space-y-8 lg:space-y-16">
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
                    <h2 className="mt-6 max-w-4xl text-5xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl">
                        Built for organizations that grew through acquisition.
                    </h2>

                    <div className="grid grid-cols-2 gap-0">
                        {SEGMENTS.map((s, i) => (
                            <div
                                key={s.number}
                                className={`p-4 border-neutral-200 ${
                                    i % 2 === 0 ? 'border-r' : ''
                                } ${i < 2 ? 'border-b' : ''}`}
                            >
            <span className="font-mono text-sm text-cyan-600">
                {s.number}
            </span>
                                <h3 className="text-base font-bold text-[#141414]">{s.title}</h3>
                                <p className="text-sm text-slate-500">{s.body}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 border-t border-neutral-200 pt-6'>
                    {REASONS.map((r) => (
                        <div key={r.title} className="py-8 sm:py-4">
                            <h3 className="text-lg font-bold text-[#141414]">{r.title}</h3>
                            <p className="mt-4 text-base leading-7 text-slate-500">{r.body}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}