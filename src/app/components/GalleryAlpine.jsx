"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

export default function GalleryReact({ cases, categories }) {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightbox, setLightbox] = useState(null);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") setLightbox(null);
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, []);

  const filteredCases = activeCategory === "All" ? cases : cases.filter(c => c.category === activeCategory);

  const ageGender = (c) => `${c.age} yrs · ${c.gender}`;
  const quoted = (q) => `“${q}”`;

  return (
    <div id="gallery-inner">
      {/* Category tabs */}
      <div className="flex flex-wrap gap-2 justify-center mb-10" role="tablist" aria-label="Filter gallery by procedure">
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            role="tab"
            onClick={() => setActiveCategory(cat)}
            aria-selected={activeCategory === cat}
            className={`px-4 py-2 text-sm font-medium rounded-full border transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-blue ${
              activeCategory === cat
                ? "bg-primary-blue text-white border-primary-blue"
                : "bg-white text-gray-600 border-gray-200 hover:border-primary-blue hover:text-primary-blue"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCases.map((c) => (
          <article
            key={c.id}
            className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer"
            onClick={() => setLightbox(c)}
          >
            <div className="grid grid-cols-2">
              <div className="relative aspect-square bg-gray-100">
                <Image src={c.before} alt={c.procedure} fill className="object-cover" loading="lazy" sizes="(max-width: 640px) 50vw, 33vw" />
                <span className="absolute top-2 left-2 text-[10px] font-bold bg-red-500 text-white px-1.5 py-0.5 rounded">BEFORE</span>
              </div>
              <div className="relative aspect-square bg-gray-100">
                <Image src={c.after} alt={c.procedure} fill className="object-cover" loading="lazy" sizes="(max-width: 640px) 50vw, 33vw" />
                <span className="absolute top-2 left-2 text-[10px] font-bold bg-green-500 text-white px-1.5 py-0.5 rounded">AFTER</span>
              </div>
            </div>
            <div className="p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-semibold text-primary-blue bg-blue-50 px-2 py-0.5 rounded-full">{c.category}</span>
                <span className="text-xs text-gray-400">{ageGender(c)}</span>
              </div>
              <p className="text-sm font-semibold text-neutral-dark">{c.procedure}</p>
              <p className="text-xs text-gray-400 mt-0.5">Duration: {c.duration}</p>
              <p className="text-xs text-gray-500 italic mt-2 line-clamp-2">{quoted(c.quote)}</p>
            </div>
          </article>
        ))}
      </div>

      {/* Empty state */}
      {filteredCases.length === 0 && (
        <div className="text-center py-16 text-gray-400">
          <p className="text-lg">No cases found for this category.</p>
        </div>
      )}

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4 transition-opacity duration-200"
          onClick={(e) => {
            if (e.target === e.currentTarget) setLightbox(null);
          }}
          role="dialog"
          aria-modal="true"
        >
          <div className="bg-white rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl">
            <div className="flex items-center justify-between px-5 pt-4 pb-2">
              <h3 className="font-bold text-neutral-dark text-sm">{lightbox.procedure}</h3>
              <button
                type="button"
                onClick={() => setLightbox(null)}
                className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
                aria-label="Close lightbox"
              >
                <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="grid grid-cols-2">
              <div className="relative aspect-square bg-gray-100">
                <Image src={lightbox.before} alt={lightbox.procedure} fill className="object-cover" />
                <span className="absolute top-2 left-2 text-xs font-bold bg-red-500 text-white px-2 py-0.5 rounded">BEFORE</span>
              </div>
              <div className="relative aspect-square bg-gray-100">
                <Image src={lightbox.after} alt={lightbox.procedure} fill className="object-cover" />
                <span className="absolute top-2 left-2 text-xs font-bold bg-green-500 text-white px-2 py-0.5 rounded">AFTER</span>
              </div>
            </div>
            <div className="p-5 space-y-2">
              <div className="flex flex-wrap gap-2 text-xs">
                <span className="px-2 py-0.5 bg-blue-50 text-primary-blue rounded-full font-semibold">{lightbox.category}</span>
                <span className="px-2 py-0.5 bg-gray-50 text-gray-600 rounded-full">{ageGender(lightbox)}</span>
                <span className="px-2 py-0.5 bg-gray-50 text-gray-600 rounded-full">Duration: {lightbox.duration}</span>
              </div>
              <p className="text-gray-600 italic text-sm">{quoted(lightbox.quote)}</p>
              <p className="text-[10px] text-gray-400">Patient identity protected. Image used with written consent.</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
