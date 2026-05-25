"use client";

import { useEffect } from "react";
import { X, ExternalLink, ShieldAlert, Cpu, CheckCircle2, Bookmark } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Project } from "../data/projects";
import { GithubIcon } from "./BrandIcons";

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  // Manejar el cierre con la tecla Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Overlay de fondo con blur profundo */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 dark:bg-black/80 backdrop-blur-md cursor-pointer"
          />

          {/* Caja del Modal */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="relative w-full max-w-3xl max-h-[85vh] overflow-y-auto rounded-3xl bg-background border border-card-border/80 shadow-2xl z-10 no-scrollbar"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
          >
            {/* Encabezado visual (Imagen abstracta de fondo) */}
            <div className={`relative h-44 md:h-52 w-full bg-gradient-to-br ${project.colorTheme.primary} flex items-end p-6 md:p-8 overflow-hidden z-0`}>
              <div className="absolute w-44 h-44 rounded-full bg-white/5 blur-2xl -top-12 -right-12" />
              <div className="absolute w-36 h-36 rounded-full bg-white/5 blur-xl -bottom-10 -left-10" />

              {/* Botón de cerrar flotante */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 w-9 h-9 flex items-center justify-center rounded-xl bg-black/25 hover:bg-black/40 backdrop-blur-md text-white border border-white/10 hover:border-white/20 transition-all cursor-pointer shadow-md"
                aria-label="Cerrar modal de detalles"
              >
                <X className="w-4.5 h-4.5" />
              </button>

              <div className="relative z-10 text-white">
                <span className="text-[10px] uppercase font-black tracking-widest bg-black/25 px-2.5 py-1 rounded-md border border-white/10 mb-2.5 inline-block">
                  {project.category}
                </span>
                <h2 id="modal-title" className="text-2xl md:text-3xl font-black tracking-tight leading-tight">
                  {project.name}
                </h2>
              </div>
            </div>

            {/* Contenido Detallado */}
            <div className="p-6 md:p-8 space-y-6">
              {/* Resumen & Estado */}
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-card-border/40 pb-5">
                <div>
                  <span className="text-xs text-foreground/45 uppercase tracking-widest font-bold">Enfoque Principal</span>
                  <p className="text-xs font-bold text-foreground/80 mt-0.5">{project.enfoque}</p>
                </div>
                <div className="text-right flex flex-col items-end">
                  <span className="text-xs text-foreground/45 uppercase tracking-widest font-bold">Estado</span>
                  <span className="inline-flex items-center gap-1 mt-1 text-xs font-extrabold text-primary-500 bg-primary-500/10 px-2.5 py-0.5 rounded-full">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary-500 animate-pulse" />
                    {project.status}
                  </span>
                </div>
              </div>

              {/* Descripción larga */}
              <p className="text-sm text-foreground/75 leading-relaxed font-medium">
                {project.longDescription}
              </p>

              {/* Problema vs Solución (Grid) */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-2">
                {/* Problema */}
                <div className="p-5 rounded-2xl bg-red-500/5 dark:bg-red-500/3 border border-red-500/10 dark:border-red-500/5">
                  <div className="flex items-center gap-2 mb-3 text-red-500 dark:text-red-400">
                    <ShieldAlert className="w-5 h-5 flex-shrink-0" />
                    <h3 className="text-xs uppercase font-extrabold tracking-wider">El Problema</h3>
                  </div>
                  <p className="text-xs text-foreground/70 leading-relaxed font-medium">
                    {project.problem}
                  </p>
                </div>

                {/* Solución */}
                <div className="p-5 rounded-2xl bg-emerald-500/5 dark:bg-emerald-500/3 border border-emerald-500/10 dark:border-emerald-500/5">
                  <div className="flex items-center gap-2 mb-3 text-emerald-500 dark:text-emerald-400">
                    <Cpu className="w-5 h-5 flex-shrink-0" />
                    <h3 className="text-xs uppercase font-extrabold tracking-wider">La Solución</h3>
                  </div>
                  <p className="text-xs text-foreground/70 leading-relaxed font-medium">
                    {project.solution}
                  </p>
                </div>
              </div>

              {/* Funcionalidades */}
              <div className="space-y-3.5 pt-2">
                <div className="flex items-center gap-2 text-foreground/80">
                  <Bookmark className="w-4 h-4 text-primary-500" />
                  <h3 className="text-xs uppercase font-extrabold tracking-wider">Funcionalidades Clave</h3>
                </div>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {project.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2.5 p-3 rounded-xl bg-card-bg/60 border border-card-border/40 hover:border-primary-500/10 transition-colors">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                      <span className="text-xs text-foreground/75 leading-relaxed font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Stack Completo */}
              <div className="space-y-3 pt-2">
                <span className="text-xs text-foreground/45 uppercase tracking-widest font-bold">Tecnologías Utilizadas</span>
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 rounded-lg bg-card-bg border border-card-border text-xs font-bold text-foreground/80 hover:border-primary-500/25 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Botones de Navegación Final */}
              <div className="flex flex-wrap items-center justify-end gap-3 pt-6 border-t border-card-border/40">
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-3 rounded-xl bg-card-bg border border-card-border hover:border-primary-500/40 text-foreground font-bold text-xs transition-all cursor-pointer shadow-sm"
                  onClick={(e) => {
                    if (project.repoUrl === "placeholder") {
                      e.preventDefault();
                      alert(`El repositorio de ${project.name} estará disponible pronto.`);
                    }
                  }}
                >
                  <GithubIcon className="w-4 h-4" />
                  Ver Repositorio
                </a>
                
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-primary-600 to-accent-600 hover:from-primary-500 hover:to-accent-500 text-white font-bold text-xs transition-all cursor-pointer shadow-md shadow-primary-500/10"
                  onClick={(e) => {
                    if (project.demoUrl === "#" || project.demoUrl === "placeholder") {
                      e.preventDefault();
                      alert(`La demo en vivo de ${project.name} se encuentra en etapa interna de pruebas.`);
                    }
                  }}
                >
                  <ExternalLink className="w-4 h-4" />
                  Ver Demo en Vivo
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
