import KmasHero from "@/sections/KmasHero";
import AboutSection from "@/sections/AboutSection";
import WhyChooseUs from "@/sections/WhyChooseUs";
import ServicesGrid from "@/sections/ServicesGrid";
import LeadershipHighlight from "@/sections/LeadershipHighlight";
import VisionMissionPreview from "@/sections/VisionMissionPreview";
import HrExcellenceSection from "@/sections/HrExcellenceSection";
import ContactCtaBand from "@/sections/ContactCtaBand";
import SectionCurve from "@/components/ui/SectionCurve";

export default function Home() {
  return (
    <>
      <KmasHero />
      <SectionCurve fill="var(--color-section-bg)" />
      <AboutSection />
      <WhyChooseUs />

      <ServicesGrid limit={6} ctaHref="/services" bgAlt />

      <LeadershipHighlight />
      <VisionMissionPreview />
      <HrExcellenceSection />

      <ContactCtaBand />
    </>
  );
}
