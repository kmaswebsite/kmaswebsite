"use client";

import Link from "next/link";
import SectionHeader from "@/components/ui/SectionHeader";
import IconCard from "@/components/ui/IconCard";
import { serviceItems as defaultServiceItems } from "@/lib/content/services";
import { useEditableContent } from "@/lib/editableContent";
import { toneFor } from "@/lib/utils";

type ServicesGridProps = {
  limit?: number;
  showHeader?: boolean;
  ctaHref?: string;
  ctaLabel?: string;
  bgAlt?: boolean;
};

export default function ServicesGrid({ limit, showHeader = true, ctaHref, ctaLabel = "View All Services", bgAlt = false }: ServicesGridProps) {
  const serviceItems = useEditableContent("service-items", defaultServiceItems);
  const items = limit ? serviceItems.slice(0, limit) : serviceItems;

  return (
    <section className={`section ${bgAlt ? "section-bg-alt" : ""}`}>
      <div className="container-custom">
        {showHeader && (
          <SectionHeader eyebrow="KMAS Services" title="Our Services" />
        )}
        <div className="row g-4 stagger-fade">
          {items.map((item, index) => (
            <div className="col-md-6 col-lg-4" key={item.slug}>
              <IconCard
                icon={item.icon}
                title={item.title}
                description={item.description}
                href={`/services/${item.slug}`}
                tone={toneFor(index)}
              />
            </div>
          ))}
        </div>
        {ctaHref && (
          <div className="text-center mt-4">
            <Link href={ctaHref} className="btn-secondary-custom">
              {ctaLabel} <i className="bi bi-arrow-right" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
