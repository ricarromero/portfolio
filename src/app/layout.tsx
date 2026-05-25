import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "../components/ThemeProvider";
import ScrollProgress from "../components/ScrollProgress";
import SpotlightCursor from "../components/SpotlightCursor";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ricardo Romero | Programador Junior",
  description: "Portfolio personal de Ricardo Romero, estudiante de Ciencias de la Computación de la Universidad Nacional de San Juan. Especializado en Next.js, React, TypeScript y automatizaciones de sistemas empresariales.",
  keywords: [
    "Ricardo Romero",
    "Programador Junior",
    "Next.js",
    "React",
    "TypeScript",
    "San Juan",
    "Argentina",
    "Automatización",
    "IA",
    "Python",
    "HTML",
    "CSS"
  ],
  authors: [{ name: "Ricardo Romero" }],
  creator: "Ricardo Romero",
  openGraph: {
    title: "Ricardo Romero | Programador Junior",
    description: "Sistemas web a medida, automatización e inteligencia aplicada a problemáticas reales.",
    url: "https://github.com/ricarromero",
    siteName: "Ricardo Romero Portfolio",
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ricardo Romero | Programador Junior",
    description: "Sistemas web a medida y automatizaciones eficientes.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {/* Barra de progreso de lectura superior */}
          <ScrollProgress />
          
          {/* Destello spotlight que sigue al cursor en el fondo */}
          <SpotlightCursor />
          
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

