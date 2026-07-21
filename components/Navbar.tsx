export default function Navbar() {
  return (
    <header className="border-b border-slate-800 bg-slate-950/95 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-5 sm:px-6 lg:px-8">
        <div>
          <p className="text-lg font-semibold tracking-[0.3em] text-white">PREMIUM</p>
          <p className="text-xs uppercase tracking-[0.4em] text-slate-500">Dealership</p>
        </div>
        <nav className="hidden items-center gap-8 text-sm text-slate-400 md:flex">
          <a href="#" className="transition hover:text-white">Inventory</a>
          <a href="#" className="transition hover:text-white">About</a>
          <a href="#" className="transition hover:text-white">Contact</a>
        </nav>
        <div className="rounded-full border border-slate-700 bg-slate-900 px-4 py-2 text-sm text-slate-200 shadow-premium">Book a viewing</div>
      </div>
    </header>
  );
}
