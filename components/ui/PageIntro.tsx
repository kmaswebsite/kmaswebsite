type PageIntroProps = {
  eyebrow: string;
  title: string;
  paragraphs: string[];
  center?: boolean;
};

export default function PageIntro({ eyebrow, title, paragraphs, center = false }: PageIntroProps) {
  return (
    <div className={`page-intro fade-up mb-4 ${center ? "text-center mx-auto" : ""}`}>
      <span className="eyebrow d-block">{eyebrow}</span>
      <h2 className="section-title">{title}</h2>
      {paragraphs.map((paragraph, index) => (
        <p key={index} className={index === paragraphs.length - 1 ? "mb-0" : ""}>
          {paragraph}
        </p>
      ))}
    </div>
  );
}
