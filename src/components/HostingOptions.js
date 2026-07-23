import { CloudIcon, ServerIcon } from "lucide-react";

const OPTIONS = [
  {
    title: 'Time to stand up',
    hosted: 'Fastest',
    your: 'Your infra timeline'
  },
  {
    title: 'Where data lives',
    hosted: 'Our platform, isolated option',
    your: 'Entirely in your network'
  },
  {
    title: 'Maintenance',
    hosted: 'We handle it',
    your: 'Your team, our support'
  },
  {
    title: 'Capabilities',
    hosted: 'Full product',
    your: 'Full product',
  }
]

export default function HostingOptions() {
  return (
    <section className="bg-white text-[#141414]">
      <div className="mx-auto max-w-screen-2xl px-6 py-32 lg:px-10">
        {/*<p className="text-center font-mono text-xs font-semibold tracking-[0.2em] text-cyan-600">*/}
        {/*  ONE PLATFORM, YOUR CHOICE OF ENVIRONMENT*/}
        {/*</p>*/}

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
          <div>
            <h2 className="mt-6 max-w-4xl text-5xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl">
              One platform, <span className="font-serif italic text-cyan-600 pl-2">your choice of environment.</span>
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-500">
              Emulsion is a single platform with two ways to run it. Let us host it
              for the fastest start, or deploy it inside your own environment so your
              data never leaves your network. Same product, same capabilities — you
              choose where it lives.
            </p>
          </div>

          <div>
            <table className="min-w-full divide-y divide-gray-300">
              <thead>
              <tr className="divide-x divide-gray-200">
                <th scope="col" className="py-3.5 pr-4 pl-4 text-left text-sm font-semibold text-gray-900 sm:pl-0">

                </th>
                <th scope="col" className="px-4 py-3.5 text-left text-base font-semibold text-gray-900">
                  <p className='flex items-center'>Emulsion-hosted <CloudIcon className="w-5 h-5 ml-2 text-cyan-600" /></p>
                </th>
                <th scope="col" className="px-4 py-3.5 text-left text-base font-semibold text-gray-900">
                  <p className='flex items-center'>Your Environment <ServerIcon className='w-5 h-5 ml-2 text-cyan-600' /></p>
                </th>
              </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
              {OPTIONS.map((option) => (
                  <tr key={option.title} className="divide-x divide-gray-200">
                    <td className="py-4 pr-4 pl-4 text-sm font-semibold whitespace-nowrap text-gray-900 sm:pl-0">
                      {option.title}
                    </td>
                    <td className={`p-4 text-sm whitespace-nowrap ${option.title === 'Capabilities' ? 'text-green-700' : 'text-gray-500'}`}>{option.hosted}</td>
                    <td className={`p-4 text-sm whitespace-nowrap ${option.title === 'Capabilities' ? 'text-green-700' : 'text-gray-500'}`}>{option.your}</td>
                  </tr>
              ))}
              </tbody>
            </table>
          </div>
        </div>

        {/*<div className="mt-12 grid gap-5 md:grid-cols-2">*/}
        {/*  {OPTIONS.map((o) => {*/}
        {/*    const Icon = o.icon;*/}
        {/*    return (*/}
        {/*      <div key={o.title} className="rounded-2xl bg-primary-cream p-7">*/}
        {/*        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-sm">*/}
        {/*          <Icon className="h-5 w-5 text-dark-blue" />*/}
        {/*        </div>*/}
        {/*        <h3 className="mt-5 text-lg font-bold text-dark-blue">*/}
        {/*          {o.title}*/}
        {/*        </h3>*/}
        {/*        <p className="mt-2 text-sm leading-6 text-slate-500">{o.body}</p>*/}
        {/*      </div>*/}
        {/*    );*/}
        {/*  })}*/}
        {/*</div>*/}
      </div>
    </section>
  );
}
