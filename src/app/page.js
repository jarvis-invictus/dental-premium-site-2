import Image from "next/image";
import dynamic from "next/dynamic";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import ServiceCard from "./components/ServiceCard";
import { clinicConfig } from "@/app/lib/clinic-config";
import { SectionGrid } from "./components/ui/SectionGrid";
import { getFAQSchema } from "@/lib/schemaMarkup";

// Lazy loaded heavy components
const TestimonialsCarousel = dynamic(() => import("./components/TestimonialsCarousel"), { ssr: false, loading: () => <div className="h-64 animate-pulse bg-gray-100 rounded-xl"></div> });
const DoctorProfile = dynamic(() => import("./components/DoctorProfile"));
const FAQ = dynamic(() => import("./components/FAQ"));
const WhatsAppWidget = dynamic(() => import("./components/WhatsAppWidget"), { ssr: false });

export const metadata = {
  title: `${clinicConfig.name} - ${clinicConfig.tagline}`,
  description: clinicConfig.seo.description,
  keywords: clinicConfig.seo.keywords,
  openGraph: {
    title: `${clinicConfig.name} - ${clinicConfig.tagline}`,
    description: clinicConfig.seo.description,
    type: "website",
    locale: "en_IN",
    siteName: clinicConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: `${clinicConfig.name} - ${clinicConfig.tagline}`,
    description: clinicConfig.seo.description,
  },
};



/* ── Schema.org JSON-LD ───────────────────────────────────────────────────── */
const schema = {
  "@context": "https://schema.org",
  "@type": "Dentist",
  name: clinicConfig.name,
  image: `${process.env.NEXT_PUBLIC_SITE_URL || "https://p2.invictus-ai.in"}/images/logo.jpg`,
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://p2.invictus-ai.in",
  telephone: clinicConfig.contact.phone_primary,
  address: {
    "@type": "PostalAddress",
    streetAddress: clinicConfig.contact.address_full,
    addressLocality: clinicConfig.city,
    addressCountry: "IN",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: clinicConfig.stats.google_rating,
    reviewCount: 850,
  },
  openingHours: ["Mo-Sa 09:00-20:00", "Su 10:00-14:00"],
};

