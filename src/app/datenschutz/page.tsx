import Link from "next/link";

export default function DatenschutzPage() {
  return (
    <main className="min-h-screen bg-vault-paper text-vault-ink">
      <section className="section-shell py-20">
        <Link href="/" className="text-sm font-medium hover:underline">
          Zurück zur Startseite
        </Link>
        <h1 className="mt-10 text-5xl font-semibold tracking-[-0.04em]">
          Datenschutz
        </h1>
        <div className="mt-10 max-w-2xl space-y-5 text-muted-foreground">
          <p>Platzhalter für Datenschutzhinweise.</p>
          <p>
            Vor Veröffentlichung sollten Tracking, Kontaktformular,
            Hosting-Anbieter und eingesetzte Dienste rechtlich geprüft und hier
            sauber ergänzt werden.
          </p>
        </div>
      </section>
    </main>
  );
}
