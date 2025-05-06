import React, { useState } from 'react';
import { useInView } from '../hooks/useInView';

interface Skill {
  name: string;
  level: number;
  category: 'frontend' | 'backend' | 'database' | 'cloud';
}

const Skills: React.FC = () => {
  const { ref, inView } = useInView({ threshold: 0.1 });
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const skills: Skill[] = [
    // Backend
    { name: 'Java', level: 90, category: 'backend' },
    { name: 'Spring Boot', level: 85, category: 'backend' },
    { name: 'Microservizi', level: 80, category: 'backend' },
    { name: 'REST API', level: 85, category: 'backend' },
    
    // Frontend
    { name: 'Angular', level: 85, category: 'frontend' },
    { name: 'React Native', level: 80, category: 'frontend' },
    { name: 'TypeScript', level: 80, category: 'frontend' },
    { name: 'HTML/CSS', level: 85, category: 'frontend' },
    
    // Database
    { name: 'SQL Server', level: 85, category: 'database' },
    { name: 'Oracle SQL', level: 80, category: 'database' },
    { name: 'MySQL', level: 85, category: 'database' },
    
    // Cloud & DevOps
    { name: 'Azure', level: 80, category: 'cloud' },
    { name: 'Docker', level: 75, category: 'cloud' },
    { name: 'Azure DevOps', level: 80, category: 'cloud' },
    { name: 'CI/CD', level: 75, category: 'cloud' },
    { name: 'Cloud Architecture', level: 70, category: 'cloud' },
  ];

  const filteredSkills = activeFilter === 'all'
    ? skills
    : skills.filter(skill => skill.category === activeFilter);

  const categories = [
    { id: 'all', name: 'Tutte le Skills' },
    { id: 'backend', name: 'Backend' },
    { id: 'frontend', name: 'Frontend' },
    { id: 'database', name: 'Database' },
    { id: 'cloud', name: 'Cloud & DevOps' },
  ];

  return (
    <section id="skills" ref={ref} className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-500">
      <div className="container mx-auto px-6">
        <div className={`transition-all duration-1000 transform ${inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-gray-900 dark:text-white">
            Le Mie <span className="text-indigo-600 dark:text-indigo-400">Competenze</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-center max-w-3xl mx-auto mb-12">
            Una panoramica delle mie competenze tecniche e della mia esperienza professionale, 
            con focus particolare su sviluppo backend, cloud e DevOps.
          </p>
          
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeFilter === category.id
                    ? 'bg-indigo-600 text-white shadow-md'
                    : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredSkills.map((skill) => (
              <div 
                key={skill.name}
                className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-lg font-medium text-gray-800 dark:text-white">{skill.name}</h3>
                  <span className="text-indigo-600 dark:text-indigo-400 font-semibold">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2.5">
                  <div 
                    className="bg-gradient-to-r from-indigo-500 to-blue-500 h-2.5 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: inView ? `${skill.level}%` : '0%' }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;