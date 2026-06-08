"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Check,
  ChevronRight,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  Sparkles,
  Target,
  UsersRound,
} from "lucide-react";

import { Button, buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  aboutOwners,
  aboutPrinciples,
  formGoals,
  packages,
  portfolioProjects,
  processSteps,
  services,
  workSteps,
  whyItems,
} from "@/data/site-content";
import { cn } from "@/lib/utils";
import { TechLogoMarquee } from "./marquee";
import { Reveal } from "./reveal";

const ease = [0.22, 1, 0.36, 1] as const;

type PageHeroProps = {
  eyebrow: string;
  title: string;
  text: string;
  cta?: {
    label: string;
    href: string;
  };
};

function TraceLine({ className }: { className?: string }) {
  return (
    <motion.div
      aria-hidden
      initial={{ scaleX: 0, opacity: 0 }}
      whileInView={{ scaleX: 1, opacity: 1 }}
      viewport={{ once: true, amount: 0.55 }}
      transition={{ duration: 1, ease }}
      className={cn("scroll-rail h-px origin-left", className)}
    />
  );
}

function SectionIntro({
  eyebrow,
  title,
  text,
  invert = false,
}: {
  eyebrow: string;
  title: string;
  text: string;
  invert?: boolean;
}) {
  return (
    <Reveal className="max-w-2xl">
      <p className={cn("font-mono text-xs uppercase tracking-[0.28em]", invert ? "text-vault-gold" : "text-vault-line")}>
        {eyebrow}
      </p>
      <h2 className="mt-4 text-4xl font-semibold leading-[1] tracking-[-0.035em] sm:text-5xl">
        {title}
      </h2>
      <p className={cn("mt-5 text-lg leading-8", invert ? "text-white/66" : "text-muted-foreground")}>
        {text}
      </p>
    </Reveal>
  );
}

export function PageHero({ eyebrow, title, text, cta }: PageHeroProps) {
  return (
    <section className="section-band pt-28 sm:pt-32">
      <div className="absolute inset-0 vault-grid opacity-45" />
      <div className="absolute inset-x-0 bottom-0 h-px hairline" />
      <div className="section-shell relative py-16 sm:py-20">
        <TraceLine className="mb-10 max-w-3xl" />
        <Reveal className="max-w-4xl">
          <p className="font-mono text-xs uppercase tracking-[0.32em] text-vault-gold">
            {eyebrow}
          </p>
          <h1 className="mt-5 text-5xl font-semibold leading-[0.94] tracking-[-0.045em] sm:text-7xl lg:text-8xl">
            {title}
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-muted-foreground">
            {text}
          </p>
          {cta ? (
            <Link
              href={cta.href}
              className={cn(
                buttonVariants({ variant: "default" }),
                "mt-8 h-12 bg-vault-gold px-5 text-vault-ink hover:bg-foreground hover:text-background",
              )}
            >
              {cta.label}
              <ArrowRight data-icon="inline-end" aria-hidden />
            </Link>
          ) : null}
        </Reveal>
      </div>
    </section>
  );
}

