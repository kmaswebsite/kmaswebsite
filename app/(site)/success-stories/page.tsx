import type { Metadata } from "next";
import Link from "next/link";
import PageBanner from "@/layouts/PageBanner";
import PageIntro from "@/components/ui/PageIntro";
import ContactCtaBand from "@/sections/ContactCtaBand";
import { caseStudies } from "@/lib/content/caseStudies";
import { kmasAbout, kmasHrExcellence, kmasIndustrySectors } from "@/lib/content/kmas";

export const metadata: Metadata = {
  title: "Success Stories",
  description: "The track record and typical engagements of Krishna's Management Advisory & Services (KMAS).",
};

const trackRecord = [
  { value: "39", label: "Years of HR experience of our Director" },
  { value: "20+", label: "Years in HR leadership positions" },
  { value: String(kmasIndustrySectors.length), label: "Sectors served" },
  { value: "200+", label: "Years of collective team experience" },
  { value: kmasAbout.founded, label: "Year KMAS was started" },
];

const achievements = [
  "Many bipartite and tripartite settlements on wages, bonus, benefits and service conditions",
  "Discipline and disputes management resulting in reduced indiscipline & litigation and enhanced industrial peace",
  "Training, mentoring and coaching middle and senior management to become ‘Change Agents’",
  "Assessing and training up to senior management and leadership levels",
  "Helping organisations become statutorily compliant and guiding them as a third eye",
  "Reaching out to young minds in schools and colleges to make them future-ready",
];

export default function SuccessStoriesPage() {
  return (
    <>
      <PageBanner
        bannerKey="success-stories"
        eyebrow="Success Stories"
        title="Our Track Record"
        subtitle="Experience that has created results across sectors and generations."
        icon="bi bi-trophy"
        image="/images/banner-success.jpg"
      />

      <section className="section">
        <div className="container-custom">
          <PageIntro
            eyebrow="Proven Experience"
            title="Results built over decades"
            paragraphs={[kmasHrExcellence.paragraph3]}
          />

          <div className="stat-strip stagger-fade">
            {trackRecord.map((stat) => (
              <div className="stat-box" key={stat.label}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-bg-alt">
        <div className="container-custom">
          <div className="row gy-4 gx-lg-5">
            <div className="col-lg-5">
              <span className="eyebrow d-block">What We Have Achieved</span>
              <h2 className="section-title">Where KMAS has made a difference</h2>
              <p className="text-light-custom mb-0">
                The KMAS team has handled challenges and created opportunities across the entire gamut of HR.
              </p>
            </div>
            <div className="col-lg-7">
              <div className="detail-card">
                <ul className="check-list" style={{ gridTemplateColumns: "1fr" }}>
                  {achievements.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-custom">
          <PageIntro
            eyebrow="Typical Engagements"
            title="How KMAS helps organisations"
            paragraphs={["Examples of the situations KMAS is regularly engaged to handle."]}
          />

          <div className="row g-3 g-lg-4 stagger-fade">
            {caseStudies.map((item, index) => (
              <div className="col-md-6" key={item.slug}>
                <Link href={`/success-stories/${item.slug}`} className="service-card text-reset text-decoration-none">
                  <span className={`icon-tile ${index % 2 ? "icon-tile-accent" : ""}`}>
                    <i className="bi bi-trophy" aria-hidden="true" />
                  </span>
                  <span className="meta-chip align-self-start">{item.industry}</span>
                  <h3>{item.client}</h3>
                  <p>{item.problem}</p>
                  <span className="service-card-link">
                    Read More <i className="bi bi-arrow-right" aria-hidden="true" />
                  </span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactCtaBand />
    </>
  );
}
