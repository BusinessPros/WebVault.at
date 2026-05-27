namespace WebAgentur.Models;

public static class SiteContent
{
    public static readonly IReadOnlyList<ServiceItem> Services = new[]
    {
        new ServiceItem(
            "Website-Abo",
            "Eine moderne Website inklusive Design, Umsetzung, Hosting-Einrichtung, Wartung und kleinen monatlichen Anpassungen.",
            "ab 149 €/Monat",
            "/angebote#website-abo"),
        new ServiceItem(
            "Website zum Fixpreis",
            "Ein klar abgegrenztes Website-Projekt zum einmaligen Preis, mit sauberer Übergabe als Dateien, Repository oder Deployment.",
            "ab 799 €",
            "/angebote#fixpreis"),
        new ServiceItem(
            "KI-Chatbots",
            "FAQ-, Lead- und Anfrage-Bots für Websites, die häufige Fragen beantworten oder Anfragen strukturiert sammeln.",
            "ab 49 €/Monat + Setup",
            "/ki-chatbots"),
        new ServiceItem(
            "Beratung",
            "Unterstützung bei Domains, Hosting, Website-Konzept, SEO-Basics, Tools und sinnvollen digitalen nächsten Schritten.",
            "ab 49 €/Stunde",
            "/beratung"),
        new ServiceItem(
            "Custom Lösungen",
            "Individuelle Formulare, Buchungsabläufe, CMS-Anbindungen, Automatisierungen oder passende Projektkombinationen.",
            "individuelles Angebot",
            "/leistungen#custom-loesungen")
    };

    public static readonly IReadOnlyList<PricingPackage> PricingPackages = new[]
    {
        new PricingPackage(
            "Starter",
            "ab 149 €/Monat",
            "einmalig ab 799 €",
            "kleine Betriebe, Vereine oder einfache Webauftritte",
            new[]
            {
                "Onepager oder bis zu 3 Unterseiten",
                "individuelles Design",
                "responsive Umsetzung",
                "Kontaktmöglichkeit",
                "Hosting-Einrichtung",
                "technische Wartung",
                "bis zu 30 Minuten kleine Änderungen pro Monat"
            },
            "starter"),
        new PricingPackage(
            "Business",
            "ab 249 €/Monat",
            "einmalig ab 1.499 €",
            "Restaurants, Dienstleister, Gewerbe und lokale Unternehmen",
            new[]
            {
                "5 bis 8 Seiten",
                "individuelles Design",
                "SEO-Basis",
                "Kontaktformular",
                "Galerie / Leistungen / Team / Öffnungszeiten",
                "Hosting-Einrichtung",
                "Wartung und Updates",
                "bis zu 60 Minuten kleine Änderungen pro Monat"
            },
            "business"),
        new PricingPackage(
            "Business + KI",
            "ab 399 €/Monat",
            "individuelles Angebot",
            "Unternehmen, die Website und KI-Chatbot kombinieren möchten",
            new[]
            {
                "alles aus Business",
                "KI-Chatbot-Integration",
                "FAQ- oder Lead-Bot",
                "Bot-Konfiguration",
                "einfache Wissensbasis",
                "monatliches Nutzungslimit",
                "laufende Betreuung"
            },
            "business-ki")
    };

    public static readonly IReadOnlyList<PortfolioItem> PortfolioItems = new[]
    {
        new PortfolioItem(
            "Restaurant-Demo",
            "Moderne Website für ein Restaurant mit Speisekarte, Öffnungszeiten, Galerie und Reservierungsanfrage.",
            new[] { "Restaurant", "Speisekarte", "Reservierung", "Galerie" },
            "restaurant"),
        new PortfolioItem(
            "Handwerker-Demo",
            "Übersichtliche Website für einen lokalen Handwerksbetrieb mit Leistungen, Projektbildern und Anfrageformular.",
            new[] { "Handwerk", "Leistungen", "Anfrageformular", "Regional" },
            "craft"),
        new PortfolioItem(
            "Friseur-/Kosmetik-Demo",
            "Elegante Website für Friseur, Kosmetik oder Beauty-Dienstleistungen mit Preisen, Team und Terminbutton.",
            new[] { "Beauty", "Preise", "Termin", "Team" },
            "beauty"),
        new PortfolioItem(
            "Verein-/Organisation-Demo",
            "Informationsseite für Vereine oder Organisationen mit News, Veranstaltungen und Kontaktmöglichkeiten.",
            new[] { "Verein", "Events", "News", "Kontakt" },
            "organization"),
        new PortfolioItem(
            "KI-Chatbot-Demo",
            "Beispiel für eine Website mit integrierter Chat-Sprechblase für häufige Fragen und Anfragen.",
            new[] { "KI-Chatbot", "FAQ", "Leads", "Support" },
            "chatbot")
    };

