"use client";

import { useEffect, useState } from "react";
import { clinicConfig } from "../lib/clinic-config";

/**
 * WhatsAppWidget — persistent floating WhatsApp button.
 *
 * - Desktop: shows icon + "Chat with us" label on hover
 * - Mobile: icon only
 * - Continuous bounce + pulse ring to always catch the eye
 * - Smart scroll: hides on scroll-down, reappears on scroll-up
 * - Reads all data from clinicConfig (no props required)
 */

const waStyle = `
  @keyframes wa-bounce {
    0%, 100% { transform: translateY(0) scale(1); }
    30%       { transform: translateY(-8px) scale(1.08); }
    50%       { transform: translateY(-4px) scale(1.04); }
    70%       { transform: translateY(-10px) scale(1.1); }
  }
  @keyframes wa-ring {
    0%   { transform: scale(1);   opacity: 0.7; }
    80%  { transform: scale(2.2); opacity: 0; }
    100% { transform: scale(2.2); opacity: 0; }
  }
  .wa-btn {
    animation: wa-bounce 2.4s ease-in-out infinite;
  }
  .wa-btn:hover {
    animation-play-state: paused;
    transform: scale(1.12);
  }
  .wa-ring {
    animation: wa-ring 2.4s ease-out infinite;
  }
`;

export default function WhatsAppWidget() {
  const [visible, setVisible] = useState(true);
  const [expanded, setExpanded] = useState(false);

  /* ── Smart scroll hide/show ──────────────────────────────────────────── */
  useEffect(() => {
    let lastY = window.scrollY;
    function onScroll() {
      const y = window.scrollY;
      if (y > lastY && y > 120) {
        setVisible(false);
      } else {
        setVisible(true);
      }
      lastY = y;
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function handleClick() {
    const wa = clinicConfig.contact.phone_whatsapp.replace(/[^0-9]/g, "");
    const msg = encodeURIComponent(clinicConfig.whatsapp_default_message);
    window.open(`https://wa.me/${wa}?text=${msg}`, "_blank", "noopener,noreferrer");
  }

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: waStyle }} />
      <div
        className={[
          "fixed z-50 flex items-center justify-end transition-all duration-300",
          "bottom-4 right-4 sm:bottom-8 sm:right-8",
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6 pointer-events-none",
        ].join(" ")}
      >
        {/* Expanded label (desktop hover only) */}
        <span
          className={[
            "hidden sm:block mr-3 px-4 py-2 bg-white text-neutral-dark text-sm font-semibold rounded-full shadow-md",
            "transition-all duration-300 origin-right",
            expanded ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0 pointer-events-none",
          ].join(" ")}
          aria-hidden="true"
        >
          Chat with us
        </span>

        {/* Main button */}
        <button
          type="button"
          onClick={handleClick}
          onMouseEnter={() => setExpanded(true)}
          onMouseLeave={() => setExpanded(false)}
          onFocus={() => setExpanded(true)}
          onBlur={() => setExpanded(false)}
          aria-label={`Chat with ${clinicConfig.name} on WhatsApp`}
          className="wa-btn relative flex items-center justify-center w-14 h-14 rounded-full bg-green-500 text-white shadow-xl focus:outline-none focus-visible:ring-4 focus-visible:ring-green-300"
        >
          {/* Continuous pulse ring */}
          <span
            className="wa-ring absolute inset-0 rounded-full bg-green-400"
            aria-hidden="true"
          />

          {/* WhatsApp SVG */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="relative w-7 h-7"
            aria-hidden="true"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
        </button>
      </div>
    </>
  );
}
