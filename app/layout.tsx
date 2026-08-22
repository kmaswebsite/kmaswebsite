import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import BootstrapClient from "@/components/ui/BootstrapClient";
import ScrollReveal from "@/components/ui/ScrollReveal";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://k-mas.com"),
  title: {
    default: "KMAS | Krishna's Management Advisory & Services",
    template: "%s | KMAS",
  },
  description:
    "Krishna's Management Advisory & Services (KMAS) — HR management, HR development, and management advisory services led by Ramakrishnan Mohan.",
  openGraph: {
    title: "KMAS | Krishna's Management Advisory & Services",
    description:
      "Krishna's Management Advisory & Services (KMAS) — HR management, HR development, and management advisory services led by Ramakrishnan Mohan.",
    url: "https://k-mas.com",
    siteName: "KMAS",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "KMAS | Krishna's Management Advisory & Services",
    description:
      "Krishna's Management Advisory & Services (KMAS) — HR management, HR development, and management advisory services led by Ramakrishnan Mohan.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={roboto.variable} data-scroll-behavior="smooth">
      <body>
        {children}
        <BootstrapClient />
        <ScrollReveal />
      </body>
    </html>
  );
}
