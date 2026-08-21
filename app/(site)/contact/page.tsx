import type { Metadata } from "next";
import PageBanner from "@/layouts/PageBanner";
import ContactSection from "@/sections/ContactSection";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with the HRD Strategy, Solutions & Services team.",
};

export default function ContactPage() {
  return (
    <>
      <PageBanner
        bannerKey="contact"
        eyebrow="Contact"
        title="Let's talk about your workforce"
        subtitle="Reach out and a member of our team will respond within one business day."
        icon="bi bi-envelope"
        tone="success"
        image="/images/banner-contact.jpg"
      />
      <ContactSection showHeader={false} />
    </>
  );
}
