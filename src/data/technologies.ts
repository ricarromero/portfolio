export interface Technology {
  name: string;
  category: 'Frontend' | 'Backend' | 'Base de datos' | 'Herramientas' | 'Lenguajes';
  iconName: string; // Se asociará dinámicamente con iconos de Lucide o logos
  color: string; // Para bordes y efectos glow interactivos
  glowClass: string; // Clase de Tailwind o variable CSS para sombra radial
  level?: string;
}

export const technologies: Technology[] = [
  // Frontend
  {
    name: "Next.js",
    category: "Frontend",
    iconName: "Globe",
    color: "group-hover:text-white dark:group-hover:text-white",
    glowClass: "rgba(255, 255, 255, 0.1)"
  },
  {
    name: "React",
    category: "Frontend",
    iconName: "Atom",
    color: "group-hover:text-cyan-400",
    glowClass: "rgba(34, 211, 238, 0.15)"
  },
  {
    name: "TypeScript",
    category: "Frontend",
    iconName: "Code2",
    color: "group-hover:text-blue-500",
    glowClass: "rgba(59, 130, 246, 0.15)"
  },
  {
    name: "Tailwind CSS",
    category: "Frontend",
    iconName: "Palette",
    color: "group-hover:text-teal-400",
    glowClass: "rgba(45, 212, 191, 0.15)"
  },
  {
    name: "HTML",
    category: "Frontend",
    iconName: "FileCode",
    color: "group-hover:text-orange-500",
    glowClass: "rgba(249, 115, 22, 0.15)"
  },
  {
    name: "CSS",
    category: "Frontend",
    iconName: "Layers",
    color: "group-hover:text-blue-400",
    glowClass: "rgba(96, 165, 250, 0.15)"
  },
  
  // Backend & APIs
  {
    name: "JavaScript",
    category: "Backend", // Colocado aquí o en Frontend, sirve para lógica
    iconName: "FileJson",
    color: "group-hover:text-yellow-400",
    glowClass: "rgba(250, 204, 21, 0.15)"
  },
  {
    name: "Firebase",
    category: "Backend",
    iconName: "Flame",
    color: "group-hover:text-amber-500",
    glowClass: "rgba(245, 158, 11, 0.15)"
  },
  {
    name: "Supabase",
    category: "Backend",
    iconName: "DatabaseBackup",
    color: "group-hover:text-emerald-500",
    glowClass: "rgba(16, 185, 129, 0.15)"
  },

  // Base de datos
  {
    name: "PostgreSQL",
    category: "Base de datos",
    iconName: "Database",
    color: "group-hover:text-cyan-500",
    glowClass: "rgba(6, 182, 212, 0.15)"
  },

  // Lenguajes
  {
    name: "Python",
    category: "Lenguajes",
    iconName: "FileCode2",
    color: "group-hover:text-yellow-500",
    glowClass: "rgba(234, 179, 8, 0.15)"
  },
  {
    name: "C++",
    category: "Lenguajes",
    iconName: "Cpu",
    color: "group-hover:text-blue-600",
    glowClass: "rgba(37, 99, 235, 0.15)"
  },

  // Herramientas
  {
    name: "Git",
    category: "Herramientas",
    iconName: "GitBranch",
    color: "group-hover:text-red-500",
    glowClass: "rgba(239, 68, 68, 0.15)"
  },
  {
    name: "GitHub",
    category: "Herramientas",
    iconName: "Github",
    color: "group-hover:text-neutral-400",
    glowClass: "rgba(163, 163, 163, 0.15)"
  }
];
