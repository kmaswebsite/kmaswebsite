"use client";

import { useState } from "react";
import { getSiteContent, writeSiteContent, DEFAULT_SITE_CONTENT, type SocialLinks } from "@/lib/siteContent";

const fields: { key: keyof SocialLinks; label: string; icon: string; placeholder: string }[] = [
  { key: "linkedin", label: "LinkedIn", icon: "bi bi-linkedin", placeholder: "https://linkedin.com/company/..." },
  { key: "twitter", label: "Twitter / X", icon: "bi bi-twitter-x", placeholder: "https://x.com/..." },
  { key: "facebook", label: "Facebook", icon: "bi bi-facebook", placeholder: "https://facebook.com/..." },
  { key: "instagram", label: "Instagram", icon: "bi bi-instagram", placeholder: "https://instagram.com/..." },
  { key: "youtube", label: "YouTube", icon: "bi bi-youtube", placeholder: "https://youtube.com/@..." },
];

export default function SocialMediaForm() {
  const [social, setSocial] = useState<SocialLinks>(() => getSiteContent().social);
  const [saved, setSaved] = useState(false);

  function update(key: keyof SocialLinks, value: string) {
    setSocial((prev) => ({ ...prev, [key]: value }));
    setSaved(false);
  }

  function handleSave(e: React.FormEvent) {
    e.preventDefault();
    const current = getSiteContent();
    writeSiteContent({ ...current, social });
    setSaved(true);
  }

  function handleReset() {
    const current = getSiteContent();
    writeSiteContent({ ...current, social: DEFAULT_SITE_CONTENT.social });
    setSocial(DEFAULT_SITE_CONTENT.social);
    setSaved(true);
  }

  return (
    <form className="card-custom" onSubmit={handleSave}>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2 className="h6 mb-0">Social Media Links</h2>
        {saved && <span className="small text-success-custom"><i className="bi bi-check-circle me-1" />Saved</span>}
      </div>
      <p className="text-light-custom small mb-4">
        These links power the icons in the site footer. Leave blank or "#" to hide a link's real destination.
      </p>
      <div className="d-flex flex-column gap-3">
        {fields.map((field) => (
          <div key={field.key}>
            <label className="form-label small fw-semibold">
              <i className={`${field.icon} me-2 text-accent`} />
              {field.label}
            </label>
            <input
              className="form-control"
              placeholder={field.placeholder}
              value={social[field.key]}
              onChange={(e) => update(field.key, e.target.value)}
            />
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
