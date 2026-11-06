import { CloudIcon, EyeOffIcon, ServerIcon, SlidersHorizontalIcon } from "lucide-react";

const OPTIONS = [
  {
    icon: CloudIcon,
    title: "Emulsion-hosted",
    rows: [
      ["Time to stand up", "Fastest"],
      ["Where data lives", "Our platform, isolated option"],
      ["Maintenance", "We handle it"],
      ["Capabilities", "Full product"],
    ],
  },
  {
    icon: ServerIcon,
    title: "Your environment",
    rows: [
      ["Time to stand up", "Your infrastructure timeline"],
      ["Where data lives", "Entirely in your network"],
      ["Maintenance", "Your team, our support"],
      ["Capabilities", "Full product"],
    ],
  },
];

const AI_FEATURES = [
  {
    icon: ServerIcon,
    title: "Runs where your data lives",
    body: "Nothing is sent to the public internet.",
  },
  {
    icon: EyeOffIcon,
    title: "Nothing retained, nothing trained",
    body: "No chat history, no logs, no data handed to an outside model provider.",
  },
  {
    icon: SlidersHorizontalIcon,
    title: "Fit to your needs",
    body: "Models selected and tuned to your requirements and your data.",
  },
];

export default function Environments() {
  return (
    <section aria-labelledby="environments-heading" className="bg-primary-cream px-6 pb-24 text-forest-ink lg:pb-32">
      <div className="mx-auto max-w-[1240px]">
        <div className="mx-auto max-w-3xl text-center">
          <h2
            id="environments-heading"
            className="font-new-serif text-4xl font-normal leading-[1.06] tracking-tight sm:text-5xl lg:text-[56px]"
          >
            One platform,{" "}
            <span className="italic text-primary-green-700">your choice of environment.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-[17px] leading-relaxed text-forest-ink/75">
            Let us host it for the fastest start, or run it inside your own
            network so your data never leaves. Same product, same capabilities.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {OPTIONS.map((o) => {
            const Icon = o.icon;
            return (
              <div
                key={o.title}
                className="rounded-[28px] border border-sand-line bg-white p-9 transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_48px_-20px_rgba(19,43,29,0.35)]"
              >
                <div className="flex items-center gap-3.5">
                  <span className="flex size-12 items-center justify-center rounded-[14px] bg-[#E3F0E0] text-primary-green-700">
                    <Icon className="size-6" strokeWidth={2} aria-hidden="true" />
                  </span>
                  <h3 className="font-new-serif text-[28px] font-normal">{o.title}</h3>
                </div>
                <dl className="mt-7 grid grid-cols-[auto_1fr] text-[15px]">
                  {o.rows.map(([label, value]) => (
                    <div key={label} className="contents">
                      <dt className="border-t border-[#EEECE3] py-3.5 pr-6 text-forest-ink/70">{label}</dt>
                      <dd
                        className={`border-t border-[#EEECE3] py-3.5 font-semibold ${
                          label === "Capabilities" ? "text-primary-green-700" : ""
                        }`}
                      >
                        {value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            );
          })}
        </div>

        {/* Optional private AI */}
        <div className="mt-5 rounded-[28px] border border-[#D3E6C6] bg-linear-140 from-[#DDF0DA] to-[#EAF7BF] p-8 sm:p-12">
          <div className="grid items-start gap-x-14 gap-y-8 lg:grid-cols-2">
            <div>
              <h3 className="font-new-serif text-[36px] font-normal leading-[1.1]">
                Put your data to work with AI,{" "}
                <span className="italic text-primary-green-700">without it leaving your control.</span>
              </h3>
              <p className="mt-4 text-[15px] leading-relaxed text-forest-ink/80">
                Large language models for search and analysis can run entirely
                inside your environment or a dedicated, isolated cluster.
                Entirely optional: Emulsion delivers its full value without it.
              </p>
            </div>
            <ul className="flex flex-col gap-3">
              {AI_FEATURES.map((f) => {
                const Icon = f.icon;
                return (
                  <li key={f.title} className="flex gap-3.5 rounded-[18px] bg-white/70 p-[18px]">
                    <span className="flex size-10 flex-none items-center justify-center rounded-xl bg-forest-900 text-lime-accent">
                      <Icon className="size-5" strokeWidth={2} aria-hidden="true" />
                    </span>
                    <div>
                      <p className="font-semibold">{f.title}</p>
                      <p className="mt-1 text-sm leading-relaxed text-forest-ink/80">{f.body}</p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
