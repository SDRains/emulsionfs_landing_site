import { CheckIcon } from "lucide-react";

// Faint graph-paper grid, matching the hero figure.
const GRID_BG = {
  backgroundImage:
    "linear-gradient(rgba(70,131,88,0.10) 1px, transparent 1px), linear-gradient(90deg, rgba(70,131,88,0.10) 1px, transparent 1px)",
  backgroundSize: "24px 24px",
};

function LocalIllustration() {
  return (
    <div className="flex items-center justify-center gap-6">
      <div className="flex h-28 w-40 items-end justify-center border-2 border-dark-background pb-3">
        <span className="font-mono text-xs tracking-wider text-slate-600">
          YOUR VPC
        </span>
      </div>
      <span className="h-px w-14 bg-slate-400" />
      <div className="flex h-24 w-24 items-start justify-center bg-primary-green-700 pt-3">
        <span className="font-mono text-xs tracking-wider text-white/80">DB</span>
      </div>
    </div>
  );
}

function HostedIllustration() {
  return (
    <div className="flex items-center justify-center gap-4">
      <div className="h-28 w-20 border border-slate-300 bg-white" />
      <div className="flex h-28 w-20 items-center justify-center border-2 border-primary-green-600 bg-white text-center">
        <span className="font-mono text-[10px] leading-tight tracking-wider text-primary-green-700">
          YOUR
          <br />
          TENANT
        </span>
      </div>
      <div className="h-28 w-20 border border-slate-300 bg-white" />
    </div>
  );
}

const CARDS = [
  {
    illustration: <LocalIllustration />,
    caption: "",
    title: "Local deployment",
    body: "Runs in your data centre or private cloud, behind your firewall. Your team holds the keys and sets retention. Emulsion connects out to everything else.",
    points: [
      "Meets strict data-residency requirements",
      "Your key management, your backups",
      "Full auditability of every query",
    ],
  },
  {
    illustration: <HostedIllustration />,
    caption: "",
    title: "Hosted by Emulsion",
    body: "A dedicated, encrypted database per customer — never shared, never pooled. We manage uptime, patching, and backups so your team can just work.",
    points: [
      "Dedicated database per customer",
      "AES-256 at rest, TLS in transit",
      "SOC 2 Type II audited operations",
    ],
  },
];

function DeploymentCard({ illustration, caption, title, body, points }) {
  return (
    <div className="border border-slate-200">
      {/* Figure */}
      <div className="bg-primary-cream p-6 sm:p-8">
        <div
          className="hidden sm:flex items-center justify-center border border-dashed border-slate-300 p-6"
          style={GRID_BG}
        >
          {illustration}
        </div>
      </div>

      {/* Content */}
      <div className="border-t border-slate-200 bg-white p-8">
        <h3 className="font-serif text-2xl font-semibold text-dark-background">
          {title}
        </h3>
        <p className="mt-4 text-base leading-7 text-slate-500">{body}</p>
        <ul className="mt-6 space-y-3">
          {points.map((p) => (
            <li
              key={p}
              className="flex items-start gap-2.5 text-sm text-slate-600"
            >
              <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-primary-green-600" />
              <span>{p}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function SecurityDeployments() {
  return (
    <section className="bg-white text-[#141414]">
      <div className="mx-auto max-w-screen-2xl px-6 py-24 lg:px-10 lg:py-20">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-start lg:gap-16">
          <h2 className="font-serif text-4xl font-semibold leading-tight text-dark-background sm:text-5xl">
            Two deployments,
            <br />
            <span className="italic text-primary-green-600">
              one security posture.
            </span>
          </h2>
          <p className="max-w-xl text-lg leading-8 text-slate-500 lg:pt-2">
            The same controls apply whether the repository sits in your data
            centre or in an isolated environment we operate. The difference is
            who holds the keys and the maintenance.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {CARDS.map((c) => (
            <DeploymentCard key={c.title} {...c} />
          ))}
        </div>
      </div>
    </section>
  );
}
