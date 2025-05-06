import React, { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-sky-50 dark:from-gray-900 dark:to-gray-800 transition-colors duration-500"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-pink-300/20 dark:bg-pink-600/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-72 h-72 bg-blue-300/20 dark:bg-blue-600/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className={`text-center transform transition-all duration-1000 ${visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h1 className="text-5xl md:text-7xl font-bold mb-3 text-gray-900 dark:text-white">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-sky-600 dark:from-indigo-400 dark:to-sky-400">
              Alessandro Capodanno
            </span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-medium mb-6 text-gray-700 dark:text-gray-200">
            Sviluppatore Backend & Frontend
          </h2>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-10">
            Specializzato nello sviluppo di applicazioni web e mobile con Spring Boot, Angular e React Native.
            Appassionato di tecnologia e sempre alla ricerca di nuove sfide.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="#projects"
              className="px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-full transition-all duration-300 shadow-lg hover:shadow-indigo-500/30 transform hover:-translate-y-1"
            >
              I Miei Progetti
            </a>
            <a
              href="#contact"
              className="px-8 py-3 bg-white dark:bg-gray-800 text-indigo-600 dark:text-indigo-400 font-medium rounded-full border border-indigo-200 dark:border-gray-700 hover:border-indigo-400 dark:hover:border-indigo-600 transition-all duration-300 shadow-lg hover:shadow-indigo-500/10 transform hover:-translate-y-1"
            >
              Contattami
            </a>
          </div>
        </div>
      </div>

      <a 
        href="#about" 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300 animate-bounce"
        aria-label="Scroll to about section"
      >
        <ChevronDown size={32} />
      </a>
    </section>
  );
};

export default Hero;