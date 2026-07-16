export default function ProductCta() {
  return (
    <section className="bg-primary-cream text-[#141414]">
      <div className="mx-auto max-w-4xl px-6 py-28 text-center lg:px-10">
        <h2 className="font-serif text-4xl font-semibold leading-tight text-dark-blue sm:text-5xl lg:text-6xl">
          Tell us what you&apos;re running.
          <br />
          <span className="italic text-cyan-600">
            We&apos;ll map the way out.
          </span>
        </h2>

        <p className="mx-auto mt-6 max-w-xl text-lg text-slate-500">
          A 30-minute call with a consultant — bring your list of systems.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="/contact?intent=demo"
            className="rounded-full bg-dark-blue px-7 py-3.5 text-base font-semibold text-white transition-colors hover:bg-[#152a45]"
          >
            Book a demo
          </a>
          <a
            href="/contact?intent=sales"
            className="rounded-full border border-slate-300 px-7 py-3.5 text-base font-semibold text-dark-blue transition-colors hover:bg-black/[0.03]"
          >
            Talk to sales
          </a>
        </div>

        <p className="mt-10 font-mono text-xs font-semibold tracking-[0.15em] text-slate-400">
          30-MIN WALKTHROUGH · YOUR SYSTEMS, LIVE · NO COMMITMENT
        </p>
      </div>
    </section>
  );
}
