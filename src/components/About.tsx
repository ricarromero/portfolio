"use client";

import { motion } from "framer-motion";
import { Laptop, Cpu, Database, GraduationCap, ArrowUpRight } from "lucide-react";
import InteractiveTerminal from "./InteractiveTerminal";

export default function About() {
  // Configuración de las tarjetas Bento secundarias de enfoque técnico (3 tarjetas simétricas)
  const items = [
    {
      icon: Laptop,
      title: "Desarrollo Web Moderno",
      desc: "Creación de interfaces del lado del cliente interactivas, responsivas y ágiles utilizando Next.js, React, TypeScript y Tailwind CSS.",
      color: "from-blue-500/20 to-indigo-500/20 text-blue-500 dark:text-blue-400",
      gridSpan: "md:col-span-1"
    },
    {
      icon: Cpu,
      title: "Automatización & IA",
      desc: "Integración de modelos y APIs de inteligencia artificial, procesamiento de lenguaje natural y chatbots automáticos para flujos conversacionales.",
      color: "from-violet-500/20 to-purple-500/20 text-violet-500 dark:text-violet-400",
      gridSpan: "md:col-span-1"
    },
    {
      icon: Database,
      title: "Sistemas de Gestión",
      desc: "Desarrollo de portales de administración interna con bases de datos en tiempo real (Supabase, Firebase), control de roles y reportes.",
      color: "from-emerald-500/20 to-teal-500/20 text-emerald-500 dark:text-emerald-400",
      gridSpan: "md:col-span-1"
    }
  ];

  return (
    <section id="sobre-mi" className="py-24 relative overflow-hidden">
      {/* Elemento decorativo de luz de fondo */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[300px] h-[300px] bg-accent-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Cabecera de Sección */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-xs uppercase font-extrabold tracking-widest text-primary-500 bg-primary-500/10 px-3 py-1 rounded-full mb-3"
          >
            Sobre mí
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl font-extrabold tracking-tight text-foreground"
          >
            Estudiante y Desarrollador con Enfoque Práctico
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 60 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-1 bg-gradient-to-r from-primary-500 to-accent-500 mt-4 rounded-full"
          />
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card Principal - Biografía Grande (Ocupa 2 cols de ancho en desktop) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-2 p-8 md:p-10 rounded-3xl glass border border-card-border/75 shadow-lg flex flex-col justify-between hover:border-primary-500/20 transition-all duration-300 relative group overflow-hidden"
          >
            {/* Gradiente sutil interno hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary-500/0 to-primary-500/0 group-hover:from-primary-500/2 group-hover:to-accent-500/2 transition-colors duration-500 pointer-events-none" />

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <span className="w-10 h-10 rounded-xl bg-primary-500/10 flex items-center justify-center text-primary-500">
                  <GraduationCap className="w-5 h-5" />
                </span>
                <span className="text-xs uppercase font-extrabold tracking-wider text-foreground/50">Formación & Perfil</span>
              </div>

              <h3 className="text-2xl font-bold mb-4 text-foreground/95 leading-tight">
                Ciencia de la computación orientada a resolver necesidades reales
              </h3>
              
              <p className="text-sm md:text-base text-foreground/70 leading-relaxed mb-6 font-medium">
                Soy estudiante avanzado de la **Licenciatura en Ciencias de la Computación (4.º año) en la Universidad Nacional de San Juan**. Me apasiona conectar los fundamentos algorítmicos teóricos y las buenas prácticas de ingeniería de software con la creación de sistemas rápidos, eficientes y verdaderamente útiles.
              </p>
              
              <p className="text-sm md:text-base text-foreground/70 leading-relaxed font-medium">
                Actualmente me dedico a diseñar y programar aplicaciones web y automatizaciones a medida utilizando tecnologías robustas como **Python, HTML, CSS** and **TypeScript**. He desarrollado proyectos innovadores para **control de asistencia por códigos QR dinámicos**, **compresión local de PDF y procesamiento OCR inteligente**, **monitoreo de incidentes industriales** y **automatización conversacional por WhatsApp** para turnos.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-card-border/50 flex flex-wrap gap-4 items-center justify-between relative z-10">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-primary-500" />
                <span className="text-xs font-bold text-foreground/80">Estudiante UNSJ</span>
                <span className="text-xs text-foreground/40">|</span>
                <span className="w-2.5 h-2.5 rounded-full bg-accent-500" />
                <span className="text-xs font-bold text-foreground/80">Enfoque en Lógica y Desarrollo</span>
              </div>
              <a
                href="#contacto"
                className="flex items-center gap-1 text-xs font-bold text-primary-500 hover:text-primary-600 transition-colors cursor-pointer group/link"
              >
                Hablemos sobre tu idea
                <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
              </a>
            </div>
          </motion.div>

          {/* Card Secundaria Lateral - Terminal Interactiva en Vivo (Ocupa 1 col) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="md:col-span-1 h-full flex"
          >
            <InteractiveTerminal />
          </motion.div>

          {/* Tarjetas Bento del Enfoque (3 tarjetas inferiores, 1 col cada una) */}
          {items.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`p-6.5 rounded-3xl glass border border-card-border/75 shadow-lg flex flex-col justify-between hover:border-primary-500/20 transition-all duration-300 relative group overflow-hidden ${item.gridSpan}`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/0 to-primary-500/0 group-hover:from-primary-500/1 group-hover:to-accent-500/1 transition-colors duration-500 pointer-events-none" />

                <div className="relative z-10 flex flex-col h-full justify-between">
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-5 group-hover:scale-105 transition-transform duration-300`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-extrabold text-foreground/95 mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-foreground/65 leading-relaxed font-medium">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
