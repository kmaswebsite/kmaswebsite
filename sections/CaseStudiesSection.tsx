"use client";

import Link from "next/link";
import SiteImage from "@/components/ui/SiteImage";
import SectionHeader from "@/components/ui/SectionHeader";
import Badge from "@/components/ui/Badge";
import { caseStudies as defaultCaseStudies } from "@/lib/content/caseStudies";
import { useEditableContent } from "@/lib/editableContent";

type CaseStudiesSectionProps = {
  limit?: number;
  showHeader?: boolean;
};

export default function CaseStudiesSection({ limit, showHeader = true }: CaseStudiesSectionProps) {
  const caseStudies = useEditableContent("case-studies", defaultCaseStudies);
  const items = limit ? caseStudies.slice(0, limit) : caseStudies;

  return (
    <section className="section section-bg-alt">
      <div className="container-custom">
        {showHeader && (
          <SectionHeader
            eyebrow="Success Stories"
            title="Real outcomes from real engagements"
            subtitle="A sample of the measurable results our clients have achieved."
          />
        )}
        <div className="row g-4">
          {items.map((study, index) => (
            <div className="col-md-6" key={study.slug}>
              <div className="card-custom hover-lift h-100 d-flex flex-column p-0 overflow-hidden">
                <div className="position-relative img-zoom" style={{ aspectRatio: "16 / 7", borderRadius: 0 }}>
                  <SiteImage path={`/images/casestudy-${(index % 4) + 1}.jpg`} alt={study.client} />
                </div>
                <div className="p-4 d-flex flex-column flex-grow-1">
                  <Badge>{study.industry}</Badge>
                  <h3 className="h5 mt-3 mb-3">{study.client}</h3>
                  <p className="text-light-custom small mb-2"><strong>Problem:</strong> {study.problem}</p>
                  <p className="text-light-custom small mb-2"><strong>Solution:</strong> {study.solution}</p>
                  <p className="text-success-custom small mb-3"><strong>Result:</strong> {study.result}</p>
                  <Link href={`/success-stories/${study.slug}`} className="mt-auto fw-semibold text-accent">
                    Read Case Study <i className="bi bi-arrow-right ms-1" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
