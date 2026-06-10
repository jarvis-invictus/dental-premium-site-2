import { clinicConfig } from "@/app/lib/clinic-config";

const domain =
  process.env.NEXT_PUBLIC_SITE_URL ||
  process.env.NEXT_PUBLIC_DOMAIN ||
  "https://smilecare.in";

const base = {
  title: `${clinicConfig.name} - ${clinicConfig.tagline}`,
  description: 'Professional dental care for the whole family in Pune. Book your appointment in 30 seconds.',
  keywords: ["dental clinic", "dentist Pune", "teeth whitening", "dental implants", "orthodontics", "painless dentistry"],
  metadataBase: new URL(domain),
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: domain,
    siteName: clinicConfig.name,
    images: [{ url: "/images/og-default.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/images/og-default.jpg"],
  },
};

const pages = {
  home: {
    ...base,
    title: `${clinicConfig.name} - ${clinicConfig.tagline}`,
    description: 'Professional dental care for the whole family in Pune. Book your appointment in 30 seconds.',
    openGraph: { ...base.openGraph, title: `${clinicConfig.name} - ${clinicConfig.tagline}` },
    twitter: { ...base.twitter, title: `${clinicConfig.name} - ${clinicConfig.tagline}` },
  },
  services: {
    ...base,
    title: `Dental Services | ${clinicConfig.name}`,
    description: `Complete dental services in ${'Pune'}. Root canal, implants, braces, kids dentistry & smile design. Starting ₹999.`,
  },
  about: {
    ...base,
    title: `About Us | ${clinicConfig.name}`,
    description: `${clinicConfig.doctors[0].experience_years}+ years of trusted dental care in ${'Pune'}. Meet ${clinicConfig.doctors[0].name} and our team.`,
  },
  contact: {
    ...base,
    title: `Contact | ${clinicConfig.name}`,
    description: `Book an appointment at our ${'Pune'} clinic. Call ${clinicConfig.contact.phone_primary} or WhatsApp. Open Mon–Sat 9 AM–8 PM.`,
  },
  gallery: {
    ...base,
    title: `Before & After Gallery | ${clinicConfig.name}`,
    description: `See real patient results from ${clinicConfig.name} in ${'Pune'}. Root canal, implants, orthodontics & smile makeovers.`,
  },
  privacy: {
    ...base,
    title: `Privacy Policy | ${clinicConfig.name}`,
    description: `Privacy policy for ${clinicConfig.name}. Learn how we collect, use, and protect your personal information.`,
  },
  terms: {
    ...base,
    title: `Terms of Service | ${clinicConfig.name}`,
    description: `Terms of service for ${clinicConfig.name}. Please read before using our website or services.`,
  },
  disclaimer: {
    ...base,
    title: `Medical Disclaimer | ${clinicConfig.name}`,
    description: `Medical disclaimer for ${clinicConfig.name}. Information on this site is educational and not a substitute for professional dental advice.`,
  },
};

/**
 * Returns Next.js metadata object for a given page slug.
 * @param {'home'|'services'|'about'|'contact'|'gallery'|'privacy'|'terms'|'disclaimer'} page
 * @param {object} [overrides] - Optional field overrides
 * @returns {import('next').Metadata}
 */
export function generateMeta(page, overrides = {}) {
  const meta = pages[page] ?? base;
  return { ...meta, ...overrides };
}
