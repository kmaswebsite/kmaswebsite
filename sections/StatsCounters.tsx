import SiteImage from "@/components/ui/SiteImage";
import StatCounter from "@/components/ui/StatCounter";

const stats = [
  { value: 500, suffix: "+", label: "Corporate Clients" },
  { value: 1500, suffix: "+", label: "Training Programs Delivered" },
  { value: 100000, suffix: "+", label: "Professionals Trained" },
  { value: 95, suffix: "%", label: "Client Satisfaction" },
];

export default function StatsCounters() {
  return (
    <section className="section stats-counters-inverted stats-section-photo">
      <SiteImage path="/images/about-team.jpg" alt="" className="stats-section-photo-img" />
      <div className="stats-section-overlay" aria-hidden="true" />
      <div className="container-custom position-relative">
        <div className="row g-4">
          {stats.map((stat) => (
            <div className="col-6 col-lg-3" key={stat.label}>
              <StatCounter value={stat.value} suffix={stat.suffix} label={stat.label} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
