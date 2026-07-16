export default function ProductHero() {
  return (
    <section
      className="bg-primary-cream text-[#141414]"
      style={{
        background:
          "radial-gradient(45% 45% at 78% 12%, rgba(120,127,150,0.14), transparent 70%), #f7f4ec",
      }}
    >
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:pt-18 lg:pb-32">
        {/*<p className="font-mono text-sm font-semibold tracking-[0.2em] text-blue-600">*/}
        {/*  PRODUCT*/}
        {/*</p>*/}

        <h1 className="mt-8 max-w-4xl font-serif text-5xl font-semibold leading-[1.05] text-dark-blue sm:text-6xl lg:text-7xl">
          Every system you&apos;ve inherited,
          <br />
          <span className="italic text-cyan-600">handled end to end.</span>
        </h1>

        <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-500">
          Emulsion isn&apos;t just software — it&apos;s the connections, the
          migration, and the people who get you there. From the first discovery
          call to the day you retire your last legacy subscription.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="/contact?intent=demo"
            className="rounded-full bg-cyan-600 px-7 py-3.5 text-base font-semibold text-white transition-colors hover:bg-cyan-500"
          >
            Book a demo
          </a>
          <a
            href="/contact?intent=sales"
            className="group inline-flex items-center gap-2 rounded-full border border-slate-300 px-7 py-3.5 text-base font-semibold text-dark-blue transition-colors hover:bg-black/[0.03]"
          >
            Talk to a consultant
            <span className="transition-transform group-hover:translate-x-1">
              &rarr;
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
