import Link from "next/link";
import SiteImage from "@/components/ui/SiteImage";
import { kmasLeader } from "@/lib/content/kmas";

export default function LeadershipHighlight() {
  return (
    <section className="section">
      <div className="container-custom">
        <div className="leader-panel fade-up">
          <div className="row align-items-center gy-4 gx-lg-5 position-relative" style={{ zIndex: 1 }}>
            <div className="col-md-5 col-lg-4">
              <div className="position-relative img-zoom mx-auto" style={{ aspectRatio: "4 / 5", maxWidth: 340 }}>
                <SiteImage path="/images/ramakrishnan-mohan.jpg" alt={kmasLeader.name} />
              </div>
            </div>

            <div className="col-md-7 col-lg-8">
              <span className="eyebrow-inverted d-block">Leadership</span>
              <h2 className="section-title mb-1">{kmasLeader.name}</h2>
              <p className="leader-role mb-3">{kmasLeader.title}</p>
              <p className="text-light-custom mb-4">
                {kmasLeader.bioParagraph.split(". ").slice(0, 2).join(". ")}.
              </p>
              <Link href="/leadership" className="btn-primary-custom">
                View Full Leadership Profile <i className="bi bi-arrow-right" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
