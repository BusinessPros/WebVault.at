"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useSyncExternalStore } from "react";
import { ArrowRight, Menu, Moon, Sun, X } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { ctas, navItems } from "@/data/site-content";
import { cn } from "@/lib/utils";

type Theme = "light" | "dark";

const themeListeners = new Set<() => void>();

function readTheme(): Theme {
  if (typeof document === "undefined") {
    return "light";
  }

  return document.documentElement.classList.contains("dark") ? "dark" : "light";
}

function subscribeTheme(listener: () => void) {
  themeListeners.add(listener);

  return () => {
    themeListeners.delete(listener);
  };
}

function notifyTheme() {
  themeListeners.forEach((listener) => listener());
}

function isActive(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(`${href}/`);
}

function ThemeToggle() {
  const theme = useSyncExternalStore(subscribeTheme, readTheme, () => "light");
  const nextTheme = theme === "dark" ? "light" : "dark";

  return (
    <button
      type="button"
      aria-label={nextTheme === "dark" ? "Dark Mode aktivieren" : "Light Mode aktivieren"}
      onClick={() => {
        document.documentElement.classList.toggle("dark", nextTheme === "dark");
        window.localStorage.setItem("webvault-theme", nextTheme);
        notifyTheme();
      }}
      className="grid size-10 shrink-0 place-items-center rounded-lg border border-border bg-background/72 text-foreground transition hover:border-vault-gold/55 hover:text-vault-gold"
    >
      {theme === "dark" ? (
        <Sun aria-hidden className="size-4" />
      ) : (
        <Moon aria-hidden className="size-4" />
      )}
    </button>
  );
}

export function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/70 bg-background/82 text-foreground shadow-lg shadow-black/5 backdrop-blur-xl">
      <div className="section-shell flex h-16 items-center justify-between gap-3">
        <Link href="/" className="group flex min-w-0 items-center gap-3 font-semibold">
          <span className="flex size-9 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-vault-gold/30 bg-card text-vault-gold shadow-[0_0_28px_color-mix(in_oklab,var(--vault-gold),transparent_78%)] transition group-hover:border-vault-gold/70">
            <Image
              src="/webvault-logo.png"
              alt=""
              width={36}
              height={36}
              priority
              className="size-full object-cover"
            />
          </span>
          <span className="truncate text-lg tracking-tight">WebVault</span>
        </Link>

        <nav className="hidden items-center gap-1 text-sm font-medium lg:flex" aria-label="Hauptnavigation">
          {navItems.map((item) => {
            const active = isActive(pathname, item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className={cn(
                  "link-trace rounded-md px-3 py-2 text-muted-foreground transition hover:text-foreground",
                  active && "text-foreground",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Link
            href="/konfigurator"
            className={cn(
              buttonVariants({ variant: "default" }),
              "h-10 shrink-0 bg-vault-gold px-3 text-vault-ink shadow-[0_0_28px_color-mix(in_oklab,var(--vault-gold),transparent_74%)] hover:bg-foreground hover:text-background sm:px-4",
            )}
          >
            <span className="hidden sm:inline">{ctas.primary}</span>
            <span className="sm:hidden">Anfrage</span>
            <ArrowRight data-icon="inline-end" aria-hidden />
          </Link>
          <button
            type="button"
            aria-label={menuOpen ? "Menü schließen" : "Menü öffnen"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen((open) => !open)}
            className="grid size-10 place-items-center rounded-lg border border-border bg-background/72 text-foreground transition hover:border-vault-gold/55 lg:hidden"
          >
            {menuOpen ? <X aria-hidden className="size-4" /> : <Menu aria-hidden className="size-4" />}
          </button>
        </div>
      </div>

      <div
        id="mobile-navigation"
        className={cn(
          "section-shell overflow-hidden transition-[max-height,opacity] duration-300 lg:hidden",
          menuOpen ? "max-h-[28rem] opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <nav className="border-t border-border/70 py-3" aria-label="Mobile Navigation">
          <div className="grid gap-1 rounded-lg border border-border bg-card/96 p-2 shadow-2xl shadow-black/12">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-md px-3 py-3 text-sm font-medium text-muted-foreground transition hover:bg-muted hover:text-foreground",
                  isActive(pathname, item.href) && "bg-muted text-foreground",
                )}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background py-10 text-foreground">
      <div className="section-shell grid gap-8 text-sm text-muted-foreground md:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <Link href="/" className="flex w-fit items-center gap-3 font-semibold text-foreground">
            <span className="flex size-9 overflow-hidden rounded-lg border border-vault-gold/30 bg-card">
              <Image src="/webvault-logo.png" alt="" width={36} height={36} className="size-full object-cover" />
            </span>
            <span className="text-lg">WebVault</span>
          </Link>
          <p className="mt-3 max-w-sm leading-6">
            Digitale Lösungen für Unternehmen, die online wertiger auftreten und mehr Anfragen gewinnen wollen.
          </p>
        </div>
        <div className="grid content-start gap-2">
          <p className="font-medium text-foreground">Navigation</p>
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-foreground">
              {item.label}
            </Link>
          ))}
        </div>
        <div className="grid content-start gap-2">
          <p className="font-medium text-foreground">Rechtliches</p>
          <Link href="/impressum" className="hover:text-foreground">
            Impressum
          </Link>
          <Link href="/datenschutz" className="hover:text-foreground">
            Datenschutz
          </Link>
          <p className="pt-4 text-xs">© 2026 WebVault.</p>
        </div>
      </div>
    </footer>
  );
}
