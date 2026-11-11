"use client";

import SectionHeader from "@/components/ui/SectionHeader";
import IconCard from "@/components/ui/IconCard";
import { solutionItems as defaultSolutionItems } from "@/lib/content/solutions";
import { useEditableContent } from "@/lib/editableContent";
import { toneFor } from "@/lib/utils";

type SolutionsGridProps = {
  limit?: number;
  showHeader?: boolean;
};

export default function SolutionsGrid({ limit, showHeader = true }: SolutionsGridProps) {
  const solutionItems = useEditableContent("solution-items", defaultSolutionItems);
  const items = limit ? solutionItems.slice(0, limit) : solutionItems;

  return (
    <section className={`section ${showHeader ? "section-bg-alt" : "pt-0"}`}>
      <div className="container-custom">
        {showHeader && (
          <SectionHeader
            eyebrow="Solutions"
            title="Practical systems that put strategy into action"
            subtitle="The platforms, processes, and tools we implement to operationalize your HR strategy."
          />
        )}
        <div className="row g-4 stagger-fade">
          {items.map((item, index) => (
            <div className="col-md-6 col-lg-4" key={item.slug}>
              <IconCard
                icon={item.icon}
                title={item.title}
                description={item.description}
                href={`/solutions/${item.slug}`}
                tone={toneFor(index)}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
