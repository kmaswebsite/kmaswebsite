import type { Metadata } from "next";
import Link from "next/link";
import SiteImage from "@/components/ui/SiteImage";
import IstdLogo from "@/components/ui/IstdLogo";
import PageBanner from "@/layouts/PageBanner";
import ContactCtaBand from "@/sections/ContactCtaBand";
import { kmasAbout, kmasLeader } from "@/lib/content/kmas";

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
          <div className="row gy-5 gx-lg-5 align-items-center">
            <div className="col-lg-6 fade-up">
              <div className="about-media">
                <div className="position-relative img-zoom" style={{ aspectRatio: "4 / 3" }}>
                  <SiteImage path="/images/about-team.jpg" alt="KMAS management advisory team" />
                </div>
              </div>
            </div>
            <div className="col-lg-6 fade-up delay-1">
              <span className="eyebrow d-block">About KMAS</span>
              <h2 className="section-title">Krishna&rsquo;s Management Advisory &amp; Services (KMAS)</h2>
              <p className="text-light-custom">{kmasAbout.description}</p>
              <p className="text-light-custom">{kmasAbout.aboutParagraph}</p>

              <div className="istd-strip mt-4">
                <span className="icon-tile icon-tile-sm">
                  <i className="bi bi-flag" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="mb-1">Started in {kmasAbout.founded}</h3>
                  <p className="text-light-custom small mb-0">
                    KMAS was started by Ramakrishnan Mohan, Director &amp; Managing Partner.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-bg-alt" id="best-in-class">
        <div className="container-custom">
          <span className="eyebrow d-block">Best in Class</span>
          <h2 className="section-title mb-4">Leadership</h2>

          <div className="profile-card fade-up">
            <div className="row gy-4 gx-lg-5 align-items-start">
              <div className="col-md-4 col-lg-3">
                <div className="profile-photo">
                  <SiteImage path="/images/ramakrishnan-mohan.jpg" alt={kmasLeader.name} />
                </div>
              </div>
              <div className="col-md-8 col-lg-9">
                <h3 className="profile-name">{kmasLeader.name}</h3>
                <span className="profile-role">{kmasLeader.title}</span>
                <p className="text-light-custom">{kmasLeader.bioParagraph}</p>

                <div className="istd-strip mt-3">
                  <IstdLogo size={84} />
                  <p className="text-light-custom small mb-0">{kmasLeader.chairmanLine}</p>
                </div>

                <Link href="/leadership" className="btn-secondary-custom mt-4">
                  Meet the Team <i className="bi bi-arrow-right" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactCtaBand />
    </>
  );
}
