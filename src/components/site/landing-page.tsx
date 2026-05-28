"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowRight,
  Check,
  ChevronRight,
  Mail,
  MapPin,
  Phone,
  Play,
  ShieldCheck,
  Vault,
} from "lucide-react";

import { Button, buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  cases,
  ctas,
  formGoals,
  headerHighlights,
  navItems,
  packages,
  processSteps,
  services,
  stats,
  whyItems,
} from "@/data/site-content";
import { cn } from "@/lib/utils";
import { Reveal } from "./reveal";
import { VaultScene } from "./vault-scene";

const ease = [0.22, 1, 0.36, 1] as const;

export function LandingPage() {
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 0.2], [0, -90]);
  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.94]);

  return (
    <main className="overflow-hidden bg-vault-paper text-vault-ink">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-vault-ink/72 text-white backdrop-blur-xl">
        <div className="section-shell flex h-16 items-center justify-between gap-4">
          <a href="#top" className="flex min-w-0 items-center gap-3 font-semibold">
            <span className="flex size-9 shrink-0 items-center justify-center rounded-lg border border-vault-gold/25 bg-white/7 text-vault-gold">
              <Vault aria-hidden className="size-4" />
            </span>
            <span className="truncate text-lg tracking-tight">WebVault</span>
          </a>
          <nav className="hidden items-center gap-7 text-sm font-medium text-white/66 lg:flex">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="transition hover:text-white">
                {item.label}
              </a>
            ))}
          </nav>
          <a
            href="#kontakt"
            className={cn(
              buttonVariants({ variant: "outline" }),
              "h-10 shrink-0 border-white/15 bg-white/8 px-3 text-white hover:bg-white hover:text-vault-ink sm:px-4",
            )}
          >
            <span className="hidden sm:inline">{ctas.primary}</span>
            <span className="sm:hidden">Anfrage</span>
            <ArrowRight data-icon="inline-end" aria-hidden />
          </a>
        </div>
      </header>

      <section id="top" className="relative bg-vault-ink pt-16 text-white lg:min-h-screen">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_16%,rgba(240,209,154,0.23),transparent_26%),linear-gradient(120deg,rgba(255,255,255,0.08),transparent_28%),linear-gradient(180deg,#080909_0%,#10110f_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-px hairline" />
        <motion.div
          style={{ y: heroY, scale: heroScale }}
          className="section-shell relative grid items-center gap-10 py-12 sm:py-16 lg:min-h-[calc(100vh-4rem)] lg:grid-cols-[0.88fr_1.12fr] lg:gap-12 lg:py-20"
        >
          <div className="max-w-3xl pt-8">
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
              className="mt-5 max-w-4xl text-5xl font-semibold leading-[0.9] tracking-[-0.045em] text-white sm:mt-6 sm:text-7xl lg:text-8xl xl:text-[8.7rem]"
            >
              Websites,
              <br />
              die verkaufen.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, ease, delay: 0.15 }}
              className="mt-6 max-w-xl text-base leading-7 text-white/68 sm:mt-7 sm:text-lg sm:leading-8"
            >
              WebVault baut hochwertige Websites, KI-Chatbots und digitale
              Systeme für Unternehmen, die online professioneller wirken und
              mehr qualifizierte Anfragen gewinnen wollen.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.72, ease, delay: 0.24 }}
              className="mt-7 flex flex-col gap-3 sm:mt-9 sm:flex-row"
            >
              <a
                href="#kontakt"
                className={cn(
                  buttonVariants({ variant: "default" }),
                  "h-12 bg-vault-gold px-5 text-vault-ink hover:bg-white",
                )}
              >
                {ctas.primary}
                <ArrowRight data-icon="inline-end" aria-hidden />
              </a>
              <a
                href="#projekte"
                className={cn(
                  buttonVariants({ variant: "ghost" }),
                  "h-12 px-5 text-white hover:bg-white/10 hover:text-white",
                )}
              >
                {ctas.secondary}
                <Play data-icon="inline-end" aria-hidden />
              </a>
            </motion.div>
            <motion.dl
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease, delay: 0.35 }}
              className="mt-8 grid max-w-2xl grid-cols-3 gap-4 border-t border-white/12 pt-5 sm:mt-12 sm:pt-6"
            >
              {stats.map((stat) => (
                <div key={stat.label}>
                  <dt className="text-xl font-semibold text-white sm:text-3xl">
                    {stat.value}
                  </dt>
                  <dd className="mt-1 text-xs leading-5 text-white/48">
                    {stat.label}
                  </dd>
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
        <div className="relative overflow-hidden border-y border-white/10 bg-white/[0.03] py-4 text-white/56">
          <div className="marquee-track gap-10 whitespace-nowrap font-mono text-xs uppercase tracking-[0.24em]">
            {[...headerHighlights, ...headerHighlights, ...headerHighlights].map((item, index) => (
              <span key={`${item}-${index}`} className="flex items-center gap-10">
                {item}
                <span className="size-1 rounded-full bg-vault-gold" />
              </span>
            ))}
          </div>
        </div>
      </section>

      <section id="leistungen" className="scroll-mt-20 bg-vault-paper py-24">
        <div className="section-shell">
          <div className="grid gap-12 lg:grid-cols-[0.62fr_1.38fr]">
            <Reveal className="max-w-xl">
              <p className="font-mono text-xs uppercase tracking-[0.28em] text-vault-line">
                Leistungen
              </p>
              <h2 className="mt-4 text-4xl font-semibold leading-[0.98] tracking-[-0.035em] sm:text-5xl">
                Digitale Lösungen. Messbare Ergebnisse.
              </h2>
              <p className="mt-5 text-lg leading-8 text-muted-foreground">
                Keine Baukasten-Optik. Wir entwickeln Systeme, die Vertrauen
                schaffen, Prozesse vereinfachen und Besucher gezielt zur
                Anfrage führen.
              </p>
              <a
                href="#kontakt"
                className={cn(
                  buttonVariants({ variant: "default" }),
                  "mt-8 h-11 px-4",
                )}
              >
                Projekt besprechen
                <ArrowRight data-icon="inline-end" aria-hidden />
              </a>
            </Reveal>

            <div className="grid overflow-hidden rounded-lg border border-vault-line/28 bg-white/45 shadow-2xl shadow-vault-ink/5 md:grid-cols-5">
              {services.map((service, index) => (
                <Reveal
                  key={service.title}
                  delay={index * 0.045}
                  className="group min-h-72 border-b border-vault-line/20 p-6 transition hover:bg-white md:border-b-0 md:border-r last:md:border-r-0"
                >
                  <service.icon
                    aria-hidden
                    className="size-7 text-vault-ink transition group-hover:text-vault-gold"
                  />
                  <h3 className="mt-16 text-lg font-semibold leading-tight">
                    {service.title}
                  </h3>
                  <p className="mt-4 text-sm leading-6 text-muted-foreground">
                    {service.text}
                  </p>
                  <ChevronRight
                    aria-hidden
                    className="mt-8 size-4 transition group-hover:translate-x-1"
                  />
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-vault-ink py-24 text-white">
        <div className="section-shell grid gap-12 lg:grid-cols-[0.72fr_1.28fr]">
          <Reveal className="lg:sticky lg:top-28 lg:self-start">
            <p className="font-mono text-xs uppercase tracking-[0.28em] text-vault-gold">
              Warum wir
            </p>
            <h2 className="mt-4 text-4xl font-semibold leading-[1] tracking-[-0.035em] sm:text-5xl">
              Weil Standard nicht reicht.
            </h2>
            <p className="mt-5 max-w-md text-lg leading-8 text-white/64">
              Kleine Unternehmen brauchen keine Agenturshow. Sie brauchen einen
              klaren Partner, der Wertigkeit, Technik und Verkauf zusammenbringt.
            </p>
          </Reveal>
          <div className="grid border-t border-white/12">
            {whyItems.map((item, index) => (
              <Reveal
                key={item.title}
                delay={index * 0.06}
                className="grid gap-5 border-b border-white/12 py-8 sm:grid-cols-[0.18fr_0.34fr_0.48fr] sm:items-start"
              >
                <item.icon aria-hidden className="size-7 text-vault-gold" />
                <h3 className="text-2xl font-semibold tracking-[-0.02em]">
                  {item.title}
                </h3>
                <p className="text-base leading-7 text-white/62">{item.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="prozess" className="scroll-mt-20 bg-vault-paper py-24">
        <div className="section-shell">
          <Reveal className="grid gap-8 lg:grid-cols-[0.55fr_1.45fr]">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.28em] text-vault-line">
                Prozess
              </p>
              <h2 className="mt-4 text-4xl font-semibold leading-[1] tracking-[-0.035em] sm:text-5xl">
                Strukturiert. Klar. Erfolgreich.
              </h2>
            </div>
            <p className="max-w-2xl text-lg leading-8 text-muted-foreground">
              Vom ersten Gespräch bis zur laufenden Betreuung bleibt der Ablauf
              transparent. Sie wissen immer, was passiert und warum.
            </p>
          </Reveal>
          <div className="mt-14 grid gap-4 lg:grid-cols-6">
            {processSteps.map(([number, title, text], index) => (
              <Reveal
                key={number}
                delay={index * 0.045}
                className="border-t border-vault-line/35 pt-5"
              >
                <p className="font-mono text-sm text-vault-line">{number}</p>
                <h3 className="mt-8 text-xl font-semibold">{title}</h3>
                <p className="mt-4 text-sm leading-6 text-muted-foreground">
                  {text}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="pakete" className="scroll-mt-20 bg-[#0b0c0b] py-24 text-white">
        <div className="section-shell grid gap-12 lg:grid-cols-[0.52fr_1.48fr]">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-[0.28em] text-vault-gold">
              Pakete
            </p>
            <h2 className="mt-4 text-4xl font-semibold leading-[1] tracking-[-0.035em] sm:text-5xl">
              Transparente Wege. Kein Rätselraten.
            </h2>
            <p className="mt-5 text-lg leading-8 text-white/62">
              Starten Sie planbar mit Fixpreis, Abo oder einer individuellen
              Lösung für Website, Chatbot und Automatisierung.
            </p>
          </Reveal>
          <div className="grid gap-4 lg:grid-cols-3">
            {packages.map((item, index) => (
              <Reveal
                key={item.name}
                delay={index * 0.06}
                className={cn(
                  "relative rounded-lg border p-6",
                  item.featured
                    ? "border-vault-gold bg-vault-gold text-vault-ink"
                    : "border-white/14 bg-white/[0.04]",
                )}
              >
                {item.featured ? (
                  <span className="absolute right-5 top-5 rounded-full bg-vault-ink px-2.5 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-vault-gold">
                    Beliebt
                  </span>
                ) : null}
                <h3 className="text-2xl font-semibold">{item.name}</h3>
                <p className={cn("mt-3 text-sm", item.featured ? "text-vault-ink/65" : "text-white/58")}>
                  {item.text}
                </p>
                <p className="mt-8 text-3xl font-semibold tracking-[-0.03em]">
                  {item.price}
                </p>
                <p className={cn("mt-2 text-sm", item.featured ? "text-vault-ink/62" : "text-white/48")}>
                  {item.alt}
                </p>
                <ul className="mt-8 grid gap-3">
                  {item.items.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm">
                      <Check aria-hidden className="mt-0.5 size-4 shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href="#kontakt"
                  className={cn(
                    buttonVariants({ variant: item.featured ? "default" : "outline" }),
                    "mt-8 h-11 w-full",
                    item.featured
                      ? "bg-vault-ink text-vault-gold hover:bg-white"
                      : "border-white/18 bg-transparent text-white hover:bg-white hover:text-vault-ink",
                  )}
                >
                  Paket anfragen
                  <ArrowRight data-icon="inline-end" aria-hidden />
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="projekte" className="scroll-mt-20 bg-vault-paper py-24">
        <div className="section-shell">
          <Reveal className="grid gap-8 lg:grid-cols-[0.55fr_1.45fr]">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.28em] text-vault-line">
                Projekte
              </p>
              <h2 className="mt-4 text-4xl font-semibold leading-[1] tracking-[-0.035em] sm:text-5xl">
                Platz für echte Ergebnisse.
              </h2>
            </div>
            <p className="max-w-2xl text-lg leading-8 text-muted-foreground">
              Bis reale Cases veröffentlicht werden, zeigen diese Platzhalter,
              wie Referenzen später hochwertig und verkaufsorientiert wirken.
            </p>
          </Reveal>
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {cases.map((item, index) => (
              <Reveal
                key={item.type}
                delay={index * 0.07}
                className="group relative min-h-[320px] overflow-hidden rounded-lg border border-vault-line/24 bg-vault-ink p-6 text-white shadow-2xl shadow-vault-ink/10"
              >
                <div className="absolute inset-0 vault-grid opacity-35" />
                <div className="absolute inset-x-8 top-16 h-px bg-vault-gold/35" />
                <div className="absolute bottom-8 right-8 size-28 rotate-45 border border-vault-gold/25 bg-white/[0.03] transition duration-500 group-hover:rotate-[58deg]" />
                <div className="relative">
                  <p className="font-mono text-xs uppercase tracking-[0.22em] text-vault-gold">
                    {item.type}
                  </p>
                  <h3 className="mt-20 max-w-sm text-2xl font-semibold leading-tight">
                    {item.title}
                  </h3>
                  <p className="mt-8 text-4xl font-semibold text-vault-gold">
                    {item.result}
                  </p>
                  <p className="mt-1 text-sm text-white/58">{item.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="kontakt" className="scroll-mt-20 bg-vault-ink py-24 text-white">
        <div className="section-shell grid gap-12 lg:grid-cols-[0.72fr_1.28fr]">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-[0.28em] text-vault-gold">
              Kontakt
            </p>
            <h2 className="mt-4 text-4xl font-semibold leading-[1] tracking-[-0.035em] sm:text-5xl">
              Lassen Sie uns Ihr Projekt besprechen.
            </h2>
            <p className="mt-5 max-w-md text-lg leading-8 text-white/64">
              Sagen Sie uns kurz, worum es geht. Wir melden uns persönlich mit
              einer klaren nächsten Empfehlung.
            </p>
            <div className="mt-10 grid gap-4 text-sm text-white/66">
              <p className="flex items-center gap-3">
                <ShieldCheck aria-hidden className="size-4 text-vault-gold" />
                Kostenloses Erstgespräch
              </p>
              <p className="flex items-center gap-3">
                <Mail aria-hidden className="size-4 text-vault-gold" />
                hallo@webvault.de
              </p>
              <p className="flex items-center gap-3">
                <Phone aria-hidden className="size-4 text-vault-gold" />
                +49 123 4567890
              </p>
              <p className="flex items-center gap-3">
                <MapPin aria-hidden className="size-4 text-vault-gold" />
                Deutschland / Österreich
              </p>
            </div>
          </Reveal>

          <Reveal className="rounded-lg border border-white/12 bg-white/[0.04] p-5 backdrop-blur sm:p-7">
            <form className="grid gap-4" action="#" aria-label="Projektanfrage">
              <div className="grid gap-4 md:grid-cols-2">
                <label className="grid gap-2 text-sm text-white/68">
                  Ihr Name
                  <Input
                    name="name"
                    autoComplete="name"
                    className="h-12 border-white/16 bg-black/22 text-white placeholder:text-white/32"
                    placeholder="Max Mustermann"
                  />
                </label>
                <label className="grid gap-2 text-sm text-white/68">
                  E-Mail-Adresse
                  <Input
                    name="email"
                    type="email"
                    autoComplete="email"
                    className="h-12 border-white/16 bg-black/22 text-white placeholder:text-white/32"
                    placeholder="mail@unternehmen.de"
                  />
                </label>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <label className="grid gap-2 text-sm text-white/68">
                  Unternehmen
                  <Input
                    name="company"
                    autoComplete="organization"
                    className="h-12 border-white/16 bg-black/22 text-white placeholder:text-white/32"
                    placeholder="Firma / Branche"
                  />
                </label>
                <label className="grid gap-2 text-sm text-white/68">
                  Ziel
                  <select
                    name="goal"
                    className="h-12 rounded-lg border border-white/16 bg-black/22 px-3 text-sm text-white outline-none transition focus-visible:border-vault-gold focus-visible:ring-3 focus-visible:ring-vault-gold/30"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Was soll entstehen?
                    </option>
                    {formGoals.map((goal) => (
                      <option key={goal} value={goal}>
                        {goal}
                      </option>
                    ))}
                  </select>
                </label>
              </div>
              <label className="grid gap-2 text-sm text-white/68">
                Nachricht
                <Textarea
                  name="message"
                  className="min-h-36 border-white/16 bg-black/22 text-white placeholder:text-white/32"
                  placeholder="Kurz beschreiben: Was gibt es schon, was soll besser werden, wann soll es starten?"
                />
              </label>
              <Button className="h-12 bg-vault-gold text-vault-ink hover:bg-white">
                Anfrage senden
                <ArrowRight data-icon="inline-end" aria-hidden />
              </Button>
            </form>
          </Reveal>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-vault-ink py-10 text-white">
        <div className="section-shell grid gap-8 text-sm text-white/58 md:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <p className="text-lg font-semibold text-white">WebVault</p>
            <p className="mt-3 max-w-sm leading-6">
              Digitale Lösungen für Unternehmen, die online wertiger auftreten
              und mehr Anfragen gewinnen wollen.
            </p>
          </div>
          <div className="grid gap-2">
            <p className="font-medium text-white">Navigation</p>
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="hover:text-white">
                {item.label}
              </a>
            ))}
          </div>
          <div className="grid content-start gap-2">
            <p className="font-medium text-white">Rechtliches</p>
            <Link href="/impressum" className="hover:text-white">
              Impressum
            </Link>
            <Link href="/datenschutz" className="hover:text-white">
              Datenschutz
            </Link>
            <p className="pt-4 text-xs">© 2026 WebVault. Platzhalter.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
