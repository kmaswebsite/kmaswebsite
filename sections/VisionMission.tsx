import { kmasMission, kmasVision } from "@/lib/content/kmas";

const items = [
  { number: "01", label: "Our Vision", icon: "bi bi-eye", text: kmasVision },
  { number: "02", label: "Our Mission", icon: "bi bi-bullseye", text: kmasMission },
];

export default function VisionMission() {
  return (
    <section className="section">
      <div className="container-custom">
        <div className="vm-panel fade-up">
          <div className="vm-panel-glow" aria-hidden="true" />
          {items.map((item) => (
            <div className="vm-item" key={item.label}>
              <i className={`${item.icon} vm-watermark`} aria-hidden="true" />
              <div className="vm-label">
                <span className="vm-number">{item.number}</span>
                <span className="vm-label-text">{item.label}</span>
              </div>
              <p className="vm-text">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
