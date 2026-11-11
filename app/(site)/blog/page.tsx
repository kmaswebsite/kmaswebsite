import type { Metadata } from "next";
import PageBanner from "@/layouts/PageBanner";
import PageIntro from "@/components/ui/PageIntro";
import BlogIndexGrid from "@/components/blog/BlogIndexGrid";

export const metadata: Metadata = {
  title: "Blog",
  description: "Insights on HR management, development, compliance and culture from KMAS.",
};

export default function BlogPage() {
  return (
    <>
      <PageBanner
        bannerKey="blog"
        eyebrow="Blog"
        title="Insights from KMAS"
        subtitle="Perspectives on HR management, development, compliance and culture."
        icon="bi bi-journal-text"
        image="/images/banner-training.jpg"
      />

      <section className="section">
        <div className="container-custom">
          <PageIntro
            eyebrow="Latest Articles"
            title="Ideas for better people performance"
            paragraphs={["Practical thinking from the KMAS team, drawn from experience across sectors."]}
          />
          <BlogIndexGrid />
        </div>
      </section>
    </>
  );
}
