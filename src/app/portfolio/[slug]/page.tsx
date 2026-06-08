import { notFound } from "next/navigation";

import { PageHero } from "@/components/site/page-sections";
import { PortfolioGallery } from "@/components/site/portfolio";
import { portfolioProjects } from "@/data/site-content";

export function generateStaticParams() {
  return portfolioProjects.map((project) => ({ slug: project.slug }));
}

type PortfolioGalleryPageProps = {
  params: Promise<{ slug: string }>;
};

export default async function PortfolioGalleryPage({ params }: PortfolioGalleryPageProps) {
  const { slug } = await params;
  const project = portfolioProjects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="bg-background text-foreground">
      <PageHero
        eyebrow={project.type}
        title={project.title}
        text={`${project.summary} Die Galerie ist als Platzhalter für echte Screenshots, Mockups und spätere Projektbilder vorbereitet.`}
        cta={{ label: "Anfrage starten", href: "/konfigurator" }}
      />
      <PortfolioGallery project={project} />
    </main>
  );
}
