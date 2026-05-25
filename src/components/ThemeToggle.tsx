"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // useEffect para evitar errores de hidratación server/client en Next.js
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-10 h-10 rounded-xl bg-card-bg border border-card-border" />
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="relative w-10 h-10 flex items-center justify-center rounded-xl bg-card-bg border border-card-border hover:border-primary-500/50 text-foreground transition-all duration-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500/30 overflow-hidden cursor-pointer"
      aria-label={isDark ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={isDark ? "dark" : "light"}
          initial={{ y: 20, opacity: 0, rotate: -45 }}
          animate={{ y: 0, opacity: 1, rotate: 0 }}
          exit={{ y: -20, opacity: 0, rotate: 45 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="flex items-center justify-center"
        >
          {isDark ? (
            <Sun className="w-5 h-5 text-amber-400 fill-amber-400/10" />
          ) : (
            <Moon className="w-5 h-5 text-slate-700 fill-slate-700/10" />
          )}
        </motion.div>
      </AnimatePresence>
    </button>
  );
}
