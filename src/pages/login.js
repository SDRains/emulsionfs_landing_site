import Seo from "@/components/Seo";
import AuthShell, { Field } from "@/components/auth/AuthShell";

export default function Login() {
  return (
    <>
      <Seo
        title="Sign in — Emulsion"
        description="Sign in to your Emulsion account."
        path="/login"
        noindex
      />

      <AuthShell
        footer={
          <>
            Not a member?{" "}
            <a
              href="/signup"
              className="font-bold text-dark-background hover:underline"
            >
              Create an account
            </a>
          </>
        }
      >
        <h1 className="text-2xl font-bold text-dark-background">Welcome back!</h1>
        <p className="mt-1 text-slate-500">
          Sign in to your account to continue.
        </p>

        <form onSubmit={(e) => e.preventDefault()} className="mt-8 space-y-5">
          <Field label="Email" type="email" autoComplete="email" />
          <Field label="Password" type="password" autoComplete="current-password" />

          <div className="flex items-center justify-between pt-1">
            <label className="flex items-center gap-2 text-sm text-dark-background">
              <input
                type="checkbox"
                className="h-4 w-4 rounded border-slate-300 accent-[#0b1a2e]"
              />
              Remember me
            </label>
            <a
              href="#"
              className="text-sm font-semibold text-dark-background hover:underline"
            >
              Forgot password?
            </a>
          </div>

          <button
            type="submit"
            className="mt-2 w-full rounded-full bg-dark-background py-3.5 text-base font-semibold text-white transition-colors hover:bg-[#152a45]"
          >
            Sign in
          </button>
        </form>
      </AuthShell>
    </>
  );
}
