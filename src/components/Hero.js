import DashboardMockup from "@/components/DashboardMockup";

const TRUST = ["SOC 2 Type II", "Dedicated Migration Expert", "30-min Complimentary Audit"];

export default function Hero() {
  return (
    <>
    <section
      className="bg-primary-cream"
      style={{
        background:
          "radial-gradient(60% 45% at 50% -5%, rgba(99,102,241,0.10), transparent 70%), #f7f4ec",
      }}
    >
      <div className="mx-auto max-w-4xl px-6 py-24 text-center lg:py-32 -mt-24">
        {/*<p className="font-mono text-xs font-semibold tracking-[0.2em] text-blue-600 sm:text-sm">*/}
        {/*  THE FINANCIAL DATA LAYER FOR ACQUISITIVE ORGANIZATIONS*/}
        {/*</p>*/}

        <h1 className="font-serif text-5xl leading-[1.1] tracking-tight text-[#0f2038] sm:text-6xl md:text-7xl font-semibold pt-20">
          All your financial data.
          <br />
          <span className="italic text-cyan-600">One source of truth.</span>
        </h1>

        <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-slate-500">
          Emulsion unifies JD Edwards, Sage Intacct, QuickBooks and every other
          platform you&apos;ve inherited into one searchable, permanent source of
          financial truth.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="/contact?intent=demo"
            className="rounded-full bg-[#0b1a2e] px-7 py-3.5 text-base font-semibold text-white transition-colors hover:bg-[#152a45]"
          >
            Book a demo
          </a>
          <a
            href="#how-it-works"
            className="group inline-flex items-center gap-2 rounded-full border border-slate-300 px-7 py-3.5 text-base font-semibold text-[#0f2038] transition-colors hover:bg-black/[0.03]"
          >
            See how it works
            <span className="transition-transform group-hover:translate-x-1">
              &rarr;
            </span>
          </a>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-slate-500">
          {TRUST.map((item) => (
            <span key={item} className="inline-flex items-center gap-2">
              <span className="h-3.5 w-3.5 rounded-full border-2 border-blue-500/50" />
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* Dashboard window: sits below the copy and overflows downward (via the
          negative bottom margin) so its lower portion straddles onto the navy
          band that follows. Tune the -mb / navy pt pair together to move the
          cream→navy seam up or down across the window. */}
      <div className="relative z-10 mx-auto -mb-24 mt-0 sm:-mt-16 max-w-5xl px-6 sm:-mb-36 lg:-mb-60">
        <DashboardMockup />
      </div>
    </section>
    </>
  );
}
