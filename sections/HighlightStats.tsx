import { toneFor } from "@/lib/utils";

const highlights = [
  { icon: "bi bi-calendar3", value: "18+", label: "Years of Experience" },
  { icon: "bi bi-people", value: "500+", label: "Clients Served" },
  { icon: "bi bi-clock-history", value: "100K+", label: "Training Hours Delivered" },
  { icon: "bi bi-person-badge", value: "60+", label: "Industry Experts" },
];

export default function HighlightStats() {
  return (
    <section className="section-tight section-bg-alt">
      <div className="container-custom">
        <div className="row g-3 stagger-fade">
          {highlights.map((item, index) => {
            const tone = toneFor(index);
            return (
              <div className="col-sm-6 col-lg-3" key={item.label}>
                <div className={`card-custom card-compact hover-lift icon-card tone-${tone} h-100 d-flex align-items-center gap-3`}>
                  <div className={`icon-badge icon-badge-${tone} mb-0`}>
                    <i className={item.icon} aria-hidden="true" />
                  </div>
                  <div>
                    <div style={{ fontFamily: "var(--font-display)", fontSize: "1.5rem", fontWeight: 600, color: "var(--color-ink)", lineHeight: 1.1 }}>
                      {item.value}
                    </div>
                    <p className="text-light-custom small mb-0">{item.label}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
