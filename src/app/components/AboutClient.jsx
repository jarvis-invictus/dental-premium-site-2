"use client";

import {
  Users, CalendarDays, Star, Stethoscope,
  Heart, ShieldCheck, Sparkles, BookOpen,
  Target, Eye,
  ScanLine, Zap, Camera, Monitor, Wind, CheckCircle2,
  Drill,
} from "lucide-react";
import { BlurFade } from "./ui/BlurFade";
import { SectionGrid } from "./ui/SectionGrid";

const ICON_MAP = {
  Users, CalendarDays, Star, Stethoscope,
  Heart, ShieldCheck, Sparkles, BookOpen,
  Target, Eye,
  ScanLine, Zap, Camera, Monitor, Wind,
  Drill,
  CheckCircle2,
};

function LucideIcon({ name, className }) {
  const Icon = ICON_MAP[name];
  if (!Icon) return null;
  return <Icon className={className} />;
}

export default function AboutClient({ stats, timeline, values, technology, missionVision }) {
  return (
    <>
      {/* ── Stats Band ──────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-white border-b border-gray-100 section-padding" id="stats">
        <SectionGrid />
        <div className="container-custom grid grid-cols-2 md:grid-cols-4 gap-6 relative z-10">
          {stats.map(({ value, label, iconName }, i) => (
            <BlurFade key={label} delay={0.1 * i} duration={0.45} inView>
              <div className="bg-white/70 backdrop-blur-sm rounded-2xl border border-gray-100 shadow-sm p-6 flex flex-col items-center text-center hover:-translate-y-1 transition-transform duration-300">
                <div className="w-11 h-11 rounded-xl bg-primary-blue/10 flex items-center justify-center mb-3">
                  <LucideIcon name={iconName} className="w-5 h-5 text-primary-blue" />
                </div>
                <p className="text-3xl font-bold text-primary-blue leading-none">{value}</p>
                <p className="text-sm text-gray-500 mt-1">{label}</p>
              </div>
            </BlurFade>
          ))}
        </div>
      </section>

      {/* ── Mission & Vision ────────────────────────────────────────── */}
      <section className="relative overflow-hidden section-padding bg-gray-50" id="mission">
        <SectionGrid />
        <div className="container-custom relative z-10">
          <BlurFade delay={0} duration={0.4} inView>
            <div className="text-center mb-10">
              <span className="text-xs font-bold uppercase tracking-widest text-primary-teal">Our Purpose</span>
              <h2 className="section-title mt-1">Mission &amp; Vision</h2>
            </div>
          </BlurFade>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <BlurFade delay={0.1} duration={0.5} inView>
              <div className="bg-white/70 backdrop-blur-sm rounded-2xl border border-gray-100 shadow-sm p-8 h-full">
                <div className="w-11 h-11 rounded-xl bg-primary-blue/10 flex items-center justify-center mb-4">
                  <LucideIcon name={missionVision.mission.iconName} className="w-5 h-5 text-primary-blue" />
                </div>
                <h3 className="text-lg font-bold text-neutral-dark mb-3">{missionVision.mission.label}</h3>
                <p className="text-gray-600 leading-relaxed">{missionVision.mission.text}</p>
              </div>
            </BlurFade>
            <BlurFade delay={0.22} duration={0.5} inView>
              <div className="bg-white/70 backdrop-blur-sm rounded-2xl border border-gray-100 shadow-sm p-8 h-full">
                <div className="w-11 h-11 rounded-xl bg-primary-teal/10 flex items-center justify-center mb-4">
                  <LucideIcon name={missionVision.vision.iconName} className="w-5 h-5 text-primary-teal" />
                </div>
                <h3 className="text-lg font-bold text-neutral-dark mb-3">{missionVision.vision.label}</h3>
                <p className="text-gray-600 leading-relaxed">{missionVision.vision.text}</p>
              </div>
            </BlurFade>
          </div>
        </div>
      </section>

      {/* ── Timeline ────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden section-padding bg-white" id="history">
        <SectionGrid />
        <div className="container-custom relative z-10">
          <BlurFade delay={0} duration={0.4} inView>
            <div className="text-center mb-12">
              <span className="text-xs font-bold uppercase tracking-widest text-primary-teal">Our Journey</span>
              <h2 className="section-title mt-1">How We Grew</h2>
            </div>
          </BlurFade>
          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary-mint md:-translate-x-px" aria-hidden="true" />
            <div className="space-y-10">
              {timeline.map(({ year, title, desc }, i) => (
                <BlurFade key={year} delay={0.1 * i} duration={0.5} inView>
                  <div className={`relative flex flex-col md:flex-row ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} gap-6 md:gap-0 pl-12 md:pl-0`}>
                    <div className="absolute left-2 md:left-1/2 top-1 w-5 h-5 rounded-full bg-primary-blue border-4 border-white shadow md:-translate-x-2.5" />
                    <div className={`md:w-1/2 ${i % 2 === 0 ? "md:pr-10 md:text-right" : "md:pl-10"}`}>
                      <div className="bg-white/70 backdrop-blur-sm rounded-2xl border border-gray-100 shadow-sm p-5">
                        <span className="inline-block px-3 py-1 bg-primary-blue/10 text-primary-blue text-xs font-bold rounded-full mb-2">{year}</span>
                        <h3 className="font-semibold text-neutral-dark">{title}</h3>
                        <p className="text-sm text-gray-500 mt-1 leading-relaxed">{desc}</p>
                      </div>
                    </div>
                    <div className="hidden md:block md:w-1/2" />
                  </div>
                </BlurFade>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Core Values ─────────────────────────────────────────────── */}
      <section className="relative overflow-hidden section-padding bg-gray-50" id="values">
        <SectionGrid />
        <div className="container-custom relative z-10">
          <BlurFade delay={0} duration={0.4} inView>
            <div className="text-center mb-12">
              <span className="text-xs font-bold uppercase tracking-widest text-primary-teal">What We Stand For</span>
              <h2 className="section-title mt-1">Our Core Values</h2>
            </div>
          </BlurFade>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map(({ iconName, color, bg, title, desc }, i) => (
              <BlurFade key={title} delay={0.1 * i} duration={0.45} inView>
                <div className="bg-white/70 backdrop-blur-sm rounded-2xl border border-gray-100 shadow-sm p-6 text-center hover:-translate-y-1 transition-transform duration-300 h-full">
                  <div className={`w-12 h-12 rounded-xl ${bg} flex items-center justify-center mx-auto mb-4`}>
                    <LucideIcon name={iconName} className={`w-6 h-6 ${color}`} />
                  </div>
                  <h3 className="font-semibold text-neutral-dark mb-2">{title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* ── Technology ──────────────────────────────────────────────── */}
      <section className="relative overflow-hidden section-padding bg-white" id="technology">
        <SectionGrid />
        <div className="container-custom relative z-10">
          <BlurFade delay={0} duration={0.4} inView>
            <div className="text-center mb-12">
              <span className="text-xs font-bold uppercase tracking-widest text-primary-teal">Our Equipment</span>
              <h2 className="section-title mt-1">Technology &amp; Infrastructure</h2>
              <p className="section-subtitle">Equipped with the latest dental technology for precision, safety, and comfort.</p>
            </div>
          </BlurFade>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {technology.map(({ label, iconName }, i) => (
              <BlurFade key={label} delay={0.08 * i} duration={0.4} inView>
                <div className="bg-white/70 backdrop-blur-sm rounded-2xl border border-gray-100 shadow-sm flex items-center gap-3 px-4 py-3 hover:-translate-y-0.5 transition-transform duration-300">
                  <div className="w-9 h-9 rounded-lg bg-primary-teal/10 flex items-center justify-center flex-shrink-0">
                    <LucideIcon name={iconName} className="w-4 h-4 text-primary-teal" />
                  </div>
                  <span className="text-sm font-medium text-neutral-dark">{label}</span>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
