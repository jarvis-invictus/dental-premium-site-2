import clinicConfig from "@/app/lib/clinicConfig";

const domain =
  process.env.NEXT_PUBLIC_SITE_URL ||
  process.env.NEXT_PUBLIC_DOMAIN ||
  "https://smilecare.in";

/**
 * Schema.org Dentist / LocalBusiness for the root layout.
 */
export function getLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Dentist",
    name: clinicConfig.name,
    image: `${domain}/images/logo.jpg`,
    "@id": domain,
    url: domain,
    telephone: clinicConfig.phone,
    email: clinicConfig.email,
    priceRange: "₹₹",
    address: {
      "@type": "PostalAddress",
      streetAddress: clinicConfig.address,
      addressLocality: clinicConfig.doctor.city,
      addressRegion: "Karnataka",
      postalCode: "560034",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 12.9716,
      longitude: 77.5946,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "09:00",
        closes: "20:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Sunday",
        opens: "10:00",
        closes: "14:00",
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: clinicConfig.googleRating,
      bestRating: "5",
      reviewCount: "2000",
    },
    sameAs: [
      clinicConfig.social.instagram,
      clinicConfig.social.facebook,
      clinicConfig.practoUrl,
    ],
  };
}

/**
 * Schema.org FAQPage — pass an array of { question, answer }.
 * @param {{ question: string; answer: string }[]} faqs
 */
export function getFAQSchema(faqs) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(({ question, answer }) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: { "@type": "Answer", text: answer },
    })),
  };
}

/**
 * Schema.org MedicalBusiness service schema.
 * @param {{ name: string, description: string, price: number }} service
 */
export function getServiceSchema(service) {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    name: service.name,
    description: service.description,
    procedureType: "https://schema.org/TherapeuticProcedure",
    status: "https://schema.org/ActiveActionStatus",
    provider: {
      "@type": "Dentist",
      name: clinicConfig.name,
      url: domain,
    },
  };
}

/**
 * Schema.org Person schema for the doctor profile.
 */
export function getDoctorSchema() {
  const doc = clinicConfig.doctor;
  return {
    "@context": "https://schema.org",
    "@type": "Physician",
    name: doc.name,
    description: `${doc.qualifications} — ${doc.experienceYears} years experience in ${doc.city}`,
    medicalSpecialty: "Dentist",
    worksFor: {
      "@type": "Dentist",
      name: clinicConfig.name,
      url: domain,
    },
    image: `${domain}${doc.photo}`,
    knowsLanguage: doc.languages,
  };
}
