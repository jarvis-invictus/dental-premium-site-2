# Dental Clinic Website — Client Onboarding Guide

> **For:** Invictus AI — internal use when onboarding a new dental clinic client
> **Delivery time:** 3–5 working days after all assets + form received
> **Dev time:** ~2–3 hours of code changes per client

---

## Overview

This template is a production-ready Next.js 14 dental clinic website. All client-specific content lives in **two files**:

- `src/app/lib/clinicConfig.js` — name, contact, doctor, hours, social, SEO
- `src/app/lib/serviceData.js` — every service with price, steps, FAQs

Everything else (images, logo, OG image) goes in `/public/images/`.

---

## Phase 1 — First WhatsApp Message (New Lead)

Send this the moment a new lead reaches out:

```
Hi [Name]! 👋

We build premium dental clinic websites — fully mobile-optimised,
with WhatsApp booking, Google SEO, and AI search visibility built in.

The process is simple:
✅ 15-min call → fill a quick form → share photos & logo → site live in 3–5 days.

Would you like to hop on a quick call to see a demo and discuss?
```

---

## Phase 2 — Discovery Call (15 Minutes)

Use this as a loose script. Cover these points:

1. What is the clinic's name and where is it located?
2. Who is the main doctor? What is their specialisation?
3. Which treatments do you want to highlight most?
4. Do you have an existing website, or is this the first one?
5. Do you have a logo ready? Any brand colours?
6. What is your timeline — when do you need the site live?
7. Are you comfortable with prices being shown on the website?

**Goal:** Qualify the client, align on scope, confirm they are moving forward.

---

## Phase 3 — Google Form (Send After Call)

**WhatsApp message to send:**

```
Great speaking with you! 🙏

Here's a quick form with all the details we need to build your site.
Takes about 10–15 minutes to fill.

Once we receive the form + your photos/logo, we can start immediately:
👉 [INSERT GOOGLE FORM LINK]

Feel free to WhatsApp me if you get stuck on any question!
```

---

### Google Form — All Questions (Copy-Paste Ready)

Create a new Google Form at forms.google.com and add these questions:

---

#### Section 1: Clinic Basics

1. Full clinic name *(Short answer — Required)*
2. Clinic tagline or motto *(Short answer — Optional, e.g. "Gentle, Painless Care You Can Trust")*
3. Year clinic was established *(Short answer — Required, e.g. 2005)*
4. Full street address with PIN code *(Paragraph — Required)*
5. City and locality for SEO *(Short answer — Required, e.g. "Koregaon Park, Pune")*

---

#### Section 2: Contact Details

6. Primary phone number *(Short answer — Required, with +91)*
7. WhatsApp number *(Short answer — same as phone or different?)*
8. Email address *(Short answer — Required, e.g. hello@yourclinic.com)*
9. Google Maps link *(Short answer — Required. Tip: open Google Maps, search your clinic, copy the browser URL)*
10. Practo profile URL *(Short answer — Optional)*
11. Any other listing URLs such as JustDial or Sulekha *(Paragraph — Optional)*

---

#### Section 3: Opening Hours

12. Monday to Saturday hours *(Short answer — Required, e.g. 9:00 AM – 8:00 PM)*
13. Sunday hours *(Short answer — Required, or write "Closed")*
14. Weekly off day, if any *(Short answer — Optional)*

---

#### Section 4: Doctor Profile

15. Doctor's full name *(Short answer — Required)*
16. Qualifications *(Short answer — Required, e.g. BDS, MDS — Conservative Dentistry & Endodontics)*
17. State Dental Council registration number *(Short answer — Required, e.g. MH-DEN-12345)*
18. Total years of experience *(Short answer — Required)*
19. University or college graduated from *(Short answer — Required)*
20. IDA membership number *(Short answer — Optional)*
21. Languages spoken *(Checkboxes — English / Hindi / Marathi / Other)*
22. Special interests or areas of expertise *(Checkboxes — Root Canal / Implants / Smile Design / Orthodontics / Kids Dentistry / Full Mouth Rehab / Other)*

---

#### Section 5: Services & Pricing

*Note at top of section: "Tick the services you offer and fill the starting price. Leave blank if you do not offer that service."*

23. General Check-up & Cleaning — Offered? Starting price (Rs)?
24. Root Canal Treatment — Offered? Price per tooth (Rs)?
25. Dental Implants — Offered? Price per implant including crown (Rs)?
26. Teeth Whitening — Offered? Price per session (Rs)?
27. Orthodontics / Metal Braces — Offered? Starting price (Rs)?
28. Clear Aligners / Invisalign — Offered? Starting price (Rs)?
29. Smile Designing / Veneers — Offered? Starting price (Rs)?
30. Pediatric / Kids Dentistry — Offered? Price per visit (Rs)?
31. Wisdom Tooth Extraction — Offered? Starting price (Rs)?
32. Gum Treatment / Scaling — Offered? Price per session (Rs)?
33. Emergency Dental Care — Offered? Consultation fee (Rs)?
34. Any additional services not listed above? *(Paragraph — Optional)*
35. Do you offer 0% EMI? *(Multiple choice — Yes 3/6/9/12 months / Yes some durations / No)*
36. Do you accept dental insurance? *(Multiple choice — Yes / No / Some plans only)*

