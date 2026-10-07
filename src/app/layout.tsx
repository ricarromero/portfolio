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
  title: "Ricardo Romero | Sistemas, Datos y Automatización",
  description: "Portfolio de Ricardo Romero, estudiante avanzado de Ciencias de la Computación en la UNSJ. Proyectos de sistemas, datos, automatización y desarrollo de soluciones tecnológicas.",
  keywords: [
    "Ricardo Romero",
    "Ciencias de la Computación",
    "UNSJ",
    "Sistemas de Información",
    "SQL",
    "Bases de datos",
    "Automatización",
    "n8n",
    "APIs",
    "Python",
    "Desarrollo de software",
    "San Juan Argentina"
  ],
  authors: [{ name: "Ricardo Romero" }],
  creator: "Ricardo Romero",
  openGraph: {
    title: "Ricardo Romero | Sistemas, Datos y Automatización",
    description: "Portfolio de Ricardo Romero, estudiante avanzado de Ciencias de la Computación en la UNSJ. Proyectos de sistemas, datos, automatización y soluciones tecnológicas.",
    url: "https://github.com/ricarromero",
    siteName: "Ricardo Romero Portfolio",
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ricardo Romero | Sistemas, Datos y Automatización",
    description: "Estudiante avanzado de Ciencias de la Computación en la UNSJ. Sistemas, datos y automatización de procesos.",
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

