import Link from "next/link";
import { CheckIcon } from "lucide-react";

const TABS = [
  { label: "Privacy Policy", href: "/privacy", id: "privacy" },
  { label: "Terms of Service", href: "/terms", id: "terms" },
];

/**
 * Highlights text that still needs a real value before these pages are
 * published (entity name, dates, retention periods, etc.).
 */
export function Ph({ children }) {
  return (
    <span className="rounded-md bg-[#EAF7BF] px-1.5 py-px font-semibold text-primary-green-700">{children}</span>
  );
}

export function LegalSection({ id, title, children }) {
  return (
    <section
      id={id}
      className="scroll-mt-28 border-t border-[#EEECE3] py-9 first:border-t-0 first:pt-0 last:pb-0"
    >
      <h2 className="font-new-serif text-[30px] font-normal leading-tight text-forest-ink">{title}</h2>
      {children}
    </section>
  );
}

export function LegalH3({ children }) {
  return <h3 className="mt-6 text-base font-semibold text-forest-ink">{children}</h3>;
}

export function LegalP({ children }) {
  return <p className="mt-3 text-base leading-[1.75] text-forest-ink/80">{children}</p>;
}

export function LegalList({ items }) {
  return (
    <ul className="mt-3 list-disc space-y-1 pl-5 text-base leading-[1.75] text-forest-ink/80 marker:text-primary-green-600">
      {items.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  );
}

/** Bold lead-in at the start of a paragraph or list item ("Our role."). */
export function LegalLead({ children }) {
  return <strong className="font-semibold text-forest-ink">{children}</strong>;
}

export function LegalLink({ href, children }) {
  const external = href.startsWith("http");
  return (
    <a
      href={href}
      className="font-medium text-primary-green-700 underline decoration-primary-green-600/40 underline-offset-2 hover:decoration-primary-green-700"
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {children}
    </a>
  );
}

/**
 * Simple data table for legal copy. Scrolls sideways on narrow screens
 * rather than squashing columns.
 *
 * @param {string} caption  Read by screen readers only.
 * @param {string[]} head
 * @param {Array<Array<React.ReactNode>>} rows
 */
export function LegalTable({ caption, head, rows }) {
  return (
    <div className="mt-4 overflow-x-auto rounded-[18px] border border-sand-line">
      <table className="w-full min-w-[560px] border-collapse text-left text-[15px] leading-relaxed">
        <caption className="sr-only">{caption}</caption>
        <thead className="bg-primary-cream">
          <tr>
            {head.map((h) => (
              <th key={h} scope="col" className="px-4 py-3 text-[13px] font-semibold text-forest-ink/70">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, r) => (
            <tr key={r} className="border-t border-[#EEECE3] align-top">
              {row.map((cell, c) => (
                <td key={c} className={`px-4 py-3 ${c === 0 ? "font-medium text-forest-ink" : "text-forest-ink/80"}`}>
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function ContactChips({ items }) {
  return (
    <div className="mt-4 flex flex-wrap gap-2.5">
      {items.map((item, i) => (
        <span key={i} className="rounded-[14px] bg-primary-cream px-4 py-2.5 text-[15px]">
          {item}
        </span>
      ))}
    </div>
  );
}

/**
 * Shared shell for the Privacy and Terms pages: tab switch, title,
 * "At a glance" summary, an on-this-page list and the document card.
 *
 * @param {"privacy"|"terms"} active
 * @param {Array<{ id: string, title: string }>} sections  Used for the on-this-page list.
 */
export default function LegalLayout({ active, title, accent, intro, effective, updated, glance, sections, children }) {
  return (
    <>
      <section className="bg-primary-cream px-4 text-forest-ink">
        <div className="mx-auto max-w-[1240px] px-2 pt-36 pb-14 lg:pt-44">
          <nav aria-label="Legal pages" className="inline-flex rounded-full border border-sand-line bg-white p-1 text-sm font-semibold">
            {TABS.map((t) => (
              <Link
                key={t.id}
                href={t.href}
                aria-current={t.id === active ? "page" : undefined}
                className={`rounded-full px-4 py-2 transition-colors ${
                  t.id === active ? "bg-forest-900 text-white" : "text-forest-ink/80 hover:text-primary-green-700"
                }`}
              >
                {t.label}
              </Link>
            ))}
          </nav>

          <h1 className="mt-7 font-new-serif text-5xl font-normal leading-[1.02] tracking-tight sm:text-6xl lg:text-[72px]">
            {title} <span className="italic text-primary-green-700">{accent}</span>
          </h1>
          <p className="mt-4 text-[15px] text-forest-ink/65">
            Effective {effective} · Last updated {updated}
          </p>
          <p className="mt-6 max-w-[680px] text-lg leading-relaxed text-forest-ink/75 sm:text-[19px]">{intro}</p>

          <div className="relative mt-10 overflow-hidden rounded-[28px] bg-forest-900 p-8 text-white">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -top-44 -right-36 h-[480px] w-[480px] rounded-full bg-[radial-gradient(closest-side,rgba(212,245,122,0.25),transparent)]"
            />
            <h2 className="relative font-new-serif text-[26px] font-normal">At a glance</h2>
            <ul className="relative mt-5 grid gap-3.5 sm:grid-cols-2 lg:grid-cols-4">
              {glance.map((g) => (
                <li key={g} className="flex items-start gap-3 text-[15px] leading-normal">
                  <span className="flex size-6 flex-none items-center justify-center rounded-full bg-lime-accent text-forest-900">
                    <CheckIcon className="size-[13px]" strokeWidth={3.2} aria-hidden="true" />
                  </span>
                  {g}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-primary-cream px-6 pb-24 text-forest-ink lg:pb-32">
        <div className="mx-auto flex max-w-[1240px] flex-col gap-10 lg:flex-row lg:items-start">
          <nav aria-label="On this page" className="text-sm lg:sticky lg:top-28 lg:w-[260px] lg:flex-none">
            <p className="mb-2 ml-3 text-[13px] font-semibold text-forest-ink/65">On this page</p>
            <ul className="flex flex-wrap gap-1 lg:flex-col">
              {sections.map((s) => (
                <li key={s.id}>
                  <a
                    href={`#${s.id}`}
                    className="block rounded-[10px] px-3 py-1.5 text-forest-ink/80 transition-colors hover:bg-primary-green-600/10 hover:text-primary-green-700"
                  >
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <article className="min-w-0 flex-1 rounded-[28px] border border-sand-line bg-white p-7 sm:p-12 lg:px-14">
            {children}
          </article>
        </div>
      </section>
    </>
  );
}
