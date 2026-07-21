export default function Hero() {
  return (
    <section className="relative overflow-hidden rounded-[2rem] border border-slate-800 bg-[radial-gradient(circle_at_top,_rgba(251,146,60,0.12),_transparent_35%),linear-gradient(180deg,_rgba(15,23,42,0.98)_0%,_rgba(15,23,42,0.72)_100%)] p-10 shadow-premium sm:p-14">
      <div className="relative z-10 max-w-3xl">
        <p className="text-sm uppercase tracking-[0.4em] text-orange-300">Exclusive Collection</p>
        <h1 className="mt-4 text-4xl font-semibold leading-tight text-white sm:text-5xl">Discover the future of luxury driving.</h1>
        <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
          Browse a curated lineup of high-performance vehicles, curated for style, comfort, and resale prestige.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <button className="inline-flex items-center justify-center rounded-full bg-orange-500 px-6 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-slate-950 shadow-lg shadow-orange-500/30 transition hover:bg-orange-400">
            View inventory
          </button>
          <button className="inline-flex items-center justify-center rounded-full border border-slate-700 bg-slate-900/80 px-6 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-slate-200 transition hover:border-slate-500 hover:text-white">
            Schedule a tour
          </button>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/2 rounded-l-[2rem] bg-[radial-gradient(circle_at_top_right,_rgba(251,146,60,0.2),_transparent_35%)] lg:block" />
    </section>
  );
}
