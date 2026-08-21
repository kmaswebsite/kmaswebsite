type SectionCurveProps = {
  fill?: string;
  flip?: boolean;
};

export default function SectionCurve({ fill = "var(--color-bg)", flip = false }: SectionCurveProps) {
  return (
    <div className={`section-curve ${flip ? "section-curve-flip" : ""}`} aria-hidden="true">
      <svg viewBox="0 0 1440 80" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0,32 C240,80 480,80 720,48 C960,16 1200,0 1440,32 L1440,80 L0,80 Z" fill={fill} />
      </svg>
    </div>
  );
}
