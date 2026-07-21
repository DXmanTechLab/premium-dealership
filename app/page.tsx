"use client";
import { useEffect, useState } from "react";
import { supabase } from "../lib/supabaseClient";
import VehicleCard from "../components/VehicleCard";

export default function HomePage() {
  const [vehicles, setVehicles] = useState<any[]>([]);

    useEffect(() => {
        async function fetchVehicles() {
              const { data, error } = await supabase.from("vehicles").select("*");
                    if (error) console.error(error);
                          else setVehicles(data);
                              }
                                  fetchVehicles();
                                    }, []);

                                      return (
                                          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-8">
                                                {vehicles.length > 0 ? (
                                                        vehicles.map((v) => (
                                                                  <VehicleCard key={v.id} make={v.make} model={v.model} price={v.price} image={v.image_url} />
                                                                          ))
                                                                                ) : (
                                                                                        <p>No vehicles available yet</p>
                                                                                              )}
                                                                                                  </div>
                                                                                                    );
                                                                                                    }