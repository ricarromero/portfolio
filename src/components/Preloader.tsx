"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal, Shield, Cpu, RefreshCw } from "lucide-react";

interface PreloaderProps {
  onComplete: () => void;
}

export default function Preloader({ onComplete }: PreloaderProps) {
  const [progress, setProgress] = useState(0);
  const [logText, setLogText] = useState("ricardooromero@sys:~$ init_portfolio");
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Comprobar si ya se mostró en esta sesión de navegación
    const hasLoadedBefore = sessionStorage.getItem("portfolio-loaded");
    
    if (hasLoadedBefore) {
      setProgress(100);
      setVisible(false);
      onComplete();
      return;
    }

    const duration = 2000; // 2 segundos totales de carga
    const intervalTime = 30;
    const steps = duration / intervalTime;
    const increment = 100 / steps;

    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = Math.min(prev + increment, 100);
        
        // Actualizar textos de consola según el porcentaje
        if (next < 25) {
          setLogText("ricardooromero@sys:~$ loading_system_core");
        } else if (next >= 25 && next < 50) {
          setLogText("LOADING_MODULES: [Next.js_AppRouter, Tailwind_v4, TS]");
        } else if (next >= 50 && next < 75) {
          setLogText("CONNECTING_DATABASE: [Supabase_OK, Firebase_OK]");
        } else if (next >= 75 && next < 95) {
          setLogText("INITIALIZING_UI: [DarkTheme_Active, FramerMotion_Loaded]");
        } else if (next >= 95 && next < 100) {
          setLogText("ricardooromero@sys:~$ launch_portfolio --success");
        } else if (next === 100) {
          setLogText("SYSTEM READY. LAUNCHING INTERFACE...");
          clearInterval(timer);
          setTimeout(() => {
            setVisible(false);
            sessionStorage.setItem("portfolio-loaded", "true");
            setTimeout(onComplete, 400); // Dar margen para la animación de salida
          }, 350);
        }
        
        return next;
      });
    }, intervalTime);

    return () => clearInterval(timer);
  }, [onComplete]);

  // Si ya cargó en la sesión, no renderizar nada
  if (!visible) return null;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            y: "-100%", 
            opacity: 0,
            transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] } 
          }}
          className="fixed inset-0 z-50 bg-[#030712] flex flex-col items-center justify-center p-6 text-foreground font-mono select-none"
        >
          {/* Fondo sutil de rejilla tecnológica */}
          <div className="absolute inset-0 tech-grid opacity-[0.03] pointer-events-none" />

          {/* Consola de Carga */}
          <div className="w-full max-w-lg p-6 rounded-2xl glass border border-card-border/60 bg-black/40 shadow-2xl relative overflow-hidden">
            {/* Cabecera de ventana de terminal */}
            <div className="flex items-center justify-between border-b border-card-border/50 pb-3.5 mb-5 text-[10px] text-foreground/40 font-bold uppercase tracking-wider">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
                <span className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
              </div>
              <div className="flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5 text-primary-500" />
                <span>ricardo-romero-init.sh</span>
              </div>
            </div>

            {/* Logs y Progreso */}
            <div className="space-y-4">
              <div className="min-h-[44px] text-left">
                {/* Indicador de comandos */}
                <div className="text-[10px] text-foreground/30 uppercase tracking-widest font-extrabold mb-1">Status de Carga</div>
                <div className="text-xs sm:text-sm font-bold text-gradient flex items-center gap-2">
                  <span className="text-primary-500 font-extrabold">&gt;</span>
                  {logText}
                  <span className="w-1.5 h-4.5 bg-primary-500 animate-pulse ml-0.5 inline-block" />
                </div>
              </div>

              {/* Barra de progreso interactiva de carga */}
              <div className="relative pt-1">
                <div className="flex mb-2 items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <span className="text-[9px] uppercase font-bold text-foreground/45">Progreso</span>
                    <RefreshCw className="w-3 h-3 text-primary-500/60 animate-spin" />
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-black text-primary-500">{Math.round(progress)}%</span>
                  </div>
                </div>
                {/* Riel y barra de carga de entrada */}
                <div className="overflow-hidden h-2.5 text-xs flex rounded-full bg-card-border/30 border border-card-border/40 relative">
                  <motion.div
                    style={{ width: `${progress}%` }}
                    className="shadow-md shadow-primary-500/20 bg-gradient-to-r from-primary-600 via-accent-500 to-primary-500 rounded-full"
                    layout
                  />
                </div>
              </div>
            </div>
            
            {/* Isotipos decorativos en el pie */}
            <div className="mt-6 flex items-center justify-between text-[8px] font-black text-foreground/20 uppercase tracking-widest border-t border-card-border/20 pt-4">
              <div className="flex items-center gap-1">
                <Shield className="w-3 h-3 text-foreground/15" />
                <span>Secure Boot</span>
              </div>
              <div className="flex items-center gap-1">
                <Cpu className="w-3 h-3 text-foreground/15" />
                <span>Intel vPro</span>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
