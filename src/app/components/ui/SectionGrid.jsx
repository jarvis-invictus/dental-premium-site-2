import React from "react";

function SectionGridCore() {
  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 pointer-events-none z-0"
      style={{
        backgroundImage:
          "linear-gradient(to right, rgba(148,163,184,0.15) 1px, transparent 1px), linear-gradient(to bottom, rgba(148,163,184,0.15) 1px, transparent 1px)",
        backgroundSize: "48px 48px",
      }}
    />
  );
}

export const SectionGrid = React.memo(SectionGridCore);
