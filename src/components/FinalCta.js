import {ArrowRightIcon} from "lucide-react";

export default function FinalCta() {
  return (
    <section className="bg-dark-background text-white">
      <div className="mx-auto max-w-screen-2xl px-6 py-20 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div>
            <h2 className="font-serif text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl">
            <span className="text-primary-cream">
              See all your financial data
            </span>
              <span className="italic text-primary-green-600 ml-3">as one.</span>
            </h2>

            <p className="text-lg leading-8 text-slate-400 pt-8">
              Curious how we would consolidate your systems? Book a
              complimentary, no-obligation 30-minute demo.
            </p>

            <div className="mt-6 flex flex-wrap gap-4">
              <a
                  href="/contact?intent=demo"
                  className="bg-white px-7 py-3.5 text-base font-semibold text-dark-blue transition-colors hover:bg-primary-cream"
              >
                Book a demo
              </a>
              <a
                  href="/contact?intent=sales"
                  className="border border-white/25 px-7 py-3.5 text-base font-semibold text-white transition-colors hover:bg-white hover:text-dark-background items-center flex gap-2"
              >
                Talk to sales <ArrowRightIcon className='size-4' />
              </a>
            </div>
          </div>

          <div className=''>
            <img src='/product_designs/computer_mockup_cropped_minor.png' className='w-full h-auto object-cover rounded-xl shadow-xl shadow-white/5' />
          </div>
        </div>
      </div>
    </section>
  );
}
