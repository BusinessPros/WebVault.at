import { ConfiguratorTeaser, PackagesSection, PageHero } from "@/components/site/page-sections";

export default function PaketePage() {
  return (
    <main className="bg-background text-foreground">
      <PageHero
        eyebrow="Angebot"
        title="Individuelle Projektwege für klare Entscheidungen."
        text="Wählen Sie einen Startpunkt, ergänzen Sie Extras und verfeinern Sie den Umfang im Konfigurator."
        cta={{ label: "Projektweg wählen", href: "/konfigurator" }}
      />
      <PackagesSection compact />
      <ConfiguratorTeaser />
    </main>
  );
}
