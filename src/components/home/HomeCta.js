import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";

export default function HomeCta() {
  return (
    <section
      aria-labelledby="home-cta-heading"
      className="relative overflow-hidden bg-forest-950 px-6 py-28 text-center text-white lg:py-36"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-[420px] left-1/2 h-[800px] w-[1400px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(212,245,122,0.35),rgba(70,131,88,0.25)_45%,transparent_75%)]"
      />
      <div className="relative mx-auto max-w-3xl">
        <h2
          id="home-cta-heading"
          className="font-new-serif text-5xl font-normal leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl"
        >
          See all your financial data{" "}
          <span className="text-gradient-lime italic">as one.</span>
        </h2>
        <p className="mx-auto mt-6 max-w-lg text-lg leading-relaxed text-white/70">
          Curious how we&apos;d consolidate your systems? Book a free,
          no-obligation 30-minute demo.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-3 font-serif">
          <Link
            href="/contact?intent=demo"
            className="inline-flex h-14 items-center rounded-full bg-primary-cream px-[30px] text-lg font-semibold text-forest-900 shadow-[0_0_40px_rgba(212,245,122,0.35)] transition-colors hover:bg-white"
          >
            Book a demo
          </Link>
          <Link
            href="/contact?intent=sales"
            className="group inline-flex h-14 items-center gap-2.5 rounded-full border border-white/30 px-7 text-lg font-semibold text-white transition-colors hover:bg-white/10"
          >
            Talk to sales
            <ArrowRightIcon
              className="size-[18px] transition-transform group-hover:translate-x-1"
              aria-hidden="true"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
