import KmasHero from "@/sections/KmasHero";
import AboutSection from "@/sections/AboutSection";
import WhyChooseUs from "@/sections/WhyChooseUs";
import ServicesGrid from "@/sections/ServicesGrid";
import LeadershipHighlight from "@/sections/LeadershipHighlight";
import HrExcellenceSection from "@/sections/HrExcellenceSection";
import ContactCtaBand from "@/sections/ContactCtaBand";

export default function Home() {
  return (
    <>
      <KmasHero />
      <AboutSection />
      <WhyChooseUs />

      <ServicesGrid limit={6} ctaHref="/services" />

      <LeadershipHighlight />
      <HrExcellenceSection />

      <ContactCtaBand />
    </>
  );
}
