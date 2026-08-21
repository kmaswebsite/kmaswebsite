"use client";

import Link from "next/link";
import { useSiteContent } from "@/lib/siteContent";

export default function ContactCtaBand() {
  const { company } = useSiteContent();

  return (
    <section className="cta-band">
      <div className="container-custom position-relative">
        <div className="row align-items-center gy-4">
          <div className="col-lg-7 fade-up">
            <span className="eyebrow d-block">Get In Touch</span>
            <h2 className="cta-band-title">Speak With Our Team</h2>
            <p className="cta-band-subtitle">
              Reach out to Krishna&rsquo;s Management Advisory &amp; Services for HR
              management, HR development, and management advisory support.
            </p>
          </div>

          <div className="col-lg-5 fade-up delay-1">
            <div className="d-flex flex-column flex-sm-row gap-3 justify-content-lg-end mb-4">
              <a href={`tel:${company.phone.replace(/\s+/g, "")}`} className="cta-band-contact">
                <i className="bi bi-telephone" aria-hidden="true" /> {company.phone}
              </a>
              <a href={`mailto:${company.email}`} className="cta-band-contact">
                <i className="bi bi-envelope" aria-hidden="true" /> {company.email}
              </a>
            </div>
            <div className="text-sm-end">
              <Link href="/contact" className="btn-accent-custom">
                Contact Us <i className="bi bi-arrow-right ms-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
