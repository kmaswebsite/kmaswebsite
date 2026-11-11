import type { Metadata } from "next";
import SiteImage from "@/components/ui/SiteImage";
import PageBanner from "@/layouts/PageBanner";
import IstdLogo from "@/components/ui/IstdLogo";
import TeamProfiles from "@/sections/TeamProfiles";
import VisionMission from "@/sections/VisionMission";
import { kmasIndustrySectors, kmasLeader } from "@/lib/content/kmas";

export const metadata: Metadata = {
  title: "Leadership & Team",
  description: "Ramakrishnan Mohan, Director & Managing Partner, and the consultants of Krishna's Management Advisory & Services (KMAS).",
};

export default function LeadershipPage() {
  return (
    <>
      <PageBanner
        bannerKey="leadership"
        eyebrow="Leadership"
        title={kmasLeader.name}
        subtitle={kmasLeader.title}
        icon="bi bi-person-badge"
        tone="primary"
        image="/images/banner-people.jpg"
      />

      <section className="section">
        <div className="container-custom">
          <div className="profile-card fade-up">
            <div className="row gy-4 gx-lg-5 align-items-start">
              <div className="col-md-4 col-lg-3">
                <div className="profile-photo">
                  <SiteImage path="/images/ramakrishnan-mohan.jpg" alt={kmasLeader.name} />
                </div>
              </div>

              <div className="col-md-8 col-lg-9">
                <span className="eyebrow d-block">Profile</span>
                <h2 className="profile-name">{kmasLeader.name}</h2>
                <span className="profile-role">{kmasLeader.title}</span>
                <p className="text-light-custom">{kmasLeader.bioParagraph}</p>

                <div className="istd-strip mt-3">
                  <IstdLogo size={84} />
                  <div>
                    <h3>Chairman</h3>
                    <p className="text-light-custom small mb-0">{kmasLeader.chairmanLine}</p>
                  </div>
                </div>

                <div className="mt-4">
                  <span className="eyebrow d-block">Industries Served</span>
                  <div className="d-flex flex-wrap gap-2">
                    {kmasIndustrySectors.map((sector) => (
                      <span key={sector} className="badge-custom">
                        {sector}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <TeamProfiles />

      <VisionMission />
    </>
  );
}
