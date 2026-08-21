import { toneFor } from "@/lib/utils";
import { kmasWhyChoose } from "@/lib/content/kmas";

export default function WhyChooseUs() {
  return (
    <section className="section">
      <div className="container-custom">
        <div className="row gy-5">
          <div className="col-lg-4">
            <span className="eyebrow d-block">Why Choose KMAS</span>
            <h2 className="section-title">Building culture with ethos and continuous learning</h2>
          </div>

          <div className="col-lg-8">
            <div className="row stagger-fade">
              {kmasWhyChoose.map((reason, index) => (
                <div className="col-md-6" key={reason.title}>
                  <div className="numbered-row">
                    <div className={`icon-badge icon-badge-${toneFor(index)} mb-0`} style={{ width: 44, height: 44, fontSize: "1.15rem" }}>
                      <i className={reason.icon} aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="h6 mb-2">{reason.title}</h3>
                      <p className="text-light-custom small mb-0">{reason.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
