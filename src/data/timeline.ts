export interface TimelineItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  date: string;
  tag?: string;
  type: 'education' | 'experience' | 'certification';
}

export interface Certification {
  title: string;
  issuer: string;
}

export const timelineExperience: TimelineItem[] = [
  {
    id: "unsj-instructor",
    title: "Instructor de Taller de Computación",
    subtitle: "UNSJ — Taller de Computación para Mujeres",
    description: "Planificación y realización de actividades prácticas orientadas al desarrollo de habilidades digitales. Acompañamiento de participantes y resolución de problemas durante las actividades.",
    date: "2025",
    tag: "Práctica Educativa",
    type: "experience"
  },
  {
    id: "circot-intern",
    title: "Pasante Técnico",
    subtitle: "CIRCOT — Pasantía de Investigación",
    description: "Soporte técnico informático, recolección estructurada de datos y organización de información. Análisis de métricas y tecnología aplicada a proyectos de construcción.",
    date: "2022",
    tag: "Pasantía",
    type: "experience"
  },
  {
    id: "school-degree",
    title: "Técnico Maestro Mayor de Obras",
    subtitle: "Escuela Industrial Domingo Faustino Sarmiento (UNSJ)",
    description: "Formación técnica de nivel secundario orientada al diseño estructural, lectura de planos, organización de procesos y gestión de documentación técnica.",
    date: "2016 - 2022",
    tag: "Título Técnico",
    type: "education"
  }
];

export const timelineEducation: TimelineItem[] = [
  {
    id: "unsj-degree",
    title: "Licenciatura en Ciencias de la Computación (4.º Año)",
    subtitle: "Universidad Nacional de San Juan (UNSJ)",
    description: "Formación universitaria en programación, estructuras de datos, bases de datos, ingeniería de software, sistemas y fundamentos de computación.",
    date: "2023 - Presente",
    tag: "4.º Año en Curso",
    type: "education"
  }
];

export const certifications: Certification[] = [
  {
    title: "Introducción a la IA moderna",
    issuer: "Cisco Networking Academy"
  },
  {
    title: "Introducción a Ciberseguridad",
    issuer: "Cisco Networking Academy"
  },
  {
    title: "Introducción a la Ciencia de Datos",
    issuer: "Cisco Networking Academy"
  }
];
