import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bene Gesserit",
  description: "Personal startup-radar framework.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=DM+Sans:wght@300;400;500;600;700&family=DM+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
        <meta name="theme-color" content="#F0EBE3" />
      </head>
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
