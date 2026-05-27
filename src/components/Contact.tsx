"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Send, CheckCircle2, AlertCircle, Phone } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";

export default function Contact() {
  // Estados para formulario
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Limpiar error al escribir
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  // Validaciones del formulario
  const validateForm = () => {
    const tempErrors: Record<string, string> = {};
    if (!formData.name.trim()) tempErrors.name = "El nombre es obligatorio.";
    if (!formData.email.trim()) {
      tempErrors.email = "El correo electrónico es obligatorio.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      tempErrors.email = "Introduce un correo electrónico válido.";
    }
    if (!formData.subject.trim()) tempErrors.subject = "El asunto es obligatorio.";
    if (!formData.message.trim()) tempErrors.message = "El mensaje no puede estar vacío.";
    
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  // Envío real utilizando Web3Forms
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setStatus("sending");

    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;
    if (!accessKey) {
      console.error("Falta la clave NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY en las variables de entorno.");
      setStatus("error");
      return;
    }

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          from_name: "Portafolio - Ricardo Romero",
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        console.error("Error al enviar el formulario:", data.message || data);
        setStatus("error");
      }
    } catch (error) {
      console.error("Error de red al enviar el formulario:", error);
      setStatus("error");
    }
  };

  return (
    <section id="contacto" className="py-24 relative overflow-hidden">
      {/* Luces decorativas */}
      <div className="absolute top-1/4 left-1/3 w-[300px] h-[300px] bg-primary-500/5 rounded-full blur-[110px] pointer-events-none animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/3 w-[300px] h-[300px] bg-accent-500/5 rounded-full blur-[110px] pointer-events-none animate-pulse-slow" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Cabecera */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-xs uppercase font-extrabold tracking-widest text-primary-500 bg-primary-500/10 px-3 py-1 rounded-full mb-3">
            Contacto
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-foreground">
            Hablemos de tu Próximo Proyecto
          </h2>
          <div className="h-1 bg-gradient-to-r from-primary-500 to-accent-500 mt-4 rounded-full w-[60px]" />
          <p className="text-sm text-foreground/60 max-w-xl mt-4 leading-relaxed font-medium">
            ¿Tenés alguna oportunidad laboral, idea de automatización o desarrollo web para tu negocio? Escribime y lo analizamos juntos.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-5xl mx-auto">
          {/* Lado Izquierdo: Información Directa (Col 5) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Tarjeta de Información General */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-6 rounded-3xl glass border border-card-border/75 shadow-lg flex flex-col justify-between"
            >
              <h3 className="text-lg font-bold text-foreground mb-4">Información de Contacto</h3>
              
              <div className="space-y-4">
                {/* Email Directo */}
                <a
                  href="mailto:ricardooromero15@gmail.com"
                  className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-card-bg/40 border border-card-border/60 hover:border-primary-500/30 hover:bg-primary-500/3 transition-all duration-300 group cursor-pointer"
                >
                  <span className="w-9 h-9 rounded-xl bg-primary-500/10 flex items-center justify-center text-primary-500 group-hover:scale-105 transition-transform">
                    <Mail className="w-4.5 h-4.5" />
                  </span>
                  <div>
                    <span className="text-[10px] uppercase font-bold text-foreground/40 block">Email Personal</span>
                    <span className="text-xs sm:text-sm font-bold text-foreground/80 group-hover:text-primary-500 dark:group-hover:text-white transition-colors">
                      ricardooromero15@gmail.com
                    </span>
                  </div>
                </a>

                {/* GitHub Directo */}
                <a
                  href="https://github.com/ricarromero"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-card-bg/40 border border-card-border/60 hover:border-primary-500/30 hover:bg-primary-500/3 transition-all duration-300 group cursor-pointer"
                >
                  <span className="w-9 h-9 rounded-xl bg-primary-500/10 flex items-center justify-center text-primary-500 group-hover:scale-105 transition-transform">
                    <GithubIcon className="w-4.5 h-4.5" />
                  </span>
                  <div>
                    <span className="text-[10px] uppercase font-bold text-foreground/40 block">GitHub Oficial</span>
                    <span className="text-xs sm:text-sm font-bold text-foreground/80 group-hover:text-primary-500 dark:group-hover:text-white transition-colors">
                      github.com/ricarromero
                    </span>
                  </div>
                </a>

                 {/* Teléfono y WhatsApp */}
                <a
                  href="https://wa.me/5492645890535"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-card-bg/40 border border-card-border/60 hover:border-primary-500/30 hover:bg-primary-500/3 transition-all duration-300 group cursor-pointer"
                >
                  <span className="w-9 h-9 rounded-xl bg-primary-500/10 flex items-center justify-center text-primary-500 group-hover:scale-105 transition-transform">
                    <Phone className="w-4.5 h-4.5" />
                  </span>
                  <div>
                    <span className="text-[10px] uppercase font-bold text-foreground/40 block">Teléfono / WhatsApp</span>
                    <span className="text-xs sm:text-sm font-bold text-foreground/80 group-hover:text-primary-500 dark:group-hover:text-white transition-colors">
                      +54 264 5890535
                    </span>
                  </div>
                </a>

                {/* LinkedIn Directo */}
                <a
                  href="https://linkedin.com/in/ricardo-octavio-romero-896860263"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-card-bg/40 border border-card-border/60 hover:border-primary-500/30 hover:bg-primary-500/3 transition-all duration-300 group cursor-pointer"
                >
                  <span className="w-9 h-9 rounded-xl bg-primary-500/10 flex items-center justify-center text-primary-500 group-hover:scale-105 transition-transform">
                    <LinkedinIcon className="w-4.5 h-4.5" />
                  </span>
                  <div>
                    <span className="text-[10px] uppercase font-bold text-foreground/40 block">LinkedIn Profesional</span>
                    <span className="text-xs sm:text-sm font-bold text-foreground/80 group-hover:text-primary-500 dark:group-hover:text-white transition-colors">
                      linkedin.com/in/ricardo-octavio-romero
                    </span>
                  </div>
                </a>
              </div>
            </motion.div>

            {/* Tarjeta de recordatorio / ubicación */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-6 rounded-3xl glass border border-card-border/75 shadow-md flex flex-col justify-between"
            >
              <h3 className="text-sm font-bold text-foreground mb-1.5">Ubicación y Disponibilidad</h3>
              <p className="text-xs text-foreground/65 leading-relaxed font-medium">
                San Juan, Argentina. Disponible para trabajar de forma remota para cualquier parte del mundo o de forma híbrida/presencial local.
              </p>
            </motion.div>
          </div>

          {/* Lado Derecho: Formulario Interactivo (Col 7) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="lg:col-span-7 p-7 md:p-8 rounded-3xl glass border border-card-border/75 shadow-lg relative min-h-[460px]"
          >
            <AnimatePresence mode="wait">
              {status !== "success" ? (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  className="space-y-4 text-left"
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                >
                  <h3 className="text-lg font-bold text-foreground mb-4 block">Escribime directamente</h3>
                  
                  {/* Fila Nombre / Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Nombre */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="name" className="text-[10px] uppercase font-bold text-foreground/50 tracking-wider">Nombre</label>
                      <input
                        suppressHydrationWarning={true}
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        disabled={status === "sending"}
                        className={`w-full px-4 py-3 rounded-xl bg-card-bg/50 border text-xs font-medium text-foreground focus:outline-none focus:ring-2 focus:ring-primary-500/25 transition-all ${
                          errors.name ? "border-red-500" : "border-card-border hover:border-primary-500/30"
                        }`}
                        placeholder="Ricardo Romero"
                      />
                      {errors.name && (
                        <span className="text-[10px] text-red-500 font-bold flex items-center gap-1 mt-0.5">
                          <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
                          {errors.name}
                        </span>
                      )}
                    </div>

                    {/* Email */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="email" className="text-[10px] uppercase font-bold text-foreground/50 tracking-wider">Email</label>
                      <input
                        suppressHydrationWarning={true}
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        disabled={status === "sending"}
                        className={`w-full px-4 py-3 rounded-xl bg-card-bg/50 border text-xs font-medium text-foreground focus:outline-none focus:ring-2 focus:ring-primary-500/25 transition-all ${
                          errors.email ? "border-red-500" : "border-card-border hover:border-primary-500/30"
                        }`}
                        placeholder="tu@correo.com"
                      />
                      {errors.email && (
                        <span className="text-[10px] text-red-500 font-bold flex items-center gap-1 mt-0.5">
                          <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
                          {errors.email}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Asunto */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="subject" className="text-[10px] uppercase font-bold text-foreground/50 tracking-wider">Asunto</label>
                    <input
                      suppressHydrationWarning={true}
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      disabled={status === "sending"}
                      className={`w-full px-4 py-3 rounded-xl bg-card-bg/50 border text-xs font-medium text-foreground focus:outline-none focus:ring-2 focus:ring-primary-500/25 transition-all ${
                        errors.subject ? "border-red-500" : "border-card-border hover:border-primary-500/30"
                      }`}
                      placeholder="Propuesta de proyecto a medida / Oportunidad"
                    />
                    {errors.subject && (
                      <span className="text-[10px] text-red-500 font-bold flex items-center gap-1 mt-0.5">
                        <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
                        {errors.subject}
                      </span>
                    )}
                  </div>

                  {/* Mensaje */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="message" className="text-[10px] uppercase font-bold text-foreground/50 tracking-wider">Mensaje</label>
                    <textarea
                      suppressHydrationWarning={true}
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      disabled={status === "sending"}
                      rows={5}
                      className={`w-full px-4 py-3 rounded-xl bg-card-bg/50 border text-xs font-medium text-foreground focus:outline-none focus:ring-2 focus:ring-primary-500/25 transition-all resize-none ${
                        errors.message ? "border-red-500" : "border-card-border hover:border-primary-500/30"
                      }`}
                      placeholder="Hola Ricardo, me gustaría conversar sobre el desarrollo de..."
                    />
                    {errors.message && (
                      <span className="text-[10px] text-red-500 font-bold flex items-center gap-1 mt-0.5">
                        <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
                        {errors.message}
                      </span>
                    )}
                  </div>

                  {/* Botón de Enviar */}
                  <button
                    suppressHydrationWarning={true}
                    type="submit"
                    disabled={status === "sending"}
                    className="w-full flex items-center justify-center gap-2 py-4.5 rounded-xl bg-gradient-to-r from-primary-600 to-accent-600 hover:from-primary-500 hover:to-accent-500 text-white font-bold text-xs shadow-md shadow-primary-500/10 hover:shadow-primary-500/25 transition-all duration-300 disabled:opacity-50 group cursor-pointer mt-3"
                  >
                    {status === "sending" ? (
                      <>
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Enviando Mensaje...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        Enviar Mensaje Directo
                      </>
                    )}
                  </button>

                  {status === "error" && (
                    <div className="flex items-center gap-2.5 p-3.5 rounded-xl bg-red-500/10 border border-red-500/20 text-red-500 text-xs font-bold mt-3 animate-pulse-slow">
                      <AlertCircle className="w-4.5 h-4.5 flex-shrink-0" />
                      <span>Hubo un problema al enviar el mensaje. Por favor, intentá de nuevo o escribime por email directo.</span>
                    </div>
                  )}
                </motion.form>
              ) : (
                /* Estado Exitoso Animado */
                <motion.div
                  key="success-screen"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ type: "spring", duration: 0.5 }}
                  className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center"
                >
                  <motion.div
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.1 }}
                    className="w-16 h-16 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-500 border border-emerald-500/20 shadow-lg shadow-emerald-500/5 mb-6"
                  >
                    <CheckCircle2 className="w-8 h-8" />
                  </motion.div>

                  <h3 className="text-xl font-bold text-foreground mb-2">¡Mensaje Enviado con Éxito!</h3>
                  <p className="text-xs sm:text-sm text-foreground/60 leading-relaxed font-medium max-w-sm mb-8">
                    Gracias por ponerte en contacto, Ricardo. Te responderé al correo electrónico indicado lo antes posible.
                  </p>

                  <button
                    suppressHydrationWarning={true}
                    onClick={() => setStatus("idle")}
                    className="px-5 py-3 rounded-xl bg-card-bg border border-card-border hover:border-primary-500/50 text-foreground font-bold text-xs transition-colors duration-300 cursor-pointer"
                  >
                    Enviar otro mensaje
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
