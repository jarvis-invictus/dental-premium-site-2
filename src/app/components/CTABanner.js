import Link from "next/link";

export default function CTABanner() {
  return (
    <section className="section-padding bg-gradient-brand">
      <div className="container-custom text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          Ready for a Healthier, Brighter Smile?
        </h2>
        <p className="text-primary-100 text-lg mb-8 max-w-xl mx-auto">
          Book your free consultation today and take the first step toward the
          smile you deserve.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-7 py-3 bg-white text-dental-blue font-semibold rounded-full hover:bg-primary-50 transition-colors duration-200"
          >
            Book Appointment
          </Link>
          <a
            href="tel:+15551234567"
            className="inline-flex items-center justify-center px-7 py-3 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-dental-blue transition-colors duration-200"
          >
            Call Us Now
          </a>
        </div>
      </div>
    </section>
  );
}
