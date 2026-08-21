import SectionHeader from "@/components/ui/SectionHeader";
import IconCard from "@/components/ui/IconCard";
import { toneFor } from "@/lib/utils";

const steps = [
  { icon: "bi bi-people", title: "Understand Client", description: "We start by learning your business, culture, and the outcomes leadership actually cares about." },
  { icon: "bi bi-search", title: "Analyze Needs", description: "Diagnostics across workforce data, policies, and stakeholder interviews to find the real gaps." },
  { icon: "bi bi-diagram-3", title: "Build Strategy", description: "A clear, phased roadmap with defined owners, milestones, and success metrics." },
  { icon: "bi bi-box-seam", title: "Deliver Solution", description: "Implementation support for the systems, policies, and programs the strategy calls for." },
  { icon: "bi bi-mortarboard", title: "Training", description: "Capability-building for the teams who will own the new ways of working." },
  { icon: "bi bi-arrow-repeat", title: "Continuous Improvement", description: "Ongoing measurement and refinement so results compound rather than fade." },
];

export default function ProcessSteps() {
  return (
    <section className="section section-bg-alt">
      <div className="container-custom">
        <SectionHeader
          eyebrow="Our Process"
          title="A proven six-step delivery model"
          subtitle="The same disciplined sequence behind every engagement, from a first conversation to measurable, lasting change."
        />
        <div className="row g-4 stagger-fade">
          {steps.map((step, index) => (
            <div className="col-sm-6 col-lg-4" key={step.title}>
              <IconCard
                icon={step.icon}
                title={step.title}
                description={step.description}
                tone={toneFor(index)}
                number={index + 1}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
