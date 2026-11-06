const LIVE = [
  { title: "JD Edwards", sub: "EnterpriseOne & World" },
  { title: "Sage Intacct", sub: "Dimensional GL, multi-entity" },
  { title: "QuickBooks", sub: "Online & Desktop" },
  { title: "NetSuite", sub: "SuiteAnalytics Connect" },
];

const EXTRACT = [
  { title: "Great Plains", sub: "Dynamics GP, all versions" },
  { title: "AS/400-era systems", sub: "Green-screen & flat-file" },
  { title: "Custom databases", sub: "SQL, Access, homegrown GLs" },
];

const COMING = ["Epicor", "Workday Financial Management", "Microsoft Dynamics GP", "Infor"];

const LIFT =
  "transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_48px_-20px_rgba(19,43,29,0.35)]";

function GroupHeading({ marker, children }) {
  return (
    <h3 className="mb-4 flex items-center gap-2.5 text-[15px] font-semibold">
      {marker}
      {children}
    </h3>
  );
}

function PlatformCard({ title, sub, className }) {
  return (
    <li className={`rounded-[20px] p-[22px] ${LIFT} ${className}`}>
      <p className="text-[17px] font-semibold">{title}</p>
      <p className="mt-1.5 text-sm text-forest-ink/70">{sub}</p>
    </li>
  );
}

export default function IntegrationsPlatforms() {
  return (
    <section
      id="platforms"
      aria-labelledby="platforms-heading"
      className="scroll-mt-28 bg-primary-cream px-6 pt-6 pb-24 text-forest-ink lg:pb-32"
    >
      <div className="mx-auto max-w-[1240px]">
        <div className="grid items-end gap-x-18 gap-y-6 lg:grid-cols-2">
          <h2
            id="platforms-heading"
            className="font-new-serif text-4xl font-normal leading-[1.06] tracking-tight sm:text-5xl lg:text-[56px]"
          >
            The platforms <span className="italic text-primary-green-700">we work with.</span>
          </h2>
          <p className="text-[17px] leading-relaxed text-forest-ink/75">
            Active platforms connect live by API. Older and on-premise systems are
            fully extracted. And if yours isn&apos;t listed, we build the connector
            during onboarding.
          </p>
        </div>

        <div className="mt-14 flex flex-col gap-10">
          <div>
            <GroupHeading
              marker={<span className="size-2.5 rounded-full bg-primary-green-600 shadow-[0_0_0_4px_rgba(70,131,88,0.18)]" />}
            >
              Live connections
            </GroupHeading>
            <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {LIVE.map((p) => (
                <PlatformCard key={p.title} {...p} className="border border-sand-line bg-white" />
              ))}
            </ul>
          </div>

          <div>
            <GroupHeading marker={<span className="size-2.5 rounded-[3px] bg-[#7C877E]" />}>
              Full extraction
            </GroupHeading>
            <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {EXTRACT.map((p) => (
                <PlatformCard key={p.title} {...p} className="border border-[#E2DED0] bg-[#EFECE1]" />
              ))}
              <li
                className={`rounded-[20px] border-[1.5px] border-dashed border-[#9CC48E] bg-linear-140 from-[#DDF0DA] to-[#EAF7BF] p-[22px] ${LIFT}`}
              >
                <p className="text-[17px] font-semibold text-primary-green-700">Something else?</p>
                <p className="mt-1.5 text-sm text-forest-ink/80">
                  Custom connectors built during onboarding, spreadsheets included.
                </p>
              </li>
            </ul>
          </div>

          <div>
            <GroupHeading marker={<span className="size-2.5 rounded-full border-2 border-[#8FB33A]" />}>
              In development
            </GroupHeading>
            <ul className="flex flex-wrap gap-2.5">
              {COMING.map((c) => (
                <li
                  key={c}
                  className="rounded-full border border-dashed border-[#B9C3B3] px-[18px] py-2.5 text-[15px] font-medium text-forest-ink/80"
                >
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
