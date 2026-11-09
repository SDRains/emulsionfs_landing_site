import { useState, useEffect } from "react";
import Link from "next/link";

const NAV_LINKS = [
  { label: "Home", href: "/", id: "home" },
  { label: "Product", href: "/product", id: "product" },
  { label: "Integrations", href: "/integrations", id: "integrations" },
  { label: "Security", href: "/security", id: "security" },
  { label: "Pricing", href: "/pricing", id: "pricing" },
];

// Two looks for the pill: "dark" floats over the forest-green home hero,
// "light" sits over the cream heroes on every other page.
const TONES = {
  dark: {
    logo: "/emulsion_logo_dark_no_footer.png",
    pill: "border-white/15 bg-white/[0.07] shadow-[0_10px_30px_rgba(8,24,15,0.25)]",
    pillScrolled: "border-white/10 bg-forest-900/85 shadow-lg shadow-black/20",
    track: "rounded-full bg-forest-900/25 p-1",
    linkActive: "bg-primary-cream font-semibold text-forest-900",
    link: "text-white/85 hover:bg-white/10 hover:text-white",
    login: "text-white hover:bg-white/10",
    signup: "bg-primary-cream text-forest-900 hover:bg-white",
    toggle: "text-white hover:bg-white/10",
  },
  light: {
    logo: "/emulsion_logo_light_no_footer.png",
    pill: "border-forest-900/10 bg-white/60 shadow-[0_10px_30px_rgba(30,70,45,0.08)]",
    pillScrolled: "border-forest-900/10 bg-white/85 shadow-lg shadow-forest-900/5",
    track: "",
    linkActive: "bg-primary-green-600/15 font-semibold text-primary-green-700",
    link: "text-forest-ink/80 hover:bg-primary-green-600/10 hover:text-primary-green-700",
    login: "text-forest-ink hover:bg-primary-green-600/10",
    signup: "bg-primary-green-600 text-white hover:bg-primary-green-700",
    toggle: "text-forest-ink hover:bg-primary-green-600/10",
  },
};

export default function Navbar({ activePage = "home", tone = "light" }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const t = TONES[tone] ?? TONES.light;

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Firm up the pill once the page scrolls under it.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    // Fixed (not sticky) so it floats over each page's hero without taking up
    // layout space. The wrapper ignores clicks so only the pill itself blocks
    // the page underneath.
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50 px-4 pt-5">
      <nav
        aria-label="Main"
        className={`pointer-events-auto mx-auto flex h-16 max-w-7xl items-center gap-4 rounded-full border pl-6 pr-2 backdrop-blur-md transition-[background-color,box-shadow,border-color] duration-300 ${
          scrolled ? t.pillScrolled : t.pill
        }`}
      >
        <Link href="/" className="flex flex-1 items-center" aria-label="Emulsion home">
          <img src={t.logo} className="h-9 w-auto" alt="Emulsion Financial Solutions" />
        </Link>

        {/* Desktop nav links — centered */}
        <ul className={`hidden items-center gap-0.5 font-serif md:flex ${t.track}`}>
          {NAV_LINKS.map((link) => {
            const active = activePage === link.id;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className={`block rounded-full px-4 py-2 text-base transition-colors lg:px-[18px] ${
                    active ? t.linkActive : t.link
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Desktop auth actions — pinned right */}
        <div className="hidden flex-1 items-center justify-end gap-1.5 font-serif md:flex">
          <Link
            href="/login"
            className={`rounded-full px-4 py-2.5 text-base font-semibold transition-colors ${t.login}`}
          >
            Log in
          </Link>
          <Link
            href="/contact?intent=demo"
            className={`rounded-full px-[22px] py-2.5 text-base font-semibold transition-colors ${t.signup}`}
          >
            Request a Demo
          </Link>
        </div>

        {/* Mobile menu toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className={`inline-flex h-11 w-11 items-center justify-center rounded-full transition-colors md:hidden ${t.toggle}`}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          <svg
            viewBox="0 0 24 24"
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            aria-hidden="true"
          >
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </nav>

      {/* Mobile menu panel */}
      {open && (
        <div className="pointer-events-auto mx-auto mt-2 max-w-7xl rounded-3xl border border-forest-900/10 bg-white/95 p-3 shadow-lg backdrop-blur-md md:hidden">
          <ul className="flex flex-col gap-1 font-serif">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  aria-current={activePage === link.id ? "page" : undefined}
                  className={`block rounded-2xl px-4 py-3 text-lg transition-colors ${
                    activePage === link.id
                      ? "bg-primary-green-600/10 font-semibold text-primary-green-700"
                      : "text-forest-ink hover:bg-primary-green-600/5"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-2 grid grid-cols-2 gap-2 border-t border-forest-900/10 pt-3 font-serif">
            <Link
              href="/login"
              onClick={() => setOpen(false)}
              className="rounded-full border border-forest-900/15 px-5 py-3 text-center text-lg font-semibold text-forest-ink transition-colors hover:bg-primary-green-600/5"
            >
              Log in
            </Link>
            <Link
              href="/signup"
              onClick={() => setOpen(false)}
              className="rounded-full bg-primary-green-600 px-5 py-3 text-center text-lg font-semibold text-white transition-colors hover:bg-primary-green-700"
            >
              Sign up
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
