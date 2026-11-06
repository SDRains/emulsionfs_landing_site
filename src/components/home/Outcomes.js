import { LockIcon, SearchIcon } from "lucide-react";

// Shared hover lift for the bento tiles.
const LIFT =
  "transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_48px_-20px_rgba(19,43,29,0.35)]";
const CARD = `rounded-[28px] border border-sand-line bg-white p-9 ${LIFT}`;
const TILE_TITLE = "font-new-serif text-[28px] font-normal leading-[1.15] text-forest-ink";
const TILE_BODY = "mt-3 text-[15px] leading-relaxed text-forest-ink/75";

// Illustrative bar heights only (no values shown): archived years from a
// legacy system, then live years from the current one.
const BAR_HEIGHTS = [62, 74, 70, 88, 96, 108, 122, 138];
const FIRST_YEAR = 2018;
const LIVE_FROM = 5;

const SYSTEM_BADGES = [
  { label: "JDE", className: "bg-forest-800 text-white" },
  { label: "SI", className: "bg-primary-green-700 text-white" },
  { label: "QB", className: "bg-mint-200 text-forest-ink" },
  { label: "NS", className: "bg-lime-accent text-forest-ink" },
  { label: "365", className: "bg-[#EFEDE4] text-forest-ink" },
];

const RETIRED = ["Legacy GL", "JD Edwards"];

const SEARCH_RESULTS = [
  { type: "Vendor invoice", system: "Sage Intacct" },
  { type: "Journal entry", system: "JD Edwards" },
  { type: "Payment run", system: "Legacy GL" },
];

