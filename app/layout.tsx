import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import BootstrapClient from "@/components/ui/BootstrapClient";
import ScrollReveal from "@/components/ui/ScrollReveal";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
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
    <html lang="en" className={`${inter.variable} ${jakarta.variable}`} data-scroll-behavior="smooth">
      {/* Browser extensions (e.g. ColorZilla) add attributes to <body>; ignore those mismatches. */}
      <body suppressHydrationWarning>
        {children}
        <BootstrapClient />
        <ScrollReveal />
      </body>
    </html>
  );
}