    public static readonly IReadOnlyList<ProcessStep> Process = new[]
    {
        new ProcessStep("1", "Erstkontakt", "Wir klären kurz, was gebraucht wird und ob Abo, Fixpreis oder Beratung besser passt."),
        new ProcessStep("2", "Konzept & Angebot", "Wir strukturieren Seiten, Funktionen, Inhalte und erstellen ein transparentes Angebot."),
        new ProcessStep("3", "Design & Umsetzung", "Die Website wird modern gestaltet, responsive umgesetzt und technisch vorbereitet."),
        new ProcessStep("4", "Feedback & Anpassung", "Sie prüfen den Stand, wir verbessern Inhalte, Aufbau und Details gemeinsam."),
        new ProcessStep("5", "Veröffentlichung & Betreuung", "Wir richten das Deployment ein und betreuen die Website je nach Modell weiter.")
    };

    public static readonly IReadOnlyList<string> Platforms = new[]
    {
        "Netlify",
        "Vercel",
        "Cloudflare Pages",
        "Railway",
        "Hostinger",
        "OpenAI API"
    };

    public static readonly IReadOnlyList<FaqItem> FaqItems = new[]
    {
        new FaqItem(
            "Was kostet eine Website bei euch?",
            "Einfache Websites starten ab 149 €/Monat im Abo oder ab 799 € als einmaliges Projekt. Der genaue Preis hängt vom Umfang und den gewünschten Funktionen ab."),
        new FaqItem(
            "Was ist im Website-Abo enthalten?",
            "Im Abo sind je nach Paket Design, Umsetzung, Hosting-Einrichtung, technische Wartung und kleine monatliche Änderungen enthalten."),
        new FaqItem(
            "Übernehmt ihr auch Hosting?",
            "Wir betreiben keine eigenen Server, richten die Website aber bei passenden Anbietern wie Netlify, Vercel, Cloudflare Pages, Railway oder Hostinger ein. Je nach Projekt zahlt der Kunde die Drittanbieter-Kosten direkt oder sie werden im Paket berücksichtigt."),
        new FaqItem(
            "Wem gehört die Website?",
            "Das hängt vom gewählten Modell ab. Bei einmaligen Projekten kann die Website nach vollständiger Zahlung als Projektdatei, Repository oder Deployment übergeben werden. Beim Abo wird die Nutzung und Übergabe vertraglich geregelt."),
        new FaqItem(
            "Erstellt ihr auch Texte und Bilder?",
            "Wir helfen bei Struktur und Formulierung. Professionelle Fotos, Logos oder rechtlich geprüfte Texte sind nicht automatisch enthalten, können aber vorbereitet oder auf Wunsch zusätzlich organisiert werden."),
        new FaqItem(
            "Erstellt ihr auch Impressum und Datenschutz?",
            "Wir können Platzhalter und technische Seiten integrieren. Rechtlich verbindliche Texte sollten vom Kunden, einem Rechtsdienstleister oder einem passenden Generator bereitgestellt und geprüft werden."),
        new FaqItem(
            "Können wir später Inhalte ändern lassen?",
            "Ja. Je nach Paket sind kleine Änderungen monatlich enthalten. Größere Änderungen oder neue Funktionen werden separat angeboten."),
        new FaqItem(
            "Was bringt ein KI-Chatbot?",
            "Ein KI-Chatbot kann häufige Fragen beantworten, Informationen erklären oder Anfragen sammeln. Besonders sinnvoll ist das bei Restaurants, Dienstleistern, Buchungsanfragen und Unternehmen mit vielen wiederkehrenden Fragen.")
    };
}

public sealed record ServiceItem(string Title, string Text, string Meta, string Link);

public sealed record PricingPackage(
    string Name,
    string MonthlyPrice,
    string AlternativePrice,
    string SuitableFor,
    IReadOnlyList<string> Includes,
    string Slug);

public sealed record PortfolioItem(string Title, string Description, IReadOnlyList<string> Tags, string VisualClass);

public sealed record ProcessStep(string Number, string Title, string Text);

public sealed record FaqItem(string Question, string Answer);
