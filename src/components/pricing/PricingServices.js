import {
  GlobeIcon,
  CloudUploadIcon,
  DatabaseIcon,
  UsersIcon,
  StarIcon,
  ShieldCheckIcon,
  ChevronDownIcon,
} from "lucide-react";

const SERVICES = [
  {
    icon: GlobeIcon,
    title: "Platform access",
    body: "Emulsion itself — unified search, consolidated reporting, live × historical views, entity management. Licensed by organization, not by seat.",
  },
  {
    icon: CloudUploadIcon,
    title: "Live system connections",
    body: "API connections to the platforms you're keeping — JD Edwards, Sage Intacct, QuickBooks, NetSuite, and custom connectors built as needed.",
  },
  {
    icon: DatabaseIcon,
    title: "Legacy extraction & migration",
    body: "Full extraction of legacy systems with record-by-record validation, into a secure repository — local on your infrastructure, or hosted by us. Then retire the subscription.",
  },
  {
    icon: UsersIcon,
    title: "Onboarding & consulting",
    body: "Discovery, chart-of-accounts mapping, consolidation logic, training, and first-close support — a named consultant, not a ticket queue.",
  },
  {
    icon: StarIcon,
    title: "New-acquisition onboarding",
    body: "A scoped engagement each time you buy — most new entities are connected and reporting within weeks.",
  },
  {
    icon: ShieldCheckIcon,
    title: "Ongoing support & security",
    body: "Dedicated encrypted databases, SOC 2 Type II controls, audit-ready exports, and support through every close.",
  },
];

function ServiceRow({ icon: Icon, title, body, index }) {
  return (
    <div
      className={`flex gap-5 ${index > 0 && 'border-t border-dashed border-slate-200'} py-6 px-4 hover:bg-primary-cream cursor-pointer`}
    >
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white ring-1 ring-slate-200">
        <Icon className="h-5 w-5 text-dark-blue" />
      </span>
      <div>
        <h3 className="text-base font-bold text-dark-blue">{title}</h3>
        <p className="mt-2 text-sm leading-6 text-slate-500">{body}</p>
      </div>
    </div>
  );
}

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

function ScopingForm() {
  return (
    <div className="rounded-2xl bg-dark-blue p-8 text-white shadow-[0_25px_50px_-15px_rgba(15,23,42,0.4)]">
      <p className="font-mono text-xs font-semibold tracking-[0.2em] text-cyan-400">
        START THE CONVERSATION
      </p>
      <h3 className="mt-3 font-serif text-2xl font-bold">
        Tell us about your environment.
      </h3>
      <p className="mt-2 text-sm text-slate-400">
        We&apos;ll come back within one business day to schedule a scoping call.
      </p>

      <form onSubmit={(e) => e.preventDefault()} className="mt-6 space-y-5">
        <div className="grid grid-cols-2 gap-4">
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

        <label className="block">
          <Label>Company</Label>
          <input
            className={FIELD_CLASS}
            placeholder="Company or holding group"
          />
        </label>

        <div className="grid grid-cols-2 gap-4">
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
            rows={3}
            className={`${FIELD_CLASS} resize-none`}
            placeholder="e.g. JD Edwards at HQ, three entities on QuickBooks, one legacy Great Plains install we'd love to retire…"
          />
        </label>

        <button
          type="submit"
          className="w-full rounded-full bg-cyan-600 px-6 py-3.5 text-base font-semibold text-white transition-colors hover:bg-cyan-500 cursor-pointer"
        >
          Request a scoping call
        </button>

        <p className="text-center text-xs text-slate-400">
          No commitment. We&apos;ll never share your details.
        </p>
      </form>
    </div>
  );
}

export default function PricingServices() {
  return (
    <section className="bg-white text-[#141414]">
      <div className="mx-auto max-w-7xl px-6 py-28 lg:px-10">
        <div className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-start lg:gap-16">
          {/* Left: services */}
          <div>
            <h2 className="font-serif text-4xl font-semibold leading-tight text-dark-blue sm:text-5xl">
              Every engagement is built
              <br />
              from these services.
            </h2>

            <div className="mt-10">
              {SERVICES.map((s, index) => (
                <ServiceRow key={s.title} {...s} index={index} />
              ))}
            </div>
          </div>

          {/* Right: scoping form */}
          <div>
            <ScopingForm />

            <div className="mt-12 flex items-start gap-4 rounded-xl bg-primary-cream p-5">
              <p className="text-base leading-7 text-slate-600">
                <span className="font-bold text-dark-blue">
                  Fixed-fee proposals.
                </span>{" "}
                After a scoping call, you get one document: what we&apos;ll
                connect, what we&apos;ll migrate, what it costs, and when
                it&apos;s done.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
