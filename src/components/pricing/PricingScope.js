import { ChevronDownIcon } from "lucide-react";

const FIELD =
  "w-full rounded-xl border border-white/15 bg-white/[0.06] px-3.5 py-3 text-[15px] text-white placeholder:text-white/45 focus:border-lime-accent focus:ring-3 focus:ring-lime-accent/20 focus:outline-none";

const ENTITY_OPTIONS = ["1–3", "4–10", "11–25", "25+"];
const SYSTEM_OPTIONS = ["JD Edwards", "Sage Intacct", "QuickBooks", "NetSuite", "Multiple / other"];

function Field({ label, optional, children }) {
  return (
    <label className="block">
      <span className="mb-2 block text-[13px] font-semibold text-white/80">
        {label}
        {optional && <span className="font-normal text-white/50"> (optional)</span>}
      </span>
      {children}
    </label>
  );
}

function Select({ name, options }) {
  return (
    <div className="relative">
      <select name={name} defaultValue="" className={`${FIELD} appearance-none pr-10`}>
        <option value="" disabled className="text-forest-ink">
          Select…
        </option>
        {options.map((o) => (
          <option key={o} value={o} className="text-forest-ink">
            {o}
          </option>
        ))}
      </select>
      <ChevronDownIcon
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 right-3.5 size-4 -translate-y-1/2 text-white/60"
      />
    </div>
  );
}

export default function PricingScope() {
  return (
    <section
      id="scope"
      aria-labelledby="scope-heading"
      className="relative scroll-mt-28 overflow-hidden bg-forest-950 px-6 py-24 text-white lg:py-32"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-90 -left-50 h-[800px] w-[1000px] rounded-full bg-[radial-gradient(closest-side,rgba(212,245,122,0.28),rgba(70,131,88,0.25)_45%,transparent_75%)]"
      />
      <div className="relative mx-auto grid max-w-[1240px] items-start gap-x-18 gap-y-12 lg:grid-cols-2">
        <div>
          <h2
            id="scope-heading"
            className="font-new-serif text-5xl font-normal leading-[1.04] tracking-tight sm:text-6xl"
          >
            Tell us about <span className="text-gradient-lime italic">your environment.</span>
          </h2>
          <p className="mt-6 max-w-[460px] text-lg leading-relaxed text-white/70">
            We&apos;ll come back within one business day to schedule a scoping call.
          </p>
          <div className="mt-9 max-w-[460px] rounded-[20px] border border-white/10 bg-white/5 p-6">
            <p className="text-[15px] leading-relaxed text-white/80">
              <span className="font-semibold text-lime-accent">Fixed-fee proposals.</span> After a
              scoping call you get one document: what we&apos;ll connect, what
              we&apos;ll migrate, what it costs and a full completion timeline.
            </p>
          </div>
        </div>

        {/* Not connected to a backend yet, same as before the redesign. */}
        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex flex-col gap-[18px] rounded-[28px] border border-white/12 bg-white/5 p-6 backdrop-blur-md sm:p-9"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Name">
              <input name="name" autoComplete="name" className={FIELD} placeholder="Jane Rivera" />
            </Field>
            <Field label="Work email">
              <input
                name="email"
                type="email"
                autoComplete="email"
                className={FIELD}
                placeholder="jane@company.com"
              />
            </Field>
          </div>
          <Field label="Company">
            <input name="company" autoComplete="organization" className={FIELD} placeholder="Company or holding group" />
          </Field>
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Entities">
              <Select name="entities" options={ENTITY_OPTIONS} />
            </Field>
            <Field label="Accounting systems">
              <Select name="systems" options={SYSTEM_OPTIONS} />
            </Field>
          </div>
          <Field label="What are you running today?" optional>
            <textarea
              name="message"
              rows={3}
              className={`${FIELD} resize-none`}
              placeholder="e.g. JD Edwards at HQ, three entities on QuickBooks, one legacy Great Plains install we'd love to retire…"
            />
          </Field>
          <button
            type="submit"
            className="h-[54px] cursor-pointer rounded-full bg-lime-accent font-serif text-lg font-semibold text-forest-900 shadow-[0_0_40px_rgba(212,245,122,0.3)] transition-colors hover:bg-[#E3FA9A]"
          >
            Request a scoping call
          </button>
          <p className="text-center text-[13px] text-white/55">
            No commitment. We&apos;ll never share your details.
          </p>
        </form>
      </div>
    </section>
  );
}
