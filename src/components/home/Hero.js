import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";
import DashboardMockup from "@/components/home/DashboardMockup";
import LogoMarquee from "@/components/home/LogoMarquee";

const LOGOS = [
  { src: "/jde-logo.png", alt: "JD Edwards", height: 46 },
  { src: "/sage-logo.svg", alt: "Sage Intacct", height: 34 },
  { src: "/qb-logo.png", alt: "QuickBooks", height: 34 },
  { src: "/netsuite-logo.jpg", alt: "Oracle NetSuite", height: 30 },
  { src: "/ms_dynamics.svg.webp", alt: "Microsoft Dynamics 365", height: 34 },
];

// Deep forest at the top (behind the nav and headline) fading to cream at the
// bottom, so the dashboard lifts off the light end and the logo strip sits on
// the same cream as the rest of the page.
const FOREST_GRADIENT =
  "linear-gradient(180deg, #132B1D 0%, #1F4430 30%, #356341 58%, #7FA889 80%, #D9E6D7 93%, #F7F4EC 100%)";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-primary-cream">
      <div style={{ background: FOREST_GRADIENT }}>
        <div className="mx-auto grid max-w-screen-2xl items-center gap-14 px-6 pt-36 pb-20 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-16 lg:px-10 lg:pt-48 lg:pb-24">
          {/* Copy */}
          <div className="max-w-xl">
            <h1 className="text-center font-new-serif text-5xl font-normal tracking-tight text-white sm:text-left sm:text-6xl sm:leading-[1.04] lg:text-[66px]">
              All your financial data.{" "}
              <span className="italic text-mint-200">One source of truth.</span>
            </h1>

            <p className="mt-7 max-w-lg text-center font-new-serif text-lg leading-8 text-white/80 sm:text-left">
              Emulsion unifies JD Edwards, Sage Intacct, QuickBooks and every
              other platform you&apos;ve inherited into one searchable,
              permanent source of financial truth.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-3 sm:justify-start">
              <Link
                href="/contact?intent=demo"
                className="inline-flex h-[54px] items-center rounded-full bg-primary-cream px-7 font-serif text-lg font-semibold text-forest-900 shadow-[0_8px_24px_rgba(8,24,15,0.25)] transition-colors hover:bg-white"
              >
                Book a demo
              </Link>
              <Link
                href="/product"
                className="group inline-flex h-[54px] items-center gap-2.5 rounded-full border border-white/30 bg-forest-900/35 px-[26px] font-serif text-lg font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/15"
              >
                See how it works
                <ArrowRightIcon
                  aria-hidden="true"
                  className="size-[18px] transition-transform group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>

          {/* Product screenshot */}
          <div className="min-w-0">
            <DashboardMockup />
          </div>
        </div>
      </div>

      {/* Logo marquee — sits on the cream end of the gradient */}
      <div className="mx-auto max-w-screen-2xl px-6 pt-2 pb-16 lg:px-10">
        <p className="mb-7 text-center font-serif text-[17px] text-forest-ink/75">
          Finance teams unify the systems they&apos;ve inherited with Emulsion
        </p>
        <LogoMarquee logos={LOGOS} />
      </div>
    </section>
  );
}
