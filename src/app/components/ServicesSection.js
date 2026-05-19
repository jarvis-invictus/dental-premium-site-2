import Link from "next/link";
import ServiceCard from "./ServiceCard";
import { services } from "../lib/data";

export default function ServicesSection() {
  const featured = services.slice(0, 3);

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <span className="badge mb-3">Our Services</span>
          <h2 className="section-title">Comprehensive Dental Care</h2>
          <p className="section-subtitle">
            From preventive cleanings to advanced restorative procedures, we offer
            everything your smile needs under one roof.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featured.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        <div className="text-center mt-10">
          <Link href="/services" className="btn-secondary">
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
}
