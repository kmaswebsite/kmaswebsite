"use client";

import { useEffect, useMemo, useState } from "react";
import { IMAGE_SLOTS } from "@/lib/imageSlots";
import { getImageOverrides, setImageOverride, resetAllImageOverrides } from "@/lib/useSiteImage";

export default function ImagesManager() {
  const [overrides, setOverrides] = useState<Record<string, string>>({});
  const [drafts, setDrafts] = useState<Record<string, string>>({});
  const [savedPath, setSavedPath] = useState<string | null>(null);

  useEffect(() => {
    setOverrides(getImageOverrides());
  }, []);

  const groups = useMemo(() => {
    const byGroup: Record<string, typeof IMAGE_SLOTS> = {};
    for (const slot of IMAGE_SLOTS) {
      byGroup[slot.group] = byGroup[slot.group] || [];
      byGroup[slot.group].push(slot);
    }
    return byGroup;
  }, []);

  function effectiveUrl(path: string) {
    return drafts[path] ?? overrides[path] ?? path;
  }

  function handleDraftChange(path: string, value: string) {
    setDrafts((prev) => ({ ...prev, [path]: value }));
  }

  function handleApply(path: string) {
    const value = drafts[path] ?? overrides[path] ?? "";
    setImageOverride(path, value === path ? "" : value);
    setOverrides(getImageOverrides());
    setSavedPath(path);
    setTimeout(() => setSavedPath((current) => (current === path ? null : current)), 2000);
  }

  function handleResetOne(path: string) {
    setImageOverride(path, "");
    setOverrides(getImageOverrides());
    setDrafts((prev) => {
      const next = { ...prev };
      delete next[path];
      return next;
    });
  }

  function handleResetAll() {
    resetAllImageOverrides();
    setOverrides({});
    setDrafts({});
  }

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <div>
          <h2 className="h6 mb-1">Site Images</h2>
          <p className="text-light-custom small mb-0">
            Paste a replacement image URL for any photo used across the site. Changes apply immediately, everywhere that image is used.
          </p>
        </div>
        <button type="button" className="btn-secondary-custom btn-sm-custom" onClick={handleResetAll}>
          <i className="bi bi-arrow-counterclockwise me-1" /> Reset All Images
        </button>
      </div>

      {Object.entries(groups).map(([groupName, slots]) => (
        <div className="mb-4" key={groupName}>
          <h3 className="h6 text-light-custom mb-3">{groupName}</h3>
          <div className="row g-3">
            {slots.map((slot) => {
              const isOverridden = Boolean(overrides[slot.path]);
              return (
                <div className="col-md-6 col-xl-4" key={slot.path}>
                  <div className="card-custom h-100 p-3">
                    <div
                      className="position-relative rounded-3 overflow-hidden mb-2"
                      style={{ aspectRatio: "16 / 10", background: "var(--color-section-bg)" }}
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={effectiveUrl(slot.path)}
                        alt={slot.label}
                        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
                      />
                      {isOverridden && (
                        <span className="badge-custom position-absolute top-0 end-0 m-2">Custom</span>
                      )}
                    </div>
                    <p className="small fw-semibold mb-2">{slot.label}</p>
                    <input
                      className="form-control form-control-sm mb-2"
                      placeholder="Paste image URL…"
                      value={drafts[slot.path] ?? overrides[slot.path] ?? ""}
                      onChange={(e) => handleDraftChange(slot.path, e.target.value)}
                    />
                    <div className="d-flex gap-2">
                      <button type="button" className="btn-primary-custom btn-sm-custom" onClick={() => handleApply(slot.path)}>
                        {savedPath === slot.path ? <><i className="bi bi-check-lg me-1" />Applied</> : "Apply"}
                      </button>
                      {isOverridden && (
                        <button type="button" className="btn-secondary-custom btn-sm-custom" onClick={() => handleResetOne(slot.path)}>
                          Reset
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