---

#### Section 6: Reputation & Stats

37. Your Google rating *(Short answer — check your Google Maps listing, e.g. 4.8)*
38. Approximate number of patients treated *(Short answer — e.g. "5,000+" or "2,000+")*
39. Any awards or recognitions? *(Paragraph — Optional, e.g. IDA award, press feature)*

---

#### Section 7: Social Media

40. Instagram page URL *(Short answer — or write "Don't have one")*
41. Facebook page URL *(Short answer — or write "Don't have one")*
42. YouTube channel URL *(Short answer — Optional)*

---

#### Section 8: Domain & SEO

43. Preferred domain name *(Short answer — e.g. drsmithdental.com — we will check availability)*
44. Top 3 treatments you want to rank for on Google *(Paragraph — e.g. "best implant dentist in Pune")*
45. Do you already have Google Analytics? *(Multiple choice — Yes I will share the ID / No please set it up)*
46. Do you have Google Search Console access? *(Multiple choice — Yes / No / Don't know)*

---

#### Section 9: Technical Preferences

47. How should appointment bookings be handled? *(Multiple choice — WhatsApp only / WhatsApp + contact form / Form logged to Google Sheets)*
48. Do you have a Google Maps API key? *(Multiple choice — Yes I will share it / No please guide me / Skip map for now)*
49. Any specific features or pages you want added? *(Paragraph — Optional)*
50. Anything else we should know? *(Paragraph — Optional)*

---

## Phase 4 — Asset Collection

Send this on WhatsApp after the form is submitted:

```
Thank you for filling the form! 🎉

We just need your files to get started. Please send them here on
WhatsApp or share a Google Drive / WeTransfer link:

1. Clinic LOGO — PNG preferred, transparent background if possible
   (JPG is fine too if that is all you have)

2. DOCTOR'S PHOTO — clear face, clinic or neutral background
   (Regular phone photo is fine)

3. 6 CLINIC PHOTOS (phone camera is fine):
   - Reception / waiting area
   - Treatment chair room
   - Sterilisation unit
   - X-ray / digital imaging area
   - Waiting lounge / corridor
   - Any other area (kids corner, smile wall, entrance)

4. PATIENT PHOTOS (optional) — before/after smiles with patient consent
   (We can use stock photos if you do not have these)

That is it! Once we have these, we will start building immediately. 🚀
```

---

## Phase 5 — Making the Changes (Developer Checklist)

Work through this in order after receiving the form and assets.

### A. src/app/lib/clinicConfig.js

| Form Q | Field to update |
|--------|----------------|
| Q1 | `name` |
| Q2 | `tagline` |
| Q6 | `phone` |
| Q7 | `whatsapp` |
| Q8 | `email` |
| Q4 | `address` |
| Q9 | `googleMapsUrl` |
| Q10 | `practoUrl` |
| Q12, Q13 | `hours` array |
| Q15 | `doctor.name` |
| Q16 | `doctor.qualifications` |
| Q17 | `doctor.registration` |
| Q18 | `doctor.experienceYears` + top-level `experienceYears` |
| Q19 | `doctor.university` |
| Q20 | `doctor.idaMembershipNo` |
| Q21 | `doctor.languages` |
| Q22 | `doctor.specialInterests` |
| Q37 | `googleRating` |
| Q38 | `happyPatients` |
| Q40 | `social.instagram` |
| Q41 | `social.facebook` |
| Q1 + Q5 | `seo.title`, `seo.description`, `seo.keywords` |

### B. src/app/lib/serviceData.js

| Form Answer | Action |
|-------------|--------|
| Q23–Q33 price answers | Update `price` field for that service `id` |
| Service NOT offered | Remove or comment out that service object |
| Additional service from Q34 | Add new object copying the existing pattern with a new `id` |

### C. /public/images/

| Asset received | Save as |
|----------------|---------|
| Logo | `/public/images/logo.png` |
| Doctor photo | `/public/images/team/dr-[firstname].webp` — update `doctor.photo` in clinicConfig |
| Reception photo | `/public/images/gallery/reception.jpg` |
| Treatment room | `/public/images/gallery/treatment-room.jpg` |
| Sterilisation | `/public/images/gallery/sterilisation.jpg` |
| X-ray suite | `/public/images/gallery/dental-xray.jpg` |
| Waiting lounge | `/public/images/gallery/waiting-lounge.jpg` |
| 6th clinic photo | `/public/images/gallery/smile-wall.jpg` |
| Social share image | `/public/images/og-default.jpg` (1200x630px) |

### D. public/llms.txt and public/sitemap.xml

- Replace all `smilecare.in` URLs with the client's real domain
- Update clinic name, doctor name, address, phone, email throughout

### E. src/app/robots.js

- Update the `Sitemap:` URL to the client's real domain

### F. Vercel Environment Variables

Set these in Vercel Dashboard → Project → Settings → Environment Variables:

| Variable | Value |
|----------|-------|
| `NEXT_PUBLIC_SITE_URL` | `https://clientdomain.com` |
| `NEXT_PUBLIC_CLINIC_PHONE` | Client phone with +91 |
| `NEXT_PUBLIC_CLINIC_WHATSAPP` | Client WhatsApp with +91 |
| `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY` | From Q48 |
| `NEXT_PUBLIC_GA_ID` | From Q45 if they have one |

---

## Phase 6 — Review and Go-Live

### Send Preview Link

```
Hi [Name]! Your website is ready for review! 🎉

Preview link: [VERCEL PREVIEW LINK]

Please check on both your phone and laptop.
Send ALL feedback in one WhatsApp message within 48 hours
and we will make everything in one go.

Things to verify:
- Doctor name, qualifications, registration number
- All service prices
- Phone number and address
- Opening hours
- Photos look correct
- WhatsApp booking button works
```

### After Client Approval

```
Approved! Let us go live. 🚀

To point your domain to the site, we need:
Option A — Share your domain panel login (GoDaddy / BigRock / Namecheap)
Option B — Share a screenshot of your DNS settings panel and we will guide you step by step.

Takes 5–10 minutes. Site live within 24 hours.
```

### Post Go-Live (Same Day)

Send the client these 3 links to action themselves:

1. **Google Business Profile** — business.google.com — add website URL and verify listing
2. **Google Search Console** — search.google.com/search-console — add property and submit sitemap URL
3. **Bing Webmaster Tools** — bing.com/webmasters — submit sitemap for ChatGPT and Copilot indexing

---

## Pre-Launch Checklist

Tick every item before sharing the preview link:

- [ ] Clinic name correct in header, footer, schema, llms.txt, sitemap
- [ ] Doctor name, qualifications, registration number correct
- [ ] All service prices updated
- [ ] Phone number is clickable and correct
- [ ] WhatsApp button opens the correct number
- [ ] Address correct on contact page and map
- [ ] Opening hours correct
- [ ] All 6 clinic photos loading
- [ ] Doctor photo loading
- [ ] Logo visible in header and footer
- [ ] OG image set for social share preview (og-default.jpg exists)
- [ ] `NEXT_PUBLIC_SITE_URL` set to real domain in Vercel
- [ ] robots.txt sitemap URL points to real domain
- [ ] llms.txt has correct clinic details and real domain URLs
- [ ] sitemap.xml has correct domain
- [ ] No "SmileCare" placeholder text remaining anywhere
- [ ] Mobile layout correct on phone
- [ ] Privacy Policy, Terms, Disclaimer pages load correctly

---

## Appendix A — WhatsApp Message Templates

### T1 — New Lead (First Contact)
```
Hi [Name]! 👋
We build premium dental clinic websites — mobile-optimised, with WhatsApp booking, Google SEO, and AI search visibility.
Process: 15-min call → fill form → share photos/logo → live in 3–5 days.
Want to hop on a quick call to see a demo?
```

### T2 — After Discovery Call (Send Form)
```
Great speaking with you! 🙏
Here is the form with all details we need:
👉 [FORM LINK]
Takes 10–15 mins. We start immediately once we have the form + photos!
```

### T3 — Asset Request (After Form Submitted)
```
Thank you for the form! 🎉 Just need your files now:
1. Clinic logo (PNG preferred)
2. Doctor photo (clear face)
3. 6 clinic photos (reception, treatment room, sterilisation, x-ray area, waiting lounge, one more)
4. Patient before/after photos (optional)
WhatsApp quality is fine, or share a Google Drive link. 🙏
```

### T4 — Preview Ready
```
Your site is ready for review! 🎉
Preview: [VERCEL LINK]
Check on phone + laptop. Send all feedback in one message within 48 hours.
```

### T5 — Approved, Going Live
```
Approved! ✅ Let us go live.
Share your domain login or a screenshot of your DNS panel.
Live within 24 hours. 🚀
```

### T6 — Site Live
```
🎉 Your website is LIVE!
👉 [CLIENT DOMAIN]

Next steps:
1. Update your Google Business Profile with the new website URL
2. Share the link on your Instagram and Facebook
3. Google SEO is set up — results come in 4–8 weeks.

Congratulations! 🦷✨
```

---

## Appendix B — Common Issues and Fixes

| Issue | Fix |
|-------|-----|
| Client sends logo as JPG with white background | Use as-is or ask for PNG with transparent background |
| Client does not know their Google Maps link | Ask: open maps.google.com → search clinic name → copy browser URL |
| Client wants to hide prices | Set `price: null` in serviceData.js — the component hides price automatically |
| Client has no social media | Set `social.instagram` and `social.facebook` to `""` — links will not appear in footer |
| Client wants a service not in the template | Copy any service object in serviceData.js, give it a new `id`, fill in all fields |
| Client uses different EMI durations | Update the FAQ answer in `src/app/page.js` → `faqs` array |
| Domain not live after pointing | Normal — DNS propagation takes up to 48 hours, reassure client |
| Client wants different brand colours | Update colour values in `tailwind.config.js` → `colors` → `primary-blue`, `primary-teal` |

---

*Document maintained by Invictus AI. Update after each client onboarding to improve the process.*
