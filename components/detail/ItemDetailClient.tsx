"use client";

import Link from "next/link";
import PageBanner from "@/layouts/PageBanner";
import { useEditableContent } from "@/lib/editableContent";

export type DetailItem = {
  slug: string;
  icon: string;
  title: string;
  description: string;
  detail: string;
  underConstruction?: boolean;
  highlights?: string[];
  approach?: string[];
  outcomes?: string[];
};

type ItemDetailClientProps = {
  contentKey: string;
  defaultItems: DetailItem[];
  slug: string;
  fallbackItem: DetailItem;
  eyebrow: string;
  tone: "primary" | "secondary" | "success";
  image: string;
  backHref: string;
  backLabel: string;
  highlightsTitle?: string;
};

export default function ItemDetailClient({
  contentKey,
  defaultItems,
  slug,
  fallbackItem,
  eyebrow,
  tone,
  image,
  backHref,
  backLabel,
  highlightsTitle = "What This Covers",
}: ItemDetailClientProps) {
  const items = useEditableContent(contentKey, defaultItems);
  const item = items.find((entry) => entry.slug === slug) ?? fallbackItem;
  const defaults = defaultItems.find((entry) => entry.slug === slug);
  // Admin overrides saved before these fields existed won't carry them, so
  // fall back to the shipped defaults for the expanded sections.
  const highlights = item.highlights ?? defaults?.highlights ?? [];
  const approach = item.approach ?? defaults?.approach ?? [];
  const outcomes = item.outcomes ?? defaults?.outcomes ?? [];
  const related = items.filter((entry) => entry.slug !== slug).slice(0, 3);

  return (
    <>
      <PageBanner eyebrow={eyebrow} title={item.title} subtitle={item.description} icon={item.icon} tone={tone} image={image} bannerKey={`${contentKey}-${slug}`} />

      <section className="section">
        <div className="container-custom">
          <div className="row gy-4 gx-lg-5">
            <div className="col-lg-8">
              <div className="detail-card fade-up">
                <span className="icon-tile mb-3">
                  <i className={item.icon} aria-hidden="true" />
                </span>
                <h2 className="h3 mb-3">{item.title}</h2>
                <p className="text-light-custom fs-6 mb-0">{item.detail}</p>

                {highlights.length > 0 && (
                  <>
                    <h3 className="detail-subhead">{highlightsTitle}</h3>
                    <ul className="check-list">
                      {highlights.map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>
                  </>
                )}

                {approach.length > 0 && (
                  <>
                    <h3 className="detail-subhead">How KMAS Works</h3>
                    <ol className="step-list">
                      {approach.map((step, index) => (
                        <li key={step}>
                          <span className="step-list-num">{String(index + 1).padStart(2, "0")}</span>
                          <span>{step}</span>
                        </li>
                      ))}
                    </ol>
                  </>
                )}
              </div>
            </div>

            <div className="col-lg-4">
              <div className="detail-aside">
                {outcomes.length > 0 && (
                  <div className="outcome-card fade-up">
                    <span className="eyebrow-inverted d-block">Outcomes</span>
                    <ul className="check-list check-list-inverted mb-0">
                      {outcomes.map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="card-custom fade-up">
                  <h3 className="h6 mb-2">Discuss your requirement</h3>
                  <p className="text-light-custom small mb-3">
                    Talk to KMAS about how this can be tailored to your organisation.
                  </p>
                  <Link href="/contact" className="btn-primary-custom btn-sm-custom w-100">
                    Contact Us <i className="bi bi-arrow-right" />
                  </Link>
                </div>

                <Link href={backHref} className="fw-semibold small d-inline-flex align-items-center gap-1">
                  <i className="bi bi-arrow-left" /> {backLabel}
                </Link>
              </div>
            </div>
          </div>

          {related.length > 0 && (
            <div className="mt-5">
              <span className="eyebrow d-block">Explore More</span>
              <div className="row g-3 mt-1">
                {related.map((entry) => (
                  <div className="col-md-4" key={entry.slug}>
                    <Link href={`${backHref}/${entry.slug}`} className="related-link">
                      <span className="icon-tile icon-tile-sm">
                        <i className={entry.icon} aria-hidden="true" />
                      </span>
                      <span className="fw-semibold">{entry.title}</span>
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
