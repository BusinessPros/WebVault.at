import { ConfiguratorTeaser, PageHero, ProcessSection } from "@/components/site/page-sections";

export default function ProzessPage() {
  return (
    <main className="bg-background text-foreground">
      <PageHero
        eyebrow="Prozess"
        title="Vom Erstgespräch bis Launch."
        text="Ein klarer Ablauf, der Entscheidungen vereinfacht und den Anfrageweg logisch aufbaut."
        cta={{ label: "Anfrage starten", href: "/konfigurator" }}
      />
      <ProcessSection compact />
      <ConfiguratorTeaser />
    </main>
  );
}
