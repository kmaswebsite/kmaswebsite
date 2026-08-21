"use client";

import { benefits as defaultBenefits } from "@/lib/content/careers";
import { useEditableContent } from "@/lib/editableContent";
import { toneFor } from "@/lib/utils";

export default function CareersBenefitsGrid() {
  const benefits = useEditableContent("careers-benefits", defaultBenefits);

  return (
    <div className="row g-4 stagger-fade">
      {benefits.map((benefit, index) => {
        const tone = toneFor(index);
        return (
          <div className="col-sm-6 col-lg-3" key={benefit.title}>
            <div className={`card-custom hover-lift icon-card tone-${tone} h-100`}>
              <div className={`icon-badge icon-badge-${tone}`}>
                <i className={benefit.icon} aria-hidden="true" />
              </div>
              <div className="icon-card-underline" aria-hidden="true" />
              <h3 className="h6 mb-2">{benefit.title}</h3>
              <p className="text-light-custom small mb-0">{benefit.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
