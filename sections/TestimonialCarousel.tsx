"use client";

import { useRef } from "react";
import SiteImage from "@/components/ui/SiteImage";
import SectionHeader from "@/components/ui/SectionHeader";
import { testimonials as defaultTestimonials } from "@/lib/content/testimonials";
import { useEditableContent } from "@/lib/editableContent";

// Ordered to match testimonials genders: Sarah (F), David (M), Lianne (F), Tomás (M)
const avatars = [
  "/images/testimonial-1.jpg",
  "/images/testimonial-2.jpg",
  "/images/testimonial-4.jpg",
  "/images/testimonial-3.jpg",
];

export default function TestimonialCarousel() {
  const testimonials = useEditableContent("testimonials", defaultTestimonials);
  const trackRef = useRef<HTMLDivElement>(null);

  function scrollByCard(direction: 1 | -1) {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector<HTMLElement>(".testimonial-slide");
    const step = card ? card.offsetWidth + 24 : track.clientWidth * 0.8;
    track.scrollBy({ left: direction * step, behavior: "smooth" });
  }

  return (
    <section className="section">
      <div className="container-custom">
        <SectionHeader eyebrow="Testimonials" title="What our clients say" />

        <div className="testimonial-track" ref={trackRef}>
          {testimonials.map((testimonial, index) => (
            <div className="testimonial-slide" key={testimonial.name}>
              <div className="testimonial-card hover-lift h-100 text-center">
                <div className="position-relative img-zoom img-zoom-circle mx-auto mb-3" style={{ width: 64, height: 64 }}>
                  <SiteImage path={avatars[index % avatars.length]} alt={testimonial.name} />
                </div>
                <div className="mb-3">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <i
                      key={i}
                      className={`bi ${i < testimonial.rating ? "bi-star-fill" : "bi-star"} text-accent me-1`}
                    />
                  ))}
                </div>
                <p className="mb-4">&ldquo;{testimonial.quote}&rdquo;</p>
                <div className="fw-semibold">{testimonial.name}</div>
                <div className="text-light-custom small">
                  {testimonial.role}
                </div>
              </div>
            </div>
          ))}
        </div>

        {testimonials.length > 3 && (
          <div className="d-flex justify-content-center gap-3 mt-4">
            <button type="button" className="btn-secondary-custom btn-sm-custom" onClick={() => scrollByCard(-1)} aria-label="Previous testimonials">
              <i className="bi bi-arrow-left" />
            </button>
            <button type="button" className="btn-secondary-custom btn-sm-custom" onClick={() => scrollByCard(1)} aria-label="Next testimonials">
              <i className="bi bi-arrow-right" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
