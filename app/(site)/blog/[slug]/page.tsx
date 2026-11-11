import type { Metadata } from "next";
import { notFound } from "next/navigation";
import BlogPostDetailClient from "@/components/blog/BlogPostDetailClient";
import { blogPosts } from "@/lib/content/blogPosts";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((entry) => entry.slug === slug);
  return { title: post?.title ?? "Blog", description: post?.excerpt };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((entry) => entry.slug === slug);

  if (!post) {
    notFound();
  }

  return <BlogPostDetailClient slug={slug} fallbackPost={post} />;
}
