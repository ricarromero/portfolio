"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cpu, Play, RotateCcw, ShieldAlert, Sparkles, Terminal, Zap } from "lucide-react";

export default function DevSimulator() {
  const [complexity, setComplexity] = useState(5);
  const [turboMode, setTurboMode] = useState(false);
  const [status, setStatus] = useState<"idle" | "running" | "success">("idle");
  const [progress, setProgress] = useState(0);
  const [logs, setLogs] = useState<string[]>([]);
  const [confettiActive, setConfettiActive] = useState(false);
  const consoleEndRef = useRef<HTMLDivElement>(null);

  // Lista de logs graciosos y técnicos para el simulador
  const logTemplates = [
    "[SYS] Inicializando entorno virtual de optimización...",
    "[SYS] Escaneando dependencias de Next.js & React...",
    "[SYS] Analizando maquetación semántica de HTML...",
    "[CSS] Purgando selectores redundantes y optimizando CSS...",
    "[SYS] Ejecutando análisis estático de código...",
    "[PY] Procesando datos mediante algoritmos optimizados de Python...",
    "[SYS] Comprimiendo bundle y aplicando Server-Side Rendering (SSR)...",
    "[SYS] Evaluando fidelidad de interfaz y microinteracciones...",
    "[SYS] Generando metadatos para optimización SEO completa...",
    "[SYS] Inicializando hidratación limpia en cliente..."
  ];

  // Logs adicionales para complejidad alta (Overclock)
  const overclockLogs = [
    "[WARN] Elevando frecuencia de CPU virtual al máximo...",
    "[WARN] ¡Peligro de sobrecalentamiento estético por exceso de premium!",
    "[SYS] Rebalanceando carga con hilos concurrentes...",
    "[PY] Aplicando optimización matemática avanzada de nivel cuántico...",
    "[SYS] Disipando calor del procesador con ventiladores simulados...",
    "[SYS] Estabilizando flujos de datos..."
  ];

  // Autoscroll de la microconsola
  useEffect(() => {
    if (consoleEndRef.current) {
      consoleEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [logs]);

  const handleStartSimulation = () => {
    setStatus("running");
    setProgress(0);
    setLogs(["[SYS] Iniciando compilación y optimización de código..."]);
    
    // Determinar la duración total según complejidad y modo turbo
    // Mayor complejidad = más lento, modo turbo = más rápido
    const baseDuration = complexity * 400 + 1500;
    const totalDuration = turboMode ? baseDuration * 0.4 : baseDuration;
    
    const intervalTime = 50;
    const steps = totalDuration / intervalTime;
    let currentStep = 0;
    
    const logsToInject = [...logTemplates];
    if (complexity >= 8) {
      // Inyectar logs de overclock si la complejidad es alta
      logsToInject.splice(4, 0, ...overclockLogs);
    }

    const logTriggers = Array.from({ length: logsToInject.length }, (_, i) => 
      Math.floor((i / logsToInject.length) * 100)
    );

    const timer = setInterval(() => {
      currentStep++;
      const currentProgress = Math.min(Math.floor((currentStep / steps) * 100), 100);
      setProgress(currentProgress);

      // Inyectar logs según el progreso
      logTriggers.forEach((triggerPercent, idx) => {
        if (currentProgress >= triggerPercent && !logs.includes(logsToInject[idx])) {
          setLogs((prev) => {
            if (!prev.includes(logsToInject[idx])) {
              return [...prev, logsToInject[idx]];
            }
            return prev;
          });
        }
      });

      if (currentProgress >= 100) {
        clearInterval(timer);
        setStatus("success");
        setLogs((prev) => [
          ...prev, 
          "[SYS] COMPILACIÓN COMPLETADA EXITOSAMENTE AL 100%!",
          `[SYS] Tiempo final: ${(totalDuration / 1000).toFixed(2)}s.`,
          "[SYS] Estado del Portfolio: OPTIMIZADO & ALTAMENTE INTERACTIVO 🚀"
        ]);
        setConfettiActive(true);
      }
    }, intervalTime);
  };

  const handleReset = () => {
    setStatus("idle");
    setProgress(0);
    setLogs([]);
    setConfettiActive(false);
  };

  useEffect(() => {
    if (confettiActive) {
      const timer = setTimeout(() => setConfettiActive(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [confettiActive]);

  // Cálculo de la circunferencia para la barra circular
  const radius = 36;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <div className="relative w-full p-6.5 rounded-3xl glass border border-card-border/75 shadow-lg flex flex-col justify-between hover:border-primary-500/20 transition-all duration-300 relative group overflow-hidden h-full min-h-[460px] text-left">
      {/* Glow interactivo de fondo */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-500/0 to-primary-500/0 group-hover:from-primary-500/2 group-hover:to-accent-500/2 transition-colors duration-500 pointer-events-none" />
      
      {/* Confeti Vectorial */}
      <AnimatePresence>
        {confettiActive && (
          <div className="absolute inset-0 pointer-events-none z-30 overflow-hidden">
            {[...Array(25)].map((_, i) => {
              const xRandom = Math.random() * 300 - 150;
              const yRandom = Math.random() * -250 - 50;
              const rotRandom = Math.random() * 360;
              const color = [
                "bg-primary-500", "bg-accent-500", "bg-emerald-500", 
                "bg-yellow-500", "bg-pink-500", "bg-purple-500"
              ][Math.floor(Math.random() * 6)];
              
              return (
                <motion.div
                  key={i}
                  className={`absolute w-1.5 h-1.5 rounded-sm ${color} left-1/2 bottom-8`}
                  initial={{ scale: 0.5, opacity: 1, x: 0, y: 0 }}
                  animate={{
                    opacity: [1, 1, 0],
                    x: xRandom,
                    y: yRandom,
                    rotate: rotRandom,
                  }}
                  exit={{ opacity: 0 }}
                  transition={{
                    duration: 1.5 + Math.random() * 0.8,
                    ease: "easeOut",
                  }}
                />
              );
            })}
          </div>
        )}
      </AnimatePresence>

      <div className="relative z-10 flex flex-col h-full justify-between gap-4">
        {/* Cabecera del Panel */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="w-10 h-10 rounded-xl bg-primary-500/10 flex items-center justify-center text-primary-500">
              <Cpu className="w-5 h-5 animate-pulse" />
            </span>
          </div>
          {turboMode && status === "running" && (
            <motion.span 
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ repeat: Infinity, duration: 0.8 }}
              className="flex items-center gap-1 text-[9px] uppercase font-bold text-amber-500 bg-amber-500/10 px-2 py-0.5 rounded-full"
            >
              <Zap className="w-3 h-3 fill-amber-500" />
              Turbo
            </motion.span>
          )}
        </div>

        {/* Zona Central - Estado Actual o Editor de Configuración */}
        <div className="flex-1 flex flex-col gap-4.5 justify-center">
          {status === "idle" ? (
            /* Panel de configuración (Sliders e Inputs) */
            <div className="space-y-4">
              <p className="text-xs text-foreground/75 leading-relaxed font-medium">
                Ajustá los parámetros del procesador de código para simular y analizar el rendimiento en cascada.
              </p>

              {/* Slider de Complejidad */}
              <div className="flex flex-col gap-1.5">
                <div className="flex justify-between items-center">
                  <label className="text-[10px] uppercase font-bold text-foreground/55 tracking-wider">
                    Complejidad del Algoritmo
                  </label>
                  <span className="text-xs font-bold text-primary-500 font-mono">
                    Nivel {complexity}
                  </span>
                </div>
                <input
                  suppressHydrationWarning={true}
                  type="range"
                  min="1"
                  max="10"
                  value={complexity}
                  onChange={(e) => setComplexity(Number(e.target.value))}
                  className="w-full h-1.5 bg-card-bg border border-card-border rounded-lg appearance-none cursor-pointer accent-primary-500 focus:outline-none"
                />
              </div>

              {/* Toggle de Modo Turbo */}
              <div className="flex items-center justify-between p-3 rounded-2xl bg-card-bg/40 border border-card-border/60">
                <div className="flex flex-col">
                  <span className="text-[10.5px] font-bold text-foreground flex items-center gap-1">
                    <Zap className="w-3.5 h-3.5 text-amber-500 fill-amber-500/20" />
                    Modo Turbo (Overclocking)
                  </span>
                  <span className="text-[9px] text-foreground/50">Duplica la velocidad de optimización.</span>
                </div>
                <button
                  suppressHydrationWarning={true}
                  onClick={() => setTurboMode(!turboMode)}
                  className={`w-10 h-6.5 rounded-full transition-all duration-300 relative border cursor-pointer ${
                    turboMode ? "bg-primary-500 border-primary-500" : "bg-card-bg border-card-border"
                  }`}
                >
                  <motion.div
                    layout
                    className="w-4.5 h-4.5 bg-white rounded-full absolute top-1 left-1"
                    animate={{ x: turboMode ? 14 : 0 }}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                </button>
              </div>
            </div>
          ) : status === "running" ? (
            /* Panel de Progreso Activo y Consola */
            <div className="grid grid-cols-12 gap-4 items-center">
              {/* Barra de progreso circular */}
              <div className="col-span-4 flex justify-center">
                <div className="relative w-20 h-20">
                  <svg className="w-full h-full transform -rotate-90" viewBox="0 0 80 80">
                    <circle
                      cx="40"
                      cy="40"
                      r={radius}
                      className="stroke-card-border/60"
                      strokeWidth="5"
                      fill="transparent"
                    />
                    <motion.circle
                      cx="40"
                      cy="40"
                      r={radius}
                      className="stroke-primary-500"
                      strokeWidth="5"
                      fill="transparent"
                      strokeDasharray={circumference}
                      strokeDashoffset={strokeDashoffset}
                      strokeLinecap="round"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-xs font-black font-mono text-foreground">
                      {progress}%
                    </span>
                  </div>
                </div>
              </div>

              {/* Consola de logs en vivo */}
              <div className="col-span-8 h-24 rounded-2xl bg-black/50 border border-card-border/80 p-3 font-mono text-[9px] text-foreground/80 overflow-y-auto no-scrollbar select-text space-y-1">
                <div className="flex items-center gap-1 text-[8px] uppercase font-bold text-foreground/45 border-b border-card-border/30 pb-1 mb-1.5">
                  <Terminal className="w-3 h-3 text-primary-500" />
                  <span>Optimizador de Procesos</span>
                </div>
                {logs.map((log, idx) => {
                  let logClass = "text-foreground/75";
                  if (log.startsWith("[WARN]")) logClass = "text-amber-500 font-bold";
                  if (log.startsWith("[SYS]")) logClass = "text-primary-400";
                  if (log.startsWith("[CSS]")) logClass = "text-blue-400";
                  if (log.startsWith("[PY]")) logClass = "text-yellow-400";
                  if (log.includes("COMPILADA") || log.includes("100%")) logClass = "text-emerald-400 font-extrabold";
                  
                  return (
                    <div key={idx} className={logClass}>
                      {log}
                    </div>
                  );
                })}
                <div ref={consoleEndRef} />
              </div>

              {/* Barra de progreso lineal */}
              <div className="col-span-12 flex flex-col gap-1">
                <div className="w-full h-2 rounded-full bg-card-bg border border-card-border/60 overflow-hidden relative">
                  <motion.div
                    className="h-full bg-gradient-to-r from-primary-500 via-accent-500 to-emerald-500 rounded-full"
                    style={{ width: `${progress}%` }}
                    animate={{
                      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  />
                </div>
                {complexity >= 8 && progress > 30 && progress < 80 && (
                  <div className="flex items-center gap-1.5 text-[8.5px] font-bold text-amber-500 justify-end">
                    <ShieldAlert className="w-3.5 h-3.5" />
                    Advertencia: Temperatura virtual al 85%
                  </div>
                )}
              </div>
            </div>
          ) : (
            /* Pantalla de Éxito */
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="space-y-3.5 text-center flex flex-col items-center"
            >
              <div className="w-11 h-11 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-500 shadow-md">
                <Sparkles className="w-5 h-5 animate-pulse" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-foreground">¡Software Optimizado!</h4>
                <p className="text-[10px] text-foreground/50 mt-1">
                  Se aplicaron técnicas de clean code, compresión de bundle y minificación en cascada.
                </p>
              </div>

              {/* Grid de métricas humorísticas */}
              <div className="grid grid-cols-3 gap-2.5 w-full pt-1.5">
                <div className="p-2 rounded-xl bg-emerald-500/5 border border-emerald-500/10 flex flex-col items-center">
                  <span className="text-[9px] uppercase font-bold text-foreground/45">Fidelity</span>
                  <span className="text-xs font-black text-emerald-500 font-mono">100%</span>
                </div>
                <div className="p-2 rounded-xl bg-primary-500/5 border border-primary-500/10 flex flex-col items-center">
                  <span className="text-[9px] uppercase font-bold text-foreground/45">Aesthetics</span>
                  <span className="text-xs font-black text-primary-500 font-mono">Premium</span>
                </div>
                <div className="p-2 rounded-xl bg-accent-500/5 border border-accent-500/10 flex flex-col items-center">
                  <span className="text-[9px] uppercase font-bold text-foreground/45">Hydration</span>
                  <span className="text-xs font-black text-accent-500 font-mono">Fluid</span>
                </div>
              </div>
            </motion.div>
          )}
        </div>

        {/* Botonera de Control Inferior */}
        <div className="border-t border-card-border/30 pt-3 flex items-center justify-between">
          <span className="text-[9px] uppercase font-bold text-foreground/35 tracking-wider font-mono">
            {status === "idle" ? "Configuración" : status === "running" ? "Ejecutando..." : "Listo"}
          </span>

          <div className="flex gap-2">
            {status === "idle" && (
              <button
                suppressHydrationWarning={true}
                onClick={handleStartSimulation}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-gradient-to-r from-primary-600 to-accent-600 hover:from-primary-500 hover:to-accent-500 text-white font-bold text-[10px] tracking-wide transition-all shadow-md shadow-primary-500/10 cursor-pointer group-hover:scale-[1.02]"
              >
                <Play className="w-3 h-3 fill-white" />
                Optimizar
              </button>
            )}

            {status !== "idle" && (
              <button
                suppressHydrationWarning={true}
                onClick={handleReset}
                disabled={status === "running" && progress < 100}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-card-bg border border-card-border hover:border-primary-500/30 text-foreground font-bold text-[10px] tracking-wide transition-all cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed group-hover:scale-[1.02]"
              >
                <RotateCcw className="w-3 h-3" />
                Reiniciar
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
