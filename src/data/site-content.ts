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
  { label: "Leistungen", href: "#leistungen" },
  { label: "Prozess", href: "#prozess" },
  { label: "Pakete", href: "#pakete" },
  { label: "Projekte", href: "#projekte" },
  { label: "Kontakt", href: "#kontakt" },
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
    text: "Bestehende Websites werden klarer, schneller, wertiger und conversion-staerker.",
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
    title: "Persoenlich statt anonym",
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
    text: "Die Website wird nicht nur schoen, sondern fuehrt Besucher gezielt zur Anfrage.",
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
    name: "Starter",
    price: "ab 149 €/Monat",
    alt: "oder ab 799 € einmalig",
    text: "Für kleine Betriebe, Selbstständige und klare Onepager.",
    items: ["Onepager oder bis 3 Seiten", "Individuelles Design", "Kontaktweg & CTA", "Hosting-Einrichtung"],
  },
  {
    name: "Business",
    price: "ab 249 €/Monat",
    alt: "oder ab 1.499 € einmalig",
    text: "Für Dienstleister und lokale Unternehmen mit echtem Wachstumsziel.",
    items: ["5-8 Seiten", "SEO-Basis", "Anfrageformular", "Wartung & Updates"],
    featured: true,
  },
  {
    name: "Business + KI",
    price: "ab 399 €/Monat",
    alt: "Custom Setup möglich",
    text: "Für Unternehmen, die Website, Chatbot und digitale Abläufe kombinieren.",
    items: ["Alles aus Business", "KI-Chatbot", "Wissensbasis", "Automatisierte Lead-Erfassung"],
  },
];

export const cases = [
  {
    type: "Handwerksbetrieb",
    title: "Mehr qualifizierte Anfragen statt unklarer Telefonate.",
    result: "+127%",
    label: "Anfragequalität",
  },
  {
    type: "Dienstleister",
    title: "Klarer Auftritt mit Premium-Wirkung und sauberem Angebotsfokus.",
    result: "+86%",
    label: "Sichtbarkeit",
  },
  {
    type: "Organisation",
    title: "Neue Struktur für Inhalte, Kontaktwege und wiederkehrende Fragen.",
    result: "+63%",
    label: "Zeitersparnis",
  },
];

export const formGoals = [
  "Neue Website",
  "Website-Redesign",
  "KI-Chatbot",
  "Automatisierung",
  "Beratung",
];

export const ctas = {
  primary: "Anfrage starten",
  secondary: "Projekte ansehen",
};

export const headerHighlights = [
  "Websites",
  "Automatisierung",
  "KI-Chatbots",
  "Digitale Systeme",
  "Conversion",
];
