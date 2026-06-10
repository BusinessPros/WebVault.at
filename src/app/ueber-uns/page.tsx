import {
  AboutDetailedSection,
  ConfiguratorTeaser,
  PageHero,
  WorkMethodSection,
} from "@/components/site/page-sections";

export default function UeberUnsPage() {
  return (
    <main className="bg-background text-foreground">
      <PageHero
        eyebrow="Über uns"
        title="Beratung, Design und Technik."
        text="Bernhard Weinfurter und Lukas Assfall entwickeln Websites und digitale Systeme, die professionell sichtbar machen und Anfragen klarer führen."
        cta={{ label: "Projekt anfragen", href: "/konfigurator" }}
      />
      <AboutDetailedSection />
      <WorkMethodSection />
      <ConfiguratorTeaser />
    </main>
  );
}
