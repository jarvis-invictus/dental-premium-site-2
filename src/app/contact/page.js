import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import WhatsAppWidget from "../components/WhatsAppWidget";
import clinicConfig from "../lib/clinicConfig";
import HeroHeading from "../components/ui/HeroHeading";
import { SectionGrid } from "../components/ui/SectionGrid";

export const metadata = {
  title: `Contact Us | ${clinicConfig.name}`,
  description: `Book an appointment or get directions to ${clinicConfig.name}. Call ${clinicConfig.phone} or WhatsApp us for same-day booking.`,
};

const mapsEmbedSrc = `https://www.openstreetmap.org/export/embed.html?bbox=73.8267%2C18.5104%2C73.8867%2C18.5504&layer=mapnik&marker=18.5304%2C73.8567`;

export default function ContactPage() {
  const waNumber = clinicConfig.whatsapp.replace(/[^0-9]/g, "");
  const emergencyWa = `https://wa.me/${waNumber}?text=${encodeURIComponent("EMERGENCY: I need urgent dental help. Please advise.")}`;

  return (
    <>
      <Navbar />
      <main className="flex-1">

        {/* ── Hero ──────────────────────────────────────────────────── */}
        <div className="relative h-48 bg-gradient-to-br from-primary-blue to-primary-teal flex items-center justify-center">
          <div className="absolute inset-0 bg-black/25" />
          <HeroHeading badge="Get In Touch" title="Contact Us" />
        </div>

        {/* ── Main 2-column layout ──────────────────────────────────── */}
        <section className="relative overflow-hidden section-padding bg-gray-50" id="contact">
          <SectionGrid />
          <div className="container-custom relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

              {/* Left — ContactForm */}
              <ContactForm />

              {/* Right — Info cards */}
              <div className="space-y-6">

                {/* Contact info card */}
                <div className="bg-white/70 backdrop-blur-sm rounded-2xl border border-gray-100 shadow-sm p-6 space-y-4">
                  <h2 className="text-lg font-bold text-neutral-dark">Clinic Details</h2>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-primary-blue flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                      <div>
                        <p className="text-sm font-medium text-gray-700">Address</p>
                        <p className="text-sm text-gray-500">{clinicConfig.address}</p>
                        <a href={clinicConfig.googleMapsUrl} target="_blank" rel="noopener noreferrer" className="text-xs text-primary-blue hover:underline mt-0.5 inline-block">Get Directions →</a>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-primary-blue flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                      <a href={`tel:${clinicConfig.phone}`} className="text-sm text-gray-600 hover:text-primary-blue transition-colors">{clinicConfig.phone}</a>
                    </div>
                    <div className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-primary-blue flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                      <a href={`mailto:${clinicConfig.email}`} className="text-sm text-gray-600 hover:text-primary-blue transition-colors">{clinicConfig.email}</a>
                    </div>
                  </div>

                  {/* Hours table */}
                  <div className="border-t border-gray-100 pt-4">
                    <p className="text-sm font-semibold text-neutral-dark mb-2">Working Hours</p>
                    <table className="w-full text-sm">
                      <tbody className="divide-y divide-gray-50">
                        {clinicConfig.hours.map(({ day, time }) => (
                          <tr key={day}>
                            <td className="py-1.5 text-gray-600 font-medium">{day}</td>
                            <td className="py-1.5 text-gray-500 text-right">{time}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Map embed — OpenStreetMap, no API key needed */}
                <div className="rounded-2xl overflow-hidden shadow-sm h-64 border border-gray-100 relative">
                  <iframe
                    title={`Location of ${clinicConfig.name}`}
                    src={mapsEmbedSrc}
                    width="100%"
                    height="calc(100% + 36px)"
                    style={{ border: 0, marginBottom: "-36px", display: "block" }}
                    loading="lazy"
                  />
                </div>
                <a
                  href={clinicConfig.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-primary-blue hover:underline"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                  Open in Google Maps
                </a>

                {/* Emergency contact — highlighted */}
                <div className="bg-red-50 border border-red-200 rounded-2xl p-5 flex items-start gap-4">
                  <div className="w-10 h-10 bg-danger rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                  </div>
                  <div>
                    <p className="font-semibold text-red-700 text-sm">Dental Emergency?</p>
                    <p className="text-xs text-red-600 mt-0.5 mb-3">Severe toothache, knocked-out tooth, or facial swelling — we are here for you.</p>
                    <div className="flex flex-wrap gap-2">
                      <a href={`tel:${clinicConfig.phone}`} className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-danger text-white text-xs font-semibold rounded-full">
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                        Call Now
                      </a>
                      <a href={emergencyWa} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-green-500 text-white text-xs font-semibold rounded-full">
                        WhatsApp Emergency
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Directions & Parking ──────────────────────────────────── */}
        <section className="relative overflow-hidden section-padding bg-white" id="directions">
          <SectionGrid />
          <div className="container-custom max-w-3xl relative z-10">
            <div className="text-center mb-8">
              <span className="text-xs font-bold uppercase tracking-widest text-primary-teal">Getting Here</span>
              <h2 className="section-title mt-1">Directions &amp; Parking</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              <div className="bg-white/70 backdrop-blur-sm rounded-2xl border border-gray-100 shadow-sm p-6 text-center hover:-translate-y-1 transition-transform duration-300">
                <div className="w-12 h-12 rounded-xl bg-primary-blue/10 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-primary-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 13h2l2 5h10l2-5h2M5 13V7a2 2 0 012-2h10a2 2 0 012 2v6M9 17v2m6-2v2" />
                  </svg>
                </div>
                <h3 className="font-semibold text-neutral-dark mb-1">By Metro</h3>
                <p className="text-sm text-gray-500 leading-relaxed">Alight at MG Road Metro Station (Purple Line). 5-minute walk north on MG Road.</p>
              </div>
              <div className="bg-white/70 backdrop-blur-sm rounded-2xl border border-gray-100 shadow-sm p-6 text-center hover:-translate-y-1 transition-transform duration-300">
                <div className="w-12 h-12 rounded-xl bg-primary-teal/10 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-primary-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 17a2 2 0 11-4 0 2 2 0 014 0zm10 0a2 2 0 11-4 0 2 2 0 014 0zM3 7h2l2-4h10l2 4h2v6H3V7zm0 0v2" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 9h18" />
                  </svg>
                </div>
                <h3 className="font-semibold text-neutral-dark mb-1">By Car</h3>
                <p className="text-sm text-gray-500 leading-relaxed">Paid parking available in the basement. Enter from the side lane on 12th Cross.</p>
              </div>
              <div className="bg-white/70 backdrop-blur-sm rounded-2xl border border-gray-100 shadow-sm p-6 text-center hover:-translate-y-1 transition-transform duration-300">
                <div className="w-12 h-12 rounded-xl bg-violet-50 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-violet-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01" />
                  </svg>
                </div>
                <h3 className="font-semibold text-neutral-dark mb-1">By Bus</h3>
                <p className="text-sm text-gray-500 leading-relaxed">BMTC routes 335E, 500C stop at MG Road junction, 2 minutes from the clinic.</p>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
      <WhatsAppWidget />
    </>
  );
}
