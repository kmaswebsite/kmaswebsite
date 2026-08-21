"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import SiteImage from "@/components/ui/SiteImage";
import { useSiteContent } from "@/lib/siteContent";

type SlideMeta = {
  image: string;
  tone: "primary" | "secondary" | "success";
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel: string;
  secondaryHref: string;
};

const slideMeta: SlideMeta[] = [
  {
    image: "/images/hero-1.jpg",
    tone: "primary",
    primaryLabel: "Explore Services",
    primaryHref: "/services",
    secondaryLabel: "Book Consultation",
    secondaryHref: "/contact",
  },
  {
    image: "/images/hero-2.jpg",
    tone: "secondary",
    primaryLabel: "View Training Programs",
    primaryHref: "/training-programs",
    secondaryLabel: "Corporate Learning",
    secondaryHref: "/corporate-learning",
  },
  {
    image: "/images/hero-3.jpg",
    tone: "success",
    primaryLabel: "Read Success Stories",
    primaryHref: "/success-stories",
    secondaryLabel: "View Industries",
    secondaryHref: "/industries",
  },
];

const AUTO_ADVANCE_MS = 6000;

export default function HeroSlider() {
  const { heroSlides } = useSiteContent();
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goTo = useCallback((index: number) => {
    setActive(((index % slideMeta.length) + slideMeta.length) % slideMeta.length);
  }, []);

  useEffect(() => {
    if (paused) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    timerRef.current = setInterval(() => {
      setActive((prev) => (prev + 1) % slideMeta.length);
    }, AUTO_ADVANCE_MS);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [paused, active]);

  return (
    <div
      className="hero-slider"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="hero-slider-indicators">
        {slideMeta.map((slide, index) => (
          <button
            key={slide.image}
            type="button"
            className={index === active ? "active" : ""}
            aria-current={index === active ? "true" : undefined}
            aria-label={heroSlides[index]?.eyebrow}
            onClick={() => goTo(index)}
          />
        ))}
      </div>

      <div className="hero-slider-viewport">
        {slideMeta.map((slide, index) => {
          const text = heroSlides[index];
          return (
            <div
              className={`hero-slide ${index === active ? "hero-slide-active" : ""}`}
              key={slide.image}
              aria-hidden={index !== active}
            >
              <SiteImage path={slide.image} alt="" className="hero-slide-image" />
              <div className={`hero-slide-overlay page-banner-tone-${slide.tone}`} aria-hidden="true" />
              <div className="container-custom position-relative hero-slide-inner">
                <div className="row">
                  <div className="col-lg-8">
                    <span className="eyebrow-inverted d-block">{text.eyebrow}</span>
                    <h1 className="hero-slide-title">{text.title}</h1>
                    <p className="hero-slide-subtitle">{text.subtitle}</p>
                    <div className="d-flex flex-wrap gap-3 hero-actions">
                      <Link href={slide.primaryHref} className="btn-primary-custom">
                        {slide.primaryLabel} <i className="bi bi-arrow-right" />
                      </Link>
                      <Link href={slide.secondaryHref} className="btn-secondary-custom">
                        {slide.secondaryLabel}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <button type="button" className="hero-slider-control hero-slider-control-prev" onClick={() => goTo(active - 1)}>
        <i className="bi bi-chevron-left" aria-hidden="true" />
        <span className="visually-hidden">Previous</span>
      </button>
      <button type="button" className="hero-slider-control hero-slider-control-next" onClick={() => goTo(active + 1)}>
        <i className="bi bi-chevron-right" aria-hidden="true" />
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}
