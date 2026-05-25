"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import TechStack from "../components/TechStack";
import Projects from "../components/Projects";
import Experience from "../components/Experience";
import Learning from "../components/Learning";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Preloader from "../components/Preloader";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {/* Preloader de carga futurista para la primera visita de sesión */}
      <Preloader onComplete={() => setIsLoading(false)} />
      
      {/* Cabecera de navegación interactiva */}
      <Navbar />
      
      {/* Cuerpo principal secuencial */}
      <main className="flex-1 w-full">
        {/* Sección Hero de presentación impactante */}
        <Hero />
        
        {/* Sección de perfil Bento Grid con terminal interactiva */}
        <About />
        
        {/* Sección de habilidades de tecnologías con filtros optimizados */}
        <TechStack />
        
        {/* Sección de proyectos destacados con modal y links reales */}
        <Projects />
        
        {/* Sección de trayectoria académica e hitos del CV real */}
        <Experience />
        
        {/* Sección de aprendizaje activo continuo horizontal */}
        <Learning />
        
        {/* Sección de formulario interactivo glassmorphism */}
        <Contact />
      </main>
      
      {/* Pie de página con enlaces y copyright dinámico */}
      <Footer />
    </>
  );
}
