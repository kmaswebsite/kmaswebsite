"use client";

import SectionHeader from "@/components/ui/SectionHeader";
import { industryItems as defaultIndustryItems } from "@/lib/content/industries";
import { useEditableContent } from "@/lib/editableContent";
import { toneFor } from "@/lib/utils";

type IndustriesGridProps = {
  limit?: number;
  showHeader?: boolean;
};

export default function IndustriesGrid({ limit, showHeader = true }: IndustriesGridProps) {
  const industryItems = useEditableContent("industry-items", defaultIndustryItems);
  const items = limit ? industryItems.slice(0, limit) : industryItems;

  return (
    <section className="section section-bg-alt">
      <div className="container-custom">
        {showHeader && (
          <SectionHeader
            eyebrow="Industries"
            title="Sectors We Have Served"
          />
        )}
        <div className="row g-4 stagger-fade">
          {items.map((item, index) => {
            const tone = toneFor(index);
            return (
              <div className="col-6 col-md-4 col-lg-3" key={item.slug}>
                <div className={`card-custom hover-lift icon-card tone-${tone} text-center h-100`}>
                  <div className={`icon-badge icon-badge-${tone} mx-auto`}>
                    <i className={item.icon} aria-hidden="true" />
                  </div>
                  <div className="icon-card-underline mx-auto" aria-hidden="true" />
                  <h3 className="h6 mb-0">{item.title}</h3>
                  {item.description && <p className="text-light-custom small mb-0 mt-2">{item.description}</p>}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
