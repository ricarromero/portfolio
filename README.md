# Ricardo Romero - Portfolio Profesional Interactivo 🚀

Este es el repositorio de mi portfolio web personal. Ha sido diseñado con una estética moderna e interactiva inspirada en plataformas SaaS premium y dashboards de tecnología futuristas, y optimizado específicamente para lograr el máximo rendimiento y fluidez.

Como **estudiante de Ciencias de la Computación** y **programador junior**, mi enfoque principal es diseñar y construir sistemas reales, robustos y eficientes que resuelvan problemas y automaticen procesos de negocios.

---

## 🛠️ Tecnologías Obligatorias Utilizadas

El sitio web está desarrollado con un stack tecnológico de vanguardia para asegurar escalabilidad y buenas prácticas de desarrollo:

* **Next.js (App Router):** Estructura del lado del servidor óptima, SEO y tiempos de carga inmediatos.
* **React:** Construcción de interfaces reactivas modulares y dinámicas.
* **TypeScript:** Tipado estricto para prevenir bugs de producción y asegurar mantenibilidad.
* **Tailwind CSS (v4 - PostCSS):** Estilos fluidos basados en un sistema de diseño premium, con variables CSS y soporte dinámico de temas.
* **Framer Motion:** Animaciones, transiciones fluidas de categorías, timelines y efectos con inercia física de alta gama.
* **Lucide React:** Iconografía de trazo fino consistente y moderna.

---

## ✨ Características y Secciones del Sitio

El sitio cuenta con las siguientes microinteracciones y secciones diseñadas a medida:

1. **Spotlight Radial Cursor (Efecto de Haz de Luz):** Un destello circular que sigue de forma sutil al cursor del mouse con efecto de amortiguación (inercia) que le da vitalidad al fondo (se desactiva automáticamente en pantallas táctiles y dispositivos móviles por optimización de batería y rendimiento).
2. **Scroll Progress Bar:** Una fina barra en el borde superior de la pantalla que se va llenando de acuerdo con el porcentaje de scroll de la página.
3. **Navbar Sticky con Glassmorphism:** Barra de navegación fija con efecto de difuminado (*blur*), indicador de sección activa (mediante *Intersection Observer*) y un menú móvil responsivo animado tipo hamburguesa.
4. **Hero / Inicio Impactante:** Cabecera con tipografía de primer nivel, un gran degradado luminoso animado, palabras rotativas que cambian dinámicamente y tarjetas Bento flotantes en 3D interactivo que sintetizan mi enfoque.
5. **Sobre mí (Bento Grid):** Organización en rejilla moderna que detalla mi formación académica universitaria formal en la **Universidad Nacional de San Juan** y mis cuatro pilares de especialización informática.
6. **Stack de Tecnologías con Filtros:** Panel de tecnologías clasificadas por categorías con un filtrado dinámico que reordena las tarjetas con transiciones fluidas.
7. **Proyectos Destacados (Grilla Bento & Modales):** Exposición de mis 5 proyectos de desarrollo real:
   * **MineSafe Tracker:** Sistema industrial de HSE y seguridad operacional minera.
   * **Legal PDF Compressor & OCR:** Compresor y extractor de texto local de documentos judiciales.
   * **Control de Asistencia QR:** Credenciales QR autorotativas dinámicas y panel de guardias.
   * **Turnos con Chatbot de WhatsApp:** Flujo conversacional automatizado B2B con Cloud API.
   * **Gestión de Pedidos:** Kanban interno interactivo con sincronización Firebase.
   * *Cada proyecto se puede filtrar por categoría y abre un modal ultra detallado accesible con el problema resuelto, solución propuesta y características técnicas.*
8. **Cómo Trabajo ("Mi Enfoque"):** Un timeline vertical interactivo y ordenado en zig-zag que ilustra las 6 fases de mi flujo de trabajo como programador (desde el entendimiento de la necesidad real del cliente hasta la documentación técnica).
9. **Trayectoria Académica:** Hitos estructurados formalmente que destacan mi educación universitaria y especializaciones.
10. **Aprendizaje Activo (Marquee Continuo):** Un carrusel continuo horizontal que detalla las temáticas en las que me capacito actualmente, deteniéndose sutilmente al pasar el cursor del mouse.
11. **Formulario de Contacto en Glassmorphic Card:** Formulario con validación activa en tiempo real y animación de envío/éxito, junto con botones directos y funcionales de email (`mailto:`) y redes sociales.
12. **Modo Claro / Oscuro Premium:** Alternador de temas suave que modifica todas las variables HSL globales de color del portfolio con un solo click.

---

## 💻 Ejecución Local

Para instalar y ejecutar el portfolio localmente en tu máquina, seguí estos simples pasos:

### Pre-requisitos
* Tener instalado **Node.js** (versión 18 o superior recomendada).
* Un gestor de paquetes como **npm** (incluido con Node.js).

### Pasos de Instalación

1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com/ricarromero/portfolio-ricardo-romero.git
   cd portfolio-ricardo-romero
   ```

2. **Instalar las dependencias esenciales:**
   ```bash
   npm install
   ```

3. **Iniciar el servidor de desarrollo:**
   ```bash
   npm run dev
   ```
   *El sitio estará disponible en [http://localhost:3000](http://localhost:3000).*

---

## 🎨 Personalización

El sitio ha sido estructurado siguiendo principios de **código limpio** y **separación de capas**. Si querés modificar la información del portfolio, no necesitás reescribir código HTML ni componentes visuales:

* **Para editar o agregar Proyectos:** Modificá el array de datos en [src/data/projects.ts](file:///C:/Users/Usuario/Desktop/DEV/Portfolio/src/data/projects.ts).
* **Para editar o agregar Tecnologías:** Modificá el listado en [src/data/technologies.ts](file:///C:/Users/Usuario/Desktop/DEV/Portfolio/src/data/technologies.ts).
* **Para editar la Formación o el Enfoque:** Modificá los hitos en [src/data/timeline.ts](file:///C:/Users/Usuario/Desktop/DEV/Portfolio/src/data/timeline.ts).
* **Para cambiar los Colores y Estilos de Tema:** Podés redefinir las variables de colores HSL y valores en [src/app/globals.css](file:///C:/Users/Usuario/Desktop/DEV/Portfolio/src/app/globals.css) tanto para el `:root` (modo claro) como para la clase `.dark` (modo oscuro).

---

## 🚀 Despliegue (Deploy)

El proyecto está listo para ser desplegado de forma rápida en plataformas en la nube optimizadas para Next.js:

* **Vercel (Recomendado):**
  1. Iniciá sesión en Vercel y vinculá tu cuenta de GitHub.
  2. Hacé click en **\"Add New\"** -> **\"Project\"**.
  3. Importá el repositorio `portfolio-ricardo-romero`.
  4. Vercel detectará la configuración de Next.js automáticamente. Hacé click en **\"Deploy\"**.
* **Netlify / Amplify:** Configurar la ruta de construcción como `npm run build` y el directorio de salida como `.next` o `out` según corresponda.

---

## 👨‍💻 Autor

**Ricardo Romero**
* **Ubicación:** San Juan, Argentina.
* **Email:** ricardooromero15@gmail.com
* **GitHub:** [@ricarromero](https://github.com/ricarromero)
* **Estudio:** Licenciatura en Ciencias de la Computación — Universidad Nacional de San Juan (UNSJ).
