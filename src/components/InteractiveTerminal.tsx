"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, RotateCcw, FileCode, CheckCircle, Terminal } from "lucide-react";

const codePython = `def obtener_perfil():
    return {
        "nombre": "Ricardo Romero",
        "carrera": "Lic. Ciencias Computación",
        "anio": "4.º Año - UNSJ",
        "enfoque": "Resolver problemas reales",
        "especialidad": "Automatización & IA"
    }

print(obtener_perfil())`;

const codeJSON = `{
  "personal": {
    "nombre": "Ricardo Octavio Romero",
    "ubicacion": "San Juan, Argentina",
    "ingles": "A2/B1 - Técnico"
  },
  "preferencias": {
    "modo": "Híbrido / Remoto",
    "pasion": "Automatizar procesos manuales"
  }
}`;

export default function InteractiveTerminal() {
  const [activeTab, setActiveTab] = useState<"py" | "json">("py");
  const [consoleState, setConsoleState] = useState<"idle" | "running" | "success">("idle");
  const [confettiActive, setConfettiActive] = useState(false);

  const handleRunCode = () => {
    setConsoleState("running");
    
    // Simular tiempo de ejecución
    setTimeout(() => {
      setConsoleState("success");
      setConfettiActive(true);
    }, 1200);
  };

  const handleReset = () => {
    setConsoleState("idle");
    setConfettiActive(false);
  };

  useEffect(() => {
    if (confettiActive) {
      const timer = setTimeout(() => setConfettiActive(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [confettiActive]);

  return (
    <div className="relative w-full rounded-2xl border border-slate-800 bg-[#0d1117] shadow-xl overflow-hidden font-mono text-xs flex flex-col h-full min-h-[300px] text-left select-none group">
      
      {/* Confeti Vectorial Animado (Framer Motion) */}
      <AnimatePresence>
        {confettiActive && (
          <div className="absolute inset-0 pointer-events-none z-30 overflow-hidden">
            {[...Array(25)].map((_, i) => {
              const xRandom = Math.random() * 300 - 150; // Lanzamiento horizontal
              const yRandom = Math.random() * -200 - 100; // Lanzamiento vertical (hacia arriba)
              const rotRandom = Math.random() * 360;
              const color = [
                "bg-primary-500", "bg-accent-500", "bg-emerald-500", 
                "bg-yellow-500", "bg-pink-500", "bg-purple-500"
              ][Math.floor(Math.random() * 6)];
              
              return (
                <motion.div
                  key={i}
                  className={`absolute w-2 h-2 rounded-sm ${color} left-1/2 bottom-8`}
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

      {/* Cabecera */}
      <div className="flex items-center justify-between border-b border-slate-800 bg-slate-900/50 px-4 py-2.5">
        <div className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-red-500/60" />
          <span className="w-2 h-2 rounded-full bg-yellow-500/60" />
          <span className="w-2 h-2 rounded-full bg-green-500/60" />
        </div>

        {/* Pestañas de archivos */}
        <div className="flex gap-1.5">
          <button
            suppressHydrationWarning={true}
            onClick={() => { setActiveTab("py"); handleReset(); }}
            className={`flex items-center gap-1 px-2.5 py-1 rounded-md text-[10px] font-bold border transition-all cursor-pointer ${
              activeTab === "py"
                ? "bg-primary-500/10 border-primary-500/30 text-primary-500"
                : "border-transparent text-slate-400 hover:text-slate-200"
            }`}
          >
            <FileCode className="w-3 h-3" />
            presentacion.py
          </button>
          <button
            suppressHydrationWarning={true}
            onClick={() => { setActiveTab("json"); handleReset(); }}
            className={`flex items-center gap-1 px-2.5 py-1 rounded-md text-[10px] font-bold border transition-all cursor-pointer ${
              activeTab === "json"
                ? "bg-primary-500/10 border-primary-500/30 text-primary-500"
                : "border-transparent text-slate-400 hover:text-slate-200"
            }`}
          >
            <FileCode className="w-3 h-3" />
            perfil.json
          </button>
        </div>
      </div>

      {/* Contenedor del Editor de Código / Consola */}
      <div className="p-4 flex-1 flex flex-col justify-between overflow-y-auto no-scrollbar relative min-h-[180px]">
        
        <AnimatePresence mode="wait">
          {consoleState === "idle" ? (
            /* Visualización de Código */
            <motion.pre
              key="code"
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              className="text-[10.5px] leading-relaxed text-slate-300 overflow-x-auto no-scrollbar select-text font-mono"
            >
              <code>
                {activeTab === "py" ? (
                  // Resaltado de sintaxis sintético Python
                  codePython.split("\n").map((line, i) => {
                    if (line.startsWith("def ")) {
                      return <div key={i}><span className="text-pink-500">def</span> <span className="text-blue-400">obtener_perfil</span>():</div>;
                    }
                    if (line.includes("return")) {
                      return <div key={i}>    <span className="text-pink-500">return</span> &#123;</div>;
                    }
                    if (line.includes("print")) {
                      return <div key={i}><span className="text-yellow-400">print</span>(<span className="text-blue-400">obtener_perfil</span>())</div>;
                    }
                    if (line.includes(":")) {
                      return <div key={i}>        <span className="text-teal-400">{line.split(":")[0]}</span>: <span className="text-emerald-400">{line.split(":")[1]}</span></div>;
                    }
                    return <div key={i}>{line}</div>;
                  })
                ) : (
                  // Resaltado JSON
                  codeJSON.split("\n").map((line, i) => {
                    if (line.includes(":")) {
                      const parts = line.split(":");
                      return <div key={i}><span className="text-teal-400">{parts[0]}</span>:<span className="text-emerald-400">{parts[1]}</span></div>;
                    }
                    return <div key={i}>{line}</div>;
                  })
                )}
              </code>
            </motion.pre>
          ) : consoleState === "running" ? (
            /* Consola - Animación de carga ejecutando script */
            <motion.div
              key="running"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex flex-col h-full justify-center items-center text-center gap-3 text-slate-400 py-6"
            >
              <span className="w-5 h-5 border-2 border-primary-500/30 border-t-primary-500 rounded-full animate-spin" />
              <div className="flex flex-col gap-0.5">
                <span className="text-[10px] uppercase font-bold tracking-wider text-slate-300">ricardooromero@sys:~$ python presentacion.py</span>
                <span className="text-[9px] italic text-slate-500">Compilando código y validando perfil...</span>
              </div>
            </motion.div>
          ) : (
            /* Consola - Salida exitosa (Success) */
            <motion.div
              key="success"
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-col justify-between h-full space-y-4"
            >
              <div className="space-y-2">
                <div className="flex items-center gap-1.5 text-[9px] uppercase font-bold text-slate-500">
                  <Terminal className="w-3.5 h-3.5 text-emerald-500" />
                  <span>Consola de Salida</span>
                </div>
                <div className="p-3.5 rounded-xl bg-emerald-950/20 border border-emerald-500/20 text-emerald-400 space-y-1.5 text-[10.5px]">
                  <div>ricardooromero@sys:~$ python presentacion.py</div>
                  <div>&gt;&gt; Ejecutando script de perfil...</div>
                  <div className="font-bold text-white">&gt;&gt; Ricardo Octavio Romero está listo para integrarse a tu equipo! 🚀</div>
                  <div className="text-[9.5px] text-emerald-400/80">&gt;&gt; Lanzando confeti vectorial interactivo. ¡Éxito!</div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Botonera inferior */}
        <div className="mt-4 border-t border-slate-800 pt-3 flex items-center justify-between">
          <span className="text-[9px] uppercase font-bold text-slate-500 tracking-wider">
            {consoleState === "idle" ? "Código Editable" : consoleState === "running" ? "Ejecutando" : "Finalizado"}
          </span>

          <div className="flex gap-2">
            {consoleState === "success" && (
              <button
                suppressHydrationWarning={true}
                onClick={handleReset}
                className="flex items-center gap-1 px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-300 font-bold text-[10px] tracking-wide transition-all cursor-pointer group-hover:scale-[1.02]"
              >
                <RotateCcw className="w-3 h-3" />
                Reiniciar
              </button>
            )}

            {consoleState === "idle" && (
              <button
                suppressHydrationWarning={true}
                onClick={handleRunCode}
                className="flex items-center gap-1 px-3 py-1.5 rounded-xl bg-gradient-to-r from-primary-600 to-accent-600 hover:from-primary-500 hover:to-accent-500 text-white font-bold text-[10px] tracking-wide transition-all shadow-md shadow-primary-500/10 cursor-pointer group-hover:scale-[1.02]"
              >
                <Play className="w-3.5 h-3.5 fill-white" />
                Ejecutar Script
              </button>
            )}
          </div>
        </div>

      </div>

    </div>
  );
}
