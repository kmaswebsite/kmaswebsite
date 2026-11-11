import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CaseStudyDetailClient from "@/components/success-stories/CaseStudyDetailClient";
import { caseStudies } from "@/lib/content/caseStudies";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return caseStudies.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = caseStudies.find((entry) => entry.slug === slug);
  return { title: item?.client ?? "Success Stories", description: item?.problem };
}

export default async function CaseStudyDetailPage({ params }: Props) {
  const { slug } = await params;
  const item = caseStudies.find((entry) => entry.slug === slug);

  if (!item) {
    notFound();
  }

  return <CaseStudyDetailClient slug={slug} fallbackItem={item} />;
}
