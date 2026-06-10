import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { clinicConfig } from "../lib/clinic-config";
import { generateMeta } from "@/lib/meta";

export const metadata = generateMeta("disclaimer");

export default function DisclaimerPage() {
  const updated = "1 January 2025";
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <div className="relative h-40 bg-gradient-to-br from-primary-blue to-primary-teal flex items-center justify-center">
          <div className="absolute inset-0 bg-black/25" />
          <h1 className="relative text-3xl font-bold text-white">Medical Disclaimer</h1>
        </div>

        <section className="section-padding bg-white">
          <div className="container-custom max-w-3xl prose prose-slate prose-headings:font-semibold prose-a:text-primary-blue">
            <p className="text-sm text-gray-400 mb-8">Last updated: {updated}</p>

            <div className="bg-amber-50 border border-amber-300 rounded-xl p-5 mb-8 not-prose">
              <p className="text-amber-800 text-sm font-semibold">
                The information provided on this website is for general educational and informational purposes only.
                It is not a substitute for professional medical or dental advice, diagnosis, or treatment.
              </p>
            </div>

            <h2>1. Not a Substitute for Professional Advice</h2>
            <p>
              Information on this website — including descriptions of dental procedures, symptoms, treatments, and
              pricing — is provided for educational purposes only. Always seek the advice of a qualified dental
              professional with any questions you may have regarding your oral health condition.
            </p>

            <h2>2. Before & After Images</h2>
            <p>
              Patient results shown in our gallery represent individual outcomes and may not reflect typical results.
              All images are used with written patient consent. Individual results vary based on medical history,
              age, lifestyle, and adherence to treatment.
            </p>

            <h2>3. Pricing Information</h2>
            <p>
              Prices listed on this website are starting prices and indicative estimates only. Actual treatment costs
              depend on individual clinical assessment and may vary. A detailed cost estimate will be provided after
              an in-person consultation.
            </p>

            <h2>4. Emergency Situations</h2>
            <p>
              If you are experiencing a medical emergency, please call emergency services immediately (112 in India).
              Do not rely solely on this website for emergency dental guidance.
            </p>

            <h2>5. Accuracy of Information</h2>
            <p>
              While {clinicConfig.name} makes every effort to ensure the accuracy of information, we make no
              warranties regarding the completeness, accuracy, or timeliness of the content. Information is
              subject to change without notice.
            </p>

            <h2>6. Contact</h2>
            <p>
              For a professional consultation, call{" "}
              <a href={`tel:${clinicConfig.contact.phone_primary}`}>{clinicConfig.contact.phone_primary}</a> or visit our clinic at{" "}
              {clinicConfig.contact.address_full}.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
