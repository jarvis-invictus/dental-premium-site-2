"use client";

import { BlurFade } from "./BlurFade";
import { Boxes } from "./BackgroundBoxes";

export default function HeroHeading({ badge, title, subtitle }) {
  return (
    <>
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
        <Boxes />
      </div>
      <div className="relative text-center px-4 z-10">
      <BlurFade delay={0} duration={0.4} inView>
        <span className="badge bg-white/20 text-white border border-white/30 mb-4 inline-block">
          {badge}
        </span>
      </BlurFade>
      <BlurFade delay={0.15} duration={0.5} inView>
        <h1 className="text-4xl sm:text-5xl font-bold text-white mt-2">{title}</h1>
      </BlurFade>
      {subtitle && (
        <BlurFade delay={0.28} duration={0.5} inView>
          <p className="text-primary-mint mt-3 text-lg">{subtitle}</p>
        </BlurFade>
      )}
    </div>
    </>
  );
}
