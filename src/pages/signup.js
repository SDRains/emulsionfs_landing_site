import Seo from "@/components/Seo";
import AuthShell, { Field } from "@/components/auth/AuthShell";

export default function Signup() {
  return (
    <>
      <Seo
        title="Create your account — Emulsion"
        description="Create your Emulsion account."
        path="/signup"
        noindex
      />

      <AuthShell
        footer={
          <>
            Already a member?{" "}
            <a
              href="/login"
              className="font-bold text-dark-background hover:underline"
            >
              Sign in
            </a>
          </>
        }
      >
        <h1 className="text-2xl font-bold text-dark-background">
          Create your account
        </h1>
        <p className="mt-1 text-slate-500">Get started with Emulsion in a minute.</p>

        <form onSubmit={(e) => e.preventDefault()} className="mt-8 space-y-5">
          <Field label="Name" autoComplete="name" />
          <Field label="Work email" type="email" autoComplete="email" />
          <Field label="Password" type="password" autoComplete="new-password" />

          <button
            type="submit"
            className="mt-2 w-full rounded-full bg-dark-background py-3.5 text-base font-semibold text-white transition-colors hover:bg-[#152a45]"
          >
            Create account
          </button>
        </form>
      </AuthShell>
    </>
  );
}
