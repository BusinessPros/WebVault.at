import type { Metadata } from "next";
import { SiteFooter, SiteHeader } from "@/components/site/site-shell";
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
    <html lang="de" className="antialiased" suppressHydrationWarning>
      <body>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const saved = localStorage.getItem("webvault-theme");
                const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
                document.documentElement.classList.toggle("dark", (saved || (systemDark ? "dark" : "light")) === "dark");
              } catch (_) {}
            `,
          }}
        />
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
