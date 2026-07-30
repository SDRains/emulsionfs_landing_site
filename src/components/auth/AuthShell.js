export function Field({ label, type = "text", ...props }) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-bold text-dark-background">
        {label}
      </span>
      <input
        type={type}
        className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm text-dark-background placeholder:text-slate-400 focus:border-dark-background focus:outline-none focus:ring-1 focus:ring-dark-background/30"
        {...props}
      />
    </label>
  );
}

export default function AuthShell({ children, footer }) {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#f7f8fb] px-4 py-12">
      {/* Decorative pastel aurora */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 -top-40 h-[520px] w-[720px] rounded-full bg-gradient-to-br from-amber-200 via-rose-300 to-fuchsia-300 opacity-50 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 -left-24 h-[420px] w-[560px] rounded-full bg-gradient-to-tr from-indigo-200 via-rose-200 to-transparent opacity-40 blur-3xl"
      />

      <div className="relative w-full max-w-md rounded-2xl border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
        <img
          src="/emulsion_logo_light_no_footer.png"
          alt="Emulsion"
          className="h-10 w-auto"
        />

        <div className="mt-8">{children}</div>

        {footer && (
          <div className="mt-8 rounded-xl border border-slate-200 bg-slate-50 py-4 text-center text-sm text-slate-600">
            {footer}
          </div>
        )}
      </div>
    </div>
  );
}
