import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub, FiLayers } from 'react-icons/fi';

interface ProjectProps {
  title: string;
  role: string;
  description: string;
  tags: string[];
  link?: string;
  github?: string;
  status: 'active' | 'completed' | 'collaborating';
}

export const ProjectCard = ({ title, role, description, tags, link, github, status }: ProjectProps) => {
  return (
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
          status === 'active' ? 'border-green-500/50 text-green-400 bg-green-500/5' : 'border-blue-500/50 text-blue-400 bg-blue-500/5'
        }`}>
          {status.toUpperCase()}
        </span>
      </div>

      <h3 className="text-xl font-bold text-white mb-1 group-hover:text-blue-400 transition-colors">{title}</h3>
      <p className="text-blue-500/80 text-xs font-mono mb-4 uppercase tracking-wider">{role}</p>
      
      <p className="text-zinc-400 text-sm leading-relaxed mb-6">
        {description}
      </p>

      <div className="flex flex-wrap gap-2 mb-6">
        {tags.map(tag => (
          <span key={tag} className="text-[10px] bg-slate-900 text-zinc-500 px-2 py-1 rounded border border-slate-700">
            {tag}
          </span>
        ))}
      </div>

      <div className="flex gap-4 border-t border-slate-700/50 pt-4">
        {link && <a href={link} className="text-zinc-500 hover:text-white transition-colors"><FiExternalLink size={18} /></a>}
        {github && <a href={github} className="text-zinc-500 hover:text-white transition-colors"><FiGithub size={18} /></a>}
      </div>
    </motion.div>
  );
};