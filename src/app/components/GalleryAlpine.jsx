"use client";

/**
 * GalleryAlpine — renders the interactive gallery section via dangerouslySetInnerHTML
 * so Alpine.js x-bind: / x-on: attribute names (which contain colons) are not
 * rejected by the SWC/JSX parser.
 */
export default function GalleryAlpine({ cases, categories }) {
  const casesJson = JSON.stringify(cases).replace(/</g, "\\u003c");

  const html = `
<div
  x-data="galleryApp(${casesJson})"
  x-init="init()"
  id="gallery-inner"
>
  <!-- Category tabs -->
  <div class="flex flex-wrap gap-2 justify-center mb-10" role="tablist" aria-label="Filter gallery by procedure">
    ${categories
      .map(
        (cat) => `<button
      type="button"
      role="tab"
      x-on:click="activeCategory = '${cat}'"
      x-bind:aria-selected="activeCategory === '${cat}'"
      x-bind:class="activeCategory === '${cat}' ? 'bg-primary-blue text-white border-primary-blue' : 'bg-white text-gray-600 border-gray-200 hover:border-primary-blue hover:text-primary-blue'"
      class="px-4 py-2 text-sm font-medium rounded-full border transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-blue"
    >${cat}</button>`
      )
      .join("\n")}
  </div>

  <!-- Grid -->
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    <template x-for="c in filteredCases" :key="c.id">
      <article
        class="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer"
        x-on:click="openLightbox(c)"
      >
        <div class="grid grid-cols-2">
          <div class="relative aspect-square bg-gray-100">
            <img :src="c.before" :alt="c.procedure" class="w-full h-full object-cover" loading="lazy" />
            <span class="absolute top-2 left-2 text-[10px] font-bold bg-red-500 text-white px-1.5 py-0.5 rounded">BEFORE</span>
          </div>
          <div class="relative aspect-square bg-gray-100">
            <img :src="c.after" :alt="c.procedure" class="w-full h-full object-cover" loading="lazy" />
            <span class="absolute top-2 left-2 text-[10px] font-bold bg-green-500 text-white px-1.5 py-0.5 rounded">AFTER</span>
          </div>
        </div>
        <div class="p-4">
          <div class="flex items-center justify-between mb-2">
            <span class="text-xs font-semibold text-primary-blue bg-blue-50 px-2 py-0.5 rounded-full" x-text="c.category"></span>
            <span class="text-xs text-gray-400" x-text="ageGender(c)"></span>
          </div>
          <p class="text-sm font-semibold text-neutral-dark" x-text="c.procedure"></p>
          <p class="text-xs text-gray-400 mt-0.5" x-text="'Duration: ' + c.duration"></p>
          <p class="text-xs text-gray-500 italic mt-2 line-clamp-2" x-text="quoted(c.quote)"></p>
        </div>
      </article>
    </template>
  </div>

  <!-- Empty state -->
  <div x-show="filteredCases.length === 0" class="text-center py-16 text-gray-400">
    <p class="text-lg">No cases found for this category.</p>
  </div>

  <!-- Lightbox -->
  <div
    x-show="lightbox"
    x-transition:enter="transition ease-out duration-200"
    x-transition:enter-start="opacity-0"
    x-transition:enter-end="opacity-100"
    x-transition:leave="transition ease-in duration-150"
    x-transition:leave-start="opacity-100"
    x-transition:leave-end="opacity-0"
    class="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
    x-on:click.self="lightbox = null"
    role="dialog"
    aria-modal="true"
  >
    <div class="bg-white rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl">
      <div class="flex items-center justify-between px-5 pt-4 pb-2">
        <h3 class="font-bold text-neutral-dark text-sm" x-text="lightbox ? lightbox.procedure : ''"></h3>
        <button
          type="button"
          x-on:click="lightbox = null"
          class="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
          aria-label="Close lightbox"
        >
          <svg class="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <div class="grid grid-cols-2">
        <div class="relative aspect-square bg-gray-100">
          <img :src="lightbox ? lightbox.before : ''" :alt="lightbox ? lightbox.procedure : ''" class="w-full h-full object-cover" />
          <span class="absolute top-2 left-2 text-xs font-bold bg-red-500 text-white px-2 py-0.5 rounded">BEFORE</span>
        </div>
        <div class="relative aspect-square bg-gray-100">
          <img :src="lightbox ? lightbox.after : ''" :alt="lightbox ? lightbox.procedure : ''" class="w-full h-full object-cover" />
          <span class="absolute top-2 left-2 text-xs font-bold bg-green-500 text-white px-2 py-0.5 rounded">AFTER</span>
        </div>
      </div>
      <div class="p-5 space-y-2">
        <div class="flex flex-wrap gap-2 text-xs">
          <span class="px-2 py-0.5 bg-blue-50 text-primary-blue rounded-full font-semibold" x-text="lightbox ? lightbox.category : ''"></span>
          <span class="px-2 py-0.5 bg-gray-50 text-gray-600 rounded-full" x-text="lightbox ? ageGender(lightbox) : ''"></span>
          <span class="px-2 py-0.5 bg-gray-50 text-gray-600 rounded-full" x-text="lightbox ? ('Duration: ' + lightbox.duration) : ''"></span>
        </div>
        <p class="text-gray-600 italic text-sm" x-text="lightbox ? quoted(lightbox.quote) : ''"></p>
        <p class="text-[10px] text-gray-400">Patient identity protected. Image used with written consent.</p>
      </div>
    </div>
  </div>
</div>

<script>
  function ageGender(c) { return c.age + ' yrs \u00b7 ' + c.gender; }
  function quoted(q) { return '\u201c' + q + '\u201d'; }
  function galleryApp(cases) {
    return {
      cases,
      activeCategory: 'All',
      lightbox: null,
      get filteredCases() {
        if (this.activeCategory === 'All') return this.cases;
        return this.cases.filter(c => c.category === this.activeCategory);
      },
      openLightbox(c) { this.lightbox = c; },
      init() {
        window.addEventListener('keydown', (e) => {
          if (e.key === 'Escape') this.lightbox = null;
        });
      }
    };
  }
</script>
  `;

  return (
    <div
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
