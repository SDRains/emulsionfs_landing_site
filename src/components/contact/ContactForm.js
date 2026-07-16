import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { ClockIcon, UsersIcon, ShieldCheckIcon, ChevronDownIcon } from "lucide-react";

const EXPECT = [
  {
    icon: ClockIcon,
    title: "One business day",
    body: "We reply within one business day — usually sooner.",
  },
  {
    icon: UsersIcon,
    title: "30 minutes, your systems",
    body: "A working session with a consultant, not a pitch deck. We'll show Emulsion against the stack you actually run.",
  },
  {
    icon: ShieldCheckIcon,
    title: "No commitment",
    body: "Nothing to sign, and we'll never share your details.",
  },
];

const INTENTS = [
  { value: "demo", label: "Book a demo" },
  { value: "sales", label: "Talk to sales" },
  { value: "other", label: "Something else" },
];

const FIELD_CLASS =
  "w-full rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2.5 text-sm text-white placeholder:text-slate-500 focus:border-cyan-500 focus:outline-none";

function Label({ children }) {
  return (
    <span className="mb-1.5 block text-xs font-semibold text-slate-300">
      {children}
    </span>
  );
}

function SelectField({ label, options }) {
  return (
    <label className="block">
      <Label>{label}</Label>
      <div className="relative">
        <select className={`${FIELD_CLASS} appearance-none pr-9`} defaultValue="">
          <option value="" disabled className="text-slate-900">
            Select…
          </option>
          {options.map((o) => (
            <option key={o} value={o} className="text-slate-900">
              {o}
            </option>
          ))}
        </select>
        <ChevronDownIcon className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
      </div>
    </label>
  );
}

export default function ContactForm() {
  const router = useRouter();
  const [intent, setIntent] = useState("demo");

  // On a statically-optimized page, query params aren't populated on the first
  // render — wait for router.isReady before honouring ?intent= from the CTA
  // that sent the visitor here.
  useEffect(() => {
    if (!router.isReady) return;
    const q = router.query.intent;
    if (INTENTS.some((i) => i.value === q)) setIntent(q);
  }, [router.isReady, router.query.intent]);

  return (
    <section className="bg-white text-[#141414]">
      <div className="mx-auto max-w-7xl px-6 py-28 lg:px-10">
        <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:items-start lg:gap-16">
          {/* Left: what to expect + direct contact */}
          <div>
            <h2 className="font-serif text-3xl font-semibold leading-tight text-dark-blue">
              What to expect
            </h2>

            <div className="mt-8 space-y-7">
              {EXPECT.map((e) => {
                const Icon = e.icon;
                return (
                  <div key={e.title} className="flex gap-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-cream ring-1 ring-black/5">
                      <Icon className="h-5 w-5 text-dark-blue" />
                    </span>
                    <div>
                      <h3 className="text-base font-bold text-dark-blue">
                        {e.title}
                      </h3>
                      <p className="mt-1.5 text-sm leading-6 text-slate-500">
                        {e.body}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-10 border-t border-slate-200 pt-8">
              <p className="text-sm text-slate-500">Prefer email?</p>
              <a
                href="mailto:hello@emulsionfs.com"
                className="mt-1 inline-block text-lg font-semibold text-dark-blue transition-colors hover:text-cyan-600"
              >
                hello@emulsionfs.com
              </a>
            </div>
          </div>

          {/* Right: the form */}
          <div className="rounded-2xl bg-dark-blue p-8 text-white shadow-[0_25px_50px_-15px_rgba(15,23,42,0.4)]">
            <h3 className="font-serif text-2xl font-bold">
              Tell us about your setup.
            </h3>
            <p className="mt-2 text-sm text-slate-400">
              The more you share, the more useful the first call is.
            </p>

            <form onSubmit={(e) => e.preventDefault()} className="mt-6 space-y-5">
              <fieldset>
                <legend className="mb-2 block text-xs font-semibold text-slate-300">
                  I&apos;d like to…
                </legend>
                <div className="flex flex-wrap gap-2">
                  {INTENTS.map((i) => (
                    <label
                      key={i.value}
                      className={`cursor-pointer rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                        intent === i.value
                          ? "bg-cyan-600 text-white"
                          : "border border-white/15 text-slate-300 hover:bg-white/5"
                      }`}
                    >
                      <input
                        type="radio"
                        name="intent"
                        value={i.value}
                        checked={intent === i.value}
                        onChange={() => setIntent(i.value)}
                        className="sr-only"
                      />
                      {i.label}
                    </label>
                  ))}
                </div>
              </fieldset>

              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block">
                  <Label>Name</Label>
                  <input className={FIELD_CLASS} placeholder="Jane Rivera" />
                </label>
                <label className="block">
                  <Label>Work email</Label>
                  <input
                    type="email"
                    className={FIELD_CLASS}
                    placeholder="jane@company.com"
                  />
                </label>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block">
                  <Label>Company</Label>
                  <input
                    className={FIELD_CLASS}
                    placeholder="Company or holding group"
                  />
                </label>
                <label className="block">
                  <Label>
                    Phone{" "}
                    <span className="font-normal text-slate-500">
                      (optional)
                    </span>
                  </Label>
                  <input
                    type="tel"
                    className={FIELD_CLASS}
                    placeholder="+1 555 000 1234"
                  />
                </label>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <SelectField
                  label="Entities"
                  options={["1–3", "4–10", "11–25", "25+"]}
                />
                <SelectField
                  label="Accounting systems"
                  options={[
                    "JD Edwards",
                    "Sage Intacct",
                    "QuickBooks",
                    "NetSuite",
                    "Multiple / other",
                  ]}
                />
              </div>

              <label className="block">
                <Label>
                  What are you running today?{" "}
                  <span className="font-normal text-slate-500">(optional)</span>
                </Label>
                <textarea
                  rows={4}
                  className={`${FIELD_CLASS} resize-none`}
                  placeholder="e.g. JD Edwards at HQ, three entities on QuickBooks, one legacy Great Plains install we'd love to retire…"
                />
              </label>

              <button
                type="submit"
                className="w-full cursor-pointer rounded-full bg-cyan-600 px-6 py-3.5 text-base font-semibold text-white transition-colors hover:bg-cyan-500"
              >
                Send request
              </button>

              <p className="text-center text-xs text-slate-400">
                No commitment. We&apos;ll never share your details.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
