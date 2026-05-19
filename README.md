# SmileCare Dental Clinic — Next.js Template

A modern, fully responsive dental clinic website template built with:

- **Next.js 14** (App Router)
- **React 18**
- **Tailwind CSS v3.4**
- **Alpine.js v3** (loaded via CDN — zero npm bundle cost)

---

## Project Structure

```
dental-clinic-template/
├── src/
│   ├── app/
│   │   ├── components/         # Reusable UI components
│   │   ├── lib/
│   │   │   ├── clinicConfig.js # ← Single source of truth for all clinic data
│   │   │   ├── data.js         # Static content arrays (services, team, etc.)
│   │   │   └── utils.js        # Helper functions (cn, truncate, formatPhone)
│   │   ├── layout.js           # Root layout — Fonts, Alpine.js CDN, WhatsApp FAB
│   │   ├── page.js             # Home page
│   │   ├── services/page.js    # Services page
│   │   ├── about/page.js       # About page
│   │   ├── contact/page.js     # Contact page
│   │   └── gallery/page.js     # Gallery page
│   └── styles/
│       └── globals.css         # Tailwind base + component + utility classes
├── public/
│   ├── images/                 # Drop your images here
│   └── icons/                  # SVG icons
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── jsconfig.json
├── next.config.js
└── env.local.example           # Copy → .env.local and fill values
```

---

## 1. Setup

### Prerequisites
- Node.js ≥ 18
- npm ≥ 9

### Install & Run

```bash
# 1. Clone / download the template
git clone <repo-url> dental-clinic-template
cd dental-clinic-template

# 2. Install dependencies
npm install

# 3. Configure environment
cp env.local.example .env.local
# → Edit .env.local with your real values (see section 3 below)

# 4. Start dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## 2. How to Customize

### Clinic Name, Phone & WhatsApp
All clinic-specific strings live in **one file**:

```
src/app/lib/clinicConfig.js
```

Edit the values there — they propagate automatically to the Header, Hero,
Footer, layout metadata, WhatsApp FAB link, and contact page.

Key fields:

| Field | Purpose |
|---|---|
| `name` | Clinic name shown in logo, title tags |
| `phone` | Click-to-call number |
| `whatsapp` | WhatsApp FAB + booking link (digits only used internally) |
| `experienceYears` | Shown in Hero subtitle and About stats |
| `googleRating` | Shown in Hero trust bar |
| `seo.title/description` | Open Graph & `<title>` tag |
| `nav` | Navigation link labels and hrefs |

### Colors & Fonts
Edit `tailwind.config.js` → `theme.extend`:

```js
colors: {
  primary: {
    blue:  '#0077B6',   // main brand color
    teal:  '#48BFE3',   // hover / gradient end
    mint:  '#90E0EF',   // badge backgrounds
  },
  neutral: { dark: '#1D3557' },
  success: '#2A9D8F',
  warning: '#F4A261',
  danger:  '#E63946',
},
fontFamily: {
  heading: ['Poppins', ...],  // h1–h6
  body:    ['Inter',   ...],  // body text
  hindi:   ['Hind',    ...],  // Hindi/regional text
},
```

### Images
Drop files into `public/images/` (e.g. `hero-bg.jpg`, `team/dr-sarah.jpg`)
and update the `src` paths in `src/app/lib/data.js`.

Use Next.js `<Image>` for automatic optimisation:

```jsx
import Image from "next/image";
<Image src="/images/hero-bg.jpg" alt="Clinic hero" fill className="object-cover" />
```

### WhatsApp Widget
The floating WhatsApp button is rendered in `src/app/layout.js`.
- The `href` is built automatically from `clinicConfig.whatsapp`.
- To customise the pre-filled message, edit the `text=` query param in `waLink`.
- To replace it with a full chat widget (e.g. Tidio, Crisp), swap the `<a>` tag.

---

## 3. Environment Variables

Copy `env.local.example` → `.env.local`:

```bash
cp env.local.example .env.local
```

| Variable | Required | Description |
|---|---|---|
| `NEXT_PUBLIC_CLINIC_PHONE` | Yes | Click-to-call phone number |
| `NEXT_PUBLIC_CLINIC_WHATSAPP` | Yes | WhatsApp number (with country code) |
| `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY` | Optional | Embed key for Google Maps on Contact page |
| `NEXT_PUBLIC_SITE_URL` | Optional | Canonical domain for Open Graph |
| `NEXT_PUBLIC_CONTACT_ENDPOINT` | Optional | API endpoint for contact form submission |

> **Never commit `.env.local` to version control.**

---

## 4. Pages

| Route | Description |
|---|---|
| `/` | Hero, featured services, testimonials, CTA |
| `/services` | Full services grid |
| `/about` | Clinic story, stats, team |
| `/contact` | Contact form + info + map |
| `/gallery` | Filterable photo gallery |

---

## 5. Deployment

### Vercel (recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Set env vars in the Vercel dashboard:
# Project → Settings → Environment Variables
# Add: NEXT_PUBLIC_CLINIC_PHONE, NEXT_PUBLIC_CLINIC_WHATSAPP,
#      NEXT_PUBLIC_GOOGLE_MAPS_API_KEY, NEXT_PUBLIC_SITE_URL
```

Or connect your GitHub repo at [vercel.com/new](https://vercel.com/new) —
Vercel auto-detects Next.js and deploys on every push to `main`.

### Netlify

```bash
# Install Netlify CLI
npm i -g netlify-cli

# Build & deploy
npm run build
netlify deploy --dir=.next --prod
```

Or connect via Netlify dashboard:
1. **New site → Import from Git**
2. Build command: `npm run build`
3. Publish directory: `.next`
4. Add environment variables under **Site settings → Environment variables**

> **Note:** For Netlify, install the `@netlify/plugin-nextjs` plugin for full
> App Router support:
> ```bash
> npm install -D @netlify/plugin-nextjs
> ```
> and add to `netlify.toml`:
> ```toml
> [[plugins]]
> package = "@netlify/plugin-nextjs"
> ```

---

## 6. Local Build Check

```bash
npm run build   # must complete with 0 errors
npm run start   # production server on http://localhost:3000
```
