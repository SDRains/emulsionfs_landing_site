export default function Solution() {
  return (
    <section className="bg-white text-[#141414]">
      <div className="mx-auto max-w-screen-2xl px-6 py-16 lg:px-10">
        <div className='grid grid-cols-1 lg:grid-cols-5 gap-4 lg:gap-8 items-start pt-6'>
            <div className='lg:col-span-2'>
                <h2 className="text-5xl font-semibold font-new-serif leading-[1.1] tracking-tight sm:text-6xl text-left">
                    Consolidate every system you run into one.
                </h2>
                <p className="mt-8 max-w-3xl mx-auto text-lg leading-8 text-slate-500 text-left">
                    Connect your platforms once and Emulsion becomes the single place to
                    search, report, and retain your financial data no matter which
                    system it originated from. See all of your live and historical data,
                    all together.
                </p>
            </div>

            <div className='lg:col-span-3'>
                <div className='flex justify-center'>
                    <img src='/emulsion-web.png' className='w-full h-auto object-cover' />
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}
