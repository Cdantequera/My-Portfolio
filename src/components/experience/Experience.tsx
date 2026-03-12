import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiExternalLink, FiGithub, FiLayers, FiChevronDown, FiBookOpen, FiCpu, FiZap } from 'react-icons/fi';

// ─── INTERFACES ───
interface ProjectProps {
  title: string;
  role: string;
  description: string;
  tags: string[];
  link?: string;
  github?: string;
  status: 'active' | 'completed' | 'collaborating';
}

interface CaseStudyStep {
  icon: React.ElementType;
  label: string;
  accent: string;
  title: string;
  body: string;
  items?: { label: string; detail: string }[];
}

interface CaseStudyData {
  title: string;
  subtitle: string;
  role: string;
  tags: string[];
  steps: CaseStudyStep[];
}

// ─── TARJETA DE COLABORACIÓN ESTÁNDAR ───
const ProjectCard = ({ title, role, description, tags, link, github, status }: ProjectProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="bg-slate-800/30 border border-slate-700/50 p-6 rounded-xl hover:border-blue-500/40 transition-all group"
  >
    <div className="flex justify-between items-start mb-4">
      <div className="p-2 bg-blue-500/10 rounded-lg text-blue-400">
        <FiLayers size={20} />
      </div>
      <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full border ${
        status === 'active'
          ? 'border-green-500/50 text-green-400 bg-green-500/5'
          : 'border-blue-500/50 text-blue-400 bg-blue-500/5'
      }`}>
        {status.toUpperCase()}
      </span>
    </div>
    <h3 className="text-xl font-bold text-white mb-1 group-hover:text-blue-400 transition-colors">{title}</h3>
    <p className="text-blue-500/80 text-xs font-mono mb-4 uppercase tracking-wider">{role}</p>
    <p className="text-zinc-400 text-sm leading-relaxed mb-6">{description}</p>
    <div className="flex flex-wrap gap-2 mb-6">
      {tags.map(tag => (
        <span key={tag} className="text-[10px] bg-slate-900 text-zinc-500 px-2 py-1 rounded border border-slate-700">
          {tag}
        </span>
      ))}
    </div>
    <div className="flex gap-4 border-t border-slate-700/50 pt-4">
      {link && <a href={link} target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-white transition-colors"><FiExternalLink size={18} /></a>}
      {github && <a href={github} target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-white transition-colors"><FiGithub size={18} /></a>}
    </div>
  </motion.div>
);

// ─── CASO DE ESTUDIO EXPANDIBLE ───
const CaseStudy = ({ data }: { data: CaseStudyData }) => {
  const [open, setOpen] = useState(false);
  const [activeStep, setActiveStep] = useState(0);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="mb-16"
    >
      {/* Etiqueta */}
      <div className="flex items-center gap-3 mb-5">
        <span className="text-[10px] font-mono tracking-[0.3em] text-blue-400 uppercase border border-blue-500/30 px-3 py-1 bg-blue-500/5">
          Caso de Estudio
        </span>
        <div className="flex-1 h-px bg-slate-700/50" />
        <span className="text-[10px] font-mono text-zinc-600 tracking-widest uppercase hidden sm:block">
          Aprendizaje · Arquitectura · Entrega
        </span>
      </div>

      {/* Header clickeable */}
      <div
        onClick={() => setOpen(!open)}
        className="relative rounded-2xl border border-slate-700/50 hover:border-blue-500/40 bg-slate-800/30 transition-all duration-300 cursor-pointer group overflow-hidden"
      >
        {/* Glow de fondo sutil */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(59,130,246,0.06)_0%,_transparent_60%)] pointer-events-none" />

        <div className="relative z-10 p-7 md:p-9 flex items-center justify-between gap-6">
          <div className="flex-1">
            <p className="text-[10px] font-mono tracking-[0.25em] text-zinc-500 uppercase mb-2">{data.subtitle}</p>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
              {data.title}
            </h3>
            <p className="text-blue-500/70 text-xs font-mono uppercase tracking-wider mb-4">{data.role}</p>
            <div className="flex flex-wrap gap-2">
              {data.tags.map(tag => (
                <span key={tag} className="text-[10px] font-mono text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded border border-blue-500/20">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-col items-center gap-2 shrink-0">
            <span className="text-[10px] font-mono text-zinc-500 tracking-widest hidden sm:block">
              {open ? 'CERRAR' : 'VER DETALLE'}
            </span>
            <motion.div
              animate={{ rotate: open ? 180 : 0 }}
              transition={{ duration: 0.3 }}
              className="w-10 h-10 rounded-full border border-blue-500/40 flex items-center justify-center text-blue-400 group-hover:border-blue-400 group-hover:bg-blue-500/10 transition-all"
            >
              <FiChevronDown size={18} />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Contenido expandible */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
            className="overflow-hidden"
          >
            <div className="mt-2 rounded-2xl border border-slate-700/50 bg-slate-800/20 overflow-hidden">

              {/* Tabs */}
              <div className="flex border-b border-slate-700/50">
                {data.steps.map((step, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveStep(i)}
                    className={`flex-1 py-4 px-2 text-[10px] font-mono tracking-[0.12em] uppercase transition-all duration-200 ${
                      activeStep === i
                        ? 'text-blue-400 border-b-2 border-blue-500 bg-blue-500/5'
                        : 'text-zinc-600 hover:text-zinc-400 border-b-2 border-transparent'
                    }`}
                  >
                    {step.label}
                  </button>
                ))}
              </div>

              {/* Paso activo */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStep}
                  initial={{ opacity: 0, x: 12 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -12 }}
                  transition={{ duration: 0.22 }}
                  className="p-7 md:p-10"
                >
                  {(() => {
                    const step = data.steps[activeStep];
                    const Icon = step.icon;
                    return (
                      <div>
                        <div className="flex items-start gap-4 mb-5">
                          <div
                            className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                            style={{
                              background: `linear-gradient(135deg, ${step.accent}25, ${step.accent}08)`,
                              border: `1px solid ${step.accent}35`,
                            }}
                          >
                            <Icon size={17} style={{ color: step.accent }} />
                          </div>
                          <h4 className="text-lg md:text-xl font-bold text-white leading-snug">
                            {step.title}
                          </h4>
                        </div>

                        <p className="text-zinc-400 leading-relaxed text-sm md:text-base mb-7 max-w-3xl">
                          {step.body}
                        </p>

                        {step.items && (
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {step.items.map((item, i) => (
                              <div key={i} className="p-4 rounded-lg bg-slate-900/60 border border-slate-700/50">
                                <p className="text-xs font-mono tracking-wider mb-1" style={{ color: step.accent }}>
                                  {item.label}
                                </p>
                                <p className="text-xs text-zinc-500 leading-relaxed">{item.detail}</p>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    );
                  })()}
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

// ─── DATOS DEL CASO DE ESTUDIO: APPWISE ───
const appwiseCaseStudy: CaseStudyData = {
  title: "Plataforma SaaS Global",
  subtitle: "Cómo aprendí a construir software de escala real dentro de una empresa",
  role: "Frontend Developer Freelance @ APPWise",
  tags: ["Next.js 16", "TypeScript", "i18next", "Tailwind", "Prisma", "PostgreSQL"],
  steps: [
    {
      icon: FiBookOpen,
      label: "01 · Contexto",
      accent: "#3b82f6",
      title: "Entrar a una empresa con estándares de producción y aprender desde adentro",
      body: "Me integré a APPWise como desarrollador frontend freelance con el objetivo de contribuir al desarrollo de una plataforma SaaS dirigida a un mercado internacional. Más allá de entregar features, este proyecto fue un ambiente de aprendizaje real: tuve que adaptarme a una arquitectura existente, entender decisiones ya tomadas y aportar valor mientras seguía creciendo técnicamente.",
      items: [
        { label: "Contexto del proyecto", detail: "Plataforma SaaS multi-idioma con usuarios en distintas regiones" },
        { label: "Mi rol", detail: "Desarrollo frontend, estructuración de componentes y soporte al backend" },
        { label: "Desafío principal", detail: "Aprender tecnologías nuevas directamente en un entorno de producción real" },
        { label: "Stack nuevo para mí", detail: "Next.js 16 con App Router, i18n con CustomText, Prisma + PostgreSQL" },
      ]
    },
    {
      icon: FiCpu,
      label: "02 · Lo que aprendí",
      accent: "#8b5cf6",
      title: "Internacionalización, arquitectura monolítica con Next.js y persistencia relacional",
      body: "El mayor aprendizaje técnico fue la implementación de internacionalización (i18n) usando un sistema CustomText que permite cambiar el idioma de toda la plataforma de forma dinámica sin recargar la página. En paralelo, aprendí a construir con Next.js más allá del frontend: usando el App Router como monolito, con rutas API, Server Actions y la capa de datos con Prisma sobre PostgreSQL.",
      items: [
        { label: "i18n con CustomText", detail: "Sistema de traducción dinámico integrado al flujo de componentes de Next.js" },
        { label: "Next.js como monolito", detail: "App Router + Server Actions como capa de backend sin Express por separado" },
        { label: "Prisma + PostgreSQL", detail: "Modelado de datos relacional, migraciones y queries tipadas con TypeScript" },
        { label: "Flujos de pago complejos", detail: "Integración de pasos de pago con manejo de estados y validaciones en el cliente" },
      ]
    },
    {
      icon: FiZap,
      label: "03 · El valor",
      accent: "#10b981",
      title: "Por qué este tipo de experiencia vale más que un proyecto personal",
      body: "Trabajar dentro de una empresa con codebase real, pull requests, revisiones y decisiones de arquitectura ya tomadas es una experiencia diferente a construir desde cero. Tuve que leer código que no escribí, entender patrones existentes y agregar funcionalidad sin romper lo que ya funcionaba. Ese contexto de trabajo colaborativo y con estándares reales es lo que me preparó para trabajar con cualquier equipo o cliente.",
      items: [
        { label: "Trabajo en codebase existente", detail: "Adaptar código sin romper funcionalidad existente, como en un cliente real" },
        { label: "Estándares de equipo", detail: "Seguir convenciones, estructura de carpetas y patrones definidos por otros" },
        { label: "Aprendizaje acelerado", detail: "En semanas aprendí más que en meses de proyectos aislados" },
        { label: "Mentalidad de producto", detail: "Pensar en el usuario final y en la escalabilidad, no solo en que el código funcione" },
      ]
    }
  ]
};

// ─── COMPONENTE PRINCIPAL ───
export const Experience = () => {
  const myCollaborations = [
    {
      title: "Plataforma SaaS Global",
      role: "Frontend Developer Freelance @ APPWise",
      description: "Desarrollo de una arquitectura escalable para un Software as a Service. Implementación de sistema multi-idioma (i18n) y flujos de pago complejos.",
      tags: ["Next.js 16", "TypeScript", "i18next", "Tailwind"],
      status: "active" as const,
    },
    {
      title: "Izipay Integration",
      role: "Fintech Implementation",
      description: "Integración de pasarela de pagos Izipay para el mercado peruano, manejando transacciones seguras y estados de pago en tiempo real con documentación técnica compleja.",
      tags: ["Node.js", "API Rest", "Security", "Izipay"],
      status: "active" as const,
    },
  ];

  return (
    <section id="experiencia" className="min-h-screen bg-slate-900 py-32 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Cabecera */}
        <div className="mb-20">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-bold text-white mb-6"
          >
            Proyectos <span className="text-blue-500">&</span> Colaboraciones
          </motion.h2>
          <div className="h-px w-32 bg-linear-to-r from-blue-500 to-transparent" />
          <p className="mt-8 text-zinc-500 font-mono text-sm tracking-widest uppercase">
            Selección de trabajos recientes en desarrollo
          </p>
        </div>

        {/* ── CASO DE ESTUDIO APPWISE ── */}
        <CaseStudy data={appwiseCaseStudy} />

        {/* ── SEPARADOR ── */}
        <div className="flex items-center gap-4 mb-12">
          <div className="flex-1 h-px bg-slate-800" />
          <span className="text-[10px] font-mono tracking-[0.3em] text-zinc-600 uppercase">Todas las colaboraciones</span>
          <div className="flex-1 h-px bg-slate-800" />
        </div>

        {/* ── GRID DE TARJETAS ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {myCollaborations.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>

        {/* Mensaje decorativo */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.5 }}
          viewport={{ once: true }}
          className="mt-20 p-8 border border-dashed border-slate-800 rounded-xl text-center"
        >
          <p className="text-zinc-500 font-mono text-xs uppercase tracking-[0.3em]">
            // Próximas colaboraciones en camino...
          </p>
        </motion.div>

      </div>
    </section>
  );
};