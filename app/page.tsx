'use client';

import { useEffect, useState } from 'react';
import Hero from '@/components/Hero';
import VehicleCard from '@/components/VehicleCard';
import { supabase } from '@/lib/supabaseClient';
import type { Database } from '@/lib/database.types';

export default function Home() {
  const [vehicles, setVehicles] = useState<Database['public']['Tables']['vehicles']['Row'][]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchVehicles = async () => {
      const { data, error } = await supabase.from('vehicles').select('id, make, model, price, image_url');
      if (error) {
        console.error('Failed to fetch vehicles:', error.message);
      } else {
        setVehicles(data ?? []);
      }
      setLoading(false);
    };

    fetchVehicles();
  }, []);

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <Hero />
      <section className="mt-12">
        <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-orange-300">Curated Collection</p>
            <h2 className="mt-2 text-3xl font-semibold text-white sm:text-4xl">Luxury vehicles for the discerning buyer</h2>
          </div>
          <p className="max-w-xl text-slate-400">Explore premium cars with exceptional performance, striking design, and the craftsmanship expected from world-class automotive brands.</p>
        </div>

        {loading ? (
          <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-12 text-center text-lg text-slate-300 shadow-premium">Loading vehicles...</div>
        ) : vehicles.length === 0 ? (
          <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-12 text-center text-lg text-slate-300 shadow-premium">No vehicles available yet.</div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {vehicles.map((vehicle) => (
              <VehicleCard key={vehicle.id} vehicle={vehicle} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
