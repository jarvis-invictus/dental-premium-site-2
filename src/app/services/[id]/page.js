"use client";
import { useEffect, useRef } from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { useParams } from "next/navigation";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import FAQ from "../../components/FAQ";
import WhatsAppWidget from "../../components/WhatsAppWidget";
import serviceData from "../../lib/serviceData";
import { Boxes } from "../../components/ui/BackgroundBoxes";
import { SectionGrid } from "../../components/ui/SectionGrid";
import clinicConfig from "../../lib/clinicConfig";

const waNumber = clinicConfig.whatsapp.replace(/[^0-9]/g, "");
function waLink(service) {
  return `https://wa.me/${waNumber}?text=${encodeURIComponent(
    `Hello! I'd like to book a consultation for ${service} at ${clinicConfig.name}.`
  )}`;
}

const ALLOWED_IDS = ["general", "implants", "kids", "orthodontics", "cosmetic", "emergency"];

export default function ServiceDetailPage() {
  const { id } = useParams();
  const s = serviceData.find((x) => x.id === id);
  const heroRef = useRef(null);

  useEffect(() => {
    if (!s) return;

    /* ── Hero entrance ── */
    const hero = heroRef.current;
    if (hero) {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          hero.classList.add("hero-loaded");
        });
      });
    }

    /* ── Scroll-triggered sections ── */
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target;
            const delay = el.dataset.delay || "0";
            setTimeout(() => el.classList.add("in-view"), parseFloat(delay) * 1000);
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.12 }
    );

    document.querySelectorAll("[data-animate]").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [s]);

  if (!s) return notFound();

  const price = new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(s.price);

  return (
    <>
      <style suppressHydrationWarning>{`
        /* ── Base: elements start hidden, transition into view ── */
        [data-animate] {
          opacity: 0;
          transform: translateY(32px);
          transition: opacity 0.65s cubic-bezier(0.22,1,0.36,1),
                      transform 0.65s cubic-bezier(0.22,1,0.36,1);
        }
        [data-animate].in-view {
          opacity: 1;
          transform: translateY(0);
        }
        [data-animate-left] {
          opacity: 0;
          transform: translateX(-40px);
          transition: opacity 0.65s cubic-bezier(0.22,1,0.36,1),
                      transform 0.65s cubic-bezier(0.22,1,0.36,1);
        }
        [data-animate-left].in-view {
          opacity: 1;
          transform: translateX(0);
        }

        /* ── Hero entrance (after paint, not on load) ── */
        .hero-title, .hero-tagline, .hero-badge, .hero-price {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.6s cubic-bezier(0.22,1,0.36,1),
                      transform 0.6s cubic-bezier(0.22,1,0.36,1);
        }
        .hero-loaded .hero-badge  { opacity:1; transform:translateY(0); transition-delay:0.05s; }
        .hero-loaded .hero-title  { opacity:1; transform:translateY(0); transition-delay:0.18s; }
        .hero-loaded .hero-tagline{ opacity:1; transform:translateY(0); transition-delay:0.30s; }
        .hero-loaded .hero-price  { opacity:1; transform:translateY(0); transition-delay:0.42s; }

        /* ── Icon: breathe + glow (start after 0.5s so it's visible first) ── */
        @keyframes breathe {
          0%,100% { transform: scale(1); }
          50%      { transform: scale(1.06); }
        }
        @keyframes glowRing {
          0%   { box-shadow: 0 0 0 0   rgba(3,105,161,0.45); }
          60%  { box-shadow: 0 0 0 18px rgba(3,105,161,0.08); }
          100% { box-shadow: 0 0 0 0   rgba(3,105,161,0); }
        }
        @keyframes gradientShift {
          0%,100% { background-position: 0% 50%; }
          50%     { background-position: 100% 50%; }
        }
        .icon-panel {
          background: linear-gradient(135deg,#e0f2fe,#f0fdf4,#ede9fe,#e0f2fe);
          background-size: 300% 300%;
          animation: gradientShift 8s ease infinite;
        }
        .icon-breathe {
          animation: breathe 3.5s ease-in-out infinite 0.5s,
                     glowRing 2.6s ease-in-out infinite 0.5s;
        }

        /* ── How It Works: step light-up ── */
        @keyframes stepActivate {
          from { background:#e2e8f0; color:#94a3b8; box-shadow:none; }
          to   { background:#0369a1; color:#fff;    box-shadow:0 0 14px rgba(3,105,161,0.45); }
        }
        .step-num {
          background: #e2e8f0;
          color: #94a3b8;
          transition: background 0.4s, color 0.4s, box-shadow 0.4s;
        }
        .step-active .step-num {
          background: #0369a1;
          color: #fff;
          box-shadow: 0 0 14px rgba(3,105,161,0.45);
        }

        /* connector grow */
        @keyframes connectorGrow {
          from { transform: scaleX(0); }
          to   { transform: scaleX(1); }
        }
        .connector-line {
          transform-origin: left;
          transform: scaleX(0);
          transition: transform 1.2s cubic-bezier(0.4,0,0.2,1);
        }
        .connector-visible .connector-line {
          transform: scaleX(1);
        }

        /* step title highlight sweep */
        .step-title {
          background-image: linear-gradient(#3b82f6,#3b82f6);
          background-repeat: no-repeat;
          background-position: 0 100%;
          background-size: 0% 2px;
          transition: background-size 0.5s ease;
          padding-bottom: 2px;
        }
        .step-active .step-title {
          background-size: 100% 2px;
        }
      `}</style>

      <Navbar />
      <main className="flex-1">

        {/* ── HERO ────────────────────────────────────────────────── */}
        <div ref={heroRef}
          className="relative overflow-hidden bg-gradient-to-br from-primary-blue via-cyan-700 to-primary-teal min-h-[300px] flex items-center">
          <div className="absolute inset-0 bg-black/20" />
          <div className="absolute inset-0 pointer-events-none"><Boxes /></div>
          <div className="relative container-custom w-full px-6 py-14">
            <div className="flex items-center gap-2 mb-5 opacity-80">
              <Link href="/services" className="text-white/80 hover:text-white text-sm transition-colors flex items-center gap-1">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                All Services
              </Link>
              <span className="text-white/40 text-sm">/</span>
              <span className="text-white/70 text-sm">{s.name}</span>
            </div>
            <span className="hero-badge inline-block px-3 py-1 bg-white/20 text-white text-xs font-semibold rounded-full border border-white/30 mb-4">
              {s.category}
            </span>
            <h1 className="hero-title text-4xl sm:text-5xl font-bold text-white leading-tight mb-3">
              {s.name}
            </h1>
            <p className="hero-tagline text-cyan-100 text-lg mb-6">
              {s.tagline}
            </p>
            <div className="hero-price flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center px-5 py-2.5 bg-white text-primary-blue text-sm font-bold rounded-full shadow-lg">
                Starting {price}
              </span>
              <span className="text-white/60 text-sm">· 0% EMI available</span>
            </div>
          </div>
        </div>

        <div className="relative overflow-hidden">
          <SectionGrid />
          <div className="container-custom px-6 py-16 space-y-20 relative z-10">

          {/* ── ICON + WHAT IS IT ──────────────────────────────────── */}
          <section className="flex flex-col md:flex-row gap-10 items-center">
            <div data-animate className="flex-shrink-0" data-delay="0.05">
              <div className="icon-panel icon-breathe w-48 h-48 rounded-3xl flex items-center justify-center shadow-xl overflow-hidden">
                {s.svgSrc ? (
                  <img src={s.svgSrc} alt={s.name} className="w-36 h-36 object-contain rounded-2xl" />
                ) : (
                  <span className="text-6xl">🦷</span>
                )}
              </div>
            </div>
            <div className="flex-1">
              <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-sm border border-gray-100 p-6 space-y-4">
              <h2 data-animate data-delay="0.1" className="text-2xl font-bold text-gray-900">
                What is <span className="text-primary-blue">{s.name}</span>?
              </h2>
              <p data-animate data-delay="0.18" className="text-gray-600 leading-relaxed">
                {s.what}
              </p>
              <div data-animate data-delay="0.26">
                <a href={waLink(s.name)} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-full transition-colors shadow-md text-sm">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                  Book Free Consultation
                </a>
              </div>
              </div>
            </div>
          </section>

          {/* ── HOW IT WORKS ───────────────────────────────────────── */}
          {s.steps?.length > 0 && (
            <section data-animate data-delay="0">
              <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-sm border border-gray-100 p-8">
                <div className="text-center mb-10">
                  <span className="text-xs font-bold uppercase tracking-widest text-primary-teal">Process</span>
                  <h2 className="text-2xl sm:text-3xl font-bold text-neutral-dark mt-1">How It Works</h2>
                </div>

                {/* Desktop */}
                <HowItWorksDesktop steps={s.steps} />

                {/* Mobile */}
                <div className="sm:hidden space-y-0">
                  {s.steps.map((step, i) => (
                    <StepMobile key={step.title} step={step} i={i} total={s.steps.length} />
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* ── WHY CHOOSE US ──────────────────────────────────────── */}
          <section data-animate data-delay="0">
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl border border-gray-100 shadow-sm p-8">
              <h2 className="text-xl font-bold text-neutral-dark mb-6 flex items-center gap-2">
                <span className="w-7 h-7 rounded-full bg-primary-blue flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                </span>
                Why Choose {clinicConfig.name}?
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {s.why.map((w, i) => (
                  <div key={w} data-animate data-delay={`${0.05 * i}`}
                    className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mt-0.5">
                      <svg className="w-3.5 h-3.5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                    </span>
                    <span className="text-sm text-gray-700 font-medium">{w}</span>
                  </div>
                ))}
              </div>
              <p className="text-xs text-gray-400 mt-5">0% EMI available on all treatments above ₹3,000.</p>
            </div>
          </section>

          {/* ── CTA ────────────────────────────────────────────────── */}
          <section data-animate data-delay="0">
            <div className="bg-gradient-to-r from-primary-blue to-primary-teal rounded-2xl p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="text-white">
                <h3 className="text-xl font-bold mb-1">Ready to get started?</h3>
                <p className="text-cyan-100 text-sm">Book a free consultation — actual result photos shown during your visit.</p>
              </div>
              <a href={waLink(s.name)} target="_blank" rel="noopener noreferrer"
                className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3 bg-white text-primary-blue font-bold rounded-full hover:bg-cyan-50 transition-colors shadow-lg text-sm">
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                Book Free Consultation
              </a>
            </div>
          </section>

          {/* ── FAQ ────────────────────────────────────────────────── */}
          <section data-animate data-delay="0">
            <h2 className="text-xl font-bold text-neutral-dark mb-5">Common Questions</h2>
            <FAQ faqs={s.faqs} />
          </section>

          {/* ── OTHER SERVICES ─────────────────────────────────────── */}
          <section data-animate data-delay="0">
            <h2 className="text-lg font-bold text-neutral-dark mb-4">Explore Other Services</h2>
            <div className="flex flex-wrap gap-2">
              {serviceData.filter((x) => ALLOWED_IDS.includes(x.id) && x.id !== s.id).map((x) => (
                <Link key={x.id} href={`/services/${x.id}`}
                  className="px-4 py-2 text-sm font-medium bg-gray-50 hover:bg-primary-blue/10 text-gray-600 hover:text-primary-blue border border-gray-200 hover:border-primary-blue/30 rounded-full transition-all duration-200">
                  {x.name}
                </Link>
              ))}
            </div>
          </section>

          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppWidget />
    </>
  );
}

/* ── How It Works — Desktop (with IntersectionObserver on the row) ── */
function HowItWorksDesktop({ steps }) {
  const rowRef = useRef(null);

  useEffect(() => {
    const row = rowRef.current;
    if (!row) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          row.classList.add("connector-visible");
          steps.forEach((_, i) => {
            setTimeout(() => {
              const el = row.querySelector(`[data-step="${i}"]`);
              if (el) el.classList.add("step-active");
            }, 300 + i * 280);
          });
          obs.disconnect();
        }
      },
      { threshold: 0.25 }
    );
    obs.observe(row);
    return () => obs.disconnect();
  }, [steps]);

  return (
    <div ref={rowRef} className="hidden sm:flex items-start relative">
      {/* background track */}
      <div className="absolute top-[22px] left-12 right-12 h-0.5 bg-gray-200 z-0" />
      {/* animated fill */}
      <div className="connector-line absolute top-[22px] left-12 right-12 h-0.5 bg-gradient-to-r from-primary-blue to-primary-teal z-0" />

      {steps.map((step, i) => (
        <div key={step.title} data-step={i}
          className="flex-1 flex flex-col items-center text-center z-10 px-2 group">
          <div className="step-num w-11 h-11 rounded-full text-sm font-bold flex items-center justify-center mb-3 transition-all duration-500">
            {i + 1}
          </div>
          <p className="step-title text-sm font-semibold text-neutral-dark mb-1">
            {step.title}
          </p>
          <p className="text-xs text-gray-500 leading-relaxed mt-1">
            {step.desc}
          </p>
        </div>
      ))}
    </div>
  );
}

/* ── How It Works — Mobile ── */
function StepMobile({ step, i, total }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => el.classList.add("step-active"), i * 150);
          obs.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [i]);

  return (
    <div ref={ref} className="flex gap-4">
      <div className="flex flex-col items-center">
        <div className="step-num w-10 h-10 rounded-full text-sm font-bold flex items-center justify-center flex-shrink-0 transition-all duration-500">
          {i + 1}
        </div>
        {i < total - 1 && (
          <div className="w-0.5 flex-1 mt-1 mb-1 bg-gradient-to-b from-primary-blue/30 to-transparent min-h-[28px]" />
        )}
      </div>
      <div className="pb-6 pt-1">
        <p className="step-title text-sm font-semibold text-neutral-dark">{step.title}</p>
        <p className="text-xs text-gray-500 mt-1 leading-relaxed">{step.desc}</p>
      </div>
    </div>
  );
}
