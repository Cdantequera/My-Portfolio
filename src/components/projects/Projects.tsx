import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

// Definimos la interfaz para nuestros proyectos
interface Project {
  title: string;
  description: string;
  tags: string[];
  github?: string;
  demo?: string;
  image: string;
}

const projects: Project[] = [
  {
  title: "Hotel Bra'ul",
  description: "Aplicación web de lujo para gestión y reserva de habitaciones con autenticación JWT, búsqueda por fechas y panel de suites destacadas.",
  tags: ["React", "Vite", "Tailwind", "Axios"],
  github: "https://github.com/Cdantequera/hotel-braul",
  demo: "https://hotel-braul.vercel.app",
  image: "https://hotel-braul.edgeone.app/Captura%20de%20pantalla%202026-03-11%20203807.png"
},
  {
  title: "V-Sound Music",
  description: "Plataforma de gestión y reproducción musical con catálogo, búsqueda avanzada, playlists personalizadas y panel de administración completo.",
  tags: ["React", "Firebase", "Tailwind", "Vite"],
  github: "https://github.com/Cdantequera/Sound-Music",
  demo: "https://sound-music.vercel.app",
  image: "https://v-music.edgeone.app/Captura%20de%20pantalla%202026-03-11%20203308.png"
},
{
  title: "Control de Pagos",
  description: "PWA para gestión de pagos mensuales entre dos personas con sincronización en tiempo real, sistema de aprobación de cobros y notificaciones sonoras.",
  tags: ["Next.js", "MongoDB", "Tailwind", "PWA"],
  github: "https://github.com/Cdantequera/App-personal-de-cobro",
  demo: "https://app-personal-de-cobro.vercel.app",
  image: "https://control-pago.edgeone.app/Captura%20de%20pantalla%202026-03-11%20204326.png"
}
];

export const Projects = () => {
  return (
    <section id="proyectos" className="min-h-screen bg-slate-900 py-32 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Título de Sección */}
        <div className="mb-16">
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-4">
            Proyectos <span className="text-blue-500">Recientes</span>
          </h2>
          <div className="h-1 w-24 bg-blue-500" />
        </div>

        {/* Grid de Proyectos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-slate-800/40 border border-slate-700/50 rounded-xl overflow-hidden hover:border-blue-500/50 transition-all group"
            >
              {/* Imagen del Proyecto */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-slate-900/40 group-hover:bg-transparent transition-colors" />
              </div>

              {/* Contenido */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-zinc-400 text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[10px] font-mono text-blue-400 bg-blue-500/10 px-2 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  {project.github && (
                    <a href={project.github} className="text-zinc-400 hover:text-white transition-colors">
                      <FiGithub size={20} />
                    </a>
                  )}
                  {project.demo && (
                    <a href={project.demo} className="text-zinc-400 hover:text-white transition-colors">
                      <FiExternalLink size={20} />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};