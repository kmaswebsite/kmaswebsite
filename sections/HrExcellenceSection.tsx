import { kmasHrExcellence } from "@/lib/content/kmas";

const cards = [
  { icon: "bi bi-person-up", text: kmasHrExcellence.paragraph1 },
  { icon: "bi bi-mortarboard", text: kmasHrExcellence.paragraph2 },
  { icon: "bi bi-people", text: kmasHrExcellence.paragraph3 },
];

export default function HrExcellenceSection() {
  return (
    <section className="section">
      <div className="container-custom">
        <div className="text-center mx-auto mb-4 fade-up" style={{ maxWidth: 720 }}>
          <span className="eyebrow d-block">HR Excellence</span>
          <h2 className="section-title mb-0">Identifying and Nurturing Talent</h2>
        </div>

        <div className="row g-3 g-lg-4 stagger-fade">
          {cards.map((card, index) => (
            <div className="col-md-4" key={card.icon}>
              <div className="excel-card">
                <span className={`icon-tile ${index === 1 ? "icon-tile-accent" : ""}`}>
                  <i className={card.icon} aria-hidden="true" />
                </span>
                <p>{card.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
