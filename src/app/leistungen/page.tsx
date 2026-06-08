import { ConfiguratorTeaser, PageHero, ServicesSection } from "@/components/site/page-sections";

export default function LeistungenPage() {
  return (
    <main className="bg-background text-foreground">
      <PageHero
        eyebrow="Leistungen"
        title="Alles, was aus Besuchern Anfragen macht."
        text="Von der ersten Seitenstruktur bis zu KI-gestützten Anfragewegen: WebVault baut digitale Systeme, die professionell wirken und praktisch arbeiten."
        cta={{ label: "Leistung konfigurieren", href: "/konfigurator" }}
      />
      <ServicesSection compact />
      <ConfiguratorTeaser />
    </main>
  );
}
