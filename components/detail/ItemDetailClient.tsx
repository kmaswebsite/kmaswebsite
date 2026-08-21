"use client";

import Link from "next/link";
import PageBanner from "@/layouts/PageBanner";
import { useEditableContent } from "@/lib/editableContent";

export type DetailItem = {
  slug: string;
  icon: string;
  title: string;
  description: string;
  detail: string;
};

type ItemDetailClientProps = {
  contentKey: string;
  defaultItems: DetailItem[];
  slug: string;
  fallbackItem: DetailItem;
  eyebrow: string;
  tone: "primary" | "secondary" | "success";
  image: string;
  backHref: string;
  backLabel: string;
};

export default function ItemDetailClient({
  contentKey,
  defaultItems,
  slug,
  fallbackItem,
  eyebrow,
  tone,
  image,
  backHref,
  backLabel,
}: ItemDetailClientProps) {
  const items = useEditableContent(contentKey, defaultItems);
  const item = items.find((entry) => entry.slug === slug) ?? fallbackItem;

  return (
    <>
      <PageBanner eyebrow={eyebrow} title={item.title} subtitle={item.description} icon={item.icon} tone={tone} image={image} bannerKey={`${contentKey}-${slug}`} />
      <section className="section">
        <div className="container-custom">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="icon-badge mb-3">
                <i className={item.icon} aria-hidden="true" />
              </div>
              <p className="text-light-custom fs-5">{item.detail}</p>
              <Link href={backHref} className="fw-semibold text-accent">
                <i className="bi bi-arrow-left me-1" /> {backLabel}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
