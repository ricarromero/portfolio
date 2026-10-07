"use client";

import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Award, Calendar, CheckCircle2 } from "lucide-react";
import { timelineEducation, timelineExperience, certifications, TimelineItem } from "../data/timeline";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  "unsj-degree": GraduationCap,
  "unsj-instructor": Briefcase,
  "circot-intern": Briefcase,
  "school-degree": GraduationCap,
};

export default function Experience() {
  const allTimelineItems = [...timelineEducation, ...timelineExperience];

  return (
    <section id="experiencia" className="py-24 relative overflow-hidden bg-primary-50/5 dark:bg-transparent border-t border-card-border/20">
      {/* Luz de fondo */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[300px] h-[300px] bg-accent-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        {/* Cabecera */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-xs uppercase font-extrabold tracking-widest text-primary-500 bg-primary-500/10 px-3 py-1 rounded-full mb-3">
            Trayectoria y Formación
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-foreground">
            Experiencia Académica y Práctica
          </h2>
          <div className="h-1 bg-gradient-to-r from-primary-500 to-accent-500 mt-4 rounded-full w-[60px]" />
          <p className="text-sm text-foreground/60 max-w-xl mt-4 leading-relaxed font-medium">
            Formación universitaria en Ciencias de la Computación, prácticas docentes y pasantías técnicas enfocadas en tecnología aplicada.
          </p>
        </div>

        {/* Timeline Lineal Vertical */}
        <div className="relative pl-6 sm:pl-8 space-y-10 mb-16">
          {/* Línea vertical izquierda */}
          <div className="absolute left-1.5 sm:left-2 top-2 bottom-2 w-[1.5px] bg-gradient-to-b from-primary-500 via-accent-500 to-primary-500/30" />

          {allTimelineItems.map((item: TimelineItem, i: number) => {
            const Icon = iconMap[item.id] || GraduationCap;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ type: "spring", stiffness: 100, damping: 15, delay: i * 0.1 }}
                className="relative"
              >
                {/* Indicador del timeline */}
                <span className="absolute -left-10.5 sm:-left-12.5 w-9 h-9 rounded-xl bg-card-bg border border-card-border/80 text-primary-500 flex items-center justify-center shadow-md z-10 group-hover:scale-105 transition-transform">
                  <Icon className="w-4.5 h-4.5" />
                </span>

                {/* Tarjeta */}
                <div className="p-6 sm:p-7 rounded-3xl glass border border-card-border/75 shadow-md hover:border-primary-500/20 transition-all duration-300 relative group overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-500/0 to-primary-500/0 group-hover:from-primary-500/2 group-hover:to-accent-500/2 transition-colors duration-500 pointer-events-none" />

                  {/* Fila superior con Fecha y Tag */}
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-4 relative z-10">
                    <span className="inline-flex items-center gap-1.5 text-[10px] font-bold text-foreground/50">
                      <Calendar className="w-3.5 h-3.5" />
                      {item.date}
                    </span>

                    {item.tag && (
                      <span className="px-2.5 py-0.5 rounded-md bg-primary-500/10 text-[9px] uppercase font-black tracking-wider text-primary-500">
                        {item.tag}
                      </span>
                    )}
                  </div>

                  {/* Títulos */}
                  <div className="relative z-10">
                    <h3 className="text-lg md:text-xl font-bold text-foreground mb-1 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                      {item.title}
                    </h3>
                    <h4 className="text-xs uppercase font-extrabold tracking-wide text-foreground/55 mb-4">
                      {item.subtitle}
                    </h4>

                    {/* Descripción */}
                    <p className="text-xs sm:text-sm text-foreground/70 leading-relaxed font-medium">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Sección de Certificaciones Destacadas */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="p-7 rounded-3xl glass border border-card-border/75 shadow-lg relative overflow-hidden"
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="w-10 h-10 rounded-xl bg-accent-500/10 flex items-center justify-center text-accent-500">
              <Award className="w-5 h-5" />
            </span>
            <div>
              <h3 className="text-lg font-bold text-foreground">Certificaciones Complementarias</h3>
              <p className="text-xs text-foreground/50 font-medium">Cisco Networking Academy</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="p-4 rounded-2xl bg-card-bg/60 border border-card-border/50 flex items-start gap-3 hover:border-primary-500/30 transition-all duration-300"
              >
                <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="text-xs font-bold text-foreground/90 leading-snug">{cert.title}</h4>
                  <span className="text-[10px] text-foreground/50 font-medium block mt-1">{cert.issuer}</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
