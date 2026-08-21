import Link from "next/link";
import SiteImage from "@/components/ui/SiteImage";
import { kmasLeader } from "@/lib/content/kmas";

export default function LeadershipHighlight() {
  return (
    <section className="section">
      <div className="container-custom">
        <div className="row align-items-center gy-5">
          <div className="col-lg-5 fade-up">
            <div className="position-relative img-zoom" style={{ aspectRatio: "4 / 5", maxWidth: 420 }}>
              <SiteImage path="/images/trainer-1.jpg" alt={kmasLeader.name} />
            </div>
          </div>

          <div className="col-lg-7 fade-up delay-1">
            <span className="eyebrow d-block">Leadership</span>
            <h2 className="section-title mb-1">{kmasLeader.name}</h2>
            <p className="text-light-custom fw-semibold mb-3">{kmasLeader.title}</p>
            <p className="text-light-custom mb-4">
              {kmasLeader.bioParagraph.split(". ").slice(0, 2).join(". ")}.
            </p>
            <Link href="/leadership" className="btn-primary-custom">
              View Full Leadership Profile <i className="bi bi-arrow-right ms-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
