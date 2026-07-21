"use client";
import { useSupabaseClient, useUser } from "@supabase/auth-helpers-react";

export default function AdminPage() {
  const supabase = useSupabaseClient();
    const user = useUser();

      async function signIn() {
          await supabase.auth.signInWithPassword({
                email: "admin@example.com",   // replace with your admin email
                      password: "yourpassword",     // replace with your admin password
                          });
                            }

                              async function signOut() {
                                  await supabase.auth.signOut();
                                    }

                                      return (
                                          <div className="p-8 text-center">
                                                {!user ? (
                                                        <button
                                                                  onClick={signIn}
                                                                            className="bg-blue-600 text-white px-4 py-2 rounded"
                                                                                    >
                                                                                              Sign In
                                                                                                      </button>
                                                                                                            ) : (
                                                                                                                    <>
                                                                                                                              <p>Welcome, {user.email}</p>
                                                                                                                                        <button
                                                                                                                                                    onClick={signOut}
                                                                                                                                                                className="bg-red-600 text-white px-4 py-2 rounded"
                                                                                                                                                                          >
                                                                                                                                                                                      Sign Out
                                                                                                                                                                                                </button>
                                                                                                                                                                                                        </>
                                                                                                                                                                                                              )}
                                                                                                                                                                                                                  </div>
                                                                                                                                                                                                                    );
                                                                                                                                                                                                                    }