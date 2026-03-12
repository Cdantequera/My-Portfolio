import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiDownload, FiCheck, FiAlertCircle } from 'react-icons/fi';

// ── Rate limit client-side: máximo 1 descarga por sesión ──────────────────
// Esto no reemplaza un rate limit real de servidor, pero disuade el abuso casual.
// Para protección real en producción, usá Cloudflare o un proxy con rate limiting.
const MAX_DOWNLOADS_PER_SESSION = 1;
let sessionDownloadCount = 0;

type ButtonState = 'idle' | 'downloading' | 'done' | 'blocked';

export const CVDownloadButton = () => {
  const [state, setState] = useState<ButtonState>('idle');

  const handleDownload = () => {
    if (state === 'downloading' || state === 'done') return;

    // Control de abuso por sesión
    if (sessionDownloadCount >= MAX_DOWNLOADS_PER_SESSION) {
      setState('blocked');
      setTimeout(() => setState('idle'), 3000);
      return;
    }

    setState('downloading');
    sessionDownloadCount++;

    // Simula el tiempo de descarga antes de mostrar confirmación
    setTimeout(() => {
      setState('done');
      setTimeout(() => setState('idle'), 2500);
    }, 1200);
  };

  const configs = {
    idle: {
      label: 'Descargar CV',
      icon: FiDownload,
      className: 'border-blue-500/60 text-blue-400 bg-blue-500/5 hover:bg-blue-500/15 hover:border-blue-400',
      iconClass: '',
    },
    downloading: {
      label: 'Preparando...',
      icon: FiDownload,
      className: 'border-blue-500/40 text-blue-300 bg-blue-500/10 cursor-wait',
      iconClass: 'animate-bounce',
    },
    done: {
      label: '¡Listo!',
      icon: FiCheck,
      className: 'border-green-500/60 text-green-400 bg-green-500/10',
      iconClass: '',
    },
    blocked: {
      label: 'Intentá más tarde',
      icon: FiAlertCircle,
      className: 'border-red-500/40 text-red-400 bg-red-500/5 cursor-not-allowed',
      iconClass: '',
    },
  };

  const current = configs[state];
  const Icon = current.icon;

  return (
    <a
      href={state === 'idle' || state === 'downloading' ? '/cv_daniel_antequera.pdf' : undefined}
      download={state === 'idle' || state === 'downloading' ? 'CV_Daniel_Antequera.pdf' : undefined}
      onClick={handleDownload}
      aria-label="Descargar CV de Daniel Antequera"
      className={`
        inline-flex items-center gap-2.5 px-5 py-2.5
        border rounded-lg text-sm font-mono tracking-wider uppercase
        transition-all duration-300 select-none
        ${current.className}
      `}
    >
      <AnimatePresence mode="wait">
        <motion.span
          key={state}
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -4 }}
          transition={{ duration: 0.18 }}
          className="flex items-center gap-2.5"
        >
          <Icon size={15} className={current.iconClass} />
          {current.label}
        </motion.span>
      </AnimatePresence>
    </a>
  );
};