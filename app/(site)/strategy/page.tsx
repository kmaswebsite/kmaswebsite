import type { Metadata } from "next";
import PageBanner from "@/layouts/PageBanner";
import PageIntro from "@/components/ui/PageIntro";
import StrategyGrid from "@/sections/StrategyGrid";
import ContactCtaBand from "@/sections/ContactCtaBand";

export const metadata: Metadata = {
  title: "Strategy",
  description: "Strategic HR advisory from Krishna's Management Advisory & Services (KMAS).",
};

export default function StrategyPage() {
  return (
    <>
      <PageBanner
        bannerKey="strategy"
        eyebrow="Strategy"
        title="Strategic Advisory"
        subtitle="Business enhancement through people performance initiatives."
        icon="bi bi-diagram-3"
        image="/images/banner-strategy.jpg"
      />

      <section className="section pb-0">
        <div className="container-custom">
          <PageIntro
            eyebrow="Our Strategic Focus"
            title="People strategy that drives business results"
            paragraphs={[
              "KMAS offers strategic and operational advice on result-oriented business development through people performance initiatives, and hand-holds clients in successfully implementing the same.",
            ]}
          />
        </div>
      </section>

      <StrategyGrid showHeader={false} />

      <ContactCtaBand />
    </>
  );
}
