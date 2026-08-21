import Header from "@/layouts/Header";
import Footer from "@/layouts/Footer";
import ScrollToTopButton from "@/components/ui/ScrollToTopButton";
import ChatWidget from "@/components/ui/ChatWidget";

export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
      <ScrollToTopButton />
      <ChatWidget />
    </>
  );
}
