import Link from "next/link";

const COLUMNS = [
  {
    heading: "Platform",
    links: [
      { label: "Overview", href: "/product" },
      { label: "Live connections", href: "/integrations" },
      { label: "Full extraction", href: "/integrations" },
      { label: "Search & reporting", href: "/product" },
      { label: "Historical archive", href: "/product" },
    ],
  },
  {
    heading: "Solutions",
    links: [
      { label: "Private equity", href: "#" },
      { label: "Utility roll-ups", href: "#" },
      { label: "Holding companies", href: "#" },
      { label: "Multi-entity finance", href: "#" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About", href: "#" },
      { label: "Security", href: "/security" },
      { label: "Pricing", href: "/pricing" },
      { label: "Contact", href: "/contact" },
    ],
  },
];

const LEGAL = [
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
];

const LINK = "text-white/70 transition-colors hover:text-white";

function FooterColumn({ heading, links }) {
  return (
    <div>
      <h3 className="text-sm font-semibold text-mint-200">{heading}</h3>
      <ul className="mt-5 flex flex-col gap-3.5 text-[15px]">
        {links.map((l) => (
          <li key={l.label}>
            <Link href={l.href} className={LINK}>
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/[0.08] bg-forest-950 text-white">
      {/* Soft green glow rising from the bottom edge */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-[380px] left-1/2 h-[640px] w-[1300px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(70,131,88,0.4),rgba(70,131,88,0)_75%)]"
      />

      <div className="relative mx-auto max-w-[1240px] px-6 pt-20 lg:pt-22">
        <div className="grid gap-x-18 gap-y-14 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1.9fr)]">
          {/* Brand */}
          <div>
            <Link href="/" aria-label="Emulsion home" className="inline-block">
              <img src="/emulsion_logo_dark_no_footer.png" alt="Emulsion" className="h-11 w-auto" />
            </Link>
            <p className="mt-5 max-w-[340px] font-serif text-[19px] leading-relaxed text-white/80">
              One searchable, permanent source of financial truth for
              organizations that grew through acquisition.
            </p>
            <div className="mt-7 flex flex-wrap gap-2.5 font-serif">
              <Link
                href="/contact?intent=demo"
                className="inline-flex h-[46px] items-center rounded-full bg-primary-cream px-[22px] text-base font-semibold text-forest-900 transition-colors hover:bg-white"
              >
                Book a demo
              </Link>
              <Link
                href="/contact?intent=sales"
                className="inline-flex h-[46px] items-center rounded-full border border-white/25 px-5 text-base font-semibold text-white transition-colors hover:bg-white/10"
              >
                Talk to sales
              </Link>
            </div>
          </div>

          {/* Link columns */}
          <nav aria-label="Footer" className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {COLUMNS.map((c) => (
              <FooterColumn key={c.heading} {...c} />
            ))}
          </nav>
        </div>

        {/* Oversized wordmark, cropped by the bottom bar */}
        <div aria-hidden="true" className="footer-wordmark -mb-10 mt-18 aspect-[1804/430] w-full" />

        {/* Bottom bar */}
        <div className="relative flex flex-wrap items-center justify-between gap-x-6 gap-y-3 border-t border-white/10 pt-5 pb-7 text-sm text-white/60">
          <p>© 2026 Emulsion Financial Solutions</p>
          <div className="flex gap-7">
            {LEGAL.map((l) => (
              <Link key={l.label} href={l.href} className={LINK}>
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
