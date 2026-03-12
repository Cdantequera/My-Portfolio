import { useState, useEffect } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { Logo } from '../logo/Logo';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Este efecto es clave: detecta si bajamos un poco la página para oscurecer el fondo del navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Limpiamos el evento cuando se desmonta el componente (buenas prácticas siempre)
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Sobre Mí', href: '#sobre-mi' },
    { name: 'Proyectos', href: '#experiencia' },
    { name: 'Contacto', href: '#contacto' },
  ];

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-slate-500/50 backdrop-blur-md shadow-lg py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        
        {/* Tu marca personal como logo */}
        <a href="#inicio" className="hover:scale-105 transition-transform">
          <Logo className="w-55 md:w-40 h-auto drop-shadow-lg" />
        </a>

        {/* Menú de escritorio */}
        <nav className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-slate-300 hover:text-blue-400 transition-colors font-medium text-sm uppercase tracking-wider"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Botón hamburguesa para móviles */}
        <button 
          className="md:hidden text-slate-300 hover:text-white text-2xl focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Menú desplegable versión mobile */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-slate-800 shadow-xl border-t border-slate-700">
          <nav className="flex flex-col p-4">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                // Si hacen click en un enlace, cerramos el menú para que no estorbe
                onClick={() => setIsOpen(false)} 
                className="py-3 text-slate-300 hover:text-blue-400 border-b border-slate-700/50 last:border-none font-medium"
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};