import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ItemDetailClient from "@/components/detail/ItemDetailClient";
import { strategyItems } from "@/lib/content/strategy";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return strategyItems.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = strategyItems.find((entry) => entry.slug === slug);
  return { title: item?.title ?? "Strategy", description: item?.description };
}

export default async function DetailPage({ params }: Props) {
  const { slug } = await params;
  const item = strategyItems.find((entry) => entry.slug === slug);

  if (!item) {
    notFound();
  }

  return (
    <ItemDetailClient
      contentKey="strategy-items"
      defaultItems={strategyItems}
      slug={slug}
      fallbackItem={item}
      eyebrow="Strategy"
      tone="primary"
      image="/images/banner-strategy.jpg"
      backHref="/strategy"
      backLabel="Back to Strategy"
    />
  );
}
