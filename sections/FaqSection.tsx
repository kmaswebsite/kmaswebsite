"use client";

import Link from "next/link";
import Accordion from "@/components/ui/Accordion";
import { faqs as defaultFaqs } from "@/lib/content/faqs";
import { useEditableContent } from "@/lib/editableContent";

type FaqSectionProps = {
  limit?: number;
};

export default function FaqSection({ limit }: FaqSectionProps) {
  const faqs = useEditableContent("faqs", defaultFaqs);
  const items = limit ? faqs.slice(0, limit) : faqs;

  return (
    <section className="section section-bg-alt">
      <div className="container-custom">
        <div className="row gy-4 align-items-start">
          <div className="col-lg-4">
            <span className="eyebrow d-block">FAQ</span>
            <h2 className="section-title">Frequently asked questions</h2>
            <p className="text-light-custom mb-4">
              Can't find the answer you're looking for? Reach out and a member of our team will get
              back to you within one business day.
            </p>

            <div className="faq-cta">
              <div className="faq-cta-icon">
                <i className="bi bi-headset" aria-hidden="true" />
              </div>
              <h3 className="h6 mb-2 text-white">Still have questions?</h3>
              <p className="small mb-3">
                Talk to our team about your organization's specific needs.
              </p>
              <Link href="/contact" className="faq-cta-link">
                Contact Us <i className="bi bi-arrow-right ms-1" />
              </Link>
            </div>
          </div>

          <div className="col-lg-8">
            <Accordion items={items} />
          </div>
        </div>
      </div>
    </section>
  );
}
