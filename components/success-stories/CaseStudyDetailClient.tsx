"use client";

import Link from "next/link";
import SiteImage from "@/components/ui/SiteImage";
import PageBanner from "@/layouts/PageBanner";
import Badge from "@/components/ui/Badge";
import { caseStudies as defaultCaseStudies, type CaseStudy } from "@/lib/content/caseStudies";
import { useEditableContent } from "@/lib/editableContent";

export default function CaseStudyDetailClient({ slug, fallbackItem }: { slug: string; fallbackItem: CaseStudy }) {
  const caseStudies = useEditableContent("case-studies", defaultCaseStudies);
  const itemIndex = caseStudies.findIndex((entry) => entry.slug === slug);
  const item = itemIndex >= 0 ? caseStudies[itemIndex] : fallbackItem;
  const imageIndex = itemIndex >= 0 ? itemIndex : defaultCaseStudies.findIndex((entry) => entry.slug === slug);

  return (
    <>
      <PageBanner bannerKey={`case-studies-${slug}`} eyebrow="Success Story" title={item.client} icon="bi bi-trophy" tone="success" image="/images/banner-success.jpg" />
      <section className="section">
        <div className="container-custom">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="position-relative img-zoom mb-4" style={{ aspectRatio: "16 / 8" }}>
                <SiteImage path={`/images/casestudy-${(imageIndex % 4) + 1}.jpg`} alt={item.client} />
              </div>
              <Badge>{item.industry}</Badge>
              <div className="card-custom mt-4">
                <h3 className="h6 mb-2">Problem</h3>
                <p className="text-light-custom">{item.problem}</p>
                <h3 className="h6 mb-2 mt-3">Solution</h3>
                <p className="text-light-custom">{item.solution}</p>
                <h3 className="h6 mb-2 mt-3">Result</h3>
                <p className="text-success-custom mb-0">{item.result}</p>
              </div>
              <Link href="/success-stories" className="fw-semibold text-accent d-inline-block mt-4">
                <i className="bi bi-arrow-left me-1" /> Back to Success Stories
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
