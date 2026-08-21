import { kmasMission, kmasVision } from "@/lib/content/kmas";

export default function VisionMissionPreview() {
  return (
    <section className="section section-bg-alt">
      <div className="container-custom">
        <div className="row g-4 stagger-fade">
          <div className="col-md-6">
            <div className="card-custom hover-lift icon-card tone-primary h-100">
              <div className="icon-badge icon-badge-primary">
                <i className="bi bi-eye" aria-hidden="true" />
              </div>
              <div className="icon-card-underline" aria-hidden="true" />
              <h3 className="h5 mb-2">Vision</h3>
              <p className="text-light-custom mb-0">{kmasVision}</p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card-custom hover-lift icon-card tone-primary h-100">
              <div className="icon-badge icon-badge-accent">
                <i className="bi bi-bullseye" aria-hidden="true" />
              </div>
              <div className="icon-card-underline" aria-hidden="true" />
              <h3 className="h5 mb-2">Mission</h3>
              <p className="text-light-custom mb-0">&ldquo;{kmasMission}&rdquo;</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
