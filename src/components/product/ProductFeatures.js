import {
  SearchIcon,
  BarChartIcon,
  BlendIcon,
  LayoutDashboardIcon,
  FileTextIcon,
  UserIcon,
} from "lucide-react";

const FEATURES = [
  {
    icon: SearchIcon,
    title: "Unified search",
    body: "One query across every system, live and archived.",
  },
  {
    icon: BarChartIcon,
    title: "Consolidated reporting",
    body: "Cross-entity P&L, balance sheet, and cash flow in hours.",
  },
  {
    icon: BlendIcon,
    title: "Live × historical views",
    body: "Current performance against full history, side by side.",
  },
  {
    icon: LayoutDashboardIcon,
    title: "Entity management",
    body: "Every acquisition's status, source system, and sync health at a glance.",
  },
  {
    icon: FileTextIcon,
    title: "Audit-ready exports",
    body: "Every number traceable to its source record and system.",
  },
  {
    icon: UserIcon,
    title: "Role-based access",
    body: "Entity-level permissions — controllers see their books, leadership sees the whole.",
  },
];

export default function ProductFeatures() {
  return (
    <section className="bg-white text-[#141414]">
      <div className="mx-auto max-w-7xl px-6 py-28 lg:px-10">
        <h2 className="max-w-3xl font-serif text-4xl font-semibold leading-tight text-dark-blue sm:text-5xl">
          The daily product your finance
          <br />
          team lives in.
        </h2>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f) => {
            const Icon = f.icon;
            return (
              <div key={f.title} className="rounded-2xl bg-primary-cream p-8">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white shadow-sm">
                  <Icon className="h-5 w-5 text-dark-blue" />
                </div>
                <h3 className="mt-12 text-lg font-bold text-dark-blue">
                  {f.title}
                </h3>
                <p className="mt-2 text-base leading-7 text-slate-500">
                  {f.body}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