function LiveHistoricalTile() {
  return (
    <div
      className={`relative overflow-hidden rounded-[28px] bg-forest-900 p-10 text-white md:col-span-2 lg:col-span-4 ${LIFT}`}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 -right-32 h-[480px] w-[480px] rounded-full bg-[radial-gradient(closest-side,rgba(212,245,122,0.28),transparent)]"
      />
      <div className="relative flex flex-wrap items-end justify-between gap-8">
        <div className="max-w-sm">
          <h3 className="font-new-serif text-[34px] font-normal leading-[1.1]">
            Live and historical data,{" "}
            <span className="italic text-lime-accent">side by side.</span>
          </h3>
          <p className="mt-4 text-base leading-relaxed text-white/70">
            Compare this quarter against years of archived history in one view,
            with no exports and no stitching spreadsheets together.
          </p>
        </div>

        <div
          className="w-full max-w-[420px] flex-1 basis-72 rounded-[18px] border border-white/10 bg-white/[0.06] p-5"
          aria-hidden="true"
        >
          <div className="flex flex-wrap gap-4 text-xs text-white/75">
            <span className="inline-flex items-center gap-1.5">
              <span className="size-2 rounded-[2px] bg-mint-200/45" />
              Archived · JD Edwards
            </span>
            <span className="inline-flex items-center gap-1.5">
              <span className="size-2 rounded-[2px] bg-lime-accent" />
              Live · Sage Intacct
            </span>
          </div>
          <div className="mt-5 flex h-[150px] items-end gap-2.5">
            {BAR_HEIGHTS.map((h, i) => (
              <div key={i} className="flex flex-1 flex-col items-center gap-2">
                <div
                  style={{ height: h }}
                  className={`w-full rounded-t-md rounded-b-[2px] ${
                    i >= LIVE_FROM
                      ? "bg-linear-to-b from-lime-accent to-[#8FCB86]"
                      : "bg-mint-200/40"
                  }`}
                />
                <span className="text-[11px] text-white/60">
                  &apos;{String(FIRST_YEAR + i).slice(2)}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Outcomes() {
  return (
    <section aria-labelledby="outcomes-heading" className="bg-primary-cream px-6 py-24 text-forest-ink lg:py-32">
      <div className="mx-auto max-w-[1240px]">
        <div className="mx-auto max-w-3xl text-center">
          <h2
            id="outcomes-heading"
            className="font-new-serif text-4xl font-normal leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl"
          >
            Less time chasing numbers.{" "}
            <span className="italic text-primary-green-700">More time using them.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-forest-ink/75">
            Connect your platforms once. Emulsion becomes the single place to
            search, report on and keep your financial data, whichever system it
            came from.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-6">
          <LiveHistoricalTile />

          {/* One login */}
          <div className={`flex flex-col justify-between gap-8 lg:col-span-2 ${CARD}`}>
            <div className="flex" aria-hidden="true">
              {SYSTEM_BADGES.map((b, i) => (
                <span
                  key={b.label}
                  className={`flex size-[52px] items-center justify-center rounded-full border-[3px] border-white text-[13px] font-bold ${
                    i > 0 ? "-ml-3" : ""
                  } ${b.className}`}
                >
                  {b.label}
                </span>
              ))}
            </div>
            <div>
              <h3 className={TILE_TITLE}>One login, every system.</h3>
              <p className={TILE_BODY}>
                Stop juggling credentials for every entity. One sign-in reaches it all.
              </p>
            </div>
          </div>

          {/* Retire subscriptions */}
          <div className={`flex flex-col gap-7 lg:col-span-2 ${CARD}`}>
            <ul className="flex flex-col gap-2.5" aria-hidden="true">
              {RETIRED.map((name) => (
                <li
                  key={name}
                  className="flex items-center justify-between gap-3 rounded-[14px] bg-primary-cream px-3.5 py-3 text-sm"
                >
                  <span className="font-semibold">{name}</span>
                  <span className="flex gap-1.5 text-xs">
                    <span className="rounded-full bg-[#DDEEDB] px-2.5 py-0.5 font-semibold text-primary-green-700">
                      Data kept
                    </span>
                    <span className="rounded-full bg-[#EFEDE4] px-2.5 py-0.5 text-forest-ink/60 line-through">
                      License
                    </span>
                  </span>
                </li>
              ))}
            </ul>
            <div>
              <h3 className={TILE_TITLE}>Retire the software, keep the history.</h3>
              <p className={TILE_BODY}>
                Every legacy record is extracted and preserved, so you can stop
                paying for old platforms just to read old data.
              </p>
            </div>
          </div>

          {/* Search */}
          <div
            className={`flex flex-col gap-7 rounded-[28px] border border-[#D3E6C6] bg-linear-140 from-[#DDF0DA] to-[#EAF7BF] p-9 lg:col-span-2 ${LIFT}`}
          >
            <div
              className="overflow-hidden rounded-2xl bg-white shadow-[0_12px_30px_-16px_rgba(19,43,29,0.35)]"
              aria-hidden="true"
            >
              <div className="flex items-center gap-2.5 border-b border-[#EEF0EA] px-3.5 py-3 text-sm">
                <SearchIcon className="size-4 text-primary-green-700" strokeWidth={2.2} />
                Rio Verde Water Co.
              </div>
              <ul className="px-3.5 pt-1.5 pb-2.5 text-[13px]">
                {SEARCH_RESULTS.map((r, i) => (
                  <li
                    key={r.type}
                    className={`flex justify-between py-2 ${
                      i < SEARCH_RESULTS.length - 1 ? "border-b border-[#F2F3EF]" : ""
                    }`}
                  >
                    <span>{r.type}</span>
                    <span className="text-forest-ink/65">{r.system}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className={TILE_TITLE}>Search everything at once.</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-forest-ink/80">
                One query across every entity and every system, live or archived.
              </p>
            </div>
          </div>

          {/* Permanent record */}
          <div className={`flex flex-col justify-between gap-7 md:col-span-2 lg:col-span-2 ${CARD}`}>
            <div className="flex size-16 items-center justify-center rounded-[20px] bg-forest-900 text-lime-accent">
              <LockIcon className="size-7" strokeWidth={1.8} aria-hidden="true" />
            </div>
            <div>
              <h3 className={TILE_TITLE}>A permanent, audit-ready record.</h3>
              <p className={TILE_BODY}>
                Every transaction preserved and searchable, built for regulated,
                audit-heavy environments.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
