"use client";

import { useState } from "react";
import { pageBannerDefaults } from "@/lib/content/pageBanners";
import { getOverride, setOverride, clearOverride } from "@/lib/editableContent";

type BannerText = { eyebrow: string; title: string; subtitle: string };

function loadAll(): Record<string, BannerText> {
  const result: Record<string, BannerText> = {};
  for (const page of pageBannerDefaults) {
    const key = `banner-${page.key}`;
    result[page.key] = getOverride<BannerText>(key) ?? {
      eyebrow: page.eyebrow,
      title: page.title,
      subtitle: page.subtitle,
    };
  }
  return result;
}

export default function PageBannersForm() {
  const [banners, setBanners] = useState<Record<string, BannerText>>(loadAll);
  const [openKey, setOpenKey] = useState<string | null>(null);
  const [saved, setSaved] = useState(false);

  function update(key: string, field: keyof BannerText, value: string) {
    setBanners((prev) => ({ ...prev, [key]: { ...prev[key], [field]: value } }));
    setSaved(false);
  }

  function handleSaveAll() {
    for (const page of pageBannerDefaults) {
      setOverride(`banner-${page.key}`, banners[page.key]);
    }
    setSaved(true);
  }

  function handleResetOne(key: string) {
    clearOverride(`banner-${key}`);
    const page = pageBannerDefaults.find((p) => p.key === key)!;
    setBanners((prev) => ({ ...prev, [key]: { eyebrow: page.eyebrow, title: page.title, subtitle: page.subtitle } }));
  }

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <button type="button" className="btn-primary-custom btn-sm-custom" onClick={handleSaveAll}>
          <i className="bi bi-check-lg me-1" /> Save All Banners
        </button>
        {saved && <span className="small text-success-custom"><i className="bi bi-check-circle me-1" />Saved</span>}
      </div>
      <div className="d-flex flex-column gap-2">
        {pageBannerDefaults.map((page) => {
          const isOpen = openKey === page.key;
          const text = banners[page.key];
          return (
            <div className="card-custom p-0 overflow-hidden" key={page.key}>
              <button
                type="button"
                className="btn w-100 text-start d-flex justify-content-between align-items-center border-0"
                style={{ padding: "0.85rem 1.25rem" }}
                onClick={() => setOpenKey(isOpen ? null : page.key)}
              >
                <span className="fw-semibold">{page.label}</span>
                <i className={`bi ${isOpen ? "bi-chevron-up" : "bi-chevron-down"}`} />
              </button>
              {isOpen && (
                <div className="p-3 border-top" style={{ borderColor: "var(--color-border)" }}>
                  <div className="row g-3">
                    <div className="col-12">
                      <label className="form-label small fw-semibold">Eyebrow</label>
                      <input className="form-control" value={text.eyebrow} onChange={(e) => update(page.key, "eyebrow", e.target.value)} />
                    </div>
                    <div className="col-12">
                      <label className="form-label small fw-semibold">Title</label>
                      <textarea className="form-control" rows={2} value={text.title} onChange={(e) => update(page.key, "title", e.target.value)} />
                    </div>
                    <div className="col-12">
                      <label className="form-label small fw-semibold">Subtitle</label>
                      <textarea className="form-control" rows={2} value={text.subtitle} onChange={(e) => update(page.key, "subtitle", e.target.value)} />
                    </div>
                  </div>
                  <button type="button" className="btn-secondary-custom btn-sm-custom mt-3" onClick={() => handleResetOne(page.key)}>
                    Reset This Banner
                  </button>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
