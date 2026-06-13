import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { clinicConfig } from "../lib/clinic-config";
import { generateMeta } from "@/lib/meta";

export const metadata = generateMeta("terms");

export default function TermsOfServicePage() {
  const updated = "1 January 2025";
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <div className="relative h-40 bg-gradient-to-br from-primary-blue to-primary-teal flex items-center justify-center">
          <div className="absolute inset-0 bg-black/25" />
          <h1 className="relative text-3xl font-bold text-white">Terms of Service</h1>
        </div>

        <section className="section-padding bg-white">
          <div className="container-custom max-w-3xl prose prose-slate prose-headings:font-semibold prose-a:text-primary-blue">
            <p className="text-sm text-gray-400 mb-8">Last updated: {updated}</p>

            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing and using the {clinicConfig.name} website, you accept and agree to be bound by these
              Terms of Service. If you do not agree, please do not use this website.
            </p>

            <h2>2. Use of Website</h2>
            <p>This website is intended to:</p>
            <ul>
              <li>Provide information about our dental services</li>
              <li>Allow patients to request appointments</li>
              <li>Connect patients with our clinic team via WhatsApp</li>
            </ul>
            <p>You agree not to misuse this website, submit false information, or attempt to compromise its security.</p>

            <h2>3. Appointment Booking</h2>
            <p>
              Submitting an appointment request via our form or WhatsApp does <strong>not</strong> guarantee a
              confirmed appointment. All appointments are subject to availability and confirmation by our team.
            </p>

            <h2>4. Intellectual Property</h2>
            <p>
              All content on this website — including text, images, logos, and design — is the property of{" "}
              {clinicConfig.name} and may not be reproduced without written permission.
            </p>

            <h2>5. Limitation of Liability</h2>
            <p>
              {clinicConfig.name} is not liable for any direct, indirect, or consequential damages arising from
              use of this website. All information is provided in good faith and is subject to change without notice.
            </p>

            <h2>6. Governing Law</h2>
            <p>
              These terms are governed by the laws of India. Any disputes shall be subject to the exclusive
              jurisdiction of courts in {clinicConfig.city}, Maharashtra.
            </p>

            <h2>7. Changes to Terms</h2>
            <p>
              We reserve the right to update these Terms at any time. Continued use of the website after changes
              constitutes acceptance of the updated terms.
            </p>

            <h2>8. Contact</h2>
            <p>
              Questions? Reach us at{" "}
              <a href={`mailto:${clinicConfig.contact.email}`}>{clinicConfig.contact.email}</a>.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
