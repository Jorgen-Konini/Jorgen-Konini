import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jorgen Konini — Software Engineer",
  description:
    "Software Engineer building web & mobile products end to end — React/React Native frontends in TypeScript, Go/PostgreSQL backends. 5+ years shipping for US healthcare, HR, and legal companies.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
