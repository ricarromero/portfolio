"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  
  // Aplicamos un efecto spring para suavizar el movimiento de la barra
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[4px] bg-gradient-to-r from-primary-500 via-accent-500 to-primary-600 origin-left z-50 shadow-md shadow-primary-500/20"
      style={{ scaleX }}
    />
  );
}
