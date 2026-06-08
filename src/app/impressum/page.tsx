import Link from "next/link";

export default function ImpressumPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="section-shell py-28">
        <Link href="/" className="text-sm font-medium hover:underline">
          Zurück zur Startseite
        </Link>
        <h1 className="mt-10 text-5xl font-semibold tracking-[-0.04em]">
          Impressum
        </h1>
        <div className="mt-10 max-w-2xl space-y-5 text-muted-foreground">
          <p>WebVault</p>
          <p>Platzhalter für Name, Anschrift, Kontakt und rechtliche Angaben.</p>
          <p>
            Diese Seite ist ein technischer Platzhalter und ersetzt keine
            rechtliche Prüfung.
          </p>
        </div>
      </section>
    </main>
  );
}
