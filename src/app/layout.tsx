import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "WebVault | Websites, Automatisierung & KI-Systeme",
  description:
    "WebVault baut hochwertige Websites, KI-Chatbots und digitale Systeme für Unternehmen, die online mehr Anfragen gewinnen wollen.",
  metadataBase: new URL("https://webvault.local"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className="antialiased">
      <body>{children}</body>
    </html>
  );
}
