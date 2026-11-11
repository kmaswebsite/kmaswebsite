"use client";

import SectionHeader from "@/components/ui/SectionHeader";
import IconCard from "@/components/ui/IconCard";
import { strategyItems as defaultStrategyItems } from "@/lib/content/strategy";
import { useEditableContent } from "@/lib/editableContent";
import { toneFor } from "@/lib/utils";

type StrategyGridProps = {
  limit?: number;
  showHeader?: boolean;
};

export default function StrategyGrid({ limit, showHeader = true }: StrategyGridProps) {
  const strategyItems = useEditableContent("strategy-items", defaultStrategyItems);
  const items = limit ? strategyItems.slice(0, limit) : strategyItems;

  return (
    <section className={`section ${showHeader ? "" : "pt-0"}`}>
      <div className="container-custom">
        {showHeader && (
          <SectionHeader
            eyebrow="Strategy"
            title="Strategic foundations for workforce transformation"
            subtitle="Advisory-led strategy work that gives your leadership team a clear, executable people agenda."
          />
        )}
        <div className="row g-4 stagger-fade">
          {items.map((item, index) => (
            <div className="col-md-6 col-lg-3" key={item.slug}>
              <IconCard
                icon={item.icon}
                title={item.title}
                description={item.description}
                href={`/strategy/${item.slug}`}
                tone={toneFor(index)}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
