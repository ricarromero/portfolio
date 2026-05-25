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
  category: 'Python' | 'HTML' | 'CSS' | 'Automatización' | 'Gestión' | 'Frontend' | 'Todos';
  status: 'Completado' | 'En Desarrollo' | 'MVP Listo';
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
    id: "incident-safe-tracker",
    name: "Incident Safe Tracker",
    description: "Sistema web para registrar, gestionar, auditar y hacer seguimiento de incidentes dentro de operaciones industriales de alta complejidad.",
    longDescription: "Incident Safe Tracker es una plataforma web robusta diseñada para la industria y la logística compleja. Facilita la declaración de incidentes, la asignación de planes de acción correctiva en tiempo real y la visualización de analíticas automáticas con soporte en Python.",
    problem: "Las operaciones industriales complejas enfrentan dificultades para reportar incidentes debido al aislamiento, sistemas en papel obsoletos y la falta de seguimiento oportuno a las acciones correctivas, lo que aumenta los riesgos operativos.",
    solution: "Una aplicación web interactiva que centraliza los reportes, permite la carga de evidencia offline (con sincronización posterior) y genera reportes analíticos automatizados, mejorando el tiempo de respuesta en un 70%.",
    features: [
      "Registro inmediato de incidentes con categorización de riesgo (Bajo, Medio, Alto, Crítico).",
      "Asignación automática de planes de acción correctiva a responsables específicos.",
      "Panel de analíticas visuales interactivo con gráficos (Recharts) para auditar tendencias de incidentes.",
      "Análisis predictivo de patrones de riesgo implementado mediante un script en Python en el backend."
    ],
    stack: ["Python", "Next.js", "React", "TypeScript", "Tailwind CSS", "Supabase", "Recharts"],
    enfoque: "Seguridad operacional, reportes y auditoría, automatización en Python.",
    category: "Python",
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
    id: "smart-pdf-compressor",
    name: "Smart PDF Compressor & OCR",
    description: "Desarrollo de una herramienta web de procesamiento masivo para optimizar, comprimir y procesar documentos digitalizados de gran tamaño.",
    longDescription: "Una utilidad web del lado del cliente diseñada para flujos de trabajo corporativos y sistemas de administración. Permite reducir significativamente el peso de documentos escaneados aplicando un motor de OCR (Reconocimiento Óptico de Caracteres) local para buscar texto libre de servidores externos.",
    problem: "Los portales de carga imponen límites estrictos de peso para la subida de archivos corporativos. Además, muchos expedientes son fotos o escaneos no legibles por computadora, lo que impide realizar búsquedas de palabras clave.",
    solution: "Desarrollo de una solución web 100% local (del lado del cliente) que procesa los archivos en el navegador, garantizando confidencialidad absoluta al no enviar documentación corporativa confidencial a servidores externos.",
    features: [
      "Compresión de PDF ajustable mediante remuestreo de imágenes directamente en el navegador.",
      "Motor de OCR local integrado con Tesseract.js para extraer y hacer seleccionable el texto de PDFs escaneados.",
      "Procesamiento por lotes y descarga optimizada en un único archivo PDF consolidado.",
      "Estructuración de contenido HTML semántico y layouts interactivos para una velocidad de renderizado óptima."
    ],
    stack: ["HTML", "CSS", "React", "Vite", "PDF.js", "jsPDF", "Tesseract.js"],
    enfoque: "OCR local, procesamiento de documentos, compresión de PDF, optimización web.",
    category: "HTML",
    status: "Completado",
    repoUrl: "https://github.com/ricarromero/Legal_PDF_Compressor_y_OCR",
    demoUrl: "placeholder",
    colorTheme: {
      primary: "from-blue-500 to-indigo-600",
      glow: "rgba(59, 130, 246, 0.15)",
      border: "hover:border-blue-500/50 dark:hover:border-blue-400/40",
      bgGrad: "dark:from-blue-950/20 dark:to-slate-950"
    }
  },
  {
    id: "qr-ingress-control",
    name: "Control de Ingreso con QR",
    description: "Aplicación web corporativa para el control de ingreso y egreso de personal mediante códigos QR dinámicos autorotativos y auditoría.",
    longDescription: "Un sistema integral de control de asistencia y acceso físico para organizaciones. Combina una interfaz para colaboradores que genera credenciales QR temporales y dinámicas con un portal de administración y escáner en tiempo real.",
    problem: "Las credenciales físicas tradicionales son costosas y los códigos QR estáticos son fáciles de duplicar o compartir, lo que debilita el control de seguridad de las empresas.",
    solution: "Creación de un sistema con QR dinámico que expira cada 15 segundos y que requiere validación en tiempo real contra la base de datos de Supabase, evitando la suplantación de identidad.",
    features: [
      "Generación de código QR dinámico de un solo uso por usuario, sincronizado por tiempo.",
      "Escáner web integrado de cámara para guardias o tótems de entrada con retroalimentación sonora.",
      "Dashboard administrativo completo con panel de roles (Administrador, Guardia, Colaborador).",
      "Auditoría automatizada de entradas, salidas, horas trabajadas e inasistencias con reportes CSV."
    ],
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "API Routes", "Supabase"],
    enfoque: "Seguridad física, control de asistencia, QR dinámico, roles y reportes en tiempo real.",
    category: "Gestión",
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
    id: "whatsapp-appointment-bot",
    name: "Turnos con Chatbot de WhatsApp",
    description: "Sistema automatizado de agendamiento de turnos mediante un chatbot de WhatsApp y un panel de control privado para profesionales.",
    longDescription: "Solución de automatización B2B para estudios profesionales. Permite a los clientes de un estudio agendar, reprogramar o cancelar turnos profesionales a través de WhatsApp de forma conversacional, impactando directamente en la base de datos.",
    problem: "Pérdida de tiempo administrativo y alta tasa de inasistencias debido a procesos manuales de agendamiento y falta de recordatorios automáticos.",
    solution: "Integración de la API de WhatsApp Cloud con un flujo de decisiones automatizado que consulta disponibilidad en tiempo real y envía recordatorios 24 horas antes del turno de manera desatendida.",
    features: [
      "Chatbot conversacional inteligente con flujos automatizados de respuesta rápida.",
      "Sincronización bidireccional inmediata con panel de turnos privado para los profesionales.",
      "Sistema de envío automático de notificaciones y confirmaciones automáticas de reserva.",
      "Base de datos persistente con historial de interacciones y bloqueo de turnos duplicados."
    ],
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "API Routes", "Supabase", "WhatsApp Cloud API"],
    enfoque: "Automatización de procesos, chatbots de mensajería, reserva de turnos y panel de control.",
    category: "Automatización",
    status: "MVP Listo",
    repoUrl: "https://github.com/ricarromero/chatbot-turnos-whatsapp-case-study",
    demoUrl: "placeholder",
    colorTheme: {
      primary: "from-violet-500 to-purple-600",
      glow: "rgba(139, 92, 246, 0.15)",
      border: "hover:border-violet-500/50 dark:hover:border-violet-400/40",
      bgGrad: "dark:from-violet-950/20 dark:to-slate-950"
    }
  },
  {
    id: "order-management-system",
    name: "Sistema de Gestión de Pedidos",
    description: "Creación de una aplicación web para la gestión de pedidos y seguimiento de ventas de un emprendimiento local de regalos personalizados.",
    longDescription: "Un software a medida para pequeños negocios y emprendedores. Centraliza el ciclo de vida del pedido, desde la cotización y confirmación de pago con Firebase, hasta el diseño, manufactura, estadísticas de ventas en tiempo real e inventario final.",
    problem: "Los cuadernos físicos y las planillas de cálculo sueltas generan confusión en los plazos de entrega y errores en las especificaciones de diseño personalizadas de cada regalo.",
    solution: "Un dashboard minimalista e intuitivo que organiza los pedidos en un tablero Kanban de producción, con actualizaciones en tiempo real y alertas de vencimiento próximas.",
    features: [
      "Tablero Kanban interactivo para el control visual del estado de los pedidos.",
      "Base de datos de clientes con histórico de compras, preferencias y saldos pendientes.",
      "Buscador rápido con filtros avanzados por fecha de entrega, tipo de regalo o estado de pago.",
      "Cuentas administrativas simples con maquetación y estilos CSS personalizados interactivos."
    ],
    stack: ["HTML", "CSS", "JavaScript", "Firebase", "SQL"],
    enfoque: "Gestión comercial interna, organización de manufactura, base de datos en tiempo real.",
    category: "CSS",
    status: "Completado",
    repoUrl: "https://github.com/ricarromero",
    demoUrl: "placeholder",
    colorTheme: {
      primary: "from-cyan-500 to-blue-600",
      glow: "rgba(6, 182, 212, 0.15)",
      border: "hover:border-cyan-500/50 dark:hover:border-cyan-400/40",
      bgGrad: "dark:from-cyan-950/20 dark:to-slate-950"
    }
  }
];
