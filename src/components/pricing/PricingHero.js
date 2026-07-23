export default function PricingHero() {
  return (
    <section
      className="bg-primary-cream text-[#141414]"
      style={{
        background:
          "radial-gradient(50% 45% at 50% 0%, rgba(120,127,150,0.12), transparent 70%), #f7f4ec",
      }}
    >
      <div className="mx-auto max-w-7xl px-6 py-24 text-center lg:px-10 lg:py-32">
        {/*<p className="font-mono text-sm font-semibold tracking-[0.2em] text-blue-600">*/}
        {/*  PRICING*/}
        {/*</p>*/}

        <h1 className="font-serif text-5xl font-semibold leading-[1.05] text-dark-blue sm:text-6xl lg:text-7xl">
          Priced to your environment,
          <br />
          <span className="italic text-cyan-600">not a pricing table.</span>
        </h1>

        <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-slate-500">
          No two inherited system landscapes are alike — so we don&apos;t pretend
          one price fits them. Tell us what you&apos;re running, and we&apos;ll
          scope a clear path forward with a fixed proposal. No surprises, no
          per-seat games.
        </p>
      </div>
    </section>
  );
}
