"use client";

import { useEffect, useState } from "react";
import { ArrowDown, Mail, FileText, ArrowRight, Activity, Code, Globe, Shield, Database } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";

const cardsData = [
  {
    icon: Database,
    title: "01 — SISTEMAS Y DATOS",
    desc: "Organización de información, bases de datos relacionales y diseño de sistemas orientados a necesidades concretas.",
    color: "text-amber-500 bg-amber-500/10",
    delay: 0.8
  },
  {
    icon: Activity,
    title: "02 — AUTOMATIZACIÓN",
    desc: "Automatización de procesos e integración entre herramientas mediante APIs y flujos de trabajo.",
    color: "text-violet-500 bg-violet-500/10",
    delay: 0.9
  },
  {
    icon: Code,
    title: "03 — DESARROLLO",
    desc: "Desarrollo de aplicaciones web y herramientas digitales orientadas a resolver problemas concretos.",
    color: "text-blue-500 bg-blue-500/10",
    delay: 1.0
  },
  {
    icon: Shield,
    title: "04 — TECNOLOGÍA APLICADA",
    desc: "Uso de herramientas tecnológicas e inteligencia artificial generativa como apoyo para desarrollar e implementar soluciones.",
    color: "text-emerald-500 bg-emerald-500/10",
    delay: 1.1
  }
];

