import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { clinicConfig } from "../lib/clinic-config";
import { generateMeta } from "@/lib/meta";

export const metadata = generateMeta("privacy");

export default function PrivacyPolicyPage() {
  const updated = "1 January 2025";
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <div className="relative h-40 bg-gradient-to-br from-primary-blue to-primary-teal flex items-center justify-center">
          <div className="absolute inset-0 bg-black/25" />
          <h1 className="relative text-3xl font-bold text-white">Privacy Policy</h1>
        </div>

        <section className="section-padding bg-white">
          <div className="container-custom max-w-3xl prose prose-slate prose-headings:font-semibold prose-a:text-primary-blue">
            <p className="text-sm text-gray-400 mb-8">Last updated: {updated}</p>

            <h2>1. Information We Collect</h2>
            <p>When you use our appointment booking form or contact us, we collect:</p>
            <ul>
              <li>Name, mobile number, and email address</li>
              <li>Preferred appointment date, time, and dental service</li>
              <li>Brief description of your concern (optional)</li>
            </ul>

            <h2>2. How We Use Your Information</h2>
            <ul>
              <li>To confirm and manage your appointment</li>
              <li>To send appointment reminders via WhatsApp or SMS</li>
              <li>To improve our services and patient experience</li>
              <li>We do <strong>not</strong> sell or share your information with third parties for marketing purposes.</li>
            </ul>

            <h2>3. Data Storage</h2>
            <p>
              Appointment data may be stored in a Google Sheet accessible only to {clinicConfig.name} staff.
              Patient records are stored securely in our clinic management system in accordance with applicable
              Indian healthcare regulations.
            </p>

            <h2>4. Cookies</h2>
            <p>
              This website uses Google Analytics (if enabled) which sets cookies to measure traffic. No personally
              identifiable information is stored in cookies. You may disable cookies in your browser settings.
            </p>

            <h2>5. Third-Party Services</h2>
            <p>We use the following third-party services:</p>
            <ul>
              <li><strong>Google Analytics</strong> — anonymous traffic analysis</li>
              <li><strong>Google Maps</strong> — clinic location embed</li>
              <li><strong>WhatsApp (Meta)</strong> — appointment communication</li>
            </ul>

            <h2>6. Your Rights</h2>
            <p>You have the right to:</p>
            <ul>
              <li>Request access to the data we hold about you</li>
              <li>Request correction or deletion of your data</li>
              <li>Opt out of WhatsApp communications at any time</li>
            </ul>

            <h2>7. Contact Us</h2>
            <p>
              For any privacy-related queries, contact us at{" "}
              <a href={`mailto:${clinicConfig.contact.email}`}>{clinicConfig.contact.email}</a> or call{" "}
              <a href={`tel:${clinicConfig.contact.phone_primary}`}>{clinicConfig.contact.phone_primary}</a>.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
