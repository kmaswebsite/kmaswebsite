import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ItemDetailClient from "@/components/detail/ItemDetailClient";
import { serviceItems } from "@/lib/content/services";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return serviceItems.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = serviceItems.find((entry) => entry.slug === slug);
  return { title: item?.title ?? "Services" };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const item = serviceItems.find((entry) => entry.slug === slug);

  if (!item) {
    notFound();
  }

  return (
    <ItemDetailClient
      contentKey="service-items"
      defaultItems={serviceItems}
      slug={slug}
      fallbackItem={item}
      eyebrow="Services"
      tone="primary"
      image="/images/banner-people.jpg"
      backHref="/services"
      backLabel="Back to Services"
    />
  );
}
