import { SiteNavbar } from "@/components/block/site-navbar";
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
    </BackgroundDots>
  );
}
