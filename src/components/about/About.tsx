import { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FiArrowRight, FiCoffee, FiCode, FiUsers } from 'react-icons/fi';

export const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const photoY = useTransform(scrollYProgress, [0, 1], [100, -100]);

  const highlights = [
    { icon: FiCode, label: '1+', text: 'años desarrollando soluciones web' },
    { icon: FiUsers, label: '10+', text: 'colaboraciones con clientes' },
    { icon: FiCoffee, label: '100+', text: 'ideas a implementar' },
  ];

  return (
    <section
      id="sobre-mi"
      ref={sectionRef}
      className="relative min-h-screen bg-slate-900 py-32 px-6 overflow-hidden"
    >
      {/* Fondo abstracto animado */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob" />
        <div className="absolute top-40 right-10 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        
        {/* Título de la sección visible */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-5xl md:text-7xl font-bold text-white">
            Sobre <span className="text-blue-500">mí</span>
          </h2>
          <div className="h-1 w-24 bg-blue-500 mx-auto mt-4" />
        </motion.div>

        {/* Grid de contenido principal (similar a tu captura) */}
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          {/* Columna izquierda: foto + highlights */}
          <motion.div
            style={{ y: photoY }}
            className="space-y-8"
          >
            {/* Foto con overlay "3+ años creando" */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-linear-to-r from-blue-500 to-cyan-500 rounded-xl blur-lg opacity-30 group-hover:opacity-100 transition duration-1000" />
              <div className="relative rounded-xl overflow-hidden">
                <img
                  src="https://cdantequera775.edgeone.app/daniel.jpeg"
                  alt="Daniel Antequera"
                  className="w-full h-100 object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute bottom-4 left-4 bg-slate-900/80 backdrop-blur-sm px-4 py-2 rounded-full border border-blue-500/30">
                  <span className="text-sm font-mono text-blue-400">⚡ 1+ año creando</span>
                </div>
              </div>
            </div>

            {/* Tarjetas de estadísticas (3 columnas) */}
            <div className="grid grid-cols-3 gap-3">
              {highlights.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -5, borderColor: '#3b82f6' }}
                  className="bg-slate-800/40 border border-slate-700/50 rounded-lg p-4 text-center group"
                >
                  <item.icon className="text-blue-400 text-xl mx-auto mb-2 group-hover:scale-110 transition-transform" />
                  <p className="text-white font-bold text-lg">{item.label}</p>
                  <p className="text-zinc-500 text-xs mt-1">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Columna derecha: bio + principios + tecnologías */}
          <div className="space-y-8">
            
            {/* Texto destacado (con comillas) */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="prose prose-invert"
            >
              <p className="text-xl text-white leading-relaxed font-light">
                <span className="text-blue-400 text-4xl font-serif">"</span>
                Cuando empecé a programar, descubrí que mi verdadera pasión 
                <span className="text-blue-400 font-medium"> no era escribir código, sino ayudar a personas y negocios a materializar sus ideas</span>.
                Hoy combino ambas cosas: desarrollo limpio y pensamiento estratégico.
              </p>
            </motion.div>

            {/* Cómo trabajo (lista con flechas) */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="space-y-4 pt-4"
            >
              <h3 className="text-sm font-mono tracking-[0.3em] text-zinc-500 uppercase mb-6">
                Cómo trabajo
              </h3>
              
              {[
                'Priorizo resultados, no horas frente a la pantalla',
                'Escucho primero, codifico después',
                'Código pensado para crecer contigo',
                'Obsesionado con los detalles que marcan la diferencia',
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  className="flex items-center gap-3 text-zinc-400 group hover:text-white transition-colors cursor-default"
                >
                  <FiArrowRight className="text-blue-400 group-hover:translate-x-1 transition-transform" />
                  <span>{item}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* Stack principal (badges) */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <h3 className="text-sm font-mono tracking-[0.3em] text-zinc-500 uppercase mb-4">
                Stack principal
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  'React', 'Next.js', 'TypeScript', 'Node.js', 
                  'Express', 'MongoDB', 'PostgreSQL', 'Tailwind',
                  'Prisma', 'Framer Motion', 'Vercel', 'Firebase'
                ].map((tech, i) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    transition={{ delay: 0.9 + i * 0.03 }}
                    className="px-3 py-1 text-xs font-mono border border-blue-500/30 text-blue-300 bg-blue-500/5 hover:bg-blue-500/20 hover:border-blue-400 transition-all rounded-sm cursor-default"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            {/* Invitación final */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="pt-8 border-t border-slate-800"
            >
              <p className="text-zinc-500 text-sm">
                ¿Crees que podríamos crear algo increíble juntos? 
                <a href="#contacto" className="text-blue-400 hover:text-blue-300 ml-2 font-medium inline-flex items-center gap-1 group">
                  Hablemos
                  <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                </a>
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};