import type { Database } from '@/lib/database.types';

type Vehicle = Database['public']['Tables']['vehicles']['Row'];

interface VehicleCardProps {
  vehicle: Vehicle;
}

export default function VehicleCard({ vehicle }: VehicleCardProps) {
  return (
    <article className="overflow-hidden rounded-[1.75rem] border border-slate-800 bg-slate-900/80 shadow-premium backdrop-blur-xl transition hover:-translate-y-1 hover:shadow-[0_30px_60px_rgba(249,115,22,0.18)]">
      <div className="relative h-64 overflow-hidden bg-slate-950">
        {vehicle.image_url ? (
          <img
            src={vehicle.image_url}
            alt={`${vehicle.make} ${vehicle.model}`}
            className="h-full w-full object-cover transition duration-500 hover:scale-105"
          />
        ) : (
          <div className="flex h-full items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 text-slate-400">No image available</div>
        )}
      </div>
      <div className="space-y-4 p-6">
        <div>
          <p className="text-sm uppercase tracking-[0.35em] text-orange-300">Premium vehicle</p>
          <h3 className="mt-3 text-2xl font-semibold text-white">{vehicle.make} {vehicle.model}</h3>
        </div>
        <div className="flex items-center justify-between gap-4 text-slate-300">
          <p className="text-lg font-semibold text-white">${vehicle.price.toLocaleString()}</p>
          <span className="rounded-full border border-slate-700 bg-slate-950/80 px-3 py-1 text-xs uppercase tracking-[0.2em] text-slate-400">For sale</span>
        </div>
        <button className="w-full rounded-full bg-gradient-to-r from-orange-500 to-amber-400 px-5 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-slate-950 transition hover:opacity-95">
          Learn more
        </button>
      </div>
    </article>
  );
}
