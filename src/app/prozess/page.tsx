import { ConfiguratorTeaser, PageHero, ProcessSection } from "@/components/site/page-sections";

export default function ProzessPage() {
  return (
    <main className="bg-background text-foreground">
      <PageHero
        eyebrow="Prozess"
        title="Ein klarer Weg vom Erstgespräch bis Launch."
        text="Jede Phase hat ein Ziel: Entscheidungen vereinfachen, Risiken früh erkennen und den Weg zur Anfrage logisch aufbauen."
        cta={{ label: "Anfrage starten", href: "/konfigurator" }}
      />
      <ProcessSection compact />
      <ConfiguratorTeaser />
    </main>
  );
}
