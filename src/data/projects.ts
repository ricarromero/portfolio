export interface Project {
  id: string;
  name: string;
  description: string;
  longDescription: string;
  problem: string;
  solution: string;
  features: string[];
  stack: string[];
  enfoque: string;
  category: 'Sistemas' | 'Datos' | 'Automatización' | 'Gestión' | 'Todos';
  status: 'Completado' | 'En desarrollo' | 'MVP Listo';
  repoUrl: string;
  demoUrl: string;
  colorTheme: {
    primary: string;
    glow: string;
    border: string;
    bgGrad: string;
  };
}

export const projects: Project[] = [
  {
    id: "liga-universitaria",
    name: "Liga Universitaria — Sistema de gestión deportiva",
    description: "Desarrollo de un MVP orientado a centralizar la gestión de una liga universitaria, incluyendo equipos, partidos, resultados, sanciones, documentación y estadísticas.",
    longDescription: "Sistema de gestión integral orientado a la administración de torneos deportivos universitarios. Centraliza la carga y consulta de fixture, resultados, tablas de posiciones, registro de sanciones disciplinarias, documentación de jugadores y computación automática de estadísticas en una plataforma unificada.",
    problem: "Dificultad y desorganización al gestionar manualmente calendarios de partidos, registros de jugadores, sanciones y estadísticas en planillas separadas.",
    solution: "Un sistema web centralizado con base de datos relacional y panel de administración que automatiza la actualización de tablas de posiciones, control de sanciones y registro de partidos.",
    features: [
      "Gestión centralizada de equipos, planteles y documentación de jugadores.",
      "Generación y seguimiento de fixture de partidos y resultados en tiempo real.",
      "Registro de sanciones disciplinarias con control automático de elegibilidad.",
      "Tablas de posiciones y estadísticas automatizadas."
    ],
    stack: ["Next.js", "React", "TypeScript", "SQL", "Supabase", "APIs"],
    enfoque: "Gestión de información, sistemas y datos.",
    category: "Sistemas",
    status: "En desarrollo",
    repoUrl: "https://github.com/ricarromero",
    demoUrl: "placeholder",
    colorTheme: {
      primary: "from-blue-600 to-indigo-700",
      glow: "rgba(37, 99, 235, 0.15)",
      border: "hover:border-blue-500/50 dark:hover:border-blue-400/40",
      bgGrad: "dark:from-blue-950/20 dark:to-slate-950"
    }
  },
  {
    id: "order-management-system",
    name: "Sistema de gestión para emprendimiento",
    description: "Aplicación desarrollada para organizar pedidos, clientes y seguimiento de ventas de un emprendimiento real de productos personalizados.",
    longDescription: "Sistema desarrollado a medida para optimizar el flujo operativo de Moon Regalos, un emprendimiento de productos personalizados. Permite estructurar la información de clientes, controlar el estado de fabricación de los pedidos y analizar métricas de ventas.",
    problem: "El registro manual en cuadernos y hojas de cálculo generaba confusión en plazos de entrega y errores en las especificaciones de diseño personalizadas de los productos.",
    solution: "Una aplicación web centralizada con base de datos relacional que organiza pedidos en un flujo de trabajo claro, permitiendo consultar el historial de clientes y evaluar métricas de ventas.",
    features: [
      "Organización visual de pedidos por estado de producción y fecha de entrega.",
      "Base de datos centralizada de clientes con historial de compras y datos de contacto.",
      "Seguimiento de ventas y control de pagos pendientes.",
      "Panel de administración intuitivo para la gestión diaria del emprendimiento."
    ],
    stack: ["HTML", "CSS", "JavaScript", "Firebase", "SQL"],
    enfoque: "Gestión de pedidos, organización de información y seguimiento de ventas.",
    category: "Gestión",
    status: "Completado",
    repoUrl: "https://github.com/ricarromero",
    demoUrl: "placeholder",
    colorTheme: {
      primary: "from-cyan-500 to-blue-600",
      glow: "rgba(6, 182, 212, 0.15)",
      border: "hover:border-cyan-500/50 dark:hover:border-cyan-400/40",
      bgGrad: "dark:from-cyan-950/20 dark:to-slate-950"
    }
  },
  {
    id: "whatsapp-appointment-bot",
    name: "Turnos con WhatsApp",
    description: "Automatización de la gestión de turnos mediante WhatsApp. Sistema pensado para reducir la gestión manual de reservas, integrando un flujo conversacional con calendario y un panel privado de administración.",
    longDescription: "Sistema de automatización de procesos para agendamiento de turnos. Integra la API de WhatsApp Cloud con flujos de trabajo desatendidos en n8n y un panel de control, permitiendo a los clientes reservar, modificar o cancelar citas automáticamente sin intervención manual.",
    problem: "Alto volumen de consultas repetitivas por WhatsApp, interrupciones continuas en la labor diaria y cancelaciones de turnos por falta de recordatorios oportunos.",
    solution: "Flujo automatizado con n8n y WhatsApp API que consulta disponibilidad en tiempo real, registra turnos en la base de datos y envía recordatorios automáticos.",
    features: [
      "Flujo conversacional automatizado para la reserva y gestión de turnos.",
      "Integración mediante APIs entre n8n, WhatsApp, calendario y base de datos.",
      "Envío automático de notificaciones y recordatorios de confirmación.",
      "Panel de administración privado para visualizar y gestionar el calendario de turnos."
    ],
    stack: ["n8n", "APIs", "WhatsApp API", "Next.js", "React", "SQL", "Supabase"],
    enfoque: "Automatización de procesos e integración de APIs.",
    category: "Automatización",
    status: "MVP Listo",
    repoUrl: "https://github.com/ricarromero/chatbot-turnos-whatsapp-case-study",
    demoUrl: "https://bot-estudio-juridico.vercel.app/",
    colorTheme: {
      primary: "from-violet-500 to-purple-600",
      glow: "rgba(139, 92, 246, 0.15)",
      border: "hover:border-violet-500/50 dark:hover:border-violet-400/40",
      bgGrad: "dark:from-violet-950/20 dark:to-slate-950"
    }
  },
  {
    id: "incident-safe-tracker",
    name: "Incident Safe Tracker",
    description: "Sistema orientado a centralizar el registro y seguimiento de incidentes operacionales, facilitando la organización de información, trazabilidad y consulta de datos.",
    longDescription: "Plataforma orientada al ámbito operativo e industrial para centralizar la notificación, auditoría y seguimiento de incidentes. Permite estructurar planes de acción correctiva y consultar información operacional de manera organizada.",
    problem: "Registro desorganizado de incidentes operacionales, falta de trazabilidad en las medidas de corrección y dificultad para auditar datos históricos.",
    solution: "Un sistema de información centralizado con base de datos estructurada, categorización de niveles de riesgo y generación de reportes para auditoría.",
    features: [
      "Registro centralizado de incidentes operacionales con nivel de severidad.",
      "Asignación y seguimiento de planes de acción correctiva.",
      "Consultas estructuradas y visualización de métricas de frecuencia.",
      "Scripts de procesamiento de datos en Python para análisis de información."
    ],
    stack: ["Python", "SQL", "Next.js", "React", "TypeScript", "Supabase"],
    enfoque: "Organización de información, trazabilidad y datos.",
    category: "Datos",
    status: "MVP Listo",
    repoUrl: "https://github.com/ricarromero/minesafe-tracker-case-study",
    demoUrl: "placeholder",
    colorTheme: {
      primary: "from-amber-500 to-orange-600",
      glow: "rgba(245, 158, 11, 0.15)",
      border: "hover:border-amber-500/50 dark:hover:border-amber-400/40",
      bgGrad: "dark:from-amber-950/20 dark:to-slate-950"
    }
  },
  {
    id: "qr-ingress-control",
    name: "Control de Ingreso QR",
    description: "Sistema digital para gestionar el ingreso y egreso de personas mediante identificación QR, con registro centralizado y trazabilidad de movimientos.",
    longDescription: "Sistema para la administración de accesos físicos en instalaciones institucionales o corporativas. Permite registrar en tiempo real entradas y salidas mediante códigos QR rotativos, manteniendo un historial auditable de movimientos.",
    problem: "Controles manuales en papel propensos a errores, lentitud en el ingreso y falta de registros históricos confiables sobre la permanencia de personas.",
    solution: "Aplicación web que valida credenciales QR en tiempo real contra la base de datos de Supabase, registrando automáticamente fecha, hora y estado de cada movimiento.",
    features: [
      "Validación de credenciales QR dinámicas para control de acceso.",
      "Registro centralizado de ingresos y egresos en tiempo real.",
      "Panel administrativo con perfiles para personal de seguridad y administración.",
      "Generación de reportes de asistencia y trazabilidad de permanencia."
    ],
    stack: ["Next.js", "React", "TypeScript", "SQL", "Supabase", "APIs"],
    enfoque: "Registro de información, automatización y trazabilidad.",
    category: "Sistemas",
    status: "Completado",
    repoUrl: "https://github.com/ricarromero/sistema-control-ingreso-qr-case-study",
    demoUrl: "placeholder",
    colorTheme: {
      primary: "from-emerald-500 to-teal-600",
      glow: "rgba(16, 185, 129, 0.15)",
      border: "hover:border-emerald-500/50 dark:hover:border-emerald-400/40",
      bgGrad: "dark:from-emerald-950/20 dark:to-slate-950"
    }
  },
  {
    id: "smart-pdf-compressor",
    name: "Smart PDF Compressor & OCR",
    description: "Herramienta para automatizar el procesamiento y optimización de documentos digitalizados, reduciendo tareas manuales relacionadas con compresión y OCR.",
    longDescription: "Utilidad web desarrollada para acelerar el procesamiento de documentación física escaneada. Automatiza la reducción de peso de archivos PDF y la extracción de texto mediante OCR directo en el navegador.",
    problem: "Demoras manuales y restricciones de peso al subir expedientes digitalizados a sistemas administrativos, junto con la imposibilidad de buscar texto en documentos escaneados.",
    solution: "Herramienta digital que procesa documentos localmente, ejecutando compresión de imágenes y reconocimiento de texto (OCR) de forma automatizada.",
    features: [
      "Compresión automatizada de imágenes en documentos PDF escaneados.",
      "Reconocimiento óptico de caracteres (OCR) para hacer seleccionable el texto.",
      "Procesamiento local sin envío de datos confidenciales a servidores externos.",
      "Interfaz simple optimizada para flujos de trabajo administrativos."
    ],
    stack: ["HTML", "CSS", "JavaScript", "React", "Tesseract.js", "PDF.js"],
    enfoque: "Procesamiento de documentos y automatización.",
    category: "Automatización",
    status: "Completado",
    repoUrl: "https://github.com/ricarromero/Legal_PDF_Compressor_y_OCR",
    demoUrl: "https://doclex.vercel.app/",
    colorTheme: {
      primary: "from-blue-500 to-indigo-600",
      glow: "rgba(59, 130, 246, 0.15)",
      border: "hover:border-blue-500/50 dark:hover:border-blue-400/40",
      bgGrad: "dark:from-blue-950/20 dark:to-slate-950"
    }
  }
];
