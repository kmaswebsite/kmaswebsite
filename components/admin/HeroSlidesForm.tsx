"use client";

import { useState } from "react";
import { getSiteContent, writeSiteContent, DEFAULT_SITE_CONTENT, type SiteContent } from "@/lib/siteContent";

export default function HeroSlidesForm() {
  const [heroSlides, setHeroSlides] = useState<SiteContent["heroSlides"]>(() => getSiteContent().heroSlides);
  const [saved, setSaved] = useState(false);

  function update(index: number, key: "eyebrow" | "title" | "subtitle", value: string) {
    setHeroSlides((prev) => {
      const next = [...prev] as SiteContent["heroSlides"];
      next[index] = { ...next[index], [key]: value };
      return next;
    });
    setSaved(false);
  }

  function handleSave(e: React.FormEvent) {
    e.preventDefault();
    const current = getSiteContent();
    writeSiteContent({ ...current, heroSlides });
    setSaved(true);
  }

  function handleReset() {
    const current = getSiteContent();
    writeSiteContent({ ...current, heroSlides: DEFAULT_SITE_CONTENT.heroSlides });
    setHeroSlides(DEFAULT_SITE_CONTENT.heroSlides);
    setSaved(true);
  }

  const slideLabels = ["Slide 1 — Strategy", "Slide 2 — Training", "Slide 3 — Success Stories"];

  return (
    <form onSubmit={handleSave}>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2 className="h6 mb-0">Homepage Hero Slider</h2>
        {saved && <span className="small text-success-custom"><i className="bi bi-check-circle me-1" />Saved</span>}
      </div>
      <p className="text-light-custom small mb-4">
        Edit the eyebrow, headline, and subtext for each of the 3 homepage hero slides. Slide images are managed on the Images tab.
      </p>
      <div className="d-flex flex-column gap-3">
        {heroSlides.map((slide, index) => (
          <div className="card-custom" key={index}>
            <h3 className="h6 mb-3 text-accent">{slideLabels[index]}</h3>
            <div className="row g-3">
              <div className="col-12">
                <label className="form-label small fw-semibold">Eyebrow</label>
                <input className="form-control" value={slide.eyebrow} onChange={(e) => update(index, "eyebrow", e.target.value)} />
              </div>
              <div className="col-12">
                <label className="form-label small fw-semibold">Headline</label>
                <textarea className="form-control" rows={2} value={slide.title} onChange={(e) => update(index, "title", e.target.value)} />
              </div>
              <div className="col-12">
                <label className="form-label small fw-semibold">Subtext</label>
                <textarea className="form-control" rows={2} value={slide.subtitle} onChange={(e) => update(index, "subtitle", e.target.value)} />
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="d-flex gap-2 mt-4">
        <button type="submit" className="btn-primary-custom btn-sm-custom">
          <i className="bi bi-check-lg me-1" /> Save Changes
        </button>
        <button type="button" className="btn-secondary-custom btn-sm-custom" onClick={handleReset}>
          Reset to Default
        </button>
      </div>
    </form>
  );
}
