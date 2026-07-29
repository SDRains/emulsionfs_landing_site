export default function FinalCta() {
  return (
    <section className="bg-dark-background text-white">
      <div className="mx-auto max-w-screen-2xl px-6 py-24 lg:px-10 lg:py-28">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
          {/* Left: heading */}
          <h2 className="font-serif text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl">
            <span className="text-primary-cream">
              See all your financial data
            </span>
            <span className="italic text-primary-green-600 ml-3">as one.</span>
          </h2>

          {/* Right: copy + actions */}
          <div>
            <p className="max-w-md text-lg leading-8 text-slate-400">
              Curious how we would consolidate your systems? Book a
              complimentary, no-obligation 30-minute demo.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="/contact?intent=demo"
                className="rounded-sm bg-primary-cream px-7 py-3.5 text-base font-semibold text-dark-blue transition-colors hover:bg-white"
              >
                Book a demo
              </a>
              <a
                href="/contact?intent=sales"
                className="rounded-sm border border-white/25 px-7 py-3.5 text-base font-semibold text-white transition-colors hover:bg-white/5"
              >
                Talk to sales
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
