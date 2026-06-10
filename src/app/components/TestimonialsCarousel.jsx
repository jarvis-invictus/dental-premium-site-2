"use client";
import { clinicConfig } from '@/app/lib/clinic-config';

import { Carousel, TestimonialCard } from "./ui/retro-testimonial";

const BG =
  "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2068&auto=format&fit=crop";

const testimonials = clinicConfig.testimonials;

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
