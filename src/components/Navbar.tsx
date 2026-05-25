"use client";

import { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
  { name: "Inicio", href: "#inicio" },
  { name: "Sobre mí", href: "#sobre-mi" },
  { name: "Tecnologías", href: "#tecnologias" },
  { name: "Proyectos", href: "#proyectos" },
  { name: "Experiencia", href: "#experiencia" },
  { name: "Contacto", href: "#contacto" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("inicio");
  const [scrolled, setScrolled] = useState(false);

  // Controlar scroll y cambiar estilos del Navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Detectar la sección activa en pantalla
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -60% 0px", // Margen para detectar cuando la sección está en el centro
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    navLinks.forEach((link) => {
      const element = document.getElementById(link.href.substring(1));
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  // Evitar scroll en body cuando el menú mobile está abierto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        scrolled
          ? "py-3 glass-navbar shadow-lg shadow-black/5 dark:shadow-black/20"
          : "py-5 bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo / Nombre */}
        <a
          href="#inicio"
          className="flex items-center text-lg font-bold tracking-tight text-foreground group transition-colors duration-300"
          onClick={() => setIsOpen(false)}
        >
          <span className="bg-gradient-to-r from-foreground to-foreground group-hover:from-primary-500 group-hover:to-accent-500 bg-clip-text text-transparent transition-all duration-300">
            Ricardo Romero
          </span>
        </a>

        {/* Navegación Desktop */}
        <nav className="hidden md:flex items-center gap-1.5 p-1 rounded-full glass border border-card-border/50">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                className={`relative px-4 py-1.5 text-xs font-semibold rounded-full transition-colors duration-300 ${
                  isActive
                    ? "text-primary-500 dark:text-white"
                    : "text-foreground/75 hover:text-primary-500 dark:hover:text-white"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="activeNavIndicator"
                    className="absolute inset-0 bg-primary-500/10 dark:bg-white/10 rounded-full z-[-1]"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Botones / Acciones Desktop */}
        <div className="hidden md:flex items-center gap-3">
          <ThemeToggle />
          <a
            href="#contacto"
            className="flex items-center gap-1 px-4 py-2 text-xs font-bold rounded-xl bg-gradient-to-r from-primary-600 to-accent-600 hover:from-primary-500 hover:to-accent-500 text-white shadow-md shadow-primary-500/10 hover:shadow-primary-500/25 transition-all duration-300 group cursor-pointer"
          >
            Contacto
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        {/* Botones Mobile */}
        <div className="flex md:hidden items-center gap-2.5">
          <ThemeToggle />
          <button
            onClick={toggleMenu}
            className="w-10 h-10 flex items-center justify-center rounded-xl bg-card-bg border border-card-border hover:border-primary-500/30 text-foreground transition-colors cursor-pointer"
            aria-label={isOpen ? "Cerrar menú de navegación" : "Abrir menú de navegación"}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Menú de Navegación Mobile */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 top-[65px] z-30 md:hidden bg-background/95 backdrop-blur-lg flex flex-col p-6 border-t border-card-border"
          >
            <nav className="flex flex-col gap-4 mt-6">
              {navLinks.map((link, index) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <motion.a
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center justify-between py-3 px-4 rounded-xl font-bold transition-all ${
                      isActive
                        ? "bg-primary-500/10 text-primary-500 border-l-4 border-primary-500"
                        : "text-foreground/80 hover:bg-card-bg"
                    }`}
                  >
                    <span>{link.name}</span>
                    <ArrowUpRight className={`w-4 h-4 transition-opacity duration-300 ${isActive ? "opacity-100" : "opacity-0"}`} />
                  </motion.a>
                );
              })}
            </nav>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-auto mb-10 flex flex-col gap-4"
            >
              <a
                href="#contacto"
                onClick={() => setIsOpen(false)}
                className="w-full flex items-center justify-center gap-1.5 py-4.5 rounded-xl bg-gradient-to-r from-primary-600 to-accent-600 text-white font-bold text-sm shadow-lg shadow-primary-500/20"
              >
                Hablemos
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
