"use client";

import Image from "next/image";
import { useRef, useState } from "react";

/* ── Star Rating ──────────────────────────────────────────────────────────── */
function StarRating({ rating }) {
  return (
    <div className="flex gap-0.5" aria-label={`Rating: ${rating} out of 5`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`w-5 h-5 ${i < rating ? "text-warning" : "text-gray-200"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
          aria-hidden="true"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

/* ── Video Variant ────────────────────────────────────────────────────────── */
function VideoTestimonial({ name, age, procedure, quote, videoUrl, imageUrl, rating }) {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  function handlePlay() {
    setPlaying(true);
    videoRef.current?.play();
  }

  return (
    <article className="flex flex-col sm:flex-row gap-6 bg-blue-50 rounded-2xl border-l-4 border-primary-blue p-6 shadow-sm">
      {/* Video player */}
      <div className="relative w-full sm:w-64 flex-shrink-0 aspect-video rounded-xl overflow-hidden bg-neutral-dark">
        {videoUrl ? (
          <>
            <video
              ref={videoRef}
              src={videoUrl}
              poster={imageUrl}
              className="w-full h-full object-cover"
              controls={playing}
              preload="none"
              aria-label={`Video testimonial from ${name}`}
            />
            {!playing && (
              <button
                onClick={handlePlay}
                className="absolute inset-0 flex items-center justify-center bg-black/40 hover:bg-black/50 transition-colors"
                aria-label={`Play video testimonial from ${name}`}
              >
                <span className="w-14 h-14 rounded-full bg-white/90 flex items-center justify-center shadow-lg">
                  <svg className="w-6 h-6 text-primary-blue ml-1" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </span>
              </button>
            )}
          </>
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-white/50 text-xs">[ Video Placeholder ]</span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col justify-center gap-3">
        <StarRating rating={rating} />
        <blockquote className="text-gray-700 italic leading-relaxed text-sm">
          <span className="text-3xl text-primary-teal font-serif leading-none mr-1" aria-hidden="true">"</span>
          {quote}
          <span className="text-3xl text-primary-teal font-serif leading-none ml-1" aria-hidden="true">"</span>
        </blockquote>
        <footer>
          <p className="font-semibold text-neutral-dark text-sm">{name}{age ? `, ${age}` : ""}</p>
          {procedure && (
            <span className="inline-block mt-1 px-2 py-0.5 text-xs font-medium bg-primary-mint text-primary-blue rounded-full">
              {procedure}
            </span>
          )}
        </footer>
      </div>
    </article>
  );
}

/* ── Text Variant ─────────────────────────────────────────────────────────── */
function TextTestimonial({ name, age, procedure, quote, imageUrl, rating }) {
  return (
    <article className="flex flex-col sm:flex-row gap-5 bg-blue-50 rounded-2xl border-l-4 border-primary-teal p-6 shadow-sm">
      {/* Patient photo */}
      <div className="flex-shrink-0 flex sm:flex-col items-center gap-3 sm:gap-2">
        <div className="relative w-20 h-20 rounded-full overflow-hidden bg-gradient-to-br from-primary-blue to-primary-teal flex-shrink-0">
          {imageUrl ? (
            <Image
              src={imageUrl}
              alt={`Photo of ${name}`}
              fill
              className="object-cover"
              sizes="80px"
              unoptimized
            />
          ) : (
            <span className="absolute inset-0 flex items-center justify-center text-white text-2xl font-bold select-none">
              {name.charAt(0)}
            </span>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col justify-center gap-3">
        <StarRating rating={rating} />
        <blockquote className="text-gray-700 italic leading-relaxed text-sm">
          <span className="text-3xl text-primary-teal font-serif leading-none mr-1" aria-hidden="true">"</span>
          {quote}
          <span className="text-3xl text-primary-teal font-serif leading-none ml-1" aria-hidden="true">"</span>
        </blockquote>
        <footer className="flex flex-wrap items-center gap-2">
          <p className="font-semibold text-neutral-dark text-sm">{name}{age ? `, ${age}` : ""}</p>
          {procedure && (
            <span className="inline-block px-2 py-0.5 text-xs font-medium bg-primary-mint text-primary-blue rounded-full">
              {procedure}
            </span>
          )}
        </footer>
      </div>
    </article>
  );
}

/* ── Public Component ─────────────────────────────────────────────────────── */
/**
 * Testimonial — renders a video or text testimonial card.
 *
 * @param {object}  props
 * @param {'video'|'text'} props.type      - Variant selector
 * @param {string}  props.name             - Patient name
 * @param {number}  [props.age]            - Patient age
 * @param {string}  [props.procedure]      - Procedure tag
 * @param {string}  props.quote            - Testimonial text
 * @param {string}  [props.videoUrl]       - Video src (video variant only)
 * @param {string}  [props.imageUrl]       - Photo / video poster
 * @param {number}  props.rating           - Star rating 1–5
 */
export default function Testimonial(props) {
  if (props.type === "video") return <VideoTestimonial {...props} />;
  return <TextTestimonial {...props} />;
}
