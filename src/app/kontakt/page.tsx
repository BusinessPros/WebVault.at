import { ContactSection, PageHero } from "@/components/site/page-sections";

export default function KontaktPage() {
  return (
    <main className="bg-background text-foreground">
      <PageHero
        eyebrow="Kontakt"
        title="Erzählen Sie kurz, was entstehen soll."
        text="Für eine konkrete Projektanfrage führt der Konfigurator schneller ans Ziel. Für alles andere ist das Kontaktformular der direkte Weg."
        cta={{ label: "Zum Konfigurator", href: "/konfigurator" }}
      />
      <ContactSection />
    </main>
  );
}
