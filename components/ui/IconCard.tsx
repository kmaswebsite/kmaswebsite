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
  number,
}: IconCardProps) {
  return (
    <div className={`card-custom hover-lift icon-card tone-${tone} d-flex flex-column`}>
      {typeof number === "number" && (
        <div className="icon-card-ribbon" aria-hidden="true">
          <span className="icon-card-ribbon-number">{String(number).padStart(2, "0")}</span>
        </div>
      )}
      <div className="d-flex align-items-center gap-2 icon-card-head">
        <div className={`icon-badge icon-badge-${tone} mb-0 ms-0`}>
          <i className={icon} aria-hidden="true" />
        </div>
        <h3 className="h5 mb-0">{title}</h3>
      </div>
      <div className="icon-card-underline ms-0" aria-hidden="true" />
      <p className="text-light-custom mb-2">{description}</p>
      {href && (
        <Link href={href} className="mt-auto icon-card-readmore">
          {ctaLabel} <i className="bi bi-arrow-right ms-1" />
        </Link>
      )}
    </div>
  );
}
