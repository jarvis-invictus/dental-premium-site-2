import Image from "next/image";
import dynamic from "next/dynamic";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import ServiceCard from "./components/ServiceCard";
import clinicConfig from "./lib/clinicConfig";
import { SectionGrid } from "./components/ui/SectionGrid";
import { getFAQSchema } from "@/lib/schemaMarkup";

// Lazy loaded heavy components
const TestimonialsCarousel = dynamic(() => import("./components/TestimonialsCarousel"), { ssr: false, loading: () => <div className="h-64 animate-pulse bg-gray-100 rounded-xl"></div> });
const DoctorProfile = dynamic(() => import("./components/DoctorProfile"));
const FAQ = dynamic(() => import("./components/FAQ"));
const WhatsAppWidget = dynamic(() => import("./components/WhatsAppWidget"), { ssr: false });

export const metadata = {
  title: clinicConfig.seo.title,
  description: clinicConfig.seo.description,
  keywords: clinicConfig.seo.keywords,
  openGraph: {
    title: clinicConfig.seo.title,
    description: clinicConfig.seo.description,
    type: "website",
    locale: "en_IN",
    siteName: clinicConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: clinicConfig.seo.title,
    description: clinicConfig.seo.description,
  },
};

/* ── Static data ──────────────────────────────────────────────────────────── */
const whyUs = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Painless Technology",
    desc: "Digital X-rays, rotary endodontics, and laser dentistry for completely painless procedures.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: `${clinicConfig.experienceYears}+ Years of Trust`,
    desc: `Serving ${clinicConfig.happyPatients} happy patients in ${clinicConfig.doctor.city} with compassionate care since 2005.`,
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "0% EMI Available",
    desc: "Flexible payment plans so cost is never a barrier to your dental health.",
  },
];

const homeServices = [
  { id: 1, title: "General Dentistry",   description: "Regular check-ups and professional cleanings to maintain your oral health and prevent future issues.",                                             href: "/services/general",      svgSrc: "/images/services/General Dentistry.svg" },
  { id: 2, title: "Dental Implants",     description: "Replace missing teeth with durable, natural-looking implants for a complete smile.",                                                               href: "/services/implants",     svgSrc: "/images/services/Dental Implants.svg" },
  { id: 3, title: "Pediatric Dentistry", description: "Friendly, gentle dental care to ensure your child's visits are comfortable, enjoyable, and completely stress-free.",                               href: "/services/kids",         svgSrc: "/images/services/Pediatric Dentistry.svg" },
  { id: 4, title: "Orthodontics",        description: "Straighten your teeth and align your bite. Services include traditional braces, clear aligners, and retainers.",                                   href: "/services/orthodontics", svgSrc: "/images/services/Orthodontics.svg" },
  { id: 5, title: "Cosmetic Dentistry",  description: "Enhance the appearance of your smile with treatments tailored to boost your confidence impression.",                                               href: "/services/cosmetic",     svgSrc: "/images/services/Cosmetic Dentistry.svg" },
  { id: 6, title: "Emergency Care",      description: "Immediate relief for unexpected dental problems like toothaches, broken teeth, or injuries.",                                                      href: "/services/emergency",    svgSrc: "/images/services/Emergency Care.svg" },
];

