import type { Metadata } from "next";
import PageBanner from "@/layouts/PageBanner";
import PageIntro from "@/components/ui/PageIntro";
import SolutionsGrid from "@/sections/SolutionsGrid";
import ContactCtaBand from "@/sections/ContactCtaBand";

export const metadata: Metadata = {
  title: "Solutions",
  description: "HR solutions from Krishna's Management Advisory & Services (KMAS).",
};

export default function SolutionsPage() {
  return (
    <>
      <PageBanner
        bannerKey="solutions"
        eyebrow="Solutions"
        title="HR Solutions"
        subtitle="Practical people solutions, designed and implemented hand-in-hand with you."
        icon="bi bi-gear"
        image="/images/banner-industry.jpg"
      />

      <section className="section pb-0">
        <div className="container-custom">
          <PageIntro
            eyebrow="What We Implement"
            title="Solutions that work on the ground"
            paragraphs={[
              "KMAS does not stop at recommendations. Each solution is designed around your organisation and implemented with hand-holding, so that it delivers results and sustains after we step back.",
            ]}
          />
        </div>
      </section>

      <SolutionsGrid showHeader={false} />

      <ContactCtaBand />
    </>
  );
}
