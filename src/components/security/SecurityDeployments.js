import { CheckIcon, KeyRoundIcon } from "lucide-react";

function Database({ className, top = "#509665" }) {
  return (
    <svg className={className} viewBox="0 0 54 64" fill="none" aria-hidden="true">
      <path d="M3 10v44c0 4.4 10.7 8 24 8s24-3.6 24-8V10" fill="#356341" />
      <path d="M3 26c0 4.4 10.7 8 24 8s24-3.6 24-8M3 40c0 4.4 10.7 8 24 8s24-3.6 24-8" stroke="#1F4430" strokeWidth="2" />
      <ellipse cx="27" cy="10" rx="24" ry="8" fill={top} />
    </svg>
  );
}

function LocalIllustration() {
  return (
    <div className="relative flex h-[150px] w-[230px] items-center justify-center gap-[22px] rounded-[20px] border-[1.5px] border-dashed border-lime-accent/60">
      <span className="absolute top-2.5 left-3.5 text-xs font-semibold text-lime-accent">Your data centre</span>
      <Database className="h-16 w-[54px]" />
      <span className="flex size-12 items-center justify-center rounded-full bg-lime-accent text-forest-900 shadow-[0_0_24px_rgba(212,245,122,0.5)]">
        <KeyRoundIcon className="size-[22px]" strokeWidth={2.2} />
      </span>
    </div>
  );
}

function HostedIllustration() {
  return (
    <div className="flex items-center gap-3.5">
      <div className="h-[130px] w-20 rounded-2xl border border-white/12 bg-white/4" />
      <div className="flex h-40 w-[100px] flex-col items-center justify-center gap-3 rounded-[18px] border-[1.5px] border-lime-accent bg-forest-900 shadow-[0_0_40px_rgba(212,245,122,0.35)]">
        <Database className="h-[42px] w-9" top="#D4F57A" />
        <span className="text-[13px] font-semibold text-lime-accent">Yours</span>
      </div>
      <div className="h-[130px] w-20 rounded-2xl border border-white/12 bg-white/4" />
    </div>
  );
}

const CARDS = [
  {
    title: "Local deployment",
    body: "Runs in your data centre or private cloud, behind your firewall. Your team holds the keys and sets retention.",
    points: [
      "Meets strict data-residency requirements",
      "Your key management, your backups",
      "Full auditability of every query",
    ],
    illustration: <LocalIllustration />,
    glow: "bg-[radial-gradient(ellipse_at_50%_60%,rgba(70,131,88,0.35),transparent_70%)]",
  },
  {
    title: "Hosted by Emulsion",
    body: "A dedicated, encrypted database for your organization alone. We handle uptime, patching and backups so your team can just work.",
    points: [
      "Dedicated database per customer",
      "Encrypted backups with tested restores",
      "Patching, monitoring and uptime handled for you",
    ],
    illustration: <HostedIllustration />,
    glow: "bg-[radial-gradient(ellipse_at_50%_60%,rgba(212,245,122,0.18),transparent_70%)]",
  },
];

export default function SecurityDeployments() {
  return (
    <section
      aria-labelledby="deployments-heading"
      className="relative overflow-hidden bg-forest-950 px-6 py-24 text-white lg:py-32"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-[260px] -right-[300px] size-[900px] rounded-full bg-[radial-gradient(closest-side,rgba(70,131,88,0.45),transparent)]"
      />
      <div className="relative mx-auto max-w-[1240px]">
        <div className="grid items-end gap-x-18 gap-y-6 lg:grid-cols-2">
          <h2
            id="deployments-heading"
            className="font-new-serif text-[42px] font-normal leading-[1.06] tracking-tight sm:text-[56px]"
          >
            Two deployments.{" "}
            <span className="italic text-lime-accent">One security posture.</span>
          </h2>
          <p className="text-[17px] leading-[1.7] text-white/70">
            The same controls apply whether the repository sits in your data
            centre or in an isolated environment we operate. The only difference
            is who holds the keys and handles maintenance.
          </p>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-2">
          {CARDS.map((c) => (
            <div
              key={c.title}
              className="overflow-hidden rounded-[28px] border border-white/10 bg-white/4 transition-colors hover:border-lime-accent/45 hover:bg-white/7"
            >
              <div aria-hidden="true" className={`flex h-60 items-center justify-center ${c.glow}`}>
                {c.illustration}
              </div>
              <div className="border-t border-white/8 p-8">
                <h3 className="font-new-serif text-3xl font-normal">{c.title}</h3>
                <p className="mt-3 text-base leading-relaxed text-white/70">{c.body}</p>
                <ul className="mt-6 flex flex-col gap-3 text-[15px]">
                  {c.points.map((p) => (
                    <li key={p} className="flex gap-2.5">
                      <CheckIcon className="mt-0.5 size-[18px] flex-none text-lime-accent" strokeWidth={2.4} aria-hidden="true" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
