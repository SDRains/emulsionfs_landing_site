import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import { CheckIcon, ChevronDownIcon } from "lucide-react";

const INTENTS = [
  { value: "demo", label: "Book a demo" },
  { value: "sales", label: "Talk to sales" },
  { value: "other", label: "Something else" },
];

const ACCOUNTING_SYSTEMS = [
  "JD Edwards",
  "Sage Intacct",
  "QuickBooks",
  "NetSuite",
  "SAP (S/4HANA and/or Business One)",
  "Oracle Fusion Cloud ERP",
  "Workday Financial Management",
  "Xero",
  "Acumatica",
  "Sage 300 / Sage X3 (beyond Intacct)",
  "Microsoft Dynamics GP (legacy)",
  "Epicor",
  "Infor (CloudSuite / SunSystems)",
  "Multiple / other",
];

const EMPTY_FORM = {
  name: "",
  email: "",
  company: "",
  phone: "",
  entities: "",
  systems: [],
  message: "",
};

const FIELD_CLASS =
  "w-full rounded-xl border border-white/15 bg-white/[0.06] px-3.5 py-3 text-[15px] text-white placeholder:text-white/45 focus:border-lime-accent focus:ring-3 focus:ring-lime-accent/20 focus:outline-none disabled:opacity-60";

function Label({ children }) {
  return <span className="mb-2 block text-[13px] font-semibold text-white/80">{children}</span>;
}

function Optional() {
  return <span className="font-normal text-white/50"> (optional)</span>;
}

function SelectField({ label, options, value, onChange, disabled }) {
  return (
    <label className="block">
      <Label>{label}</Label>
      <div className="relative">
        <select
          className={`${FIELD_CLASS} appearance-none pr-10`}
          value={value}
          onChange={onChange}
          disabled={disabled}
        >
          <option value="" disabled className="text-forest-ink">
            Select…
          </option>
          {options.map((o) => (
            <option key={o} value={o} className="text-forest-ink">
              {o}
            </option>
          ))}
        </select>
        <ChevronDownIcon
          aria-hidden="true"
          className="pointer-events-none absolute top-1/2 right-3.5 size-4 -translate-y-1/2 text-white/60"
        />
      </div>
    </label>
  );
}

