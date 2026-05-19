"use client";

import { useState } from "react";
import { galleryImages } from "../lib/data";

const categories = ["All", ...new Set(galleryImages.map((img) => img.category))];

export default function GalleryGrid() {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All" ? galleryImages : galleryImages.filter((img) => img.category === active);

  return (
    <div>
      <div className="flex flex-wrap gap-2 justify-center mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
              active === cat
                ? "bg-dental-blue text-white"
                : "bg-white text-gray-600 border border-gray-200 hover:border-dental-blue hover:text-dental-blue"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((img) => (
          <div key={img.id} className="card overflow-hidden group cursor-pointer">
            <div className="w-full h-56 bg-gradient-brand flex items-center justify-center">
              <p className="text-white text-sm opacity-70">{img.alt}</p>
            </div>
            <div className="p-4 flex items-center justify-between">
              <p className="text-sm font-medium text-gray-700">{img.alt}</p>
              <span className="badge">{img.category}</span>
            </div>
          </div>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="text-center text-gray-400 py-16">No images in this category yet.</p>
      )}
    </div>
  );
}
