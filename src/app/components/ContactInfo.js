import { contactInfo } from "../lib/data";

const infoItems = [
  {
    label: "Address",
    value: contactInfo.address,
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    href: null,
  },
  {
    label: "Phone",
    value: contactInfo.phone,
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    href: `tel:${contactInfo.phone}`,
  },
  {
    label: "Email",
    value: contactInfo.email,
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    href: `mailto:${contactInfo.email}`,
  },
];

export default function ContactInfo() {
  return (
    <div className="space-y-8">
      <div>
        <span className="badge mb-3">Get In Touch</span>
        <h2 className="text-3xl font-bold text-gray-900 mb-3">Contact Information</h2>
        <p className="text-gray-500">
          We're here to answer any questions and help you schedule your visit.
        </p>
      </div>

      <div className="space-y-5">
        {infoItems.map(({ label, value, icon, href }) => (
          <div key={label} className="flex items-start gap-4">
            <div className="w-11 h-11 rounded-xl bg-primary-50 text-dental-blue flex items-center justify-center flex-shrink-0">
              {icon}
            </div>
            <div>
              <p className="text-xs text-gray-400 font-medium uppercase tracking-wide mb-0.5">
                {label}
              </p>
              {href ? (
                <a href={href} className="text-gray-800 font-medium hover:text-dental-blue transition-colors">
                  {value}
                </a>
              ) : (
                <p className="text-gray-800 font-medium">{value}</p>
              )}
            </div>
          </div>
        ))}
      </div>

      <div>
        <h3 className="font-semibold text-gray-900 mb-4">Office Hours</h3>
        <ul className="space-y-2">
          {contactInfo.hours.map(({ day, time }) => (
            <li key={day} className="flex justify-between text-sm">
              <span className="text-gray-600">{day}</span>
              <span className={`font-medium ${time === "Closed" ? "text-red-500" : "text-gray-800"}`}>
                {time}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
