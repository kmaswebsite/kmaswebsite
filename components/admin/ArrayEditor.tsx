"use client";

import { useState } from "react";
import { getOverride, setOverride, clearOverride } from "@/lib/editableContent";

type FieldType = "text" | "textarea" | "paragraphs";
type FieldDef = { name: string; label: string; type?: FieldType };

type ArrayEditorProps<T extends Record<string, unknown>> = {
  contentKey: string;
  defaultItems: T[];
  fields: FieldDef[];
  titleField: keyof T & string;
  emptyItem: T;
};

export default function ArrayEditor<T extends Record<string, unknown>>({
  contentKey,
  defaultItems,
  fields,
  titleField,
  emptyItem,
}: ArrayEditorProps<T>) {
  const [items, setItems] = useState<T[]>(() => getOverride<T[]>(contentKey) ?? defaultItems);
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [saved, setSaved] = useState(false);

  function updateField(index: number, field: string, value: unknown) {
    setItems((prev) => {
      const next = [...prev];
      next[index] = { ...next[index], [field]: value };
      return next;
    });
    setSaved(false);
  }

  function handleSave() {
    setOverride(contentKey, items);
    setSaved(true);
  }

  function handleReset() {
    clearOverride(contentKey);
    setItems(defaultItems);
    setSaved(true);
  }

  function addItem() {
    setItems((prev) => [...prev, { ...emptyItem }]);
    setOpenIndex(items.length);
  }

  function removeItem(index: number) {
    setItems((prev) => prev.filter((_, i) => i !== index));
    setOpenIndex(null);
  }

  return (
    <div>
      <div className="d-flex flex-wrap justify-content-between align-items-center mb-3 gap-2">
        <div className="d-flex gap-2 flex-wrap">
          <button type="button" className="btn-primary-custom btn-sm-custom" onClick={handleSave}>
            <i className="bi bi-check-lg me-1" /> Save All Changes
          </button>
          <button type="button" className="btn-secondary-custom btn-sm-custom" onClick={addItem}>
            <i className="bi bi-plus-lg me-1" /> Add Item
          </button>
          <button type="button" className="btn-secondary-custom btn-sm-custom" onClick={handleReset}>
            Reset to Default
          </button>
        </div>
        {saved && <span className="small text-success-custom"><i className="bi bi-check-circle me-1" />Saved</span>}
      </div>

      <div className="d-flex flex-column gap-2">
        {items.map((item, index) => {
          const isOpen = openIndex === index;
          const label = String(item[titleField] ?? `Item ${index + 1}`);
          return (
            <div className="card-custom p-0 overflow-hidden" key={index}>
              <button
                type="button"
                className="btn w-100 text-start d-flex justify-content-between align-items-center border-0"
                style={{ padding: "0.85rem 1.25rem" }}
                onClick={() => setOpenIndex(isOpen ? null : index)}
              >
                <span className="fw-semibold">{label || `Item ${index + 1}`}</span>
                <i className={`bi ${isOpen ? "bi-chevron-up" : "bi-chevron-down"}`} />
              </button>
              {isOpen && (
                <div className="p-3 border-top" style={{ borderColor: "var(--color-border)" }}>
                  <div className="row g-3">
                    {fields.map((field) => {
                      const raw = item[field.name];
                      const value =
                        field.type === "paragraphs" && Array.isArray(raw)
                          ? (raw as string[]).join("\n\n")
                          : ((raw as string) ?? "");
                      return (
                        <div className={field.type ? "col-12" : "col-md-6"} key={field.name}>
                          <label className="form-label small fw-semibold">{field.label}</label>
                          {field.type ? (
                            <textarea
                              className="form-control"
                              rows={field.type === "paragraphs" ? 6 : 3}
                              value={value}
                              onChange={(e) =>
                                updateField(
                                  index,
                                  field.name,
                                  field.type === "paragraphs"
                                    ? e.target.value.split(/\n\s*\n/).filter(Boolean)
                                    : e.target.value
                                )
                              }
                            />
                          ) : (
                            <input
                              className="form-control"
                              value={value}
                              onChange={(e) => updateField(index, field.name, e.target.value)}
                            />
                          )}
                        </div>
                      );
                    })}
                  </div>
                  <button type="button" className="btn-secondary-custom btn-sm-custom mt-3" onClick={() => removeItem(index)}>
                    <i className="bi bi-trash me-1" /> Remove Item
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
