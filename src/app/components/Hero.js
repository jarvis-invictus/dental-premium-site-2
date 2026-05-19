"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { BlurFade } from "./ui/BlurFade";
import clinicConfig from "../lib/clinicConfig";

/* Professional dental photo from Unsplash (free to use) */
const HERO_IMAGE = "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=900&auto=format&fit=crop&q=80";

/* Patient avatars — Indian faces from Pexels */
const AVATARS = [
  "https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&fit=crop",
  "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&fit=crop",
  "https://images.pexels.com/photos/3771089/pexels-photo-3771089.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&fit=crop",
  "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&fit=crop",
];

const floatStyle = (delay = "0s") => ({
  animation: `heroFloat 4s ease-in-out ${delay} infinite`,
});

export default function Hero() {
  const [visible, setVisible] = useState(false);
  useEffect(() => { setVisible(true); }, []);

  return (
    <section className="relative bg-white/70 overflow-hidden">
      <style>{`
        @keyframes heroFloat {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        .hero-card-bl { animation: heroFloat 4s ease-in-out 0s infinite; }
        .hero-card-tr { animation: heroFloat 4s ease-in-out 0.8s infinite; }
        .hero-card-ml { animation: heroFloat 4s ease-in-out 1.6s infinite; }
        .hero-card-bl:hover, .hero-card-tr:hover, .hero-card-ml:hover {
          animation-play-state: paused;
          transform: translateY(-4px) scale(1.05);
          transition: transform 0.2s ease;
        }
      `}</style>
      {/* Decorative blobs */}
      <div className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full bg-blue-50 opacity-60 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-[400px] h-[400px] rounded-full bg-teal-50 opacity-50 blur-3xl pointer-events-none" />


      <div className="container-custom relative py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[80vh]">

          {/* ── Left: Text ─────────────────────────────────────── */}
          <div className="space-y-7">
            <BlurFade delay={0} duration={0.4} inView>
              <span className="badge">Trusted by 10,000+ Patients</span>
            </BlurFade>

            <BlurFade delay={0.15} duration={0.5} inView>
              <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 leading-tight">
                Your Perfect{" "}
                <span className="text-gradient">Smile</span>{" "}
                Starts Here
              </h1>
            </BlurFade>

            <BlurFade delay={0.28} duration={0.5} inView>
              <p className="text-lg text-gray-500 leading-relaxed max-w-lg">
                Compassionate, cutting-edge dental care for the whole family.
                From routine cleanings to full smile makeovers — we have you covered.
              </p>
            </BlurFade>

            <BlurFade delay={0.38} duration={0.5} inView>
              <div className="flex flex-wrap gap-4">
                <a
                  href={`https://wa.me/${clinicConfig.whatsapp.replace(/[^0-9]/g,"")}?text=${encodeURIComponent("Hello! I'd like to book a free consultation at " + clinicConfig.name)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-full transition-colors shadow-md"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                  Book Free Consultation
                </a>
                <Link href="/services" className="btn-secondary">
                  Explore Services
                </Link>
              </div>
            </BlurFade>

            <BlurFade delay={0.48} duration={0.5} inView>
              <div className="flex items-center gap-5 pt-2">
              <div className="flex -space-x-2.5">
                {AVATARS.map((src, i) => (
                  <Image
                    key={i}
                    src={src}
                    alt={`Patient ${i + 1}`}
                    width={36}
                    height={36}
                    className="w-9 h-9 rounded-full border-2 border-white object-cover"
                    unoptimized
                  />
                ))}
              </div>
              <p className="text-sm text-gray-500">
                <strong className="text-gray-800">4.9 / 5</strong> from 2,000+ reviews
              </p>
            </div>
            </BlurFade>
          </div>

          {/* ── Right: Image ───────────────────────────────────── */}
          <div
            className="relative"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0) scale(1)" : "translateY(24px) scale(0.97)",
              transition: "opacity 0.8s ease 0.3s, transform 0.8s ease 0.3s",
            }}
          >
            {/* Main image */}
            <div className="relative w-full h-[480px] lg:h-[540px] rounded-[2rem] overflow-hidden shadow-2xl">
              <Image
                src={HERO_IMAGE}
                alt="Patient smiling at SmileCare Dental Clinic"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center"
                priority
                unoptimized
              />
              {/* Subtle gradient overlay at bottom */}
              <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/30 to-transparent" />
            </div>

            {/* Floating card — bottom left */}
            <div
              className="hero-card-bl absolute -bottom-5 -left-5 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3 z-10 cursor-default"
              style={{
                opacity: visible ? 1 : 0,
                transition: "opacity 0.6s ease 0.8s",
              }}
            >
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <p className="text-xs text-gray-400">Emergency Care</p>
                <p className="text-sm font-bold text-gray-800">Available 24/7</p>
              </div>
            </div>

            {/* Floating card — top right */}
            <div
              className="hero-card-tr absolute -top-5 -right-5 bg-white rounded-2xl shadow-xl p-4 z-10 text-center min-w-[100px] cursor-default"
              style={{
                opacity: visible ? 1 : 0,
                transition: "opacity 0.6s ease 0.9s",
              }}
            >
              <p className="text-xs text-gray-400">Satisfaction Rate</p>
              <p className="text-3xl font-extrabold text-primary-blue">98%</p>
            </div>

            {/* Floating badge — mid left */}
            <div
              className="hero-card-ml absolute top-1/2 -left-6 -translate-y-1/2 bg-white rounded-2xl shadow-lg px-4 py-3 z-10 cursor-default"
              style={{
                opacity: visible ? 1 : 0,
                transition: "opacity 0.6s ease 1s",
              }}
            >
              <p className="text-xs text-gray-400">Happy Patients</p>
              <p className="text-lg font-bold text-gray-800">10,000+</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
