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
          <p>Die vollständigen Anbieterangaben werden vor Veröffentlichung ergänzt.</p>
          <p>
            Diese Seite dient aktuell der technischen Vorbereitung und ersetzt keine
            rechtliche Prüfung vor dem Livegang.
          </p>
        </div>
      </section>
    </main>
  );
}
