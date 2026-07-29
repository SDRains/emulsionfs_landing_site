import {
  SearchIcon,
  ClockIcon,
  ArchiveIcon,
  BlendIcon,
  KeyIcon,
  ShieldCheckIcon,
} from "lucide-react";

const BENEFITS = [
  {
    icon: SearchIcon,
    title: "Search everything",
    body: "Any record, any platform, without knowing where it lives.",
  },
  {
    icon: ClockIcon,
    title: "Reports in hours",
    body: "Consolidated across entities, no manual reconciliation.",
  },
  {
    icon: ArchiveIcon,
    title: "Keep data forever",
    body: "Retire the software; every record preserved.",
  },
  {
    icon: BlendIcon,
    title: "Live × historical",
    body: "Compare performance against history in real time.",
  },
  {
    icon: KeyIcon,
    title: "One login",
    body: "Every system behind a single door.",
  },
  {
    icon: ShieldCheckIcon,
    title: "Secure by design",
    body: "Dedicated, encrypted databases for your data alone.",
  },
];

export default function Benefits() {
  return (
    <section className="bg-white text-[#141414]">
      <div className="mx-auto max-w-7xl px-6 py-28 lg:px-10">
        {/*<p className="text-center font-mono text-sm font-semibold tracking-[0.2em] text-blue-600">*/}
        {/*  KEY BENEFITS*/}
        {/*</p>*/}
        <h2 className="mx-auto mt-6 max-w-4xl text-center font-serif text-4xl font-semibold text-dark-blue sm:text-5xl lg:text-6xl">
          Everything, finally in <br/><span className='text-cyan-600 italic'>one place.</span>
        </h2>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {BENEFITS.map((b) => {
            const Icon = b.icon;
            return (
              <div key={b.title} className="rounded-2xl bg-primary-cream p-8">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white shadow-sm">
                  <Icon className="h-5 w-5 text-dark-blue" />
                </div>
                <h3 className="mt-6 text-lg font-bold text-cyan-600">
                  {b.title}
                </h3>
                <p className="mt-2 text-base leading-7 text-slate-500">
                  {b.body}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
