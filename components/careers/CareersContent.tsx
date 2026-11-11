"use client";

import Link from "next/link";
import PageBanner from "@/layouts/PageBanner";
import PageIntro from "@/components/ui/PageIntro";
import ContactCtaBand from "@/sections/ContactCtaBand";
import { benefits as defaultBenefits, openRoles as defaultOpenRoles, associationAreas } from "@/lib/content/careers";
import { useEditableContent } from "@/lib/editableContent";
import { useSiteContent } from "@/lib/siteContent";

export default function CareersContent() {
  const benefits = useEditableContent("careers-benefits", defaultBenefits);
  const roles = useEditableContent("careers-roles", defaultOpenRoles);
  const { company } = useSiteContent();

  return (
    <>
      <PageBanner
        bannerKey="careers"
        eyebrow="Careers"
        title="Work with KMAS"
        subtitle="Join a team that builds people performance across organisations."
        icon="bi bi-person-badge"
        image="/images/banner-people.jpg"
      />

      <section className="section">
        <div className="container-custom">
          <PageIntro
            eyebrow="Why KMAS"
            title="Grow with experienced HR practitioners"
            paragraphs={[
              "KMAS brings together HR professionals, advisors and trainers who are passionate about people performance. If you share that passion, we would like to hear from you.",
            ]}
          />

          <div className="row g-3 g-lg-4 stagger-fade">
            {benefits.map((benefit, index) => (
              <div className="col-sm-6 col-lg-3" key={benefit.title}>
                <div className="info-card">
                  <span className={`icon-tile ${index % 2 ? "icon-tile-accent" : ""}`}>
                    <i className={benefit.icon} aria-hidden="true" />
                  </span>
                  <h3>{benefit.title}</h3>
                  <p>{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-bg-alt">
        <div className="container-custom">
          <PageIntro
            eyebrow="Associate With Us"
            title="Who we work with"
            paragraphs={["KMAS associates with experienced professionals in the following areas."]}
          />

          <div className="row g-3 g-lg-4 stagger-fade">
            {associationAreas.map((area, index) => (
              <div className="col-md-4" key={area.title}>
                <div className="info-card">
                  <span className={`icon-tile ${index % 2 ? "icon-tile-accent" : ""}`}>
                    <i className={area.icon} aria-hidden="true" />
                  </span>
                  <h3>{area.title}</h3>
                  <p>{area.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-custom">
          <div className="profile-card">
            <div className="row gy-4 align-items-center">
              <div className="col-lg-7">
                <span className="eyebrow d-block">Current Openings</span>
                {roles.length > 0 ? (
                  <ul className="step-list mt-2">
                    {roles.map((role) => (
                        <li className="justify-content-between flex-wrap" key={role.title}>
                          <span className="fw-semibold">{role.title}</span>
                          <span className="text-light-custom small">
                            {role.department} · {role.location} · {role.type}
                          </span>
                        </li>
                    ))}
                  </ul>
                ) : (
                  <>
                    <h2 className="h4 mb-2">Share your profile with us</h2>
                    <p className="text-light-custom mb-0">
                      There are no open positions listed right now. Experienced professionals interested in associating with KMAS are welcome to send their profile by email.
                    </p>
                  </>
                )}
              </div>
              <div className="col-lg-5 text-lg-end">
                <a href={`mailto:${company.email}?subject=Profile%20for%20KMAS`} className="btn-primary-custom">
                  <i className="bi bi-envelope" /> {company.email}
                </a>
                <div className="mt-3">
                  <Link href="/contact" className="small fw-semibold">
                    Or use the contact form <i className="bi bi-arrow-right" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactCtaBand />
    </>
  );
}
