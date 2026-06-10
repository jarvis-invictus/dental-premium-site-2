import "@/styles/globals.css";
import { clinicConfig } from "@/app/lib/clinic-config";
import { getLocalBusinessSchema } from "@/lib/schemaMarkup";
import { GridPattern } from "./components/ui/grid-pattern";

const domain = process.env.NEXT_PUBLIC_SITE_URL || "https://smilecare.in";
const gaId = process.env.NEXT_PUBLIC_GA_ID;

export const metadata = {
  metadataBase: new URL(domain),
  title: {
    default: `${clinicConfig.name} - ${clinicConfig.tagline}`,
    template: `%s | ${clinicConfig.name}`,
  },
  description: 'Professional dental care for the whole family in Pune. Book your appointment in 30 seconds.',
  keywords: ["dental clinic", "dentist Pune", "teeth whitening", "dental implants", "orthodontics", "painless dentistry"],
  authors: [{ name: clinicConfig.name }],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: domain,
    siteName: clinicConfig.name,
    description: 'Professional dental care for the whole family in Pune. Book your appointment in 30 seconds.',
    images: [{ url: "/images/og-default.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${clinicConfig.name} - ${clinicConfig.tagline}`,
    description: 'Professional dental care for the whole family in Pune. Book your appointment in 30 seconds.',
    images: ["/images/og-default.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export default function RootLayout({ children }) {
  const schema = getLocalBusinessSchema();

  return (
    <html lang="en-IN">
      <head>
        {/* Preconnects for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://maps.googleapis.com" />
        {/* Google Fonts — Poppins (heading), Inter (body) */}
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Poppins:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        {/* Alpine.js v3 — defer ensures it initialises after DOM is ready */}
        <script
          defer
          src="https://cdn.jsdelivr.net/npm/alpinejs@3.14.1/dist/cdn.min.js"
        />
        {/* LocalBusiness JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
        {/* Google Analytics 4 — only injected when GA_ID is set */}
        {gaId && (
          <>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
            />
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${gaId}', { page_path: window.location.pathname });
                `,
              }}
            />
          </>
        )}
      </head>
      <body className="min-h-screen flex flex-col relative">
        <GridPattern
          width={40}
          height={40}
          className="fixed inset-0 h-full w-full z-0 pointer-events-none fill-blue-600/[0.10] stroke-blue-600/[0.22]"
          squares={[
            [2,2],[5,1],[8,4],[11,2],[14,5],[17,1],[20,3],[23,2],[26,4],
            [3,7],[6,9],[9,6],[12,8],[15,3],[18,7],[21,5],[24,8],[27,6],
            [1,11],[4,13],[7,10],[10,12],[13,9],[16,11],[19,13],[22,10],[25,12],
            [2,15],[5,17],[8,14],[11,16],[14,18],[17,15],[20,17],[23,14],[26,16],
            [3,20],[6,22],[9,19],[12,21],[15,23],[18,20],[21,22],[24,19],[27,21],
          ]}
        />
        <div className="relative z-10 min-h-screen flex flex-col">
          {children}
        </div>
      </body>
    </html>
  );
}
