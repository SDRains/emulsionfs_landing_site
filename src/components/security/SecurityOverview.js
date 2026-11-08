import { BellIcon, CheckIcon, LockIcon, XIcon } from "lucide-react";

const ENTITIES = ["HQ", "East", "West", "Canada"];

// Illustrative permission grid: which roles see which entities.
const ACCESS = [
  { role: "Controller", cells: ["full", "full", "full", "full"] },
  { role: "AP, East", cells: ["none", "own", "none", "none"] },
  { role: "Auditor", cells: ["view", "view", "none", "none"] },
];

const CELL = {
  full: "bg-primary-green-700",
  own: "bg-primary-green-500",
  view: "bg-lime-accent",
  none: "bg-[#ECE9DD]",
};

const card = "rounded-[28px] p-6 transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_48px_-20px_rgba(19,43,29,0.35)] sm:p-9";
const cardTitle = "font-new-serif text-3xl font-normal";

function AccessMatrix() {
  return (
    <div aria-hidden="true" className="rounded-[20px] border border-[#ECE9DD] bg-primary-cream p-[18px]">
      <div className="grid grid-cols-[1.4fr_repeat(4,1fr)] gap-1.5 text-center text-xs font-semibold text-forest-ink/65">
        <span />
        {ENTITIES.map((e) => (
          <span key={e}>{e}</span>
        ))}
      </div>
      <div className="mt-2 flex flex-col gap-1.5">
        {ACCESS.map((row) => (
          <div key={row.role} className="grid grid-cols-[1.4fr_repeat(4,1fr)] items-center gap-1.5">
            <span className="text-[13px] font-medium">{row.role}</span>
            {row.cells.map((c, i) => (
              <span key={i} className={`h-7 rounded-lg ${CELL[c]}`} />
            ))}
          </div>
        ))}
      </div>
      <div className="mt-3.5 flex items-center gap-2.5 rounded-xl border border-sand-line bg-white px-3 py-2.5 text-xs text-forest-ink/75">
        <span className="size-2 flex-none rounded-full bg-primary-green-600 shadow-[0_0_0_3px_rgba(70,131,88,0.18)]" />
        <span>
          <strong className="font-semibold text-forest-ink">Support session</strong> approved by your admin
        </span>
      </div>
    </div>
  );
}

function IconTile({ icon: Icon }) {
  return (
    <span aria-hidden="true" className="flex size-13 items-center justify-center rounded-2xl bg-[#E3F0E0] text-primary-green-700">
      <Icon className="size-6" strokeWidth={2} />
    </span>
  );
}

/** Grid of security controls: access, connection, migration, encryption, incidents. */
export default function SecurityOverview() {
  return (
    <section aria-labelledby="controls-heading" className="bg-primary-cream px-6 py-24 text-forest-ink lg:py-32">
      <div className="mx-auto max-w-[1240px]">
        <div className="grid items-end gap-x-18 gap-y-6 lg:grid-cols-2">
          <h2
            id="controls-heading"
            className="font-new-serif text-[42px] font-normal leading-[1.06] tracking-tight sm:text-[56px]"
          >
            Controls your auditors{" "}
            <span className="italic text-primary-green-700">will recognise.</span>
          </h2>
          <p className="text-[17px] leading-[1.7] text-forest-ink/75">
            Access, connection, migration and response, each built to hold up to
            the questions your security review will ask.
          </p>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {/* Access */}
          <div className={`${card} border border-sand-line bg-white lg:col-span-2`}>
            <div className="grid items-center gap-x-10 gap-y-8 md:grid-cols-2">
              <div>
                <h3 className={cardTitle}>Who can see what</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-forest-ink/75">
                  Permissions are scoped by entity and enforced at the query
                  layer, not just the interface. Single sign-on ties access to
                  your directory, so removing someone there removes them here.
                </p>
                <p className="mt-3 text-[15px] leading-relaxed text-forest-ink/75">
                  Our staff hold no standing access. Support sessions are
                  requested, approved, time-boxed and logged.
                </p>
              </div>
              <AccessMatrix />
            </div>
          </div>

          {/* Connect */}
          <div className={`${card} relative overflow-hidden bg-forest-900 text-white`}>
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-[120px] -bottom-[140px] size-[340px] rounded-full bg-[radial-gradient(closest-side,rgba(212,245,122,0.25),transparent)]"
            />
            <div className="relative">
              <div aria-hidden="true" className="flex gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-lime-accent px-3.5 py-2 text-sm font-semibold text-forest-900">
                  <CheckIcon className="size-3.5" strokeWidth={2.6} />
                  Read
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-white/18 px-3.5 py-2 text-sm font-semibold text-white/45 line-through">
                  <XIcon className="size-3.5" strokeWidth={2.6} />
                  Write
                </span>
              </div>
              <h3 className={`${cardTitle} mt-7`}>How we connect</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-white/70">
                Live systems connect with read-only, least-privilege credentials
                over TLS. Legacy systems are extracted in supervised sessions
                alongside your team.
              </p>
            </div>
          </div>

          {/* Migration */}
          <div className={`${card} border border-[#CFE3C8] bg-linear-140 from-[#DDF0DA] to-[#EAF7BF]`}>
            <div aria-hidden="true" className="flex flex-col gap-2">
              <div className="flex justify-between text-xs font-semibold text-[#3E5245]">
                <span>Source system</span>
                <span>1,284,019</span>
              </div>
              <div className="h-2.5 rounded-full bg-primary-green-600" />
              <div className="mt-1.5 flex justify-between text-xs font-semibold text-[#3E5245]">
                <span>Emulsion</span>
                <span>1,284,019</span>
              </div>
              <div className="h-2.5 rounded-full bg-forest-900" />
              <span className="mt-2 inline-flex items-center gap-1.5 self-start rounded-full bg-primary-green-700 px-3 py-1 text-xs font-semibold text-white">
                <CheckIcon className="size-3" strokeWidth={3} />
                Reconciled
              </span>
            </div>
            <h3 className={`${cardTitle} mt-6`}>Migration integrity</h3>
            <p className="mt-3 text-[15px] leading-relaxed text-[#3E5245]">
              Every record is reconciled against source, and the old system runs
              in parallel. The extraction report is yours to keep as audit
              evidence.
            </p>
          </div>

          {/* Encryption */}
          <div className={`${card} border border-sand-line bg-white`}>
            <IconTile icon={LockIcon} />
            <h3 className={`${cardTitle} mt-6`}>Encrypted everywhere</h3>
            <p className="mt-3 text-[15px] leading-relaxed text-forest-ink/75">
              AES-256 at rest, TLS in transit. Backups are encrypted too, and
              restores are tested on a schedule rather than assumed.
            </p>
          </div>

          {/* Incidents */}
          <div className={`${card} border border-sand-line bg-white`}>
            <IconTile icon={BellIcon} />
            <h3 className={`${cardTitle} mt-6`}>Incident response</h3>
            <p className="mt-3 text-[15px] leading-relaxed text-forest-ink/75">
              Every incident follows a documented runbook. If your data is ever
              affected, you hear from us directly, not from a status page.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
