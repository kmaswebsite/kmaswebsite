"use client";

import Link from "next/link";
import SiteImage from "@/components/ui/SiteImage";
import { blogPosts as defaultBlogPosts } from "@/lib/content/blogPosts";
import { useEditableContent } from "@/lib/editableContent";

export default function BlogIndexGrid() {
  const blogPosts = useEditableContent("blog-posts", defaultBlogPosts);

  return (
    <div className="row g-3 g-lg-4 stagger-fade">
      {blogPosts.map((post, index) => (
        <div className="col-md-6 col-lg-4" key={post.slug}>
          <Link href={`/blog/${post.slug}`} className="service-card p-0 overflow-hidden text-reset text-decoration-none">
            <div className="position-relative img-zoom" style={{ aspectRatio: "16 / 10", borderRadius: 0 }}>
              <SiteImage path={`/images/blog-${(index % 6) + 1}.jpg`} alt={post.title} />
            </div>
            <div className="d-flex flex-column flex-grow-1 gap-2 p-4 pt-3">
              <span className="meta-chip align-self-start">{post.category}</span>
              <h3>{post.title}</h3>
              <p>{post.excerpt}</p>
              <span className="service-card-link">
                Read Article <i className="bi bi-arrow-right" aria-hidden="true" />
              </span>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}
