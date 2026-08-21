import type { Metadata } from "next";
import SiteImage from "@/components/ui/SiteImage";
import PageBanner from "@/layouts/PageBanner";
import { kmasAbout } from "@/lib/content/kmas";

export const metadata: Metadata = {
  title: "About Us",
  description: "About Krishna's Management Advisory & Services (KMAS).",
};

export default function AboutUsPage() {
  return (
    <>
      <PageBanner
        bannerKey="about-us"
        eyebrow="About Us"
        title="About KMAS"
        icon="bi bi-people"
        tone="primary"
        image="/images/banner-people.jpg"
      />

      <section className="section">
        <div className="container-custom">
          <div className="row gy-5 align-items-center">
            <div className="col-lg-6 fade-up">
              <div className="position-relative img-zoom mb-4" style={{ aspectRatio: "16 / 9" }}>
                <SiteImage path="/images/about-team.jpg" alt="KMAS management advisory team" />
              </div>
            </div>
            <div className="col-lg-6 fade-up delay-1">
              <span className="eyebrow d-block">About KMAS</span>
              <h2 className="section-title">Krishna&rsquo;s Management Advisory &amp; Services</h2>
              <p className="text-light-custom">{kmasAbout.aboutParagraph}</p>

              <div className="numbered-row mt-4">
                <div className="icon-badge icon-badge-primary mb-0" style={{ width: 44, height: 44, fontSize: "1.15rem" }}>
                  <i className="bi bi-flag" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="h6 mb-1">Started in {kmasAbout.founded}</h3>
                  <p className="text-light-custom small mb-0">
                    KMAS was started by Ramakrishnan Mohan, Director &amp; Managing Partner.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