/* ── Page ─────────────────────────────────────────────────────────────────── */
export default function HomePage() {
  const waNumber = clinicConfig.contact.phone_whatsapp.replace(/[^0-9]/g, "");
  const mapsEmbedSrc = `https://www.google.com/maps/embed/v1/place?key=${clinicConfig.googleMapsKey}&q=${encodeURIComponent(clinicConfig.contact.address_full)}`;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getFAQSchema(clinicConfig.faqs)) }}
      />

      <Navbar />

      <main className="flex-1">
        {/* ── Hero ──────────────────────────────────────────────────── */}
        <Hero imageUrl="/images/hero-dentist.jpg" />

        {/* ── Why Choose Us ─────────────────────────────────────────── */}
        <section className="relative overflow-hidden section-padding bg-white/70" id="why-us">
          <SectionGrid />
          <div className="container-custom relative z-10">
            <div className="text-center mb-12">
              <span className="badge mb-3">Why SmileCare</span>
              <h2 className="section-title">Why Patients Choose Us</h2>
              <p className="section-subtitle">World-class dentistry with a personal touch — right here in {clinicConfig.city}.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {clinicConfig.whyUs.map((item) => (
                <div key={item.title} className="bg-white/70 backdrop-blur-sm rounded-2xl border border-gray-100 shadow-sm p-6 text-center group hover:-translate-y-1 transition-transform duration-300">
                  <div className="w-16 h-16 rounded-2xl bg-blue-50 text-primary-blue flex items-center justify-center mx-auto mb-5 group-hover:bg-gradient-to-br group-hover:from-primary-blue group-hover:to-primary-teal group-hover:text-white transition-colors duration-300">
                    {item.iconType === "tech" && (
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    )}
                    {item.iconType === "trust" && (
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    )}
                    {item.iconType === "finance" && (
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    )}
                  </div>
                  <h3 className="text-lg font-semibold text-neutral-dark mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Services Preview ──────────────────────────────────────── */}
        <section className="relative overflow-hidden section-padding bg-gray-50/70" id="services">
          <SectionGrid />
          <div className="container-custom relative z-10">
            <div className="text-center mb-12">
              <span className="badge mb-3">Our Services</span>
              <h2 className="section-title">Treatments We Offer</h2>
              <p className="section-subtitle">From routine check-ups to advanced smile transformations — all under one roof.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
              {clinicConfig.services.map((s) => (
                <ServiceCard key={s.id} {...s} title={s.name} svgSrc={s.imageSrc} href={`/services/${s.id}`} />
              ))}
            </div>
          </div>
        </section>

        {/* ── Testimonials ──────────────────────────────────────────── */}
        <section className="relative overflow-hidden section-padding bg-white/70" id="testimonials">
          <SectionGrid />
          <div className="container-custom relative z-10">
            <div className="text-center mb-4">
              <span className="badge mb-3">Patient Stories</span>
              <h2 className="section-title">Real Results, Real Smiles</h2>
              <p className="section-subtitle">Hear from patients who trusted us with their smiles.</p>
            </div>
            <TestimonialsCarousel />
          </div>
        </section>

        {/* ── Doctor Profile ────────────────────────────────────────── */}
        <section className="relative overflow-hidden section-padding bg-gray-50/70" id="doctor">
          <SectionGrid />
          <div className="container-custom relative z-10">
            <div className="text-center mb-12">
              <span className="badge mb-3">Meet Your Doctor</span>
              <h2 className="section-title">Expert Care You Can Trust</h2>
            </div>
            <DoctorProfile />
          </div>
        </section>

        {/* ── Clinic Tour ───────────────────────────────────────────── */}
        <section className="relative overflow-hidden section-padding bg-white/70" id="clinic-tour">
          <SectionGrid />
          <div className="container-custom relative z-10">
            <div className="text-center mb-12">
              <span className="badge mb-3">Our Clinic</span>
              <h2 className="section-title">A Clinic Built for Comfort</h2>
              <p className="section-subtitle">State-of-the-art equipment in a warm, welcoming environment.</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {clinicConfig.clinicTour.map(({ label, src, position }) => (
                <div key={label} className="relative aspect-video rounded-2xl overflow-hidden group shadow-md bg-gray-100">
                  <Image
                    src={src}
                    alt={label}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    style={{ objectPosition: position || "center center" }}
                    sizes="(max-width: 768px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 px-3 py-2">
                    <p className="text-white text-xs font-semibold drop-shadow">{label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ───────────────────────────────────────────────────── */}
        <section className="relative overflow-hidden section-padding bg-gray-50/70" id="faq">
          <SectionGrid />
          <div className="container-custom max-w-3xl relative z-10">
            <div className="text-center mb-12">
              <span className="badge mb-3">FAQs</span>
              <h2 className="section-title">Frequently Asked Questions</h2>
              <p className="section-subtitle">Everything you need to know before your visit.</p>
            </div>
            <FAQ faqs={clinicConfig.faqs} />
          </div>
        </section>

        {/* ── Location ──────────────────────────────────────────────── */}
        <section className="relative overflow-hidden section-padding bg-white/70" id="location">
          <SectionGrid />
          <div className="container-custom relative z-10">
            <div className="text-center mb-10">
              <span className="badge mb-3">Find Us</span>
              <h2 className="section-title">Visit Our Clinic</h2>
              <p className="text-gray-500 text-sm">{clinicConfig.contact.address_full}</p>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg w-full h-80 border border-gray-200 relative bg-gray-100">
              <iframe
                title={`Location of ${clinicConfig.name}`}
                src="https://www.openstreetmap.org/export/embed.html?bbox=73.8267%2C18.5104%2C73.8867%2C18.5504&layer=mapnik&marker=18.5304%2C73.8567"
                width="100%"
                height="calc(100% + 36px)"
                style={{ border: 0, marginBottom: "-36px", display: "block" }}
                loading="lazy"
              />
            </div>
            <div className="text-center mt-4">
              <a href={clinicConfig.contact.google_maps_url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-primary-blue hover:underline">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                Open in Google Maps
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppWidget />
    </>
  );
}
