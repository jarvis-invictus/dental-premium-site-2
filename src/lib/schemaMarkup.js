import { clinicConfig } from "@/app/lib/clinic-config";

const domain =
  process.env.NEXT_PUBLIC_SITE_URL ||
  process.env.NEXT_PUBLIC_DOMAIN ||
  "https://smilecare.in";

const sameAsUrls = [
  clinicConfig.social.instagram,
  clinicConfig.social.facebook,
  clinicConfig.practoUrl,
].filter(Boolean);

/**
 * Schema.org Dentist / LocalBusiness for the root layout.
 */
export function getLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Dentist",
        "@id": `${domain}/#dentist`,
        name: clinicConfig.name,
        description: "Full-service dental clinic in Pune offering painless, affordable care for the whole family — root canal, implants, braces, cosmetic dentistry, and pediatric dentistry.",
        image: `${domain}/images/logo.jpg`,
        url: domain,
        telephone: clinicConfig.contact.phone_primary,
        email: clinicConfig.contact.email,
        priceRange: "₹₹",
        foundingDate: "2005",
        areaServed: {
          "@type": "City",
          name: clinicConfig.city,
        },
        address: {
          "@type": "PostalAddress",
          streetAddress: clinicConfig.contact.address_full,
          addressLocality: clinicConfig.city,
          addressRegion: "Maharashtra",
          postalCode: "411005",
          addressCountry: "IN",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 18.5304,
          longitude: 73.8567,
        },
        hasMap: clinicConfig.contact.google_maps_url,
        contactPoint: {
          "@type": "ContactPoint",
          telephone: clinicConfig.contact.phone_primary,
          contactType: "customer service",
          email: clinicConfig.contact.email,
          availableLanguage: ["English", "Hindi", "Marathi"],
          areaServed: "IN",
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
          ratingValue: clinicConfig.stats.google_rating,
          bestRating: "5",
          reviewCount: "2000",
        },
        knowsAbout: [
          "Root Canal Treatment",
          "Dental Implants",
          "Teeth Whitening",
          "Orthodontics",
          "Pediatric Dentistry",
          "Smile Designing",
          "Full Mouth Rehabilitation",
          "Laser Gum Therapy",
          "Digital Smile Design",
          "Cosmetic Dentistry",
        ],
        ...(sameAsUrls.length > 0 && { sameAs: sameAsUrls }),
      },
      {
        "@type": "WebSite",
        "@id": `${domain}/#website`,
        url: domain,
        name: clinicConfig.name,
        description: clinicConfig.seo.description,
        inLanguage: "en-IN",
        publisher: { "@id": `${domain}/#dentist` },
      },
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
    "@id": `${domain}/#doctor`,
    name: doc.name,
    description: `${doc.qualifications} — ${doc.experienceYears}+ years of dental experience in ${doc.city}, Maharashtra.`,
    jobTitle: "Dental Surgeon",
    medicalSpecialty: "Dentist",
    url: `${domain}/about`,
    image: `${domain}${doc.photo}`,
    knowsLanguage: doc.languages,
    knowsAbout: doc.specialInterests,
    alumniOf: {
      "@type": "EducationalOrganization",
      name: doc.university,
    },
    memberOf: {
      "@type": "Organization",
      name: "Indian Dental Association (IDA)",
      identifier: doc.idaMembershipNo,
    },
    worksFor: {
      "@type": "Dentist",
      "@id": `${domain}/#dentist`,
      name: clinicConfig.name,
      url: domain,
    },
  };
}
