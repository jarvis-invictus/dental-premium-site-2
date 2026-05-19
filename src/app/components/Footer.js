import Link from "next/link";
import { navLinks } from "../lib/data";
import clinicConfig from "../lib/clinicConfig";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <Link href="/" className="flex items-center gap-2 font-heading font-bold text-xl text-white mb-4">
              <span className="w-8 h-8 rounded-lg bg-gradient-brand flex items-center justify-center text-white text-sm font-bold">
                S
              </span>
              {clinicConfig.name.split(" ")[0]}
            </Link>
            <p className="text-sm leading-relaxed text-gray-400">
              {clinicConfig.tagline}. Committed to delivering healthy, confident smiles for over {clinicConfig.experienceYears} years.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {navLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="text-sm text-gray-400 hover:text-white transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Contact</h4>
            <address className="not-italic space-y-3 text-sm text-gray-400">
              <p className="leading-relaxed">{clinicConfig.address}</p>
              <p>
                <a href={`tel:${clinicConfig.phone}`} className="hover:text-white transition-colors font-medium text-gray-300">
                  {clinicConfig.phone}
                </a>
              </p>
              <p>
                <a href={`mailto:${clinicConfig.email}`} className="hover:text-white transition-colors">
                  {clinicConfig.email}
                </a>
              </p>
            </address>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Office Hours</h4>
            <ul className="space-y-2">
              {clinicConfig.hours.map(({ day, time }) => (
                <li key={day} className="text-sm text-gray-400">
                  <span className="text-gray-300 font-medium">{day}</span>
                  <br />
                  {time}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-6 text-sm text-gray-500">
          <p>© {currentYear} {clinicConfig.name}. All rights reserved.</p>
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-gray-600">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <span className="text-gray-700">·</span>
            <Link href="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</Link>
            <span className="text-gray-700">·</span>
            <Link href="/disclaimer" className="hover:text-white transition-colors">Disclaimer</Link>
          </div>
          <p className="text-gray-500 text-sm">
            Crafted with care by{" "}
            <a
              href="https://invictus-ai.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white font-bold tracking-wide hover:text-primary-teal transition-colors"
            >
              Invictus AI
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
