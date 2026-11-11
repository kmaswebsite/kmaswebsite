import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ItemDetailClient from "@/components/detail/ItemDetailClient";
import { solutionItems } from "@/lib/content/solutions";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return solutionItems.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = solutionItems.find((entry) => entry.slug === slug);
  return { title: item?.title ?? "Solutions", description: item?.description };
}

export default async function DetailPage({ params }: Props) {
  const { slug } = await params;
  const item = solutionItems.find((entry) => entry.slug === slug);

  if (!item) {
    notFound();
  }

  return (
    <ItemDetailClient
      contentKey="solution-items"
      defaultItems={solutionItems}
      slug={slug}
      fallbackItem={item}
      eyebrow="Solutions"
      tone="primary"
      image="/images/banner-industry.jpg"
      backHref="/solutions"
      backLabel="Back to Solutions"
    />
  );
}
