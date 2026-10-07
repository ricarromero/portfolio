"use client";

import { motion } from "framer-motion";
import { Database, Layers, Settings, Globe, Cpu, Terminal, Sparkles, FileText, BarChart3 } from "lucide-react";

const learningTopics = [
  { text: "SQL y modelado de bases de datos", icon: Database, color: "text-blue-500 bg-blue-500/10" },
  { text: "Sistemas de información", icon: Layers, color: "text-indigo-500 bg-indigo-500/10" },
  { text: "Automatización de procesos", icon: Settings, color: "text-violet-500 bg-violet-500/10" },
  { text: "Integración de APIs", icon: Globe, color: "text-emerald-500 bg-emerald-500/10" },
  { text: "n8n", icon: Cpu, color: "text-rose-500 bg-rose-500/10" },
  { text: "Python aplicado a soluciones", icon: Terminal, color: "text-yellow-500 bg-yellow-500/10" },
  { text: "Herramientas de IA generativa", icon: Sparkles, color: "text-teal-500 bg-teal-500/10" },
  { text: "Diseño y documentación de sistemas", icon: FileText, color: "text-cyan-500 bg-cyan-500/10" },
  { text: "Análisis y organización de información", icon: BarChart3, color: "text-purple-500 bg-purple-500/10" }
];

// Duplicamos los elementos para lograr un marquee infinito perfecto sin saltos visuales
const marqueeItems = [...learningTopics, ...learningTopics, ...learningTopics];

export default function Learning() {
  return (
    <section id="aprendizaje" className="py-20 relative overflow-hidden border-t border-card-border/20">
      <div className="max-w-7xl mx-auto px-6 mb-12 relative z-10">
        {/* Cabecera */}
        <div className="flex flex-col items-center text-center">
          <span className="text-xs uppercase font-extrabold tracking-widest text-primary-500 bg-primary-500/10 px-3 py-1 rounded-full mb-3">
            Aprendizaje Activo
          </span>
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-foreground">
            Actualmente profundizando en
          </h2>
          <div className="h-1 bg-gradient-to-r from-primary-500 to-accent-500 mt-3 rounded-full w-[40px]" />
        </div>
      </div>

      {/* Marquee Horizontal Continuo */}
      <div className="relative w-full flex items-center justify-center overflow-hidden py-4 select-none">
        {/* Gradientes laterales de desvanecimiento para simular profundidad */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        {/* Contenedor animado */}
        <motion.div
          className="flex gap-4 pr-4 w-max"
          animate={{
            x: ["0%", "-33.333%"] // Desplazamos un tercio (que equivale a la lista original)
          }}
          transition={{
            ease: "linear",
            duration: 22,
            repeat: Infinity
          }}
          // Pausar el marquee al hacer hover para facilitar interactividad de lectura
          whileHover={{ animationPlayState: "paused" }}
        >
          {marqueeItems.map((topic, i) => {
            const Icon = topic.icon;
            return (
              <div
                key={i}
                className="flex items-center gap-3.5 px-5 py-4 rounded-2xl glass border border-card-border/60 hover:border-primary-500/25 transition-all duration-300 min-w-[260px] sm:min-w-[280px] shadow-sm hover:shadow-md cursor-default group"
              >
                {/* Icono decorativo */}
                <span className={`w-9 h-9 rounded-xl flex items-center justify-center font-bold ${topic.color} group-hover:scale-105 transition-transform duration-300`}>
                  <Icon className="w-4.5 h-4.5" />
                </span>

                {/* Texto descriptivo */}
                <span className="text-xs sm:text-sm font-bold text-foreground/85 leading-snug group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
                  {topic.text}
                </span>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
