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
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-center">
            <div className="inline-block relative">
              <div className="w-16 h-16 border-4 border-yellow-400 border-t-transparent rounded-full animate-spin"></div>
              <div className="absolute inset-0 w-16 h-16 border-4 border-red-500 border-b-transparent rounded-full animate-spin" style={{ animationDirection: 'reverse', animationDuration: '1s' }}></div>
            </div>
            <p className="text-xl text-white font-semibold mt-6 animate-pulse">Loading Movies..</p>
          </div>
        </div>
      </main>
    );
  }

  if (error) {
    return (
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="flex items-center justify-center min-h-screen px-4">
          <div className="bg-red-500/10 backdrop-blur-lg border border-red-500/20 rounded-2xl shadow-2xl p-8 max-w-md">
            <div className="text-red-400 text-6xl mb-4 text-center">🎬</div>
            <p className="text-xl text-red-400 font-bold text-center">Error: {error}</p>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-12 pt-8">
        
  
          <div className="relative inline-block mb-6">
            <h1 className="text-6xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 drop-shadow-2xl">
              MOVIES
            </h1>
            <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 blur-2xl opacity-30 -z-10"></div>
          </div>
          
          <p className="text-xl text-gray-300 font-light mb-4">🍿 Popular Movies Collections 🎭</p>
          
          <div className="flex items-center justify-center gap-3 mt-6">
            <span className="inline-block w-20 h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent rounded-full"></span>
            <span className="inline-block w-3 h-3 bg-red-500 rounded-full animate-pulse"></span>
            <span className="inline-block w-20 h-1 bg-gradient-to-r from-transparent via-pink-500 to-transparent rounded-full"></span>
          </div>
        </header>

        {!rows || rows.length === 0 ? (
          <div className="flex items-center justify-center py-20">
            <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl shadow-2xl p-12 text-center">
              <div className="text-7xl mb-4">🎬</div>
              <p className="text-2xl text-gray-300 font-semibold">No movies found.</p>
            </div>
          </div>
        ) : (
          <section 
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 pb-12" 
            aria-live="polite"
          >
            {rows.map((x, index) => (
              <article
                key={x.id}
                className="group relative bg-slate-800/50 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-yellow-400/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-yellow-400/20 focus:outline-none focus:ring-4 focus:ring-yellow-400/50"
                tabIndex={0}
                style={{
                  animationDelay: `${index * 0.05}s`,
                  animation: "fadeInScale 0.6s ease-out forwards",
                  opacity: 0
                }}
              >
                {x.coverimage && (
                  <div className="relative aspect-[2/3] bg-gradient-to-br from-slate-700 to-slate-900 overflow-hidden">
                    <img
                      src={x.coverimage}
                      alt={x.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent opacity-60"></div>
                    
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-yellow-400/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    {/* Rating badge */}
                    <div className="absolute top-3 right-3 bg-yellow-400 text-slate-900 font-black text-sm px-3 py-1 rounded-full shadow-lg flex items-center gap-1">
                      <span>⭐</span>
                      <span>{(Math.random() * 2 + 7).toFixed(1)}</span>
                    </div>
                  </div>
                )}
                
                <div className="p-4">
                  <h3 className="text-lg font-bold text-white mb-2 line-clamp-2 group-hover:text-yellow-400 transition-colors duration-300">
                    {x.name}
                  </h3>
                  {x.detail && (
                    <p className="text-sm text-gray-400 leading-relaxed line-clamp-3 mb-4">
                      {x.detail}
                    </p>
                  )}
                  
                  <div className="pt-3 border-t border-white/10">
                    <button className="w-full bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 text-white font-bold py-2.5 rounded-xl hover:shadow-lg hover:shadow-yellow-400/50 transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2">
                      <span>▶</span>
                      <span>Watch Now</span>
                    </button>
                  </div>
                </div>

                {/* Glow effect */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 via-red-500/20 to-pink-500/20 blur-xl"></div>
                </div>
              </article>
            ))}
          </section>
        )}
      </div>

      <style jsx>{`
        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.9) translateY(20px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
      `}</style>
    </main>
  );
}