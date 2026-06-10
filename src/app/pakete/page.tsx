import { ConfiguratorTeaser, PackagesSection, PageHero } from "@/components/site/page-sections";

export default function PaketePage() {
  return (
    <main className="bg-background text-foreground">
      <PageHero
        eyebrow="Angebot"
        title="Individuelle Projektwege."
        text="Wählen Sie einen Startpunkt und verfeinern Sie Umfang, Extras und Tempo im Konfigurator."
        cta={{ label: "Projektweg wählen", href: "/konfigurator" }}
      />
      <PackagesSection compact />
      <ConfiguratorTeaser />
    </main>
  );
}
