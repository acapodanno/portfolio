import React from 'react';
import { ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold">Alessandro Capodanno</h2>
            <p className="text-gray-400 mt-1">Sviluppatore Backend & Frontend</p>
          </div>
          
          <div className="flex gap-8 mb-6 md:mb-0">
            <a href="#about" className="text-gray-400 hover:text-white transition-colors">Chi Sono</a>
            <a href="#skills" className="text-gray-400 hover:text-white transition-colors">Competenze</a>
            <a href="#experience" className="text-gray-400 hover:text-white transition-colors">Esperienza</a>
            <a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contatti</a>
          </div>
          
          <button
            onClick={scrollToTop}
            className="bg-indigo-600 hover:bg-indigo-700 p-3 rounded-full transition-colors"
            aria-label="Torna su"
          >
            <ArrowUp size={20} />
          </button>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Alessandro Capodanno. Tutti i diritti riservati.
          </p>
          
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="GitHub">
              GitHub
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="LinkedIn">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;