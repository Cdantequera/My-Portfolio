import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';
import { useEffect, useState } from 'react';

// Función de dispersión de letras (igual)
const getLetterTransform = (index: number) => {
  const seed = (index * 137.508) % 360;
  const radians = (seed * Math.PI) / 180;
  const distance = 80 + (index * 23) % 120;
  return {
    x: Math.cos(radians) * distance,
    y: Math.sin(radians) * distance - 60,
    rotate: ((index * 73) % 180) - 90,
  };
};

interface ScatteredLetterProps {
  char: string;
  index: number;
  scrollY: MotionValue<number>;
  scrollRange: [number, number];
}

const ScatteredLetter = ({ char, index, scrollY, scrollRange }: ScatteredLetterProps) => {
  const { x, y, rotate } = getLetterTransform(index);
  const delayOffset = Math.abs(index - 6) * 15;
  const start = scrollRange[0] + delayOffset;
  const end = scrollRange[1] - delayOffset * 0.3;

  const letterX = useTransform(scrollY, [start, end], [0, x]);
  const letterY = useTransform(scrollY, [start, end], [0, y]);
  const letterRotate = useTransform(scrollY, [start, end], [0, rotate]);
  const letterOpacity = useTransform(scrollY, [start, end * 0.8], [1, 0]);
  const letterScale = useTransform(scrollY, [start, end], [1, 0.3]);

  if (char === ' ') return <span className="inline-block w-4 md:w-6" />;

  return (
    <motion.span
      style={{
        x: letterX,
        y: letterY,
        rotate: letterRotate,
        opacity: letterOpacity,
        scale: letterScale,
        display: 'inline-block',
        transformOrigin: 'center center',
      }}
    >
      {char}
    </motion.span>
  );
};

// Subtítulo typewriter (lo dejamos porque es vistoso)
const TYPEWRITER_WORDS = ['Full Stack Developer', 'Freelancer', 'Problem Solver', 'Creative Coder'];

const TypewriterSubtitle = () => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);

  useEffect(() => {
    if (subIndex === TYPEWRITER_WORDS[index].length + 1 && !reverse) {
      setTimeout(() => setReverse(true), 0);
      return;
    }
    if (subIndex === 0 && reverse) {
      setTimeout(() => {
        setReverse(false);
        setIndex((prev) => (prev + 1) % TYPEWRITER_WORDS.length);
      }, 0);
      return;
    }
    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, 100);
    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse]);

  return (
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.8 }}
      className="text-xl md:text-2xl text-zinc-500 mb-8 max-w-2xl mx-auto h-8"
    >
      {TYPEWRITER_WORDS[index].substring(0, subIndex)}
      <span className="animate-pulse">|</span>
    </motion.p>
  );
};

export const Hero = () => {
  const { scrollY } = useScroll();

  // Transformaciones de scroll (foto)
  const imageOpacity = useTransform(scrollY, [0, 300], [1, 0]);
  const imageY = useTransform(scrollY, [0, 300], [0, -100]);
  const imageScale = useTransform(scrollY, [0, 300], [1, 0.8]);

  const name = "Daniel Antequera";
  const letters = name.split('');

  return (
    <section
      id="inicio"
      className="relative h-screen flex flex-col items-center justify-center overflow-hidden bg-slate-900 text-white pt-5 md:pt-0"
    >
      {/* Fondo con gradiente animado (alternativa a partículas) */}
      <motion.div
        style={{ y: useTransform(scrollY, [0, 1000], [0, 300]) }}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-500/20 via-slate-900 to-black" />
      </motion.div>

      {/* Fondo con líneas sutiles (grid) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(59,130,246,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(59,130,246,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

      <div className="z-10 flex flex-col items-center justify-center gap-10 md:gap-5 px-4 md:pt-16">
        
        {/* Foto de perfil sin animación 3D, solo scroll */}
        <motion.div
          style={{
            opacity: imageOpacity,
            y: imageY,
            scale: imageScale,
          }}
          className="w-52 h-52 md:w-56 md:h-56 overflow-hidden border-4 border-blue-500/30 shadow-[0_0_30px_rgba(59,130,246,0.3)] rounded-full"
        >
          <img
            src="https://cdantequera.edgeone.app/WhatsApp%20Image%202025-12-02%20at%2018.08.49.jpeg"
            alt="Daniel Antequera"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Nombre con letras que se desintegran */}
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight text-blue-400 overflow-visible">
            {letters.map((char, index) => (
              <ScatteredLetter
                key={index}
                char={char}
                index={index}
                scrollY={scrollY}
                scrollRange={[30, 380]}
              />
            ))}
          </h1>

          {/* Subtítulo animado */}
          <TypewriterSubtitle />
        </div>

      </div>
    </section>
  );
};