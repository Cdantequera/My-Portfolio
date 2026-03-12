import { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import { CVDownloadButton } from '../cards/Cvdownloadbutton';

const contactLinks = [
  {
    icon: FiMail,
    label: 'Email',
    value: 'cdantequera@gmail.com',
    href: 'mailto:cdantequera@gmail.com',
    color: 'from-blue-500 to-cyan-400',
    glow: 'rgba(59,130,246,0.4)',
  },
  {
    icon: FaWhatsapp,
    label: 'WhatsApp',
    value: '+54 381 660 8841',
    href: 'https://wa.me/5493816608841',
    color: 'from-green-500 to-emerald-400',
    glow: 'rgba(34,197,94,0.4)',
  },
  {
    icon: FiGithub,
    label: 'GitHub',
    value: 'Cdantequera',
    href: 'https://github.com/Cdantequera',
    color: 'from-slate-400 to-zinc-300',
    glow: 'rgba(148,163,184,0.3)',
  },
  {
    icon: FiLinkedin,
    label: 'LinkedIn',
    value: 'cdantequera',
    href: 'https://www.linkedin.com/in/cdantequera/',
    color: 'from-blue-400 to-sky-300',
    glow: 'rgba(56,189,248,0.4)',
  },
];

interface ContactCardProps {
  link: typeof contactLinks[0];
  scrollYProgress: MotionValue<number>;
  index: number;
}

const ContactCard = ({ link, scrollYProgress, index }: ContactCardProps) => {
  const Icon = link.icon;
  const cardOpacity = useTransform(
    scrollYProgress,
    [0.15 + index * 0.03, 0.25 + index * 0.03],
    [0, 1]
  );
  const cardY = useTransform(
    scrollYProgress,
    [0.15 + index * 0.03, 0.25 + index * 0.03],
    [40, 0]
  );

  return (
    <motion.a
      href={link.href}
      target="_blank"
      rel="noopener noreferrer"
      style={{ opacity: cardOpacity, y: cardY }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="group relative flex items-center gap-5 p-5 rounded-xl border border-slate-700/50 bg-slate-800/30 hover:border-blue-500/40 hover:bg-slate-800/60 transition-all duration-300 cursor-pointer overflow-hidden"
    >
      {/* Glow al hover */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-xl"
        style={{
          background: `radial-gradient(ellipse at left center, ${link.glow} 0%, transparent 70%)`,
        }}
      />

      {/* Icono */}
      <div className={`relative z-10 w-12 h-12 rounded-lg bg-linear-to-br ${link.color} bg-opacity-10 flex items-center justify-center shadow-lg shrink-0`}>
        <Icon className="text-slate-900 text-xl" />
      </div>

      {/* Texto */}
      <div className="relative z-10 min-w-0">
        <p className="text-xs font-mono tracking-[0.2em] text-zinc-500 uppercase mb-0.5">
          {link.label}
        </p>
        <p className="text-sm md:text-base text-zinc-200 font-medium truncate group-hover:text-white transition-colors">
          {link.value}
        </p>
      </div>

      {/* Flecha */}
      <div className="relative z-10 ml-auto text-zinc-600 group-hover:text-blue-400 group-hover:translate-x-1 transition-all duration-300 shrink-0">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </motion.a>
  );
};

export const Contact = () => {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const titleY = useTransform(scrollYProgress, [0.02, 0.15], [60, 0]);
  const titleOpacity = useTransform(scrollYProgress, [0.02, 0.15], [0, 1]) 

  const subtitleOpacity = useTransform(scrollYProgress, [0.08, 0.20], [0, 1]);
  const subtitleY = useTransform(scrollYProgress, [0.08, 0.20], [30, 0]);

  return (
    <section
      id="contacto"
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center bg-slate-900 overflow-hidden py-32"
    >
      {/* Glow de fondo */}
      <motion.div
        style={{
          opacity: useTransform(scrollYProgress, [0.1, 0.4, 0.8], [0, 0.18, 0]),
        }}
        className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,_rgba(59,130,246,0.35)_0%,_transparent_70%)]"
      />

      {/* Líneas decorativas de fondo */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-[0.03]">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute left-0 right-0 h-px bg-blue-400"
            style={{ top: `${15 + i * 14}%` }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 w-full">

        {/* Título */}
        <motion.div
          style={{ y: titleY, opacity: titleOpacity }}
          className="mb-4"
        >
          <h2 className="text-6xl md:text-8xl font-bold tracking-tight text-blue-400 leading-none">
            Contacto
          </h2>
        </motion.div>

        {/* Línea decorativa bajo el título */}
        <motion.div
          style={{
            scaleX: useTransform(scrollYProgress, [0.10, 0.20], [0, 1]),
            opacity: useTransform(scrollYProgress, [0.10, 0.20], [0, 1]),  
            transformOrigin: 'left',
          }}
          className="h-px w-32 bg-blue-500/50 mb-10"
        />

        {/* Subtítulo */}
        <motion.p
          style={{ opacity: subtitleOpacity, y: subtitleY }}
          className="text-zinc-400 text-base md:text-lg font-light mb-16 max-w-md leading-relaxed"
        >
          ¿Tenés un proyecto en mente o necesitas ayuda con algo? ¡No dudes en contactarme! Siempre estoy abierto a nuevas oportunidades y colaboraciones.
        </motion.p>

        {/* Grid de contactos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {contactLinks.map((link, i) => (
            <ContactCard key={link.label} link={link} scrollYProgress={scrollYProgress} index={i} />
          ))}
        </div>

        {/* Botón de descarga CV */}
        <motion.div
          style={{
            opacity: useTransform(scrollYProgress, [0.30, 0.42], [0, 1]),
            y: useTransform(scrollYProgress, [0.30, 0.42], [20, 0]),
          }}
          className="flex justify-center mt-10"
        >
          <CVDownloadButton />
        </motion.div>

        {/* Pie de sección */}
        <div className="text-center text-xs font-mono tracking-[0.25em] text-zinc-600 uppercase mt-12">
          Daniel Antequera — Argentina · {new Date().getFullYear()}
        </div>

      </div>
    </section>
  );
};