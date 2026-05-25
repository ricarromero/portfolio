"use client";

import { motion } from "framer-motion";
import { ExternalLink, ArrowRight, ShieldAlert, FileSearch, QrCode, MessageSquare, ClipboardList } from "lucide-react";
import { Project } from "../data/projects";
import { GithubIcon } from "./BrandIcons";

interface ProjectCardProps {
  project: Project;
  onOpenDetails: (project: Project) => void;
}

// Mapear los iconos representativos de los proyectos
const projectIconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  "minesafe-tracker": ShieldAlert,
  "legal-pdf-compressor": FileSearch,
  "qr-ingress-control": QrCode,
  "whatsapp-appointment-bot": MessageSquare,
  "order-management-system": ClipboardList,
};

export default function ProjectCard({ project, onOpenDetails }: ProjectCardProps) {
  const ProjectIcon = projectIconMap[project.id] || ClipboardList;

  return (
    <motion.div
      layout
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={`group relative rounded-3xl glass border border-card-border/75 shadow-lg overflow-hidden flex flex-col justify-between h-[450px] transition-all duration-300 ${project.colorTheme.border}`}
    >
      {/* Luz radial de fondo en hover (Glow específico) */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none z-0"
        style={{
          background: `radial-gradient(circle at 50% 20%, ${project.colorTheme.glow} 0%, transparent 60%)`
        }}
      />

      <div>
        {/* Imagen / Cabecera decorativa abstracta */}
        <div className={`relative h-44 w-full bg-gradient-to-br ${project.colorTheme.primary} flex items-center justify-center p-6 overflow-hidden z-0`}>
          {/* Formas abstractas decorativas */}
          <div className="absolute w-32 h-32 rounded-full bg-white/5 blur-xl -top-10 -right-10 group-hover:scale-110 transition-transform duration-700" />
          <div className="absolute w-24 h-24 rounded-full bg-white/5 blur-lg -bottom-5 -left-5 group-hover:scale-110 transition-transform duration-700" />

          {/* Isotipo/Icono central de gran tamaño */}
          <motion.div
            className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 text-white shadow-xl relative z-10"
            whileHover={{ rotate: 5, scale: 1.05 }}
          >
            <ProjectIcon className="w-8 h-8" />
          </motion.div>

          {/* Badge del Estado */}
          <span className="absolute top-4 right-4 px-2.5 py-1 rounded-md bg-black/30 backdrop-blur-md text-[10px] uppercase font-black tracking-widest text-white/95 border border-white/10">
            {project.status}
          </span>
        </div>

        {/* Contenido */}
        <div className="p-6 relative z-10">
          <span className="text-[9px] uppercase tracking-widest font-extrabold text-primary-500 dark:text-primary-400 mb-1.5 block">
            {project.enfoque.split(',')[0]}
          </span>
          <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300 leading-tight">
            {project.name}
          </h3>
          <p className="text-xs text-foreground/65 leading-relaxed font-medium line-clamp-3">
            {project.description}
          </p>
        </div>
      </div>

      {/* Footer de la Card con Tags y Acciones */}
      <div className="p-6 pt-0 relative z-10">
        {/* Tecnologías (tags) */}
        <div className="flex flex-wrap gap-1.5 mb-5 overflow-hidden max-h-[58px]">
          {project.stack.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 rounded-md bg-card-bg border border-card-border/60 text-[9px] font-bold text-foreground/75"
            >
              {tech}
            </span>
          ))}
          {project.stack.length > 4 && (
            <span className="px-2 py-0.5 rounded-md bg-card-bg border border-dashed border-card-border/60 text-[9px] font-bold text-foreground/50">
              +{project.stack.length - 4}
            </span>
          )}
        </div>

        {/* Botones de acción */}
        <div className="flex items-center justify-between border-t border-card-border/40 pt-4">
          <button
            suppressHydrationWarning={true}
            onClick={() => onOpenDetails(project)}
            className="flex items-center gap-1 text-xs font-bold text-primary-500 hover:text-primary-600 transition-colors cursor-pointer group/btn"
          >
            Ver detalles
            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover/btn:translate-x-0.5" />
          </button>

          <div className="flex items-center gap-2">
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-lg flex items-center justify-center bg-card-bg border border-card-border hover:border-primary-500/40 text-foreground/80 hover:text-primary-500 transition-all cursor-pointer"
              title="Ver Repositorio en GitHub"
              onClick={(e) => {
                if (project.repoUrl === "placeholder") {
                  e.preventDefault();
                  alert(`El repositorio de ${project.name} estará disponible pronto.`);
                }
              }}
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-lg flex items-center justify-center bg-card-bg border border-card-border hover:border-primary-500/40 text-foreground/80 hover:text-primary-500 transition-all cursor-pointer"
              title="Ver Demo en Vivo"
              onClick={(e) => {
                if (project.demoUrl === "#" || project.demoUrl === "placeholder") {
                  e.preventDefault();
                  alert(`La demo en vivo de ${project.name} se encuentra en etapa interna de pruebas.`);
                }
              }}
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
