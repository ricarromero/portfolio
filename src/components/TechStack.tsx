"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { technologies, Technology } from "../data/technologies";
import * as Icons from "lucide-react";
import { GithubIcon } from "./BrandIcons";

// Mapear los strings de iconos a los componentes de Lucide reales
const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Globe: Icons.Globe,
  Atom: Icons.Atom,
  Code2: Icons.Code2,
  Palette: Icons.Palette,
  FileCode: Icons.FileCode,
  Layers: Icons.Layers,
  FileJson: Icons.FileJson,
  Flame: Icons.Flame,
  DatabaseBackup: Icons.Database, // Supabase icon alternative
  Database: Icons.Database,
  FileCode2: Icons.Terminal, // Python icon alternative
  Cpu: Icons.Cpu,
  GitBranch: Icons.GitBranch,
  Github: GithubIcon,
};

const getHoverBorderColor = (tech: Technology) => {
  if (tech.name === "Next.js" || tech.name === "GitHub") {
    return "var(--primary-500)";
  }
  return tech.glowClass.replace(/0\.\d+\)$/, "0.85)");
};

const categories = ["Todos", "Frontend", "Backend", "Base de datos", "Lenguajes", "Herramientas"];

export default function TechStack() {
  const [selectedCategory, setSelectedCategory] = useState("Todos");

  // Filtrar tecnologías
  const filteredTechs = selectedCategory === "Todos"
    ? technologies
    : technologies.filter((tech) => tech.category === selectedCategory);

  return (
    <section id="tecnologias" className="py-24 relative overflow-hidden bg-primary-50/5 dark:bg-transparent">
      {/* Luces de fondo */}
      <div className="absolute top-10 left-10 w-[250px] h-[250px] bg-accent-500/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[250px] h-[250px] bg-primary-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Cabecera */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs uppercase font-extrabold tracking-widest text-primary-500 bg-primary-500/10 px-3 py-1 rounded-full mb-3"
          >
            Tecnologías
          </motion.span>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-foreground">
            Stack y Herramientas Tecnológicas
          </h2>
          <div className="h-1 bg-gradient-to-r from-primary-500 to-accent-500 mt-4 rounded-full w-[60px]" />
          <p className="text-sm text-foreground/60 max-w-xl mt-4 leading-relaxed font-medium">
            Herramientas y tecnologías que utilizo para materializar ideas, estructurar bases de datos y construir sistemas web optimizados y modernos.
          </p>
        </div>

        {/* Filtros por Categoría */}
        <div className="flex flex-wrap justify-center gap-2.5 mb-12">
          {categories.map((category) => (
            <button
              suppressHydrationWarning={true}
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all duration-300 relative overflow-hidden border cursor-pointer ${
                selectedCategory === category
                  ? "text-white border-primary-500 bg-primary-500 shadow-md shadow-primary-500/10"
                  : "bg-card-bg text-foreground/80 border-card-border hover:border-primary-500/40"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Grid de Tecnologías */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
        >
          {filteredTechs.map((tech) => {
            const Icon = iconMap[tech.iconName] || Icons.HelpCircle;
            return (
              <motion.div
                layout
                key={tech.name}
                initial={{ opacity: 0, scale: 0.9, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ type: "spring" as const, stiffness: 260, damping: 20 }}
                whileHover={{
                  y: -5,
                  scale: 1.02,
                  boxShadow: `0 10px 25px -5px ${tech.glowClass}`,
                  borderColor: getHoverBorderColor(tech),
                }}
                className="group relative p-5 rounded-2xl glass border border-card-border/75 flex flex-col items-center justify-center gap-3 text-center transition-all duration-150 cursor-default"
              >
                {/* Luz glow en hover en la tarjeta */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none"
                  style={{
                    background: `radial-gradient(circle, ${tech.glowClass} 0%, transparent 70%)`
                  }}
                />

                {/* Contenedor del Icono */}
                <div className={`w-12 h-12 rounded-xl bg-card-bg border border-card-border group-hover:border-primary-500/20 group-hover:bg-primary-500/5 flex items-center justify-center text-foreground/60 transition-all duration-300 ${tech.color}`}>
                  <Icon className="w-5 h-5 transition-transform duration-500 group-hover:scale-110" />
                </div>

                {/* Nombre y Categoría */}
                <div>
                  <h3 className="text-sm font-extrabold text-foreground tracking-wide group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
                    {tech.name}
                  </h3>
                  <span className="text-[10px] text-foreground/45 uppercase tracking-widest font-bold mt-1 block">
                    {tech.category}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
