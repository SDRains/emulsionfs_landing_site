import { useState, useEffect } from "react";
import Link from "next/link";

const NAV_LINKS = [
  { label: "Home", href: "/", id: "home" },
  { label: "Product", href: "/product", id: "product" },
  { label: "Integrations", href: "/integrations", id: "integrations" },
  { label: "Pricing", href: "/pricing", id: "pricing" },
];

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-3">
      <img src='/emulsion_logo_light.png' className='h-12 w-auto object-cover'  alt='Emulsion Financial Solutions' />
    </Link>
  );
}

export default function Navbar({activePage = "home"}) {
  const [open, setOpen] = useState(false);

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-primary-cream/95 backdrop-blur supports-[backdrop-filter]:bg-primary-cream/80">
      <nav className="mx-auto flex h-20 max-w-screen-2xl items-center justify-between px-6 lg:px-10">
        <Logo />

        {/* Desktop actions */}
        <div className="hidden items-center gap-6 md:flex">
          {/* Desktop nav links */}
          <ul className="hidden items-center gap-8 md:flex mr-8 font-serif">
            {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                      href={link.href}
                      className={`text-base ${activePage === link.id ? 'text-cyan-700 font-semibold' : 'text-slate-700'} transition-colors hover:text-cyan-700`}
                  >
                    {link.label}
                  </a>
                  <div className={`${activePage === link.id ? 'bg-cyan-600' : 'bg-transparent'} h-0.5 w-full`} />
                </li>
            ))}
          </ul>

          <a
            href="#sign-in"
            className="text-base text-slate-700 font-semibold transition-colors hover:text-cyan-700 font-serif"
          >
            Sign in
          </a>
          <a
            href="/contact?intent=demo"
            className="rounded-full bg-cyan-600 px-5 py-2.5 text-base font-semibold text-white transition-colors hover:bg-cyan-500 "
          >
            Book a Demo
          </a>
        </div>

        {/* Mobile menu toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex items-center justify-center rounded-md p-2 text-dark-blue transition-colors hover:text-dark-blue/60 md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? (
            <svg
              viewBox="0 0 24 24"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          ) : (
            <svg
              viewBox="0 0 24 24"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile menu panel */}
      {open && (
        <div className="bg-primary-cream md:hidden shadow-lg">
          <ul className="flex flex-col gap-1 px-6 py-0">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`block rounded-md p-2 text-lg text-dark-blue transition-colors 
                  ${activePage === link.id ? 'font-bold bg-dark-blue/5' : ''}`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex flex-col gap-3 border-t border-dark-blue/10 border-dashed px-6 py-5 mt-2">
            <a
              href="#sign-in"
              onClick={() => setOpen(false)}
              className="text-center text-lg text-dark-blue transition-colors hover:text-white"
            >
              Sign in
            </a>
            <a
              href="/contact?intent=demo"
              onClick={() => setOpen(false)}
              className="rounded-full bg-cyan-600 px-5 py-3 text-center text-lg font-semibold text-white transition-colors hover:bg-cyan-500"
            >
              Book a demo
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
