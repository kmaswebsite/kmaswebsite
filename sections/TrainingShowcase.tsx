import Link from "next/link";
import SiteImage from "@/components/ui/SiteImage";
import SectionHeader from "@/components/ui/SectionHeader";
import Badge from "@/components/ui/Badge";
import { courseCategories, featuredPrograms, trainerHighlights } from "@/lib/content/trainingPrograms";
import { toneFor } from "@/lib/utils";

// Ordered to match trainerHighlights genders: Alina Ferreira (F), Marcus Chen (M), Priya Nathan (F)
const trainerPhotos = ["/images/trainer-2.jpg", "/images/trainer-1.jpg", "/images/trainer-3.jpg"];

type TrainingShowcaseProps = {
  showTrainers?: boolean;
};

export default function TrainingShowcase({ showTrainers = true }: TrainingShowcaseProps) {
  return (
    <section className="section">
      <div className="container-custom">
        <SectionHeader
          eyebrow="Training Programs"
          title="A flagship training catalog built for every stage of growth"
          subtitle="Explore our course categories and featured programs — delivered online, in-person, or hybrid."
        />

        <div className="row g-4 mb-5 stagger-fade">
          {courseCategories.map((category, index) => {
            const tone = toneFor(index);
            return (
              <div className="col-sm-6 col-lg-4" key={category.title}>
                <div className={`card-custom hover-lift icon-card tone-${tone} h-100`}>
                  <div className={`icon-badge icon-badge-${tone}`}>
                    <i className={category.icon} aria-hidden="true" />
                  </div>
                  <div className="icon-card-underline" aria-hidden="true" />
                  <h3 className="h6 mb-2">{category.title}</h3>
                  <p className="text-light-custom small mb-0">{category.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        <h3 className="h4 mb-4">Featured Programs</h3>
        <div className="row g-4 mb-5 stagger-fade">
          {featuredPrograms.map((program) => (
            <div className="col-md-6 col-lg-4" key={program.title}>
              <div className="card-custom hover-lift h-100 d-flex flex-column">
                <Badge>{program.category}</Badge>
                <h4 className="h6 mt-3 mb-2">{program.title}</h4>
                <p className="text-light-custom small mb-3">{program.description}</p>
                <ul className="list-unstyled small text-light-custom mt-auto mb-0 d-flex flex-column gap-1">
                  <li><i className="bi bi-bar-chart me-2" />{program.level}</li>
                  <li><i className="bi bi-laptop me-2" />{program.format}</li>
                  <li><i className="bi bi-clock me-2" />{program.duration}</li>
                </ul>
              </div>
            </div>
          ))}
        </div>

        {showTrainers && (
          <>
            <h3 className="h4 mb-4">Trainer Highlights</h3>
            <div className="row g-4 mb-5 stagger-fade">
              {trainerHighlights.map((trainer, index) => (
                <div className="col-md-4" key={trainer.name}>
                  <div className="card-custom hover-lift h-100 text-center">
                    <div className="position-relative img-zoom img-zoom-circle mx-auto mb-3" style={{ width: 88, height: 88 }}>
                      <SiteImage path={trainerPhotos[index % trainerPhotos.length]} alt={trainer.name} />
                    </div>
                    <h4 className="h6 mb-1">{trainer.name}</h4>
                    <p className="text-accent small mb-2">{trainer.title}</p>
                    <p className="text-light-custom small mb-0">{trainer.expertise}</p>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        <div className="text-center">
          <Link href="/contact" className="btn-primary-custom">
            Enquire About Training <i className="bi bi-arrow-right" />
          </Link>
        </div>
      </div>
    </section>
  );
}
