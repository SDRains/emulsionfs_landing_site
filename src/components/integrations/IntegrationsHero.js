export default function IntegrationsHero() {
  return (
    <section
      className="bg-primary-cream text-[#141414]"
      style={{
        background:
          "radial-gradient(50% 45% at 50% 0%, rgba(120,127,150,0.12), transparent 70%), #f7f4ec",
      }}
    >
      <div className="mx-auto max-w-4xl px-6 py-24 text-center lg:px-10 lg:py-32">
        <h1 className="font-serif text-5xl font-semibold leading-[1.05] text-dark-blue sm:text-6xl lg:text-7xl">
          Data in from every system.
          <br />
          <span className="italic text-cyan-600">
            Reports out to everyone who asks.
          </span>
        </h1>

        <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-slate-500">
          Emulsion sits between the platforms you&apos;ve inherited and the
          reports your board, lenders, and investors expect — with optional AI
          assistants on top.
        </p>
      </div>
    </section>
  );
}
