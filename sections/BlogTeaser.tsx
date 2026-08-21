"use client";

import Link from "next/link";
import SiteImage from "@/components/ui/SiteImage";
import SectionHeader from "@/components/ui/SectionHeader";
import Badge from "@/components/ui/Badge";
import { blogPosts as defaultBlogPosts } from "@/lib/content/blogPosts";
import { useEditableContent } from "@/lib/editableContent";

type BlogTeaserProps = {
  limit?: number;
};

export default function BlogTeaser({ limit = 3 }: BlogTeaserProps) {
  const blogPosts = useEditableContent("blog-posts", defaultBlogPosts);
  const items = blogPosts.slice(0, limit);

  return (
    <section className="section">
      <div className="container-custom">
        <SectionHeader eyebrow="Blog" title="Latest thinking from our team" />
        <div className="row g-4">
          {items.map((post, index) => (
            <div className="col-md-4" key={post.slug}>
              <div className="card-custom hover-lift h-100 d-flex flex-column p-0 overflow-hidden">
                <div className="position-relative img-zoom" style={{ aspectRatio: "16 / 10", borderRadius: 0 }}>
                  <SiteImage path={`/images/blog-${(index % 6) + 1}.jpg`} alt={post.title} />
                </div>
                <div className="p-4 d-flex flex-column flex-grow-1">
                  <Badge>{post.category}</Badge>
                  <h3 className="h6 mt-3 mb-2">{post.title}</h3>
                  <p className="text-light-custom small mb-3">{post.excerpt}</p>
                  <div className="d-flex justify-content-between align-items-center mt-auto">
                    <span className="text-light-custom small">{post.author}</span>
                    <Link href={`/blog/${post.slug}`} className="fw-semibold text-accent small">
                      Read <i className="bi bi-arrow-right ms-1" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
