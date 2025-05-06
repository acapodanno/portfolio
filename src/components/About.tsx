import React from 'react';
import { useInView } from '../hooks/useInView';

const About: React.FC = () => {
  const { ref, inView } = useInView({ threshold: 0.2 });

  return (
    <section id="about" ref={ref} className="py-20 bg-white dark:bg-gray-900 transition-colors duration-500">
      <div className="container mx-auto px-6">
        <div className={`transition-all duration-1000 transform ${inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-900 dark:text-white">
            Chi <span className="text-indigo-600 dark:text-indigo-400">Sono</span>
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="w-full h-96 bg-gray-200 dark:bg-gray-800 rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="https://images.pexels.com/photos/5483077/pexels-photo-5483077.jpeg" 
                  alt="Professional portrait" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg -z-10"></div>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">La Mia Storia</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Sono uno sviluppatore software con esperienza nello sviluppo di applicazioni web e mobile. 
                Attualmente lavoro come sviluppatore backend presso itconsulting SRL, 
                dove mi occupo di sviluppo con Spring Boot, microservizi e Azure.
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                La mia formazione include una laurea in Informatica presso l'Università degli Studi di Salerno 
                e diverse certificazioni professionali. Ho partecipato al corso Apple Foundation Program e ho 
                completato il Data Scientist Starter Kit di DataMasters.
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Attualmente sto per iniziare il Master in Cloud DevOps presso Talent Garden, 
                per approfondire le mie competenze in ambito cloud e DevOps. Sono sempre alla ricerca 
                di nuove sfide e opportunità per crescere professionalmente.
              </p>
              
              <div className="pt-4">
                <h4 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">Tecnologie Principali</h4>
                <div className="flex flex-wrap gap-2">
                  {['Spring Boot', 'Java', 'Angular', 'React Native', 'Azure', 'DevOps', 'Cloud'].map((tech) => (
                    <span key={tech} className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;