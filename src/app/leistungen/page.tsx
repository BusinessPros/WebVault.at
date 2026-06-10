import { ConfiguratorTeaser, PageHero, ServicesSection } from "@/components/site/page-sections";

export default function LeistungenPage() {
  return (
    <main className="bg-background text-foreground">
      <PageHero
        eyebrow="Leistungen"
        title="Leistungen für mehr Anfragen."
        text="Websites, Chatbots und Automatisierungen, die hochwertig wirken und im Alltag praktisch arbeiten."
        cta={{ label: "Leistung konfigurieren", href: "/konfigurator" }}
      />
      <ServicesSection compact />
      <ConfiguratorTeaser />
    </main>
  );
}
