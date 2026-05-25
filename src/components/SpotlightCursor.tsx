"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function SpotlightCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(true);

  // Valores de movimiento del mouse
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Configuración de movimiento suavizado con inercia
  const springConfig = { stiffness: 60, damping: 20, mass: 0.5 };
  const spotlightX = useSpring(mouseX, springConfig);
  const spotlightY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Comprobar si el dispositivo es táctil o pantalla pequeña
    const checkDevice = () => {
      const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
      const isSmallScreen = window.innerWidth < 768;
      setIsMobile(isTouch || isSmallScreen);
    };

    checkDevice();
    window.addEventListener("resize", checkDevice);

    const handleMouseMove = (e: MouseEvent) => {
      // Ajustar posición para centrar el spotlight de 600px de diámetro (offset de -300)
      mouseX.set(e.clientX - 300);
      mouseY.set(e.clientY - 300);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    if (!isMobile) {
      window.addEventListener("mousemove", handleMouseMove);
      document.body.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      window.removeEventListener("resize", checkDevice);
      window.removeEventListener("mousemove", handleMouseMove);
      if (document.body) {
        document.body.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, [isMobile, mouseX, mouseY, isVisible]);

  // Si es mobile, no renderizar el cursor spotlight para optimizar recursos y batería
  if (isMobile) return null;

  return (
    <motion.div
      className="fixed pointer-events-none z-0 w-[600px] h-[600px] rounded-full blur-[100px] bg-[radial-gradient(circle,var(--color-glow-color)_0%,transparent_65%)]"
      style={{
        left: spotlightX,
        top: spotlightY,
        opacity: isVisible ? 1 : 0,
      }}
      transition={{ opacity: { duration: 0.5 } }}
    />
  );
}
