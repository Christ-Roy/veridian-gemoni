import { SiteNavbar } from "@/components/block/site-navbar";
import { FooterSection } from "@/components/block/footer-section-agence";
import { BackgroundDots } from "@/components/ui/background-dots";

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <BackgroundDots>
      <SiteNavbar />
      {children}
      <FooterSection />
    </BackgroundDots>
  );
}
