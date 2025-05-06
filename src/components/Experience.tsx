import React from 'react';
import { useInView } from '../hooks/useInView';
import { Briefcase } from 'lucide-react';

const Experience: React.FC = () => {
  const { ref, inView } = useInView({ threshold: 0.1 });

  const experiences = [
    {
      id: 1,
      title: 'Sviluppatore Backend',
      company: 'EMM Informatica ITCONSULTING SRL',
      period: 'Ottobre 2021 - Presente',
      location: 'Napoli, Italia',
      description: [
        'Sviluppo frontend con Google Web Toolkit (GWT), Angular e Angular Material',
        'Sviluppo backend con Spring Boot e microservizi',
        'Integrazione con Azure Service Bus e Azure Functions',
        'Deploy applicazioni tramite Azure DevOps',
        'Utilizzo di tecnologie: Spring Boot, Azure, Docker, Java 8, Angular, TypeScript'
      ]
    },
    {
      id: 2,
      title: 'Programmatore Java - Consulente',
      company: 'Reply Retail CGMConsulting',
      period: 'Maggio 2021 - Ottobre 2021',
      location: 'Torino, Italia',
      description: [
        'Sviluppo e customizzazione software xstore e xcenter (Oracle)',
        'Manutenzione e installazione in ambiente test e produzione',
        'Gestione database Oracle e Microsoft SQL Server',
        'Utilizzo di Java 8/11, Oracle 12c/19c, Jenkins'
      ]
    },
    {
      id: 3,
      title: 'Programmatore Java - Consulente',
      company: 'Reply Iriscube CGMConsulting',
      period: 'Gennaio 2021 - Aprile 2021',
      location: 'Milano, Italia',
      description: [
        'Sviluppo servizi Backend SOAP/REST in Java',
        'Testing Automation con Ready Api e Karate',
        'Gestione database Oracle',
        'Utilizzo di Java 8/11, Oracle 12c, XML, WSDL'
      ]
    }
  ];

  return (
    <section id="experience" ref={ref} className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-500">
      <div className="container mx-auto px-6">
        <div className={`transition-all duration-1000 transform ${inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-gray-900 dark:text-white">
            Esperienza <span className="text-indigo-600 dark:text-indigo-400">Lavorativa</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-center max-w-3xl mx-auto mb-12">
            Il mio percorso professionale nel mondo dello sviluppo software
          </p>

          <div className="space-y-8">
            {experiences.map((exp) => (
              <div 
                key={exp.id}
                className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="p-3 bg-indigo-100 dark:bg-indigo-900/50 rounded-lg">
                      <Briefcase className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                    </div>
                  </div>
                  <div className="flex-grow">
                    <div className="flex flex-wrap justify-between items-start gap-2 mb-2">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                        {exp.title}
                      </h3>
                      <span className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900/50 text-indigo-800 dark:text-indigo-300 text-sm rounded-full">
                        {exp.period}
                      </span>
                    </div>
                    <div className="mb-4">
                      <h4 className="text-lg font-medium text-indigo-600 dark:text-indigo-400">
                        {exp.company}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">
                        {exp.location}
                      </p>
                    </div>
                    <ul className="space-y-2">
                      {exp.description.map((item, index) => (
                        <li 
                          key={index}
                          className="text-gray-600 dark:text-gray-300 flex items-start gap-2"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 dark:bg-indigo-400 mt-2 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;