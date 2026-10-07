export interface Technology {
  name: string;
  category: 'Bases de datos' | 'Automatización e Integración' | 'Lenguajes' | 'Desarrollo' | 'Herramientas' | 'IA Aplicada';
  iconName: string;
  color: string;
  glowClass: string;
  level?: string;
}

export const technologies: Technology[] = [
  // BASES DE DATOS
  {
    name: "SQL",
    category: "Bases de datos",
    iconName: "Database",
    color: "group-hover:text-blue-500",
    glowClass: "rgba(59, 130, 246, 0.15)"
  },
  {
    name: "PostgreSQL",
    category: "Bases de datos",
    iconName: "Database",
    color: "group-hover:text-cyan-500",
    glowClass: "rgba(6, 182, 212, 0.15)"
  },
  {
    name: "Supabase",
    category: "Bases de datos",
    iconName: "DatabaseBackup",
    color: "group-hover:text-emerald-500",
    glowClass: "rgba(16, 185, 129, 0.15)"
  },
  {
    name: "Firebase",
    category: "Bases de datos",
    iconName: "Flame",
    color: "group-hover:text-amber-500",
    glowClass: "rgba(245, 158, 11, 0.15)"
  },

  // AUTOMATIZACIÓN E INTEGRACIÓN
  {
    name: "n8n",
    category: "Automatización e Integración",
    iconName: "Workflow",
    color: "group-hover:text-rose-500",
    glowClass: "rgba(244, 63, 94, 0.15)"
  },
  {
    name: "APIs",
    category: "Automatización e Integración",
    iconName: "Globe",
    color: "group-hover:text-violet-500",
    glowClass: "rgba(139, 92, 246, 0.15)"
  },
  {
    name: "Automatización de procesos",
    category: "Automatización e Integración",
    iconName: "Settings",
    color: "group-hover:text-purple-500",
    glowClass: "rgba(168, 85, 247, 0.15)"
  },
  {
    name: "Integración de servicios",
    category: "Automatización e Integración",
    iconName: "Layers",
    color: "group-hover:text-indigo-400",
    glowClass: "rgba(99, 102, 241, 0.15)"
  },

  // LENGUAJES
  {
    name: "Python",
    category: "Lenguajes",
    iconName: "FileCode2",
    color: "group-hover:text-yellow-500",
    glowClass: "rgba(234, 179, 8, 0.15)"
  },
  {
    name: "JavaScript",
    category: "Lenguajes",
    iconName: "FileJson",
    color: "group-hover:text-yellow-400",
    glowClass: "rgba(250, 204, 21, 0.15)"
  },
  {
    name: "TypeScript",
    category: "Lenguajes",
    iconName: "Code2",
    color: "group-hover:text-blue-500",
    glowClass: "rgba(59, 130, 246, 0.15)"
  },
  {
    name: "C++",
    category: "Lenguajes",
    iconName: "Cpu",
    color: "group-hover:text-blue-600",
    glowClass: "rgba(37, 99, 235, 0.15)"
  },

  // DESARROLLO
  {
    name: "Next.js",
    category: "Desarrollo",
    iconName: "Globe",
    color: "group-hover:text-white dark:group-hover:text-white",
    glowClass: "rgba(255, 255, 255, 0.1)"
  },
  {
    name: "React",
    category: "Desarrollo",
    iconName: "Atom",
    color: "group-hover:text-cyan-400",
    glowClass: "rgba(34, 211, 238, 0.15)"
  },
  {
    name: "HTML",
    category: "Desarrollo",
    iconName: "FileCode",
    color: "group-hover:text-orange-500",
    glowClass: "rgba(249, 115, 22, 0.15)"
  },
  {
    name: "CSS",
    category: "Desarrollo",
    iconName: "Palette",
    color: "group-hover:text-blue-400",
    glowClass: "rgba(96, 165, 250, 0.15)"
  },

  // HERRAMIENTAS
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
  },
  {
    name: "VS Code",
    category: "Herramientas",
    iconName: "Laptop",
    color: "group-hover:text-blue-500",
    glowClass: "rgba(59, 130, 246, 0.15)"
  },
  {
    name: "Notion",
    category: "Herramientas",
    iconName: "FileText",
    color: "group-hover:text-slate-300",
    glowClass: "rgba(203, 213, 225, 0.15)"
  },
  {
    name: "Discord",
    category: "Herramientas",
    iconName: "MessageSquare",
    color: "group-hover:text-indigo-400",
    glowClass: "rgba(129, 140, 248, 0.15)"
  },
  {
    name: "draw.io",
    category: "Herramientas",
    iconName: "Layout",
    color: "group-hover:text-orange-400",
    glowClass: "rgba(251, 146, 60, 0.15)"
  },

  // IA APLICADA
  {
    name: "Herramientas de IA generativa",
    category: "IA Aplicada",
    iconName: "Sparkles",
    color: "group-hover:text-teal-400",
    glowClass: "rgba(45, 212, 191, 0.15)"
  },
  {
    name: "Integración de APIs de IA",
    category: "IA Aplicada",
    iconName: "Cpu",
    color: "group-hover:text-cyan-400",
    glowClass: "rgba(34, 211, 238, 0.15)"
  },
  {
    name: "Automatización asistida por IA",
    category: "IA Aplicada",
    iconName: "Bot",
    color: "group-hover:text-violet-400",
    glowClass: "rgba(167, 139, 250, 0.15)"
  }
];
