import type { Metadata } from "next";
import SiteImage from "@/components/ui/SiteImage";
import PageBanner from "@/layouts/PageBanner";
import SectionCurve from "@/components/ui/SectionCurve";
import { kmasIndustrySectors, kmasLeader, kmasMission, kmasVision } from "@/lib/content/kmas";

export const metadata: Metadata = {
  title: "Ramakrishnan Mohan",
  description: "Ramakrishnan Mohan, Director & Managing Partner, Krishna's Management Advisory & Services (KMAS).",
};

export default function LeadershipPage() {
  return (
    <>
      <PageBanner
        bannerKey="leadership"
        eyebrow="Leadership"
        title={kmasLeader.name}
        subtitle={kmasLeader.title}
        icon="bi bi-person-badge"
        tone="primary"
        image="/images/banner-people.jpg"
      />

      <section className="section" style={{ paddingBottom: "1.5rem" }}>
        <div className="container-custom">
          <div className="row gy-5 align-items-start">
            <div className="col-lg-5 fade-up">
              <div className="position-relative img-zoom mb-3" style={{ aspectRatio: "3 / 4" }}>
                <SiteImage path="/images/trainer-1.jpg" alt={kmasLeader.name} />
              </div>
              <h2 className="h4 mb-1">{kmasLeader.name}</h2>
              <p className="text-light-custom fw-semibold">{kmasLeader.title}</p>
            </div>

            <div className="col-lg-7 fade-up delay-1">
              <span className="eyebrow d-block">Profile</span>
              <p className="text-light-custom">{kmasLeader.bioParagraph}</p>

              <div className="card-custom icon-card tone-primary mt-4">
                <div className="icon-badge icon-badge-accent">
                  <i className="bi bi-award" aria-hidden="true" />
                </div>
                <div className="icon-card-underline" aria-hidden="true" />
                <h3 className="h6 mb-2">Chairman</h3>
                <p className="text-light-custom small mb-0">{kmasLeader.chairmanLine}</p>
              </div>

              <div className="mt-4 mb-2">
                <span className="eyebrow d-block">Industries Served</span>
                <div className="d-flex flex-wrap gap-2 mt-2">
                  {kmasIndustrySectors.map((sector) => (
                    <span key={sector} className="badge-custom">
                      {sector}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionCurve fill="var(--color-section-bg)" />

      <section className="section section-bg-alt" style={{ paddingTop: "1.5rem" }}>
        <div className="container-custom">
          <div className="row g-4 stagger-fade">
            <div className="col-md-6">
              <div className="card-custom hover-lift icon-card tone-primary h-100">
                <div className="icon-badge icon-badge-primary">
                  <i className="bi bi-eye" aria-hidden="true" />
                </div>
                <div className="icon-card-underline" aria-hidden="true" />
                <h3 className="h5 mb-2">Vision</h3>
                <p className="text-light-custom mb-0">{kmasVision}</p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card-custom hover-lift icon-card tone-primary h-100">
                <div className="icon-badge icon-badge-accent">
                  <i className="bi bi-bullseye" aria-hidden="true" />
                </div>
                <div className="icon-card-underline" aria-hidden="true" />
                <h3 className="h5 mb-2">Mission</h3>
                <p className="text-light-custom mb-0">&ldquo;{kmasMission}&rdquo;</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
