import { PageHero } from "@/components/site/page-sections";
import { PortfolioGrid } from "@/components/site/portfolio";

export default function PortfolioPage() {
  return (
    <main className="bg-background text-foreground">
      <PageHero
        eyebrow="Portfolio"
        title="Webprojekte, die Struktur und Wirkung zeigen."
        text="Unsere Beispiele zeigen, wie unterschiedliche Branchen digital klarer auftreten können: mit wertigem Design, verständlichen Inhalten und Kontaktwegen, die Anfragen leichter machen."
        cta={{ label: "Anfrage starten", href: "/konfigurator" }}
      />
      <PortfolioGrid />
    </main>
  );
}
