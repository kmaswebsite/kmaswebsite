import Link from "next/link";

export default function UnderConstruction() {
  return (
    <section className="section" style={{ minHeight: "70vh", display: "flex", alignItems: "center" }}>
      <div className="container-custom text-center fade-up" style={{ maxWidth: 640, margin: "0 auto" }}>
        <svg
          width="220"
          height="180"
          viewBox="0 0 220 180"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          style={{ margin: "0 auto 2rem", display: "block" }}
        >
          <rect x="20" y="130" width="180" height="8" rx="4" fill="var(--color-border)" />
          <rect x="45" y="60" width="50" height="70" rx="6" fill="var(--color-section-bg)" stroke="var(--color-primary)" strokeWidth="3" />
          <rect x="125" y="40" width="50" height="90" rx="6" fill="var(--color-section-bg)" stroke="var(--color-primary-dark)" strokeWidth="3" />
          <circle cx="70" cy="90" r="12" fill="var(--color-accent-soft)" stroke="var(--color-accent)" strokeWidth="3" />
          <path d="M64 90h12M70 84v12" stroke="var(--color-accent)" strokeWidth="3" strokeLinecap="round" />
          <path d="M110 20l6 12 13 2-9.5 9 2.2 13-11.7-6.2L98.8 56l2.2-13-9.5-9 13-2 5.5-12z" fill="var(--color-accent)" />
          <rect x="140" y="60" width="20" height="6" rx="3" fill="var(--color-primary)" opacity="0.4" />
          <rect x="140" y="72" width="24" height="6" rx="3" fill="var(--color-primary)" opacity="0.4" />
          <rect x="140" y="84" width="16" height="6" rx="3" fill="var(--color-primary)" opacity="0.4" />
        </svg>

        <span className="eyebrow d-block">KMAS</span>
        <h1 className="section-title mb-3">Page Under Construction</h1>
        <p className="text-light-custom mb-4">
          We&apos;re currently building this page. Please check back soon.
        </p>
        <Link href="/" className="btn-primary-custom">
          Back to Home <i className="bi bi-arrow-right ms-1" />
        </Link>
      </div>
    </section>
  );
}
