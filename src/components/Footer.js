const COLUMNS = [
  {
    heading: "PLATFORM",
    links: [
      { label: "Overview", href: "/product" },
      { label: "Live connections", href: "/integrations" },
      { label: "Full extraction", href: "/integrations" },
      { label: "Search & reporting", href: "/product" },
      { label: "Historical archive", href: "/product" },
    ],
  },
  {
    heading: "SOLUTIONS",
    links: [
      { label: "Private equity", href: "#" },
      { label: "Utility roll-ups", href: "#" },
      { label: "Holding companies", href: "#" },
      { label: "Multi-entity finance", href: "#" },
    ],
  },
  {
    heading: "COMPANY",
    links: [
      { label: "About", href: "#" },
      { label: "Security", href: "/security" },
      { label: "Contact", href: "/contact" },
      { label: "Book a demo", href: "/contact?intent=demo" },
    ],
  },
];

const LEGAL = [
  { label: "Privacy", href: "#" },
  { label: "Terms", href: "#" },
];

function FooterColumn({ heading, links }) {
  return (
    <div className='flex justify-start'>
      <div className=''>
        <h3 className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-[#a99d82]">
          {heading}
        </h3>
        <ul className="mt-6 space-y-3.5">
          {links.map((l) => (
              <li key={l.label}>
                <a
                    href={l.href}
                    className="text-base text-slate-300 transition-colors hover:text-white"
                >
                  {l.label}
                </a>
              </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="bg-dark-background text-white">
      <div className="mx-auto max-w-screen-2xl px-6 lg:px-10">
        {/* Main */}
        <div className="grid gap-12 border-t border-white/10 pb-14 pt-16 sm:grid-cols-2">
          {/* Brand */}
          <div>
            <img src='/emulsion_logo_dark.png' className='h-16 w-auto object-cover' alt='Emulsion' />
            <p className="mt-6 max-w-xs text-base leading-7 text-slate-400">
              One searchable, permanent source of financial truth for
              organizations that grew through acquisition.
            </p>
          </div>

          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
            {COLUMNS.map((c) => (
                <FooterColumn key={c.heading} {...c} />
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col gap-4 border-t border-white/10 py-6 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Emulsion Financial Solutions</p>
          <div className="flex items-center gap-8">
            {LEGAL.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="text-slate-400 transition-colors hover:text-white"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
