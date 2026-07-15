export default function IntegrationsCta() {
  return (
    <section className="bg-primary-cream text-[#141414]">
      <div className="mx-auto max-w-4xl px-6 py-28 text-center lg:px-10">
        <h2 className="font-serif text-4xl font-semibold leading-tight text-dark-blue sm:text-5xl lg:text-6xl">
          Every system in.
          <br />
          <span className="italic text-cyan-600">Every report out.</span>
        </h2>

        <p className="mx-auto mt-6 max-w-xl text-lg text-slate-500">
          Bring your list of platforms and the reports you owe — we&apos;ll map
          both.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#book-a-demo"
            className="rounded-full bg-dark-blue px-7 py-3.5 text-base font-semibold text-white transition-colors hover:bg-[#152a45]"
          >
            Book a demo
          </a>
          <a
            href="#talk-to-sales"
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
