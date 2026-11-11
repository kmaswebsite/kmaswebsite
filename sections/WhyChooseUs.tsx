import { kmasWhyChoose } from "@/lib/content/kmas";

export default function WhyChooseUs() {
  return (
    <section className="section why-dark">
      <div className="container-custom position-relative">
        <div className="row gy-4 gx-lg-5">
          <div className="col-lg-4">
            <div className="why-dark-head">
              <span className="eyebrow-inverted d-block">Why Choose KMAS</span>
              <h2 className="section-title mb-0">Building culture with ethos and continuous learning</h2>
            </div>
          </div>

          <div className="col-lg-8">
            <div className="row gx-4 gy-0 stagger-fade">
              {kmasWhyChoose.map((reason, index) => (
                <div className="col-sm-6" key={reason.title}>
                  <article className="why-item">
                    <div className="why-item-top">
                      <span className="why-item-number" aria-hidden="true">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <i className={`${reason.icon} why-item-icon`} aria-hidden="true" />
                    </div>
                    <h3 className="why-item-title">{reason.title}</h3>
                    <p className="why-item-text">{reason.description}</p>
                  </article>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
