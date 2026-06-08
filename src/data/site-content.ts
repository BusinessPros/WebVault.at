import {
  Bot,
  BriefcaseBusiness,
  Gauge,
  Layers3,
  MessageSquareText,
  Settings2,
  ShieldCheck,
  Sparkles,
  Wand2,
} from "lucide-react";

export const navItems = [
  { label: "Leistungen", href: "/leistungen" },
  { label: "Prozess", href: "/prozess" },
  { label: "Angebot", href: "/pakete" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Über uns", href: "/ueber-uns" },
  { label: "Kontakt", href: "/kontakt" },
];

export const stats = [
  { value: "4-8", label: "Wochen bis Launch" },
  { value: "24h", label: "Antwort auf Anfragen" },
  { value: "100%", label: "persönliche Betreuung" },
];

export const services = [
  {
    icon: Layers3,
    title: "Websites & Landingpages",
    text: "Schnelle, SEO-orientierte Seiten, die Vertrauen aufbauen und Anfragen auslösen.",
  },
  {
    icon: Wand2,
    title: "Redesigns",
    text: "Bestehende Websites werden klarer, schneller, wertiger und conversion-stärker.",
  },
  {
    icon: Bot,
    title: "KI-Chatbots",
    text: "FAQ-, Lead- und Anfrage-Bots für Websites, die Kunden rund um die Uhr führen.",
  },
  {
    icon: Settings2,
    title: "Automatisierung",
    text: "Formulare, Benachrichtigungen, CRM-Übergaben und smarte digitale Abläufe.",
  },
  {
    icon: MessageSquareText,
    title: "Beratung & Strategie",
    text: "Klare Entscheidungen zu Angebot, Struktur, Tools, Hosting und Online-Auftritt.",
  },
];

export const whyItems = [
  {
    icon: BriefcaseBusiness,
    title: "Persönlich statt anonym",
    text: "Sie sprechen nicht mit einem Ticket-System, sondern mit Menschen, die Ihr Projekt wirklich verstehen.",
  },
  {
    icon: Gauge,
    title: "Schnell und sauber",
    text: "Moderne Technik, klare Entscheidungen und kurze Wege vom Konzept zum Launch.",
  },
  {
    icon: ShieldCheck,
    title: "Technisch belastbar",
    text: "Performance, Barrierearmut, mobile Layouts und saubere Struktur werden von Anfang an mitgedacht.",
  },
  {
    icon: Sparkles,
    title: "Verkaufsorientiert",
    text: "Die Website wird nicht nur schön, sondern führt Besucher gezielt zur Anfrage.",
  },
];

export const aboutPrinciples = [
  {
    title: "Klarheit vor Effekt",
    text: "Jede Animation, jedes Formular und jede Seite braucht einen Zweck: mehr Vertrauen, weniger Reibung, bessere Anfragen.",
  },
  {
    title: "Technik, die mitwächst",
    text: "Websites werden so aufgebaut, dass spätere Unterseiten, Automatisierungen und KI-Funktionen sauber ergänzt werden können.",
  },
  {
    title: "Direkte Zusammenarbeit",
    text: "Kurze Abstimmungen, klare Empfehlungen und ein Ablauf, der auch ohne internes Marketing-Team funktioniert.",
  },
];

export const aboutOwners = [
  {
    name: "Bernhard Weinfurter",
    role: "Beratung, Design & Marketing",
    topics: ["Beratung", "Design", "Marketing"],
    text: "Bernhard schärft Positionierung, Angebotslogik und visuelle Richtung. Sein Fokus liegt darauf, aus Ideen einen klaren Webauftritt zu formen, der professionell wirkt, Vertrauen aufbaut und Besucher ohne Umwege zur Anfrage führt.",
  },
  {
    name: "Lukas Assfall",
    role: "Technik, Design & Hosting",
    topics: ["Technik", "Design", "Hosting"],
    text: "Lukas sorgt für die technische Basis, schnelle Ladezeiten, saubere Umsetzung und stabile Veröffentlichung. Er verbindet Design-Verständnis mit Hosting, Struktur und Entwicklung, damit die Website nicht nur gut aussieht, sondern langfristig verlässlich arbeitet.",
  },
];

export const processSteps = [
  ["01", "Analyse", "Ziele, Zielgruppe, Angebot und vorhandene Inhalte werden geschärft."],
  ["02", "Konzept", "Wir bauen die Seitenlogik, Prioritäten und den Anfragepfad."],
  ["03", "Design", "Ein hochwertiger Look entsteht, passend zu Markt und Preisniveau."],
  ["04", "Entwicklung", "Next.js, responsive UI, Animationen, Formulare und technische Basis."],
  ["05", "Launch", "Deployment, Tests, Feinschliff und saubere Übergabe."],
  ["06", "Betreuung", "Wartung, Erweiterungen, Automatisierungen und Optimierung."],
];

export const packages = [
  {
    name: "Kompakter Start",
    price: "Individuell abgestimmt",
    alt: "Für klare erste Auftritte mit sauberem Anfrageweg.",
    text: "Für kleine Betriebe, Selbstständige und Angebote, die schnell professionell online gehen sollen.",
    items: ["Onepager oder kompakte Seitenstruktur", "Individuelles Design", "Kontaktweg & CTA", "Hosting-Einrichtung"],
  },
  {
    name: "Wachstumsauftritt",
    price: "Nach Umfang kalkuliert",
    alt: "Für Unternehmen, die mehr Struktur, Sichtbarkeit und Vertrauen brauchen.",
    text: "Für Dienstleister und lokale Unternehmen, die ihren Auftritt gezielt ausbauen wollen.",
    items: ["Ausgebaute Seitenstruktur", "SEO-Basis", "Anfrageformular", "Wartung & Updates"],
    featured: true,
  },
  {
    name: "Digitales System",
    price: "Konzeptbasiert geplant",
    alt: "Für Website, KI-Funktionen und digitale Abläufe aus einem Guss.",
    text: "Für Unternehmen, die Website, Chatbot und wiederkehrende Prozesse miteinander verbinden wollen.",
    items: ["Strategische Website-Struktur", "KI-Chatbot", "Wissensbasis", "Automatisierte Lead-Erfassung"],
  },
];

export const portfolioProjects = [
  {
    slug: "handwerk-premium",
    title: "Handwerk Premium",
    type: "Handwerksbetrieb",
    summary: "Klarer Auftritt für Leistungen, Vertrauen und schnelle Kontaktaufnahme.",
    tags: ["Website", "Kontaktweg", "Lokale Sichtbarkeit"],
  },
  {
    slug: "beratung-studio",
    title: "Beratung Studio",
    type: "Dienstleister",
    summary: "Ruhige, hochwertige Struktur für Beratung, Angebote und Erstgespräche.",
    tags: ["Positionierung", "Design", "Leadformular"],
  },
  {
    slug: "lokal-service",
    title: "Lokal Service",
    type: "Lokales Unternehmen",
    summary: "Mobile-first Website für schnelle Orientierung und direkte Anfragen.",
    tags: ["Mobile UX", "SEO-Basis", "Anfrage"],
  },
  {
    slug: "ki-assist",
    title: "KI Assist",
    type: "Chatbot-System",
    summary: "Website-Erweiterung mit FAQ-Fluss, Wissensbasis und Lead-Erfassung.",
    tags: ["KI-Chatbot", "Automation", "Support"],
  },
  {
    slug: "atelier-brand",
    title: "Atelier Brand",
    type: "Kreativstudio",
    summary: "Visueller Portfolio-Auftritt mit starken Projektflächen und Kontaktfokus.",
    tags: ["Portfolio", "Design", "Galerie"],
  },
  {
    slug: "immobilien-portal",
    title: "Immobilien Portal",
    type: "Immobilien",
    summary: "Strukturierte Präsentation für Objekte, Vertrauen und Beratungsgespräche.",
    tags: ["Objekte", "Struktur", "Kontakt"],
  },
  {
    slug: "fitness-concept",
    title: "Fitness Concept",
    type: "Studio",
    summary: "Dynamischer Auftritt für Kurse, Mitgliedschaft und Probetraining.",
    tags: ["Landingpage", "Conversion", "Mobile"],
  },
  {
    slug: "gastro-reservierung",
    title: "Gastro Reservierung",
    type: "Gastronomie",
    summary: "Atmosphärische Seite mit Menü, Reservierung und lokaler Auffindbarkeit.",
    tags: ["Reservierung", "Menü", "Local SEO"],
  },
  {
    slug: "academy-system",
    title: "Academy System",
    type: "Bildung",
    summary: "Mehrseitige Struktur für Kurse, Inhalte und wiederkehrende Anfragen.",
    tags: ["Mehrseiter", "Kurse", "Automation"],
  },
];

export const formGoals = [
  "Neue Website",
  "Website-Redesign",
  "KI-Chatbot",
  "Automatisierung",
  "Beratung",
];

export const configuratorAddons = [
  "SEO-Basis & lokale Sichtbarkeit",
  "KI-Chatbot",
  "Automatisierte Lead-Erfassung",
  "Mehrsprachige Inhalte",
  "Wartung & laufende Optimierung",
];

export const timelineOptions = [
  "So schnell wie möglich",
  "In 4-8 Wochen",
  "In 2-3 Monaten",
  "Ich möchte erst planen",
];

export const ctas = {
  primary: "Anfrage starten",
  secondary: "Portfolio ansehen",
};

export const headerHighlights = [
  "Websites",
  "Automatisierung",
  "KI-Chatbots",
  "Digitale Systeme",
  "Conversion",
];

export const workSteps = [
  {
    label: "01",
    title: "Verstehen",
    text: "Wir klären Zielgruppe, Angebot, Einwände und den Weg zur Anfrage, bevor Design oder Code entstehen.",
  },
  {
    label: "02",
    title: "Strukturieren",
    text: "Aus Inhalten, Seitenlogik und Nutzerführung entsteht ein klarer Aufbau, der schnell Orientierung gibt.",
  },
  {
    label: "03",
    title: "Umsetzen",
    text: "Design, Entwicklung, Animationen und technische Basis werden sauber verbunden und mobil geprüft.",
  },
  {
    label: "04",
    title: "Verbessern",
    text: "Nach dem Launch bleiben Performance, Inhalte, Automatisierungen und Anfragewege gezielt ausbaubar.",
  },
];

export const workTechnologies = [
  { name: "HTML5", kind: "shield", bg: "#e34f26", fg: "#ffffff", short: "5" },
  { name: "CSS3", kind: "shield", bg: "#1572b6", fg: "#ffffff", short: "3" },
  { name: "JavaScript", kind: "square", bg: "#f7df1e", fg: "#111111", short: "JS" },
  { name: "TypeScript", kind: "square", bg: "#3178c6", fg: "#ffffff", short: "TS" },
  { name: "React", kind: "atom", bg: "#61dafb", fg: "#0b1320", short: "R" },
  { name: "Next.js", kind: "word", bg: "#111111", fg: "#ffffff", short: "N" },
  { name: "Tailwind CSS", kind: "waves", bg: "#38bdf8", fg: "#06202a", short: "TW" },
  { name: "Node.js", kind: "hex", bg: "#5fa04e", fg: "#ffffff", short: "N" },
  { name: "Three.js", kind: "triad", bg: "#111111", fg: "#ffffff", short: "3" },
  { name: "Framer Motion", kind: "motion", bg: "#ff3366", fg: "#ffffff", short: "M" },
  { name: "GitHub", kind: "github", bg: "#181717", fg: "#ffffff", short: "GH" },
  { name: "Google Antigravity", kind: "antigravity", bg: "#ffffff", fg: "#202124", short: "AG" },
];
