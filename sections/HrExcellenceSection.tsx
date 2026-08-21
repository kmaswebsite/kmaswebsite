import { kmasHrExcellence } from "@/lib/content/kmas";

export default function HrExcellenceSection() {
  return (
    <section className="section">
      <div className="container-custom">
        <div className="row justify-content-center">
          <div className="col-lg-9 text-center fade-up">
            <span className="eyebrow d-block">HR Excellence</span>
            <h2 className="section-title mb-4">Identifying and Nurturing Talent</h2>
            <p className="text-light-custom">{kmasHrExcellence.paragraph1}</p>
            <p className="text-light-custom">{kmasHrExcellence.paragraph2}</p>
            <p className="text-light-custom mb-0">{kmasHrExcellence.paragraph3}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
