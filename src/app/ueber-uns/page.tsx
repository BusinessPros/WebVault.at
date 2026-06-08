import { AboutDetailedSection, ConfiguratorTeaser, PageHero } from "@/components/site/page-sections";

export default function UeberUnsPage() {
  return (
    <main className="bg-background text-foreground">
      <PageHero
        eyebrow="Über uns"
        title="WebVault verbindet Beratung, Design und Technik."
        text="Hinter WebVault stehen Bernhard Weinfurter und Lukas Assfall. Gemeinsam entwickeln sie hochwertige Websites und digitale Systeme, die Unternehmen professioneller sichtbar machen und Anfragen klarer führen."
        cta={{ label: "Projekt anfragen", href: "/konfigurator" }}
      />
      <AboutDetailedSection />
      <ConfiguratorTeaser />
    </main>
  );
}
