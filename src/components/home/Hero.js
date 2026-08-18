import DashboardMockup from "@/components/home/DashboardMockup";
import ImageMarquee from "@/components/home/Marquee";
import {PrimaryCTAButton, PrimarySubCTAButton} from "@/components/global/buttons";

const LOGOS = [
  { src: "/jde-logo.png", alt: "JD Edwards" },
  { src: "/sage-logo.svg", alt: "Sage Intacct" },
  { src: "/qb-logo.png", alt: "QuickBooks" },
  { src: "/netsuite-logo.jpg", alt: "NetSuite" },
];

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        background:
          "radial-gradient(75% 85% at 6% 82%, rgba(233,164,120,0.55), transparent 58%)," +
          "linear-gradient(120deg, #F5E4F3 0%, #E9DCEC 28%, #C8DBDE 54%, #BDCC9E 78%, #468358 100%)",
      }}
    >
      <div className="mx-auto max-w-screen-2xl px-6 pt-16 pb-40 lg:px-10 lg:pt-12 lg:pb-40">
        <div className="grid items-center gap-0 grid-cols-1 lg:grid-cols-7 lg:gap-0">
          {/* Copy */}
          <div className="lg:col-span-3">
            <h1 className="font-new-serif text-5xl sm:text-5xl lg:text-6xl sm:leading-[1.1] text-center sm:text-left tracking-tight text-[#191919] font-normal">
              All your financial data. <span className="italic text-primary-green-600">One source of truth.</span>
            </h1>

            <p className="mt-8 max-w-lg text-lg font-new-serif leading-8 text-slate-600">
              Emulsion unifies JD Edwards, Sage Intacct, QuickBooks and every
              other platform you&apos;ve inherited into one searchable,
              permanent source of financial truth.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <PrimaryCTAButton content="Book a Demo" link="/contact?intent=demo" />
              <PrimarySubCTAButton content="See how it works" link="/product" />
            </div>
          </div>

          {/* Product screenshot */}
          <div className="lg:col-span-4 mt-12">
            <div className="relative z-0">
              <DashboardMockup />
            </div>
          </div>
        </div>
      </div>

      {/* Trust band — dark translucent pill floating over the indigo base of the
          gradient, echoing the mockup's logo rail. */}
      <div className="relative z-10 mx-auto -mt-24 max-w-screen-2xl px-6 pb-16 lg:px-10">
        <div className=" bg-dark-background/35 px-6 py-6 backdrop-blur-md ring-1 ring-white/10 sm:px-10">
          <div className="flex flex-col items-center gap-6 md:flex-row md:gap-10">
            <p className="max-w-xs shrink-0 text-center font-serif text-lg leading-snug text-white/90 md:text-left">
              Finance teams unify the systems they&apos;ve inherited with
              Emulsion
            </p>

            <ImageMarquee
                images={LOGOS}
                perView={LOGOS.length}
                gap={36}
                secondsPerImage={8}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
