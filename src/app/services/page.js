import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ServiceCard from "../components/ServiceCard";
import WhatsAppWidget from "../components/WhatsAppWidget";
import clinicConfig from "../lib/clinicConfig";
import serviceData from "../lib/serviceData";
import HeroHeading from "../components/ui/HeroHeading";
import { SectionGrid } from "../components/ui/SectionGrid";

export const metadata = {
  title: `Our Services | ${clinicConfig.name}`,
  description: `Explore comprehensive dental services at ${clinicConfig.name} — root canal, implants, braces, kids dentistry, smile designing and more.`,
};

const ALLOWED_IDS = ["general", "implants", "kids", "orthodontics", "cosmetic", "emergency"];
const allowedServices = serviceData.filter((s) => ALLOWED_IDS.includes(s.id));

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        {/* Hero */}
        <div className="relative h-64 bg-gradient-to-br from-primary-blue to-primary-teal flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-black/30" />
          <HeroHeading badge="What We Offer" title="Our Services" subtitle="Advanced dental care — gentle, affordable, and effective." />
        </div>

        <div className="relative overflow-hidden">
          <SectionGrid />
          <div className="container-custom section-padding relative z-10">
          {/* Service card grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {allowedServices.map((s) => (
              <ServiceCard
                key={s.id}
                title={s.name}
                description={s.tagline}
                svgSrc={s.svgSrc}
                href={`/services/${s.id}`}
              />
            ))}
          </div>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppWidget />
    </>
  );
}
