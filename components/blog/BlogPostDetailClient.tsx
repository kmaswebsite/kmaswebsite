"use client";

import Link from "next/link";
import SiteImage from "@/components/ui/SiteImage";
import PageBanner from "@/layouts/PageBanner";
import Badge from "@/components/ui/Badge";
import { blogPosts as defaultBlogPosts, type BlogPost } from "@/lib/content/blogPosts";
import { useEditableContent } from "@/lib/editableContent";

export default function BlogPostDetailClient({ slug, fallbackPost }: { slug: string; fallbackPost: BlogPost }) {
  const blogPosts = useEditableContent("blog-posts", defaultBlogPosts);
  const postIndex = blogPosts.findIndex((entry) => entry.slug === slug);
  const post = postIndex >= 0 ? blogPosts[postIndex] : fallbackPost;
  const imageIndex = postIndex >= 0 ? postIndex : defaultBlogPosts.findIndex((entry) => entry.slug === slug);

  return (
    <>
      <PageBanner bannerKey={`blog-posts-${slug}`} eyebrow="Blog" title={post.title} icon="bi bi-journal-text" tone="secondary" image="/images/banner-training.jpg" />
      <section className="section">
        <div className="container-custom">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="position-relative img-zoom mb-4" style={{ aspectRatio: "16 / 8" }}>
                <SiteImage path={`/images/blog-${(imageIndex % 6) + 1}.jpg`} alt={post.title} />
              </div>
              <div className="d-flex align-items-center gap-3 mb-4">
                <Badge>{post.category}</Badge>
                <span className="text-light-custom small">{post.author} · {post.date}</span>
              </div>
              {post.content.map((paragraph, index) => (
                <p className="text-light-custom fs-5" key={index}>
                  {paragraph}
                </p>
              ))}
              <Link href="/blog" className="fw-semibold text-accent d-inline-block mt-3">
                <i className="bi bi-arrow-left me-1" /> Back to Blog
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
