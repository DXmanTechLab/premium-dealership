export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950/95 py-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 text-slate-400 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <p>© {new Date().getFullYear()} Premium Dealership. All rights reserved.</p>
        <div className="flex flex-wrap gap-4 text-sm text-slate-500">
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
          <a href="#">Support</a>
        </div>
      </div>
    </footer>
  );
}
