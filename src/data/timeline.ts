export interface TimelineItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  date: string;
  tag?: string;
  type: 'education' | 'experience';
}

export const timelineEducation: TimelineItem[] = [
  {
    id: "unsj-degree",
    title: "Licenciatura en Ciencias de la Computación (4.º Año)",
    subtitle: "Facultad de Ciencias Exactas, Físicas y Naturales (UNSJ)",
    description: "Formación universitaria avanzada centrada en bases matemáticas de la computación, algoritmia compleja, estructuras de datos avanzadas, diseño e ingeniería de software y bases de datos relacionales.",
    date: "2023 - Presente",
    tag: "Estudiante Avanzado",
    type: "education"
  },
  {
    id: "unsj-instructor",
    title: "Instructor de Taller de Computación",
    subtitle: "Práctica Educativa - UNSJ | San Juan, Argentina",
    description: "Dictado y guía de capacitaciones en alfabetización informática básica y desarrollo de habilidades digitales. Colaboración activa en la planificación de actividades prácticas y pedagógicas para garantizar la adquisición efectiva de competencias tecnológicas.",
    date: "2025",
    tag: "Docencia y Práctica",
    type: "experience"
  },
  {
    id: "circot-intern",
    title: "Pasante Técnico",
    subtitle: "Centro de Investigación CIRCOT | San Juan, Argentina",
    description: "Participación activa en soporte técnico informático, recolección estructurada de datos y análisis de métricas para proyectos relacionados con la construcción. Optimización y automatización de procedimientos internos mediante la confección de documentación técnica rigurosa del sector.",
    date: "2022",
    tag: "Pasantía de Investigación",
    type: "experience"
  },
  {
    id: "school-degree",
    title: "Técnico Maestro Mayor de Obras",
    subtitle: "Escuela Industrial Domingo Faustino Sarmiento (UNSJ)",
    description: "Formación técnica de nivel secundario orientada al diseño estructural, planificación y gestión eficiente de recursos en proyectos de obras civiles.",
    date: "2016 - 2022",
    tag: "Formación Técnica",
    type: "education"
  }
];