export function ServicesSection({ compact = false }: { compact?: boolean }) {
  return (
    <section className="section-band py-20 sm:py-24">
      <div className="section-shell">
        <div className="grid gap-10 lg:grid-cols-[0.58fr_1.42fr]">
          <div>
            <SectionIntro
              eyebrow="Leistungen"
              title="Digitale Lösungen. Messbare Ergebnisse."
              text="Websites, Chatbots und Automatisierungen greifen sauber ineinander, damit Besucher schneller verstehen, vertrauen und anfragen."
            />
            {!compact ? (
              <Link
                href="/konfigurator"
                className={cn(buttonVariants({ variant: "default" }), "mt-8 h-11 bg-vault-gold px-4 text-vault-ink")}
              >
                Projekt konfigurieren
                <ArrowRight data-icon="inline-end" aria-hidden />
              </Link>
            ) : null}
          </div>

          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {services.map((service, index) => (
              <Reveal
                key={service.title}
                delay={index * 0.045}
                className="interactive-card group min-h-56 p-5 sm:min-h-64 sm:p-6"
              >
                <div className="relative">
                  <service.icon
                    aria-hidden
                    className="size-7 text-vault-ink transition group-hover:scale-110 group-hover:text-vault-gold dark:text-vault-gold"
                  />
                  <h3 className="mt-14 text-lg font-semibold leading-tight">
                    {service.title}
                  </h3>
                  <p className="mt-4 text-sm leading-6 text-muted-foreground">
                    {service.text}
                  </p>
                  <ChevronRight
                    aria-hidden
                    className="mt-8 size-4 transition group-hover:translate-x-1 group-hover:text-vault-gold"
                  />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function WhySection() {
  return (
    <section className="relative overflow-hidden bg-vault-ink py-20 text-white sm:py-24">
      <div className="absolute inset-0 vault-grid opacity-25" />
      <div className="section-shell relative grid gap-12 lg:grid-cols-[0.72fr_1.28fr]">
        <SectionIntro
          eyebrow="Warum wir"
          title="Weil Standard nicht reicht."
          text="Kleine Unternehmen brauchen keine Agenturshow. Sie brauchen einen klaren Partner, der Wertigkeit, Technik und Verkauf zusammenbringt."
          invert
        />
        <div className="grid border-t border-white/12">
          {whyItems.map((item, index) => (
            <Reveal
              key={item.title}
              delay={index * 0.06}
              className="group grid gap-5 border-b border-white/12 py-8 transition hover:border-vault-gold/55 sm:grid-cols-[0.14fr_0.34fr_0.52fr] sm:items-start"
            >
              <item.icon aria-hidden className="size-7 text-vault-gold transition group-hover:scale-110" />
              <h3 className="text-2xl font-semibold tracking-[-0.02em]">
                {item.title}
              </h3>
              <p className="text-base leading-7 text-white/62">{item.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ProcessSection({ compact = false }: { compact?: boolean }) {
  return (
    <section className="section-band py-20 sm:py-24">
      <div className="section-shell">
        <div className="grid gap-8 lg:grid-cols-[0.55fr_1.45fr]">
          <SectionIntro
            eyebrow="Prozess"
            title="Strukturiert. Klar. Erfolgreich."
            text="Vom ersten Gespräch bis zur laufenden Betreuung bleibt der Ablauf transparent. Sie wissen immer, was passiert und warum."
          />
          <TraceLine className="self-end" />
        </div>
        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {processSteps.map(([number, title, text], index) => (
            <Reveal
              key={number}
              delay={index * 0.045}
              className="interactive-card group min-h-56 p-5"
            >
              <div className="relative flex h-full flex-col">
                <p className="font-mono text-sm text-vault-line">{number}</p>
                <h3 className="mt-8 text-xl font-semibold">{title}</h3>
                <p className="mt-4 text-sm leading-6 text-muted-foreground">{text}</p>
                <span className="mt-auto pt-8 text-vault-gold opacity-0 transition group-hover:opacity-100">
                  <Sparkles aria-hidden className="size-4" />
                </span>
              </div>
            </Reveal>
          ))}
        </div>
        {!compact ? (
          <div className="mt-10">
            <Link href="/konfigurator" className={cn(buttonVariants({ variant: "outline" }), "h-11 px-4")}>
              Anfragepfad starten
              <ArrowRight data-icon="inline-end" aria-hidden />
            </Link>
          </div>
        ) : null}
      </div>
    </section>
  );
}

export function PackagesSection({ compact = false }: { compact?: boolean }) {
  return (
    <section className="relative overflow-hidden bg-vault-ink py-20 text-white sm:py-24">
      <div className="absolute inset-0 vault-grid opacity-20" />
      <div className="section-shell relative grid gap-12 lg:grid-cols-[0.52fr_1.48fr]">
        <SectionIntro
          eyebrow="Angebot"
          title="Flexible Projektwege statt starre Schubladen."
          text="Wir starten mit einem passenden Rahmen und verfeinern Umfang, Betreuung und technische Tiefe erst nach dem Blick auf Ihr Ziel."
          invert
        />
        <div className="grid gap-4 lg:grid-cols-3">
          {packages.map((item, index) => (
            <Reveal
              key={item.name}
              delay={index * 0.06}
              className={cn(
                "interactive-card group p-6 text-white",
                item.featured
                  ? "border-vault-gold bg-vault-gold text-vault-ink glow-edge"
                  : "border-white/14 bg-white/[0.04]",
              )}
            >
              <div className="relative flex min-h-[390px] flex-col sm:min-h-[430px]">
                {item.featured ? (
                  <span className="mb-5 w-fit rounded-full bg-vault-ink px-2.5 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-vault-gold">
                    Beliebt
                  </span>
                ) : null}
                <h3 className="text-2xl font-semibold">{item.name}</h3>
                <p className={cn("mt-3 text-sm", item.featured ? "text-vault-ink/65" : "text-white/58")}>
                  {item.text}
                </p>
                <p className="mt-8 text-3xl font-semibold tracking-[-0.03em]">{item.price}</p>
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
                <Link
                  href={`/konfigurator?paket=${encodeURIComponent(item.name)}`}
                  className={cn(
                    buttonVariants({ variant: item.featured ? "default" : "outline" }),
                    "mt-auto h-11 w-full",
                    item.featured
                      ? "bg-vault-ink text-vault-gold hover:bg-white"
                      : "border-white/18 bg-transparent text-white hover:bg-white hover:text-vault-ink",
                  )}
                >
                  Projektweg wählen
                  <ArrowRight data-icon="inline-end" aria-hidden />
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
      {!compact ? <TraceLine className="section-shell relative mt-12" /> : null}
    </section>
  );
}

export function ProjectsSection({ compact = false }: { compact?: boolean }) {
  return (
    <section className="section-band py-20 sm:py-24">
      <div className="section-shell">
        <div className="grid gap-8 lg:grid-cols-[0.55fr_1.45fr]">
          <SectionIntro
            eyebrow="Portfolio"
            title="Projektbeispiele mit klarem Fokus."
            text="Die Beispiele zeigen typische WebVault-Strukturen: klare Einstiege, überzeugende Leistungsbereiche und Kontaktwege, die Besucher gezielt zur Anfrage führen."
          />
          <TraceLine className="self-end" />
        </div>
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {portfolioProjects.slice(0, 3).map((item, index) => (
            <Reveal
              key={item.slug}
              delay={index * 0.07}
              className="group relative min-h-[320px] overflow-hidden rounded-lg border border-border bg-card p-6 text-card-foreground shadow-2xl shadow-black/5 transition hover:-translate-y-1 hover:border-vault-gold/50"
            >
              <div className="absolute inset-0 vault-grid opacity-35" />
              <motion.div
                aria-hidden
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, delay: index * 0.08, ease }}
                className="absolute inset-x-8 top-16 h-px origin-left bg-vault-gold/45"
              />
              <div className="absolute bottom-8 right-8 size-28 rotate-45 border border-vault-gold/25 bg-vault-gold/[0.04] transition duration-500 group-hover:rotate-[58deg] group-hover:shadow-[0_0_42px_color-mix(in_oklab,var(--vault-gold),transparent_78%)]" />
              <div className="relative">
                <p className="font-mono text-xs uppercase tracking-[0.22em] text-vault-gold">{item.type}</p>
                <h3 className="mt-20 max-w-sm text-2xl font-semibold leading-tight">{item.title}</h3>
                <p className="mt-8 text-sm leading-6 text-muted-foreground">{item.summary}</p>
                <Link href={`/portfolio/${item.slug}`} className="mt-8 inline-flex text-sm font-semibold text-vault-gold">
                  Jetzt ansehen
                  <ArrowRight aria-hidden className="ml-2 size-4" />
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
        {!compact ? (
          <div className="mt-10">
            <Link href="/portfolio" className={cn(buttonVariants({ variant: "default" }), "h-11 bg-vault-gold px-4 text-vault-ink")}>
              Portfolio öffnen
              <ArrowRight data-icon="inline-end" aria-hidden />
            </Link>
          </div>
        ) : null}
      </div>
    </section>
  );
}

export function AboutSection() {
  return (
    <section className="section-band py-20 sm:py-24">
      <div className="section-shell grid gap-12 lg:grid-cols-[0.62fr_1.38fr]">
        <div>
          <SectionIntro
            eyebrow="Über uns"
            title="Websites mit Substanz statt nur Oberfläche."
            text="WebVault verbindet Design, saubere Technik und Anfrage-Logik für Unternehmen, die online ernster genommen werden wollen."
          />
          <div className="mt-8 grid grid-cols-2 gap-3 text-sm sm:max-w-md">
            <div className="surface-panel p-4">
              <Target aria-hidden className="size-5 text-vault-gold" />
              <p className="mt-5 font-semibold">Conversion-Fokus</p>
            </div>
            <div className="surface-panel p-4">
              <UsersRound aria-hidden className="size-5 text-vault-gold" />
              <p className="mt-5 font-semibold">Persönliche Abstimmung</p>
            </div>
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {aboutPrinciples.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.06} className="interactive-card p-6">
              <div className="relative">
                <p className="font-mono text-xs text-vault-line">0{index + 1}</p>
                <h3 className="mt-10 text-2xl font-semibold tracking-[-0.02em]">{item.title}</h3>
                <p className="mt-5 text-sm leading-6 text-muted-foreground">{item.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function AboutDetailedSection() {
  return (
    <section className="section-band py-20 sm:py-24">
      <div className="section-shell">
        <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr]">
          <Reveal className="lg:sticky lg:top-28 lg:self-start">
            <p className="font-mono text-xs uppercase tracking-[0.28em] text-vault-line">
              Wer hinter WebVault steht
            </p>
            <h2 className="mt-4 text-4xl font-semibold leading-[1] tracking-[-0.035em] sm:text-5xl">
              Zwei Gründer, ein Ziel: digitale Auftritte, die sauber wirken und praktisch verkaufen.
            </h2>
            <div className="mt-6 space-y-5 text-base leading-8 text-muted-foreground">
              <p>
                WebVault ist keine anonyme Baukasten-Agentur, sondern ein kleines, fokussiertes Team
                für Websites, digitale Systeme und moderne Online-Auftritte. Wir verbinden Beratung,
                Design, Technik, Marketing und Hosting so, dass daraus nicht nur eine schöne Website
                entsteht, sondern ein funktionierender Anfrageweg.
              </p>
              <p>
                Unser Anspruch ist ein Auftritt, der sich hochwertig anfühlt, verständlich aufgebaut
                ist und auf jedem Gerät zuverlässig funktioniert. Deshalb denken wir früh über
                Zielgruppe, Struktur, Inhalte, Ladezeit, mobile Nutzung und spätere Erweiterungen nach.
              </p>
              <p>
                Die Zusammenarbeit bleibt bewusst direkt: kurze Abstimmungen, klare Empfehlungen,
                ehrliches Feedback und ein Prozess, der auch für Unternehmen ohne eigene
                Marketingabteilung greifbar bleibt.
              </p>
            </div>
          </Reveal>

          <div className="grid gap-5">
            {aboutOwners.map((owner, index) => (
              <Reveal
                key={owner.name}
                delay={index * 0.08}
                className="interactive-card p-5 sm:p-6"
              >
                <div className="relative grid gap-6 md:grid-cols-[13rem_1fr]">
                  <div className="relative aspect-[4/5] overflow-hidden rounded-lg border border-border bg-muted">
                    <div className="absolute inset-0 vault-grid opacity-45" />
                    <div className="absolute inset-5 rounded-lg border border-vault-gold/30 bg-background/55 shadow-[0_0_40px_color-mix(in_oklab,var(--vault-gold),transparent_82%)]" />
                    <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 text-center">
                      <p className="text-5xl font-semibold tracking-[-0.04em] text-vault-gold">
                        {owner.name
                          .split(" ")
                          .map((part) => part[0])
                          .join("")}
                      </p>
                      <p className="mt-3 font-mono text-[0.62rem] uppercase tracking-[0.24em] text-muted-foreground">
                        WebVault Profil
                      </p>
                    </div>
                  </div>

                  <div>
                    <p className="font-mono text-xs uppercase tracking-[0.24em] text-vault-line">
                      Besitzer / Entwickler 0{index + 1}
                    </p>
                    <h3 className="mt-4 text-3xl font-semibold tracking-[-0.03em]">
                      {owner.name}
                    </h3>
                    <p className="mt-2 text-vault-gold">{owner.role}</p>
                    <p className="mt-5 text-base leading-7 text-muted-foreground">{owner.text}</p>
                    <div className="mt-6 flex flex-wrap gap-2">
                      {owner.topics.map((topic) => (
                        <span
                          key={topic}
                          className="rounded-full border border-border bg-background px-3 py-1 text-xs font-medium text-muted-foreground"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}

            <Reveal className="rounded-lg border border-vault-gold/30 bg-vault-gold p-6 text-vault-ink shadow-2xl shadow-vault-gold/10">
              <p className="font-mono text-xs uppercase tracking-[0.28em] text-vault-ink/60">
                Zusammenarbeit
              </p>
              <h3 className="mt-3 text-3xl font-semibold tracking-[-0.03em]">
                Strategie und Umsetzung bleiben bei denselben Ansprechpartnern.
              </h3>
              <p className="mt-4 max-w-3xl text-sm leading-7 text-vault-ink/72">
                Dadurch gehen Informationen nicht zwischen Beratung, Design und Entwicklung verloren.
                Was im Gespräch entschieden wird, landet direkt in Struktur, Gestaltung und Technik.
                Das macht den Ablauf ruhiger, schneller und für beide Seiten klarer.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

export function WorkMethodSection() {
  return (
    <section className="relative overflow-hidden bg-vault-ink py-20 text-white sm:py-24">
      <div className="absolute inset-0 vault-grid opacity-20" />
      <div className="section-shell relative">
        <div className="grid gap-10 lg:grid-cols-[0.62fr_1.38fr] lg:items-end">
          <SectionIntro
            eyebrow="Wie wir arbeiten"
            title="Strategie, Design und Code greifen ineinander."
            text="Wir starten nicht mit beliebigen Effekten, sondern mit dem Weg, den ein Besucher verstehen soll. Daraus entstehen Struktur, Gestaltung und Technik, die zusammen auf mehr Vertrauen und bessere Anfragen einzahlen."
            invert
          />
          <TraceLine className="hidden lg:block" />
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {workSteps.map((step, index) => (
            <Reveal
              key={step.label}
              delay={index * 0.06}
              className="rounded-lg border border-white/12 bg-white/[0.045] p-5 backdrop-blur transition hover:border-vault-gold/45 sm:p-6"
            >
              <p className="font-mono text-xs text-vault-gold">{step.label}</p>
              <h3 className="mt-8 text-2xl font-semibold tracking-[-0.02em]">
                {step.title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-white/62">{step.text}</p>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12 overflow-hidden rounded-lg border border-white/12 bg-black/18 py-4 shadow-2xl shadow-black/20">
          <div className="mb-4 flex flex-col gap-2 px-5 sm:flex-row sm:items-end sm:justify-between sm:px-6">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.26em] text-vault-gold">
                Tech-Stack
              </p>
              <h3 className="mt-2 text-2xl font-semibold tracking-[-0.02em]">
                Moderne Websprachen, Frameworks und Tools
              </h3>
            </div>
            <p className="max-w-md text-sm leading-6 text-white/58">
              Von HTML, CSS, JavaScript und TypeScript bis React, Next.js, GitHub und Google Antigravity:
              Wir wählen Werkzeuge nach Nutzen, Stabilität und sauberer Erweiterbarkeit.
            </p>
          </div>
          <TechLogoMarquee />
        </Reveal>
      </div>
    </section>
  );
}

export function ContactSection() {
  return (
    <section className="relative overflow-hidden bg-vault-ink py-20 text-white sm:py-24">
      <div className="absolute inset-0 vault-grid opacity-20" />
      <div className="section-shell relative grid gap-12 lg:grid-cols-[0.72fr_1.28fr]">
        <div>
          <SectionIntro
            eyebrow="Kontakt"
            title="Lassen Sie uns Ihr Projekt besprechen."
            text="Sagen Sie kurz, worum es geht. Wir melden uns persönlich mit einer klaren nächsten Empfehlung."
            invert
          />
          <div className="mt-10 grid gap-4 text-sm text-white/66">
            <p className="flex items-center gap-3">
              <ShieldCheck aria-hidden className="size-4 text-vault-gold" />
              Kostenloses Erstgespräch
            </p>
            <p className="flex items-center gap-3">
              <Mail aria-hidden className="size-4 text-vault-gold" />
              hallo@webvault.at
            </p>
            <p className="flex items-center gap-3">
              <Phone aria-hidden className="size-4 text-vault-gold" />
              Telefon nach Vereinbarung
            </p>
            <p className="flex items-center gap-3">
              <MapPin aria-hidden className="size-4 text-vault-gold" />
              Österreich / DACH
            </p>
          </div>
        </div>

        <Reveal className="rounded-lg border border-white/12 bg-white/[0.04] p-5 shadow-2xl shadow-black/20 backdrop-blur sm:p-7">
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
                  placeholder="mail@unternehmen.at"
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
                    <option key={goal} value={goal} className="bg-vault-ink text-white">
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
            <div className="grid gap-3 sm:grid-cols-2">
              <Button className="h-12 bg-vault-gold text-vault-ink hover:bg-white">
                Anfrage senden
                <ArrowRight data-icon="inline-end" aria-hidden />
              </Button>
              <Link
                href="/konfigurator"
                className={cn(
                  buttonVariants({ variant: "outline" }),
                  "h-12 border-white/18 bg-transparent text-white hover:bg-white hover:text-vault-ink",
                )}
              >
                Projektweg wählen
                <ArrowRight data-icon="inline-end" aria-hidden />
              </Link>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

export function ConfiguratorTeaser() {
  return (
    <section className="section-band py-16">
      <div className="section-shell">
        <Reveal className="relative overflow-hidden rounded-lg border border-vault-gold/30 bg-vault-gold p-6 text-vault-ink shadow-2xl shadow-vault-gold/10 sm:p-8">
          <div className="absolute inset-0 vault-grid opacity-20" />
          <div className="relative grid gap-6 lg:grid-cols-[1.2fr_auto] lg:items-center">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.28em] text-vault-ink/60">
                Konfigurator
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
                Wählen Sie Ziel, Umfang und Tempo in wenigen Schritten.
              </h2>
            </div>
            <Link href="/konfigurator" className={cn(buttonVariants({ variant: "default" }), "h-12 bg-vault-ink px-5 text-vault-gold hover:bg-white")}>
              Anfrage starten
              <ArrowRight data-icon="inline-end" aria-hidden />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
