import { ArrowRightIcon } from "lucide-react";

export default function Proof() {
  return (
    <section aria-labelledby="proof-heading" className="bg-primary-cream px-6 pb-24 lg:pb-32">
      <div className="relative mx-auto max-w-[1240px] overflow-hidden rounded-[40px] bg-linear-135 from-forest-800 via-forest-900 to-forest-950 px-8 py-14 text-white sm:px-16 sm:py-18">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-52 -right-52 h-[700px] w-[700px] rounded-full bg-[radial-gradient(closest-side,rgba(212,245,122,0.25),transparent)]"
        />
        <div className="relative grid items-center gap-x-18 gap-y-10 lg:grid-cols-2">
          <div>
            <h2 id="proof-heading" className="text-[15px] font-semibold text-mint-200">
              How one utility acquirer cut reporting time
            </h2>
            <p className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-2 font-new-serif text-6xl leading-none sm:text-8xl">
              <span className="text-white/40 line-through decoration-[3px]">Weeks</span>
              <ArrowRightIcon className="size-10 text-mint-200" strokeWidth={1.8} aria-label="to" />
              <span className="text-gradient-lime italic">Hours</span>
            </p>
          </div>
          <div className="border-white/15 lg:border-l lg:pl-8">
            <p className="font-new-serif text-[22px] leading-relaxed text-white/90">
              A serial acquirer of Southwest U.S. utility companies ran every
              entity on a different accounting system. Emulsion connected them
              all behind one login, with history extracted and preserved and live
              systems connected by API.
            </p>
            <p className="mt-5 text-[15px] leading-relaxed text-white/65">
              Reports that took weeks now take hours, built on data the team can trust.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
