import type { Metadata } from "next";
import Link from "next/link";
import PageBanner from "@/layouts/PageBanner";
import PageIntro from "@/components/ui/PageIntro";
import SiteImage from "@/components/ui/SiteImage";
import ContactCtaBand from "@/sections/ContactCtaBand";

export const metadata: Metadata = {
  title: "Corporate Learning",
  description: "Corporate learning and development from Krishna's Management Advisory & Services (KMAS).",
};

const process = [
  { icon: "bi bi-search", title: "Identify Needs", text: "Understand business goals and identify the capability gaps that matter most." },
  { icon: "bi bi-pencil-square", title: "Design", text: "Customise learning interventions using proven tools with specialised interpretations." },
  { icon: "bi bi-easel", title: "Deliver", text: "Engaging workshops, coaching and mentoring led by experienced practitioners." },
  { icon: "bi bi-clipboard-data", title: "Evaluate", text: "Transparent learning and performance evaluation using objective tools." },
  { icon: "bi bi-arrow-repeat", title: "Sustain", text: "Identify and nurture internal talent to carry the learning forward." },
];

const offerings = [
  "Training needs identification linked to business goals",
  "Leadership development and Change Agent programs",
  "Coaching & mentoring for senior positions",
  "Soft skills and competency enhancement",
  "Induction training and orientation programs",
  "Sales capability building and sales academies",
  "LMS-based learning ecosystems",
  "Evaluation of learning effectiveness",
];

export default function CorporateLearningPage() {
  return (
    <>
      <PageBanner
        bannerKey="corporate-learning"
        eyebrow="Corporate Learning"
        title="Corporate Learning"
        subtitle="Building a culture of continuous learning and high performance."
        icon="bi bi-building"
        image="/images/banner-training.jpg"
      />

      <section className="section">
        <div className="container-custom">
          <div className="row gy-5 gx-lg-5 align-items-center">
            <div className="col-lg-6">
              <PageIntro
                eyebrow="Learning & Development"
                title="Learning linked to business results"
                paragraphs={[
                  "Human Resources ‘Development’ takes care of the employee’s performance enhancement for better business results. KMAS designs corporate learning that is tied to what the business needs — not training for its own sake.",
                  "From identifying needs to sustaining the learning through internal talent, we stay involved across the full cycle.",
                ]}
              />
              <Link href="/training-programs" className="btn-secondary-custom">
                View Training Programs <i className="bi bi-arrow-right" />
              </Link>
            </div>
            <div className="col-lg-6">
              <div className="about-media">
                <div className="position-relative img-zoom" style={{ aspectRatio: "4 / 3" }}>
                  <SiteImage path="/images/banner-training.jpg" alt="KMAS corporate learning session" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-bg-alt">
        <div className="container-custom">
          <PageIntro eyebrow="Our Approach" title="The KMAS learning cycle" paragraphs={[]} center />
          <div className="row g-3 stagger-fade">
            {process.map((step, index) => (
              <div className="col-sm-6 col-lg" key={step.title}>
                <div className="info-card">
                  <div className="d-flex justify-content-between align-items-center">
                    <span className={`icon-tile ${index % 2 ? "icon-tile-accent" : ""}`}>
                      <i className={step.icon} aria-hidden="true" />
                    </span>
                    <span className="step-list-num fs-4">{String(index + 1).padStart(2, "0")}</span>
                  </div>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-custom">
          <div className="row gy-4 gx-lg-5">
            <div className="col-lg-5">
              <span className="eyebrow d-block">What We Offer</span>
              <h2 className="section-title mb-0">Corporate learning solutions</h2>
            </div>
            <div className="col-lg-7">
              <div className="detail-card">
                <ul className="check-list check-list-2col">
                  {offerings.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactCtaBand />
    </>
  );
}
