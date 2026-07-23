import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import {
  ClockIcon,
  UsersIcon,
  ShieldCheckIcon,
  ChevronDownIcon,
  CheckIcon,
} from "lucide-react";

const EXPECT = [
  {
    icon: ClockIcon,
    title: "One business day",
    body: "We reply within one business day — usually sooner.",
  },
  {
    icon: UsersIcon,
    title: "30 minutes, your systems",
    body: "A working session with a consultant, not a pitch deck. We'll show Emulsion against the stack you actually run.",
  },
  {
    icon: ShieldCheckIcon,
    title: "No commitment",
    body: "Nothing to sign, and we'll never share your details.",
  },
];

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
  "w-full rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2.5 text-sm text-white placeholder:text-slate-500 focus:border-cyan-500 focus:outline-none disabled:opacity-60";

function Label({ children }) {
  return (
    <span className="mb-1.5 block text-xs font-semibold text-slate-300">
      {children}
    </span>
  );
}

function SelectField({ label, options, value, onChange, disabled }) {
  return (
    <label className="block">
      <Label>{label}</Label>
      <div className="relative">
        <select
          className={`${FIELD_CLASS} appearance-none pr-9`}
          value={value}
          onChange={onChange}
          disabled={disabled}
        >
          <option value="" disabled className="text-slate-900">
            Select…
          </option>
          {options.map((o) => (
            <option key={o} value={o} className="text-slate-900">
              {o}
            </option>
          ))}
        </select>
        <ChevronDownIcon className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
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
    onChange(
      values.includes(opt)
        ? values.filter((v) => v !== opt)
        : [...values, opt]
    );

  const summary =
    values.length === 0
      ? "Select…"
      : values.length === 1
        ? values[0]
        : `${values.length} selected`;

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
          className={`${FIELD_CLASS} flex items-center justify-between text-left ${
            values.length === 0 ? "text-slate-500" : "text-white"
          }`}
        >
          <span className="truncate">{summary}</span>
          <ChevronDownIcon className="ml-2 h-4 w-4 shrink-0 text-slate-400" />
        </button>

        {open && (
          <div
            role="listbox"
            aria-multiselectable="true"
            className="absolute z-20 mt-2 max-h-60 w-full overflow-y-auto rounded-lg border border-white/10 bg-[#13243f] p-1 shadow-xl"
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
                  className="flex w-full items-center gap-2.5 rounded-md px-2.5 py-2 text-left text-sm text-slate-200 hover:bg-white/5"
                >
                  <span
                    className={`flex h-4 w-4 shrink-0 items-center justify-center rounded border ${
                      checked ? "border-cyan-500 bg-cyan-600" : "border-white/25"
                    }`}
                  >
                    {checked && (
                      <CheckIcon className="h-3 w-3 text-white" strokeWidth={3} />
                    )}
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
    <div className="flex flex-col items-center py-10 text-center">
      <span className="flex h-14 w-14 items-center justify-center rounded-full bg-cyan-500/15">
        <CheckIcon className="h-7 w-7 text-cyan-400" strokeWidth={2.5} />
      </span>
      <h3 className="mt-6 font-serif text-2xl font-bold text-white">
        Request received.
      </h3>
      <p className="mt-3 max-w-xs text-sm leading-6 text-slate-400">
        Thanks for reaching out. {followUp} Prefer to talk sooner? Email{" "}
        <a
          href="mailto:hello@emulsionfs.com"
          className="font-semibold text-cyan-400 hover:text-cyan-300"
        >
          hello@emulsionfs.com
        </a>
        .
      </p>
    </div>
  );
}

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

  const set = (key) => (e) =>
    setForm((f) => ({ ...f, [key]: e.target.value }));

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
      setErrorMsg(
        "Couldn't reach the server. Please try again, or email hello@emulsionfs.com."
      );
    }
  }

  return (
    <section className="bg-white text-[#141414]">
      <div className="mx-auto max-w-7xl px-6 py-28 lg:px-10">
        <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:items-start lg:gap-16">
          {/* Left: what to expect + direct contact */}
          <div>
            <h2 className="font-serif text-3xl font-semibold leading-tight text-dark-blue">
              What to expect
            </h2>

            <div className="mt-8 space-y-7">
              {EXPECT.map((e) => {
                const Icon = e.icon;
                return (
                  <div key={e.title} className="flex gap-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-cream ring-1 ring-black/5">
                      <Icon className="h-5 w-5 text-dark-blue" />
                    </span>
                    <div>
                      <h3 className="text-base font-bold text-dark-blue">
                        {e.title}
                      </h3>
                      <p className="mt-1.5 text-sm leading-6 text-slate-500">
                        {e.body}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-10 border-t border-slate-200 pt-8">
              <p className="text-sm text-slate-500">Prefer email?</p>
              <a
                href="mailto:hello@emulsionfs.com"
                className="mt-1 inline-block text-lg font-semibold text-dark-blue transition-colors hover:text-cyan-600"
              >
                hello@emulsionfs.com
              </a>
            </div>
          </div>

          {/* Right: the form */}
          <div className="rounded-2xl bg-dark-blue p-8 text-white shadow-[0_25px_50px_-15px_rgba(15,23,42,0.4)]">
            {status === "success" ? (
              <SuccessPanel intent={intent} />
            ) : (
              <>
                <h3 className="font-serif text-2xl font-bold">
                  Tell us about your setup.
                </h3>
                <p className="mt-2 text-sm text-slate-400">
                  The more you share, the more useful the first call is.
                </p>

                <form onSubmit={handleSubmit} className="mt-6 space-y-5" noValidate>
                  <fieldset disabled={submitting}>
                    <legend className="mb-2 block text-xs font-semibold text-slate-300">
                      I&apos;d like to…
                    </legend>
                    <div className="flex flex-wrap gap-2">
                      {INTENTS.map((i) => (
                        <label
                          key={i.value}
                          className={`cursor-pointer rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                            intent === i.value
                              ? "bg-cyan-600 text-white"
                              : "border border-white/15 text-slate-300 hover:bg-white/5"
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
                        Phone{" "}
                        <span className="font-normal text-slate-500">
                          (optional)
                        </span>
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
                      onChange={(vals) =>
                        setForm((f) => ({ ...f, systems: vals }))
                      }
                      disabled={submitting}
                    />
                  </div>

                  <label className="block">
                    <Label>
                      What are you running today?{" "}
                      <span className="font-normal text-slate-500">
                        (optional)
                      </span>
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
                      className="rounded-lg border border-red-500/20 bg-red-500/10 px-3 py-2.5 text-sm text-red-300"
                    >
                      {errorMsg}
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full cursor-pointer rounded-full bg-cyan-600 px-6 py-3.5 text-base font-semibold text-white transition-colors hover:bg-cyan-500 disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    {submitting ? "Sending…" : "Send request"}
                  </button>

                  <p className="text-center text-xs text-slate-400">
                    No commitment. We&apos;ll never share your details.
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
