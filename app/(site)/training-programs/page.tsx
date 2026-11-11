import type { Metadata } from "next";
import PageBanner from "@/layouts/PageBanner";
import PageIntro from "@/components/ui/PageIntro";
import SiteImage from "@/components/ui/SiteImage";
import ContactCtaBand from "@/sections/ContactCtaBand";
import { courseCategories, featuredPrograms, trainerHighlights } from "@/lib/content/trainingPrograms";
import { kmasTeam } from "@/lib/content/kmas";

export const metadata: Metadata = {
  title: "Training Programs",
  description: "Leadership, soft skills, supervisory, compliance and future-ready training programs from KMAS.",
};

const trainerPhotos: Record<string, string> = {
  "Ramakrishnan Mohan": "/images/ramakrishnan-mohan.jpg",
  ...Object.fromEntries(kmasTeam.map((member) => [member.name, member.photo])),
};

export default function TrainingProgramsPage() {
  return (
    <>
      <PageBanner
        bannerKey="training-programs"
        eyebrow="Training Programs"
        title="Training Programs"
        subtitle="Customised programs for high-performance employees and future-ready young minds."
        icon="bi bi-mortarboard"
        image="/images/banner-training.jpg"
      />

      <section className="section">
        <div className="container-custom">
          <PageIntro
            eyebrow="Program Areas"
            title="Learning that improves performance"
            paragraphs={[
              "Every KMAS program is customised to the organisation, the role and the participants — using proven tools with specialised interpretations, and delivered by facilitators with deep industry experience.",
            ]}
          />

          <div className="row g-3 g-lg-4 stagger-fade">
            {courseCategories.map((category, index) => (
              <div className="col-sm-6 col-lg-4" key={category.title}>
                <div className="info-card">
                  <span className={`icon-tile ${index % 2 ? "icon-tile-accent" : ""}`}>
                    <i className={category.icon} aria-hidden="true" />
                  </span>
                  <h3>{category.title}</h3>
                  <p>{category.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-bg-alt">
        <div className="container-custom">
          <PageIntro
            eyebrow="Featured Programs"
            title="Programs organisations ask for"
            paragraphs={["Duration and format are tailored to each organisation’s needs."]}
          />

          <div className="row g-3 g-lg-4 stagger-fade">
            {featuredPrograms.map((program) => (
              <div className="col-md-6 col-lg-4" key={program.title}>
                <div className="info-card">
                  <span className="meta-chip">{program.category}</span>
                  <h3>{program.title}</h3>
                  <p>{program.description}</p>
                  <div className="meta-chips">
                    <span className="meta-chip"><i className="bi bi-people me-1" />{program.level}</span>
                    <span className="meta-chip"><i className="bi bi-easel me-1" />{program.format}</span>
                    <span className="meta-chip"><i className="bi bi-clock me-1" />{program.duration}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-custom">
          <PageIntro eyebrow="Facilitators" title="Learn from experienced practitioners" paragraphs={[]} />

          <div className="row g-3 g-lg-4 stagger-fade">
            {trainerHighlights.map((trainer) => (
              <div className="col-md-4" key={trainer.name}>
                <div className="info-card d-flex gap-3 align-items-start">
                  <div className="profile-photo flex-shrink-0" style={{ width: 84, borderRadius: 14 }}>
                    <SiteImage path={trainerPhotos[trainer.name] ?? "/images/ramakrishnan-mohan.jpg"} alt={trainer.name} />
                  </div>
                  <div>
                    <h3 className="mt-0">{trainer.name}</h3>
                    <p className="small fw-semibold mb-2" style={{ color: "var(--color-primary)" }}>{trainer.title}</p>
                    <p className="small">{trainer.expertise}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactCtaBand />
    </>
  );
}
