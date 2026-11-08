import Link from "next/link";
import { ArrowRightIcon, LockIcon, ShieldIcon } from "lucide-react";

const SYSTEMS = ["JD Edwards", "Sage Intacct", "Legacy general ledger"];

const PEOPLE = [
  { name: "Controllers", scope: "All entities", className: "bg-forest-900 text-white" },
  { name: "Finance team", scope: "Their entities", className: "bg-primary-green-700 text-white" },
  { name: "Auditors", scope: "View only", className: "bg-lime-accent text-forest-900" },
];

const FACTS = [
  { value: "Read-only", body: "No write path into your ERPs. It can’t post, adjust or delete." },
  { value: "AES-256", body: "Encrypted at rest, and TLS for everything in transit." },
  { value: "One tenant", body: "A dedicated database per customer. Never shared, never pooled." },
  { value: "Auditable logs", body: "Every login, query and export lands in an audit trail." },
];

function Wire({ label, sub }) {
  return (
    <div className="hidden px-3 text-center lg:block" aria-hidden="true">
      <div className="flow-wire-green h-0.5" />
      <p className="mt-2.5 text-xs font-semibold text-primary-green-700">{label}</p>
      <p className="mt-0.5 text-xs text-forest-ink/55">{sub}</p>
    </div>
  );
}

function PerimeterDiagram() {
  return (
    <div className="relative overflow-hidden rounded-[32px] border border-sand-line bg-white p-5 shadow-[0_40px_80px_-32px_rgba(19,43,29,0.25)] sm:p-10">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-1/2 h-[520px] w-[760px] -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(closest-side,rgba(212,245,122,0.35),rgba(212,245,122,0)_70%)]"
      />
      <div className="relative mt-3 rounded-3xl border-[1.5px] border-dashed border-[#9CC48E] px-5 pt-13 pb-10 sm:px-8">
        <span className="absolute -top-3.5 left-6 inline-flex items-center gap-2 rounded-full border border-[#CFE3C8] bg-white px-3.5 py-1 text-[13px] font-semibold text-primary-green-700">
          <ShieldIcon className="size-3.5" strokeWidth={2.2} aria-hidden="true" />
          Your environment
        </span>

        <div className="grid items-center gap-7 lg:grid-cols-[minmax(0,1fr)_128px_auto_128px_minmax(0,1fr)] lg:gap-0">
          <div>
            <p className="mb-3 text-[13px] font-semibold text-forest-ink/65">Your systems</p>
            <ul className="flex flex-col gap-2.5">
              {SYSTEMS.map((s) => (
                <li
                  key={s}
                  className="rounded-[14px] border border-[#ECE9DD] bg-primary-cream px-4 py-3 text-[15px] font-medium"
                >
                  {s}
                </li>
              ))}
            </ul>
          </div>

          <Wire label="Read-only" sub="over TLS" />

          <div className="flex flex-col items-center">
            <div className="relative flex size-[200px] items-center justify-center">
              <span aria-hidden="true" className="animate-pulse-ring absolute inset-0 rounded-full border border-primary-green-600/50" />
              <span
                aria-hidden="true"
                className="animate-pulse-ring absolute inset-0 rounded-full border border-primary-green-600/50 [animation-delay:1.4s]"
              />
              <div className="flex size-[164px] items-center justify-center rounded-full bg-[radial-gradient(circle_at_30%_25%,#2F6B45,#132B1D_70%)] shadow-[0_0_0_1px_rgba(212,245,122,0.4),0_20px_60px_rgba(19,43,29,0.35),0_0_60px_rgba(212,245,122,0.35)]">
                <img src="/emulsion_logo_dark_no_footer.png" alt="Emulsion" className="h-auto w-[108px]" />
              </div>
              <span
                aria-hidden="true"
                className="absolute right-[22px] bottom-[22px] flex size-11 items-center justify-center rounded-full bg-lime-accent text-forest-900 shadow-[0_0_0_4px_#FFFFFF,0_0_24px_rgba(212,245,122,0.6)]"
              >
                <LockIcon className="size-5" strokeWidth={2.2} />
              </span>
            </div>
            <p className="mt-3.5 text-[13px] text-forest-ink/65">Encrypted and dedicated to you</p>
          </div>

          <Wire label="Single sign-on" sub="every action logged" />

          <div>
            <p className="mb-3 text-[13px] font-semibold text-forest-ink/65">Your people</p>
            <ul className="flex flex-col gap-2.5">
              {PEOPLE.map((p) => (
                <li
                  key={p.name}
                  className={`flex items-center justify-between gap-3 rounded-[14px] px-4 py-3 text-[15px] font-medium ${p.className}`}
                >
                  <span>{p.name}</span>
                  <span className="text-xs opacity-75">{p.scope}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function SecurityHero() {
  return (
    <section className="bg-primary-cream px-4 text-forest-ink">
      <div className="mx-auto grid max-w-[1240px] items-end gap-x-18 gap-y-8 px-2 pt-36 lg:grid-cols-2 lg:pt-48">
        <h1 className="font-new-serif text-5xl font-normal leading-[1.02] tracking-tight sm:text-6xl lg:text-[72px]">
          Your financial history,{" "}
          <span className="italic text-primary-green-700">inside your perimeter.</span>
        </h1>
        <div>
          <p className="text-lg leading-relaxed text-forest-ink/75 sm:text-[19px]">
            Emulsion reads from your systems, never writes to them, and stores
            the result where your policies require: your own infrastructure, or
            a dedicated environment we run for you alone.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 font-serif">
            <a
              href="#package"
              className="inline-flex h-[54px] items-center rounded-full bg-primary-green-600 px-7 text-[17px] font-semibold text-white shadow-[0_8px_24px_rgba(53,99,65,0.28)] transition-colors hover:bg-primary-green-700"
            >
              Request the security package
            </a>
            <Link
              href="/contact?intent=sales"
              className="group inline-flex h-[54px] items-center gap-2.5 rounded-full border border-forest-ink/20 bg-white/55 px-[26px] text-[17px] font-semibold text-forest-ink transition-colors hover:bg-white"
            >
              Talk to our team
              <ArrowRightIcon
                aria-hidden="true"
                className="size-[18px] transition-transform group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-[1240px] px-2 pt-18">
        <PerimeterDiagram />
      </div>

      <dl className="mx-auto grid max-w-[1240px] gap-y-10 px-2 pt-16 pb-28 sm:grid-cols-2 lg:grid-cols-4 lg:pb-30">
        {FACTS.map((f, i) => (
          <div
            key={f.value}
            className={`py-2 sm:pr-7 ${i > 0 ? "lg:border-l lg:border-[#E2DED0] lg:pl-7" : ""} ${
              i === FACTS.length - 1 ? "lg:pr-0" : ""
            }`}
          >
            <dt className="font-new-serif text-[40px] leading-none text-primary-green-700">{f.value}</dt>
            <dd className="mt-3 text-[15px] leading-relaxed text-forest-ink/75">{f.body}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
