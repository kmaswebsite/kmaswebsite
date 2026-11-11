"use client";

import SectionHeader from "@/components/ui/SectionHeader";
import ContactForm from "@/components/forms/ContactForm";
import { useSiteContent } from "@/lib/siteContent";

export default function ContactSection({ showHeader = true }: { showHeader?: boolean }) {
  const { company } = useSiteContent();

  return (
    <section className="section">
      <div className="container-custom">
        {showHeader && (
          <SectionHeader eyebrow="Contact" title="Let's talk about your workforce" align="left" />
        )}
        <div className="row g-4">
          <div className="col-lg-7">
            <ContactForm />
          </div>
          <div className="col-lg-5">
            <div className="card-custom h-100 d-flex flex-column gap-3">
              <div className="contact-info-item">
                <span className="icon-tile icon-tile-sm"><i className="bi bi-geo-alt" aria-hidden="true" /></span>
                <span>{company.address}</span>
              </div>
              <div className="contact-info-item">
                <span className="icon-tile icon-tile-sm icon-tile-accent"><i className="bi bi-telephone" aria-hidden="true" /></span>
                <span>{company.phone}</span>
              </div>
              <div className="contact-info-item">
                <span className="icon-tile icon-tile-sm"><i className="bi bi-envelope" aria-hidden="true" /></span>
                <span>{company.email}</span>
              </div>
              <div className="contact-info-item">
                <span className="icon-tile icon-tile-sm icon-tile-accent"><i className="bi bi-clock" aria-hidden="true" /></span>
                <span>{company.hours}</span>
              </div>
              <div className="contact-map mt-1">
                <iframe
                  title="Office location map"
                  src={`https://maps.google.com/maps?q=${encodeURIComponent(company.address)}&z=15&output=embed`}
                  width="100%"
                  height="100%"
                  style={{ border: 0, position: "absolute", inset: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(company.address)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="small fw-semibold"
              >
                Get Directions <i className="bi bi-arrow-up-right ms-1" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
