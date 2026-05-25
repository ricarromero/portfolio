"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects, Project } from "../data/projects";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";

const categories: Project["category"][] = ["Todos", "Python", "HTML", "CSS", "Automatización", "Gestión", "Frontend"];

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<Project["category"]>("Todos");
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Filtrar proyectos
  const filteredProjects = selectedCategory === "Todos"
    ? projects
    : projects.filter((project) => project.category === selectedCategory);

  // Abrir detalles
  const handleOpenDetails = (project: Project) => {
    setActiveProject(project);
    setIsModalOpen(true);
  };

  // Cerrar detalles
  const handleCloseDetails = () => {
    setIsModalOpen(false);
  };

  return (
    <section id="proyectos" className="py-24 relative overflow-hidden bg-primary-50/5 dark:bg-transparent border-t border-card-border/20">
      {/* Glow Effects */}
      <div className="absolute top-1/4 right-10 w-[300px] h-[300px] bg-primary-500/5 rounded-full blur-[100px] pointer-events-none animate-pulse-slow" />
      <div className="absolute bottom-1/4 left-10 w-[300px] h-[300px] bg-accent-500/5 rounded-full blur-[100px] pointer-events-none animate-pulse-slow" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Cabecera de Sección */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-xs uppercase font-extrabold tracking-widest text-primary-500 bg-primary-500/10 px-3 py-1 rounded-full mb-3">
            Proyectos destacados
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-foreground">
            Sistemas Reales y Automatizaciones
          </h2>
          <div className="h-1 bg-gradient-to-r from-primary-500 to-accent-500 mt-4 rounded-full w-[60px]" />
          <p className="text-sm text-foreground/60 max-w-xl mt-4 leading-relaxed font-medium">
            Proyectos concebidos para resolver problemáticas del mundo real, integrando automatización de procesos, tableros de control y robustez técnica.
          </p>
        </div>

        {/* Pestañas de Filtrado */}
        <div className="flex flex-wrap justify-center gap-2.5 mb-12">
          {categories.map((category) => (
            <button
              suppressHydrationWarning={true}
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all duration-300 relative border cursor-pointer ${
                selectedCategory === category
                  ? "text-white border-primary-500 bg-primary-500 shadow-md shadow-primary-500/10"
                  : "bg-card-bg text-foreground/80 border-card-border hover:border-primary-500/40"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Grilla de Proyectos con Animación */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6.5"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, i) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 30 }}
                transition={{ type: "spring", stiffness: 100, damping: 18, delay: i * 0.05 }}
              >
                <ProjectCard
                  project={project}
                  onOpenDetails={handleOpenDetails}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Modal de Detalle */}
        <ProjectModal
          project={activeProject}
          isOpen={isModalOpen}
          onClose={handleCloseDetails}
        />
      </div>
    </section>
  );
}
