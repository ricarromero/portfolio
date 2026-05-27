"use client";

import { Mail, ArrowUp } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full py-10 bg-background border-t border-card-border/30 relative z-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Info */}
        <div className="text-center md:text-left flex flex-col">
          <span className="text-sm font-bold tracking-tight text-foreground/90">Ricardo Octavio Romero</span>
          <span className="text-[10px] uppercase font-bold text-foreground/45 mt-1 block tracking-wider">
            Junior Software Developer
          </span>
        </div>

        {/* Links de Redes */}
        <div className="flex items-center gap-3">
          <a
            href="https://github.com/ricarromero"
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-xl flex items-center justify-center bg-card-bg border border-card-border hover:border-primary-500/40 text-foreground/60 hover:text-primary-500 transition-all duration-300"
            aria-label="GitHub de Ricardo Romero"
          >
            <GithubIcon className="w-4 h-4" />
          </a>
          <a
            href="https://linkedin.com/in/ricardo-octavio-romero-896860263"
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-xl flex items-center justify-center bg-card-bg border border-card-border hover:border-primary-500/40 text-foreground/60 hover:text-primary-500 transition-all duration-300"
            aria-label="LinkedIn de Ricardo Octavio Romero"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>
          <a
            href="mailto:ricardooromero15@gmail.com"
            className="w-9 h-9 rounded-xl flex items-center justify-center bg-card-bg border border-card-border hover:border-primary-500/40 text-foreground/60 hover:text-primary-500 transition-all duration-300"
            aria-label="Email de Ricardo Romero"
          >
            <Mail className="w-4 h-4" />
          </a>
        </div>

        {/* Derechos y Volver Arriba */}
        <div className="flex items-center gap-4.5 text-[10px] font-bold text-foreground/40 uppercase tracking-widest">
          <span>&copy; {currentYear} Todos los derechos reservados</span>
          
          <button
            suppressHydrationWarning={true}
            onClick={handleScrollToTop}
            className="w-9 h-9 rounded-xl flex items-center justify-center bg-card-bg border border-card-border hover:border-primary-500/40 text-foreground/60 hover:text-primary-500 hover:shadow-md transition-all cursor-pointer"
            aria-label="Volver arriba de la página"
          >
            <ArrowUp className="w-4.5 h-4.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