const testimonials = [
  { type: "text", name: "Priya Mehta", age: 34, procedure: "Root Canal", rating: 5, quote: "I was terrified of root canals. Dr. Sharma made it completely painless — I didn't even feel a thing! Done in just one visit. Highly recommend!", imageUrl: "https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop" },
  { type: "text", name: "Rajesh Kulkarni", age: 45, procedure: "Dental Implants", rating: 5, quote: "My implants look and feel exactly like my natural teeth. Best decision I ever made. The entire team at SmileCare was professional and caring.", imageUrl: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop" },
  { type: "text", name: "Ananya Desai", age: 28, procedure: "Teeth Whitening", rating: 5, quote: "Got 7 shades whiter in just one session! The results exceeded my expectations completely. Everyone keeps complimenting my smile now.", imageUrl: "https://images.pexels.com/photos/3771089/pexels-photo-3771089.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop" },
  { type: "text", name: "Vikram Patil", age: 38, procedure: "Kids Dentistry", rating: 5, quote: "My son used to cry at every dentist visit. Dr. Priya was so patient and gentle, he now actually looks forward to going! Amazing with children.", imageUrl: "https://images.pexels.com/photos/1121796/pexels-photo-1121796.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop" },
  { type: "text", name: "Meena Joshi", age: 52, procedure: "Full Mouth Rehab", rating: 5, quote: "After years of neglecting my dental health, SmileCare gave me back my confidence with a beautiful smile. The team was non-judgmental and incredibly supportive.", imageUrl: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop" },
];

const clinicTour = [
  { label: "Reception Area", src: "/images/gallery/reception.jpg" },
  { label: "Treatment Room", src: "/images/gallery/treatment-room.jpg" },
  { label: "Sterilisation Unit", src: "/images/gallery/sterilisation.jpg" },
  { label: "Digital X-Ray Suite", src: "/images/gallery/dental-xray.jpg" },
  { label: "Waiting Lounge", src: "/images/gallery/waiting-lounge.jpg" },
  { label: "Smile Wall", src: "/images/gallery/smile-wall.jpg", position: "15% center" },
];

const faqs = [
  { question: "Is root canal treatment painful?", answer: "Modern root canal treatment is virtually painless. We use advanced rotary instruments, apex locators, and local anaesthesia to ensure you feel nothing during the procedure." },
  { question: "How long does a dental implant procedure take?", answer: "The implant placement takes about 30–45 minutes. The final crown is fitted 3–6 months later once the implant integrates with the jawbone. Some cases qualify for same-day crowns." },
  { question: "Do you offer 0% EMI on treatments?", answer: "Yes! We offer no-cost EMI options for 3, 6, 9, and 12 months through major credit/debit cards and fintech partners. Ask our front desk for details." },
  { question: "At what age should my child first visit a dentist?", answer: "The Indian Dental Association (IDA) recommends the first dental visit within 6 months of the first tooth erupting, or by age 1 — whichever comes first." },
  { question: "How long does teeth whitening last?", answer: "Professional in-office whitening lasts 6–12 months with proper care. Avoiding tea, coffee, and tobacco significantly extends the results." },
  { question: "What is the difference between braces and clear aligners?", answer: "Metal/ceramic braces are fixed and handle complex cases. Clear aligners (Invisalign) are removable, nearly invisible, and ideal for mild to moderate misalignment." },
  { question: "Is the clinic open on Sundays?", answer: `Yes! We are open ${clinicConfig.hours[1]?.time || "10:00 AM – 2:00 PM"} on Sundays for emergency consultations and pre-booked appointments.` },
  { question: "Do you accept dental insurance?", answer: "We accept most major dental insurance plans. Please bring your insurance card and we will help with the claim process at the front desk." },
];

/* ── Schema.org JSON-LD ───────────────────────────────────────────────────── */
const schema = {
  "@context": "https://schema.org",
  "@type": "Dentist",
  name: clinicConfig.name,
  image: `${process.env.NEXT_PUBLIC_SITE_URL || "https://smilecare.in"}/images/logo.jpg`,
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://smilecare.in",
  telephone: clinicConfig.phone,
  address: {
    "@type": "PostalAddress",
    streetAddress: clinicConfig.address,
    addressLocality: clinicConfig.doctor.city,
    addressCountry: "IN",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: clinicConfig.googleRating,
    reviewCount: 850,
  },
  openingHours: ["Mo-Sa 09:00-20:00", "Su 10:00-14:00"],
};

/* ── Page ─────────────────────────────────────────────────────────────────── */
export default function HomePage() {
  const waNumber = clinicConfig.whatsapp.replace(/[^0-9]/g, "");
  const mapsEmbedSrc = `https://www.google.com/maps/embed/v1/place?key=${clinicConfig.googleMapsKey}&q=${encodeURIComponent(clinicConfig.address)}`;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getFAQSchema(faqs)) }}
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
              <p className="section-subtitle">World-class dentistry with a personal touch — right here in {clinicConfig.doctor.city}.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {whyUs.map((item) => (
                <div key={item.title} className="bg-white/70 backdrop-blur-sm rounded-2xl border border-gray-100 shadow-sm p-6 text-center group hover:-translate-y-1 transition-transform duration-300">
                  <div className="w-16 h-16 rounded-2xl bg-blue-50 text-primary-blue flex items-center justify-center mx-auto mb-5 group-hover:bg-gradient-to-br group-hover:from-primary-blue group-hover:to-primary-teal group-hover:text-white transition-colors duration-300">
                    {item.icon}
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
              {homeServices.map((s) => (
                <ServiceCard key={s.id} {...s} />
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
              {clinicTour.map(({ label, src, position }) => (
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
            <FAQ faqs={faqs} />
          </div>
        </section>

        {/* ── Location ──────────────────────────────────────────────── */}
        <section className="relative overflow-hidden section-padding bg-white/70" id="location">
          <SectionGrid />
          <div className="container-custom relative z-10">
            <div className="text-center mb-10">
              <span className="badge mb-3">Find Us</span>
              <h2 className="section-title">Visit Our Clinic</h2>
              <p className="text-gray-500 text-sm">{clinicConfig.address}</p>
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
              <a href={clinicConfig.googleMapsUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-primary-blue hover:underline">
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
