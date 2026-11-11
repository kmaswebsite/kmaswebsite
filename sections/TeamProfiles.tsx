import SiteImage from "@/components/ui/SiteImage";
import { kmasTeam } from "@/lib/content/kmas";

export default function TeamProfiles() {
  return (
    <section className="section section-bg-alt" id="team">
      <div className="container-custom">
        <span className="eyebrow d-block">Our Team</span>
        <h2 className="section-title mb-4">Consultants</h2>

        <div className="team-grid">
          {kmasTeam.map((member) => (
            <article key={member.id} id={member.id} className="team-card fade-up">
              <div className="profile-photo">
                <SiteImage path={member.photo} alt={member.name} />
              </div>
              <div>
                <h3 className="profile-name">{member.name}</h3>
                <span className="profile-role">{member.title}</span>
                {member.paragraphs.map((paragraph, index) => (
                  <p key={index} className={index === member.paragraphs.length - 1 ? "mb-0" : ""}>
                    {paragraph}
                  </p>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
