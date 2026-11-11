import type { Metadata } from "next";
import CareersContent from "@/components/careers/CareersContent";

export const metadata: Metadata = {
  title: "Careers",
  description: "Work with Krishna's Management Advisory & Services (KMAS).",
};

export default function CareersPage() {
  return <CareersContent />;
}
