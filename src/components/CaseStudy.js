import {ArrowDownIcon, ArrowRightIcon} from "lucide-react";

export default function CaseStudy() {
  return (
    <div className='px-4 ms:px-0 pt-8 pb-24 bg-primary-cream'>
      <div className='max-w-screen-2xl mx-auto'>
        <section className="bg-[#0b1a2e] text-white rounded-4xl shadow-2xl">
          <div className="p-8 lg:p-12">
            <div className="grid gap-14 lg:grid-cols-2 lg:items-center lg:gap-20">
              {/* Left: headline stat */}
              <div className='space-y-8 sm:space-x-6 text-center sm:text-left'>
                <p className="font-mono text-sm font-semibold tracking-[0.2em] text-cyan-400">
                  CASE STUDY
                </p>
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 items-center'>
                  <p className="text-white text-7xl text-center">Weeks</p>
                  <div className='flex justify-center'>
                    <ArrowRightIcon className='size-12 text-slate-400 hidden sm:inline' />
                    <ArrowDownIcon className='size-12 text-slate-400 inline sm:hidden' />
                  </div>
                  <p className="text-cyan-600 text-7xl text-center lg:text-left">Hours</p>
                </div>
                {/*<p className="font-mono text-sm tracking-[0.2em] text-slate-500">*/}
                {/*  REPORT GENERATION TIME*/}
                {/*</p>*/}
              </div>

              {/* Right: the story, hung off a vertical rule */}
              <div className="lg:border-l lg:border-white/10 lg:pl-12">
                <p className="text-lg leading-8 text-slate-300">
                  A serial acquirer of Southwest U.S. utility companies ran every entity
                  on a different accounting system. Emulsion connected them all behind
                  one login — historical data extracted and preserved, live systems
                  connected by API. Reports that took weeks now take hours,
                  from data the team can trust.
                </p>
                {/*<p className="mt-8 text-lg leading-8 text-slate-400">*/}
                {/*  Emulsion connected every system — extracting historical data from*/}
                {/*  some into a secure database, connecting live to others by API —*/}
                {/*  behind one login. Report generation dropped from weeks to a few*/}
                {/*  hours, and the team now works from live, accurate data they can*/}
                {/*  compare against their full history in real time.*/}
                {/*</p>*/}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
