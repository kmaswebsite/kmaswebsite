"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import SiteImage from "@/components/ui/SiteImage";
import { kmasAbout, kmasHrExcellence, kmasLeader } from "@/lib/content/kmas";

type Slide = {
  image: string;
  tone: "primary" | "secondary" | "success";
  eyebrow: string;
  title: string;
  subtitle: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel: string;
  secondaryHref: string;
};

const slides: Slide[] = [
  {
    image: "/images/hero-1.jpg",
    tone: "primary",
    eyebrow: "",
    title: "Krishna's Management Advisory & Services (KMAS)",
    subtitle: kmasAbout.description,
    primaryLabel: "About Us",
    primaryHref: "/about-hrd",
    secondaryLabel: "Our Services",
    secondaryHref: "/services",
  },
  {
    image: "/images/hero-2.jpg",
    tone: "secondary",
    eyebrow: "Leadership",
    title: kmasLeader.name,
    subtitle: kmasLeader.bioParagraph.split(". ").slice(0, 2).join(". ") + ".",
    primaryLabel: "View Full Leadership Profile",
    primaryHref: "/leadership",
    secondaryLabel: "Our Services",
    secondaryHref: "/services",
  },
  {
    image: "/images/hero-3.jpg",
    tone: "success",
    eyebrow: "Our Team",
    title: "Best-in-Class Consulting & Advisory",
    subtitle: kmasHrExcellence.paragraph3,
    primaryLabel: "Meet the Team",
    primaryHref: "/leadership",
    secondaryLabel: "Contact Us",
    secondaryHref: "/contact",
  },
];

const AUTO_ADVANCE_MS = 6000;

export default function KmasHero() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goTo = useCallback((index: number) => {
    setActive(((index % slides.length) + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    if (paused) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    timerRef.current = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
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
      <div className="hero-slider-viewport">
        {slides.map((slide, index) => (
          <div
            className={`hero-slide ${index === active ? "hero-slide-active" : ""}`}
            key={slide.image}
            aria-hidden={index !== active}
          >
            <SiteImage path={slide.image} alt="" className="hero-slide-image" />
            <div className={`hero-slide-overlay page-banner-tone-${slide.tone}`} aria-hidden="true" />
            <div className="container-custom position-relative hero-slide-inner">
              <div className="row">
                <div className="col-lg-8 col-xl-7">
                  {slide.eyebrow && <span className="eyebrow-inverted d-block">{slide.eyebrow}</span>}
                  <h1 className="hero-slide-title">{slide.title}</h1>
                  <p className="hero-slide-subtitle">{slide.subtitle}</p>
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
        ))}
      </div>

      <div className="hero-bar">
        <div className="container-custom hero-bar-inner">
          <div className="hero-counter" aria-hidden="true">
            <strong>{String(active + 1).padStart(2, "0")}</strong> / {String(slides.length).padStart(2, "0")}
          </div>
          <div className="hero-progress" style={{ ["--hero-duration" as string]: `${AUTO_ADVANCE_MS}ms` }}>
            {slides.map((slide, index) => (
              <button
                key={`${slide.image}-${index === active ? active : "idle"}`}
                type="button"
                className={`${index === active ? "active" : ""} ${index < active ? "is-done" : ""} ${paused ? "is-paused" : ""}`}
                aria-current={index === active ? "true" : undefined}
                aria-label={slide.eyebrow || slide.title}
                onClick={() => goTo(index)}
              >
                <span className="hero-progress-fill" />
              </button>
            ))}
          </div>
          <div className="hero-arrows">
            <button type="button" className="hero-arrow" onClick={() => goTo(active - 1)}>
              <i className="bi bi-arrow-left" aria-hidden="true" />
              <span className="visually-hidden">Previous</span>
            </button>
            <button type="button" className="hero-arrow" onClick={() => goTo(active + 1)}>
              <i className="bi bi-arrow-right" aria-hidden="true" />
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
