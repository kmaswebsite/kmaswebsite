"use client";

import Link from "next/link";
import SiteImage from "@/components/ui/SiteImage";
import Badge from "@/components/ui/Badge";
import { blogPosts as defaultBlogPosts } from "@/lib/content/blogPosts";
import { useEditableContent } from "@/lib/editableContent";

export default function BlogIndexGrid() {
  const blogPosts = useEditableContent("blog-posts", defaultBlogPosts);

  return (
    <div className="row g-4">
      {blogPosts.map((post, index) => (
        <div className="col-md-6 col-lg-4" key={post.slug}>
          <div className="card-custom hover-lift h-100 d-flex flex-column p-0 overflow-hidden">
            <div className="position-relative img-zoom" style={{ aspectRatio: "16 / 10", borderRadius: 0 }}>
              <SiteImage path={`/images/blog-${(index % 6) + 1}.jpg`} alt={post.title} />
            </div>
            <div className="p-4 d-flex flex-column flex-grow-1">
              <Badge>{post.category}</Badge>
              <h3 className="h6 mt-3 mb-2">{post.title}</h3>
              <p className="text-light-custom small mb-3">{post.excerpt}</p>
              <div className="d-flex justify-content-between align-items-center mt-auto">
                <span className="text-light-custom small">{post.author} · {post.date}</span>
              </div>
              <Link href={`/blog/${post.slug}`} className="fw-semibold text-accent small mt-2">
                Read Article <i className="bi bi-arrow-right ms-1" />
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
