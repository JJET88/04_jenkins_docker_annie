"use client";

import { useState, useEffect } from "react";

export default function Page() {
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getAttractions() {
      try {
        const apiHost = process.env.NEXT_PUBLIC_API_HOST;
        const res = await fetch(`${apiHost}/movies`, { cache: "no-store" });
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        setRows(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    getAttractions();
  }, []);

  if (loading) {
    return (
      <main className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-center min-h-screen">
          <p className="text-xl text-gray-600">Loading...</p>
        </div>
      </main>
    );
  }

  if (error) {
    return (
      <main className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-center min-h-screen">
          <p className="text-xl text-red-600">Error: {error}</p>
        </div>
      </main>
    );
  }

  return (
    <main className="container mx-auto px-4 py-8 max-w-7xl">
      <header className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          Pwint Phyu Aung - 6708400
        </h1>
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Movies</h1>
        <p className="text-lg text-gray-600">Popular Movies</p>
      </header>

      {!rows || rows.length === 0 ? (
        <div className="flex items-center justify-center py-16">
          <p className="text-xl text-gray-500">No movies found.</p>
        </div>
      ) : (
        <section
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          aria-live="polite"
        >
          {rows.map((x) => (
            <article
              key={x.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              tabIndex={0}
            >
              {x.coverimage && (
                <div className="relative aspect-[2/3] bg-gray-200">
                  <img
                    src={x.coverimage}
                    alt={x.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              )}
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                  {x.name}
                </h3>
                {x.detail && (
                  <p className="text-sm text-gray-600 line-clamp-3">
                    {x.detail}
                  </p>
                )}
                <div className="mt-3"></div>
              </div>
            </article>
          ))}
        </section>
      )}
    </main>
  );
}