const staticDots = [
  { top: "12%", left: "15%", duration: 6, delay: 0.5 },
  { top: "83%", left: "36%", duration: 9, delay: 1.2 },
  { top: "6%", left: "3%", duration: 5, delay: 0.2 },
  { top: "53%", left: "21%", duration: 11, delay: 2.5 },
  { top: "5%", left: "49%", duration: 7, delay: 0.8 },
  { top: "35%", left: "37%", duration: 8, delay: 1.5 },
  { top: "69%", left: "3%", duration: 10, delay: 3.1 },
  { top: "44%", left: "22%", duration: 6, delay: 0.1 },
  { top: "38%", left: "68%", duration: 12, delay: 1.9 },
  { top: "8%", left: "74%", duration: 7, delay: 0.4 },
  { top: "25%", left: "41%", duration: 9, delay: 2.1 },
  { top: "81%", left: "58%", duration: 5, delay: 0.3 },
  { top: "6%", left: "27%", duration: 11, delay: 1.7 },
  { top: "64%", left: "1%", duration: 8, delay: 0.9 },
  { top: "81%", left: "72%", duration: 10, delay: 2.8 },
  { top: "31%", left: "13%", duration: 6, delay: 0.6 },
  { top: "41%", left: "90%", duration: 9, delay: 1.4 },
  { top: "17%", left: "52%", duration: 7, delay: 0.2 },
  { top: "35%", left: "17%", duration: 11, delay: 3.5 },
  { top: "61%", left: "72%", duration: 8, delay: 0.7 }
];

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden tech-grid"
    >
      {/* Luces de fondo decorativas (Glow Effects) */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-primary-500/10 rounded-full blur-[120px] pointer-events-none animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[400px] h-[400px] bg-accent-500/10 rounded-full blur-[130px] pointer-events-none animate-pulse-slow" />

      {/* Grid de Puntos Interactivos (Dots flotantes en background) */}
      <div className="absolute inset-0 opacity-[0.15] pointer-events-none">
        {staticDots.map((dot, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full bg-primary-500"
            style={{
              top: dot.top,
              left: dot.left,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.9, 0.3],
            }}
            transition={{
              duration: dot.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: dot.delay,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10 w-full">
        {/* Contenido Principal (Col 7) */}
        <div className="lg:col-span-7 flex flex-col text-left">
          {/* Badge Subtítulo */}
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-xs uppercase font-extrabold tracking-widest text-primary-500 bg-primary-500/10 px-3 py-1 rounded-full mb-3 w-fit"
          >
            UNSJ · 4.º año
          </motion.span>

          {/* Nombre con Glow */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl font-extrabold tracking-tight mb-3 select-none relative"
          >
            <span className="relative z-10">Ricardo Octavio Romero</span>
            <span className="absolute -inset-x-2 inset-y-0 bg-primary-500/10 dark:bg-primary-500/5 blur-3xl rounded-full z-0 pointer-events-none" />
          </motion.h1>

          {/* Subtítulo Principal */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl font-bold mb-5 text-primary-600 dark:text-primary-400 leading-snug"
          >
            Estudiante avanzado de Ciencias de la Computación | Sistemas, Datos y Automatización
          </motion.h2>

          {/* Descripción */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-base text-foreground/75 max-w-xl mb-8 leading-relaxed font-medium space-y-3"
          >
            <p>
              Estudiante avanzado de Ciencias de la Computación en la UNSJ, orientado al desarrollo de sistemas, gestión de información y automatización de procesos.
            </p>
            <p className="text-foreground/65 text-sm">
              Me interesa transformar necesidades reales de organizaciones en soluciones tecnológicas simples, útiles y escalables, combinando datos, software, APIs y herramientas de automatización.
            </p>
          </motion.div>

          {/* Botones de Acción Priorizados */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap gap-3.5 items-center mb-10"
          >
            <a
              href="#proyectos"
              className="flex items-center gap-1.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-primary-600 to-accent-600 hover:from-primary-500 hover:to-accent-500 text-white font-bold text-sm shadow-md shadow-primary-500/10 hover:shadow-primary-500/25 transition-all duration-300 group cursor-pointer"
            >
              Ver proyectos
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>

            <a
              href="/CV_Ricardo_Romero.pdf"
              download="CV_Ricardo_Romero.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-6 py-3.5 rounded-xl bg-card-bg border border-card-border hover:border-primary-500/50 text-foreground font-bold text-sm transition-all duration-300 cursor-pointer shadow-sm"
            >
              <FileText className="w-4 h-4" />
              Descargar CV
            </a>

            <a
              href="#contacto"
              className="px-6 py-3.5 rounded-xl bg-transparent border border-dashed border-card-border hover:border-accent-500/50 text-foreground/80 hover:text-foreground font-semibold text-sm transition-all duration-300 cursor-pointer"
            >
              Contactarme
            </a>
          </motion.div>

          {/* Enlaces Sociales */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex items-center gap-4 text-foreground/60 border-t border-card-border/55 pt-6 w-fit"
          >
            <span className="text-xs uppercase font-bold tracking-wider">Enlaces rápidos:</span>
            <div className="flex gap-3">
              <a
                href="https://github.com/ricarromero"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl flex items-center justify-center bg-card-bg border border-card-border hover:border-primary-500/40 text-foreground hover:text-primary-500 shadow-sm transition-all duration-300"
                aria-label="Ir al GitHub de Ricardo Romero"
              >
                <GithubIcon className="w-4.5 h-4.5" />
              </a>
              <a
                href="https://linkedin.com/in/ricardo-octavio-romero-896860263"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl flex items-center justify-center bg-card-bg border border-card-border hover:border-primary-500/40 text-foreground hover:text-primary-500 shadow-sm transition-all duration-300"
                aria-label="Ir al LinkedIn de Ricardo Octavio Romero"
              >
                <LinkedinIcon className="w-4.5 h-4.5" />
              </a>
              <a
                href="mailto:ricardooromero15@gmail.com"
                className="w-9 h-9 rounded-xl flex items-center justify-center bg-card-bg border border-card-border hover:border-primary-500/40 text-foreground hover:text-primary-500 shadow-sm transition-all duration-300"
                aria-label="Enviar email a Ricardo Romero"
              >
                <Mail className="w-4.5 h-4.5" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Lado derecho - Tarjetas Bento 3D / Avatar Geométrico (Col 5) */}
        <div className="lg:col-span-5 flex flex-col items-center justify-center relative min-h-[420px]">
          {/* Avatar Geométrico Interactivo central */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative w-64 h-64 flex items-center justify-center z-0 mb-8"
          >
            {/* Anillos interactivos animados */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 border border-dashed border-primary-500/20 rounded-full"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="absolute inset-4 border border-dashed border-accent-500/20 rounded-full"
            />

            {/* Isotipo geométrico central con efecto glow */}
            <div className="w-44 h-44 rounded-3xl glass flex items-center justify-center border border-card-border relative group shadow-2xl shadow-primary-500/5 dark:shadow-primary-500/10">
              <div className="absolute inset-2 rounded-2xl bg-gradient-to-tr from-primary-600/10 to-accent-600/10 group-hover:scale-105 transition-transform duration-500" />
              <span className="text-6xl font-black tracking-tighter text-gradient selection:bg-transparent">
                R2
              </span>
              {/* Reflejo superior */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-transparent via-white/5 to-white/10 pointer-events-none" />
            </div>
          </motion.div>

          {/* Tarjetas flotantes Bento 3D */}
          <div className="absolute inset-0 grid grid-cols-2 gap-4 pointer-events-none select-none">
            {cardsData.map((card, i) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: card.delay }}
                  className={`pointer-events-auto w-full p-4 rounded-2xl glass border border-card-border/75 shadow-lg flex flex-col justify-between hover:shadow-xl hover:border-primary-500/30 transition-all duration-300 cursor-default ${
                    i === 0 ? "self-start rotate-[-2deg]" : 
                    i === 1 ? "self-end translate-y-3 rotate-[1deg]" : 
                    i === 2 ? "self-start -translate-y-3 rotate-[2deg]" : 
                    "self-end rotate-[-1deg]"
                  }`}
                  whileHover={{
                    y: -10,
                    scale: 1.02,
                    rotate: 0,
                    transition: { duration: 0.2 }
                  }}
                >
                  <div className="flex items-center justify-between mb-2.5">
                    <span className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold ${card.color}`}>
                      <Icon className="w-4.5 h-4.5" />
                    </span>
                    <span className="w-1.5 h-1.5 rounded-full bg-primary-500/35" />
                  </div>
                  <div>
                    <h3 className="text-xs font-extrabold text-foreground tracking-wide mb-1">
                      {card.title}
                    </h3>
                    <p className="text-[10px] text-foreground/60 leading-normal font-medium">
                      {card.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Flecha de scroll decorativa en el pie */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-foreground/30 hover:text-primary-500/70 transition-colors duration-300 cursor-pointer"
        onClick={() => document.getElementById("sobre-mi")?.scrollIntoView({ behavior: "smooth" })}
      >
        <span className="text-[9px] uppercase tracking-widest font-extrabold">Deslizar</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="w-3.5 h-3.5" />
        </motion.div>
      </motion.div>
    </section>
  );
}
