"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight, Images } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { portfolioProjects } from "@/data/site-content";
import { cn } from "@/lib/utils";
import { Reveal } from "./reveal";

type PortfolioProject = (typeof portfolioProjects)[number];

function MockupPlaceholder({
  label,
  index,
  compact = false,
}: {
  label: string;
  index: number;
  compact?: boolean;
}) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-lg border border-border bg-vault-ink text-white",
        compact ? "aspect-[16/10]" : "aspect-[16/11]",
      )}
    >
      <div className="absolute inset-0 vault-grid opacity-25" />
      <div className="absolute inset-x-6 top-6 h-6 rounded-md border border-white/12 bg-white/[0.06]" />
      <div className="absolute left-6 top-16 h-20 w-[48%] rounded-md bg-vault-gold/18 shadow-[0_0_40px_color-mix(in_oklab,var(--vault-gold),transparent_76%)]" />
      <div className="absolute right-6 top-16 grid w-[34%] gap-2">
        <span className="h-2 rounded-full bg-white/20" />
        <span className="h-2 rounded-full bg-white/14" />
        <span className="h-2 w-2/3 rounded-full bg-white/14" />
      </div>
      <div className="absolute inset-x-6 bottom-6 grid grid-cols-3 gap-3">
        {[0, 1, 2].map((item) => (
          <span key={item} className="h-12 rounded-md border border-white/10 bg-white/[0.04]" />
        ))}
      </div>
      <div className="absolute left-6 top-6 flex items-center gap-2">
        <span className="size-2 rounded-full bg-vault-gold" />
        <span className="font-mono text-[0.56rem] uppercase tracking-[0.22em] text-white/54">
          Konzept {String(index + 1).padStart(2, "0")}
        </span>
      </div>
      <p className="absolute bottom-24 left-6 max-w-[70%] text-2xl font-semibold tracking-[-0.03em]">
        {label}
      </p>
    </div>
  );
}

export function PortfolioGrid() {
  return (
    <section className="section-band py-20 sm:py-24">
      <div className="section-shell">
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {portfolioProjects.map((project, index) => (
            <Reveal key={project.slug} delay={(index % 3) * 0.05} className="interactive-card p-4">
              <div className="relative">
                <MockupPlaceholder label={project.title} index={index} compact />
                <div className="pt-5">
                  <p className="font-mono text-xs uppercase tracking-[0.22em] text-vault-line">
                    {project.type}
                  </p>
                  <h2 className="mt-3 text-2xl font-semibold tracking-[-0.02em]">
                    {project.title}
                  </h2>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">
                    {project.summary}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-border bg-background px-2.5 py-1 text-xs text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link
                    href={`/portfolio/${project.slug}`}
                    className={cn(
                      buttonVariants({ variant: "default" }),
                      "mt-6 h-11 w-full bg-vault-gold text-vault-ink hover:bg-foreground hover:text-background",
                    )}
                  >
                    Jetzt ansehen
                    <ArrowRight data-icon="inline-end" aria-hidden />
                  </Link>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function PortfolioGallery({ project }: { project: PortfolioProject }) {
  const galleryItems = [
    "Startseite",
    "Leistungsbereich",
    "Mobile Ansicht",
    "Kontaktstrecke",
    "Detailseite",
    "Conversion-Element",
  ];

  return (
    <section className="section-band py-16 sm:py-20">
      <div className="section-shell">
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <Link href="/portfolio" className={cn(buttonVariants({ variant: "outline" }), "h-10 w-fit px-4")}>
            <ArrowLeft data-icon="inline-start" aria-hidden />
            Zurück zum Portfolio
          </Link>
          <div className="flex items-center gap-3 text-sm text-muted-foreground">
            <Images aria-hidden className="size-4 text-vault-gold" />
            Galerie für Seitenansichten und Projektbereiche
          </div>
        </div>

        <div className="grid gap-5 lg:grid-cols-2">
          {galleryItems.map((item, index) => (
            <Reveal key={item} delay={(index % 2) * 0.06} className="surface-panel overflow-hidden p-3">
              <MockupPlaceholder label={`${project.title} · ${item}`} index={index} />
              <div className="px-2 py-4">
                <p className="font-mono text-xs uppercase tracking-[0.22em] text-vault-line">
                  Seitenansicht {String(index + 1).padStart(2, "0")}
                </p>
                <h2 className="mt-2 text-xl font-semibold">{item}</h2>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  Dieser Bereich zeigt, wie die jeweilige Seite strukturiert, erklärt und auf Anfragen ausgerichtet wird.
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
