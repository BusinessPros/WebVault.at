import { PageHero } from "@/components/site/page-sections";
import { PortfolioGrid } from "@/components/site/portfolio";

export default function PortfolioPage() {
  return (
    <main className="bg-background text-foreground">
      <PageHero
        eyebrow="Portfolio"
        title="Bisherige Webprojekte als Galerie vorbereitet."
        text="Hier entstehen die Referenzen von WebVault: neun Projektkacheln mit Mockup-Platzhaltern und eigenen Galerie-Seiten für Screenshots, Designstände und spätere Live-Eindrücke."
        cta={{ label: "Anfrage starten", href: "/konfigurator" }}
      />
      <PortfolioGrid />
    </main>
  );
}
