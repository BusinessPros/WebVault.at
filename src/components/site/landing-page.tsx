"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { ctas, headerHighlights, stats } from "@/data/site-content";
import { cn } from "@/lib/utils";
import {
  AboutSection,
  ConfiguratorTeaser,
  ContactSection,
  PackagesSection,
  ProcessSection,
  ProjectsSection,
  ServicesSection,
  WhySection,
} from "./page-sections";
import { InfiniteTextMarquee } from "./marquee";
import { VaultScene } from "./vault-scene";

const ease = [0.22, 1, 0.36, 1] as const;

export function LandingPage() {
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 0.2], [0, -70]);
  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.96]);

  return (
    <main className="overflow-hidden bg-background text-foreground">
      <section className="relative overflow-hidden pt-16">
        <div className="absolute inset-0 vault-grid opacity-50" />
        <div className="absolute inset-x-0 bottom-0 h-px hairline" />
        <motion.div
          style={{ y: heroY, scale: heroScale }}
          className="section-shell relative grid items-center gap-10 py-10 sm:py-12 lg:min-h-[calc(100vh-4rem)] lg:grid-cols-[0.88fr_1.12fr] lg:gap-12 lg:py-14"
        >
          <div className="max-w-3xl">
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, ease }}
              className="font-mono text-[0.68rem] uppercase tracking-[0.36em] text-vault-gold"
            >
              Webagentur für Wachstum
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, ease, delay: 0.05 }}
              className="mt-5 max-w-4xl text-5xl font-semibold leading-[0.92] tracking-[-0.045em] sm:mt-6 sm:text-6xl lg:text-7xl xl:text-[7.2rem]"
            >
              Websites,
              <br />
              die verkaufen.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, ease, delay: 0.15 }}
              className="mt-6 max-w-xl text-base leading-7 text-muted-foreground sm:mt-7 sm:text-lg sm:leading-8"
            >
              WebVault baut hochwertige Websites, KI-Chatbots und digitale Systeme für Unternehmen, die
              online professioneller wirken und mehr qualifizierte Anfragen gewinnen wollen.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.72, ease, delay: 0.24 }}
              className="mt-7 flex flex-col gap-3 sm:mt-9 sm:flex-row"
            >
              <Link
                href="/konfigurator"
                className={cn(
                  buttonVariants({ variant: "default" }),
                  "h-12 bg-vault-gold px-5 text-vault-ink shadow-[0_0_34px_color-mix(in_oklab,var(--vault-gold),transparent_76%)] hover:bg-foreground hover:text-background",
                )}
              >
                {ctas.primary}
                <ArrowRight data-icon="inline-end" aria-hidden />
              </Link>
              <Link
                href="/portfolio"
                className={cn(
                  buttonVariants({ variant: "outline" }),
                  "h-12 px-5 hover:border-vault-gold/70 hover:text-vault-gold",
                )}
              >
                {ctas.secondary}
                <Play data-icon="inline-end" aria-hidden />
              </Link>
            </motion.div>
            <motion.dl
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease, delay: 0.35 }}
              className="mt-8 grid max-w-2xl grid-cols-3 gap-4 border-t border-border pt-5 sm:mt-12 sm:pt-6"
            >
              {stats.map((stat) => (
                <div key={stat.label}>
                  <dt className="text-xl font-semibold sm:text-3xl">{stat.value}</dt>
                  <dd className="mt-1 text-xs leading-5 text-muted-foreground">{stat.label}</dd>
                </div>
              ))}
            </motion.dl>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 28 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease, delay: 0.18 }}
            className="relative min-w-0"
          >
            <VaultScene />
          </motion.div>
        </motion.div>
        <div className="relative border-y border-border bg-card/50 py-4 text-muted-foreground">
          <InfiniteTextMarquee
            items={headerHighlights}
            className="font-mono text-xs uppercase tracking-[0.24em]"
          />
        </div>
      </section>

      <ServicesSection />
      <WhySection />
      <ProcessSection />
      <PackagesSection />
      <ProjectsSection />
      <AboutSection />
      <ConfiguratorTeaser />
      <ContactSection />
    </main>
  );
}
