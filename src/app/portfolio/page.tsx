import { PageHero } from "@/components/site/page-sections";
import { PortfolioGrid } from "@/components/site/portfolio";

export default function PortfolioPage() {
  return (
    <main className="bg-background text-foreground">
      <PageHero
        eyebrow="Portfolio"
        title="Portfolio mit Projektgalerien."
        text="Neun Projektkacheln mit Mockup-Platzhaltern und eigenen Galerien für spätere Screenshots."
        cta={{ label: "Anfrage starten", href: "/konfigurator" }}
      />
      <PortfolioGrid />
    </main>
  );
}
