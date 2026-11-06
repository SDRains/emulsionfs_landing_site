import { ArrowRightIcon, ClockIcon, MailIcon, ShieldCheckIcon, UsersIcon } from "lucide-react";

// Markers shift from brand green to lime down the timeline; the last glows.
const NEXT_STEPS = [
  {
    icon: ClockIcon,
    title: "One business day",
    body: "We reply within one business day, usually sooner.",
    marker: "border-primary-green-600 bg-white text-primary-green-700",
  },
  {
    icon: UsersIcon,
    title: "30 minutes, your systems",
    body: "A working session with a consultant, not a pitch deck. We'll show Emulsion against the stack you actually run.",
    marker: "border-[#8FCB86] bg-white text-primary-green-700",
  },
  {
    icon: ShieldCheckIcon,
    title: "No commitment",
    body: "Nothing to sign, and we'll never share your details.",
    marker: "border-lime-accent bg-forest-900 text-lime-accent shadow-[0_0_20px_rgba(212,245,122,0.5)]",
  },
];

/** Left column of the contact page: pitch, what happens next, direct email. */
export default function ContactHero() {
  return (
    <div>
      <h1 className="font-new-serif text-5xl font-normal leading-[1.02] tracking-tight sm:text-6xl lg:text-[68px]">
        Book a demo.{" "}
        <span className="italic text-primary-green-700">Or just ask us anything.</span>
      </h1>
      <p className="mt-6 max-w-[500px] text-lg leading-relaxed text-forest-ink/75 sm:text-[19px]">
        A 30-minute walkthrough with a consultant, or a straight answer to
        whatever you&apos;re wondering. Bring your list of systems and we&apos;ll
        show you Emulsion connected to them.
      </p>

      <h2 className="mt-12 text-sm font-semibold text-forest-ink/65">What happens next</h2>
      <ol className="relative mt-[18px] flex flex-col gap-[26px]">
        <li
          aria-hidden="true"
          className="absolute top-[22px] bottom-[22px] left-[21px] w-0.5 bg-linear-to-b from-primary-green-600 to-lime-accent"
        />
        {NEXT_STEPS.map((s) => {
          const Icon = s.icon;
          return (
            <li key={s.title} className="relative flex gap-[18px]">
              <span className={`flex size-11 flex-none items-center justify-center rounded-full border-2 ${s.marker}`}>
                <Icon className="size-5" strokeWidth={2} aria-hidden="true" />
              </span>
              <div>
                <h3 className="text-[17px] font-semibold">{s.title}</h3>
                <p className="mt-1 text-[15px] leading-relaxed text-forest-ink/75">{s.body}</p>
              </div>
            </li>
          );
        })}
      </ol>

      <a
        href="mailto:hello@emulsionfs.com"
        className="group mt-11 flex max-w-[460px] items-center justify-between gap-4 rounded-[20px] border border-sand-line bg-white px-[22px] py-5 transition hover:border-primary-green-600 hover:shadow-[0_16px_32px_-20px_rgba(19,43,29,0.35)]"
      >
        <span className="flex items-center gap-3.5">
          <span className="flex size-11 items-center justify-center rounded-[14px] bg-[#E3F0E0] text-primary-green-700">
            <MailIcon className="size-5" strokeWidth={2} aria-hidden="true" />
          </span>
          <span>
            <span className="block text-[13px] text-forest-ink/65">Prefer email?</span>
            <span className="mt-0.5 block text-[17px] font-semibold">hello@emulsionfs.com</span>
          </span>
        </span>
        <ArrowRightIcon
          className="size-[18px] text-primary-green-700 transition-transform group-hover:translate-x-1"
          aria-hidden="true"
        />
      </a>
    </div>
  );
}
