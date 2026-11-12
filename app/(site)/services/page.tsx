import type { Metadata } from "next";
import PageBanner from "@/layouts/PageBanner";
import ContactCtaBand from "@/sections/ContactCtaBand";
import ServicesGrid from "@/sections/ServicesGrid";
import { kmasServicesIntro } from "@/lib/content/kmas";

export const metadata: Metadata = {
  title: "Services",
  description: "KMAS Services — HR Management, HR Development, HR Audit, and more.",
};

export default function ServicesPage() {
  return (
    <>
      <PageBanner
        bannerKey="services"
        eyebrow="KMAS Services"
        title="Our Services"
        icon="bi bi-briefcase"
        tone="primary"
        image="/images/banner-people.jpg"
      />
      <section className="section pb-0">
        <div className="container-custom">
          <p className="text-light-custom text-center mx-auto" style={{ maxWidth: 760 }}>
            {kmasServicesIntro}
          </p>
        </div>
      </section>
      <ServicesGrid showHeader={false} />

      <ContactCtaBand />
    </>
  );
}
