export const clinicConfig = {
  name: "SmileCare Dental Clinic",
  tagline: "Gentle, Painless Dental Care You Can Trust",
  established: 2004,

  // Top-level city — set this when customising for a new client
  city: "Pune",

  seo: {
    description: "Professional dental care for the whole family in Pune. Book your appointment in 30 seconds.",
    keywords: ["dental clinic", "dentist Pune", "teeth whitening", "dental implants", "orthodontics", "painless dentistry"],
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
      icon: "tooth"
    },
    {
      id: "cosmetic-dentistry",
      name: "Cosmetic Dentistry",
      description: "Teeth whitening, veneers, bonding, and smile makeovers for a confident, radiant smile.",
      price_from: 0,
      show_price: false,
      duration: "1 hour",
      icon: "sparkles"
    },
    {
      id: "orthodontics",
      name: "Orthodontics",
      description: "Traditional braces and clear aligners to straighten teeth and correct bite issues.",
      price_from: 0,
      show_price: false,
      duration: "1 hour",
      icon: "alignments"
    },
    {
      id: "dental-implants",
      name: "Dental Implants",
      description: "Permanent, natural-looking tooth replacements that restore function and aesthetics.",
      price_from: 0,
      show_price: false,
      duration: "1 hour",
      icon: "implant"
    },
    {
      id: "pediatric-dentistry",
      name: "Pediatric Dentistry",
      description: "Gentle, kid-friendly dental care in a fun and comforting environment.",
      price_from: 0,
      show_price: false,
      duration: "1 hour",
      icon: "child"
    },
    {
      id: "emergency-dental-care",
      name: "Emergency Dental Care",
      description: "Prompt care for dental emergencies including toothaches, broken teeth, and trauma.",
      price_from: 0,
      show_price: false,
      duration: "1 hour",
      icon: "emergency"
    }
  ],

  testimonials: [
    {
      name: "Priya Mehta",
      treatment: "Root Canal Treatment — Age 34",
      text: "I was terrified of root canals. Dr. Patel made it completely painless \u2014 I didn't even feel a thing! Done in just one visit. Highly recommend SmileCare to everyone.",
      rating: 5
    },
    {
      name: "Rajesh Kulkarni",
      treatment: "Dental Implants — Age 45",
      text: "My implants look and feel exactly like my natural teeth. Best decision I ever made. The entire team at SmileCare was professional and incredibly caring.",
      rating: 5
    },
    {
      name: "Ananya Desai",
      treatment: "Teeth Whitening — Age 28",
      text: "Got 7 shades whiter in just one session! The results exceeded my expectations completely. Everyone keeps complimenting my smile now \u2014 I feel so confident.",
      rating: 5
    },
    {
      name: "Vikram Patil",
      treatment: "Kids Dentistry — Parent",
      text: "My son used to cry at every dentist visit. Dr. Priya was so patient and gentle, he now actually looks forward to going! Amazing with children.",
      rating: 5
    },
    {
      name: "Meena Joshi",
      treatment: "Smile Makeover — Age 52",
      text: "After years of neglecting my dental health, SmileCare gave me back my confidence with a beautiful smile. The team was non-judgmental and incredibly supportive.",
      rating: 5
    },
    {
      name: "Suresh Nair",
      treatment: "Full Mouth Rehabilitation — Age 58",
      text: "After losing several teeth I thought I'd never smile freely again. SmileCare's full mouth rehab gave me a completely new set of teeth. The confidence it has brought me is priceless.",
      rating: 5
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
