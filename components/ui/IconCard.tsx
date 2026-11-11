import Link from "next/link";
import type { Tone } from "@/lib/utils";

type IconCardProps = {
  icon: string;
  title: string;
  description: string;
  href?: string;
  ctaLabel?: string;
  tone?: Tone;
  number?: number;
};

export default function IconCard({
  icon,
  title,
  description,
  href,
  ctaLabel = "Read More",
  tone = "primary",
}: IconCardProps) {
  const body = (
    <>
      <span className={`icon-tile ${tone === "accent" ? "icon-tile-accent" : ""}`}>
        <i className={icon} aria-hidden="true" />
      </span>
      <h3>{title}</h3>
      <p>{description}</p>
      {href && (
        <span className="service-card-link">
          {ctaLabel} <i className="bi bi-arrow-right" aria-hidden="true" />
        </span>
      )}
    </>
  );

  if (href) {
    return (
      <Link href={href} className="service-card text-reset text-decoration-none">
        {body}
      </Link>
    );
  }

  return <div className="service-card">{body}</div>;
}
