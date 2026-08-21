import Link from "next/link";
import SiteImage from "@/components/ui/SiteImage";
import { kmasAbout } from "@/lib/content/kmas";

export default function AboutSection() {
  return (
    <section className="section section-bg-alt">
      <div className="container-custom">
        <div className="row align-items-center gy-5">
          <div className="col-lg-6 fade-up">
            <div className="position-relative img-zoom" style={{ aspectRatio: "5 / 4" }}>
              <SiteImage path="/images/about-team.jpg" alt="KMAS management advisory team" />
            </div>
          </div>

          <div className="col-lg-6 fade-up delay-1">
            <span className="eyebrow d-block">About KMAS</span>
            <h2 className="section-title">Krishna&rsquo;s Management Advisory &amp; Services</h2>
            <p className="text-light-custom mb-4">{kmasAbout.aboutParagraph}</p>
            <Link href="/about-hrd" className="btn-secondary-custom">
              Read More <i className="bi bi-arrow-right ms-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
