import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";

function PlatformScreenshot() {
  return (
    <div className="overflow-hidden rounded-[18px] bg-white shadow-[0_40px_80px_-24px_rgba(19,43,29,0.3)] ring-1 ring-forest-900/10">
      {/* Browser chrome */}
      <div aria-hidden="true" className="flex items-center gap-3 border-b border-[#ECEEE8] bg-[#F6F7F4] px-4 py-3">
        <div className="flex flex-1 gap-1.5">
          <span className="size-[11px] rounded-full bg-[#D5DAD2]" />
          <span className="size-[11px] rounded-full bg-[#D5DAD2]" />
          <span className="size-[11px] rounded-full bg-[#D5DAD2]" />
        </div>
        <div className="min-w-44 rounded-full border border-[#E3E6DF] bg-white px-3.5 py-1 text-center text-xs text-[#5E6B62]">
          app.emulsionfs.com
        </div>
        <div className="flex-1" />
      </div>
      <Image
        src="/product_designs/sage_platform_design.png"
        width={1537}
        height={909}
        sizes="(max-width: 1100px) 100vw, 1100px"
        priority
        className="block h-auto w-full"
        alt="Emulsion chart of accounts view for a Sage Intacct account, with balances, monthly activity and monthly balances"
      />
    </div>
  );
}

export default function ProductHero() {
  return (
    <section className="bg-primary-cream px-4 text-forest-ink">
      <div className="mx-auto max-w-[1240px] px-2 pt-36 text-center lg:pt-48">
        <h1 className="mx-auto max-w-[980px] font-new-serif text-5xl font-normal leading-[1.02] tracking-tight sm:text-6xl lg:text-[76px]">
          Every system you&apos;ve inherited,{" "}
          <span className="italic text-primary-green-700">handled end to end.</span>
        </h1>
        <p className="mx-auto mt-7 max-w-[660px] text-lg leading-relaxed text-forest-ink/75 sm:text-[19px]">
          Emulsion is more than software. It&apos;s the connections, the
          migration and the team that gets you there, from the first discovery
          call to the day you retire your last legacy subscription.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-3 font-serif">
          <Link
            href="/contact?intent=demo"
            className="inline-flex h-[54px] items-center rounded-full bg-primary-green-600 px-7 text-lg font-semibold text-white shadow-[0_8px_24px_rgba(53,99,65,0.28)] transition-colors hover:bg-primary-green-700"
          >
            Book a demo
          </Link>
          <Link
            href="/contact?intent=sales"
            className="group inline-flex h-[54px] items-center gap-2.5 rounded-full border border-forest-ink/20 bg-white/55 px-[26px] text-lg font-semibold text-forest-ink transition-colors hover:bg-white"
          >
            Talk to a consultant
            <ArrowRightIcon
              aria-hidden="true"
              className="size-[18px] transition-transform group-hover:translate-x-1"
            />
          </Link>
        </div>
      </div>

      <div className="mx-auto max-w-[1100px] px-2 pt-18 pb-22">
        <PlatformScreenshot />
      </div>
    </section>
  );
}
