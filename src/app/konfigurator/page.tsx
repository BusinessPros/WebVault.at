import { Configurator } from "@/components/site/configurator";
import { PageHero } from "@/components/site/page-sections";

export default async function KonfiguratorPage({ searchParams }: PageProps<"/konfigurator">) {
  const params = await searchParams;
  const packageParam = Array.isArray(params.paket) ? params.paket[0] : params.paket;

  return (
    <main className="bg-background text-foreground">
      <PageHero
        eyebrow="Konfigurator"
        title="Projektweg starten."
        text="Wählen Sie Ziel, Umfang, Extras und Tempo. Daraus entsteht eine Anfrage, die wir schnell einschätzen können."
      />
      <Configurator initialPackage={packageParam} />
    </main>
  );
}
