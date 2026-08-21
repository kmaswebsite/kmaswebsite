type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
};

export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = "center",
}: SectionHeaderProps) {
  const alignClass = align === "center" ? "text-center mx-auto" : "";

  return (
    <div className={`mb-5 fade-up ${alignClass}`} style={{ maxWidth: align === "center" ? 760 : undefined }}>
      {eyebrow && <span className="eyebrow d-block">{eyebrow}</span>}
      <h2 className="section-title">{title}</h2>
      {subtitle && <p className={`section-subtitle ${align === "center" ? "mx-auto" : ""}`}>{subtitle}</p>}
    </div>
  );
}
