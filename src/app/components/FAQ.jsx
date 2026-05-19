/**
 * FAQ — Alpine.js accordion with JSON-LD schema markup.
 * All Alpine attributes (x-data, x-on:click, x-bind:*) are rendered
 * via dangerouslySetInnerHTML to avoid SWC JSX namespace rejection.
 *
 * @param {{ question: string; answer: string }[]} props.faqs
 */
export default function FAQ({ faqs = [] }) {
  if (!faqs.length) return null;

  /* JSON-LD schema for Google rich results */
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(({ question, answer }) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: { "@type": "Answer", text: answer },
    })),
  };

  const itemsHtml = faqs
    .map(({ question, answer }, idx) => {
      const panelId = `faq-panel-${idx}`;
      const btnId = `faq-btn-${idx}`;
      const initialOpen = idx === 0;
      const safeQ = question.replace(/"/g, "&quot;").replace(/</g, "&lt;");
      const safeA = answer.replace(/</g, "&lt;");

      return `<div
  x-data="{ open: ${initialOpen} }"
  class="border border-gray-200 rounded-xl overflow-hidden"
>
  <button
    id="${btnId}"
    type="button"
    x-on:click="open = !open"
    x-bind:aria-expanded="open.toString()"
    aria-controls="${panelId}"
    class="w-full flex items-center justify-between gap-4 px-5 py-4 text-left bg-white hover:bg-gray-50 transition-colors duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-blue focus-visible:ring-inset"
  >
    <span
      class="text-sm sm:text-base font-semibold text-neutral-dark"
      x-bind:class="open ? 'text-primary-blue' : ''"
    >${safeQ}</span>
    <span
      class="flex-shrink-0 w-5 h-5 text-gray-400 transition-transform duration-300"
      x-bind:class="open ? 'rotate-180 text-primary-blue' : ''"
      aria-hidden="true"
    >
      <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M5 8l5 5 5-5" />
      </svg>
    </span>
  </button>
  <div
    id="${panelId}"
    role="region"
    aria-labelledby="${btnId}"
    x-show="open"
    x-transition
    class="overflow-hidden"
  >
    <div class="px-5 pb-5 pt-1 bg-white border-t border-gray-100">
      <p class="text-sm text-gray-600 leading-relaxed">${safeA}</p>
    </div>
  </div>
</div>`;
    })
    .join("\n");

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <div
        className="space-y-2"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: itemsHtml }}
      />
    </>
  );
}
