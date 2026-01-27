import { BackgroundDots } from "@/components/ui/background-dots";

export default function CalculateurLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Le calculateur gère sa propre navbar intégrée,
  // donc on wrap juste avec BackgroundDots
  return <BackgroundDots>{children}</BackgroundDots>;
}
