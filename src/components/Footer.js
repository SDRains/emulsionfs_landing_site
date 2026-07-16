import Link from "next/link";

const PRODUCT_LINKS = [
  { label: "The problem", href: "#the-problem" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Key benefits", href: "#key-benefits" },
  { label: "Book a demo", href: "/contact?intent=demo" },
];

const COMPANY_LINKS = [
  { label: "Security", href: "#security" },
  { label: "Privacy", href: "#privacy" },
  { label: "Terms", href: "#terms" },
];

function EmulsionMark({ className }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
      <circle cx="16" cy="16" r="16" fill="#3b82f6" />
      <path d="M16 2a14 14 0 0 0 0 28z" fill="#0b1a2e" />
    </svg>
  );
}

function LinkColumn({ heading, links }) {
  return (
    <div>
      <h3 className="font-mono text-xs font-semibold tracking-[0.2em] text-slate-500">
        {heading}
      </h3>
      <ul className="mt-6 space-y-4">
        {links.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              className="text-slate-300 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  return (
    // <footer className="bg-[#0b1a2e] text-white">
    //   <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
    //     <div className="grid gap-14 lg:grid-cols-[1fr_auto]">
    //       {/* Brand */}
    //       <div>
    //         <Link href="/" className="flex items-center gap-3">
    //           <img src='/emulsion_logo_dark.png' className='w-32 h-auto object-cover' alt='Emulsion' />
    //         </Link>
    //         {/*<p className="mt-6 font-mono text-base text-slate-500">*/}
    //         {/*  The financial data layer*/}
    //         {/*</p>*/}
    //         <a
    //           href="mailto:hello@emulsion.com"
    //           className="mt-6 inline-block text-slate-300 transition-colors hover:text-white text-lg"
    //         >
    //           hello@emulsionfs.com
    //         </a>
    //       </div>
    //
    //       {/* Link columns */}
    //       <div className="flex gap-16 sm:gap-24">
    //         <LinkColumn heading="PRODUCT" links={PRODUCT_LINKS} />
    //         <LinkColumn heading="COMPANY" links={COMPANY_LINKS} />
    //       </div>
    //     </div>
    //
    //     <div className="mt-16 flex flex-col gap-4 border-t border-white/10 pt-8 font-mono text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
    //       <p>© 2026 Emulsion Financial Services</p>
    //       {/*<p className="flex items-center gap-2 tracking-[0.15em]">*/}
    //       {/*  <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />*/}
    //       {/*  ALL SYSTEMS, ONE LEDGER*/}
    //       {/*</p>*/}
    //     </div>
    //   </div>
    // </footer>
      <footer className='bg-primary-cream w-full'>
          <div className="px-4 text-center sm:text-left max-w-7xl mx-auto flex flex-col gap-4 border-t border-black/10 font-serif text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between py-6">
             <p>© 2026 Emulsion Financial Services</p>
             {/*<p className="flex items-center text-cyan-600">*/}
             {/*  ALL SYSTEMS, ONE LEDGER*/}
             {/*</p>*/}
              <div className='flex items-center sm:flex-row gap-6 mx-auto sm:mx-0'>
                  <p>Privacy</p>
                  <p>Security</p>
                  <p>Terms</p>
              </div>
          </div>
      </footer>
  );
}
