import type { Metadata } from "next";
import PageBanner from "@/layouts/PageBanner";
import PageIntro from "@/components/ui/PageIntro";
import ContactCtaBand from "@/sections/ContactCtaBand";
import { industryItems } from "@/lib/content/industries";

export const metadata: Metadata = {
  title: "Industries",
  description: "Industries served by Krishna's Management Advisory & Services (KMAS).",
};

export default function IndustriesPage() {
  return (
    <>
      <PageBanner
        bannerKey="industries"
        eyebrow="Industries"
        title="Industries We Serve"
        subtitle="People expertise across sectors, from the shop floor to the boardroom."
        icon="bi bi-building"
        image="/images/banner-industry.jpg"
      />

      <section className="section">
        <div className="container-custom">
          <PageIntro
            eyebrow="Sector Experience"
            title="Understanding the people side of every sector"
            paragraphs={[
              "KMAS has served organisations across many sectors. Each sector has its own workforce, its own challenges and its own regulatory environment — and HR practices need to reflect that.",
              "Our experience across these industries helps us bring practical, proven solutions to every engagement.",
            ]}
          />

          <div className="row g-3 g-lg-4 stagger-fade">
            {industryItems.map((industry, index) => (
              <div className="col-sm-6 col-lg-4" key={industry.slug}>
                <div className="info-card">
                  <span className={`icon-tile ${index % 2 ? "icon-tile-accent" : ""}`}>
                    <i className={industry.icon} aria-hidden="true" />
                  </span>
                  <h3>{industry.title}</h3>
                  <p>{industry.description}</p>
                  {industry.focus && (
                    <div className="meta-chips">
                      {industry.focus.map((item) => (
                        <span key={item} className="meta-chip">
                          {item}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactCtaBand />
    </>
  );
}
