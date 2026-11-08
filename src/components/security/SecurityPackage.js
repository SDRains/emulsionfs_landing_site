import { ClipboardCheckIcon, FileTextIcon, ShieldCheckIcon, UsersIcon } from "lucide-react";

const PACKAGE_MAILTO = "mailto:security@emulsionfs.com?subject=Security%20package%20request";

const DOCS = [
  { icon: ShieldCheckIcon, title: "Security overview", sub: "Architecture, controls and data flows", accent: true },
  { icon: ClipboardCheckIcon, title: "Questionnaire answers", sub: "Pre-filled for your vendor review" },
  { icon: UsersIcon, title: "Subprocessors", sub: "Who touches what, and where" },
  { icon: FileTextIcon, title: "Data processing agreement", sub: "Ready to sign" },
];

export default function SecurityPackage() {
  return (
    <section
      id="package"
      aria-labelledby="package-heading"
      className="relative scroll-mt-28 overflow-hidden bg-forest-950 px-6 py-28 text-white lg:py-34"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-[420px] left-1/2 h-[800px] w-[1400px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(212,245,122,0.3),rgba(70,131,88,0.25)_45%,transparent_75%)]"
      />
      <div className="relative mx-auto grid max-w-[1240px] items-center gap-x-18 gap-y-12 lg:grid-cols-2">
        <div>
          <h2
            id="package-heading"
            className="font-new-serif text-5xl font-normal leading-[1.02] tracking-tight sm:text-6xl lg:text-[64px]"
          >
            Your security team will have questions.{" "}
            <span className="text-gradient-lime italic">We’ve got answers.</span>
          </h2>
          <p className="mt-6 max-w-[480px] text-lg leading-relaxed text-white/70">
            Send us your questionnaire, or start with the package most reviews
            ask for.
          </p>
          <div className="mt-9 flex flex-wrap gap-3 font-serif">
            <a
              href={PACKAGE_MAILTO}
              className="inline-flex h-14 items-center rounded-full bg-primary-cream px-[30px] text-lg font-semibold text-forest-900 shadow-[0_0_40px_rgba(212,245,122,0.35)] transition-colors hover:bg-white"
            >
              Request the package
            </a>
            <a
              href="mailto:security@emulsionfs.com"
              className="inline-flex h-14 items-center rounded-full border border-white/30 px-7 text-lg font-semibold text-white transition-colors hover:bg-white/10"
            >
              security@emulsionfs.com
            </a>
          </div>
        </div>

        <div className="rounded-[28px] border border-white/12 bg-white/5 p-5 shadow-[0_40px_80px_-24px_rgba(0,0,0,0.4)] sm:p-7">
          <h3 className="px-3 pb-3.5 text-sm font-semibold text-white/70">In the security package</h3>
          <ul className="flex flex-col gap-1">
            {DOCS.map((d) => {
              const Icon = d.icon;
              return (
                <li key={d.title} className="flex items-center gap-3.5 rounded-2xl px-3 py-3.5">
                  <span
                    aria-hidden="true"
                    className={`flex size-11 flex-none items-center justify-center rounded-xl ${
                      d.accent ? "bg-lime-accent text-forest-900" : "bg-mint-200/16 text-mint-200"
                    }`}
                  >
                    <Icon className="size-5" strokeWidth={2} />
                  </span>
                  <span>
                    <span className="block text-base font-semibold">{d.title}</span>
                    <span className="mt-0.5 block text-[13px] text-white/60">{d.sub}</span>
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
