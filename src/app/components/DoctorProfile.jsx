import Image from "next/image";
import clinicConfig from "../lib/clinicConfig";

const { doctor, whatsapp } = clinicConfig;

/* ── IDA Badge ────────────────────────────────────────────────────────────── */
function IDABadge({ membershipNo }) {
  return (
    <div className="inline-flex items-center gap-2 px-3 py-2 bg-blue-50 border border-primary-mint rounded-xl">
      <svg
        className="w-5 h-5 text-primary-blue flex-shrink-0"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.8}
          d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
        />
      </svg>
      <div className="leading-tight">
        <p className="text-xs font-bold text-primary-blue">IDA Member</p>
        <p className="text-[10px] text-gray-500">{membershipNo}</p>
      </div>
    </div>
  );
}

/* ── Bullet item ──────────────────────────────────────────────────────────── */
function BulletItem({ text }) {
  return (
    <li className="flex items-start gap-2 text-sm text-gray-700">
      <svg
        className="w-4 h-4 text-success mt-0.5 flex-shrink-0"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
      </svg>
      {text}
    </li>
  );
}

/* ── DoctorProfile ────────────────────────────────────────────────────────── */
/**
 * DoctorProfile — split layout (image left, content right).
 * All data pulled from clinicConfig.doctor automatically.
 * No props required — just drop <DoctorProfile /> anywhere.
 */
export default function DoctorProfile() {
  const waNumber = whatsapp.replace(/[^0-9]/g, "");
  const waMessage = encodeURIComponent(
    `Hello, I'd like to book an appointment with ${doctor.name}.`
  );
  const waLink = `https://wa.me/${waNumber}?text=${waMessage}`;

  return (
    <section
      className="bg-white rounded-2xl shadow-md p-8 flex flex-col lg:flex-row gap-10 items-start"
      aria-label={`Doctor profile: ${doctor.name}`}
    >
      {/* ── Left: Photo + trust signals ────────────────────────────── */}
      <div className="flex flex-col items-center gap-4 flex-shrink-0 w-full lg:w-auto">
        {/* Photo — circle frame, image fully inside, soft bottom fade */}
        <div
          className="relative flex-shrink-0 rounded-full overflow-hidden"
          style={{
            width: 340,
            height: 340,
            border: "3px dashed #93c5fd",
            background: "#dbeafe",
          }}
        >
          {doctor.photo ? (
            <>
              <Image
                src={doctor.photo}
                alt={`Professional photo of ${doctor.name}`}
                fill
                className="object-cover"
                style={{ objectPosition: "center 0%" }}
                sizes="340px"
                priority
                unoptimized
              />
              {/* Soft bottom fade so image blends into circle naturally */}
              <div
                className="absolute bottom-0 left-0 right-0"
                style={{
                  height: 80,
                  background: "linear-gradient(to bottom, transparent, #dbeafe)",
                }}
              />
            </>
          ) : (
            <div className="absolute inset-0 bg-gradient-to-br from-primary-blue to-primary-teal flex items-center justify-center">
              <span className="text-white text-6xl font-bold select-none">
                {doctor.name.charAt(4)}
              </span>
            </div>
          )}
        </div>

        {/* Trust signals */}
        <div className="flex flex-wrap gap-2 justify-center">
          {doctor.idaMember && <IDABadge membershipNo={doctor.idaMembershipNo} />}

          <div className="inline-flex items-center gap-2 px-3 py-2 bg-blue-50 border border-primary-mint rounded-xl">
            <svg
              className="w-5 h-5 text-primary-blue flex-shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.8}
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <div className="leading-tight">
              <p className="text-xs font-bold text-primary-blue">{doctor.yearsInCity}+ yrs in {doctor.city}</p>
              <p className="text-[10px] text-gray-500">Local expertise</p>
            </div>
          </div>
        </div>
      </div>

      {/* ── Right: Content ──────────────────────────────────────────── */}
      <div className="flex-1 space-y-5">
        {/* Name + qualifications */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-neutral-dark leading-tight">
            {doctor.name}
          </h2>
          <p className="text-primary-blue font-medium mt-1">{doctor.qualifications}</p>
          <p className="text-xs text-gray-400 mt-1">
            Reg. No: {doctor.registration}
          </p>
        </div>

        {/* Experience + University */}
        <div className="flex flex-wrap gap-3">
          <div className="flex items-center gap-2 bg-blue-50 rounded-xl px-4 py-2">
            <svg className="w-5 h-5 text-primary-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-sm font-semibold text-neutral-dark">
              {doctor.experienceYears}+ Years Experience
            </span>
          </div>
          <div className="flex items-center gap-2 bg-blue-50 rounded-xl px-4 py-2">
            <svg className="w-5 h-5 text-primary-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
            <span className="text-sm text-neutral-dark">{doctor.university}</span>
          </div>
        </div>

        {/* Languages */}
        <div>
          <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">
            Languages Spoken
          </h3>
          <div className="flex flex-wrap gap-2">
            {doctor.languages.map((lang) => (
              <span
                key={lang}
                className="px-3 py-1 text-sm font-medium bg-primary-mint text-primary-blue rounded-full"
              >
                {lang}
              </span>
            ))}
          </div>
        </div>

        {/* Special interests */}
        <div>
          <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">
            Special Interests
          </h3>
          <ul className="space-y-1.5">
            {doctor.specialInterests.map((interest) => (
              <BulletItem key={interest} text={interest} />
            ))}
          </ul>
        </div>

        {/* CTA */}
        <a
          href={waLink}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary inline-flex items-center gap-2 mt-2"
          aria-label={`Book appointment with ${doctor.name} on WhatsApp`}
        >
          {/* WhatsApp icon */}
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          Book Appointment with Dr. {doctor.name.split(" ").pop()}
        </a>
      </div>
    </section>
  );
}
