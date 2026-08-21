"use client";

import { useState } from "react";
import { getSiteContent, writeSiteContent, DEFAULT_SITE_CONTENT, type CompanyInfo } from "@/lib/siteContent";

export default function GeneralSettingsForm() {
  const [company, setCompany] = useState<CompanyInfo>(() => getSiteContent().company);
  const [saved, setSaved] = useState(false);

  function update<K extends keyof CompanyInfo>(key: K, value: CompanyInfo[K]) {
    setCompany((prev) => ({ ...prev, [key]: value }));
    setSaved(false);
  }

  function handleSave(e: React.FormEvent) {
    e.preventDefault();
    const current = getSiteContent();
    writeSiteContent({ ...current, company });
    setSaved(true);
  }

  function handleReset() {
    const current = getSiteContent();
    writeSiteContent({ ...current, company: DEFAULT_SITE_CONTENT.company });
    setCompany(DEFAULT_SITE_CONTENT.company);
    setSaved(true);
  }

  return (
    <form className="card-custom" onSubmit={handleSave}>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2 className="h6 mb-0">General Site Settings</h2>
        {saved && <span className="small text-success-custom"><i className="bi bi-check-circle me-1" />Saved</span>}
      </div>
      <p className="text-light-custom small mb-4">
        Controls the company name, tagline, and contact details shown in the header, footer, and contact page across the whole site.
      </p>
      <div className="row g-3">
        <div className="col-md-6">
          <label className="form-label small fw-semibold">Company Name</label>
          <input className="form-control" value={company.name} onChange={(e) => update("name", e.target.value)} />
        </div>
        <div className="col-md-6">
          <label className="form-label small fw-semibold">Short Name (logo)</label>
          <input className="form-control" value={company.shortName} onChange={(e) => update("shortName", e.target.value)} />
        </div>
        <div className="col-12">
          <label className="form-label small fw-semibold">Tagline</label>
          <input className="form-control" value={company.tagline} onChange={(e) => update("tagline", e.target.value)} />
        </div>
        <div className="col-md-6">
          <label className="form-label small fw-semibold">Phone</label>
          <input className="form-control" value={company.phone} onChange={(e) => update("phone", e.target.value)} />
        </div>
        <div className="col-md-6">
          <label className="form-label small fw-semibold">Email Address</label>
          <input type="email" className="form-control" value={company.email} onChange={(e) => update("email", e.target.value)} />
        </div>
        <div className="col-md-8">
          <label className="form-label small fw-semibold">Office Address</label>
          <input className="form-control" value={company.address} onChange={(e) => update("address", e.target.value)} />
        </div>
        <div className="col-md-4">
          <label className="form-label small fw-semibold">Business Hours</label>
          <input className="form-control" value={company.hours} onChange={(e) => update("hours", e.target.value)} />
        </div>
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
