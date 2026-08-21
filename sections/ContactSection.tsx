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
              <div>
                <i className="bi bi-geo-alt text-accent me-2" />
                {company.address}
              </div>
              <div>
                <i className="bi bi-telephone text-accent me-2" />
                {company.phone}
              </div>
              <div>
                <i className="bi bi-envelope text-accent me-2" />
                {company.email}
              </div>
              <div>
                <i className="bi bi-clock text-accent me-2" />
                {company.hours}
              </div>
              <div
                className="mt-2 position-relative overflow-hidden"
                style={{
                  height: 220,
                  borderRadius: "var(--radius-sm)",
                  border: "1px solid var(--color-border)",
                }}
              >
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
                className="small fw-semibold text-accent"
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
