"use client";
import React, { useState } from 'react';

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

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <div className="space-y-2">
        {faqs.map(({ question, answer }, idx) => (
          <FAQItem key={idx} question={question} answer={answer} initialOpen={idx === 0} idx={idx} />
        ))}
      </div>
    </>
  );
}

function FAQItem({ question, answer, initialOpen, idx }) {
  const [open, setOpen] = useState(initialOpen);
  const panelId = `faq-panel-${idx}`;
  const btnId = `faq-btn-${idx}`;

  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden bg-white">
      <button
        id={btnId}
        type="button"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-controls={panelId}
        className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left hover:bg-gray-50 transition-colors duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-blue focus-visible:ring-inset"
      >
        <span
          className={`text-sm sm:text-base font-semibold text-neutral-dark ${open ? 'text-primary-blue' : ''}`}
        >
          {question}
        </span>
        <span
          className={`flex-shrink-0 w-5 h-5 text-gray-400 transition-transform duration-300 ${open ? 'rotate-180 text-primary-blue' : ''}`}
          aria-hidden="true"
        >
          <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 8l5 5 5-5" />
          </svg>
        </span>
      </button>
      <div
        id={panelId}
        role="region"
        aria-labelledby={btnId}
        className={`grid transition-all duration-300 ease-in-out ${open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
      >
        <div className="overflow-hidden">
          <div className="px-5 pb-5 pt-1 bg-white border-t border-gray-100">
            <p className="text-sm text-gray-600 leading-relaxed">{answer}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
