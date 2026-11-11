"use client";

import Link from "next/link";
import SiteImage from "@/components/ui/SiteImage";
import PageBanner from "@/layouts/PageBanner";
import { blogPosts as defaultBlogPosts, type BlogPost } from "@/lib/content/blogPosts";
import { useEditableContent } from "@/lib/editableContent";

function formatDate(value: string) {
  const date = new Date(`${value}T00:00:00`);
  return Number.isNaN(date.getTime())
    ? value
    : date.toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" });
}

export default function BlogPostDetailClient({ slug, fallbackPost }: { slug: string; fallbackPost: BlogPost }) {
  const blogPosts = useEditableContent("blog-posts", defaultBlogPosts);
  const postIndex = blogPosts.findIndex((entry) => entry.slug === slug);
  const post = postIndex >= 0 ? blogPosts[postIndex] : fallbackPost;
  const imageIndex = postIndex >= 0 ? postIndex : defaultBlogPosts.findIndex((entry) => entry.slug === slug);
  const related = blogPosts.filter((entry) => entry.slug !== slug).slice(0, 3);

  return (
    <>
      <PageBanner bannerKey={`blog-posts-${slug}`} eyebrow={post.category} title={post.title} subtitle={post.excerpt} icon="bi bi-journal-text" tone="secondary" image="/images/banner-training.jpg" />
      <section className="section">
        <div className="container-custom">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="position-relative img-zoom mb-4" style={{ aspectRatio: "16 / 8" }}>
                <SiteImage path={`/images/blog-${(Math.max(imageIndex, 0) % 6) + 1}.jpg`} alt={post.title} />
              </div>
              <div className="d-flex flex-wrap align-items-center gap-2 mb-4">
                <span className="meta-chip">{post.category}</span>
                <span className="meta-chip"><i className="bi bi-person me-1" />{post.author}</span>
                <span className="meta-chip"><i className="bi bi-calendar3 me-1" />{formatDate(post.date)}</span>
              </div>
              <div className="article-body">
                {post.content.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
              <Link href="/blog" className="fw-semibold small d-inline-flex align-items-center gap-1 mt-3">
                <i className="bi bi-arrow-left" /> Back to Blog
              </Link>

              {related.length > 0 && (
                <div className="mt-5">
                  <span className="eyebrow d-block">More Articles</span>
                  <div className="d-grid gap-2 mt-1">
                    {related.map((entry) => (
                      <Link href={`/blog/${entry.slug}`} className="related-link" key={entry.slug}>
                        <span className="icon-tile icon-tile-sm">
                          <i className="bi bi-journal-text" aria-hidden="true" />
                        </span>
                        <span className="fw-semibold">{entry.title}</span>
                        <i className="bi bi-arrow-right ms-auto" aria-hidden="true" />
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