function MultiSelectField({ label, options, values, onChange, disabled }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    if (!open) return;
    function onDocClick(e) {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    }
    function onKey(e) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("mousedown", onDocClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDocClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const toggle = (opt) =>
    onChange(values.includes(opt) ? values.filter((v) => v !== opt) : [...values, opt]);

  return (
    <div className="block" ref={ref}>
      <Label>{label}</Label>
      <div className="relative">
        <button
          type="button"
          disabled={disabled}
          onClick={() => setOpen((o) => !o)}
          aria-haspopup="listbox"
          aria-expanded={open}
          className={`${FIELD_CLASS} flex cursor-pointer items-center justify-between gap-2 text-left`}
        >
          {values.length === 0 ? (
            <span className="truncate text-white/45">Select…</span>
          ) : (
            // First pick as a chip, then a count of the rest.
            <span className="flex min-w-0 gap-1.5">
              <span className="truncate rounded-full bg-lime-accent px-2.5 py-0.5 text-xs font-semibold text-forest-900">
                {values[0]}
              </span>
              {values.length > 1 && (
                <span className="flex-none rounded-full bg-mint-200 px-2.5 py-0.5 text-xs font-semibold text-forest-900">
                  +{values.length - 1}
                </span>
              )}
            </span>
          )}
          <ChevronDownIcon
            aria-hidden="true"
            className={`size-4 shrink-0 text-white/60 transition-transform ${open ? "rotate-180" : ""}`}
          />
        </button>

        {open && (
          <div
            role="listbox"
            aria-multiselectable="true"
            className="absolute z-20 mt-2 max-h-64 w-full overflow-y-auto rounded-2xl border border-white/10 bg-forest-950 p-1.5 shadow-[0_24px_48px_-12px_rgba(0,0,0,0.6)]"
          >
            {options.map((opt) => {
              const checked = values.includes(opt);
              return (
                <button
                  type="button"
                  key={opt}
                  role="option"
                  aria-selected={checked}
                  onClick={() => toggle(opt)}
                  className="flex w-full items-center gap-2.5 rounded-xl px-3 py-2 text-left text-sm text-white/85 hover:bg-white/[0.06]"
                >
                  <span
                    className={`flex size-4 shrink-0 items-center justify-center rounded border ${
                      checked ? "border-lime-accent bg-lime-accent" : "border-white/25"
                    }`}
                  >
                    {checked && <CheckIcon className="size-3 text-forest-900" strokeWidth={3} />}
                  </span>
                  {opt}
                </button>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

function SuccessPanel({ intent }) {
  const followUp =
    intent === "demo"
      ? "We'll be in touch within one business day to schedule your walkthrough."
      : "We'll be in touch within one business day.";
  return (
    <div className="flex flex-col items-center py-12 text-center">
      <span className="flex size-16 items-center justify-center rounded-full bg-lime-accent shadow-[0_0_40px_rgba(212,245,122,0.45)]">
        <CheckIcon className="size-8 text-forest-900" strokeWidth={2.5} />
      </span>
      <h2 className="mt-7 font-new-serif text-[32px] font-normal">
        Request <span className="italic text-lime-accent">received.</span>
      </h2>
      <p className="mt-3 max-w-xs text-[15px] leading-relaxed text-white/70">
        Thanks for reaching out. {followUp} Prefer to talk sooner? Email{" "}
        <a href="mailto:hello@emulsionfs.com" className="font-semibold text-lime-accent hover:text-white">
          hello@emulsionfs.com
        </a>
        .
      </p>
    </div>
  );
}

/** The contact form card. Submits to /api/subscribe (Mailchimp). */
export default function ContactForm() {
  const router = useRouter();
  const [intent, setIntent] = useState("demo");
  const [form, setForm] = useState(EMPTY_FORM);
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error
  const [errorMsg, setErrorMsg] = useState("");

  const submitting = status === "submitting";

  // On a statically-optimized page, query params aren't populated on the first
  // render — wait for router.isReady before honouring ?intent= from the CTA
  // that sent the visitor here.
  useEffect(() => {
    if (!router.isReady) return;
    const q = router.query.intent;
    if (INTENTS.some((i) => i.value === q)) setIntent(q);
  }, [router.isReady, router.query.intent]);

  const set = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  async function handleSubmit(e) {
    e.preventDefault();
    if (submitting) return;
    setStatus("submitting");
    setErrorMsg("");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          systems: form.systems.join(", "),
          intent,
        }),
      });
      const data = await res.json().catch(() => ({}));

      if (res.ok && data.success) {
        setStatus("success");
      } else {
        setStatus("error");
        setErrorMsg(data.error || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setErrorMsg("Couldn't reach the server. Please try again, or email hello@emulsionfs.com.");
    }
  }

  return (
    <div className="relative">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-x-10 -inset-y-16 bg-[radial-gradient(closest-side,rgba(212,245,122,0.4),rgba(212,245,122,0)_75%)]"
      />
      <div className="relative overflow-hidden rounded-[32px] bg-forest-900 p-6 text-white shadow-[0_40px_80px_-24px_rgba(19,43,29,0.5)] sm:p-10">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-50 -right-40 h-[520px] w-[520px] rounded-full bg-[radial-gradient(closest-side,rgba(70,131,88,0.55),transparent)]"
        />
        <div className="relative">
          {status === "success" ? (
            <SuccessPanel intent={intent} />
          ) : (
            <>
              <h2 className="font-new-serif text-[32px] font-normal">
                Tell us about <span className="italic text-lime-accent">your setup.</span>
              </h2>
              <p className="mt-2 text-[15px] text-white/65">
                The more you share, the more useful the first call is.
              </p>

              <form onSubmit={handleSubmit} className="mt-7 flex flex-col gap-[18px]" noValidate>
                <fieldset disabled={submitting}>
                  <legend className="mb-2.5 block text-[13px] font-semibold text-white/80">I&apos;d like to…</legend>
                  <div className="inline-flex flex-wrap gap-1 rounded-full border border-white/10 bg-white/[0.06] p-1">
                    {INTENTS.map((i) => (
                      <label
                        key={i.value}
                        className={`cursor-pointer rounded-full px-[18px] py-2 text-sm font-semibold transition-colors has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-lime-accent ${
                          intent === i.value ? "bg-lime-accent text-forest-900" : "text-white/80 hover:bg-white/[0.08]"
                        }`}
                      >
                        <input
                          type="radio"
                          name="intent"
                          value={i.value}
                          checked={intent === i.value}
                          onChange={() => setIntent(i.value)}
                          className="sr-only"
                        />
                        {i.label}
                      </label>
                    ))}
                  </div>
                </fieldset>

                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="block">
                    <Label>Name</Label>
                    <input
                      className={FIELD_CLASS}
                      placeholder="Jane Rivera"
                      value={form.name}
                      onChange={set("name")}
                      autoComplete="name"
                      required
                      disabled={submitting}
                    />
                  </label>
                  <label className="block">
                    <Label>Work email</Label>
                    <input
                      type="email"
                      className={FIELD_CLASS}
                      placeholder="jane@company.com"
                      value={form.email}
                      onChange={set("email")}
                      autoComplete="email"
                      required
                      disabled={submitting}
                    />
                  </label>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="block">
                    <Label>Company</Label>
                    <input
                      className={FIELD_CLASS}
                      placeholder="Company or holding group"
                      value={form.company}
                      onChange={set("company")}
                      autoComplete="organization"
                      disabled={submitting}
                    />
                  </label>
                  <label className="block">
                    <Label>
                      Phone
                      <Optional />
                    </Label>
                    <input
                      type="tel"
                      className={FIELD_CLASS}
                      placeholder="+1 555 000 1234"
                      value={form.phone}
                      onChange={set("phone")}
                      autoComplete="tel"
                      disabled={submitting}
                    />
                  </label>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <SelectField
                    label="Entities"
                    options={["1–3", "4–10", "11–25", "25+"]}
                    value={form.entities}
                    onChange={set("entities")}
                    disabled={submitting}
                  />
                  <MultiSelectField
                    label="Accounting systems"
                    options={ACCOUNTING_SYSTEMS}
                    values={form.systems}
                    onChange={(vals) => setForm((f) => ({ ...f, systems: vals }))}
                    disabled={submitting}
                  />
                </div>

                <label className="block">
                  <Label>
                    What are you running today?
                    <Optional />
                  </Label>
                  <textarea
                    rows={4}
                    className={`${FIELD_CLASS} resize-none`}
                    placeholder="e.g. JD Edwards at HQ, three entities on QuickBooks, one legacy Great Plains install we'd love to retire…"
                    value={form.message}
                    onChange={set("message")}
                    disabled={submitting}
                  />
                </label>

                {status === "error" && (
                  <p
                    role="alert"
                    className="rounded-xl border border-red-400/30 bg-red-500/15 px-3.5 py-3 text-sm text-red-200"
                  >
                    {errorMsg}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={submitting}
                  className="h-14 w-full cursor-pointer rounded-full bg-lime-accent font-serif text-lg font-semibold text-forest-900 shadow-[0_0_40px_rgba(212,245,122,0.3)] transition-colors hover:bg-[#E3FA9A] disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {submitting ? "Sending…" : "Send request"}
                </button>

                <p className="text-center text-[13px] text-white/55">
                  No commitment. We&apos;ll never share your details.
                </p>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
