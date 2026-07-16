export default function ContactHero() {
  return (
    <section
      className="bg-primary-cream text-[#141414]"
      style={{
        background:
          "radial-gradient(50% 45% at 50% 0%, rgba(120,127,150,0.12), transparent 70%), #f7f4ec",
      }}
    >
      <div className="mx-auto max-w-4xl px-6 pb-16 pt-24 text-center lg:px-10 lg:pb-20 lg:pt-32">
        <h1 className="font-serif text-5xl font-semibold leading-[1.05] text-dark-blue sm:text-6xl">
          Book a demo.
          <br />
          <span className="italic text-cyan-600">Or just ask us anything.</span>
        </h1>

        <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-slate-500">
          A 30-minute walkthrough with a consultant — or a straight answer to
          whatever you&apos;re wondering. Bring your list of systems and
          we&apos;ll show you Emulsion connected to them.
        </p>
      </div>
    </section>
  );
}
