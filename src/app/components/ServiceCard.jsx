import Link from "next/link";

function ArrowRightIcon() {
  return (
    <svg
      className="w-4 h-4 transition-transform duration-200 group-hover/btn:translate-x-1"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 5l7 7-7 7"
      />
    </svg>
  );
}

/**
 * ServiceCard — service grid card with SVG icon box, title, description, Learn More link.
 *
 * @param {string} props.title       - Service name
 * @param {string} props.description - Short description
 * @param {string} props.svgSrc      - Path to service SVG image
 * @param {string} [props.href]      - Link target (default: /services)
 */
export default function ServiceCard({
  title,
  description,
  svgSrc,
  href = "/services",
}) {
  return (
    <article className="group flex flex-col bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 border border-gray-100 p-6">
      {/* ── Icon box ─────────────────────────────────────────────────── */}
      <div className="w-20 h-20 rounded-3xl bg-gray-100 flex items-center justify-center mb-6 flex-shrink-0 group-hover:bg-blue-50 transition-colors duration-300">
        {svgSrc ? (
          <img
            src={svgSrc}
            alt={`${title} icon`}
            className="w-16 h-16 object-contain rounded-2xl"
          />
        ) : (
          <div className="w-16 h-16 rounded-2xl bg-primary-blue/20" />
        )}
      </div>

      {/* ── Title ────────────────────────────────────────────────────── */}
      <h3 className="text-base font-bold text-neutral-dark mb-2 leading-snug">
        {title}
      </h3>

      {/* ── Description ──────────────────────────────────────────────── */}
      <p className="text-sm text-gray-500 leading-relaxed line-clamp-3 flex-1 mb-5">
        {description}
      </p>

      {/* ── Learn More link ───────────────────────────────────────────── */}
      <div className="mt-auto">
        <Link
          href={href}
          className="group/btn inline-flex items-center gap-1.5 text-sm font-semibold text-primary-blue hover:text-primary-teal transition-colors duration-200"
          aria-label={`Learn more about ${title}`}
        >
          Learn More
          <ArrowRightIcon />
        </Link>
      </div>
    </article>
  );
}
