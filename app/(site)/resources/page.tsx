import type { Metadata } from "next";
import PageBanner from "@/layouts/PageBanner";
import PageIntro from "@/components/ui/PageIntro";
import Accordion from "@/components/ui/Accordion";
import ContactCtaBand from "@/sections/ContactCtaBand";
import { resources } from "@/lib/content/resources";
import { faqs } from "@/lib/content/faqs";

export const metadata: Metadata = {
  title: "Resources",
  description: "Practical HR guides, checklists and FAQs from Krishna's Management Advisory & Services (KMAS).",
};

export default function ResourcesPage() {
  return (
    <>
      <PageBanner
        bannerKey="resources"
        eyebrow="Resources"
        title="HR Resources"
        subtitle="Practical guides and checklists for better people practices."
        icon="bi bi-file-earmark-text"
        image="/images/banner-strategy.jpg"
      />

      <section className="section">
        <div className="container-custom">
          <PageIntro
            eyebrow="Guides & Checklists"
            title="Practical HR know-how"
            paragraphs={["Quick, practical references drawn from KMAS’s experience across the entire gamut of HR."]}
          />

          <div className="row g-3 g-lg-4 stagger-fade">
            {resources.map((resource, index) => (
              <div className="col-md-6 col-lg-4" key={resource.title}>
                <div className="info-card">
                  <div className="d-flex justify-content-between align-items-start">
                    <span className={`icon-tile ${index % 2 ? "icon-tile-accent" : ""}`}>
                      <i className={resource.icon} aria-hidden="true" />
                    </span>
                    <span className="meta-chip">{resource.type}</span>
                  </div>
                  <h3>{resource.title}</h3>
                  <p>{resource.description}</p>
                  {resource.points && (
                    <ul className="check-list">
                      {resource.points.map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-bg-alt">
        <div className="container-custom">
          <div className="row gy-4 gx-lg-5">
            <div className="col-lg-4">
              <span className="eyebrow d-block">FAQs</span>
              <h2 className="section-title">Frequently asked questions</h2>
              <p className="text-light-custom mb-0">Answers to common questions about working with KMAS.</p>
            </div>
            <div className="col-lg-8">
              <Accordion items={faqs} id="resourcesFaq" />
            </div>
          </div>
        </div>
      </section>

      <ContactCtaBand />
    </>
  );
}
