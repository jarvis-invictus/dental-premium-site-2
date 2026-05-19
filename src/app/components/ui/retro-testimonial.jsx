"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Quote, X } from "lucide-react";
import { cn } from "../../lib/utils";

// ===== Custom Hook =====
const useOutsideClick = (ref, onOutsideClick) => {
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!ref.current || ref.current.contains(event.target)) return;
      onOutsideClick();
    };
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [ref, onOutsideClick]);
};

// ===== Carousel (infinite auto-scroll) =====
const Carousel = ({ items }) => {
  const [isPaused, setIsPaused] = React.useState(false);
  // Duplicate items for seamless loop
  const doubled = [...items, ...items];

  return (
    <div className="relative w-full mt-10 overflow-hidden">
      <style>{`
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .marquee-track {
          display: flex;
          gap: 1rem;
          width: max-content;
          animation: marquee 25s linear infinite;
        }
        .marquee-track.paused {
          animation-play-state: paused;
        }
      `}</style>

      {/* fade edges */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-16 z-10 bg-gradient-to-r from-white/80 to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 h-full w-16 z-10 bg-gradient-to-l from-white/80 to-transparent" />

      <div
        className={cn("marquee-track py-5", isPaused && "paused")}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {doubled.map((item, index) => (
          <div key={`card-${index}`} className="flex-shrink-0">
            {React.cloneElement(item, { onCardClose: () => {} })}
          </div>
        ))}
      </div>
    </div>
  );
};

// ===== TestimonialCard =====
const TestimonialCard = ({
  testimonial,
  index,
  layout = false,
  onCardClose = () => {},
  backgroundImage = "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2068&auto=format&fit=crop",
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const containerRef = useRef(null);

  const handleExpand = () => setIsExpanded(true);
  const handleCollapse = () => {
    setIsExpanded(false);
    onCardClose();
  };

  useEffect(() => {
    const handleEscapeKey = (event) => {
      if (event.key === "Escape") handleCollapse();
    };
    if (isExpanded) {
      const scrollY = window.scrollY;
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = "100%";
      document.body.style.overflow = "hidden";
      document.body.dataset.scrollY = scrollY.toString();
    } else {
      const scrollY = parseInt(document.body.dataset.scrollY || "0", 10);
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      document.body.style.overflow = "";
      window.scrollTo({ top: scrollY, behavior: "instant" });
    }
    window.addEventListener("keydown", handleEscapeKey);
    return () => window.removeEventListener("keydown", handleEscapeKey);
  }, [isExpanded]);

  useOutsideClick(containerRef, handleCollapse);

  return (
    <>
      <AnimatePresence>
        {isExpanded && (
          <div className="fixed inset-0 h-screen overflow-hidden z-50">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="bg-black/50 backdrop-blur-sm h-full w-full fixed inset-0"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              ref={containerRef}
              layoutId={layout ? `card-${testimonial.name}` : undefined}
              className="max-w-2xl mx-auto bg-white h-auto max-h-[85vh] overflow-y-auto z-[60] p-6 md:p-10 rounded-3xl relative mt-[8vh] shadow-2xl border border-gray-100"
            >
              <button
                className="sticky top-0 h-8 w-8 right-0 ml-auto mb-4 rounded-full flex items-center justify-center bg-[#4b3f33] block"
                onClick={handleCollapse}
              >
                <X className="h-5 w-5 text-white" />
              </button>
              <p className="text-gray-500 text-base font-medium underline underline-offset-8 mb-2">
                {testimonial.designation}
              </p>
              <p className="text-2xl md:text-3xl font-semibold text-neutral-dark mt-2">
                {testimonial.name}
              </p>
              <div className="py-6 text-gray-700 text-lg font-normal leading-relaxed tracking-wide">
                <Quote className="h-5 w-5 text-primary-blue mb-3" />
                {testimonial.description}
              </div>
              {testimonial.procedure && (
                <span className="inline-block px-3 py-1 bg-primary-blue/10 text-primary-blue text-xs font-semibold rounded-full">
                  {testimonial.procedure}
                </span>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <motion.div
        className="text-left"
        whileHover={{
          scale: 1.02,
          transition: { duration: 0.3, ease: "easeOut" },
        }}
      >
        <div className="rounded-3xl bg-gradient-to-br from-sky-50 via-cyan-50 to-teal-50 h-[480px] md:h-[520px] overflow-hidden flex flex-col items-center justify-center relative z-10 shadow-md border border-sky-100"
          style={{ width: "clamp(288px, 22rem, 352px)" }}>

          {/* subtle dot pattern overlay */}
          <div className="absolute inset-0 opacity-20"
            style={{ backgroundImage: "radial-gradient(circle, #0ea5e9 1px, transparent 1px)", backgroundSize: "24px 24px" }} />

          <div className="relative z-10 flex flex-col items-center px-5 text-center">
            <ProfileImage src={testimonial.profileImage} alt={testimonial.name} objectPosition={testimonial.objectPosition} objectScale={testimonial.objectScale} />

            <p className="text-gray-700 text-base md:text-lg font-normal mt-5 leading-snug px-2">
              {testimonial.description.length > 110
                ? `${testimonial.description.slice(0, 110)}…`
                : testimonial.description}
            </p>

            <p className="text-neutral-dark text-lg font-semibold mt-4">
              {testimonial.name}
            </p>

            <p className="text-gray-500 text-sm font-light mt-1">
              {testimonial.designation.length > 30
                ? `${testimonial.designation.slice(0, 30)}…`
                : testimonial.designation}
            </p>

            {testimonial.procedure && (
              <span className="mt-3 px-3 py-0.5 bg-primary-blue/10 text-primary-blue text-xs font-semibold rounded-full border border-primary-blue/20">
                {testimonial.procedure}
              </span>
            )}
          </div>
        </div>
      </motion.div>
    </>
  );
};

// ===== ProfileImage =====
const ProfileImage = ({ src, alt, objectPosition = "center center", objectScale = 1 }) => {
  const [isLoading, setLoading] = useState(true);

  return (
    <div className="w-20 h-20 md:w-28 md:h-28 overflow-hidden rounded-full border-[3px] border-primary-blue/40 flex-none relative">
      <Image
        className={cn(
          "transition duration-300 object-cover",
          isLoading ? "blur-sm" : "blur-0"
        )}
        style={{ objectPosition, transform: `scale(${objectScale})`, transformOrigin: objectPosition }}
        onLoad={() => setLoading(false)}
        src={src}
        fill
        sizes="112px"
        loading="lazy"
        alt={alt || "Patient photo"}
        unoptimized
      />
    </div>
  );
};

export { Carousel, TestimonialCard, ProfileImage };
