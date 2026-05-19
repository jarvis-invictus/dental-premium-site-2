"use client";

import { Carousel, TestimonialCard } from "./ui/retro-testimonial";

const BG =
  "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2068&auto=format&fit=crop";

const testimonials = [
  {
    name: "Priya Mehta",
    designation: "Root Canal Treatment — Age 34",
    procedure: "Root Canal",
    description:
      "I was terrified of root canals. Dr. Sharma made it completely painless — I didn't even feel a thing! Done in just one visit. Highly recommend SmileCare to everyone.",
    profileImage: "/images/patients/priya.jpg",
    objectPosition: "center 35%",
  },
  {
    name: "Rajesh Kulkarni",
    designation: "Dental Implants — Age 45",
    procedure: "Dental Implants",
    description:
      "My implants look and feel exactly like my natural teeth. Best decision I ever made. The entire team at SmileCare was professional and incredibly caring.",
    profileImage: "/images/patients/rajesh.jpg",
    objectPosition: "center 8%",
    objectScale: 1.6,
  },
  {
    name: "Ananya Desai",
    designation: "Teeth Whitening — Age 28",
    procedure: "Teeth Whitening",
    description:
      "Got 7 shades whiter in just one session! The results exceeded my expectations completely. Everyone keeps complimenting my smile now — I feel so confident.",
    profileImage: "/images/patients/ananya.jpg",
  },
  {
    name: "Vikram Patil",
    designation: "Kids Dentistry — Parent",
    procedure: "Kids Dentistry",
    description:
      "My son used to cry at every dentist visit. Dr. Priya was so patient and gentle, he now actually looks forward to going! Amazing with children.",
    profileImage: "/images/patients/vikram.jpg",
  },
  {
    name: "Meena Joshi",
    designation: "Smile Makeover — Age 52",
    procedure: "Smile Designing",
    description:
      "After years of neglecting my dental health, SmileCare gave me back my confidence with a beautiful smile. The team was non-judgmental and incredibly supportive.",
    profileImage: "/images/patients/meena.jpg",
    objectPosition: "35% 25%",
  },
  {
    name: "Suresh Nair",
    designation: "Full Mouth Rehabilitation — Age 58",
    procedure: "Full Mouth Rehab",
    description:
      "After losing several teeth I thought I'd never smile freely again. SmileCare's full mouth rehab gave me a completely new set of teeth. The confidence it has brought me is priceless.",
    profileImage: "/images/patients/suresh.jpg",
    objectPosition: "88% 15%",
  },
];

export default function TestimonialsCarousel() {
  const cards = testimonials.map((t, index) => (
    <TestimonialCard
      key={t.name}
      testimonial={t}
      index={index}
      backgroundImage={BG}
    />
  ));

  return <Carousel items={cards} />;
}
