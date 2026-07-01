export const clinicConfig = {
  name: "SmileCare Dental Clinic",
  tagline: "Gentle, Painless Dental Care You Can Trust",
  established: 2004,

  // Top-level city — set this when customising for a new client
  city: "Pune",

  seo: {
    get description() { return `Professional dental care for the whole family in ${clinicConfig.city}. Book your appointment in 30 seconds.`; },
    get keywords() { return ["dental clinic", `dentist ${clinicConfig.city}`, "teeth whitening", "dental implants", "orthodontics", "painless dentistry"]; },
  },

  contact: {
    phone_primary: "+91 96995 77641",
    phone_whatsapp: "+91 96995 77641",
    email: "hello@smilecare.in",
    address_full: "123 FC Road, Shivajinagar, Pune, Maharashtra 411005",
    google_maps_url: "https://maps.google.com/?q=SmileCare+Dental+Clinic+Pune+Maharashtra",
    google_maps_embed: ""
  },

  social: {
    whatsapp_link: "https://wa.me/919699577641",
    instagram: "https://instagram.com/smilecaredental",
    facebook: "https://facebook.com/smilecaredental",
    youtube: ""
  },

  theme: {
    primary_color: "#000000",
    accent_color: "#000000",
    feel: "modern"
  },

  hours: [
    { day: "Monday \u2013 Saturday", open: true, from: "09:00", to: "20:00" },
    { day: "Sunday", open: true, from: "10:00", to: "14:00" }
  ],

  doctors: [
    {
      name: "Dr. Priya Patel",
      qualifications: "BDS, MDS (Conservative Dentistry & Endodontics)",
      experience_years: 20,
      specializations: [
        "Painless Root Canal Treatment",
        "Smile Designing & Veneers",
        "Full Mouth Rehabilitation",
        "Pediatric Dentistry",
      ],
      languages: ["English", "Hindi", "Marathi"],
      bio: "Dr. Priya Patel is a highly experienced endodontist with 20 years of experience. She holds a BDS and MDS in Conservative Dentistry & Endodontics from Maharashtra University of Health Sciences, Nashik.",
      photo: "/images/team/dr-priya.webp",
      ida_number: "IDA-MH-34521"
    }
  ],

  services: [
    {
      id: "general-dentistry",
      name: "General Dentistry",
      description: "Comprehensive exams, cleanings, fillings, and preventive care to keep your teeth healthy.",
      price_from: 0,
      show_price: false,
      duration: "1 hour",
      icon: "tooth",
      imageSrc: "/images/services/General Dentistry.svg"
    },
    {
      id: "dental-implants",
      name: "Dental Implants",
      description: "Permanent, natural-looking tooth replacements that restore function and aesthetics.",
      price_from: 0,
      show_price: false,
      duration: "1 hour",
      icon: "implant",
      imageSrc: "/images/services/Dental Implants.svg"
    },
    {
      id: "pediatric-dentistry",
      name: "Pediatric Dentistry",
      description: "Gentle, kid-friendly dental care in a fun and comforting environment.",
      price_from: 0,
      show_price: false,
      duration: "1 hour",
      icon: "child",
      imageSrc: "/images/services/Pediatric Dentistry.svg"
    },
    {
      id: "orthodontics",
      name: "Orthodontics",
      description: "Traditional braces and clear aligners to straighten teeth and correct bite issues.",
      price_from: 0,
      show_price: false,
      duration: "1 hour",
      icon: "alignments",
      imageSrc: "/images/services/Orthodontics.svg"
    },
    {
      id: "cosmetic-dentistry",
      name: "Cosmetic Dentistry",
      description: "Teeth whitening, veneers, bonding, and smile makeovers for a confident, radiant smile.",
      price_from: 0,
      show_price: false,
      duration: "1 hour",
      icon: "sparkles",
      imageSrc: "/images/services/Cosmetic Dentistry.svg"
    },
    {
      id: "emergency-dental-care",
      name: "Emergency Care",
      description: "Prompt care for dental emergencies including toothaches, broken teeth, and trauma.",
      price_from: 0,
      show_price: false,
      duration: "1 hour",
      icon: "emergency",
      imageSrc: "/images/services/Emergency Care.svg"
    }
  ],

  whyUs: [
    {
      title: "Painless Technology",
      desc: "Digital X-rays, rotary endodontics, and laser dentistry for completely painless procedures.",
      iconType: "tech"
    },
    {
      title: "20+ Years of Trust",
      desc: "Serving 10,000+ happy patients in Pune with compassionate care since 2005.",
      iconType: "trust"
    },
    {
      title: "0% EMI Available",
      desc: "Flexible payment plans so cost is never a barrier to your dental health.",
      iconType: "finance"
    }
  ],

  clinicTour: [
    { label: "Reception Area", src: "/images/gallery/reception.jpg" },
    { label: "Treatment Room", src: "/images/gallery/treatment-room.jpg" },
    { label: "Sterilisation Unit", src: "/images/gallery/sterilisation.jpg" },
    { label: "Digital X-Ray Suite", src: "/images/gallery/dental-xray.jpg" },
    { label: "Waiting Lounge", src: "/images/gallery/waiting-lounge.jpg" },
    { label: "Smile Wall", src: "/images/gallery/smile-wall.jpg", position: "15% center" },
  ],

  faqs: [
    { question: "Is root canal treatment painful?", answer: "Modern root canal treatment is virtually painless. We use advanced rotary instruments, apex locators, and local anaesthesia to ensure you feel nothing during the procedure." },
    { question: "How long does a dental implant procedure take?", answer: "The implant placement takes about 30–45 minutes. The final crown is fitted 3–6 months later once the implant integrates with the jawbone. Some cases qualify for same-day crowns." },
    { question: "Do you offer 0% EMI on treatments?", answer: "Yes! We offer no-cost EMI options for 3, 6, 9, and 12 months through major credit/debit cards and fintech partners. Ask our front desk for details." },
    { question: "At what age should my child first visit a dentist?", answer: "The Indian Dental Association (IDA) recommends the first dental visit within 6 months of the first tooth erupting, or by age 1 — whichever comes first." },
    { question: "How long does teeth whitening last?", answer: "Professional in-office whitening lasts 6–12 months with proper care. Avoiding tea, coffee, and tobacco significantly extends the results." },
    { question: "What is the difference between braces and clear aligners?", answer: "Metal/ceramic braces are fixed and handle complex cases. Clear aligners (Invisalign) are removable, nearly invisible, and ideal for mild to moderate misalignment." },
    { question: "Is the clinic open on Sundays?", answer: "Yes! We are open 10:00 AM – 2:00 PM on Sundays for emergency consultations and pre-booked appointments." },
    { question: "Do you accept dental insurance?", answer: "We accept most major dental insurance plans. Please bring your insurance card and we will help with the claim process at the front desk." },
  ],

  nav: [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" }
  ],

  testimonials: [
    {
      name: "Priya Mehta",
      treatment: "Root Canal Treatment — Age 34",
      text: "I was terrified of root canals. Dr. Patel made it completely painless \u2014 I didn't even feel a thing! Done in just one visit. Highly recommend SmileCare to everyone.",
      rating: 5,
      profileImage: "/images/patients/priya.webp",
      objectPosition: "center 35%"
    },
    {
      name: "Rajesh Kulkarni",
      treatment: "Dental Implants — Age 45",
      text: "My implants look and feel exactly like my natural teeth. Best decision I ever made. The entire team at SmileCare was professional and incredibly caring.",
      rating: 5,
      profileImage: "/images/patients/rajesh.webp",
      objectPosition: "center 8%",
      objectScale: 1.6
    },
    {
      name: "Ananya Desai",
      treatment: "Teeth Whitening — Age 28",
      text: "Got 7 shades whiter in just one session! The results exceeded my expectations completely. Everyone keeps complimenting my smile now \u2014 I feel so confident.",
      rating: 5,
      profileImage: "/images/patients/ananya.webp"
    },
    {
      name: "Vikram Patil",
      treatment: "Kids Dentistry — Parent",
      text: "My son used to cry at every dentist visit. Dr. Priya was so patient and gentle, he now actually looks forward to going! Amazing with children.",
      rating: 5,
      profileImage: "/images/patients/vikram.webp"
    },
    {
      name: "Meena Joshi",
      treatment: "Smile Makeover — Age 52",
      text: "After years of neglecting my dental health, SmileCare gave me back my confidence with a beautiful smile. The team was non-judgmental and incredibly supportive.",
      rating: 5,
      profileImage: "/images/patients/meena.webp",
      objectPosition: "35% 25%"
    },
    {
      name: "Suresh Nair",
      treatment: "Full Mouth Rehabilitation — Age 58",
      text: "After losing several teeth I thought I'd never smile freely again. SmileCare's full mouth rehab gave me a completely new set of teeth. The confidence it has brought me is priceless.",
      rating: 5,
      profileImage: "/images/patients/suresh.webp",
      objectPosition: "88% 15%"
    }
  ],

  features: {
    accepts_walkins: true,
    accepts_insurance: true,
    offers_emi: false,
    emergency_available: true,
    emergency_phone: "+91 96995 77641"
  },

  stats: {
    patients_treated: "10,000+",
    years_experience: "20+",
    google_rating: "4.9"
  },

  domain: "dental-premium-site-2.vercel.app",
  whatsapp_default_message: "Hello! I'd like to book a free consultation at SmileCare Dental Clinic."
};
