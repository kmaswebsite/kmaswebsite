"use client";

import Link from "next/link";
import SiteImage from "@/components/ui/SiteImage";
import PageBanner from "@/layouts/PageBanner";
import { caseStudies as defaultCaseStudies, type CaseStudy } from "@/lib/content/caseStudies";
import { useEditableContent } from "@/lib/editableContent";

const blocks = [
  { key: "problem", label: "The Situation", icon: "bi bi-exclamation-diamond" },
  { key: "solution", label: "How KMAS Helps", icon: "bi bi-tools" },
  { key: "result", label: "The Outcome", icon: "bi bi-trophy" },
] as const;

export default function CaseStudyDetailClient({ slug, fallbackItem }: { slug: string; fallbackItem: CaseStudy }) {
  const caseStudies = useEditableContent("case-studies", defaultCaseStudies);
  const itemIndex = caseStudies.findIndex((entry) => entry.slug === slug);
  const item = itemIndex >= 0 ? caseStudies[itemIndex] : fallbackItem;
  const imageIndex = itemIndex >= 0 ? itemIndex : defaultCaseStudies.findIndex((entry) => entry.slug === slug);
  const related = caseStudies.filter((entry) => entry.slug !== slug).slice(0, 3);

  return (
    <>
      <PageBanner bannerKey={`case-studies-${slug}`} eyebrow="Typical Engagement" title={item.client} subtitle={item.industry} icon="bi bi-trophy" tone="success" image="/images/banner-success.jpg" />
      <section className="section">
        <div className="container-custom">
          <div className="row gy-4 gx-lg-5">
            <div className="col-lg-5">
              <div className="position-relative img-zoom" style={{ aspectRatio: "4 / 3" }}>
                <SiteImage path={`/images/casestudy-${(Math.max(imageIndex, 0) % 4) + 1}.jpg`} alt={item.client} />
              </div>
            </div>
            <div className="col-lg-7">
              <div className="d-grid gap-3">
                {blocks.map((block, index) => (
                  <div className="detail-card fade-up" key={block.key}>
                    <div className="d-flex align-items-center gap-3 mb-2">
                      <span className={`icon-tile icon-tile-sm ${index === 2 ? "icon-tile-accent" : ""}`}>
                        <i className={block.icon} aria-hidden="true" />
                      </span>
                      <h2 className="h6 mb-0">{block.label}</h2>
                    </div>
                    <p className="text-light-custom mb-0">{item[block.key]}</p>
                  </div>
                ))}
              </div>
              <Link href="/success-stories" className="fw-semibold small d-inline-flex align-items-center gap-1 mt-4">
                <i className="bi bi-arrow-left" /> Back to Success Stories
              </Link>
            </div>
          </div>

          {related.length > 0 && (
            <div className="mt-5">
              <span className="eyebrow d-block">More Engagements</span>
              <div className="row g-3 mt-1">
                {related.map((entry) => (
                  <div className="col-md-4" key={entry.slug}>
                    <Link href={`/success-stories/${entry.slug}`} className="related-link">
                      <span className="icon-tile icon-tile-sm">
                        <i className="bi bi-trophy" aria-hidden="true" />
                      </span>
                      <span className="fw-semibold">{entry.client}</span>
                      <i className="bi bi-arrow-right ms-auto" aria-hidden="true" />
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
