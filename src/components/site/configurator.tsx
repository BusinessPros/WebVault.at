"use client";

import { useMemo, useState } from "react";
import { ArrowRight, Check, SlidersHorizontal } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { configuratorAddons, formGoals, packages, timelineOptions } from "@/data/site-content";
import { cn } from "@/lib/utils";
import { Reveal } from "./reveal";

type ConfiguratorProps = {
  initialPackage?: string;
};

export function Configurator({ initialPackage }: ConfiguratorProps) {
  const defaultPackage = packages[1]?.name ?? packages[0].name;
  const initialSelectedPackage = initialPackage && packages.some((item) => item.name === initialPackage)
    ? initialPackage
    : defaultPackage;
  const [selectedPackage, setSelectedPackage] = useState(initialSelectedPackage);
  const [goal, setGoal] = useState(formGoals[0]);
  const [timeline, setTimeline] = useState(timelineOptions[1]);
  const [addons, setAddons] = useState<string[]>([]);

  const packageData = useMemo(
    () => packages.find((item) => item.name === selectedPackage) ?? packages[0],
    [selectedPackage],
  );

  return (
    <section className="section-band py-12 sm:py-16">
      <div className="section-shell grid gap-8 lg:grid-cols-[1.35fr_0.65fr] lg:items-start">
        <Reveal className="surface-panel p-5 sm:p-7">
          <div className="flex items-start justify-between gap-4 border-b border-border pb-5">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.28em] text-vault-line">
                Anfrage starten
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
                Projekt konfigurieren
              </h2>
            </div>
            <span className="grid size-10 shrink-0 place-items-center rounded-lg border border-vault-gold/35 text-vault-gold">
              <SlidersHorizontal aria-hidden className="size-4" />
            </span>
          </div>

          <form className="mt-7 grid gap-8" action="#" aria-label="WebVault Konfigurator">
            <fieldset className="grid gap-4">
              <legend className="text-sm font-semibold">Projektweg wählen</legend>
              <div className="grid gap-3 md:grid-cols-3">
                {packages.map((item) => {
                  const active = selectedPackage === item.name;

                  return (
                    <button
                      key={item.name}
                      type="button"
                      onClick={() => setSelectedPackage(item.name)}
                      className={cn(
                        "interactive-card p-4 text-left",
                        active && "border-vault-gold bg-vault-gold text-vault-ink glow-edge",
                      )}
                    >
                      <span className="relative block">
                        <span className="flex items-center justify-between gap-3">
                          <span className="font-semibold">{item.name}</span>
                          {active ? <Check aria-hidden className="size-4" /> : null}
                        </span>
                        <span className={cn("mt-4 block text-sm", active ? "text-vault-ink/68" : "text-muted-foreground")}>
                          {item.price}
                        </span>
                      </span>
                    </button>
                  );
                })}
              </div>
            </fieldset>

            <fieldset className="grid gap-4">
              <legend className="text-sm font-semibold">Ziel</legend>
              <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
                {formGoals.map((item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() => setGoal(item)}
                    className={cn(
                      "rounded-lg border border-border bg-background px-3 py-3 text-left text-sm transition hover:border-vault-gold/55 hover:text-vault-gold",
                      goal === item && "border-vault-gold bg-vault-gold text-vault-ink hover:text-vault-ink",
                    )}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </fieldset>

            <fieldset className="grid gap-4">
              <legend className="text-sm font-semibold">Optionale Extras</legend>
              <div className="grid gap-3 md:grid-cols-2">
                {configuratorAddons.map((item) => {
                  const active = addons.includes(item);

                  return (
                    <label
                      key={item}
                      className={cn(
                        "flex cursor-pointer items-center gap-3 rounded-lg border border-border bg-background px-3 py-3 text-sm transition hover:border-vault-gold/55",
                        active && "border-vault-gold/70",
                      )}
                    >
                      <input
                        type="checkbox"
                        checked={active}
                        onChange={() => {
                          setAddons((current) =>
                            current.includes(item)
                              ? current.filter((addon) => addon !== item)
                              : [...current, item],
                          );
                        }}
                        className="size-4 accent-vault-gold"
                      />
                      {item}
                    </label>
                  );
                })}
              </div>
            </fieldset>

            <fieldset className="grid gap-4">
              <legend className="text-sm font-semibold">Zeithorizont</legend>
              <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
                {timelineOptions.map((item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() => setTimeline(item)}
                    className={cn(
                      "rounded-lg border border-border bg-background px-3 py-3 text-left text-sm transition hover:border-vault-gold/55 hover:text-vault-gold",
                      timeline === item && "border-vault-gold bg-vault-gold text-vault-ink hover:text-vault-ink",
                    )}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </fieldset>

            <div className="grid gap-4 md:grid-cols-2">
              <label className="grid gap-2 text-sm text-muted-foreground">
                Name
                <Input name="name" autoComplete="name" className="h-12" placeholder="Max Mustermann" />
              </label>
              <label className="grid gap-2 text-sm text-muted-foreground">
                E-Mail
                <Input name="email" type="email" autoComplete="email" className="h-12" placeholder="mail@unternehmen.de" />
              </label>
            </div>

            <label className="grid gap-2 text-sm text-muted-foreground">
              Kurzbeschreibung
              <Textarea
                name="message"
                className="min-h-32"
                placeholder="Was soll entstehen, was gibt es schon, und was soll besser funktionieren?"
              />
            </label>

            <Button className="h-12 bg-vault-gold text-vault-ink hover:bg-foreground hover:text-background">
              Anfrage vorbereiten
              <ArrowRight data-icon="inline-end" aria-hidden />
            </Button>
          </form>
        </Reveal>

        <Reveal className="surface-panel p-5 sm:p-6 lg:sticky lg:top-24">
          <p className="font-mono text-xs uppercase tracking-[0.28em] text-vault-line">
            Zusammenfassung
          </p>
          <h3 className="mt-4 text-2xl font-semibold">{packageData.name}</h3>
          <p className="mt-2 text-sm text-muted-foreground">{packageData.text}</p>
          <div className="mt-6 grid gap-4 text-sm">
            <div className="border-t border-border pt-4">
              <p className="text-muted-foreground">Kalkulation</p>
              <p className="mt-1 font-semibold">{packageData.price}</p>
              <p className="mt-1 text-muted-foreground">{packageData.alt}</p>
            </div>
            <div className="border-t border-border pt-4">
              <p className="text-muted-foreground">Ziel</p>
              <p className="mt-1 font-semibold">{goal}</p>
            </div>
            <div className="border-t border-border pt-4">
              <p className="text-muted-foreground">Tempo</p>
              <p className="mt-1 font-semibold">{timeline}</p>
            </div>
            <div className="border-t border-border pt-4">
              <p className="text-muted-foreground">Extras</p>
              <p className="mt-1 break-words font-semibold">
                {addons.length > 0 ? addons.join(", ") : "Noch keine Extras gewählt"}
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
